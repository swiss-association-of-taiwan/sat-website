// Generates the responsive AVIF/WebP variants the home page serves, into
// public/images/r/. Run after adding or replacing one of these photos:
//
//   node scripts/responsive-images.mjs              (all photos below)
//   node scripts/responsive-images.mjs ev1 about-banner   (only these)
//
// Output is committed (Cloudflare just serves public/); widths are never
// upscaled past the source. <ResponsivePicture> discovers whatever exists in r/.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const dir = path.join(process.cwd(), "public", "images");
const out = path.join(dir, "r");

const jobs = [
  { file: "hero.jpg", widths: [640, 960, 1280, 1920] },
  { file: "next-event.jpg", widths: [480, 800, 1200] },
  { file: "ev1.jpg", widths: [480, 800, 1200] },
  { file: "ev2.jpg", widths: [480, 800, 1200] },
  { file: "ev3.jpg", widths: [480, 800, 1200] },
  { file: "members.jpg", widths: [480, 800, 1200] },
  // About page. The banner is a 4:3 photo that the page always shows as a 21:9
  // strip with object-position 50% 55%. The variants are pre-cropped to exactly
  // that strip (same region, same position), so nobody downloads the hidden top
  // and bottom. The page keeps its CSS crop, which the JPEG fallback still uses.
  // 660 rather than 640: a 1.75x phone showing it ~372 px wide needs 651 px.
  { file: "about-banner.jpg", widths: [660, 960, 1100], crop: { ratio: 21 / 9, y: 0.55 } },
  // Archive scans hold small type, so a higher quality than the photographs.
  { file: "archive-president-message.jpg", widths: [480, 660, 864], avif: 62, webp: 84 },
  { file: "archive-tages-anzeiger.jpg", widths: [360, 515], avif: 62, webp: 84 },
];

const only = process.argv.slice(2);

fs.mkdirSync(out, { recursive: true });

for (const { file, widths, avif: avifQ = 55, webp: webpQ = 78, crop } of jobs) {
  const name = path.parse(file).name;
  if (only.length && !only.includes(name)) continue;
  const source = path.join(dir, file);
  const { width: srcW, height: srcH } = await sharp(source).metadata();
  // Same region CSS "cover" + object-position shows: full width, ratio-high, with
  // the vertical offset at `y` of the spare height.
  const region = crop && {
    left: 0,
    // The offset is worked out from the exact (unrounded) strip height, as CSS does.
    top: Math.round((srcH - srcW / crop.ratio) * crop.y),
    width: srcW,
    height: Math.round(srcW / crop.ratio),
  };
  // Cap at the source width; a target above it becomes the source width itself.
  const sizes = [...new Set(widths.map((w) => Math.min(w, srcW)))];
  for (const w of sizes) {
    const base = region
      ? sharp(source).extract(region).resize({ width: w, height: Math.round(w / crop.ratio), fit: "fill" })
      : sharp(source).resize({ width: w, withoutEnlargement: true });
    const avif = await base.clone().avif({ quality: avifQ, effort: 4 }).toFile(path.join(out, `${name}-${w}.avif`));
    const webp = await base.clone().webp({ quality: webpQ }).toFile(path.join(out, `${name}-${w}.webp`));
    console.log(`${name}-${w}: avif ${(avif.size / 1024).toFixed(0)} KB, webp ${(webp.size / 1024).toFixed(0)} KB`);
  }
}
