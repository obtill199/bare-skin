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

## Immediate next upgrades
1. Replace placeholder hero treatment area with approved real brand photography.
2. Add dedicated SEO pages for Brazilian waxing, bikini waxing, brows, legs, face waxing and dermaplaning in Wichita.
3. Add Google Analytics / Meta Pixel IDs once available.
4. Add review schema + LocalBusiness structured data.
5. Add lead capture for Bare Club / promotions.
6. Model and finalize bundles + membership using real margins before publishing prices.
7. Add email lifecycle automation integration after provider/consent data is connected.

## Important
Current service snippets and business facts were sourced from the public Bare Skin Studio GlossGenius and current local business listing on Aug. 26, 2026. Verify before production launch if any business details change.
