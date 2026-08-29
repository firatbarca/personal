import assert from "node:assert/strict";
import test from "node:test";

import {
  broadcastPayload,
  eligibleEntries,
  markerFor,
  parseAtomEntries,
  scheduledSendAt,
} from "./kit-blog-drafts.mjs";

const feed = `<?xml version="1.0"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <entry>
    <title>A &amp; B</title>
    <link href="https://firatbarca.com/blog/a-b/" />
    <id>https://firatbarca.com/blog/a-b/</id>
    <updated>2026-08-30T09:00:00.000Z</updated>
    <summary>Useful &lt;notes&gt; and &#39;context&#39;.</summary>
  </entry>
</feed>`;

test("parses controlled Atom entries", () => {
  assert.deepEqual(parseAtomEntries(feed), [
    {
      title: "A & B",
      url: "https://firatbarca.com/blog/a-b/",
      id: "https://firatbarca.com/blog/a-b/",
      updated: "2026-08-30T09:00:00.000Z",
      summary: "Useful <notes> and 'context'.",
    },
  ]);
});

test("selects only future firatbarca blog entries", () => {
  const parsed = parseAtomEntries(feed);
  const hostile = { ...parsed[0], url: "https://example.com/blog/a-b/" };
  assert.equal(eligibleEntries([...parsed, hostile], "2026-08-29T00:00:00Z").length, 1);
  assert.equal(eligibleEntries(parsed, "2026-08-31T00:00:00Z").length, 0);
});

test("creates a scheduled broadcast targeted only to the blog tag", () => {
  const entry = parseAtomEntries(feed)[0];
  const sendAt = "2026-08-30T10:10:00.000Z";
  const payload = broadcastPayload(entry, 42, sendAt);

  assert.equal(payload.public, false);
  assert.equal(payload.send_at, sendAt);
  assert.equal(payload.description, markerFor(entry));
  assert.deepEqual(payload.subscriber_filter, [{
    all: [{ type: "tag", ids: [42] }],
    any: null,
    none: null,
  }]);
  assert.match(payload.content, /Useful &lt;notes&gt; and &#39;context&#39;\./);
});

test("delays and staggers automatic delivery", () => {
  const now = new Date("2026-08-30T10:00:00.000Z");
  assert.equal(scheduledSendAt(now, 0, 10), "2026-08-30T10:10:00.000Z");
  assert.equal(scheduledSendAt(now, 1, 10), "2026-08-30T10:11:00.000Z");
});
