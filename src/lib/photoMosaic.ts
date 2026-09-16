import fs from "node:fs";
import path from "node:path";
import impressions from "../data/impressions.json";

export interface MosaicTile {
  filename: string;
  occasion: string;
  occasionLabel: string;
  /** Position within its band of 7 (0-6) — drives the tile span. */
  bandPosition: number;
}

const PUBLIC_IMPRESSIONS_DIR = path.join(process.cwd(), "public", "impressions");

// Bands of seven: one 2x2 tile, two 1x2 tall tiles, then four 1x1 tiles —
// twelve cells, packs flush at 6/4/2 columns. See
// handoff/SAT-DESIGN-ADDENDUM.md "Photo mosaic (Impressions)". Leftover
// photos past the last full band (< 7 remaining) fall through to plain 1x1.
export function tileSpanClass(bandPosition: number): string {
  if (bandPosition === 0) return "col-span-2 row-span-2";
  if (bandPosition === 1 || bandPosition === 2) return "row-span-2";
  return "";
}

// Reads public/impressions/ fresh at build time — dropping a file in adds
// it to the wall with no code change, per handoff/BUILD.md step 4. A photo
// missing from impressions.json's `photos` map still renders, in a final
// "unknown" bucket appended after every named occasion.
export function buildMosaic(): MosaicTile[] {
  const files = fs
    .readdirSync(PUBLIC_IMPRESSIONS_DIR)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  const { occasionOrder, occasions, photos } = impressions as {
    occasionOrder: string[];
    occasions: Record<string, string>;
    photos: Record<string, string>;
  };

  const queues = new Map<string, string[]>();
  for (const occasion of occasionOrder) queues.set(occasion, []);
  const unknown: string[] = [];

  for (const file of files) {
    const occasion = photos[file];
    if (occasion && queues.has(occasion)) {
      queues.get(occasion)!.push(file);
    } else {
      unknown.push(file);
    }
  }

  const cycle = [...occasionOrder, "__unknown__"];
  const tiles: MosaicTile[] = [];
  let remaining = files.length;
  let cursor = 0;

  while (remaining > 0) {
    const key = cycle[cursor % cycle.length];
    const queue = key === "__unknown__" ? unknown : queues.get(key)!;
    const file = queue.shift();
    if (file) {
      tiles.push({
        filename: file,
        occasion: key === "__unknown__" ? "unknown" : key,
        occasionLabel: key === "__unknown__" ? "SAT" : occasions[key],
        bandPosition: tiles.length % 7,
      });
      remaining--;
    }
    cursor++;
  }

  return tiles;
}
