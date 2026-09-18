import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// A sentence with one inline link in the middle, e.g. "...contact the
// {linkText}." — linkHref empty renders linkText as plain text instead of a
// dead link. Never hardcode the URL in a component; it lives here.
const linkableText = z.object({
  bodyBefore: z.string(),
  linkText: z.string(),
  linkHref: z.string().optional(),
  bodyAfter: z.string(),
});

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
    contactCards: z.array(z.object({ title: z.string() }).merge(linkableText)).optional(),

    // About only
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
        objectPosition: z.string().optional(),
      })
      .optional(),
    toc: z.array(z.object({ href: z.string(), label: z.string() })).optional(),
    // Keyed by the {{figure:key}} / {{document:key}} markers in the markdown
    // body below — see src/lib/articleBody.ts. ratio/grayscale are explicit
    // per SAT-DESIGN-ADDENDUM.md #5: archive scans run grayscale, event
    // photography never does.
    figures: z
      .array(
        z.object({
          key: z.string(),
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
          ratio: z.enum(["21:9", "3:2", "1:1"]).default("3:2"),
          grayscale: z.boolean().default(false),
        }),
      )
      .optional(),
    documents: z
      .array(
        z.object({
          key: z.string(),
          href: z.string().optional(),
          label: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    // The framed brand-mark figure — reached via {{originalLogo}} in the
    // body. Distinct from figures[] because it's a bordered, padded,
    // narrow frame around a mark, not an edge-to-edge photo.
    originalLogo: z
      .object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
      })
      .optional(),
    // Shared by About, Events (Before you register), reached via
    // {{definitionRows}} in the body.
    definitionRows: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    articlesLink: z.string().optional(),
    // Shared closing CTA band — About, Events, Get Involved, Contact.
    closing: z
      .object({
        title: z.string(),
        body: z.string(),
        primaryLabel: z.string(),
        primaryHref: z.string(),
        secondaryLabel: z.string().optional(),
        secondaryHref: z.string().optional(),
      })
      .optional(),

    // Events only
    lumaSrc: z.string().optional(),

    // Membership only
    fees: z.array(z.object({ category: z.string(), amount: z.string() })).optional(),
    formalooSlug: z.string().optional(),

    // Contact only
    directContacts: z.array(z.object({ label: z.string(), email: z.string() })).optional(),
    // Merged into the disclaimer block per client instruction (phone line
    // removed sitewide) — see contact.astro.
    locationLabel: z.string().optional(),
    note: linkableText.optional(),
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
