# swissassociation.tw

The Swiss Association of Taiwan's website. Astro (static output) + Tailwind. No CMS,
no database, no server.

Deployed to GitHub Pages at `swiss-association-of-taiwan.github.io/sat-website` via
`.github/workflows/deploy.yml` on every push to `main`. Cloudflare Pages at the real
`swissassociation.tw` domain is the eventual target but isn't wired up yet — when it
is, `site`/`base` in `astro.config.mjs` are the two lines to change.

Build source of truth was [`handoff/`](handoff/) during initial construction — a local
folder of the client's design mockups and copy, not committed to this repo (everything
needed from it has been migrated into `src/` and `public/`). See
[`AGENTS.md`](AGENTS.md) for the full map.

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start the dev server at `localhost:4321`      |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally, before deploying   |

## Editing content after launch

See [`EDITING.md`](EDITING.md).
