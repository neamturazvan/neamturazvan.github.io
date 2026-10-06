# Răzvan Neamțu — personal portfolio

A responsive, dark editorial portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Pages use server components and export to static HTML. Computational graphics use SVG and CSS; no animation or chart libraries are needed.

## Run locally

Use Node.js 22 or newer and pnpm 11.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

Open the local address printed in the terminal (normally http://127.0.0.1:3000).

## Checks and production build

```sh
pnpm lint
pnpm typecheck
pnpm build
```

The deployable static site is in `out/`. Use a static host that serves directory indexes for `/projects/c-ml/`, `/projects/image-processing/`, and `/projects/huffman/`. The custom 404 page is `out/404.html`. There is no application server, database, API key, or contact-form backend.

## Edit personal information

- `data/profile.ts`: profile, education dates, all external links, repository/demo URLs, website origin, current activities, skills, and interests.
- `data/projects.ts`: typed project records and case-study sections.
- `components/ProfileSections.tsx`: personal narrative and section layout.
- `app/page.tsx`: introduction and homepage composition.
- `app/globals.css`: theme tokens, layout, typography, responsive rules, and reduced-motion behavior.

### Contact details and CV

Email, GitHub, and LinkedIn use the supplied contact details. The CV remains `null` until it is ready. Place it in `public/cv.pdf` and set `links.cv.href` to `/cv.pdf`, or use its hosted URL. Missing destinations display “Not added yet” and are not fake clickable links.

Repository and optional demo URLs belong in `repositories` in `data/profile.ts`. MLC, GrayLib, and HuffZip link to their actual repositories. Project years and unspecified project statuses are `null`, so they are omitted. MLC is marked “Completed,” as confirmed by its author, and is no longer listed as current work.

All three case studies are populated from repository documentation and implementation code. They cover motivation, operation, architecture, design decisions, engineering constraints, and learning takeaways. Their tests are described from the repositories; the portfolio update did not independently execute those C/C++ test suites. Graphics remain conceptual illustrations, not measured results. The optional `placeholder` flag is retained for future draft projects.

The configured origin is the intended GitHub Pages URL. If you move to your own domain, update `siteConfig.origin` and rebuild; canonical URLs, sitemap, and social metadata will follow it. Open Graph and Twitter text metadata are included. No social-preview image is assumed.

## Add a project

1. Add a URL entry keyed by the new slug to `repositories` in `data/profile.ts`.
2. Add one `Project` record to `data/projects.ts`. Choose the `network`, `pixels`, or `tree` visualization; set the description, technologies, status, year, featured flag, and case-study sections.
3. Rebuild. The homepage, detail route, related-project navigation, and sitemap use the same data automatically. Any number of projects is supported; multiple featured projects span the grid.

Core components are `Header`, `Footer`, `ProjectCard`, `ComputationalVisual`, `ProfileSections`, and `ExternalLink`. `app/projects/[slug]/page.tsx` is the shared case-study template.

## Future notes

Add `app/notes/page.tsx`, `app/notes/[slug]/page.tsx`, and a `content/notes/` directory when real writing is ready. The shared layout, theme, metadata conventions, and project routing pattern can be reused. Add Markdown or MDX processing only then. There are intentionally no fake articles or unfinished Notes navigation items.

## Accessibility and performance

- Semantic landmarks, heading hierarchy, skip link, visible keyboard focus, and native anchor navigation.
- Compact mobile navigation keeps all four section links visible without requiring JavaScript.
- Decorative SVGs are hidden from assistive technology; project content does not depend on graphics.
- Reduced-motion preference disables smooth scrolling and transitions.
- Static server-rendered content, system fonts, no remote fonts/images, and no custom client components.

## GitHub Pages deployment

This copy is prepared for the public repository `neamturazvan/neamturazvan.github.io`, with the intended address `https://neamturazvan.github.io`. It has not been uploaded or deployed yet.

Create that repository, push these files to its `main` branch, and select **GitHub Actions** in **Settings → Pages → Build and deployment → Source**. The included `.github/workflows/deploy.yml` installs dependencies, runs lint and the production build, and deploys `out/`. Later pushes to `main` update the site automatically. No custom domain or paid hosting plan is required for this public repository.

The original Sites registration is intentionally excluded from this migration copy. The currently published site is unaffected. Canonical and sitemap URLs in this copy use the intended GitHub Pages address.
