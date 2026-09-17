import { renderMarkdown } from "./markdown";

// Lets a page's markdown body stay ONE continuous, committee-editable file
// (per handoff/EDITING.md) while still slotting in structured widgets —
// archive scans, PDF cards, a definition-rows block, a display-quiet
// emphasis line — at the exact point in the narrative the copy references
// them, matching the [Embed: ...] / [Read ...] markers already present in
// handoff/content/SAT-page-content-JP.docx.
//
// Marker syntax, each on its own line:
//   {{figure:some-key}}            self-closing, resolved against a
//   {{document:some-key}}          frontmatter array by `key`
//   {{definitionRows}}             self-closing, renders the whole
//                                  frontmatter.definitionRows block
//   {{luma}}                       self-closing, renders the Luma calendar
//                                  embed from frontmatter.lumaSrc
//   {{originalLogo}}                self-closing, renders the framed brand
//                                  mark from frontmatter.originalLogo
//   {{emphasis}} ... {{/emphasis}} wraps a short display-quiet aside
//   {{lead}} ... {{/lead}}         wraps a paragraph that should read at
//                                  body-lead (21px) size — used exactly
//                                  where a mockup shows it, not inferred
//                                  from position (first/last paragraphs are
//                                  body-md by default)
//
// Consecutive markers of the same kind (figure/document) are grouped so the
// template can lay them out as a side-by-side pair, matching the mockup.
export type ArticleBlock =
  | { kind: "html"; html: string }
  | { kind: "figureGroup"; keys: string[] }
  | { kind: "documentGroup"; keys: string[] }
  | { kind: "definitionRows" }
  | { kind: "luma" }
  | { kind: "originalLogo" }
  | { kind: "emphasis"; text: string }
  | { kind: "lead"; text: string };

const SELF_CLOSING = /^\{\{(figure|document):([\w-]+)\}\}$/;
const DEFINITION_ROWS = /^\{\{definitionRows\}\}$/;
const LUMA = /^\{\{luma\}\}$/;
const ORIGINAL_LOGO = /^\{\{originalLogo\}\}$/;
const EMPHASIS_OPEN = /^\{\{emphasis\}\}$/;
const EMPHASIS_CLOSE = /^\{\{\/emphasis\}\}$/;
const LEAD_OPEN = /^\{\{lead\}\}$/;
const LEAD_CLOSE = /^\{\{\/lead\}\}$/;

export function parseArticleBody(source: string): ArticleBlock[] {
  const lines = source.split("\n");
  const blocks: ArticleBlock[] = [];
  let buffer: string[] = [];
  let i = 0;

  const flushHtml = () => {
    const text = buffer.join("\n").trim();
    if (text) blocks.push({ kind: "html", html: renderMarkdown(text) });
    buffer = [];
  };

  const lastBlock = () => blocks[blocks.length - 1];

  while (i < lines.length) {
    const line = lines[i].trim();

    const selfMatch = line.match(SELF_CLOSING);
    if (selfMatch) {
      flushHtml();
      const kind = selfMatch[1] === "figure" ? "figureGroup" : "documentGroup";
      const prev = lastBlock();
      if (prev && prev.kind === kind) {
        prev.keys.push(selfMatch[2]);
      } else {
        blocks.push({ kind, keys: [selfMatch[2]] });
      }
      i++;
      continue;
    }

    if (DEFINITION_ROWS.test(line)) {
      flushHtml();
      blocks.push({ kind: "definitionRows" });
      i++;
      continue;
    }

    if (LUMA.test(line)) {
      flushHtml();
      blocks.push({ kind: "luma" });
      i++;
      continue;
    }

    if (ORIGINAL_LOGO.test(line)) {
      flushHtml();
      blocks.push({ kind: "originalLogo" });
      i++;
      continue;
    }

    if (EMPHASIS_OPEN.test(line)) {
      flushHtml();
      i++;
      const inner: string[] = [];
      while (i < lines.length && !EMPHASIS_CLOSE.test(lines[i].trim())) {
        inner.push(lines[i]);
        i++;
      }
      blocks.push({ kind: "emphasis", text: inner.join(" ").trim() });
      i++; // skip the closing marker
      continue;
    }

    if (LEAD_OPEN.test(line)) {
      flushHtml();
      i++;
      const inner: string[] = [];
      while (i < lines.length && !LEAD_CLOSE.test(lines[i].trim())) {
        inner.push(lines[i]);
        i++;
      }
      blocks.push({ kind: "lead", text: inner.join(" ").trim() });
      i++; // skip the closing marker
      continue;
    }

    buffer.push(lines[i]);
    i++;
  }
  flushHtml();
  return blocks;
}
