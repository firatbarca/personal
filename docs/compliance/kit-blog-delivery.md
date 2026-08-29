# Kit blog-delivery control

Last reviewed: 29 August 2026

The native Kit RSS automation is not enabled on the current free account. The
repository therefore schedules broadcasts through the Kit V4 API after a
successful website deployment.

## Boundaries

- Feed: `https://firatbarca.com/feed.xml`
- Blog subscription form: `9692717`
- Audience tag: `Firat Barca blog subscribers`
- Cutoff: only posts dated after `2026-08-29T00:00:00Z`
- Delivery mode: automatic; each new entry is scheduled 10 minutes after the
  workflow runs, with additional entries staggered by one minute
- Visibility: broadcasts are private to email and are not published to Kit's
  public Creator Profile
- Deduplication: the Atom entry ID is stored in the broadcast description
- Mr.Fiba form `9692610` is not included
- The API key is stored only as the GitHub Actions secret `KIT_API_KEY`

Operational follow-up: verify unsubscribe and consent records, configure DMARC
for the sending domain, and confirm Kit double opt-in for form `9692717`.
