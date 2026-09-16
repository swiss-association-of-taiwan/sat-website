# Editing the SAT website

No software to install. Everything happens in the browser, and the site updates itself
a minute or two after you save.

## Change wording on a page

1. Go to the repository on GitHub and open `src/content/pages/`.
2. Click the page you want — `about.md`, `events.md`, and so on.
3. Click the pencil icon, edit the text, then click **Commit changes**.

The site rebuilds automatically. Only touch the words; leave the lines at the very top
of the file (between the `---` markers) alone.

## Add photos to Impressions

Put the files in `public/impressions/`. That is all — they appear on the wall by
themselves. Photos do not need to be large; around 1100px on the longest edge is
plenty, and smaller files make the page load faster for everyone.

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
