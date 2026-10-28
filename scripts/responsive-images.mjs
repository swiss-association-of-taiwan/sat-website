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
  // About page. The banner is 4:3 and shown cropped 21:9 (object-position), so
  // the variants are resized only, never cropped, to keep the crop identical.
  { file: "about-banner.jpg", widths: [640, 960, 1100] },
  // Archive scans hold small type, so a higher quality than the photographs.
  { file: "archive-president-message.jpg", widths: [480, 864], avif: 62, webp: 84 },
  { file: "archive-tages-anzeiger.jpg", widths: [360, 515], avif: 62, webp: 84 },
];

const only = process.argv.slice(2);

fs.mkdirSync(out, { recursive: true });

for (const { file, widths, avif: avifQ = 55, webp: webpQ = 78 } of jobs) {
  const name = path.parse(file).name;
  if (only.length && !only.includes(name)) continue;
  const source = path.join(dir, file);
  const { width: srcW } = await sharp(source).metadata();
  // Cap at the source width; a target above it becomes the source width itself.
  const sizes = [...new Set(widths.map((w) => Math.min(w, srcW)))];
  for (const w of sizes) {
    const base = sharp(source).resize({ width: w, withoutEnlargement: true });
    const avif = await base.clone().avif({ quality: avifQ, effort: 4 }).toFile(path.join(out, `${name}-${w}.avif`));
    const webp = await base.clone().webp({ quality: webpQ }).toFile(path.join(out, `${name}-${w}.webp`));
    console.log(`${name}-${w}: avif ${(avif.size / 1024).toFixed(0)} KB, webp ${(webp.size / 1024).toFixed(0)} KB`);
  }
}
