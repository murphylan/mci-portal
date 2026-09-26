# MCI Portal — murphycode website (vinext)

Company portal website for **Murphy Code Innovations, LLC** (Austin, Texas).
Built with [vinext](https://github.com/cloudflare/vinext) — Cloudflare's Vite
plugin that reimplements the Next.js API surface. Primary deployment target:
Cloudflare Workers.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services — 3 offers (contract engineering, small business websites, architecture review) |
| `/architecture-review` | Architecture Review — fixed-price entry product |
| `/about` | About — company facts + leadership |
| `/contact` | Contact — form (opens a pre-addressed email) + office info |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

All copy is English. No domain is hard-coded — use relative links only, so the
site works on any host or preview URL.

## Scripts

- `pnpm run dev` — start the vinext dev server.
- `pnpm run build` — production build (`vinext build`), emits Worker output.
- `pnpm run start` — run the built Worker locally with Wrangler.
- `pnpm run deploy` — deploy to Cloudflare Workers (needs `wrangler login` /
  an API token first).

## Content rules (do not break)

- Brand: full name **Murphy Code Innovations, LLC**; **MCI** only in suitable spots.
- Client names (Fortune Global 500 retailer, China Mobile, Nike, FAW) are the
  CTO's personal IBM-era record — never presented as company deliveries.
- Never write "our team" (US headcount: 1), visa/immigration content, or brand
  brochure / print design services.
- Contact: murphylan@hotmail.com · 346-515-8280 · 5900 Balcones Drive, Suite
  100, Austin, TX 78731. Never the Fulshear home address.
- Copy sources: `website-content.md` (v1 page drafts), `company-profile.md`
  (messaging baseline).
