# Build instructions

Stack: **Astro** (static output) + **Tailwind**, deployed on **Cloudflare Pages** from
the SwissAssociation GitHub account. No CMS, no database, no server.

Build in this order.

## 1. Tailwind theme from the design tokens

Generate the theme config from the YAML front matter of `SAT-DESIGN.md` — colours,
type scale, spacing scale, `borderRadius: { none: '0px' }` only. Every later step uses
these tokens. No raw hex values and no raw px values anywhere in component code.

Fonts: Inter at 300/400/700/800 and Noto Sans TC at 400/700, self-hosted or via Google
Fonts with `display=swap`. The stack is
`Inter, "Noto Sans TC", "Helvetica Neue", Arial, sans-serif` — CJK coverage is
required, venue names and addresses are in Chinese.

## 2. Components

Read `pages/index.html` and `pages/about.html` for structure, then build:

- `Header` — sticky, white, 1px ink rule beneath, logo left, links right. The logo
  shrinks on scroll (150px → 88px in the mockup; keep the behaviour). Current page
  carries a 2px red underline and `aria-current="page"`. Below 1120px the links
  collapse to a menu button and a full-width white panel with 1px rules between items.
- `Footer` — ink fill, white text, four columns, white logo reversal, social marks in
  solid white with no containers at ~20px optical height, each with an accessible name.
  See the addendum for the platform marks.
- `Section` / `PageHeader` — the standard page opening: display-lg uppercase title,
  then one display-quiet line.
- `ImageFigure` — fixed ratio, square corners, caption below a 1px hairline rule.
- `PhotoMosaic` — the Impressions grid. See the addendum; the tiling rule is exact.
- `Lightbox` — ink scrim, square white panel with a 1px ink border, image at native
  resolution, Prev / Next / Close, Esc and arrow keys. Used by Impressions and by the
  two archive scans on About.
- `DocumentCard` — the bordered PDF links on About (label, title, "Opens in a new tab").
- `TocNav` — About's sticky in-page navigation; static list below 1024px.

## 3. Content collections

Split `content/SAT-page-content-JP.docx` into one markdown file per page under
`src/content/pages/` — `home`, `about`, `events`, `membership`, `impressions`,
`get-involved`, `contact`. **Copy the text verbatim.** The page templates render those
files; no page copy lives in `.astro` files. This is what makes the site editable by
the committee later, so treat it as a hard requirement rather than a nicety.

Committee members on the About page are structured data, not prose — put them in a
small collection (role, name, blurb, contact email, photo) so a change of committee is
a data edit. Photos are placeholders today; SAT will supply portraits.

## 4. Impressions photos — no code edit to add one

`assets/impressions/` holds 49 photos named `p01.jpg`–`p49.jpg`, longest edge 1100px.
Read the folder with `import.meta.glob` so that dropping a file in adds it to the wall.
Keep a tiny sidecar (JSON or front matter) mapping filename → occasion, used only to
interleave the mosaic; a file with no entry still renders. Never require a code change
to publish a photo.

## 5. Events — Luma only

Events live on Luma and the Events page embeds the Luma calendar. Do **not** build an
events content collection, and do not implement the design file's event-card, date
marker, fallback block or "recent gatherings" empty state — they were specified before
this decision and are now out of scope. The homepage describes the *kinds* of events
SAT runs (see `pages/index.html`) and links to the Events page; nothing on the homepage
needs updating when an event is added.

## 6. Membership form

Formaloo embed, already in `pages/membership.html`:
`div.formaloo--root-container[data-form-slug="xL3snJh7"]` plus
`https://embed.formaloo.me/v1/main.js`. Load the script once, deferred. The same
pattern applies to the contact form when SAT supplies its slug.

Third-party embeds bring their own radii, colours and fonts. That conflict is accepted;
do not fight it with overrides, and do not restyle the rest of the site to match it.

## 7. Deploy

Cloudflare Pages, static output, build on push to `main`. Add a preview branch so
copy edits can be checked before they go live. Favicon and social preview image from
the simplified mark once SAT supplies it.

## Non-negotiables

Square corners everywhere. No shadows. No text over photographs. No second accent
colour. Left aligned throughout. 128px between sections on desktop, 64px on mobile.
Body copy never below 17px. Touch targets never below 44px. Visible focus states
(`2px solid #E11A27`, offset 2px). Semantic HTML and accessible names on every icon
link. No icon library beyond the footer social marks.
