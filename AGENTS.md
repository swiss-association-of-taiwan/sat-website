## Source of truth

This is the real swissassociation.tw. It was built from a handoff package the client
supplied at `handoff/` — design mockups, copy and assets — but that folder is
gitignored entirely now that everything needed from it lives in `src/` and `public/`.
It only exists in the original working directory, not in a fresh clone. If you have
it locally: `handoff/BUILD.md` was the build order, `handoff/SAT-DESIGN.md` the
design system, `handoff/SAT-DESIGN-ADDENDUM.md` the gap-filling decisions.

**Logo terminology:** the device below the wordmark is a dragon roof (temple
eaves), never a dragon boat. Don't write "dragon boat(s)", "boat", "hull", or
"boat row" anywhere the logo is described — alt text, figcaptions, component
props, asset filenames, design docs. Use "dragon roof" / "roofline" / "eaves".

**Three logo forms, chosen by size, not one mark for everything** (SAT-DESIGN.md
› Logo › Construction):
- **Full lockup** (wordmark + cross + roof + descriptor) at 180px and up — header
  at full scale, footer, covers, the About page.
- **Association mark** (cross + roof, no wording) 48–180px — header once it
  compacts on scroll, document headers, social avatars.
- **Reduction mark** (SAT + cross square, no roof) below 48px and any
  single-colour reproduction — favicon, embroidery, stamps. Never a social
  avatar or standalone identity on its own.

`Header.astro` swaps the full lockup for `public/images/sat-association-mark.svg`
once the page scrolls (the `-white` reversal is there for dark grounds; not used yet).

**Outstanding:** the reduction mark isn't drawn. The website doesn't need it — the
favicon is the Swiss cross alone, a named exception in SAT-DESIGN.md — it's only for
physical reproduction (embroidery, stamps, engraving).

Design tokens live in `src/styles/global.css` as a Tailwind v4 `@theme` block,
generated from SAT-DESIGN.md's YAML front matter. Component code uses the token
utility classes from there (`text-display-xl`, `bg-canvas-soft`, `p-lg`, …) —
never raw hex or px values. The default Tailwind color/font-size/radius scales are
disabled on purpose so nothing outside the design system is reachable.

## Deployment and the `base` path

Deployed via Cloudflare Workers (`wrangler.jsonc`, static assets from `./dist`)
from `main`, live at the root domain `https://swissassociation.tw`.
`astro.config.mjs` sets `site: 'https://swissassociation.tw'` and `base: '/'`, so
all paths are root-relative — `/about/`, `/images/…` — with no prefix. The
earlier GitHub Pages project-page deployment (`/sat-website`) is retired; its
workflow is disabled (`.github/workflows/deploy.yml.disabled`).

Every internal href/src in the codebase still goes through `withBase()` from
`src/lib/url.ts`. With `base: '/'` it's a no-op today, but it stays in place so
a future base-path change (another subpath deploy, a preview environment) is a
one-line config edit rather than a codebase-wide find-and-replace. It's already
a no-op on external URLs, mailto:, tel: and hash anchors, so it's safe to wrap
indiscriminately — keep using it on new hrefs/srcs rather than writing bare
paths.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
