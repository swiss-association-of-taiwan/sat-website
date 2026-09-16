---
version: 1.1
name: SAT-design-system
description: The visual system for the Swiss Association of Taiwan. Swiss modernist: one red, one typeface, a strict grid, square geometry and no decoration. Documentary photography of association life carries the warmth; the typography and grid carry the institution. Derived from the SAT wordmark, not from a commercial reference brand.

colors:
  red: "#E11A27"
  red-ink: "#B3141F"
  on-red: "#FFFFFF"
  ink: "#1A1A1A"
  body: "#4A4A4A"
  mute: "#8A8A8A"
  rule: "#D8D8D6"
  canvas: "#FFFFFF"
  canvas-soft: "#F5F5F3"
  on-dark: "#FFFFFF"

typography:
  display-xl:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 72px
    fontWeight: 800
    lineHeight: 68px
    letterSpacing: -1.5px
    textTransform: uppercase
  display-lg:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 52px
    fontWeight: 800
    lineHeight: 52px
    letterSpacing: -1px
    textTransform: uppercase
  display-md:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 36px
    fontWeight: 800
    lineHeight: 40px
    letterSpacing: -0.6px
  display-quiet:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 32px
    fontWeight: 300
    lineHeight: 40px
    letterSpacing: -0.4px
  heading-lg:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32px
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 19px
    fontWeight: 700
    lineHeight: 28px
  body-lead:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 21px
    fontWeight: 400
    lineHeight: 32px
  body-md:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  body-sm:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  caption:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 13px
    fontWeight: 700
    lineHeight: 16px
    letterSpacing: 0.4px
    textTransform: uppercase
  date-block:
    fontFamily: Inter, Helvetica Neue, Arial, sans-serif
    fontSize: 15px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.3px

rounded:
  none: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  section: 128px

layout:
  columns: 12
  max-width: 1200px
  text-max-width: 68ch
  gutter: 24px
  page-margin-desktop: 64px
  page-margin-mobile: 20px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    borderBottom: "1px solid {colors.ink}"
    padding: "{spacing.md} {spacing.3xl}"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    activeIndicator: "2px underline {colors.red}"
  hero:
    imageRatio: "21:9"
    width: "full-bleed"
    overlay: "none"
    headlinePosition: "below image, on canvas"
    headlineTypography: "{typography.display-xl}"
    subTypography: "{typography.display-quiet}"
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    borderColor: "{colors.red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    border: "1px solid"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  link-inline:
    textColor: "{colors.red-ink}"
    textDecoration: "underline"
    textDecorationThickness: "1px"
    underlineOffset: "3px"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderColor: "{colors.ink}"
    border: "1px solid"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  section-tile:
    imageRatio: "3:2"
    labelTypography: "{typography.heading-sm}"
    labelPosition: "below image, never overlaid"
    rounded: "{rounded.none}"
    gap: "{spacing.lg}"
  event-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderTop: "1px solid {colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} 0 {spacing.lg} 0"
    imageRatio: "3:2"
  event-date-marker:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.date-block}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  event-fallback-block:
    backgroundColor: "{colors.red}"
    textColor: "{colors.on-red}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    ratio: "3:2"
    padding: "{spacing.lg}"
  agenda-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderBottom: "1px solid {colors.rule}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} 0"
  image-frame:
    rounded: "{rounded.none}"
    ratios: "21:9 hero, 3:2 landscape, 1:1 portrait"
    caption: "{typography.caption}"
    captionColor: "{colors.body}"
    captionBorderTop: "1px solid {colors.rule}"
  article-body:
    textColor: "{colors.body}"
    headingColor: "{colors.ink}"
    typography: "{typography.body-md}"
    maxWidth: "{layout.text-max-width}"
  pull-rule:
    borderTop: "1px solid {colors.ink}"
    thickness: "1px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "{spacing.3xl} {spacing.3xl}"
    logo: "white reversal"
    columnLabels: "none"
  social-mark:
    fill: "{colors.on-dark}"
    container: "none"
    opticalHeight: "20px"
    gap: "{spacing.lg}"
    scope: "footer only"
---

## Overview

The Swiss Association of Taiwan is a community of Swiss nationals and friends of Switzerland in Taiwan, founded in 1990. It runs brunches, apéros, National Day gatherings and regional meetups. It is not a chamber of commerce, a government office or a startup, and the site should not look like any of them.

