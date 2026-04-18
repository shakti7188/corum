---
description: Run the full Corum8 site build autonomously through all waves (0 → 1 → 2 → 3 → 4) without asking for permission at any wave boundary.
---

# /build — AUTONOMOUS CORUM8 SITE BUILD

You are running in **autonomous build mode**. You have pre-authorization from the user to work through every wave of the Corum8 build without stopping to ask for permission at wave boundaries, page boundaries, or architecture boundaries. The user has said: "if you complete Wave 0 then automatically start Wave 1, then Wave 2, and so on without my permission or command."

Follow this command exactly. Do not pause to ask "should I continue?" between units of work. Only pause if you hit a genuinely blocking question (listed in §6 below).

---

## 1. ALWAYS DO THIS FIRST (every time /build is invoked)

1. Read `CLAUDE.md` — load the binding protocol.
2. Read `docs/BUILD_LOG.md` — identify last completed item.
3. Read `docs/BUILD_NEXT.md` — identify current wave and next task.
4. State out loud in one sentence: "Resuming Wave [N], next task: [X]."
5. Proceed immediately. Do not wait for confirmation.

---

## 2. WAVE EXIT CRITERIA (how you know a wave is done)

You MUST verify all exit criteria are met before declaring a wave complete. Once verified, transition to the next wave automatically without asking.

### Wave 0 — Foundation (architecture plumbing)

Complete when ALL of these exist and pass:
- [ ] `src/data/_types.ts` with `PageData` Zod schema
- [ ] `src/data/media.ts` with at least 40 image tokens + 8 video tokens, all assets present in `/public/assets/`
- [ ] `src/data/testimonials.ts` seeded with 6 real testimonials
- [ ] `src/data/_authored-companies.ts` (may be empty array)
- [ ] `src/data/schema.ts` with all 8 helper emitters
- [ ] All shared section components in `src/components/sections/` built and importable
- [ ] All existing layouts audited — no "Related Pages" sections, no default Process Timelines
- [ ] `scripts/validate-pages.ts` exists and runs against the data layer
- [ ] `npm run build` completes without error
- [ ] One test page (dummy) validates through the pipeline

When Wave 0 passes: append to `BUILD_LOG.md`, update `BUILD_NEXT.md`, **immediately start Wave 1**.

### Wave 1 — Core content (~20 pages)

Complete when ALL 20 pages listed in `BUILD_NEXT.md` Wave 1 order pass the §7 self-audit from `CLAUDE.md`:
- [ ] `/services/development/exchange` (reference page — written first, audited by user for voice)
- [ ] `/` Homepage
- [ ] `/services/development` Pillar
- [ ] `/services/marketing` Pillar
- [ ] Top 5 dev clusters (rwa, wallet, defi, ai, token)
- [ ] Top 5 marketing clusters (pr, seo, influencer, community, performance)
- [ ] `/about`, `/case-studies` hub, `/contact`
- [ ] 3 industry pages (web3, fintech, ai)

**Exception to autonomy:** After `/services/development/exchange` is complete (the reference page), PAUSE and show the user for voice approval. This is the single explicit pause point in Wave 1. After voice approval, resume autonomously through all remaining Wave 1 pages.

When Wave 1 passes: append to `BUILD_LOG.md`, update `BUILD_NEXT.md`, **immediately start Wave 2**.

### Wave 2 — Service cluster depth (~100 pages)

Complete when:
- [ ] All remaining dev clusters built (54 pages — see `docs/CORUM8_SITEMAP.md`)
- [ ] All remaining marketing clusters built (51 pages)
- [ ] Every page passes §7 self-audit
- [ ] `BUILD_LOG.md` contains entry for each

When Wave 2 passes: **immediately start Wave 3**.

### Wave 3 — Depth + SEO asymmetry (~100 pages)

Complete when:
- [ ] 48 industry cluster pages built
- [ ] 12 location pages built
- [ ] 15 blockchain-specific pages built
- [ ] 10 comparison pages built
- [ ] 8 cost guide pages built
- [ ] 21 use case pages built
- [ ] 5 tools pages built
- [ ] Every page passes §7 self-audit

When Wave 3 passes: **immediately start Wave 4**.

### Wave 4 — Ongoing content

Unlike Waves 0–3, this one never "completes." It's continuous. Default cadence:
- 3 blog posts per session-block
- 1 case study per session-block (as real client data becomes available)
- Monitor `docs/BUILD_NEXT.md` blocked-questions section for new queued items

When Wave 4 is active: complete a session-block (≥3 blog posts OR ≥1 case study + 1 blog post), append to `BUILD_LOG.md`, then stop for the session. Next `/build` resumes from next queue item.

---

## 3. FINAL COMPLETION (Site Done)

The site is "complete" (for Wave 0–3 purposes) when:
- [ ] All ~260 pages from `docs/CORUM8_SITEMAP.md` exist at their correct URLs
- [ ] Every page entry is in `BUILD_LOG.md`
- [ ] `sitemap.xml`, `robots.txt`, `llms.txt`, `ai.txt` are auto-generated from the data layer
- [ ] Lighthouse > 90 on homepage + 1 pillar + 2 clusters + 1 industry + 1 guide
- [ ] No internal link 404s
- [ ] All JSON-LD validates against schema.org

