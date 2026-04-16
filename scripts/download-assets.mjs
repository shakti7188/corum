#!/usr/bin/env node
// Download all KOTA assets to /public/assets/kota/
import { mkdir, writeFile, stat } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = resolve(ROOT, 'public/assets/kota');

const assets = {
  badges: [
    'https://kota-content.b-cdn.net/app/uploads/2024/03/Digital-Agency-Network.svg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/clutch.svg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/awwwards.svg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/cssda.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/awwwards.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/mindsparkle.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/cssda.svg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/Path-1345.svg',
    'https://kota-content.b-cdn.net/app/uploads/2025/11/The-Lovies-4.png',
    'https://kota-content.b-cdn.net/app/uploads/2024/06/DAN-1-500x167.png',
  ],
  logos: [
    'https://kota-content.b-cdn.net/app/uploads/2023/10/Jamie-oliver.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/comptoir-libanais-1.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/british-red-cross.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/sym.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/penguin.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/raw.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/penhaligons.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/stoli.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/bounce.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/tangerine.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/tribepad.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/matchroom.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/diageo.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/sonovate.svg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/saatchi.svg',
  ],
  videos: [
    'https://kota-content.b-cdn.net/app/uploads/2025/04/Featured2-Compressed.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2025/08/GOAT-FeatureVideo.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2025/02/isi-vid2-1.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2025/04/Duplicated-Assets.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2025/09/Company-Loop4-compressed-2.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2024/04/dka-thumbnail-compressed.mp4',
    'https://kota-content.b-cdn.net/app/uploads/2024/03/work-video.mp4',
  ],
  images: [
    'https://kota-content.b-cdn.net/app/uploads/2023/11/header-3.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/bento1-1.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/bento2-1.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2023/11/bento4-1.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2023/10/contact-bg-2560x1440.jpg',
  ],
  team: [
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-alex.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/11/Jules-filtered.png',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-nat.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-jonny.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-margo.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-matt-1.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-huse.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-ed.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-piper.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-nicola2-1.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/03/team-emily3.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-ffion.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-bekah.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-em.jpg',
    'https://kota-content.b-cdn.net/app/uploads/2024/11/Ash-Filtered.png',
    'https://kota-content.b-cdn.net/app/uploads/2024/02/team-maja.jpg',
  ],
  ui: [
    'https://kota.co.uk/images/cyber-essentials.svg',
    'https://kota.co.uk/images/GPTW-Certificate.svg',
  ],
};

async function downloadOne(url, targetDir) {
  const filename = basename(new URL(url).pathname);
  const outPath = resolve(targetDir, filename);
  try {
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
    return { url, filename, path: outPath, bytes: s.size, ok: true };
  } catch (err) {
    return { url, filename, path: outPath, bytes: 0, ok: false, error: String(err.message || err) };
  }
}

async function run() {
  const results = {};
  let total = 0;
  let success = 0;
  let failed = 0;

  for (const [category, urls] of Object.entries(assets)) {
    const dir = resolve(BASE, category);
    await mkdir(dir, { recursive: true });
    results[category] = [];
    const batch = await Promise.all(urls.map((u) => downloadOne(u, dir)));
    for (const r of batch) {
      total += 1;
      if (r.ok) {
        success += 1;
        console.log(`  OK  [${category}] ${r.filename} (${r.bytes} bytes)`);
      } else {
        failed += 1;
        console.log(`  ERR [${category}] ${r.filename} -> ${r.error}`);
      }
      results[category].push(r);
    }
  }

  // Build manifest
  const manifest = {
    project: 'Corum8 — KOTA clone assets',
    sourceSite: 'https://kota.co.uk',
    generatedAt: new Date().toISOString(),
    summary: { total, success, failed },
    categories: {},
  };
  for (const [cat, items] of Object.entries(results)) {
    manifest.categories[cat] = items
      .filter((i) => i.ok)
      .map((i) => ({
        filename: i.filename,
        bytes: i.bytes,
        publicPath: `/assets/kota/${cat}/${i.filename}`,
        source: i.url,
      }));
    const failedItems = items.filter((i) => !i.ok);
    if (failedItems.length) {
      manifest.categories[cat + '__failed'] = failedItems.map((i) => ({
        filename: i.filename,
        source: i.url,
        error: i.error,
      }));
    }
  }

  await writeFile(resolve(BASE, 'manifest.json'), JSON.stringify(manifest, null, 2));

  console.log('');
  console.log('========== SUMMARY ==========');
  console.log(`Total:      ${total}`);
  console.log(`Successful: ${success}`);
  console.log(`Failed:     ${failed}`);
  console.log(`Manifest:   ${resolve(BASE, 'manifest.json')}`);
  console.log('=============================');

  if (failed > 0) process.exitCode = 1;
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
