# kosovan.finance

The personal-professional website for **Valeriy Kosovan — Financial Technology Expert**.

Built with Next.js 14 (App Router), TypeScript and Tailwind CSS. Configured for static export so it can be hosted on GitHub Pages, Netlify, Cloudflare Pages, Vercel or any static host without a Node.js runtime.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server on http://localhost:3000
npm run dev

# 3. Produce a static build in ./out
npm run build
```

After `npm run build`, the entire site is in `./out` as plain HTML/CSS/JS — copy it anywhere.

> Requires Node.js 18.17 or later.

---

## Project structure

```
kosovan-finance/
├── next.config.mjs            # output: 'export', images.unoptimized, optional basePath
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── public/                    # static assets served at /
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/
│       ├── kosovan-logo.svg
│       ├── kosovan-logo.png
│       ├── valeriy-kosovan-executive-dark.svg    ← replace with portrait
│       ├── valeriy-kosovan-city.svg              ← replace with portrait
│       └── valeriy-kosovan-article-signature.svg ← replace with portrait
└── src/
    ├── app/                   # App Router pages
    │   ├── layout.tsx         # shared <html>, header, footer, metadata
    │   ├── page.tsx           # /
    │   ├── globals.css        # Tailwind base + editorial typography
    │   ├── not-found.tsx
    │   ├── sitemap.ts         # /sitemap.xml
    │   ├── robots.ts          # /robots.txt
    │   ├── expertise/page.tsx              # /expertise
    │   ├── executive-summary/page.tsx      # /executive-summary
    │   ├── contact/page.tsx                # /contact
    │   └── articles/
    │       ├── page.tsx                    # /articles
    │       └── [slug]/page.tsx             # /articles/<slug>
    ├── components/            # reusable UI components and section blocks
    └── data/                  # content as plain TypeScript data
        ├── site.ts            # navigation, contact email, site URL
        ├── expertise.ts       # finance stages, services, upgrade levels
        ├── executiveSummary.ts# badges, achievements, education
        └── articles.ts        # article bodies as structured blocks
```

---

## Editing content

All editable text lives under `src/data/`:

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Site name, contact email, navigation, canonical URL |
| `src/data/expertise.ts` | Five-stage timeline, seven-stage roadmap, upgrade areas, upgrade levels, service cards |
| `src/data/executiveSummary.ts` | Hero badges, core-expertise grid, achievements, education list |
| `src/data/articles.ts` | All article bodies (typed `Block[]` per article) and category descriptions |

Each article is a typed object with a `body` array of structured blocks (`p`, `h2`, `h3`, `ul`, `code`, `quote`, `takeaway`). To add a new article: append a new entry in the `articles` array. The dynamic route and sitemap pick it up automatically.

If you’d prefer Markdown/MDX content files instead of TypeScript data, the cleanest path is to add `@next/mdx` and move each article into `content/articles/<slug>.mdx`. The render component already exists (`ArticleBody.tsx`); only the data loader changes.

### Images

The brief expects three portraits at fixed paths:

```
public/images/valeriy-kosovan-executive-dark.<ext>     # hero on /executive-summary
public/images/valeriy-kosovan-city.<ext>               # used in /executive-summary international block and /expertise founder section
public/images/valeriy-kosovan-article-signature.<ext>  # avatar in the AuthorSignature component
```

Placeholder SVGs are shipped at these paths so the project builds out of the box. To use the real portraits:

1. Drop the JPEGs into `public/images/` with the same base filenames.
2. Update the `src="/images/..."` references in `ExecutiveSummaryPreview.tsx`, `FounderCredibility.tsx`, the `/executive-summary` page and `AuthorSignature.tsx` from `.svg` to `.jpg`.

### Logo

The KOSOVAN logo is recreated inline in `src/components/Logo.tsx` for crispness at any size. The raster fallback (`public/images/kosovan-logo.svg` / `.png`) is also available if you’d rather use the original artwork directly.

---

## Deployment

### GitHub Pages

1. Create a repo (for example `kosovan-finance`) and push the project to it.
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The included workflow at `.github/workflows/deploy.yml` (see below) will build the site and publish `./out`.

If you’re deploying to a **user/organisation** site (`https://<user>.github.io/`) the default config is fine.

If you’re deploying to a **project** site (`https://<user>.github.io/<repo>/`) you must set the base path so links resolve correctly:

```bash
NEXT_PUBLIC_BASE_PATH=/kosovan-finance npm run build
```

The provided `next.config.mjs` already respects `NEXT_PUBLIC_BASE_PATH`.

#### Suggested GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run build
        env:
          # Only needed for project-page deployments; remove for a user/org page.
          NEXT_PUBLIC_BASE_PATH: /kosovan-finance
      - run: touch out/.nojekyll
      - uses: actions/upload-pages-artifact@v3
        with: { path: out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

> The `.nojekyll` file stops GitHub Pages from rewriting paths that start with `_`.

### Custom domain (kosovan.finance)

1. In your DNS, point `kosovan.finance` at GitHub Pages (CNAME or `A` records per GitHub’s docs).
2. In GitHub: **Settings → Pages → Custom domain → kosovan.finance** and enable HTTPS once provisioning is complete.
3. Optionally drop a `public/CNAME` file containing `kosovan.finance` so the domain survives redeploys.

### Other static hosts

* **Vercel** — `npm install && next build`; no extra config needed.
* **Netlify** — build command `npm run build`, publish directory `out`.
* **Cloudflare Pages** — build command `npm run build`, output directory `out`.

---

## Design notes

* Brand palette is driven by the logo: `#282561` (indigo), `#BD202E` (crimson accent), white and `#EFF1F7` mist.
* Type: Inter for UI, Fraunces for editorial headings — pulled via `next/font` so they’re embedded into the static build.
* Charts (five-stage timeline, evolution pyramid, seven-stage roadmap, growth-vs-finance chart, world map) are pure HTML/CSS/SVG; no chart libraries are used.
* The contact CTA uses a `mailto:` link so the site stays serverless. If you later want a real form, point it at Formspree, Basin, Web3Forms or your own endpoint — only the contact page would change.

---

## Updating articles

1. Open `src/data/articles.ts`.
2. Add a new object to the `articles` array. Required fields: `slug`, `title`, `category`, `excerpt`, `readingTime`, `body`.
3. Use the block types already in the file (`p`, `h2`, `h3`, `ul`, `code`, `quote`, `takeaway`).
4. Save. The articles index page, the dynamic article route and the sitemap update automatically.

---

## Notes before publishing

The article briefs include a few items that should be verified before going live:

1. **Article 2 — SaaS valuation.** The original source contains a small inconsistency between the stated multiple and the calculation. The version in `articles.ts` uses 7.2x consistently and matches the calculation 600,000 × 12 × 7.2 = 51,840,000.
2. **Article 3 — foreign companies.** Costs, banking conditions and tax rules are time-sensitive. Confirm before publication.
3. **Executive summary — the “effective tax rate below 2%” line.** Decide whether to keep, soften, or qualify with additional context.
4. **Education list.** Confirm exact degree names and whether each item should be described as completed, studied or attended.

These are flagged here rather than silently changed.
