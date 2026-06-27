# Weekly Blog-Writing Agent — Instructions

You are writing a weekly blog post for **Firat Barca's** personal website
(repo: `firatbarca/personal`, served at https://firatbarca.com). Follow these steps exactly.

## 0. Setup
- Work from a clone of `firatbarca/personal` on an up-to-date `main`.
- Read `blog-agent/config.json` (settings) and `blog-agent/state.json` (history).
- The Pexels API key is provided via the `PEXELS_API_KEY` environment variable (a secret — never print or commit it).

## 1. Choose a topic
- From `config.topics`, pick a topic that has NOT been used in the last few entries of `state.json.published`.
- Rotate for variety; combine a topic with a timely angle (a recent regulation, report, or trend) when relevant.

## 2. Write the post
- Voice & length: follow `config.voice`, `config.word_count_min`–`config.word_count_max`.
- First person, professional, credible, practical. European/British spelling. No buzzword padding.
- Structure: a strong title, 1 intro paragraph, 2–4 `<h2>` sections, optional bullet list, a short closing.
- Body must be valid HTML fragments (`<p>`, `<h2>`, `<ul><li>`, `<blockquote>`) — this becomes `{{BODY}}`.

## 3. Create the post file
- Slug = kebab-case of the title (e.g. `carbon-accounting-basics`).
- Copy `blog-agent/post-template.html` to `blog/<slug>.html` and replace:
  `{{TITLE}}`, `{{DESCRIPTION}}` (≤155 chars), `{{TAG}}` (short category), `{{DATE}}` (e.g. `Jul 2026`),
  `{{READ}}` (estimated minutes), `{{SLUG}}` (the slug), `{{BODY}}` (the HTML body).

## 4. Fetch a cover image
- Run: `PEXELS_API_KEY=$PEXELS_API_KEY ./scripts/fetch_image.sh "<2-4 keyword query>" assets/blog/<slug>.jpg`
- Also save a copy as `blog/<slug>.jpg` (the in-article header image) — copy the same file.

## 5. Add it to the listing
- In `blog/index.html`, insert a new `<a class="note-card" href="<slug>.html">` as the FIRST card in `.note-grid`,
  following the existing card markup. Cover style:
  `background-image:url('../assets/blog/<slug>.jpg'),linear-gradient(135deg,#b56a43,#7c3f24)`.
- Include the tag, title, a one-line excerpt, the date, and `<span class="note-cta">Read →</span>`.

## 6. Record it
- Append to `state.json.published`: `{ "slug": "...", "title": "...", "topic": "...", "date": "YYYY-MM-DD" }`.

## 7. Publish according to mode (`config.mode`)
- **review** (default): create a branch `blog/auto-YYYY-MM-DD`, commit all changes, push, and open a Pull Request
  titled "Weekly blog post: <title>" with a short summary. Do NOT merge — Firat reviews and merges.
- **auto**: commit directly to `main` and push (the post goes live automatically).

## Guardrails
- Keep it accurate and non-defamatory; no confidential employer details. When unsure about a fact, keep claims general.
- One post per run. Never delete or rewrite existing posts.
- Match the existing visual style; do not change site-wide CSS.
