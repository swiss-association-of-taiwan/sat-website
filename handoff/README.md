# SAT website — handoff package

Everything needed to build the real swissassociation.tw. Prepared from the approved
design mockups.

## What is in here

| Path | What it is | Authority |
|---|---|---|
| `SAT-DESIGN.md` | The design system. Colours, type, spacing, components. | **Authoritative on every visual question.** |
| `SAT-DESIGN-ADDENDUM.md` | Decisions taken during design, plus the components the design file does not cover (photo mosaic, in-page nav, embeds). | Authoritative where SAT-DESIGN.md is silent. |
| `pages/*.html` | The seven approved pages as static HTML. | **Layout, structure and section order only.** Never a source of colour, size or spacing values. |
| `content/SAT-page-content-JP.docx` | Page copy, written by the SAT president. | **Authoritative on every word.** Do not rewrite, shorten or "improve" it. |
| `assets/` | Logos (red + white reversal), photographs, archive scans, and `assets/impressions/` (49 downscaled event photos). | As supplied. |
| `BUILD.md` | What to build and in what order. | Start here. |
| `EDITING.md` | For the SAT committee: how to change the site after launch. Ship it in the repo. | — |

## The one rule that matters

The HTML in `pages/` is a **specification, not a deliverable.** It is inline-styled,
hand-tuned and impossible for a volunteer committee to maintain. Read the layout from
it, take every value from `SAT-DESIGN.md`, and do not commit these files to the final
repository.

## Known open items

- The header currently uses the full logo lockup. SAT-DESIGN.md asks for a simplified
  mark (SAT + Swiss cross only) in the header. The simplified mark asset does not exist
  yet — ask SAT for it, do not crop the full lockup yourself.
- The footer has four columns (logo / links / contact / statement). SAT-DESIGN.md
  describes three. The four-column version is the client's explicit preference and wins.
- The design file's footer spec mentions a newsletter signup. There is no newsletter.
  Do not build it.
- Buttons are sentence case at 15px/700. SAT-DESIGN.md contradicts itself here
  (principles say sentence case, the component table says uppercase label). Sentence
  case is the decision.
