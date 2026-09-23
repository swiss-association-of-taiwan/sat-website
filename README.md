# swissassociation.tw

The Swiss Association of Taiwan's website. Astro (static output) + Tailwind. No CMS,
no database, no server.

Deployed via Cloudflare Workers (`wrangler.jsonc`, static assets from `./dist`) on
every push to `main`, live at the real domain `swissassociation.tw`. The earlier
GitHub Pages project-page deployment (`/sat-website`) is retired; its workflow is
disabled at `.github/workflows/deploy.yml.disabled`.

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
