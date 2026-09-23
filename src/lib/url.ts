// Deployed at the domain root (astro.config.mjs `base: '/'`), so this is a
// no-op today — kept so a future base-path change is a one-line config edit,
// not a codebase-wide find-and-replace. External URLs, mailto:, tel: and hash
// anchors pass through untouched — safe to wrap every href/src with this,
// indiscriminately.
const ABSOLUTE = /^([a-z][a-z0-9+.-]*:|#)/i;

export function withBase(path: string): string {
  if (ABSOLUTE.test(path)) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
