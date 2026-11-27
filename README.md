# DAEOL website (Next.js 15 + GSAP + Three.js + Lenis)

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```
Deploy: push to GitHub and import into Vercel (no extra settings).

## What's inside
- `app/page.tsx` home: 3D particle hero + live AI-answer card, platform marquee, SEO/AEO/GEO layer switcher, stacked service cards, counters, pinned horizontal process, industries accordion, pricing + FAQ, CTA
- Pages: why-daeol, services, platforms, process, industries, pricing, faq, audit, blog (+ 3 starter posts), 404
- `lib/data.ts` all copy for services, steps, industries, FAQs, pricing. Edit text here.
- `lib/posts.ts` blog posts (starter drafts, rewrite them in your voice)
- `components/Motion.tsx` all GSAP/Lenis scroll behaviour (use `data-split`, `data-fade`, `data-count`, `data-svc`, `data-hproc` attributes)
- `components/HeroScene.tsx` Three.js hero (change `R`, particle counts, colours in the shader)
- Theme colours live at the top of `app/globals.css` (`--navy`, `--coral`, ...)

## SEO / AEO built in
Per-page titles and descriptions, canonical URLs, Organization/WebSite/Service/FAQ/Offer/Article JSON-LD, `sitemap.xml`, `robots.txt` (AI crawlers explicitly allowed), `llms.txt`, generated Open Graph image (`app/opengraph-image.tsx`), favicon (`app/icon.png`, `app/apple-icon.png`), logos in `public/`.

## Audit form
`/api/audit` emails requests via Resend if `RESEND_API_KEY` is set, otherwise logs to the server console.

## Images and video
Nothing is required. To add some later, put files in `public/` and use `next/image`.
