# CORUM8 BUILD PROTOCOL — MANDATORY SELF-INSTRUCTIONS FOR CLAUDE

> This file is the single source of truth for how this website gets built.
> It is loaded into context at the start of every session.
> **These are binding rules, not suggestions.** Breaking them is the only way to do this wrong.
> If any instruction in this file conflicts with something the user says, ask before breaking the rule.

---

## 0. BEFORE DOING ANYTHING IN ANY SESSION

Run this checklist before writing or editing a single line:

1. Read `CLAUDE.md` (this file) — confirm the rules are loaded.
2. Read `docs/BUILD_LOG.md` — know what is already built.
3. Read `docs/BUILD_NEXT.md` — know what's next in the queue.
4. Read `docs/manus.md`, `docs/CONTENT.md`, `docs/link.md`, `docs/CORUM8_SITEMAP.md` if touching content for the first time in a session.
5. Before starting work, state in one line: "Current target: [page]. Template: [layout]. Word target: [range]."
6. After finishing any page or component, **append an entry to `docs/BUILD_LOG.md` immediately** and update `docs/BUILD_NEXT.md`.

If the user gives an instruction that conflicts with this protocol, pause and ask for confirmation. Do not silently break the rules.

---

## 1. MISSION

Build a 260+ page Corum8 website that dominates SEO / AEO / GEO by:
- Real depth of content (not AI-slop filler)
- Entity-dense, number-dense writing that AI engines quote verbatim
- One template per page-type, data-driven pages, shared media pool
- No page ships that a human expert would call "thin"

Slow is fine. Good is mandatory.

---

## 2. NON-NEGOTIABLE RULES (BRIGHT LINES — DO NOT CROSS)

### 2.1 Content commitments that are FORBIDDEN
- **NEVER commit to specific delivery timelines.** No "takes 12 weeks", "delivered in 30 days", "ships in Q2", "6-month engagement". Instead, write about **factors that drive timeline** — scope, compliance depth, integrations, team readiness.
- **NEVER make aggressive price claims.** No "starting at $X", "only $Y", "guaranteed ROI", "cheapest in the market", "pay after results", specific dollar quotes, or hard floor/ceiling prices. Instead, write about **cost drivers** — complexity variables, white-label vs custom, audit scope, integration count.
- **NEVER use "Related Pages" or "Related Articles" sections.** Breadcrumbs only. Internal links happen naturally inside body paragraphs.
- **NEVER add a Process Timeline section by default.** Only include it if the specific page truly benefits (e.g., token launches, full exchange builds). On every other page, skip it.
- **NEVER hallucinate client numbers beyond what's in `docs/CONTENT.md`.** Real clients (Binance, Cashaa, Fanadise, Ubuntu Tribe, KuCoin, Metarix, etc.) only get the numbers stated there. Do not invent new figures for real clients.
- **NEVER copy-paste body content between pages.** Every page has unique prose. Shared boilerplate (CTAs, headers, footers, navigation) lives in components only.

### 2.2 Content requirements on EVERY page
- Direct Answer block (40–60 words) at top of main content — this is what AI engines quote.
- 8 FAQs per page (10 for cost guides). Each answer 75–125 words.
- 3 testimonials per page, schema-wrapped.
- 4–6 freshly authored use cases per page (service cluster / use case / industry / blockchain page types).
- Schema markup matching the page-type table in §6.
- Breadcrumb UI + `BreadcrumbList` schema.
- Meta title (50–60 chars), meta description (140–160 chars), OG tags, canonical URL.
- Word count meeting the minimum for the page type (§5).
- Named entities (blockchain names, regulators, clients, standards) throughout body.
- At least 3 specific numbers in body content.

### 2.3 Architecture rules
- **One layout file per page type.** Edit the layout → all pages using it change. Never duplicate layout code across pages.
- **Every page is a data file + a 3-line `.astro` shim.** Shims never contain prose or markup.
- **Media comes from the shared pool** (`src/data/media.ts`). Pages reference tokens (e.g., `"hero.dev"`) — never raw paths.
- **Shared section components** (`src/components/sections/*`) render everything. Layouts compose them; pages don't write HTML.
- **Validation layer (Zod) gates every page.** A page missing required fields fails the build.

