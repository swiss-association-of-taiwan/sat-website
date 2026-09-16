import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Prose pages: about, events, membership, impressions, get-involved, contact.
// Frontmatter is structural (title, images, links, card lists) and is not
// meant to be edited by the committee — see handoff/EDITING.md. The markdown
// body is the editable prose and is rendered through <ArticleBody>.
//
// home.md is the one exception: the homepage is entirely short card/CTA
// copy with no flowing prose, so its text lives in frontmatter fields
// instead of a body. Flagged to the client as a deliberate deviation from
// EDITING.md's generic "body is editable" instruction.
const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    intro: z.string().optional(),

    // Home only
    hero: z
      .object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        imageAlt: z.string(),
      })
      .optional(),
    nextEvent: z
      .object({
        title: z.string(),
        paragraphs: z.array(z.string()),
        ctaLabel: z.string(),
        ctaHref: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        caption: z.string(),
      })
      .optional(),
    audience: z
      .object({
        title: z.string(),
        lead: z.string(),
        cards: z.array(z.object({ title: z.string(), body: z.string() })),
      })
      .optional(),
    eventsTeaser: z
      .object({
        title: z.string(),
        linkLabel: z.string(),
        linkHref: z.string(),
        cards: z.array(
          z.object({
            image: z.string(),
            imageAlt: z.string(),
            frequency: z.string(),
            title: z.string(),
            body: z.string(),
          }),
        ),
      })
      .optional(),
    membershipCta: z
      .object({
        title: z.string(),
        body: z.string(),
        image: z.string(),
        imageAlt: z.string(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string(),
        secondaryHref: z.string(),
      })
      .optional(),
    contactCards: z.array(z.object({ title: z.string(), body: z.string() })).optional(),

    // About only
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      })
      .optional(),
    toc: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
    archiveFigures: z
      .array(z.object({ src: z.string(), alt: z.string(), caption: z.string(), enlargeLabel: z.string() }))
      .optional(),
    documents: z
      .array(
        z.object({
          href: z.string().optional(),
          label: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    definitionRows: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    articlesLink: z.string().optional(),
    closing: z
      .object({
        title: z.string(),
        body: z.string(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string(),
        secondaryHref: z.string(),
      })
      .optional(),
  }),
});

const committee = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/committee" }),
  schema: z.object({
    order: z.number(),
    role: z.string(),
    name: z.string(),
    blurb: z.string(),
    email: z.string().email().optional(),
    photo: z.string().optional(),
  }),
});

export const collections = { pages, committee };
