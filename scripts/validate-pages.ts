// Page data validator.
// Scans src/data/pages/**/*.ts, imports each page, and enforces CLAUDE.md §2 + §7
// rules at build time. Exits non-zero on any failure.
//
// Usage:   node --experimental-strip-types scripts/validate-pages.ts
// Or via package.json:  npm run validate  (added to scripts)

import { readdirSync, statSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve, join } from "node:path";

import {
  FORBIDDEN_COMMITMENT_PATTERNS,
  FORBIDDEN_PHRASES,
  REQUIRED_FAQ_COUNT,
  REQUIRED_SCHEMAS,
  WORD_MIN,
  type PageData,
  type BodySection,
} from "../src/data/_types.ts";
import { authoredCompanies } from "../src/data/_authored-companies.ts";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT = resolve(process.cwd());
const PAGES_ROOT = join(ROOT, "src", "data", "pages");

interface Failure {
  file: string;
  slug: string;
  reason: string;
}

const failures: Failure[] = [];

// ---------------------------------------------------------------------------
// Scanner
// ---------------------------------------------------------------------------

function walk(dir: string): string[] {
  let out: string[] = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith("_")) continue; // skip registries/types
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) out = out.concat(walk(full));
    else if (name.endsWith(".ts")) out.push(full);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Word counter — walks all text-bearing fields in a PageData
// ---------------------------------------------------------------------------

function countText(input: unknown): string[] {
  const pieces: string[] = [];
  const visit = (v: unknown): void => {
    if (!v) return;
    if (typeof v === "string") { pieces.push(v); return; }
    if (Array.isArray(v)) { v.forEach(visit); return; }
    if (typeof v === "object") {
      for (const val of Object.values(v as Record<string, unknown>)) visit(val);
    }
  };
  visit(input);
  return pieces;
}

function wordCount(pieces: string[]): number {
  return pieces
    .join(" ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter((w) => /[a-zA-Z0-9]/.test(w))
    .length;
}

// ---------------------------------------------------------------------------
// Section helpers
// ---------------------------------------------------------------------------

function hasSectionType(body: BodySection[], type: BodySection["type"]): boolean {
  return body.some((b) => b.type === type);
}

function sectionOf<T extends BodySection["type"]>(
  body: BodySection[],
  type: T,
): Extract<BodySection, { type: T }> | undefined {
  return body.find((b) => b.type === type) as Extract<BodySection, { type: T }> | undefined;
}

// ---------------------------------------------------------------------------
// Page-level checks
// ---------------------------------------------------------------------------

function checkPage(file: string, page: PageData) {
  const fail = (reason: string) => failures.push({ file, slug: page.slug, reason });

  // --- identity + meta ---
  if (!page.slug?.startsWith("/")) fail(`slug must start with "/"`);
  if (!page.template) fail(`missing template`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.lastUpdated ?? ""))
    fail(`lastUpdated must be YYYY-MM-DD`);

  if (!page.meta?.title) fail(`meta.title missing`);
  if (page.meta?.title && (page.meta.title.length < 35 || page.meta.title.length > 70))
    fail(`meta.title length ${page.meta.title.length} — aim 50–60 chars`);
  if (!page.meta?.description) fail(`meta.description missing`);
  if (page.meta?.description && (page.meta.description.length < 120 || page.meta.description.length > 180))
    fail(`meta.description length ${page.meta.description.length} — aim 140–160`);

  // --- breadcrumbs ---
  if (!page.breadcrumbs || page.breadcrumbs.length < 1) fail(`breadcrumbs required`);

  // --- hero ---
  if (!page.hero?.headline) fail(`hero.headline missing`);

  // --- direct answer ---
  const daWords = page.directAnswer?.split(/\s+/).filter(Boolean).length ?? 0;
  if (daWords < 30 || daWords > 75)
    fail(`directAnswer must be 40–60 words (got ${daWords})`);

  // --- testimonials ---
  if (!Array.isArray(page.testimonials) || page.testimonials.length !== 3)
    fail(`testimonials must be exactly 3 (got ${page.testimonials?.length ?? 0})`);

  // --- faqs ---
  const expectedFaq = REQUIRED_FAQ_COUNT[page.template] ?? 8;
  if (!Array.isArray(page.faqs) || page.faqs.length !== expectedFaq)
    fail(`faqs must be ${expectedFaq} (got ${page.faqs?.length ?? 0})`);

  for (const [i, f] of (page.faqs ?? []).entries()) {
    const w = f.a?.split(/\s+/).filter(Boolean).length ?? 0;
    if (w < 60 || w > 150) fail(`faq[${i}] answer ${w} words (aim 75–125)`);
  }

  // --- schema coverage ---
  const required = REQUIRED_SCHEMAS[page.template] ?? [];
  for (const r of required) {
    if (!page.schema?.includes(r)) fail(`schema missing required type ${r} for template ${page.template}`);
  }

  // --- body / required sections for service-ish pages ---
  const needsUseCases: PageData["template"][] = [
    "ServiceCluster", "ServicePillar", "IndustryVertical", "IndustryCluster", "UseCase",
  ];
  if (needsUseCases.includes(page.template)) {
    const uc = sectionOf(page.body, "UseCases");
    if (!uc || uc.items.length < 4 || uc.items.length > 6)
      fail(`UseCases section must have 4–6 items (got ${uc?.items.length ?? 0})`);
  }

  // --- word count ---
  const wc = wordCount(countText(page));
  const min = WORD_MIN[page.template] ?? 1000;
  if (wc < min) fail(`word count ${wc} < min ${min} for ${page.template}`);

  // --- forbidden phrases (CLAUDE.md §4.5) ---
  const fullText = countText(page).join(" ").toLowerCase();
  for (const phrase of FORBIDDEN_PHRASES) {
    if (fullText.includes(phrase)) fail(`contains forbidden phrase: "${phrase}"`);
  }

  // --- forbidden commitments (timelines, prices) (CLAUDE.md §2.1) ---
  const rawText = countText(page).join(" ");
  for (const re of FORBIDDEN_COMMITMENT_PATTERNS) {
    const m = rawText.match(re);
    if (m) fail(`contains forbidden commitment / price claim: "${m[0]}"`);
  }

  // --- related pages guard (should not exist) ---
  if (/related\s+pages?\s*(section|area)/i.test(rawText))
    fail(`body contains "related pages" section — protocol forbids them`);
}