---

## 3. THE PAGE-BUILD PROTOCOL (use this for every single page)

Every page follows this 9-step process. Do not skip steps.

### Step 1 — Brief (5 min)
Open the page's entry in `docs/BUILD_NEXT.md`. Confirm:
- URL slug
- Template (which layout)
- Primary keyword + 3–5 secondaries
- Target word count range
- Search intent (commercial / informational / comparison)
- Related pages in the cluster (for linking awareness, NOT for a "Related" section)

### Step 2 — Research (10–15 min)
Before writing prose:
- Read the existing CONTENT.md / sitemap entries relevant to this topic.
- Check Google PAA patterns for the primary keyword (note what questions the FAQ must cover).
- Review 1–2 competitor pages on the same topic (BlockchainAppFactory, Antier, MarketAcross, LunaPR) for what they cover and what they miss.
- Note named entities (blockchains, regulators, tools, standards, clients) that should appear in body.

### Step 3 — Outline (10 min)
Draft H1 + all H2s with one-sentence descriptions. Confirm the outline covers:
- Direct Answer
- Opening context / why this matters now
- Definition (what is X)
- Anatomy / deep breakdown
- Signals you need this
- Decision factors (replaces timeline commitments)
- Common pitfalls
- Technology / stack notes (where relevant)
- How we approach it (philosophy, NOT rigid timeline)
- Use cases (authored)
- Outcomes we've driven
- Why Corum8 for this service
- Testimonials
- FAQs (8, or 10 for cost guides)
- Final CTA

Skip sections only where they don't fit the page type. Never skip the Direct Answer, FAQs, testimonials, or schema.

### Step 4 — Write Direct Answer + FAQs FIRST (20 min)
This is deliberate: the AI-citable content must be crafted, not left as afterthought. Draft 8 FAQs in full before any body prose.

### Step 5 — Write body (45–90 min)
Hit the word target. Section-by-section. Specific numbers, named entities, concrete scenarios.

### Step 6 — Author use cases (15 min)
4–6 freshly authored scenarios. Each follows the 4-rule format (§4.2). Log each invented company name to `src/data/_authored-companies.ts` to prevent reuse across pages.

### Step 7 — Assign testimonials (5 min)
Select 3 from `src/data/testimonials.ts` matching page topic + industry + region. If the library doesn't have enough matches, author new ones and add them to the library.

### Step 8 — Wire up data file + meta + schema (10 min)
- Create `src/data/pages/[path].ts` with the full `PageData` object.
- Create `src/pages/[path].astro` as a 3-line shim.
- Confirm meta tags, OG, canonical, schema types emit.

### Step 9 — Self-audit checklist (5 min)
Before marking the page complete, verify EVERY item in §7. If any fail, fix before moving on.

Then update `docs/BUILD_LOG.md` and `docs/BUILD_NEXT.md`.

---

## 4. CONTENT STYLE RULES

### 4.1 Voice
- Declarative, expert, understated. Sentences lead with the point.
- Write like an industry publication (Decrypt, The Block, a16z crypto) not a brochure.
- Numbers beat adjectives. "1,100+ projects, $120M revenue" beats "highly experienced team."
- Mention named entities aggressively — specific blockchains, regulators, frameworks, clients.
- Short paragraphs (2–4 sentences). Use sub-headings and lists to break density.
- Active voice. No "we are committed to providing cutting-edge solutions."

### 4.2 Use case authoring format (mandatory 4 rules)
Every invented use case has:
1. **Named fake company** — logged in `src/data/_authored-companies.ts` to prevent reuse. Vary naming by region (Arabic names for Dubai pages, East Asian for Singapore, etc.).
2. **Specific founding detail** — year, region, team size or stage (pre-seed, Series A, post-ICO, etc.).
3. **Exact trigger moment** — the concrete thing that made them seek this service.
4. **Defined outcome with a number** — capital raised, TPS, users, volume, community size, audit grade, listings secured, growth percentage.

Format as short narrative paragraphs (80–140 words each), NOT bullet lists.

