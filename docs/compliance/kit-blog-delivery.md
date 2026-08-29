# Kit blog-delivery control

Last reviewed: 29 August 2026

The native Kit RSS automation is not enabled on the current free account. The
repository therefore creates **draft broadcasts only** through the Kit V4 API
after a successful website deployment.

## Boundaries

- Feed: `https://firatbarca.com/feed.xml`
- Blog subscription form: `9692717`
- Audience tag: `Firat Barca blog subscribers`
- Cutoff: only posts dated after `2026-08-29T00:00:00Z`
- Delivery mode: draft only; the workflow never supplies a sending time
- Deduplication: the Atom entry ID is stored in the broadcast description
- Mr.Fiba form `9692610` is not included
- The API key is stored only as the GitHub Actions secret `KIT_API_KEY`

Before enabling automatic sending, review a generated draft, send a test to the
site owner, verify unsubscribe and consent records, configure DMARC for the
sending domain, and confirm Kit double opt-in for form `9692717`.
