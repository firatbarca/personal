import assert from "node:assert/strict";
import test from "node:test";

import {
  createHandler,
  createMemoryLimiter,
  isAllowedOrigin,
  isLikelyBot,
  normalizePath,
} from "./index.js";

const allowedOrigin = "https://firatbarca.com";
const browserAgent = "Mozilla/5.0 AppleWebKit/605.1.15 Safari/605.1.15";

function viewRequest({ origin = allowedOrigin, userAgent = browserAgent, path = "/" } = {}) {
  return new Request("https://project.supabase.co/functions/v1/page-counter/view", {
    method: "POST",
    headers: {
      Origin: origin,
      "User-Agent": userAgent,
      "X-Forwarded-For": "203.0.113.10",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ path }),
  });
}

test("normalizes equivalent index routes", () => {
  assert.equal(normalizePath("/index.html"), "/");
  assert.equal(normalizePath("/blog/index.html?ignored=true"), "/blog/");
  assert.equal(normalizePath("//other.example/path"), null);
});

test("allows only configured origins", () => {
  assert.equal(isAllowedOrigin(allowedOrigin), true);
  assert.equal(isAllowedOrigin("https://example.com"), false);
});

test("filters obvious automated user agents", () => {
  assert.equal(isLikelyBot(viewRequest({ userAgent: "Googlebot/2.1" })), true);
  assert.equal(isLikelyBot(viewRequest()), false);
});

test("records aggregate views without setting cookies", async () => {
  const handler = createHandler({
    limiter: { limitRequest: async () => true },
    recordView: async () => ({ counted: true, pathViews: 4, total: 12 }),
  });
  const response = await handler(viewRequest({ path: "/blog/" }));

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Set-Cookie"), null);
  assert.equal(response.headers.get("Access-Control-Allow-Origin"), allowedOrigin);
  assert.deepEqual(await response.json(), {
    counted: true,
    path: "/blog/",
    pathViews: 4,
    total: 12,
  });
});

test("rejects writes from other origins", async () => {
  let called = false;
  const handler = createHandler({
    recordView: async () => {
      called = true;
      return { counted: true, pathViews: 1, total: 1 };
    },
  });
  const response = await handler(viewRequest({ origin: "https://example.com" }));

  assert.equal(response.status, 403);
  assert.equal(called, false);
});

test("does not count bots", async () => {
  let called = false;
  const handler = createHandler({
    recordView: async () => {
      called = true;
      return { counted: true, pathViews: 1, total: 1 };
    },
  });
  const response = await handler(viewRequest({ userAgent: "ExampleBot/1.0" }));

  assert.equal(response.status, 202);
  assert.equal(called, false);
  assert.deepEqual(await response.json(), { counted: false });
});

test("enforces the in-memory per-source limiter", async () => {
  const limiter = createMemoryLimiter({ limit: 1 });
  const handler = createHandler({
    limiter,
    recordView: async () => ({ counted: true, pathViews: 1, total: 1 }),
  });

  assert.equal((await handler(viewRequest())).status, 200);
  assert.equal((await handler(viewRequest())).status, 429);
});

test("enforces the database-wide abuse cap", async () => {
  const handler = createHandler({
    limiter: { limitRequest: async () => true },
    recordView: async () => ({ counted: false, pathViews: 0, total: 25 }),
  });

  assert.equal((await handler(viewRequest())).status, 429);
});

test("returns the public aggregate", async () => {
  const handler = createHandler({ readTotal: async () => 42 });
  const response = await handler(
    new Request("https://project.supabase.co/functions/v1/page-counter/count")
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { total: 42 });
});