### 4.3 Testimonial authoring format
Same 4 rules as use cases, plus:
- Reviewer name + role + company + location
- Quote references the exact service of the page pulling it
- Schema-wrapped as `Review` with `reviewRating`
- 40–80 words per quote

### 4.4 FAQ answer format (AEO-critical)
Every FAQ answer:
- Opens with the **direct answer in one complete sentence** — AI engines quote the first 1–2 sentences.
- Expands in 2–4 more sentences with specifics, numbers, scenarios.
- Does NOT open with hedging ("It depends…", "There are many factors…").
- Uses the exact question wording for entity matching.
- 75–125 words total.

### 4.5 FORBIDDEN PHRASES (AI-slop detector)
Never use these. Search the page before shipping:
- "in today's fast-paced world"
- "in the ever-evolving landscape"
- "cutting-edge"
- "best-in-class"
- "world-class"
- "seamlessly"
- "leverage" (as a verb for "use")
- "robust" (unless technical spec)
- "unlock the power of"
- "game-changer"
- "revolutionize" / "revolutionary"
- "next-generation" (unless literal)
- "synergy"
- "state-of-the-art"
- "paradigm shift"
- "holistic"
- "empower your business"
- "take your X to the next level"
- "navigate the complexities"
- "at the forefront of"
- "elevate your"
- "unparalleled"
- "bespoke" (unless tailoring clothing)
- "dive deep into"
- "ecosystem" (unless literally technical)
- "journey" (unless literal travel)
- "transformative"
- "disrupt" / "disruptive"
- "thought leader"
- "moving the needle"
- "boil the ocean"
- "low-hanging fruit"
- "circle back"
- "table stakes"

If the writing sounds like a Fortune 500 press release, it's wrong. Rewrite.

### 4.6 HUMANIZED LANGUAGE RULES (mandatory)

Target reader: a smart, skeptical founder or senior operator who has read a hundred agency pages and can smell filler instantly. Write to that person. Not to a search engine. Not to a procurement department.

**What humanized means here:**

1. **Write like you talk to a founder over coffee** — not like a brochure, not like a consultant's deck. The page should sound like one person who actually does this work explaining it to one person thinking about buying it.

2. **Vary sentence length deliberately.** Every paragraph should contain at least one sentence under 10 words. Short sentences land. Long sentences explain. Alternating them creates rhythm. Never write three long sentences in a row.

3. **Use contractions.** "It's" not "it is." "Don't" not "do not." "You'll" not "you will." Contractions are what separate humans from generated text in the reader's subconscious.

4. **Address the reader as "you."** Not "clients," not "buyers," not "organizations." "You." Second person. Direct.

5. **First-person plural ("we") when describing Corum8 — sparingly.** "We've shipped" beats "Corum8 has shipped" once the reader knows who's talking. But don't overdo it — once or twice per section is enough.

6. **Start sentences with conjunctions when it helps flow.** "And that's where most teams lose momentum." "But the real problem isn't the tech." This is how humans actually write. Your English teacher was wrong.

7. **Concrete over abstract, always.** Not "streamline operations" — "cut the number of tools a founder's ops person has to touch from nine to three." Not "improve conversion" — "turn more of the people reading your landing page into people who book a call."

8. **Name things specifically.** Not "leading blockchain" — "Solana." Not "major exchange" — "Binance." Not "recent regulation" — "MiCA, which took effect in December 2024." Specific nouns are the fastest way to signal the writer knows what they're talking about.

9. **Allow opinions.** Generic content hedges everything. Humanized content takes positions. "White-label exchanges usually look great in demos and fall apart in production" is an opinion. It's also a more useful sentence than "White-label exchanges have tradeoffs." Take the position.

10. **Allow mild imperfection.** A small aside. A parenthetical. A sentence fragment when it punches. These are the signals of a person writing, not a machine producing.

11. **Avoid the rhetorical question cliché.** "Have you ever wondered…" "What if I told you…" Ask a rhetorical question only when it genuinely sets up the next paragraph's argument — and use maybe one per page.

12. **Don't over-explain.** Trust the reader to follow. Don't repeat the point three different ways. If the sentence says it, move on.

