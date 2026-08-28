# Supabase page counter

This is an isolated fallback to the Cloudflare Worker counter. Its application
code does not use cookies, but the hosted gateway currently adds a bot-management
`Set-Cookie` header, so the public site does not call it.

## Data handling

- PostgreSQL stores only normalized page paths, aggregate counts, timestamps, and
  one site-wide request count per minute.
- Source addresses are transformed into rotating daily hashes only in Edge
  Function memory for best-effort throttling. In-memory entries expire after one
  minute; neither addresses nor hashes are written to PostgreSQL.
- Requests are accepted only from `https://firatbarca.com` and
  `https://www.firatbarca.com`; obvious automated user agents are not counted.
- A database-wide cap of 300 increments per minute limits large abuse bursts
  without creating visitor records.

## Endpoints

- `POST /functions/v1/page-counter/view` with `{ "path": "/..." }`
- `GET /functions/v1/page-counter/count`

The function is intentionally public (`verify_jwt = false`) because it is called
from a static website. Provider-side validation and throttling are implemented in
the function and database instead.

Supabase's gateway currently adds a Cloudflare Bot Management `__cf_bm`
`Set-Cookie` response header. The website calls this endpoint with Fetch
`credentials: "omit"`, so the counter neither sends nor depends on browser
credentials. This provider behavior means the endpoint does not meet a strict
"no Set-Cookie header" requirement even though the application itself is
cookie-free.
