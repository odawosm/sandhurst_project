# Sandhurst Projects Ltd. Marketing Site

> **Built Strong. Living Elevated.**

Marketing website for **Sandhurst Projects Ltd.**, a boutique luxury real estate
developer rooted in Kenya with a pan-African vision. The site leads with the
flagship development, **The Woods, Ogango** (Kisumu), and is built to the
Sandhurst brand guidelines.

## Tech stack

- **[Next.js 15](https://nextjs.org/)**: App Router, **Turbopack**
- **React 19**
- **[Tailwind CSS v4](https://tailwindcss.com/)**: CSS-first theme via `@theme`
- **[Geist & Geist Mono](https://vercel.com/font)**: loaded with `next/font`
- **[Nodemailer](https://nodemailer.com/)**: contact form delivery over SMTP via a Next.js Server Action
- JavaScript / **JSX** (no TypeScript)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run Next.js lint |

> **Note:** Don't run `npm run build` while `npm run dev` is running, since both write
> to `.next/` and can corrupt the cache. If you hit a `.next` error, stop all
> Next processes, `rm -rf .next`, and restart.

## Environment variables

The contact form (`components/ContactForm.jsx` → `app/contact/actions.js` Server
Action → `lib/mail.js`) sends mail over SMTP. Create a `.env.local` with:

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | SMTP port (`465` is treated as secure/TLS) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |
| `SMTP_FROM_EMAIL` | From address for outgoing enquiries |
| `SMTP_TO_EMAIL` | Where enquiries are delivered (optional; defaults to `SMTP_FROM_EMAIL`) |

`.env*` files are gitignored. Set the same variables in your host's dashboard
(e.g. Vercel project settings) for production.

## Project structure

```
app/                       # App Router routes
  layout.jsx               # Root layout: fonts, metadata, header/footer
  page.jsx                 # Home
  not-found.jsx            # 404
  about/ investors/ contact/   # contact/actions.js = "use server" form action
  projects/                # Listing (page.jsx) + [slug] detail (SSG)
  globals.css              # Tailwind v4 @theme (brand tokens) + utilities
components/
  ContactForm.jsx          # Contact form (client) → Server Action
  ProjectCard.jsx          # Project listing card
  ProjectGallery.jsx       # Gallery orchestrator (feature + mosaic + lightbox)
  ui/                      # Primitives: Button, Container, Eyebrow, Logo, PageHeader, Reveal
  layout/                  # Header (nav + mobile menu), Footer
  sections/                # Home sections: Hero, Pillars, FeaturedProject, StatStrip, CTASection
  project/                 # Project-detail sections + gallery parts
                           #   ProjectHero/Overview/Amenities/Security/Investment/Location/Team
                           #   GalleryFeature, GalleryMosaic, GalleryLightbox, ProjectGallerySection
lib/
  site.js                  # Company info, nav, pillars, stats (source of truth)
  projects.js              # Project data (The Woods, Ogango)
  mail.js                  # Nodemailer SMTP transport + enquiry sender
public/
  brand/                   # Logo marks + lockup
  brochure/                # Downloadable brochure + elevations (PDF)
  projects/                # Optimized renders (green-hero.avif, the-woods-ogango/)
  favicon.ico, *.png, og-image.jpg, site.webmanifest
```

Both `lib/site.js` and `lib/projects.js` are the single sources of truth; edit
content there rather than in components.

## Brand tokens

Defined in `app/globals.css` (`@theme`) and used as Tailwind utilities
(`bg-night`, `text-cream`, `text-accent`, …):

| Token | HEX | Role |
|-------|-----|------|
| Night | `#00262B` | Primary dark: backgrounds, headers |
| Warm Yellow Green | `#DCF69E` | Accent: CTAs, highlights (sparing) |
| White Chocolate | `#ECE3D6` | Warm neutral: text, light surfaces |
| White | `#FFFFFF` | Pure white |

Typography: **Geist Mono** for labels/eyebrows/figures, **Geist** for display & body.

## Adding a project

1. Add an entry to the `projects` array in `lib/projects.js`.
2. Drop optimized renders under `public/projects/<slug>/`.
3. Add the brochure PDF under `public/brochure/`.

The listing page and the statically-generated `/projects/[slug]` route pick it up
automatically.

## Deployment

Optimized for [Vercel](https://vercel.com/). Any Node host that runs
`next build` + `next start` works.

---

© Sandhurst Projects Ltd. Real Estate Development.