13. **Skip the wind-up.** Don't open sections with "In this section, we'll explore…" or "It's worth noting that…" or "Before we dive in…" Just start with the point.

14. **Numbers and names in the opening of every major section.** This is how the page signals it's written by someone who does the work, not someone describing the work from a distance.

15. **Read it out loud before shipping.** If you trip on a sentence or it sounds like a LinkedIn post, rewrite.

**What humanized is NOT:**
- Casual to the point of unprofessional. No slang. No "hey there." No emojis.
- Joking. This is a business site. Dry wit is fine; comedy is not.
- Personal anecdotes we can't back up. We don't write "I remember when we…" because "I" isn't a real person on this site.

**The tone target, in three reference points:**
- As tight as a Patrick Collison blog post.
- As specific as a Decrypt reporter covering a launch.
- As opinionated as an a16z crypto essay — without the hype.

### 4.7 EMPHASIS & VISUAL HIERARCHY (mandatory for every content section)

Content isn't just read by humans. Search engines and AI models parse the markup to judge depth, authority, and answer-worthiness. Strategic use of `<strong>`, `<em>`, headings, lists, and tables is how we tell those systems "this section contains a complete, authoritative answer." Treat emphasis as a first-class authoring tool, not decoration.

**Rules every page must follow:**

1. **Bold named entities on first mention per section** — blockchain names (Ethereum, Solana, TON), regulators (VARA, MiCA, FCA, SEC), tools (Fireblocks, Chainalysis, Sumsub), competitor venues (Binance, Coinbase, Uniswap), technical standards (ERC-20, EIP-4844). After the first mention in a section, drop the bold. This pattern signals entity density to parsers and helps AI engines map the page to a knowledge graph.

2. **Bold specific numbers and metrics** — `$32M raised`, `180K+ TPS`, `MiCA took effect December 2024`. Numbers are high-signal fact tokens. Highlighting them reinforces "this page contains verifiable, specific information."

3. **Bold opinionated positions** — when you take a defensible stance, bold it. Example: `<strong>An exchange without liquidity is a landing page.</strong>` These become pull-quote-style anchors that AI engines sometimes extract verbatim.

4. **Italicize (<em>) for contrast, asides, and sharper opinions** — italics signal human voice: `<em>It mostly fails.</em>` or `<em>The technology follows from that call.</em>` Use for short, pointed statements — not paragraphs.

5. **Use lists instead of comma-laden sentences** — every enumeration of 3+ items becomes a `<ul>` or `<ol>`. Parsers extract lists cleanly; prose enumerations get truncated.

6. **Use tables for comparison / specification data** — any time you're communicating rows-and-columns of facts, use `<table>` via `ComparisonTable`. AI engines quote tables with high fidelity.

7. **FAQ answers: first sentence bolded** — open every FAQ answer with a complete-sentence direct answer wrapped in `<strong>`. Example: `<strong>Crypto exchange development is the end-to-end engineering of a venue...</strong>` Then expand in the next 2-4 sentences. AI engines extract the first bolded sentence as the canonical answer.

8. **Don't overdo it** — if every other word is bold, nothing stands out. Target: 4–8 bolded terms per 200 words of prose. One or two italicized asides per paragraph maximum.

**Typography hierarchy (enforced by BodyRenderer CSS):**

| Level | Use for | Size ramp |
|---|---|---|
| `<h1>` | Hero only — one per page | Hero-native |
| `<h2>` | Major section headings (Definition, Anatomy, Pitfalls, FAQs) | clamp(1.85rem, 3.8vw, 2.65rem) |
| `<h3>` | Sub-section headings (e.g. each pitfall, each factor, each deep-breakdown subsection) | clamp(1.45rem, 2.2vw, 1.65rem) |
| `<h4>` | Card / tile titles inside grids | clamp(1.2rem, 1.8vw, 1.35rem) |
| `<p>` | Body prose | 1.02rem, line-height 1.72 |

No section ever has "heading + 2 sentences." If the content under a heading is that thin, collapse the heading or expand the content.

### 4.8 AEO/SEO DEPTH SIGNALS (what machines read as authority)

Humans judge a page by whether it reads well. Machines judge a page by a different set of signals. Both matter. These are the signals every page must exhibit.