// ---------------------------------------------------------------------------
// Authored-companies dupe check (global)
// ---------------------------------------------------------------------------

function checkAuthoredCompanies() {
  const seen = new Map<string, string>();
  for (const c of authoredCompanies) {
    const key = c.name.trim().toLowerCase();
    if (seen.has(key)) {
      failures.push({
        file: "src/data/_authored-companies.ts",
        slug: c.firstUsedOn,
        reason: `duplicate authored company name: "${c.name}" (also on ${seen.get(key)})`,
      });
    } else {
      seen.set(key, c.firstUsedOn);
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  let pageFiles: string[] = [];
  try {
    pageFiles = walk(PAGES_ROOT);
  } catch {
    console.log("No src/data/pages/ yet — validator found 0 pages. (expected on fresh Wave 0 install)");
    return;
  }

  if (pageFiles.length === 0) {
    console.log("Validator: 0 pages found. Nothing to check.");
    return;
  }

  for (const file of pageFiles) {
    try {
      const mod = await import(pathToFileURL(file).href);
      const page: PageData | undefined = mod.page ?? mod.default?.page ?? mod.default;
      if (!page) {
        failures.push({ file, slug: "(unknown)", reason: "module does not export `page`" });
        continue;
      }
      checkPage(file, page);
    } catch (err) {
      failures.push({ file, slug: "(unknown)", reason: `import failed: ${(err as Error).message}` });
    }
  }

  checkAuthoredCompanies();

  // --- report ---
  console.log("---------------------------------------------");
  console.log(`Validator: scanned ${pageFiles.length} page(s).`);
  if (failures.length === 0) {
    console.log("All pages passed. ✓");
    return;
  }
  console.error(`FAILED: ${failures.length} issue(s):`);
  for (const f of failures) {
    console.error(`  [${f.slug}] ${f.reason}\n    ${f.file}`);
  }
  process.exitCode = 1;
}

main();