The system has two voices and only two. Typography and grid supply the institutional half: heavy uppercase grotesque, strict alignment, square geometry, generous white space, one red. Documentary photography of members at actual events supplies the human half. There is no third voice. No illustration, no gradient, no shadow, no rounded card, no second accent colour.

The design derives from the SAT wordmark. That mark is set in a heavy neo-grotesque, uses a single red on an off-white ground, and contains no curves that are not structural. Every rule below follows from it.

**Key characteristics:**

- One red, `{colors.red}` #E11A27, sampled from the mark. Used as accent, marker and rule. Never as a full-bleed background wash.
- One typeface, Inter, across every role. Weight 800 for display, 300 for the quiet counter-headline, 400 for body, 700 for labels.
- Zero border radius on every element without exception. Square is the system's most distinctive property.
- Borders and rules instead of shadows. Elevation is expressed by a 1px line, never by a soft shadow.
- Photography at fixed ratios with no text ever set over it.
- Light only. No dark mode. The footer is the one dark surface.

## Colors

### Brand

- **Red** (`{colors.red}` #E11A27): the single brand colour. Event date markers, active nav underline, primary buttons, the fallback block, occasional thick rules. Contrast on white is roughly 4.8:1, which passes AA for normal text, but prefer `red-ink` for running text.
- **Red Ink** (`{colors.red-ink}` #B3141F): a functional darkening of the brand red for inline links and small red text, roughly 6.9:1 on white. It is not a second brand colour and never appears as a fill.

Pure #FF0000 appears nowhere in the system, including inside any reproduction of the Swiss cross. The mark's own red is the only red.

### Surface

- **Canvas** (`{colors.canvas}` #FFFFFF): default page background.
- **Canvas Soft** (`{colors.canvas-soft}` #F5F5F3): a warm off-white matching the ground the wordmark sits on. Used for alternating sections and the membership panel. Used sparingly; the default is white.
- **Ink** (`{colors.ink}` #1A1A1A): footer fill, and the primary text colour on light surfaces.

### Text

- **Ink** (`{colors.ink}`): all headings, and body text on short pages.
- **Body** (`{colors.body}` #4A4A4A): running paragraph text in articles and event descriptions. Deliberately darker than a typical secondary grey, because this site's audience skews older and reads on phones.
- **Mute** (`{colors.mute}` #8A8A8A): lowest priority only, such as input placeholders. Never for content.
- **Rule** (`{colors.rule}` #D8D8D6): hairline dividers between list rows. Structural rules that carry hierarchy use `ink` at 1px, not this.
- **On Dark** (`{colors.on-dark}` #FFFFFF): all text and marks on the ink footer. One value, no greys. Dimmed white footer text is a common tell of an unconsidered footer and fails contrast for older readers.

## Typography

### Font family

**Inter** carries the entire system. Load weights 300, 400, 700, 800 only.

- Google Fonts: https://fonts.google.com/specimen/Inter
- Reference: https://rsms.me/inter/

Inter is a neo-grotesque and sits in the same lineage as the SAT wordmark. Do not substitute a geometric sans such as Geist, Poppins or Futura; the letterforms will visibly disagree with the logo.

**Chinese fallback:** Inter has no CJK coverage, and Taiwanese venue names and addresses will appear on event pages. Set the stack as `Inter, "Noto Sans TC", "Helvetica Neue", Arial, sans-serif` and load Noto Sans TC at 400 and 700 only, subset to what the site uses.

### Hierarchy

| Token | Size | Weight | Case | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 800 | upper | Homepage statement. One per page maximum. |
| `{typography.display-lg}` | 52px | 800 | upper | Page titles. |
| `{typography.display-md}` | 36px | 800 | sentence | Event and news titles. |
| `{typography.display-quiet}` | 32px | 300 | sentence | The counter-headline. A calm sentence following a shout. |
| `{typography.heading-lg}` | 24px | 700 | sentence | Section headings, in-article H2. |
| `{typography.heading-sm}` | 19px | 700 | sentence | In-article H3, card and tile titles. |
| `{typography.body-lead}` | 21px | 400 | sentence | Opening paragraph of a page or article. |
| `{typography.body-md}` | 17px | 400 | sentence | Default paragraph. |
| `{typography.body-sm}` | 15px | 400 | sentence | Navigation, footer, secondary. |
| `{typography.caption}` | 14px | 400 | sentence | Photo captions, fine print. |
| `{typography.label}` | 13px | 700 | upper | Structural labels that carry information. |
| `{typography.date-block}` | 15px | 700 | sentence | Event date markers. |

### Principles

- **Tight tracking at display sizes.** -1.5px at 72px, -1px at 52px. Reverting to neutral tracking softens the mark's relationship to the headline.
- **The 800 against 300 contrast is the typographic idea.** A heavy uppercase statement, then a light sentence beneath it. Do not use intermediate weights for display; there is no 500 or 600 in this system.
- **Uppercase is structural, not decorative.** It belongs on the display statement, on page titles, and on labels that carry real information such as `UPCOMING`, `PAST`, `MEMBERS ONLY`. It does not belong above a list whose contents are self-evident. A column of page links does not need a label reading `PAGES`, and a section of events does not need one reading `EVENTS` above a heading that already says so. If a label does not tell the reader something they could not already see, delete it rather than set it in caps.
- **No decorative hairline under a label.** A rule beneath an eyebrow label is the same tell one layer down. Rules separate content; they do not underline titles.
- **Measure caps at 68 characters.** Article body never runs wider, regardless of viewport.
- **Left aligned throughout.** No centred headings, no centred body, no justified text. Centring is the single quickest way to lose the Swiss reading.
- **Sentence case in body copy and buttons.** Buttons name what happens: "Apply for membership", not "Submit".

## Components

### Navigation

A single-row header on white with a 1px ink rule beneath it. Logo left, links right, no dropdown chrome. The active page carries a 2px red underline. On mobile the links collapse to a full-screen panel with no animation beyond the panel appearing.

The header uses the simplified mark, not the full lockup. See Logo below.

### Hero

Full-bleed photograph at 21:9, edge to edge, with no overlay, no gradient scrim and no text set over the image. The headline sits directly below the image on canvas, in `display-xl` uppercase, left aligned to the grid, with one line of `display-quiet` beneath it.

This is a deliberate choice rather than a fallback. The association's photography is documentary and taken by members, so it has no reliably calm area for reversed type, and a red block over a frame that already contains red bunting and red tablecloths reads as a patch rather than a composition. Letting the photograph run clean and putting the typography beneath it gives the largest possible image with no contrast risk.

Hero height lands around 60vh at a 1440x900 viewport, but the ratio is the specification because it holds across widths where a vh value does not.

### Buttons

Square, no radius, no shadow. Primary is a red fill with white uppercase label. Secondary is white with a 1px ink border and ink label. There is no third variant and no ghost button. Padding is 16px vertical by 24px horizontal, and touch targets never fall below 44px.

### Section tiles

A 2x2 grid of 3:2 images acting as navigation, with 24px gaps and square corners. Labels sit below the images in `heading-sm` and are never overlaid on the photograph.

The tile block must hold with images of widely different brightness, density and colour, because it will receive whatever the archive contains. Test it with a bright outdoor shot, a dim indoor shot, a crowded frame and a single subject before accepting the layout.

### Event card

A 3:2 image, a red date marker, a title in `display-md`, and two lines of description. The card is separated by a 1px ink rule above it, not by a border box. The card has no background fill, no shadow and no hover lift; the hover state underlines the title.

### Event date marker

A small solid red block containing the date, set in `date-block`. This is the system's one recurring piece of colour and it does most of the work of making the site feel like SAT rather than any other association site.

### Event fallback block

When an event has no usable photograph, the image slot renders as a solid red block at 3:2 containing the date set large in white. This case will occur constantly and the system must answer it, otherwise someone will paste in a stock photograph of the Matterhorn. The fallback is a designed state, not a placeholder.

### Empty upcoming-events state

When no future events exist, which will happen over Chinese New Year and in quiet months, the homepage events section falls back to the three most recent past events under a heading reading `Recent gatherings`. It never renders an empty section and never prints "No upcoming events", which reads as a dormant organisation.

### Agenda row

For the list of upcoming and past events. Date, title, location, in a row separated by a hairline rule. Rows are quiet; the cards on the homepage are where the images live.

### Image frame

Three ratios only: 21:9 for the hero, 3:2 for event, news and tile images, 1:1 for board portraits. Square corners. Captions sit below the image, separated by a 1px hairline rule, set in `caption` at `{colors.body}`. A well-set caption carries a mediocre photograph, which matters because most of the archive is phone snaps.

Export sizes: hero 2880 x 1234 where the source allows, and not below roughly 2000px wide; 3:2 images at 1200 x 800 for both tiles and event cards; portraits at 800 x 800.

### Article body

Headings in ink, paragraphs in body grey, measure capped at 68 characters, links in `red-ink` with a 1px underline offset 3px. Images inside articles break to the full 8-column content width but never to full bleed.

### Footer

Solid ink fill, white text, three columns: association, links, contact. The SAT mark appears in its white reversal. Link columns carry no eyebrow labels and no underlining rules; the contents identify themselves.

Social platform marks appear here, and only here. See Icons below.

### Logo

**Permitted forms, and no others:**

- Red `{colors.red}` on white or canvas-soft. The default.
- White reversal on the ink footer or on any dark surface. A monochrome reversal is standard practice for a single-colour mark and is not a recolour.
- Solid ink on light, for single-colour reproduction where red is unavailable.

Never any other colour, never a gradient, never an outline, never a drop shadow, never stretched, never placed on a red field, never on a photograph.

**Construction:**

- Clear space around the lockup equals the height of the S in SAT on all sides.
- Minimum width of the full lockup is 180px. Below that, use the simplified mark: SAT with the Swiss cross square only, without the dragon boat and without the descriptor lines.
- Build the simplified mark before building the header, because the fine strokes between the boat's hull slats fill in at small sizes and will look like a smudge in the favicon.
- The descriptor line reads `SINCE 1990`. Do not use a dated range such as `1990–2026` on the site; it requires annual maintenance nobody will remember.

### Icons

No icon set anywhere in the interface. Locations, dates, buttons, links and contact details are text. Do not introduce a general-purpose icon library.

**One exception: social platform marks in the footer.** Platform marks are recognised faster than their names by a membership reading English, German, French and Chinese, and LINE in particular is more legible as a mark than as a word to members in Taiwan. The footer is the one zone where convention outranks expression. Swiss practice has never banned pictograms; it requires that they be a system rather than an assortment.

Conditions, all of which apply:

- Footer only. Never in the header, cards, buttons, forms or body copy.
- Official platform marks, reversed to solid `{colors.on-dark}` white.
- No containers. No circular badges, no squares, no borders, no fills behind the mark.
- Optically normalised to a shared height, roughly 20px, so the row reads as one element rather than five borrowed logos. Optical, not mathematical: a square mark and a thin-stroke mark at identical pixel heights will not look the same weight.
- Each link carries an accessible name. The mark is not the label.
- Platform marks only. A pin, a calendar, a chevron or an envelope is not covered by this exception.

Check each platform's trademark guidelines before launch. Most permit a single-colour reversal, some restrict modification, and this is an official association site rather than a personal page.

## Layout

### Spacing

Base unit 4px. Scale: 4, 8, 12, 16, 24, 32, 40, 64, 96, 128.

Section separation uses `{spacing.section}` 128px on desktop and `{spacing.3xl}` 64px on mobile. This generosity is not optional; it is the largest single contributor to the Swiss reading, and the most common failure mode is compressing it to fit more content above the fold.

### Grid

12 columns, 1200px maximum content width, 24px gutters, 64px page margins on desktop and 20px on mobile. Everything aligns to the grid, including images and captions. Nothing is centred in the viewport except the grid itself.

The hero is the one full-bleed element and runs to the viewport edges. Its headline still aligns to the grid.

Common spans: full-width statement 12, article body 8, section tile 6, event card 4, sidebar 3.

### Page rhythm

Statement, then evidence, then action. Sections alternate between white and canvas-soft only when a change of subject warrants it, at most twice per page.

## Depth and elevation

There is none. No shadows, no blurs, no layered surfaces, no gradient washes, no glass effects.

Hierarchy is expressed by three devices only:

1. **Rules.** 1px ink above a section or a card. 1px `rule` grey between list rows.
2. **Space.** Larger gaps mean larger separation.
3. **Scale.** Type size and weight carry importance.

Modals and overlays, if any are ever needed, use a plain scrim over the page with a square white panel and a 1px ink border. No shadow.

## Do's and Don'ts

### Do

- Keep every corner square, including images, inputs and buttons.
- Let the red date markers be the recurring colour event across the page.
- Set the display statement in 800 uppercase with tight negative tracking, and follow it with a 300-weight sentence.
- Run the hero photograph clean at 21:9 and put the headline beneath it.
- Give every photograph a fixed ratio and a designed caption.
- Use the red fallback block for events without a photograph.
- Reverse the SAT mark to white on the ink footer.
- Keep 128px between sections on desktop even when it feels excessive.
- Left align everything.
- Write button labels as the action that happens.

### Don't

- Don't round any corner, anywhere, at any radius including 2px.
- Don't add a shadow to anything, including cards on hover.
- Don't set text over a photograph anywhere on the site. No hero overlays, no labels on tiles, no captions burned into images.
- Don't use an icon library. Social platform marks in the footer are the single exception and carry their own conditions.
- Don't put social marks inside circular or square containers.
- Don't label a column or a section with an uppercase eyebrow when its contents are self-evident, and don't underline such a label with a rule.
- Don't introduce a second accent colour. Not blue for links, not green for success, not amber for warnings. Red plus ink plus greys is the whole palette.
- Don't use pure #FF0000 anywhere.
- Don't dim footer text to grey. One white.
- Don't centre headings or body copy.
- Don't use stock photography of Switzerland. Every image on this site should be of the association's own members and events. An empty red block is better than a stock alp.
- Don't build a dark mode.
- Don't set display type in a geometric sans; it will fight the logo.

## Responsive behavior

**Breakpoints:** 640px, 1024px, 1280px.

**Type:** `display-xl` scales from 72px down to 40px at mobile, `display-lg` from 52px to 32px, and negative tracking reduces proportionally. Body text never goes below 17px, and captions never below 14px, because the membership is not all young.

**Grid:** 12 columns at desktop, 6 at tablet, 1 at mobile. Page margins drop from 64px to 20px. Section spacing drops from 128px to 64px.

**Hero:** 21:9 at desktop and tablet. At mobile the ratio may tighten to 16:9 to preserve subject scale, but never to a fixed pixel height. The headline always sits below the image.

**Section tiles:** 2x2 at desktop, 2x2 at tablet, single column at mobile. Labels stay below images at every size.

**Images:** ratios are preserved at every breakpoint. If a crop only works at one size, the image is wrong.

**Navigation:** the header collapses to a single row with the simplified mark and a text menu control at 640px. The menu panel is full screen, square, white, with 1px rules between items.

**Footer:** three columns at desktop, stacked at mobile, with the social mark row full width beneath. Marks stay at their optical height; they do not scale down.

**Touch:** all interactive targets are at least 44px tall. Event rows are tappable across their full width, not only on the title.

## Agent prompt guide

Reusable prompts that stay on system.

**Homepage**
> Build the SAT homepage using this design system. Hero: full-bleed photograph at 21:9, no overlay, no text on the image, headline in display-xl uppercase below it on white with one line of display-quiet beneath. Then the next event as plain practical information with a red date marker and no photograph. Then four section tiles at 3:2 in a 2x2 grid with labels below the images. Then three upcoming events as event cards. Then a membership call to action on canvas-soft. Then the footer. 128px between sections, everything left aligned, all corners square.

**Event page**
> Build an SAT event page. Header image at 3:2 contained in the 8-column content span with a caption below a hairline rule, or the red fallback block if no image. Title in display-md, red date marker above it, location and time as text. Body at 17px in body grey, measure capped at 68 characters. No sidebar. A quiet list of two other upcoming events beneath a 1px ink rule.

**News and article page**
> Same shell as the event page without the date marker. Body copy is the priority: 68-character measure, 17px, generous leading, headings in ink at heading-lg and heading-sm, inline links in red-ink underlined. Images break to the content width, never full bleed.

**Agenda page**
> Two groups, upcoming and past, labelled with uppercase labels. Rows separated by hairline rules showing date, title and location. Red date markers on upcoming rows only. Past events remain permanently accessible; nothing is ever deleted.

**Board page**
> 1:1 portraits on a 3-column grid, name in heading-sm, role in caption. No cards, no shadows, no rounded avatars. Square portraits on white.

**Footer**
> Ink fill, white text, three columns: association with the white reversed SAT mark, page links with no column label, contact details as text. Newsletter signup with a square input and a button-primary. Social platform marks in solid white, no containers, optically normalised to about 20px, each with an accessible name.

**When generating any new screen**
> Check every corner is square, no element carries a shadow, no text sits over a photograph, the palette contains only #E11A27, #B3141F, #1A1A1A, #4A4A4A, #8A8A8A, #D8D8D6, #FFFFFF and #F5F5F3, all text is left aligned, and section spacing is 128px on desktop. If a decorative element cannot be justified by information it carries, remove it.
