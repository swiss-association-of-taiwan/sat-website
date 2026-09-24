import fs from "node:fs";
import path from "node:path";
import { withBase } from "./url";

// Reads the variants scripts/responsive-images.mjs wrote to public/images/r/.
const VARIANTS_DIR = path.join(process.cwd(), "public", "images", "r");

/** Widths available for an original like "/images/ev1.jpg", ascending. */
export function variantWidths(src: string): number[] {
  if (!fs.existsSync(VARIANTS_DIR)) return [];
  const name = path.parse(src).name;
  const re = new RegExp(`^${name}-(\\d+)\\.webp$`);
  return fs
    .readdirSync(VARIANTS_DIR)
    .map((f) => f.match(re)?.[1])
    .filter((w): w is string => Boolean(w))
    .map(Number)
    .sort((a, b) => a - b);
}

/** A `srcset` value for one format ("avif" | "webp"), or "" if there are no variants. */
export function variantSrcset(src: string, ext: "avif" | "webp"): string {
  const name = path.parse(src).name;
  return variantWidths(src)
    .map((w) => `${withBase(`/images/r/${name}-${w}.${ext}`)} ${w}w`)
    .join(", ");
}
