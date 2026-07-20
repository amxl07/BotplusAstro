# BotPlus Astro Migration Plan

Last updated: 2026-07-08

## Goal

Convert the current static BotPlus site into Astro first. Build only components that map to patterns already in the current pages, then create a component review page before making the new SEO pages.

Reference pattern: `D:\BotPlus\dentdesk`

## Astro Setup

Create:

```text
package.json
astro.config.mjs
tailwind.config.js
tsconfig.json
src/layouts/BaseLayout.astro
src/styles/global.css
src/components/
src/pages/index.astro
src/pages/component-review.astro
public/
```

Use Astro static output, Tailwind, sitemap, clean trailing-slash URLs, and keep the existing `/blog` Vercel rewrites.

## Components To Convert From Current Site

| Component | Convert From | Purpose |
|---|---|---|
| `BaseLayout.astro` | repeated `<head>`, analytics, CSS/JS includes in all `.html` files | SEO tags, canonical, OG, JSON-LD, scripts, layout shell |
| `Navbar.astro` | repeated header/nav in `index.html`, `products.html`, `solutions.html`, `workflow.html`, `contact.html` | shared desktop/mobile nav |
| `Footer.astro` | repeated footer blocks in current pages | shared footer links/contact/product copy |
| `HeroSection.astro` | hero blocks in `index.html`, `products.html`, `solutions.html`, `workflow.html`, `contact.html` | page hero with H1, intro copy, media/background option |
| `SectionHeader.astro` | `.section-title`, h2/subtitle patterns | reusable section label, heading, short intro |
| `FeatureGrid.astro` | `features .icon-box`, `.feature-card`, workflow highlight grids | icon + title + description rows/cards |
| `ProductCardGrid.astro` | `products.html` service-item product cards | product/use-case cards with icon, copy, feature bullets, link |
| `SolutionBlock.astro` | repeated solution sections in `solutions.html` | two-column solution/use-case sections with feature list |
| `WorkflowGrid.astro` | workflow highlights in `workflow.html` | workflow/architecture capability grid |
| `CtaBand.astro` | call-to-action section in `index.html` and page-end CTAs | full-width conversion band |
| `ContactForm.astro` | form in `contact.html` | BotPlus lead form with Supabase submit logic |
| `ContactInfo.astro` | contact info card in `contact.html` | location/email/phone/business hours |
| `CalendlyEmbed.astro` | `book-demo.html` | demo booking embed |
| `MediaBlock.astro` | video/image blocks in `index.html`, `assets/video/*`, `assets/img/*` | reusable video/image presentation |
| `FaqSection.astro` | create new only because SEO pages need it | FAQ + optional schema |

Do not create abstract components like `KioskHeroVisual`, `JourneyArchitecture`, or `TrustBoundaryList` yet unless they emerge from real page sections during the Astro rebuild.

## Component Review Page

Create:

```text
src/pages/component-review.astro
```

Set it to `noindex, nofollow`.

Show only the components above:

1. `Navbar`
2. `HeroSection`
3. `SectionHeader`
4. `FeatureGrid`
5. `ProductCardGrid`
6. `SolutionBlock`
7. `WorkflowGrid`
8. `MediaBlock`
9. `CtaBand`
10. `ContactForm`
11. `ContactInfo`
12. `CalendlyEmbed`
13. `FaqSection`
14. `Footer`

Use real BotPlus sample content, not lorem ipsum.

## Build Order

1. Scaffold Astro.
2. Move assets needed by current pages into `public/` or `src/assets/`.
3. Build `BaseLayout`, `Navbar`, `Footer`.
4. Convert current reusable sections into the components listed above.
5. Build `/component-review/`.
6. Run build and screenshot review page.
7. Convert homepage to `src/pages/index.astro`.
8. Convert contact/demo pages if needed.
9. Then build the first five SEO pages.

## QA

Run:

```powershell
npm run build
npm run dev -- --host 127.0.0.1 --port 4327
npx.cmd playwright screenshot --full-page http://127.0.0.1:4327/component-review/ tmp\screenshots\component-review-desktop.png
npx.cmd playwright screenshot --full-page --viewport-size=390,844 http://127.0.0.1:4327/component-review/ tmp\screenshots\component-review-mobile.png
```

Pass criteria:

- Components match current site patterns.
- Component examples use real BotPlus content from existing pages.
- Mobile has no overflow or overlap.
- Component review page is approved before new SEO pages are built.
