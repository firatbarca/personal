import assert from "node:assert/strict";
import test from "node:test";

import worker, { isAllowedOrigin, isLikelyBot, normalizePath } from "../src/index.js";

class Statement {
  constructor(database, sql, values = []) {
    this.database = database;
    this.sql = sql;
    this.values = values;
  }

  bind(...values) {
    return new Statement(this.database, this.sql, values);
  }

  async first() {
    if (!this.sql.includes("SUM(views)")) return null;
    return { total: this.database.total() };
  }
}

class MockD1 {
  constructor() {
    this.rows = new Map();
  }

  prepare(sql) {
    return new Statement(this, sql);
  }

  total() {
    return Array.from(this.rows.values()).reduce((sum, views) => sum + views, 0);
  }

  async batch(statements) {
    const path = statements[0].values[0];
    const pathViews = (this.rows.get(path) || 0) + 1;
    this.rows.set(path, pathViews);

    return [
      { success: true, results: [{ views: pathViews }] },
      { success: true, results: [{ total: this.total() }] },
    ];
  }
}

function environment({ rateLimit = true } = {}) {
  return {
    ALLOWED_ORIGINS: "https://firatbarca.com",
    COUNTER_DB: new MockD1(),
    PAGE_VIEW_LIMITER: {
      async limit() {
        return { success: rateLimit };
      },
    },
  };
}

function pageViewRequest(path = "/blog/") {
  return new Request("https://counter.firatbarca.com/view", {
    method: "POST",
    headers: {
      "CF-Connecting-IP": "203.0.113.10",
      "Content-Type": "text/plain;charset=UTF-8",
      Origin: "https://firatbarca.com",
      "User-Agent": "Mozilla/5.0 Test Browser",
    },
    body: JSON.stringify({ path }),
  });
}

test("normalizes equivalent index routes", () => {
  assert.equal(normalizePath("/index.html"), "/");
  assert.equal(normalizePath("/blog/index.html"), "/blog/");
  assert.equal(normalizePath("/blog/post/?source=test"), "/blog/post/");
  assert.equal(normalizePath("https://example.com/"), null);
  assert.equal(normalizePath("//example.com/"), null);
});

test("allows only configured origins", () => {
  const env = { ALLOWED_ORIGINS: "https://firatbarca.com" };
  assert.equal(isAllowedOrigin("https://firatbarca.com", env), true);
  assert.equal(isAllowedOrigin("https://example.com", env), false);
});

test("filters obvious automated user agents", () => {
  const bot = new Request("https://counter.firatbarca.com/view", {
    headers: { "User-Agent": "ExampleBot/1.0" },
  });
  const browser = new Request("https://counter.firatbarca.com/view", {
    headers: { "User-Agent": "Mozilla/5.0 Test Browser" },
  });

  assert.equal(isLikelyBot(bot), true);
  assert.equal(isLikelyBot(browser), false);
});

test("records aggregate views without visitor records", async () => {
  const env = environment();
  const first = await worker.fetch(pageViewRequest("/blog/index.html"), env);
  const second = await worker.fetch(pageViewRequest("/solutions/"), env);
  const firstBody = await first.json();
  const secondBody = await second.json();

  assert.equal(first.status, 200);
  assert.equal(firstBody.path, "/blog/");
  assert.equal(firstBody.total, 1);
  assert.equal(secondBody.total, 2);
  assert.deepEqual(Array.from(env.COUNTER_DB.rows.keys()), ["/blog/", "/solutions/"]);
  assert.equal(first.headers.has("Set-Cookie"), false);
});

test("rejects writes from other origins", async () => {
  const env = environment();
  const request = pageViewRequest();
  request.headers.set("Origin", "https://example.com");
  const response = await worker.fetch(request, env);

  assert.equal(response.status, 403);
  assert.equal(env.COUNTER_DB.total(), 0);
});

test("does not count bots", async () => {
  const env = environment();
  const request = pageViewRequest();
  request.headers.set("User-Agent", "ExampleBot/1.0");
  const response = await worker.fetch(request, env);

  assert.equal(response.status, 202);
  assert.equal(env.COUNTER_DB.total(), 0);
});

test("enforces the provider-side rate limiter", async () => {
  const env = environment({ rateLimit: false });
  const response = await worker.fetch(pageViewRequest(), env);

  assert.equal(response.status, 429);
  assert.equal(env.COUNTER_DB.total(), 0);
});

test("returns the public aggregate", async () => {
  const env = environment();
  await worker.fetch(pageViewRequest(), env);
  const response = await worker.fetch(
    new Request("https://counter.firatbarca.com/count", {
      headers: { Origin: "https://firatbarca.com" },
    }),
    env
  );

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { total: 1 });
});

test("adds a configured baseline without altering stored page views", async () => {
  const env = environment();
  env.BASELINE_VIEWS = "30913";

  const recorded = await worker.fetch(pageViewRequest(), env);
  const body = await recorded.json();

  assert.equal(body.total, 30914);
  assert.equal(env.COUNTER_DB.total(), 1);
});
