const API_ROOT = "https://api.kit.com/v4";

export function decodeXml(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) =>
      String.fromCodePoint(code[0].toLowerCase() === "x" ? Number.parseInt(code.slice(1), 16) : Number(code))
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function element(block, name) {
  const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"));
  return decodeXml(match?.[1]?.trim() || "");
}

export function parseAtomEntries(xml) {
  return Array.from(String(xml).matchAll(/<entry>([\s\S]*?)<\/entry>/gi), (match) => {
    const block = match[1];
    const link = block.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*\/?\s*>/i)?.[1] || "";
    return {
      title: element(block, "title"),
      url: decodeXml(link),
      id: element(block, "id"),
      updated: element(block, "updated"),
      summary: element(block, "summary"),
    };
  });
}

export function eligibleEntries(entries, cutoff) {
  const cutoffTime = new Date(cutoff).getTime();
  if (!Number.isFinite(cutoffTime)) throw new Error("KIT_NOTIFY_AFTER must be a valid ISO date");

  return entries
    .filter((entry) => {
      const updated = new Date(entry.updated).getTime();
      if (!Number.isFinite(updated) || updated <= cutoffTime) return false;
      try {
        const url = new URL(entry.url);
        return url.origin === "https://firatbarca.com" && url.pathname.startsWith("/blog/");
      } catch {
        return false;
      }
    })
    .sort((a, b) => new Date(a.updated) - new Date(b.updated));
}

export function markerFor(entry) {
  return `firatbarca-feed:${entry.id || entry.url}`;
}

export function scheduledSendAt(now, index, delayMinutes) {
  return new Date(now.getTime() + (delayMinutes * 60_000) + (index * 60_000)).toISOString();
}

export function broadcastPayload(entry, tagId, sendAt) {
  const title = escapeHtml(entry.title);
  const summary = escapeHtml(entry.summary);
  const url = escapeHtml(entry.url);

  return {
    subject: `New post: ${entry.title}`.slice(0, 150),
    preview_text: entry.summary.slice(0, 140),
    description: markerFor(entry),
    content: `<p>New on Firat Barca:</p><h1><a href="${url}">${title}</a></h1><p>${summary}</p><p><a href="${url}">Read the full post →</a></p>`,
    public: false,
    published_at: entry.updated,
    send_at: sendAt,
    subscriber_filter: [{
      all: [{ type: "tag", ids: [tagId] }],
      any: null,
      none: null,
    }],
  };
}

async function apiRequest(pathOrUrl, options = {}) {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) throw new Error("KIT_API_KEY is required");

  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${API_ROOT}${pathOrUrl}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Kit-Api-Key": apiKey,
      ...options.headers,
    },
  });

  const body = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    const reason = body?.errors?.join("; ") || `HTTP ${response.status}`;
    throw new Error(`Kit API request failed: ${reason}`);
  }
  return body;
}

async function paginated(path, key) {
  const records = [];
  let url = new URL(`${API_ROOT}${path}`);
  url.searchParams.set("per_page", "500");

  while (url) {
    const body = await apiRequest(url.toString());
    records.push(...(body?.[key] || []));
    const cursor = body?.pagination?.has_next_page ? body.pagination.end_cursor : null;
    if (!cursor) break;
    url.searchParams.set("after", cursor);
  }
  return records;
}

async function ensureAudience(formId, tagName) {
  const tagBody = await apiRequest("/tags", {
    method: "POST",
    body: JSON.stringify({ name: tagName }),
  });
  const tagId = tagBody.tag.id;
  const formSubscribers = await paginated(`/forms/${formId}/subscribers?status=active&slim=true`, "subscribers");
  const taggedSubscribers = await paginated(`/tags/${tagId}/subscribers?status=active&slim=true`, "subscribers");
  const taggedIds = new Set(taggedSubscribers.map((subscriber) => subscriber.id));
  const missing = formSubscribers.filter((subscriber) => !taggedIds.has(subscriber.id));

  for (const subscriber of missing) {
    await apiRequest(`/tags/${tagId}/subscribers/${subscriber.id}`, {
      method: "POST",
      body: "{}",
    });
    // API keys are limited to 120 requests per rolling minute.
    await new Promise((resolve) => setTimeout(resolve, 550));
  }

  console.log(`Kit audience ready: ${formSubscribers.length} active blog subscriber(s), ${missing.length} newly tagged.`);
  return tagId;
}

async function main() {
  const feedUrl = process.env.BLOG_FEED_URL || "https://firatbarca.com/feed.xml";
  const formId = Number.parseInt(process.env.KIT_FORM_ID || "9692717", 10);
  const tagName = process.env.KIT_TAG_NAME || "Firat Barca blog subscribers";
  const cutoff = process.env.KIT_NOTIFY_AFTER || "2026-08-29T00:00:00Z";
  const delayMinutes = Number.parseInt(process.env.KIT_SEND_DELAY_MINUTES || "10", 10);

  if (!Number.isSafeInteger(formId) || formId <= 0) throw new Error("KIT_FORM_ID is invalid");
  if (!Number.isSafeInteger(delayMinutes) || delayMinutes < 1 || delayMinutes > 60) {
    throw new Error("KIT_SEND_DELAY_MINUTES must be an integer from 1 to 60");
  }

  const feedResponse = await fetch(feedUrl, { headers: { Accept: "application/atom+xml, application/xml" } });
  if (!feedResponse.ok) throw new Error(`Unable to read blog feed: HTTP ${feedResponse.status}`);
  const entries = eligibleEntries(parseAtomEntries(await feedResponse.text()), cutoff);

  const tagId = await ensureAudience(formId, tagName);
  const broadcasts = await paginated("/broadcasts", "broadcasts");
  const existingMarkers = new Set(broadcasts.map((broadcast) => broadcast.description).filter(Boolean));
  const pending = entries.filter((entry) => !existingMarkers.has(markerFor(entry)));

  const scheduleBase = new Date();
  for (const [index, entry] of pending.entries()) {
    const sendAt = scheduledSendAt(scheduleBase, index, delayMinutes);
    await apiRequest("/broadcasts", {
      method: "POST",
      body: JSON.stringify(broadcastPayload(entry, tagId, sendAt)),
    });
    console.log(`Scheduled Kit broadcast for: ${entry.title} at ${sendAt}`);
  }

  if (!pending.length) console.log("No new published posts require a Kit broadcast.");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