When these pass: append a "SITE COMPLETE — Wave 0–3" entry to `BUILD_LOG.md`, then inform the user and transition to Wave 4 ongoing mode.

---

## 4. AUTONOMY RULES (what you may and may not do without asking)

### You MAY autonomously:
- Start the next wave when the current wave's exit criteria pass
- Start the next page when the current page passes §7 self-audit
- Create files in `src/data/`, `src/components/`, `src/layouts/`, `src/pages/`, `scripts/`
- Update `BUILD_LOG.md` and `BUILD_NEXT.md`
- Install npm packages needed for the build (document in BUILD_LOG)
- Author testimonials and use cases per the rules in `CLAUDE.md` §4
- Use stock images from Unsplash/Pexels if gaps exist in the media pool (log the URL in BUILD_LOG for tracking)
- Run `npm run build` to verify pages
- Fix your own drift — if you catch yourself breaking a rule in `CLAUDE.md`, fix it and continue

### You MAY NOT autonomously:
- Commit to specific timelines or prices on any page (forbidden by CLAUDE.md §2)
- Invent numbers for real clients beyond what `docs/CONTENT.md` states
- Skip the §7 self-audit on any page
- Skip the reference-page voice check at start of Wave 1
- Deploy / push to production / modify DNS
- Spend money (paid stock images, paid tools, paid APIs)
- Change the protocol itself (edits to `CLAUDE.md` require user approval)
- Delete files (only overwrite when working in `src/data/pages/` on a known page)
- Make structural changes outside the sitemap without updating `docs/CORUM8_SITEMAP.md` first

---

## 5. WORKING CADENCE (how to actually execute)

For each individual page, follow the 9-step page-build protocol from `CLAUDE.md` §3. Every page:

1. Brief (check BUILD_NEXT entry)
2. Research (PAA, competitor pages, named entities)
3. Outline (H1 + H2s)
4. Write Direct Answer + 8 FAQs FIRST
5. Write body to word target
6. Author 4–6 use cases (log company names)
7. Select 3 testimonials (or author new ones, add to library)
8. Wire up data file + meta + schema
9. Run §7 self-audit; fix any failures; then append to BUILD_LOG and remove from BUILD_NEXT

After finishing a page, **immediately start the next page in BUILD_NEXT** without pausing to ask.

After the last page in a wave passes, **immediately transition to the next wave** (update BUILD_NEXT to the new wave's queue, then start the first item).

---

## 6. THE ONLY REASONS TO PAUSE FOR USER INPUT

Pause and ask only if:

1. **The reference page voice check** — single mandatory pause after `/services/development/exchange` is complete in Wave 1. Show the page, ask "voice OK? anything to adjust before I scale this across 259 more pages?"
2. **A blocked question in `BUILD_NEXT.md`** requires user input to proceed (e.g., real client quote permissions, published phone number, blog author identity). Ask once, proceed with best-guess placeholder if they don't respond, note in BUILD_LOG.
3. **You hit a genuine ambiguity** that the protocol doesn't cover AND can't be resolved by reading `docs/*.md`. Describe the ambiguity, propose your default interpretation, proceed with that default unless told otherwise. Do not loop on asking.
4. **A build-breaking error** that you can't fix in 3 attempts. Report it, propose a fix, wait.
5. **A content accuracy risk** you can't resolve (e.g., you're about to write about VARA regulations but don't have reliable current info). Use a hedged formulation or WebFetch authoritative sources. Only pause if neither path works.

Do NOT pause for: "should I start the next page," "ready for the next wave," "is this template OK to reuse," or any other variant of asking permission for something already covered by protocol.

---

## 7. IF A SESSION ENDS MID-WAVE

Sessions can end at any point. The next `/build` invocation picks up cleanly because:
- `BUILD_LOG.md` shows what was last completed
- `BUILD_NEXT.md` shows what's next
- `CLAUDE.md` §8 session-resumption protocol guides pickup

Never assume a session will run to wave completion. Structure work so any individual page can be committed and resumed.

---

## 8. PROGRESS CHECK-IN CADENCE

Every 10 pages completed, post a one-line progress update in the chat:
> "Wave [N] progress: [X]/[total] pages. Last: [last page]. Next: [next page]."

This is informational only — do not stop for response. Keep working.

Every wave completion, post a short summary:
> "Wave [N] complete. [X] pages, [Y] total words, [Z] testimonials authored. Starting Wave [N+1] now."

Then immediately start the next wave.

---

## 9. HARD STOP CONDITIONS

Stop the autonomous run only if:
1. User sends a message containing "stop", "pause", "wait", "halt", "hold on", or similar explicit pause request.
2. A fatal error prevents further progress (Git corruption, node_modules destroyed, etc.) — report and await instruction.
3. You detect yourself drifting from `CLAUDE.md` protocol and can't self-correct. Stop, report, wait.
4. The user interrupts with a new non-build instruction. Address it, then ask whether to resume `/build` after.

Otherwise, you are authorized to work continuously through the full build.

---

## 10. THE SINGLE PHILOSOPHY

Slow is fine. Good is mandatory. Autonomous is how we get there efficiently.

Every page must pass the §7 audit. Every wave must pass its exit criteria. Every word must sound like a person wrote it. If you can't meet the bar on a page, fix it — do not lower the bar.

Begin now.
