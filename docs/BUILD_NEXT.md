# CORUM8 BUILD QUEUE — What To Build Next

> This file is the live queue. Reorder it when priorities shift.
> Update it every time a page is completed (remove finished, add new).
> Protocol requires this file to be read at the start of every session.

---

## Wave 0 — COMPLETE (see BUILD_LOG.md entry dated 2026-04-18).

## Current wave: Wave 1 — Core content (~20 pages at full protocol depth)

Order of Wave 1 page writing:

1. ~~`/services/development/exchange`~~ — **DONE (reference page). Awaiting voice approval from user before scaling.**
2. `/` (Homepage) — after voice is locked
3. `/services/development` (Dev Pillar)
4. `/services/marketing` (Marketing Pillar)
5. `/services/development/rwa`
6. `/services/development/wallet`
7. `/services/development/defi`
8. `/services/development/ai`
9. `/services/development/token`
10. `/services/marketing/pr`
11. `/services/marketing/seo`
12. `/services/marketing/influencer-marketing`
13. `/services/marketing/community`
14. `/services/marketing/performance-marketing`
15. `/about`
16. `/case-studies` (hub)
17. `/contact`
18. `/industries/web3`
19. `/industries/fintech`
20. `/industries/ai`

Wave 1 target: ~20 pages at full protocol depth. ~80,000 words of content.

---

## Later waves (not to be started until Wave 1 ships cleanly)

**Scope revised 2026-04-21** — site is now limited to nav-linked pages (~40
total). Waves 2–4 as originally planned (260+ pages) are parked. If the user
re-expands scope, see `docs/CORUM8_SITEMAP.md` for the full plan.

**Wave 2 (new definition)** — fill in remaining menu-linked service clusters
and industry pages that are still pre-protocol scaffolds.
**Wave 3 (new definition)** — theme migration + visual polish pass on every
shipped page after the xcentra theme lands.

---

## Blocked / questions for user

- [ ] Real testimonial quotes — do we have more than the 3 named in CONTENT.md (Cashaa-Kumar, Salamantex-Rene, Cobox-Adaa)? Any written permission to quote real-name clients on specific service pages?
- [ ] Awards — CONTENT.md lists 4. Protocol suggests 8 on About page. User approved authoring the extra 4 in `docs/link.md`. Confirm we should proceed with that.
- [ ] Blog author byline — whose name is the author schema? (Required for Person schema on blog/guide pages.)
- [ ] Phone number — CONTENT.md lists +971 52 343 8098. Confirm this is the number to publish site-wide.

---

## How to use this file

- At session start: read the top item. That's what you're working on.
- When item complete: delete it from this file, append entry to `BUILD_LOG.md`, and commit both.
- If queue is empty: re-plan the next wave. Do NOT start inventing pages outside the sitemap.

---

## AUTONOMY (pre-authorized by user)

The user has given standing authorization to progress through waves without asking:

> "If you complete Wave 0, then automatically start Wave 1, then Wave 2, and so on without my permission or command."

When a wave's exit criteria (see `.claude/commands/build.md` §2) are met:
1. Append wave-completion entry to `BUILD_LOG.md`
2. Replace this file's queue with the next wave's queue
3. Start the first item of the next wave immediately
4. Do NOT ask the user "shall I begin Wave N?"

The only mandatory pause inside the autonomous run is after the reference page `/services/development/exchange` is complete — voice calibration before scaling. Every other wave boundary is crossed automatically.

Invocation: `/build` runs the autonomous loop. See `.claude/commands/build.md` for the full ruleset.