**Entity density:**
- At least 8–10 named entities per 1000 words of body content (blockchains, regulators, tools, standards, named clients).
- Entity co-occurrence matters — pages about exchanges should mention CEX venues AND regulators AND custody providers AND chain names in close proximity. That co-occurrence is what AI engines use to judge topical completeness.

**Fact density:**
- At least 1 specific number per 200 words of body content. Prices, percentages, dates, volumes, TPS, word counts — anything verifiable.
- Dates in absolute form when possible (`December 2024`) rather than relative (`last year`).

**Structural clarity:**
- Headings nested correctly — never skip levels (no `h2 → h4`).
- Every `<ul>` / `<ol>` has at least 3 items. Below 3, write as prose.
- Tables have `<thead>` and consistent column counts.
- Definition-style sentences when introducing a concept: `<strong>X</strong> is a Y that does Z.`

**Answer patterns (direct-answer-first):**
- Every FAQ opens with the answer as the first sentence.
- Every major section's first paragraph contains the section's thesis in a complete sentence (not a wind-up).
- Direct Answer block at page top summarizes the entire page in 40–60 words.

**Expert/E-E-A-T signals:**
- Phrases like "we've seen," "in practice," "our experience," "in production" — used sparingly but deliberately. They signal first-hand knowledge.
- Specific failure modes and edge cases. Generic advice is cheap; specific failure modes are expert.
- Direct opinions with reasoning. AI engines have learned to distinguish hedged generic content from content that takes positions.

**External authority links:**
- When referencing a regulator, standard, or canonical document, link out to the source on first mention when a stable URL exists. Example: `<a href="https://www.vara.ae/">VARA</a>`. Don't force links where they aren't natural — but a page with zero external citations looks thinner to crawlers than one with two or three.

**Freshness:**
- `lastUpdated` in page data drives the visible "last updated" stamp and the `dateModified` in schema. Update it whenever a page is meaningfully revised.
- Mention current-year context where relevant ("in 2026," "post-MiCA"). AI engines weight freshness.

**Validator coverage:**
- The build-time validator (`scripts/validate-pages.ts`) enforces word count, FAQ count, forbidden phrases, and commitment patterns.
- It does NOT yet enforce entity density or bold-count — those are authoring-discipline items. Every self-audit must manually check them.

---

## 5. WORD TARGETS BY PAGE TYPE (calibrated 2026-04-18, re-calibrated 2026-04-18)

The reference page `/services/development/exchange` ships at ~5,500 words. That is the **ceiling**, not the norm. Every other page targets **50–70% of the reference**, whichever lets the topic say what it needs to say without padding. Quality of content beats absolute length — a 2,700-word page with real depth beats a 4,500-word page padded with filler.

Rule of thumb: **aim for whatever length the topic actually needs.** If a page can say what it needs to say in ~50% of the reference (around 2,750 words), ship it at that length. Don't stretch content to hit a number. Don't cut content that's earning its place.

| Page type | Target range | Floor | Notes |
|---|---|---|---|
| Homepage | 2,000–2,600 | 1,800 | Dense index; most of the work is routing and proof |
| Service Pillar | 3,000–4,200 | 2,800 | Broader than a cluster |
| Service Cluster | **2,500–3,500** | **2,300** | Normal target is ~50–65% of reference. Exchange is the exception. |
| Industry Pillar | 2,600–3,500 | 2,400 | |
| Industry Cluster | 2,200–3,000 | 2,000 | |
| Use Case page | 1,800–2,600 | 1,600 | Narrative, not encyclopedic |
| Comparison page | 2,400–3,400 | 2,200 | Table + dimension prose |
| Cost Guide | 3,200–4,500 | 2,900 | Longer because cost needs breakdown |
| Location/GEO | 1,800–2,400 | 1,600 | |
| Blockchain-specific | 2,200–3,200 | 2,000 | |
| Tools page | 1,000 + interactive | 900 + tool | |
| Case Study | 1,400–2,200 | 1,200 | Story-shaped |
| Blog post | 1,200–2,000 | 1,000 | Topic-dependent |
| About / Core | 1,000–1,600 | 900 | Lean, not padded |

