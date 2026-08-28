# Implementation queue

Last reviewed: 28 August 2026

## Implemented in this branch

- [x] Add hCaptcha markup and provider-side token submission to the Web3Forms contact form.
- [x] Add contact field-length limits, request timeout, rate-limit messaging, safe response parsing and clearer errors.
- [x] Add a complete `/privacy/` notice and include it in the sitemap.
- [x] Link the privacy notice from every existing footer and every form.
- [x] Add explicit newsletter consent wording and double-opt-in expectations to both Kit forms.
- [x] Add Cloudflare Web Analytics to `/mrfiba/`.
- [x] Connect the public page-view display to the Cloudflare Worker/D1 counter.
- [x] Attach the counter to the first-party `counter.firatbarca.com` custom domain
  and verify its D1 binding, origin policy and cookie-free response headers.
- [x] Keep the tested Supabase implementation as an unconnected fallback.
- [x] Inventory current external scripts and data processors.
- [x] Create image-provenance and claim-review records.
- [x] Resolve and record five exact legacy Pexels image sources without replacing
  any published image; retain unresolved rows as explicit publication risks.
- [x] Qualify absolute privacy, accuracy, readiness and forecasting claims on the Solutions page.
- [x] Add a general information notice to every blog article.

## Account actions that cannot be proven from source code

Complete these in the named provider dashboards and save dated evidence in a
private security folder. Do not commit recovery codes, access tokens, private
contracts or screenshots containing personal data.

- [ ] Web3Forms: activate hCaptcha for the access key, submit one production test,
  and confirm the message arrives. The widget code alone does not activate the
  dashboard control.
- [ ] Web3Forms Pro: restrict allowed domains to `firatbarca.com` and
  `www.firatbarca.com`, then test again from the production domain. This is a paid
  dashboard feature and cannot be enforced by static HTML.
- [ ] Kit form `9692717`: verify incentive/double opt-in is enabled; test the
  confirmation, consent record and unsubscribe flow.
- [ ] Kit form `9692610`: perform the same verification for the Mr.Fiba list.
- [ ] Cloudflare Web Analytics: after site deployment, verify that `/mrfiba/`
  reports page views. The site registration and matching beacon token have been
  verified through the API; the current token does not expose RUM count datasets.
- [ ] Browser privacy test: in a clean production session, confirm the analytics
  beacon and Worker counter create no cookies and write no local/session storage.
- [ ] Complete all DPA decisions marked `Action required` in `dpa-register.md`.
- [ ] Complete every MFA row in `security-checklist.md`.
- [ ] Resolve every image row marked `Source record missing` before using that
  image in paid advertising, a client deliverable or a product for sale.

## Scope boundary

No store terms, checkout disclosures, refund policy or online consulting contract
are added because the site currently performs no online sale, payment, booking or
contract formation. Reassess before adding any of those functions.
