## Source of truth

This is the real swissassociation.tw, built from the handoff package in `handoff/`.
Read `handoff/BUILD.md` first — it is the build order. Then:

- `handoff/SAT-DESIGN.md` — the design system. Authoritative on every visual question.
- `handoff/SAT-DESIGN-ADDENDUM.md` — decisions and components the design file
  doesn't cover. Wins where SAT-DESIGN.md is silent.
- `handoff/pages/*.html` — layout/structure/section order reference only. Never a
  source of colour, size or spacing values, and not committed to this repo
  (`handoff/pages/` is gitignored).
- `handoff/content/SAT-page-content-JP.docx` — page copy, authoritative on every
  word. Copied verbatim into `src/content/pages/`.
- `handoff/impressions.json` — occasion tags for the photo mosaic, mirrored into
  `src/data/impressions.json`.

Design tokens live in `src/styles/global.css` as a Tailwind v4 `@theme` block,
generated from `SAT-DESIGN.md`'s YAML front matter. Component code uses the token
utility classes from there (`text-display-xl`, `bg-canvas-soft`, `p-lg`, …) —
never raw hex or px values. The default Tailwind color/font-size/radius scales are
disabled on purpose so nothing outside the design system is reachable.

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