A page under the floor is NOT DONE — expand. A page above the target is fine only when every extra section earns its place. **Prefer cutting to padding.** If you can't fill the section without filler, cut the section.

**The one exception:** `/services/development/exchange` at ~5,500 words is the voice-calibration reference — it stays long. All other exchange-adjacent pages still target 2,500–3,500.

---

## 6. SCHEMA MARKUP TABLE (required per page type)

| Page type | Required JSON-LD |
|---|---|
| Homepage | Organization, WebSite, LocalBusiness |
| Service Pillar / Cluster | Service, FAQPage, BreadcrumbList, HowTo (if HowTo section present) |
| Industry | Service, FAQPage, BreadcrumbList |
| Case Study | Article, FAQPage, BreadcrumbList |
| Blog Post | Article, FAQPage, BreadcrumbList, Person (author) |
| Location | LocalBusiness, FAQPage, BreadcrumbList |
| Comparison | Article, FAQPage, BreadcrumbList |
| Cost Guide | Article, FAQPage, HowTo, BreadcrumbList |
| Tool | WebApplication, BreadcrumbList |
| Use Case | Article, FAQPage, BreadcrumbList |

Emit all schemas from `src/data/schema.ts` helpers. No inline JSON-LD in pages.

---

## 7. SELF-AUDIT CHECKLIST (run before marking any page complete)

Word count
- [ ] Meets minimum for page type (§5)

Required sections
- [ ] Direct Answer block present, 40–60 words
- [ ] 8 FAQs (or 10 for cost guides), each 75–125 words
- [ ] 3 testimonials, each page-topic-relevant
- [ ] 4–6 authored use cases (service / industry / use case / blockchain pages)
- [ ] Breadcrumb UI + schema
- [ ] NO "Related Pages" section

Forbidden commitments
- [ ] No specific timeline commitments (weeks / months / deadlines)
- [ ] No aggressive price claims (no specific dollar amounts, no "starting at X", no guarantees)
- [ ] No "Process Timeline" section unless this specific page justifies it

Content quality
- [ ] Named entities in body (blockchains, regulators, standards, clients)
- [ ] At least 3 specific numbers
- [ ] No AI-slop forbidden phrases (§4.5)
- [ ] No paragraph longer than 5 sentences
- [ ] No section is just a heading with 2 sentences

Humanized language (§4.6)
- [ ] Every paragraph has at least one sentence under 10 words
- [ ] Contractions used naturally throughout
- [ ] Reader addressed as "you" (not "clients," "organizations")
- [ ] At least one concrete, opinionated sentence per major section
- [ ] No section opens with "In this section…" / "It's worth noting…" / "Before we dive in…"
- [ ] Page takes at least one defensible position (an opinion, not just facts)
- [ ] Read out loud — no sentence trips the tongue or sounds like LinkedIn

SEO / meta
- [ ] Meta title 50–60 chars with primary keyword in first 3 words
- [ ] Meta description 140–160 chars
- [ ] OG tags + Twitter card
- [ ] Canonical URL
- [ ] All images have alt text
- [ ] Exactly one H1

Schema
- [ ] All required schemas for this page type present (§6)
- [ ] Testimonials wrapped as Review with reviewRating
- [ ] FAQs wrapped as FAQPage
- [ ] Breadcrumbs wrapped as BreadcrumbList

Architecture
- [ ] Page is a data file + 3-line `.astro` shim
- [ ] Media references tokens from `src/data/media.ts`, not raw paths
- [ ] All invented company names logged in `src/data/_authored-companies.ts`
- [ ] No duplicate invented company names across pages

Log
- [ ] Entry appended to `docs/BUILD_LOG.md`
- [ ] `docs/BUILD_NEXT.md` updated

If any item fails, fix before moving on. Do not batch corrections.

---

## 8. SESSION RESUMPTION PROTOCOL

Context might get lost between sessions. To resume cleanly:

1. Read `CLAUDE.md` (this file).
2. Read `docs/BUILD_LOG.md` — list last 5 completed entries.
3. Read `docs/BUILD_NEXT.md` — identify the next page in queue.
4. State to the user: "Resuming from [last completed page]. Next in queue: [next page]. Proceeding unless you override."
5. Wait for acknowledgement OR if the user said "continue on your own", proceed.

