# Account security and MFA checklist

Last reviewed: 28 August 2026

Source code cannot prove account-level MFA. Complete each row in the provider
dashboard and keep dated evidence privately. Prefer a passkey or hardware security
key, then an authenticator app; avoid SMS as the only factor where alternatives
exist. Store recovery codes offline and never commit them.

| Account | MFA verified | Recovery tested | Least privilege / notes |
| --- | --- | --- | --- |
| Web3Forms | [ ] | [ ] | Rotate or replace the form access key if abuse is detected; it is necessarily public in a static form |
| Kit | [ ] | [ ] | Review administrators, integrations and API keys |
| Cloudflare | [ ] | [ ] | Keep API tokens scoped to required account/resources; rotate exposed tokens |
| GitHub | [ ] | [ ] | Review deploy keys, OAuth apps, fine-grained tokens and branch protection |
| Google/Gmail | [ ] | [ ] | Review forwarding rules, app passwords, recovery email and active sessions |
| Supabase | [ ] | [ ] | Service is dormant; review tokens and decide whether continued deployment is justified |

Also enable provider security alerts, use unique passwords, and review account
access at least every six months and after any collaborator or device change.
