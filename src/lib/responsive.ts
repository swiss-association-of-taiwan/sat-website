import fs from "node:fs";
import path from "node:path";
import { withBase } from "./url";

// Reads the variants scripts/responsive-images.mjs wrote to public/images/r/.
const VARIANTS_DIR = path.join(process.cwd(), "public", "images", "r");

// The variants' base name: the file name without a trailing size, so both the
// original "/images/ev1.jpg" and a pre-sized "/images/r/members-896.jpg" map to
// the names their variants share ("ev1", "members").
function baseName(src: string): string {
  return path.parse(src).name.replace(/-\d+$/, "");
}

/** Widths available for an original like "/images/ev1.jpg", ascending. */
export function variantWidths(src: string): number[] {
  if (!fs.existsSync(VARIANTS_DIR)) return [];
  const name = baseName(src);
  const re = new RegExp(`^${name}-(\\d+)\\.webp$`);
  return fs
    .readdirSync(VARIANTS_DIR)
    .map((f) => f.match(re)?.[1])
    .filter((w): w is string => Boolean(w))
    .map(Number)
    .sort((a, b) => a - b);
}

/**
 * A `srcset` value for one format, or "" if there are no variants. "jpg" only
 * lists sizes whose JPEG exists — most photos have AVIF and WebP only and fall
 * back to the single original JPEG.
 */
export function variantSrcset(src: string, ext: "avif" | "webp" | "jpg"): string {
  const name = baseName(src);
  return variantWidths(src)
    .filter((w) => ext !== "jpg" || fs.existsSync(path.join(VARIANTS_DIR, `${name}-${w}.jpg`)))
    .map((w) => `${withBase(`/images/r/${name}-${w}.${ext}`)} ${w}w`)
    .join(", ");
}