If `BUILD_LOG.md` or `BUILD_NEXT.md` is missing or stale, rebuild them by scanning `src/pages/` and `src/data/pages/` before writing new content.

---

## 9. HOW TO HANDLE UNCERTAINTY

When in doubt:

- **Unsure about a client number / claim?** Check `docs/CONTENT.md`. If not there, don't invent. Use a qualitative statement ("one of our largest exchange clients") instead of a fake number.
- **Unsure about a technical claim?** Hedge conservatively ("commonly deployed on Ethereum and Polygon" not "the industry standard"). Prefer to understate than to overclaim.
- **Unsure about a regulatory fact?** Name the regulator and link to their authoritative page. Do not paraphrase compliance rules without a source.
- **Unsure which template a page should use?** Default to `ServiceClusterLayout` for service pages, `IndustryVerticalLayout` for industries, `UseCaseLayout` for use cases. Read §1 of `docs/link.md` if still uncertain.
- **Unsure whether something qualifies as AI-slop?** If you wouldn't read it in Decrypt or The Block, rewrite it.

Never proceed with a fabricated "safe-sounding" number or claim. The user has explicitly said: prefer slow + good over fast + wrong.

---

## 10. WHAT COUNTS AS DONE FOR THE FULL SITE

The website is complete when all these are true:

- [ ] All pages in `docs/CORUM8_SITEMAP.md` exist at their correct URLs
- [ ] Every page passes the §7 self-audit
- [ ] Every page is listed in `docs/BUILD_LOG.md`
- [ ] `sitemap.xml`, `robots.txt`, `llms.txt`, `ai.txt` are auto-generated from the data layer
- [ ] Lighthouse score > 90 on Performance / SEO / Accessibility / Best Practices on a representative sample (homepage + 1 pillar + 2 clusters + 1 industry + 1 guide)
- [ ] No internal link 404s (link checker passes)
- [ ] All JSON-LD validates against schema.org
- [ ] Full site crawls cleanly in Screaming Frog (or equivalent) with no orphan pages

Do not declare the site "done" before all of these pass.

---

## 11. FINAL RULE: IF YOU DRIFT, STOP

If at any point in a session you catch yourself:
- Writing filler to hit word count
- Copy-pasting a use case from one page to another
- Inventing a client number not in `CONTENT.md`
- Skipping a FAQ to "save time"
- Using any phrase from §4.5
- Committing to a timeline or price

STOP. Re-read §2. Fix the drift. Continue.

The user has trusted this protocol to maintain quality when they aren't watching. Do not betray that.

---

## 12. AUTONOMOUS WAVE PROGRESSION (PRE-AUTHORIZED)

The user has pre-authorized autonomous progression through all build waves. Specifically, the user said:

> "If you complete Wave 0, then automatically start Wave 1, then Wave 2, and so on without my permission or command."

This means:

- **When a wave's exit criteria are met, transition to the next wave automatically.** Do not ask "should I start the next wave?" Do not wait for acknowledgement. Update `BUILD_NEXT.md` to the new wave's queue, then begin the first item.
- **When a page's self-audit passes, start the next page automatically.** Do not pause between pages.
- **When `/build` is invoked, follow `.claude/commands/build.md`** as the operating loop. That command contains the full autonomy ruleset.
- **The only mandatory pause inside an autonomous run** is after `/services/development/exchange` is complete (the reference page for voice calibration). Every other wave boundary is crossed without asking.
- **The only non-mandatory pause triggers** are listed in `.claude/commands/build.md` §6 — blocked real-data questions, build-breaking errors, and genuine ambiguities the protocol doesn't cover.

**Do not invent reasons to pause.** "Checking in", "confirming direction", "making sure you're still happy" — these are forbidden pause reasons during autonomous mode. If the user wants to pause, they'll send a message with "stop" / "pause" / "wait". Until then, keep building.

Every 10 pages: post a one-line progress update (informational, not a question).
Every wave completion: post a summary and immediately start the next wave.

---

END OF PROTOCOL
