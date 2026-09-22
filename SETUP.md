# Wild Ridge Adventure — Kashmir Landing Page

## What's in here

- `/app/kashmir-packages` and `/app` (root `/`) — the landing page, both
  routes render the same content so ad traffic works whichever URL you use
- `/components/kashmir` — all 15 sections as separate components
- `/data` — reviews, tours, FAQs, and all other page content in one place
- `/lib/site-config.ts` — phone number, WhatsApp, video ID, GTM ID, lead
  form endpoint — **edit this one file** to update contact details
  everywhere on the page at once
- `/hostinger-mailer` — the PHP script + setup guide for the "Get a Free
  Quote" popup to email you via your existing Hostinger Titan Mail SMTP

## Before this goes live to ad traffic

1. **`lib/site-config.ts`** — replace the placeholder phone number,
   WhatsApp number, YouTube video ID, and GTM container ID.
2. **`hostinger-mailer/`** — follow its README.md to wire up the popup
   form (5 steps, ~10 minutes).
3. **Photos** — every dashed-border grey box on the page (`ImgPlaceholder`
   component) marks where a real photo goes: hero banner, tour cards,
   problem-section photos, and the about-us team photo. Replace the
   `<ImgPlaceholder label="..." />` usage with a plain `<img src="/images/..." />`
   once you have the photos — drop the image files into `/public/images/`.
4. **Reviews** — `data/reviews.ts` has 48 written reviews to launch with.
   Once your Google Business Profile has real reviews, either replace
   this file's content or wire the "Load More" button to
   `siteConfig.googleReviewsUrl`.
5. **`/terms`, `/privacy`, `/contact`** — currently placeholder pages,
   referenced by the footer and the popup's checkbox. Needed for Meta/
   Google ad compliance — write the real policy text before launching ads.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000/kashmir-packages
```

## Building & deploying

```bash
npm run build       # outputs static files to /out
npx wrangler deploy # uploads /out to Cloudflare Workers static assets
```

`wrangler.jsonc` already points at `./out` with `assets` configured —
Cloudflare will serve this as static files, no server required.

## Adding the next landing page (Ladakh, honeymoon, etc.)

1. New folder: `app/ladakh-packages/page.tsx`
2. New data file: `data/ladakh-tours.ts` (copy `data/tours.ts` as a start)
3. New components only where the design genuinely differs — reuse
   `QuoteModal`, `lib/site-config.ts`, and any section that doesn't need a
   new look
4. New Cloudflare custom domain + DNS CNAME for the new subdomain
