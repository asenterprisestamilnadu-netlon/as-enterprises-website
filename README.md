# AS Enterprises – Mosquito Mesh Installation (Chennai)

Production-ready React + Vite landing site for **AS Enterprises**, a premium mosquito mesh installation business in Chennai. Optimized for Vercel's free plan: lazy-loaded routes, code-split vendor chunks, all images served locally as WebP, and a zero-backend booking form (leads go straight to WhatsApp).

## Tech stack

- React 18 + Vite 5 (Terser, manual chunks, drop_console in prod)
- Tailwind CSS 3
- React Router DOM 6 (lazy-loaded routes)
- lucide-react (tree-shaken SVG icons)
- **No backend, no database, no third-party form service.**

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Environment variables

All public business details are configured via `VITE_*` env vars. Sensible defaults live in [`src/data/siteConfig.js`](src/data/siteConfig.js) — the app works out of the box with no env file.

| Variable                | Example                                                              |
| ----------------------- | -------------------------------------------------------------------- |
| `VITE_APP_NAME`         | `AS Enterprises`                                                     |
| `VITE_SITE_URL`         | `https://asenterprises.in`                                           |
| `VITE_PHONE_NUMBER`     | `+919940078793` (international format with `+`)                      |
| `VITE_WHATSAPP_NUMBER`  | `919940078793` (digits only, country code first — for `wa.me/` URLs) |
| `VITE_CONTACT_EMAIL`    | `as.enterprisestamilnadu@gmail.com`                                  |
| `VITE_GOOGLE_MAP_URL`   | The `src` URL from Google Maps → Share → Embed a map                 |

Files:

- `.env.example` — committed template, safe to read.
- `.env.production` — committed production values (no secrets — anything `VITE_*` is exposed to the browser anyway).
- `.env.local` — your machine only, gitignored.

> Only put **public** values in `VITE_*` variables. Never put secrets here.

## Deploying to Vercel

1. Push the repo to GitHub / GitLab / Bitbucket.
2. In Vercel: **Add New → Project**, pick the repo.
3. Framework preset auto-detects as **Vite**. Defaults are correct:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **(Optional)** Under **Settings → Environment Variables**, add any of the `VITE_*` keys above if you want to override defaults without touching code. Vercel-set vars win over `.env.production`.
5. **Deploy.** [`vercel.json`](vercel.json) is already wired up with SPA rewrites and long-term caching for hashed assets.

`vercel.json` highlights:

