#!/usr/bin/env node
// Re-download the 2023/11 badge variants under distinct filenames so they
// don't collide with the 2024/02 versions that share the same basename.
import { readFile, writeFile, stat, mkdir } from 'node:fs/promises';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = resolve(ROOT, 'public/assets/kota');
const MANIFEST = resolve(BASE, 'manifest.json');

// Mapping: (source URL) -> new filename within same category dir
const RENAMES = {
  'https://kota-content.b-cdn.net/app/uploads/2023/11/awwwards.svg': 'awwwards-2023-11.svg',
  'https://kota-content.b-cdn.net/app/uploads/2023/11/cssda.svg': 'cssda-2023-11.svg',
  // mindsparkle is unique, but its only source is 2023/11 — leave it alone.
};

async function download(url, outPath) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      Referer: 'https://kota.co.uk/',
      Accept: '*/*',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  const s = await stat(outPath);
  return s.size;
}

async function run() {
  const manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));

  // 1. Re-fetch the 2024/02 originals to restore what was overwritten.
  const restorations = [
    {
      url: 'https://kota-content.b-cdn.net/app/uploads/2024/02/awwwards.svg',
      filename: 'awwwards.svg',
    },
    {
      url: 'https://kota-content.b-cdn.net/app/uploads/2024/02/cssda.svg',
      filename: 'cssda.svg',
    },
  ];
  const badgesDir = resolve(BASE, 'badges');
  await mkdir(badgesDir, { recursive: true });
  for (const r of restorations) {
    const bytes = await download(r.url, resolve(badgesDir, r.filename));
    console.log(`  RESTORED [badges] ${r.filename} (${bytes} bytes)`);
  }

  // 2. Download 2023/11 dupes under new names + update manifest entries.
  for (const [sourceUrl, newName] of Object.entries(RENAMES)) {
    const newPath = resolve(badgesDir, newName);
    const bytes = await download(sourceUrl, newPath);
    console.log(`  RENAMED  [badges] ${newName} (${bytes} bytes)`);

    // Update manifest: find the entry with this sourceUrl and rename it.
    const entries = manifest.categories.badges;
    const idx = entries.findIndex((e) => e.source === sourceUrl);
    if (idx >= 0) {
      entries[idx].filename = newName;
      entries[idx].publicPath = `/assets/kota/badges/${newName}`;
      entries[idx].bytes = bytes;
    }
  }

  // 3. Also refresh sizes for the restored 2024/02 entries in the manifest.
  for (const r of restorations) {
    const entry = manifest.categories.badges.find((e) => e.source === r.url);
    if (entry) {
      const s = await stat(resolve(badgesDir, r.filename));
      entry.bytes = s.size;
    }
  }

  manifest.generatedAt = new Date().toISOString();
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log('Manifest updated.');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
