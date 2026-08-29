# Data processor and external-service register

Last reviewed: 28 August 2026

| Service | Role and purpose | Data that may be involved | Retention/control | Status |
| --- | --- | --- | --- | --- |
| GitHub Pages | Static hosting and delivery | IP address, request metadata and security logs; published site files | Provider controlled; repository content controlled by site owner | Active |
| Cloudflare Web Analytics | Aggregate traffic and performance measurement | Request metadata used for aggregate page views, referrers, country, device and performance metrics | Cloudflare states the product is cookie-free and does not fingerprint visitors | Active on the homepage, blog, posts, Solutions, Mr.Fiba and privacy page; the CV remains outside analytics |
| Cloudflare Workers and D1 | Public aggregate page-view counter at `counter.firatbarca.com` | Normalized path, aggregate count, update time; transient rate-limit key derived by Cloudflare | No IP, user agent, fingerprint or visitor record is stored by the application | Worker, custom domain, D1 and deployed site integration verified 28 August 2026 |
| Web3Forms | Receive and forward contact enquiries | Name/organisation, email, message, hCaptcha token and technical request data | Ordinary correspondence target: delete within 12 months after last meaningful contact unless needed longer | Active; dashboard hardening pending |
| hCaptcha / Intuition Machines | Spam and abuse prevention on the contact form | Challenge interaction and technical request data, including IP address | Provider controlled under hCaptcha terms/DPA | Markup added; Web3Forms activation pending |
| Kit | Newsletter subscription and email delivery | Email address, subscription/consent evidence, delivery and engagement data | Delete when no longer needed; a suppression record may remain after unsubscribe | Active; future blog posts are automatically scheduled through the V4 API; double opt-in verification remains pending |
| Google / Gmail | Receive and answer contact email; deliver Google Fonts | Enquiry content in mailbox; font requests expose ordinary request metadata | Mail deletion controlled by site owner; font delivery controlled by Google | Active; determine whether the mailbox is personal Gmail or contracted Workspace |
| Google Fonts | Deliver typography files | IP address, user agent and request metadata | Provider controlled | Active on public pages; consider self-hosting later to reduce third parties |
| Supabase | Dormant page-counter fallback | If reconnected: normalized path, aggregate counts and transient rotating request hash | Not called by site; database/function remain deployed as fallback | Dormant; review or remove if no longer needed |
| LinkedIn, Instagram, TikTok, Facebook and external sites | Destinations reached only after a visitor clicks a link | Destination receives ordinary request/referrer data | Destination controlled | Links only; no embedded trackers identified |

## Controller practices

- Do not place confidential, sensitive or special-category data in the general
  contact workflow.
- Use enquiry details only to answer the enquiry and manage a possible professional
  relationship.
- Do not add advertising pixels, session replay or cross-site identifiers without
  a new legal and technical review.
- Update the public privacy notice and this register before activating a new
  provider or purpose.