- `rewrites` send every path to `index.html` so React Router handles routing.
- `/assets/*` gets `Cache-Control: max-age=31536000, immutable` (Vite hashes filenames, so this is safe).
- Images cached for 30 days.
- Hardening headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`.

## Mapping a custom domain (GoDaddy → Vercel)

1. In Vercel → your project → **Settings → Domains** → add `asenterprises.in` and `www.asenterprises.in`.
2. Vercel shows you the records to set. There are two patterns:
   - **Root (`asenterprises.in`)** → `A` record `76.76.21.21` (Vercel's anycast).
   - **`www`** → `CNAME` to `cname.vercel-dns.com`.
3. In GoDaddy → **My Products → Domains → DNS**, for `asenterprises.in`:
   - Find the existing `A` record for `@` and edit it to point to `76.76.21.21` (TTL 1 hour).
   - Add/edit `CNAME` for `www` → `cname.vercel-dns.com` (TTL 1 hour).
   - Remove any conflicting parked-page records GoDaddy added by default.
4. Back in Vercel, click **Refresh** until both domains show ✔. Vercel auto-provisions SSL via Let's Encrypt — usually a few minutes.
5. Set one as the canonical and 308-redirect the other (Vercel UI: "Redirect to ...").

DNS propagation: typically 5–30 minutes, can take up to 24h. Verify with `dig asenterprises.in +short`.

## Post-deployment checklist

- [ ] Visit every route: `/`, `/services`, `/mesh-types`, `/gallery`, `/reviews`, `/contact`. None should 404 on hard-refresh (SPA rewrites handle this).
- [ ] Click **Call** button on desktop and mobile — should trigger phone dialer.
- [ ] Click **WhatsApp** button — should open WhatsApp web/app with the prefilled message.
- [ ] Submit the booking form — should open WhatsApp with name/phone/mesh/area prefilled.
- [ ] Click footer email — should open mail client.
- [ ] Click **Get Directions** on Contact page — should open Google Maps with the address.
- [ ] Verify the Google Maps embed renders on Contact + Footer.
- [ ] Open the deployed URL in Chrome incognito → DevTools → Lighthouse → Mobile run. Expect Performance ≥ 90, Accessibility ≥ 90, SEO ≥ 90.
- [ ] Submit `https://asenterprises.in` to Google Search Console; submit `sitemap.xml`.
- [ ] Verify the LocalBusiness JSON-LD with [Google's Rich Results test](https://search.google.com/test/rich-results).
- [ ] **Replace `/og-image.jpg`**: add an actual 1200×630 brand image at `public/og-image.jpg` for nice WhatsApp/LinkedIn link previews. The path is already referenced in [`index.html`](index.html). Until then, social shares will fall back to no preview image.

## Build size (current)

```
dist/index.html                4.96 kB │ gzip:  1.61 kB
dist/assets/index.css         26.21 kB │ gzip:  5.50 kB
dist/assets/index-*.js        48.36 kB │ gzip: 13.78 kB   (app)
dist/assets/react-vendor-*.js 161.71 kB │ gzip: 52.59 kB  (React + Router)
dist/assets/icons-*.js          9.38 kB │ gzip:  3.53 kB  (lucide-react)
Per-route lazy chunks: 0.5 – 1.6 kB gzipped each
Gallery WebP photos: 5 × ~250–360 kB (only fetched on / and /gallery)
```

Initial JS payload: **~70 KB gzipped** (app + vendor + icons). Comfortably under the budget for sub-second LCP on 4G.

## Project structure

```
src/
├── assets/          local WebP photos + companyLogo.svg
├── components/      UI building blocks (Navbar, Hero, Footer, BookingForm, etc.)
│   └── icons/       custom SVG icons (WhatsApp, mesh-type illustrations)
├── data/            content (siteConfig, meshTypes, reviews, gallery, process)
├── hooks/           useScrollPosition, useScrollToSection
├── pages/           route components (lazy-loaded)
├── utils/           link builders + constants
├── App.jsx          router + layout
├── main.jsx         entry
└── index.css        Tailwind directives + .site-container utility
```

## How the booking form works

The "Book Free Inspection" form is a pure-frontend lead capture. On submit:

1. Validates name, phone, mesh type, and area.
2. Builds a WhatsApp deep link with the customer's details prefilled.
3. Opens `https://wa.me/{VITE_WHATSAPP_NUMBER}` in a new tab.

Message template lives in [`src/utils/whatsapp.js`](src/utils/whatsapp.js).

## Updating business details

Single source of truth: [`src/data/siteConfig.js`](src/data/siteConfig.js). Override at runtime via the `VITE_*` env vars above.

The LocalBusiness JSON-LD block in [`index.html`](index.html) is static — if you change the address or phone, update it there too so Google's structured data stays in sync.

To get the Google Maps embed URL: Google Maps → search the address → **Share → Embed a map → COPY HTML** → paste only the `src=` URL into `VITE_GOOGLE_MAP_URL`.

## Performance / SEO notes

- Routes lazy-loaded; vendor + icons split into their own chunks.
- All photos served locally as WebP (no Unsplash hot-link). Hero uses `fetchPriority="high"`, gallery uses `loading="lazy"`.
- `console.*` calls stripped in production via Terser.
- Premium `.site-container` utility (`max-w-[1500px]`, responsive padding) used site-wide.
- Per-route `<title>`, meta description, OG + Twitter tags via the `SEO` component.
- LocalBusiness JSON-LD in `index.html` for Google rich results.
- `robots.txt` and `sitemap.xml` in `public/`. Update sitemap if you add routes.

## Contact

AS Enterprises · No.10/1, T.H.Road, Kodungaiyur, Chennai – 600118
Phone / WhatsApp: +91 99400 78793
Email: as.enterprisestamilnadu@gmail.com
