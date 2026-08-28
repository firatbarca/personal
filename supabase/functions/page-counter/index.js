const FALLBACK_ALLOWED_ORIGINS = new Set([
  "https://firatbarca.com",
  "https://www.firatbarca.com",
]);

const BOT_USER_AGENT =
  /(?:bot|crawler|spider|slurp|headless|lighthouse|pagespeed|pingdom|uptime|monitor|curl|wget|python-requests|go-http-client)/i;

function configuredOrigins() {
  const configured = String(readEnvironment("ALLOWED_ORIGINS") || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return configured.length ? new Set(configured) : FALLBACK_ALLOWED_ORIGINS;
}

function readEnvironment(name) {
  if (typeof Deno === "undefined") return undefined;
  return Deno.env.get(name);
}

export function isAllowedOrigin(origin) {
  return Boolean(origin && configuredOrigins().has(origin));
}

export function normalizePath(value) {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//")) {
    return null;
  }

  if (value.length > 300) return null;

  try {
    const parsed = new URL(value, "https://firatbarca.com");
    let path = parsed.pathname.replace(/\/{2,}/g, "/");

    if (path === "/index.html") path = "/";
    else if (path.endsWith("/index.html")) path = path.slice(0, -10);

    return path.slice(0, 256);
  } catch {
    return null;
  }
}

export function isLikelyBot(request) {
  const userAgent = request.headers.get("User-Agent") || "";
  return !userAgent || BOT_USER_AGENT.test(userAgent);
}

function sourceAddress(request) {
  const forwarded = request.headers.get("X-Forwarded-For");
  if (forwarded) return forwarded.split(",", 1)[0].trim();

  return (
    request.headers.get("X-Real-IP") ||
    request.headers.get("CF-Connecting-IP") ||
    "unknown"
  );
}

async function rotatingSourceKey(request) {
  const day = new Date().toISOString().slice(0, 10);
  const bytes = new TextEncoder().encode(`${day}:${sourceAddress(request)}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export function createMemoryLimiter({ limit = 10, windowMs = 60_000, now = Date.now } = {}) {
  const windows = new Map();

  return {
    async limitRequest(key) {
      const currentTime = now();

      for (const [storedKey, window] of windows) {
        if (currentTime - window.startedAt >= windowMs) windows.delete(storedKey);
      }

      const existing = windows.get(key);

      if (!existing || currentTime - existing.startedAt >= windowMs) {
        windows.set(key, { startedAt: currentTime, count: 1 });
        return true;
      }

      existing.count += 1;
      return existing.count <= limit;
    },
  };
}

function responseHeaders(origin, cacheControl = "no-store") {
  const headers = new Headers({
    "Cache-Control": cacheControl,
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow",
  });

  if (isAllowedOrigin(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Max-Age", "86400");
    headers.set("Vary", "Origin");
  }

  return headers;
}

function json(data, status, origin, cacheControl) {
  return new Response(JSON.stringify(data), {
    status,
    headers: responseHeaders(origin, cacheControl),
  });
}

async function databaseRpc(name, body) {
  const baseUrl = readEnvironment("SUPABASE_URL");
  const serviceKey =
    readEnvironment("SUPABASE_SERVICE_ROLE_KEY") || readEnvironment("SUPABASE_SECRET_KEY");

  if (!baseUrl || !serviceKey) throw new Error("Supabase runtime credentials unavailable");

  const response = await fetch(`${baseUrl}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error(`Database RPC failed with ${response.status}`);
  return response.json();
}

async function readTotalFromDatabase() {
  const result = await databaseRpc("get_page_view_total", {});
  return Number(result || 0);
}

async function recordViewInDatabase(path) {
  const result = await databaseRpc("record_page_view", { request_path: path });
  const row = Array.isArray(result) ? result[0] : result;

  return {
    counted: row?.counted === true,
    pathViews: Number(row?.path_views || 0),
    total: Number(row?.total || 0),
  };
}

const defaultLimiter = createMemoryLimiter();

export function createHandler({
  limiter = defaultLimiter,
  readTotal = readTotalFromDatabase,
  recordView = recordViewInDatabase,
} = {}) {
  return async function handleRequest(request) {
    const url = new URL(request.url);
    const route = url.pathname.split("/").filter(Boolean).at(-1);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      if (!isAllowedOrigin(origin)) {
        return json({ error: "Origin not allowed" }, 403, origin);
      }

      return new Response(null, { status: 204, headers: responseHeaders(origin) });
    }

    if (route === "count" && request.method === "GET") {
      if (origin && !isAllowedOrigin(origin)) {
        return json({ error: "Origin not allowed" }, 403, origin);
      }

      try {
        return json({ total: await readTotal() }, 200, origin, "public, max-age=30");
      } catch {
        console.error("Unable to read page-view total");
        return json({ error: "Counter unavailable" }, 503, origin);
      }
    }

    if (route !== "view" || request.method !== "POST") {
      return json({ error: "Not found" }, 404, origin);
    }

    if (!isAllowedOrigin(origin)) {
      return json({ error: "Origin not allowed" }, 403, origin);
    }

    if (isLikelyBot(request)) {
      return json({ counted: false }, 202, origin);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 1024) {
      return json({ error: "Request too large" }, 413, origin);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Invalid request" }, 400, origin);
    }

    const path = normalizePath(payload?.path);
    if (!path) {
      return json({ error: "Invalid path" }, 400, origin);
    }

    const sourceKey = await rotatingSourceKey(request);
    if (!(await limiter.limitRequest(sourceKey))) {
      return json({ error: "Rate limit exceeded" }, 429, origin);
    }

    try {
      const counts = await recordView(path);
      if (!counts.counted) {
        return json({ error: "Rate limit exceeded" }, 429, origin);
      }

      return json({ counted: true, path, ...counts }, 200, origin);
    } catch {
      console.error("Unable to record page view");
      return json({ error: "Counter unavailable" }, 503, origin);
    }
  };
}

if (typeof Deno !== "undefined") {
  Deno.serve(createHandler());
}
