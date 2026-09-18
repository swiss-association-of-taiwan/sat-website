import fs from "node:fs";
import path from "node:path";
import impressions from "../content/impressions.json";

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
  const files = fs.readdirSync(PUBLIC_IMPRESSIONS_DIR).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  const fileSet = new Set(files);

  const { occasionOrder, occasions, photos } = impressions as {
    occasionOrder: string[];
    occasions: Record<string, string>;
    photos: Record<string, string>;
  };

  const queues = new Map<string, string[]>();
  for (const occasion of occasionOrder) queues.set(occasion, []);

  // Within an occasion, photos queue in the order impressions.json lists
  // them (not filesystem/alphabetical order) — that's what keeps the
  // original 49 leading each occasion's turn with the newer batches
  // (different filename prefixes) falling in after them, matching the
  // approved mockup's sequence exactly.
  const tagged = new Set<string>();
  for (const [file, occasion] of Object.entries(photos)) {
    if (fileSet.has(file) && queues.has(occasion)) {
      queues.get(occasion)!.push(file);
      tagged.add(file);
    }
  }

  // Anything on disk with no entry in photos{} — alphabetical, since there's
  // no other ordering signal for a photo the committee just dropped in.
  const unknown = files.filter((f) => !tagged.has(f)).sort();

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

export interface OccasionFilter {
  key: string;
  label: string;
}

// Drives the filter bar above the mosaic — "All" first, then every occasion
// in the order impressions.json defines, so a new occasion (or a reordered
// one) shows up automatically with no component change.
export function getOccasionFilters(): OccasionFilter[] {
  const { occasionOrder, occasions } = impressions as {
    occasionOrder: string[];
    occasions: Record<string, string>;
  };
  return [{ key: "all", label: "All" }, ...occasionOrder.map((key) => ({ key, label: occasions[key] }))];
}
