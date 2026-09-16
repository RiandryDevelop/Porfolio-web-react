# Riandry Connor — Full-Stack Developer Portfolio

Personal portfolio built to present real work as case studies: the problem, the
technical decisions, and what actually shipped.

**Live:** https://porfolio-web-react.vercel.app

---

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 16 (Pages Router, Turbopack) |
| UI | React 19, styled-components 6 |
| Motion | Framer Motion 12 |
| i18n | next-i18next 16 (`es` default, `en`) |
| Icons | react-icons — Lucide (`lu`) for UI, Simple Icons (`si`) for brands, Tabler (`tb`) where Simple Icons has no mark |
| Fonts | Bricolage Grotesque (display), Inter (body), JetBrains Mono (meta) |

The styled-components transform runs through the SWC compiler
(`compiler.styledComponents` in `next.config.js`), so there is no Babel config
and builds stay on Turbopack's fast path.

Pages Router i18n imports come from `next-i18next/pages` and
`next-i18next/pages/serverSideTranslations` — v16 moved the root entry point to
the App Router API.

---

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

---

## Project structure

```txt
src/
 ├─ components/     # One folder per component: Component.js + ComponentStyles.js
 ├─ constants/
 │   ├─ constants.js  # Case studies: slugs, tags, media, links (no copy)
 │   └─ site.js       # Identity, social links, nav sections, CV paths
 ├─ context/        # Search state shared across the projects section
 ├─ hooks/          # useDebounce, useActiveSection, highlightText
 ├─ layout/         # Shell with header, main and footer
 ├─ pages/          # Routes, API route, sitemap
 ├─ styles/
 │   ├─ GlobalComponents/  # Section, Container, Button, typography primitives
 │   ├─ animations/        # Shared motion variants
 │   └─ globals.js         # Reset, base type, focus ring, reduced motion
 └─ themes/default.js      # Design tokens — the single source of visual truth
scripts/
 └─ build_cv_en.py     # Regenerates the English CV PDF (needs `pip install reportlab`)
public/
 ├─ cv/             # Downloadable CVs per locale
 ├─ images/         # One folder per case study slug
 └─ locales/        # en/common.json, es/common.json
```

---

## Design tokens

Everything visual resolves through `src/themes/default.js`: colours, the fluid
type scale, the 4px spacing scale, radii, shadows, transitions, layout widths
and breakpoints. Components must not hardcode a colour or a size — if a value is
missing, add it to the theme first.

`html` is set to `font-size: 62.5%`, so `1rem === 10px` and every token reads as
`px / 10`. It still scales with the reader's own font-size preference.

---

## Adding a case study

1. Add an entry to `projects` in [`src/constants/constants.js`](src/constants/constants.js)
   with `slug`, `year`, `kind`, `tags`, `links` and `media`.
2. Drop the assets into `public/images/<slug>/`. Use lowercase, hyphenated
   filenames — no spaces. `media[0]` should be a wide image; it doubles as the
   card cover and the Open Graph image.
3. Add the copy under `projects.items.<slug>` in **both**
   `public/locales/es/common.json` and `public/locales/en/common.json`:
   `title`, `summary`, `role`, `problem`, `solution`, `result`.

The route, the sitemap entry and the prev/next links are generated from that.

A case study with no media renders a "media pending" placeholder rather than
breaking, so step 2 can come later.

---

## Internationalisation

Spanish is the default locale and is served at `/`; English lives under `/en`.
All copy goes through the `common` namespace — no user-visible string should be
hardcoded in a component.

---

## Contact form

The form at `#contact` posts to `/api/contact`, which sends mail through
[Resend](https://resend.com) when configured:

```bash
RESEND_API_KEY=re_...                    # required to actually send
CONTACT_TO_EMAIL=you@example.com         # where submissions land
CONTACT_FROM_EMAIL="Portfolio <...>"     # optional; needs a verified domain
```

**Resend's free sender is restricted.** Until a domain is verified at
[resend.com/domains](https://resend.com/domains), the default sender
(`onboarding@resend.dev`) will only deliver to the address that owns the Resend
account — anything else comes back as `403` and the endpoint answers `502`. Set
`CONTACT_TO_EMAIL` to that owner address, or verify a domain and point
`CONTACT_FROM_EMAIL` at it.

Without `RESEND_API_KEY` the endpoint returns `501` and the form tells people to
email directly — it never reports a false success. A hidden honeypot field
absorbs bot submissions (it answers `200` so bots do not learn they were caught).

Copy `.env.example` to `.env.local` for local development. `.env.local` is
gitignored; production values belong in the Vercel project's environment
variables.

---

## SEO

`src/components/SEO/Seo.js` builds the title, description, canonical URL,
`hreflang` alternates, Open Graph and Twitter tags, and JSON-LD from the current
route. Absolute URLs come from `site.url` in `src/constants/site.js`, overridable
with `NEXT_PUBLIC_SITE_URL`.

`/sitemap.xml` is generated from the case study list and the configured locales.

---

## Contact

📧 [riandrydevsoffers@gmail.com](mailto:riandrydevsoffers@gmail.com)

---

## License

Personal portfolio. All rights reserved © Riandry Connor.
