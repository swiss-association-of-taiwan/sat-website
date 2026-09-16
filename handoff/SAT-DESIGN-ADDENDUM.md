# Addendum to SAT-DESIGN.md

Decisions taken while designing the seven pages, and the components the design file
does not cover. Where SAT-DESIGN.md speaks, it wins; this file fills the gaps.

## Decisions

1. **Buttons are sentence case**, 15px / 700 / 0.3px tracking, padding 16px 24px,
   square, no shadow. SAT-DESIGN.md contradicts itself (principles: sentence case;
   component table: uppercase label token). Sentence case is the resolution. Uppercase
   labels remain for *informational* labels only — `Archive · 1990`, `President`,
   `Individual` — never for buttons.
2. **Section headings are heading-lg** (24px / 700 / -0.2px), not display-md.
   display-md 36px/800 is reserved for page-level statements.
3. **Footer has four columns** — logo, page links, contact, and a display-quiet
   statement ("Different backgrounds. A shared connection."). Client preference,
   overrides the three-column spec.
4. **No newsletter signup** anywhere.
5. **Photographs run in colour.** The archive *scans* on About run grayscale; event
   photography does not. The warmth of the red bunting is the point of the Impressions
   page.
6. **Active nav** = 2px red underline + `aria-current="page"`, weight unchanged.
7. **Header logo** is the full lockup at 150px, shrinking to 88px past 180px of scroll.
   SAT-DESIGN.md asks for the simplified mark in the header; that asset does not exist
   yet. Keep the current behaviour until SAT supplies it.

## Components not in SAT-DESIGN.md

### Photo mosaic (Impressions)

A single continuous wall, no group headings, no per-photo captions. Square tiles of
mixed size, dense packing.

- Grid: 6 columns desktop / 4 below 1024px / 2 below 560px.
  Row height `clamp(88px, 9.2vw, 152px)`, gap 8px, `grid-auto-flow: dense`.
  The 8px gap is deliberate — the wall reads as one surface, not as a grid of cards.
- **Tiling rule.** Photos are grouped in bands of seven: one 2×2 tile, two 1×2 tall
  tiles, then four 1×1 tiles. Twelve cells per band, which packs flush at 6, 4 and 2
  columns with no holes. Any photos left over after the last complete band render as
  plain 1×1 squares. Do not improvise a different span pattern; ragged tails were the
  failure mode this rule fixes.
- Order interleaves occasions round-robin (1st of August → apéro → Christmas →
  Samichlaus → repeat) so the wall mixes rather than blocking by event.
- Hover: image scales to 1.04 and drops to 0.88 opacity. No lift, no shadow.
- Every tile is a `<button>` with an accessible name; clicking opens the lightbox.

### Lightbox

Fixed ink scrim at 95%, a square white panel with a 1px ink border and 12px padding,
image at native resolution (never upscaled, never downscaled — the archive scans are
small and must not blur). Header row: position counter (`12 / 49`) left, then Prev,
Next, Close as square outlined buttons at 44px minimum. Esc closes, arrow keys step,
navigation wraps.

### In-page navigation (About)

A 220px sticky column at `top: 140px`, uppercase label heading, links at body-sm in
body grey turning red-ink on hover. Below 1024px it becomes a static wrapping row above
the article. The article body sits in the remaining column, capped at 68ch.

### Document card (About)

Bordered 1px ink block, canvas-soft fill, containing an uppercase red-ink label
(`Archive · 1990`), a 21px/700 title, and one line of body-sm describing the file.
Opens in a new tab with `rel="noopener"`. Used for the two scanned PDFs on Google Drive.

### Definition rows

Label / value rows used for practical information (Events page: Swiss food,
Registration, Your details; About: Election, Articles). Label column 132px, uppercase
label token, value at body-md capped at 68ch, rows separated by 1px `rule` grey under
a 1px ink top rule.

### Fee blocks (Membership)

Two columns under a 2px ink rule each: uppercase red-ink category, the amount at
display-quiet weight 300 in ink, then `per year` at body-sm. NT$1,500 individual,
NT$2,000 couple or family.

### Social platform marks (footer)

Facebook, LINE, LinkedIn, Instagram, Threads. Official marks, solid white, no
containers, optically normalised to ~20px, 44px tap targets, each with an accessible
name ("SAT on Facebook"). The marks are inlined as SVG in the exported HTML — reuse
those paths; they are the current official glyphs. Verify each platform's trademark
guidance before launch.

## Responsive notes carried over from the mockups

- Nav collapses at 1120px, not 640px — seven links plus a CTA do not fit earlier.
- About's two-column layout collapses at 1024px; the archive image pair and the PDF
  card pair go single-column at 640px.
- The committee grid runs 3 / 2 / 1 columns at 1024px and 640px.
- Footer goes 4 / 2 / 1 columns at 1024px and 640px; at 1 column the statement column
  loses its left rule and gains a top rule.
