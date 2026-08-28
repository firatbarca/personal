const FALLBACK_ALLOWED_ORIGINS = new Set([
  "https://firatbarca.com",
  "https://www.firatbarca.com",
]);

const BOT_USER_AGENT =
  /(?:bot|crawler|spider|slurp|headless|lighthouse|pagespeed|pingdom|uptime|monitor|curl|wget|python-requests|go-http-client)/i;

function configuredOrigins(env) {
  const configured = String(env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return configured.length ? new Set(configured) : FALLBACK_ALLOWED_ORIGINS;
}

export function isAllowedOrigin(origin, env = {}) {
  return Boolean(origin && configuredOrigins(env).has(origin));
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

async function dailyRateLimitKey(request) {
  const address = request.headers.get("CF-Connecting-IP") || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const bytes = new TextEncoder().encode(`${day}:${address}`);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function responseHeaders(origin, env, cacheControl = "no-store") {
  const headers = new Headers({
    "Cache-Control": cacheControl,
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Robots-Tag": "noindex, nofollow",
  });

  if (isAllowedOrigin(origin, env)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Max-Age", "86400");
    headers.set("Vary", "Origin");
  }

  return headers;
}

function configuredStartTotal(env) {
  const value = Number.parseInt(String(env.COUNTER_START_TOTAL || "0"), 10);
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

async function baselineViews(env) {
  const existing = await env.COUNTER_DB.prepare(
    "SELECT value FROM counter_settings WHERE key = 'baseline_offset'"
  ).first();

  if (existing?.value != null) return Number(existing.value || 0);

  const raw = await env.COUNTER_DB.prepare(
    "SELECT COALESCE(SUM(views), 0) AS total FROM page_views"
  ).first();
  const offset = Math.max(0, configuredStartTotal(env) - Number(raw?.total || 0));

  await env.COUNTER_DB.prepare(
    `INSERT INTO counter_settings (key, value, updated_at)
     VALUES ('baseline_offset', ?, CURRENT_TIMESTAMP)
     ON CONFLICT(key) DO NOTHING`
  ).bind(offset).run();

  const stored = await env.COUNTER_DB.prepare(
    "SELECT value FROM counter_settings WHERE key = 'baseline_offset'"
  ).first();

  return Number(stored?.value ?? offset);
}

function json(data, status, origin, env, cacheControl) {
  return new Response(JSON.stringify(data), {
    status,
    headers: responseHeaders(origin, env, cacheControl),
  });
}

async function readTotal(env) {
  const baseline = await baselineViews(env);
  const row = await env.COUNTER_DB.prepare(
    "SELECT COALESCE(SUM(views), 0) AS total FROM page_views"
  ).first();

  return Number(row?.total || 0) + baseline;
}

async function recordView(path, env) {
  const baseline = await baselineViews(env);
  const results = await env.COUNTER_DB.batch([
    env.COUNTER_DB.prepare(
      `INSERT INTO page_views (path, views, updated_at)
       VALUES (?, 1, CURRENT_TIMESTAMP)
       ON CONFLICT(path) DO UPDATE SET
         views = page_views.views + 1,
         updated_at = CURRENT_TIMESTAMP
       RETURNING views`
    ).bind(path),
    env.COUNTER_DB.prepare(
      "SELECT COALESCE(SUM(views), 0) AS total FROM page_views"
    ),
  ]);

  return {
    pathViews: Number(results[0]?.results?.[0]?.views || 0),
    total: Number(results[1]?.results?.[0]?.total || 0) + baseline,
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      if (!isAllowedOrigin(origin, env)) {
        return json({ error: "Origin not allowed" }, 403, origin, env);
      }

      return new Response(null, {
        status: 204,
        headers: responseHeaders(origin, env),
      });
    }

    if (url.pathname === "/count" && request.method === "GET") {
      if (origin && !isAllowedOrigin(origin, env)) {
        return json({ error: "Origin not allowed" }, 403, origin, env);
      }

      try {
        const total = await readTotal(env);
        return json({ total }, 200, origin, env, "public, max-age=30");
      } catch (error) {
        console.error("Unable to read page-view total", error instanceof Error ? error.message : "Unknown error");
        return json({ error: "Counter unavailable" }, 503, origin, env);
      }
    }

    if (url.pathname !== "/view" || request.method !== "POST") {
      return json({ error: "Not found" }, 404, origin, env);
    }

    if (!isAllowedOrigin(origin, env)) {
      return json({ error: "Origin not allowed" }, 403, origin, env);
    }

    if (isLikelyBot(request)) {
      return json({ counted: false }, 202, origin, env);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 1024) {
      return json({ error: "Request too large" }, 413, origin, env);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return json({ error: "Invalid request" }, 400, origin, env);
    }

    const path = normalizePath(payload?.path);
    if (!path) {
      return json({ error: "Invalid path" }, 400, origin, env);
    }

    if (env.PAGE_VIEW_LIMITER) {
      const key = await dailyRateLimitKey(request);
      const { success } = await env.PAGE_VIEW_LIMITER.limit({ key });
      if (!success) {
        return json({ error: "Rate limit exceeded" }, 429, origin, env);
      }
    }

    try {
      const counts = await recordView(path, env);
      return json({ counted: true, path, ...counts }, 200, origin, env);
    } catch (error) {
      console.error("Unable to record page view", error instanceof Error ? error.message : "Unknown error");
      return json({ error: "Counter unavailable" }, 503, origin, env);
    }
  },
};
