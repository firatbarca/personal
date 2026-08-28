# Firat Barca page-view counter

This isolated Cloudflare Worker records aggregate page views in D1. It stores
only a normalized page path, its count, and the last update time. It does not
store cookies, IP addresses, user agents, fingerprints, or visitor records.

The request IP is hashed with the current UTC date and used only as a rotating
rate-limit key. The raw address and the hash are not written to D1 or application
logs.

## Provision and deploy

1. Install the Worker dependency:

   ```sh
   npm install
   ```

2. Authenticate and create the D1 database:

   ```sh
   npx wrangler login
   npx wrangler d1 create firatbarca-page-counter
   ```

3. Copy the returned database ID into `wrangler.jsonc`, replacing
   `REPLACE_WITH_D1_DATABASE_ID`.

4. Apply the migration and deploy:

   ```sh
   npm run deploy
   ```

5. Attach the first-party custom domain `counter.firatbarca.com`. The repository's
   deployed configuration already declares this domain and the website client uses it.

6. Verify:

   ```sh
   curl https://counter.firatbarca.com/count
   ```

The write endpoint accepts only browser requests whose `Origin` is
`https://firatbarca.com` or `https://www.firatbarca.com`. Origin headers can be
spoofed by non-browser clients, so rate limiting and bot filtering reduce abuse;
they cannot make a public counter perfectly immune to deliberate manipulation.

## Local checks

```sh
npm test
npm run db:migrate:local
npm run dev
```
