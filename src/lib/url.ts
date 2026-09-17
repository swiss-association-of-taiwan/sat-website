// GitHub Pages project page serves this site under /sat-website (see
// astro.config.mjs `base`), so every internal href/src needs that prefix.
// External URLs, mailto:, tel: and hash anchors pass through untouched —
// safe to wrap every href/src in the codebase with this, indiscriminately.
const ABSOLUTE = /^([a-z][a-z0-9+.-]*:|#)/i;

export function withBase(path: string): string {
  if (ABSOLUTE.test(path)) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
