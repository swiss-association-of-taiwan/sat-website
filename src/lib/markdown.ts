import { Marked } from "marked";
import { withBase } from "./url";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

// Renders the editable prose in a page's markdown body. Heading IDs are
// auto-slugged from the heading text so TocNav can link to them.
const marked = new Marked({
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const plain = tokens.map((t) => ("text" in t ? t.text : "")).join("");
      return `<h${depth} id="${slugify(plain)}">${text}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const titleAttr = title ? ` title="${title}"` : "";
      return `<a href="${withBase(href)}"${titleAttr} class="link-inline">${text}</a>`;
    },
  },
});

export function renderMarkdown(source: string): string {
  return marked.parse(source, { async: false }) as string;
}

export function headingSlug(text: string): string {
  return slugify(text);
}
