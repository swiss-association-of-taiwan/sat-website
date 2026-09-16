# swissassociation.tw

The Swiss Association of Taiwan's website. Astro (static output) + Tailwind, deployed
on Cloudflare Pages. No CMS, no database, no server.

Build source of truth is [`handoff/`](handoff/) — start with
[`handoff/BUILD.md`](handoff/BUILD.md), then
[`handoff/SAT-DESIGN.md`](handoff/SAT-DESIGN.md) for every visual decision. See
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
