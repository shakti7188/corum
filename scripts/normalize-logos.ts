// Trust strip logo normalizer.
//
// Reads from assets/clients-old/ (the snapshot of /public/clients/ taken
// before this rebuild) and writes cleaned wordmark assets to
// public/clients/. Pipeline per file:
//   1. Skip if in DROP list (not a logo / not a wordmark / unsalvageable).
//   2. If duplicate-format variant of another file, skip the worse one.
//   3. If duplicate-text asset (e.g. TRON shows wordmark twice), crop to
//      right half so only the cleaner wordmark survives.
//   4. If white-on-transparent (invisible on light bg), negate RGB but
//      preserve alpha so the artwork becomes dark-on-transparent.
//   5. Trim transparent borders so internal canvas padding is gone.
//   6. Resize to fit inside a 280x80 box (height drives, width capped) so
//      every logo lands at uniform optical weight.
//   7. Re-export as WebP at quality 92.
//
// Run with: node --experimental-strip-types scripts/normalize-logos.ts

import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const SRC = 'assets/clients-old';
const OUT = 'public/clients';

const DROP = new Set([
  'Goldkoise.webp',     // 3D lion head, not a logo
  'Eulium.webp',        // icon-only
  'dailycoin.png',      // dot-pattern icon, no wordmark
  'crypto-tower.png',   // garbled architecture image
  'metavisa.png',       // round button profile, not a horizontal wordmark
  'ubuntu-tribe.png',   // wordmark spans both halves — half-crop cuts it; not tier-1, drop
  'maga-trump.png',     // "MEME" rendered in near-white, invisible on light bg
  'metarix.png',        // dropped per user direction
  'refine-medium.webp', // dropped per user direction
  'cobox.png',          // dropped per user direction
  // duplicate-format variants — keep the cleaner one
  'Plasmapay.png',      // .webp is cleaner
  'ozonex.png',         // .webp is cleaner
  'refine-medium.png',  // .webp is cleaner
  'fanadise.png',       // .webp is cleaner
]);

const INVERT = new Set([
  'beincrypto.png',
  'coingape.png',
  'zycrypto.png',
  'cointelligence.png',
]);

const CROP_RIGHT_HALF = new Set([
  'tron.png',
]);

const TARGET_H = 80;
const MAX_W = 280;

function outName(file: string) {
  return file.replace(/\.(png|webp|jpg|jpeg)$/i, '.webp').toLowerCase();
}

async function processOne(file: string) {
  if (DROP.has(file)) return { file, status: 'dropped' as const };

  const inputPath = join(SRC, file);

  // Stage 1: crop right half if needed (sharp can't chain .trim() after
  // .extract() in one pipeline — materialize to buffer between stages).
  let buf: Buffer;
  if (CROP_RIGHT_HALF.has(file)) {
    const meta = await sharp(inputPath).metadata();
    const w = meta.width ?? 0;
    const h = meta.height ?? 0;
    const half = Math.floor(w / 2);
    buf = await sharp(inputPath)
      .extract({ left: half, top: 0, width: w - half, height: h })
      .toBuffer();
  } else {
    buf = await sharp(inputPath).toBuffer();
  }

  // Stage 2: invert RGB for white-on-transparent assets, trim, resize, webp.
  let pipeline = sharp(buf);
  if (INVERT.has(file)) {
    pipeline = pipeline.negate({ alpha: false });
  }
  pipeline = pipeline.trim({ threshold: 10 }).resize({
    height: TARGET_H,
    width: MAX_W,
    fit: 'inside',
    withoutEnlargement: false,
    kernel: 'lanczos3',
  });

  const out = outName(file);
  const info = await pipeline.webp({ quality: 92 }).toFile(join(OUT, out));
  return {
    file,
    status: 'ok' as const,
    outName: out,
    bytes: info.size,
    w: info.width,
    h: info.height,
  };
}

async function main() {
  await mkdir(OUT, { recursive: true });

  // Wipe existing /public/clients output so the folder reflects only the
  // newly-normalized set. Backup is in assets/clients-old/.
  const existing = await readdir(OUT);
  const { unlink } = await import('node:fs/promises');
  for (const f of existing) await unlink(join(OUT, f));

  const inputs = (await readdir(SRC)).filter((f) =>
    /\.(png|webp|jpg|jpeg)$/i.test(f),
  );

  const results: Array<Awaited<ReturnType<typeof processOne>>> = [];
  for (const f of inputs) {
    try {
      results.push(await processOne(f));
    } catch (err) {
      console.error('FAIL', f, (err as Error).message);
      results.push({ file: f, status: 'error' as const });
    }
  }

  const ok = results.filter((r) => r.status === 'ok');
  const dropped = results.filter((r) => r.status === 'dropped');
  const errored = results.filter((r) => r.status === 'error');

  console.log(`\nNormalized ${ok.length} logos`);
  console.log(`Dropped     ${dropped.length}: ${dropped.map((r) => r.file).join(', ')}`);
  if (errored.length) {
    console.log(`Errored     ${errored.length}: ${errored.map((r) => r.file).join(', ')}`);
  }

  console.log('\nOutput dimensions (w x h, bytes):');
  for (const r of ok) {
    if (r.status !== 'ok') continue;
    console.log(`  ${r.outName.padEnd(28)} ${String(r.w).padStart(4)}x${String(r.h).padStart(3)}  ${r.bytes}b`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
