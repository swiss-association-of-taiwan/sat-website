# Editing the SAT website

No software to install. Everything happens in the browser, and the site updates itself
a minute or two after you save.

## Change wording on a page

1. Go to the repository on GitHub and open `src/content/pages/`.
2. Click the page you want — `about.md`, `events.md`, and so on.
3. Click the pencil icon, edit the text, then click **Commit changes**.

The site rebuilds automatically. Only touch the words; leave the lines at the very top
of the file (between the `---` markers) alone.

On `about.md` you'll also see short lines wrapped in double curly braces, like
`{{figure:tages-anzeiger}}` or `{{emphasis}}...{{/emphasis}}`. These tell the page
where to place a photo, a PDF card, or a highlighted line — leave them exactly where
they are. You can still edit the wording around them freely, and the text inside an
`{{emphasis}}...{{/emphasis}}` pair is normal editable wording too.

## Add photos to Impressions

Put the files in `public/impressions/`. That is all — they appear on the wall by
themselves. Photos do not need to be large; around 1100px on the longest edge is
plenty, and smaller files make the page load faster for everyone.

To put a photo under one of the filter buttons on that page, add a line for it in
`src/content/impressions.json` with the occasion key (`august`, `apero`, `christmas`,
`santa`, `archive`). A photo with no line still appears; it just sits in the last group.
`archive` is for the old black-and-white pictures scanned from the early magazines.

## Add or change an event

Nothing to do here. Create the event in Luma and it appears on the Events page. The
website never needs a separate update for an event.

## Change a committee member

Open `src/content/committee/` and edit the entry, or add a new file copying the shape
of an existing one. Portraits go in `public/committee/`.

## The membership and contact forms

These are Formaloo forms. Change the questions in Formaloo; the website picks up the
change with no edit here.

## Anything about how the site looks

Colours, type sizes, spacing and layout come from the design system and are not meant
to be edited page by page. If something needs to look different, that is a change to
the design system — raise it rather than working around it in one page.
