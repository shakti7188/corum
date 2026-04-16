#!/usr/bin/env node
// Retry any failed downloads in manifest.json serially with backoff.
import { readFile, writeFile, stat, mkdir } from 'node:fs/promises';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const BASE = resolve(ROOT, 'public/assets/kota');
const MANIFEST = resolve(BASE, 'manifest.json');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function downloadOne(url, targetDir, attempts = 4) {
  const filename = basename(new URL(url).pathname);
  const outPath = resolve(targetDir, filename);
  for (let i = 1; i <= attempts; i++) {
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
      if (i === attempts) {
        return { url, filename, path: outPath, bytes: 0, ok: false, error: String(err.message || err) };
      }
      await sleep(600 * i);
    }
  }
}

async function run() {
  const manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));
  const failedCats = Object.keys(manifest.categories).filter((k) => k.endsWith('__failed'));
  if (failedCats.length === 0) {
    console.log('No failures in manifest — nothing to retry.');
    return;
  }

  for (const key of failedCats) {
    const cat = key.replace('__failed', '');
    const dir = resolve(BASE, cat);
    await mkdir(dir, { recursive: true });
    const recovered = [];
    const stillFailed = [];
    for (const item of manifest.categories[key]) {
      const r = await downloadOne(item.source, dir);
      if (r.ok) {
        console.log(`  OK  [${cat}] ${r.filename} (${r.bytes} bytes)`);
        recovered.push({
          filename: r.filename,
          bytes: r.bytes,
          publicPath: `/assets/kota/${cat}/${r.filename}`,
          source: r.url,
        });
      } else {
        console.log(`  ERR [${cat}] ${r.filename} -> ${r.error}`);
        stillFailed.push({ filename: r.filename, source: r.url, error: r.error });
      }
    }
    // Merge recovered into main category list
    manifest.categories[cat] = [...(manifest.categories[cat] || []), ...recovered];
    if (stillFailed.length > 0) {
      manifest.categories[key] = stillFailed;
    } else {
      delete manifest.categories[key];
    }
  }

  // Recompute summary
  let success = 0;
  let failed = 0;
  for (const [k, v] of Object.entries(manifest.categories)) {
    if (k.endsWith('__failed')) failed += v.length;
    else success += v.length;
  }
  manifest.summary = { total: success + failed, success, failed };
  manifest.generatedAt = new Date().toISOString();
  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));

  console.log('');
  console.log('========== RETRY SUMMARY ==========');
  console.log(`Total:      ${manifest.summary.total}`);
  console.log(`Successful: ${manifest.summary.success}`);
  console.log(`Failed:     ${manifest.summary.failed}`);
  console.log('===================================');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
