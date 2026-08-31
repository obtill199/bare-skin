# Bare Skin Studio — Website v0.1

Conversion-first website foundation for Bare Skin Studio in Wichita, Kansas.

## Stack
- Next.js 14 (static export)
- TypeScript
- Plain CSS (lightweight, easy to customize)
- GlossGenius remains the booking engine

## Run locally
```bash
npm install
npm run dev
```
Then visit http://localhost:3000.

## Build
```bash
npm run build
```
The site is a static export, so `npm run build` writes a complete site to `out/`.
There is no `npm start` server to run — preview it with any static file server:
```bash
npx serve out
```

## Deploy
Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`).

Pages has to be switched on once by hand before the first deploy will work:
**Settings -> Pages -> Build and deployment -> Source: GitHub Actions**. The
workflow asks `configure-pages` to enable it automatically, but creating a
Pages site needs `administration: write`, which a workflow's `GITHUB_TOKEN`
cannot hold -- so that step fails with "Resource not accessible by
integration" until a repo admin flips the setting. After that it is a no-op
and deploys run unattended.

Live at https://obtill199.github.io/bare-skin/

### Moving to bareskinstudioict.com
Add the domain under **Settings → Pages → Custom domain** and point the DNS at
GitHub. Nothing in the code changes: the workflow reads the real serving path
out of the Pages config and passes it to `next.config.mjs`, which is `/bare-skin`
on the default URL and empty on the custom domain. Redeploy after the domain is
attached so the built asset URLs pick up the change.

## Pricing configuration
All featured website pricing is managed in `lib/pricing.ts`. Update that file once
to change the homepage service, membership, and prepaid-offer cards consistently.

Current growth pricing implemented Aug. 26, 2026:
- Brazilian + stomach strip: $82
- Brazilian + underarm: $104
- Brow + upper lip: $48
- Brow trim add-on: $6
- Three-visit Brazilian pack: $199
- First-time Brazilian remains $63; standard Brazilian remains $70

Membership cards are intentionally hidden until Kristen is ready to launch them. The
three-visit Brazilian pack is the only recurring-value offer currently promoted.

The GlossGenius catalog must be updated separately so checkout matches the site.

## Important
Current service snippets and business facts were sourced from the public Bare Skin Studio GlossGenius and current local business listing on Aug. 26, 2026. Verify before production launch if any business details change.
