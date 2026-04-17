# CORUM8 × KOTA — MASTER BUILD DOCUMENT
## Complete Page Mapping, Design System, Sitemap, & Claude Code Prompt

**Date:** April 16, 2026
**Purpose:** Clone KOTA.co.uk design system → Apply to Corum8's 260+ page architecture
**Approach:** Build exact KOTA clone first → Swap content/images for Corum8 one-by-one

---

# PART 1: KOTA SITE ARCHITECTURE (What We're Cloning)

## 1.1 KOTA Complete Page Inventory

| # | KOTA Page | URL | Template Type |
|---|-----------|-----|---------------|
| 1 | Homepage | kota.co.uk/ | Homepage |
| 2 | Work (Portfolio) | kota.co.uk/work/ | Portfolio Hub |
| 3 | Agency (About) | kota.co.uk/agency/ | About |
| 4 | Web Design & Dev (Service Pillar) | kota.co.uk/service/web-design-development/ | Service Pillar |
| 5 | Branding (Service Pillar) | kota.co.uk/service/branding/ | Service Pillar |
| 6 | Digital Marketing (Service Pillar) | kota.co.uk/service/digital-marketing/ | Service Pillar |
| 7 | Creative Web Design (Sub-service) | kota.co.uk/service/creative-web-design/ | Service Cluster |
| 8 | Web Development (Sub-service) | kota.co.uk/service/web-development/ | Service Cluster |
| 9 | Copywriting (Sub-service) | kota.co.uk/service/copywriting/ | Service Cluster |
| 10 | E-Commerce (Sub-service) | kota.co.uk/service/e-commerce/ | Service Cluster |
| 11 | WordPress (Sub-service) | kota.co.uk/service/wordpress/ | Service Cluster |
| 12 | Brand Strategy (Sub-service) | kota.co.uk/service/brand-strategy/ | Service Cluster |
| 13 | Tone of Voice (Sub-service) | kota.co.uk/service/tone-of-voice/ | Service Cluster |
| 14 | Visual Identity (Sub-service) | kota.co.uk/service/visual-identity/ | Service Cluster |
| 15 | Motion Graphics (Sub-service) | kota.co.uk/service/motion-graphics/ | Service Cluster |
| 16 | Creative Campaigns (Sub-service) | kota.co.uk/service/creative-campaigns/ | Service Cluster |
| 17 | Marketing Support (Sub-service) | kota.co.uk/service/marketing-support/ | Service Cluster |
| 18 | Blog Hub | kota.co.uk/blog/ | Blog Listing |
| 19 | Culture | kota.co.uk/culture/ | Culture/Team |
| 20 | Contact | kota.co.uk/contact/ | Contact |
| 21 | Start Your Project | kota.co.uk/start-your-project | Lead Form |
| 22 | Sector: Agencies | kota.co.uk/agencies/ | Industry Vertical |
| 23 | Sector: SaaS & Tech | kota.co.uk/b2b-tech-software-saas/ | Industry Vertical |
| 24 | Sector: B2B Transformation | kota.co.uk/b2b-transformation/ | Industry Vertical |
| 25 | Sector: Healthcare | kota.co.uk/healthcare/ | Industry Vertical |
| 26 | Sector: Media & Entertainment | kota.co.uk/media-entertainment/ | Industry Vertical |
| 27 | Sector: Retail | kota.co.uk/retail/ | Industry Vertical |
| 28 | Case Study Pages (per project) | kota.co.uk/work/[project-slug]/ | Case Study Detail |
| 29 | Blog Post Pages | kota.co.uk/blog/[post-slug]/ | Blog Post |

## 1.2 KOTA Unique Template Types (7 Templates)

These are the ONLY 7 templates needed. Every page on KOTA (and therefore Corum8) uses one of these:

1. **Homepage Template** — hero + services + case studies + stats + testimonials + FAQ
2. **Service Pillar Template** — hero + sub-nav + bento grid + service cards + process timeline + results + testimonials + related projects + FAQ
3. **Service Cluster Template** — hero + detailed content + related projects + FAQ
4. **Portfolio Hub Template** — hero + filterable project grid
5. **Case Study Detail Template** — hero + project overview + challenge + solution + results + next project
6. **About/Agency Template** — hero + mission + approach + awards + team grid + partners
7. **Blog/Content Template** — article layout with sidebar or full-width

**For Corum8, we add 3 more:**
8. **Industry Vertical Template** — based on KOTA's Sector pages
9. **Contact/Lead Form Template** — based on KOTA's Start Your Project
10. **Comparison/Guide Template** — for vs pages and cost guides (blog variant)

---

# PART 2: KOTA → CORUM8 PAGE MAPPING

## 2.1 Homepage Mapping

| Section # | KOTA Homepage Section | Corum8 Equivalent | Content Source |
|-----------|----------------------|-------------------|----------------|
| 1 | Top banner: "Celebrating 13 years : 2013 - 2026" | "Trusted by 1,100+ Web3 Projects Worldwide" | SITE_SPEC |
| 2 | Navigation: Logo, Work, Agency, Services▾, Blog, Culture, Contact, [Start your project] | Logo, Marketing▾, Development▾, Industries▾, Resources▾, About▾, [Book a Strategy Call] | CONTENT.md nav |
| 3 | Hero headline: "We're a creative web design and branding agency based in London that crafts beautiful work for brands who *refuse to blend in.*" | "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*" | Adapted from CONTENT.md hero |
| 4 | Trust badges: DAN, Clutch, Awwwards, CSSDA | Trust badges: Trustpilot 4.9/5, Clutch, Google Partner, Blockchain Life Award | SITE_SPEC awards |
| 5 | Services Grid (3 cards): Web Design & Dev, Branding, Digital Marketing — each with sub-service links + description + CTA | Services Grid (3 cards): Development, Marketing, Advisory — each with sub-service links + description + CTA | SITE_SPEC services |
| 6 | Brand Promise numbered 01-04: "Design with guts / Nail the process / Build to flex / Create to convert" | Differentiators numbered 01-04: "Execution Over Promises / Data Meets Creativity / Global Reach, Local Impact / Full-Stack Capabilities" | CONTENT.md section 13 |
| 7 | Case Studies: 5 project cards with MP4 video hover | Case Studies: 6 project cards with images (use KOTA video pattern, Corum8 stock images initially) | CONTENT.md section 9 |
| 8 | Results Stats: 67.6% / 70.8% / 83.14% / 104.9% with project photos | Results Stats: $120M+ Revenue / 2.5B+ Impressions / 25K+ Influencers / 1,100+ Projects | SITE_SPEC stats |
| 9 | Client Logo Marquee: 15 logos in infinite scroll | Client Logo Marquee: 30 logos in 3 rows (Binance, KuCoin, OKX etc.) | CONTENT.md section 3 |
| 10 | Testimonials: horizontal auto-scroll carousel with client photos | Testimonials: same carousel pattern with Corum8 client quotes | CONTENT.md section 14 |
| 11 | Blog Preview: 3 article cards | Blog Preview: 3 article cards | CONTENT.md section 16 |
| 12 | FAQ: expandable accordion | FAQ: expandable accordion (target featured snippets) | Generate SEO-optimized Q&A |
| 13 | Footer: email, socials, sector links, badges | Footer: 5-column layout from SITE_SPEC | SITE_SPEC footer |

### Corum8 Homepage ADDITIONS (Not in KOTA but required for SEO/AEO):
| Extra Section | Position | Content |
|---------------|----------|---------|
| Media Coverage logos | After client logos | 16 media logos: Forbes, Bloomberg, etc. |
| Impact Numbers orbital | After services | 7 stats in orbital/grid layout |
| Influencer Network visual | After media logos | 25K+ network visualization |
| Industries cards | Before testimonials | 6-8 industry sector cards |
| Awards ribbon | Before blog | 4 awards with event logos |
| Process steps | After differentiators | 4-step: Discover → Position → Activate → Scale |

---

## 2.2 Service Pillar Page Mapping

**KOTA has 3 service pillars. Corum8 has 2 (Development + Marketing).**

| Section # | KOTA Service Pillar Section | Corum8 Development Pillar | Corum8 Marketing Pillar |
|-----------|----------------------------|--------------------------|------------------------|
| 1 | Hero: "Creative Web Design and Development Services" + "Welcome to the *digital* renaissance." + hero image | "Blockchain Development Services" + "Engineering the *infrastructure* of tomorrow." | "Marketing & Growth Services" + "Visibility that *moves markets.*" |
| 2 | Sub-nav pills: Web design & development, Creative web design, Web development, E-Commerce, WordPress, Copywriting | Pills: Exchange Dev, RWA, Wallet, DeFi, AI, Mobile, Token, Blockchain Layer, Payments, Trading, NFT | Pills: PR, Influencer, Community, Performance, SEO, Social, Branding, B2B, Content, Listing |
| 3 | Bento grid: 4 images in masonry layout | 4 images: code screens, architecture diagrams, exchange UI, blockchain visual | 4 images: campaign dashboards, PR placements, social media, event photos |
| 4 | Section headline: "Stunning websites that supercharge your brand." | "Products built for *scale*, security, and speed." | "Campaigns that deliver *measurable* ROI." |
| 5 | Service cards: 5 cards (Creative Web Design, Web Dev, Copywriting, E-Commerce, WordPress) each with title + description + CTA | Service cards: 11 dev services from config.php $services_dev | Service cards: 19 marketing services from config.php $services_marketing |
| 6 | Results stats: 4 stats with project photos | Dev stats: "500+ Smart Contracts / 40+ White-Label Products / 100K+ TPS Exchange Engine / $2B+ TVL Secured" | Marketing stats: "$120M+ Revenue Generated / 2.5B+ Impressions / 25K+ Influencers / 10K+ Media Outlets" |
| 7 | Process Timeline (horizontal): Immersion → Kick Off → Structure → Design → Development → QA & Launch | Dev process: "Discovery → Architecture → Development → Audit → Deployment → Maintenance" | Marketing process: "Discover → Position → Activate → Scale" |
| 8 | Testimonials carousel | Dev-relevant testimonials | Marketing-relevant testimonials |
| 9 | Related articles: 3 blog cards | Dev-related blog posts | Marketing-related blog posts |
| 10 | Related projects: case study cards | Dev case studies | Marketing case studies |
| 11 | FAQ accordion | Dev FAQs (target: "how much does exchange development cost", "best blockchain development company") | Marketing FAQs (target: "best crypto marketing agency", "how much does crypto PR cost") |

---

## 2.3 Service Cluster Page Mapping

**KOTA has ~11 cluster pages. Corum8 has 126 cluster pages (65 dev + 61 marketing).**

All cluster pages use the same template. Here's the mapping:

| KOTA Cluster Element | Corum8 Cluster Adaptation |
|---------------------|--------------------------|
| Hero with service name + one-liner | Same — use service name + tagline from config.php |
| Detailed description (2-3 paragraphs) | Same — use desc from config.php + expanded 800-1200 word content |
| Related projects section | Same — filtered by service tag |
| FAQ section | Same — 5-6 service-specific questions |
| CTA: "Interested in working with KOTA?" | CTA: "Ready to build? Book a strategy call." |
| Breadcrumb: Home > Services > [Pillar] > [This Page] | Same structure |
| **NOT IN KOTA but needed for AEO:** | |
| Direct Answer Block at top | 2-3 sentence summary for AI citation |
| "How We Do It" process steps | Step-by-step for HowTo schema |
| Use Cases section | Real-world applications |
| Internal links to pillar + related clusters | Cross-linking strategy |
| Tags section linking to related services | Tag cloud from config.php tags arrays |

---

## 2.4 About/Agency Page Mapping

| KOTA Agency Section | Corum8 About Page |
|--------------------|-------------------|
| Hero: "Proudly signing every piece." | "Born in Web3. Built for what's next." |
| Mission statement + supporting text | Corum8 mission from CONTENT.md |
| Approach: two-column text + image | Differentiators from CONTENT.md section 13 |
| Awards badges grid (Awwwards ×12, Mindsparkle ×2, CSSDA ×3, FWA ×1, Lovies ×1) | Awards grid: Blockchain Life 2025, Finext 2024, Finext 2025, Dubai Expo 2020 |
| Team photo carousel with hover bios | Team section (placeholder initially) |
| Partner logo marquee | Client logo marquee (30 logos) |
| "Interested in working with KOTA?" CTA | "Ready to build something extraordinary?" CTA |

---

## 2.5 Portfolio/Work Page Mapping

| KOTA Work Section | Corum8 Case Studies Page |
|------------------|--------------------------|
| Hero: "We are *experts* in bringing brands to life digitally." + background video | "260+ Web3 projects. Zero compromises." + background video |
| Filter by service/industry | Filter by: Development / Marketing / Full-Stack / Industry |
| 2-column project cards with MP4 video hover | Same pattern — 6 case studies initially (Cashaa, Fanadise, Ubuntu Tribe, KuCoin, Metarix, Binance) |

---

## 2.6 Industry Vertical Pages (Corum8 Addition)

KOTA has 6 sector pages. Corum8 needs these mapped:

| KOTA Sector | Corum8 Industry Page | Template |
|-------------|---------------------|----------|
| Agencies | Web3 & Crypto (/industries/web3) | Industry Vertical |
| SaaS & Tech | AI & SaaS (/industries/ai-saas) | Industry Vertical |
| B2B Transformation | Fintech (/industries/fintech) | Industry Vertical |
| Healthcare | iGaming (/industries/igaming) | Industry Vertical |
| Media & Entertainment | Startups (/industries/startups) | Industry Vertical |
| Retail | Enterprise (/industries/enterprise) | Industry Vertical |

Each industry page follows KOTA's sector template:
- Hero with industry name
- Industry-specific service highlights
- Relevant case studies
- Industry-specific stats
- FAQ targeting industry search queries

---

## 2.7 Additional Corum8 Pages (No KOTA Equivalent)

These pages don't exist on KOTA but are critical for Corum8's SEO strategy. They use **Service Cluster Template** or **Blog Template**:

| Page Type | Count | Template | Example |
|-----------|-------|----------|---------|
| Blockchain-Specific | 15 | Service Cluster | /blockchain/ethereum-development |
| Comparison/VS | 10 | Blog (with comparison table) | /compare/centralized-vs-decentralized-exchange |
| Cost/Pricing Guides | 8 | Blog (with pricing table) | /guides/crypto-exchange-development-cost |
| GEO/Location | 12 | Industry Vertical (adapted) | /locations/dubai |
| Use Cases | 21 | Service Cluster (adapted) | /use-cases/tokenizing-real-estate |
| Tools/Calculators | 5 | Custom (React interactive) | /tools/tokenomics-calculator |

---

# PART 3: UPDATED CORUM8 SITEMAP (Merged with KOTA Structure)

## 3.1 Wave 1 — Build First (Matches KOTA's Page Set)

These are the pages we clone from KOTA first. Each maps to a specific KOTA page as reference.

```
CORE PAGES (8) — All have KOTA equivalents
──────────────────────────────────────────
/                               → Homepage          [Clone: kota.co.uk/]
/about                          → About/Agency      [Clone: kota.co.uk/agency/]
/case-studies                   → Portfolio Hub     [Clone: kota.co.uk/work/]
/blog                           → Blog Hub          [Clone: kota.co.uk/blog/]
/contact                        → Contact/Lead Form [Clone: kota.co.uk/contact/ + kota.co.uk/start-your-project]
/careers                        → Careers           [Clone: kota.co.uk/culture/]
/partners                       → Partnership Page  [Adapt: kota.co.uk/agency/ partner section]
/demos                          → Demos Hub         [Custom — no KOTA equivalent]

SERVICE PILLARS (2) — Clone from KOTA service pillar template
─────────────────────────────────────────────────────────────
/services/development           → Dev Pillar        [Clone: kota.co.uk/service/web-design-development/]
/services/marketing             → Mktg Pillar       [Clone: kota.co.uk/service/branding/ or /digital-marketing/]

TOP DEV CLUSTERS (11) — Clone from KOTA sub-service template
────────────────────────────────────────────────────────────
/services/development/exchange              [Clone: kota.co.uk/service/web-development/]
/services/development/rwa                   [Clone: kota.co.uk/service/e-commerce/]
/services/development/wallet                [Clone: kota.co.uk/service/creative-web-design/]
/services/development/defi                  [Clone: kota.co.uk/service/wordpress/]
/services/development/ai                    [Clone: kota.co.uk/service/copywriting/]
/services/development/mobile-web            [Clone: kota.co.uk/service/creative-web-design/]
/services/development/token                 [Clone: kota.co.uk/service/web-development/]
/services/development/blockchain-layer      [Clone: kota.co.uk/service/web-development/]
/services/development/payment               [Clone: kota.co.uk/service/e-commerce/]
/services/development/trading               [Clone: kota.co.uk/service/web-development/]
/services/development/nft                   [Clone: kota.co.uk/service/creative-web-design/]

TOP MARKETING CLUSTERS (10) — Clone from KOTA sub-service template
──────────────────────────────────────────────────────────────────
/services/marketing/performance-marketing   [Clone: kota.co.uk/service/creative-campaigns/]
/services/marketing/seo                     [Clone: kota.co.uk/service/marketing-support/]
/services/marketing/social-media            [Clone: kota.co.uk/service/marketing-support/]
/services/marketing/b2b-marketing           [Clone: kota.co.uk/service/marketing-support/]
/services/marketing/pr                      [Clone: kota.co.uk/service/tone-of-voice/]
/services/marketing/branding                [Clone: kota.co.uk/service/visual-identity/]
/services/marketing/content                 [Clone: kota.co.uk/service/copywriting/]
/services/marketing/influencer-marketing    [Clone: kota.co.uk/service/creative-campaigns/]
/services/marketing/community               [Clone: kota.co.uk/service/marketing-support/]
/services/marketing/listing                 [Clone: kota.co.uk/service/marketing-support/]

INDUSTRY VERTICALS (6) — Clone from KOTA sector template
────────────────────────────────────────────────────────
/industries/web3                [Clone: kota.co.uk/b2b-tech-software-saas/]
/industries/startups            [Clone: kota.co.uk/agencies/]
/industries/saas                [Clone: kota.co.uk/b2b-tech-software-saas/]
/industries/fintech             [Clone: kota.co.uk/retail/]
/industries/ai                  [Clone: kota.co.uk/media-entertainment/]
/industries/enterprise          [Clone: kota.co.uk/b2b-transformation/]

CASE STUDIES (6) — Clone from KOTA case study detail template
────────────────────────────────────────────────────────────
/case-studies/cashaa            [Clone: kota.co.uk/work/upp/]
/case-studies/fanadise          [Clone: kota.co.uk/work/incentive-games/]
/case-studies/ubuntu-tribe      [Clone: kota.co.uk/work/isi-global/]
/case-studies/kucoin            [Clone: kota.co.uk/work/the-goat-agency/]
/case-studies/metarix           [Clone: kota.co.uk/work/wogan-coffee/]
/case-studies/binance           [Clone: kota.co.uk/work/dka/]

BLOG POSTS (3) — Clone from KOTA blog post template
───────────────────────────────────────────────────
/blog/web3-marketing-playbook   [Clone: any KOTA blog post]
/blog/tokenomics-guide          [Clone: any KOTA blog post]
/blog/pr-strategy-crypto        [Clone: any KOTA blog post]

WAVE 1 TOTAL: ~50 pages
```

## 3.2 Wave 2-4 — Expansion (Same Templates, New Content)

All remaining 210+ pages use the same 10 templates. No new design work needed — just content population:

- Wave 2: Remaining 55 dev clusters + 51 marketing clusters + 48 industry clusters + 12 GEO pages = ~166 pages
- Wave 3: 15 blockchain + 10 comparison + 8 cost guides + 16 use cases + 5 tools = ~54 pages
- Wave 4: Ongoing blog (5-10/month)

---

# PART 4: KOTA DESIGN SYSTEM EXTRACTION

## 4.1 Colors (Extracted from KOTA)

KOTA uses a light/clean palette. For Corum8, we adapt to dark mode (Web3 standard) while keeping the same structural approach.

| Element | KOTA Value | Corum8 Value |
|---------|-----------|--------------|
| Background primary | #FFFFFF (white) | #0D0D0D (near-black) |
| Background secondary | #F5F5F0 (off-white) | #1A1A1A (dark gray) |
| Text primary | #1A1A1A (dark) | #F5F5F0 (off-white) |
| Text secondary | #666666 (gray) | #A0A09C (muted) |
| Accent primary | #000000 (black CTAs) | #C8FF00 (electric lime) |
| Accent secondary | — | #00D4AA (blockchain teal) |
| Brand color | — | #B8932E (Corum8 gold) |
| Borders | rgba(0,0,0,0.08) | rgba(255,255,255,0.08) |
| Card backgrounds | #FFFFFF | #141414 |
| Hover states | #F0F0F0 | #1F1F1F |

## 4.2 Typography (Extracted from KOTA)

KOTA uses two fonts: a serif display + a clean sans-serif.

| Element | KOTA | Corum8 |
|---------|------|--------|
| Display/Headlines | Serif (likely custom/GT) with *italic* on emotional words | Playfair Display (or Instrument Serif) with *italic* keywords |
| Body/UI/Nav | Clean sans-serif (likely Neue Haas Grotesk or similar) | General Sans (or Satoshi) |
| Hero headline | ~5-7rem, tight leading (1.1) | Same scale |
| Section headlines | ~2.5-4.5rem | Same scale |
| Body text | ~1-1.125rem, 1.6 line-height | Same |
| Eyebrow labels | Uppercase, wide letter-spacing, small, muted color | Same pattern but in accent color (#C8FF00) |
| CTA buttons | Uppercase, wide tracking, medium weight | Same |

## 4.3 Layout Patterns (Extracted from KOTA)

| Pattern | KOTA Implementation | Notes for Clone |
|---------|-------------------|-----------------|
| Container | Max-width ~1440px, generous side padding (~80px desktop) | Same |
| Section spacing | ~120-160px padding top/bottom | Same |
| Hero | Full viewport height, left-aligned headline spanning ~70% width | Same |
| Services grid | Asymmetric — not equal 3-column. Cards have varying widths | Critical: do NOT make equal columns |
| Case study cards | 2-column, 16:10 aspect ratio, MP4 video on hover | Use images initially, same aspect ratio |
| Stats section | Horizontal scroll on mobile, large accent-colored numbers | Same |
| Testimonials | Infinite horizontal auto-scroll carousel, duplicated for seamless loop | Same |
| Logo marquee | Infinite horizontal scroll, grayscale logos | Same but 3 rows for Corum8 (30 logos) |
| Process timeline | Horizontal stepper with week markers, expandable descriptions | Same |
| Bento grid | 4-image masonry with mixed aspect ratios | Same |
| FAQ | Click-to-expand accordion | Same |
| Team grid | Photo carousel with hover bio reveal | Same |

## 4.4 Animation Patterns (Extracted from KOTA)

| Animation | KOTA Behavior | Implementation |
|-----------|--------------|----------------|
| Scroll reveal | Sections fade up + translate Y 40-60px on scroll into view | GSAP ScrollTrigger, once: true, ease: power3.out |
| Staggered entrance | Multiple cards/items stagger in with 0.1-0.15s delay | GSAP stagger property |
| Case study hover | Video plays, overlay fades in from bottom, slight scale(1.05) on video | CSS transitions + JS for video play/pause |
| CTA hover | Background slides in from left (or color inversion) | CSS clip-path or transform |
| Link hover | Underline draws in from left to right | CSS border-bottom with transition on width |
| Nav scroll | Transparent → solid background + backdrop-blur on scroll | IntersectionObserver or scroll listener |
| Logo marquee | Infinite CSS animation, pauses on hover | CSS keyframes translateX, animation-play-state |
| Testimonial scroll | Auto-scrolling horizontal, infinite loop, pauses on hover | CSS animation or GSAP horizontal |
| Stats counter | Numbers count up from 0 when scrolled into view | GSAP or CountUp.js with ScrollTrigger |
| Mobile menu | Full-screen overlay, text items stagger in from bottom | GSAP timeline with stagger |
| Process timeline | Active step highlights, description expands/collapses | CSS transitions + JS toggle |
| Parallax images | Subtle Y-axis shift on scroll (subtle, not aggressive) | GSAP ScrollTrigger scrub |
| Page load | Slight fade-in of hero content, staggered | GSAP timeline on DOMContentLoaded |

## 4.5 Component Inventory

### Navigation
- **Desktop:** Transparent → sticky with blur. Logo left, links center, CTA right
- **KOTA mega-menu:** Services dropdown shows sub-service links
- **Corum8 mega-menu:** 3-column layout with CTA panel (per SITE_SPEC)
- **Mobile:** Hamburger → full-screen overlay with large staggered text
- **Top banner:** Thin strip above nav, scrolls away

### Cards
- **Case study card:** Video/image background, overlay on hover with title + tags + year
- **Service card:** Title + description + link, varying widths
- **Blog card:** Image top, category tag, title, date
- **Industry card:** Icon/visual + industry name + one-liner
- **Stat card:** Large number (accent color) + label + supporting visual
- **Team card:** Photo with hover bio reveal (name, role, description)

### Sections
- **Section header pattern:** Eyebrow (uppercase, accent) → Headline (serif, italic keyword) → Description (sans-serif, muted)
- **Process timeline:** Horizontal stepper with numbered steps, week markers, expandable details
- **FAQ accordion:** Question → click → answer slides down
- **CTA section:** Full-width, headline + description + button

### Footer
- KOTA: 2 main columns (contact + links), sector links, badges
- Corum8: 5 columns (brand, company, development, marketing, contact) + bottom bar

---

# PART 5: KOTA ASSET DOWNLOAD LIST

## 5.1 All Downloadable Assets

Every image, video, SVG, and font URL from KOTA that Claude Code needs for the initial clone:

### Trust/Award Badges (SVG)
```
https://kota-content.b-cdn.net/app/uploads/2024/03/Digital-Agency-Network.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/clutch.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/awwwards.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/cssda.svg
https://kota-content.b-cdn.net/app/uploads/2023/11/mindsparkle.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/Path-1345.svg
https://kota-content.b-cdn.net/app/uploads/2025/11/The-Lovies-4.png
https://kota-content.b-cdn.net/app/uploads/2024/06/DAN-1-500x167.png
```

### Client Logos (SVG — KOTA's clients)
```
https://kota-content.b-cdn.net/app/uploads/2023/10/Jamie-oliver.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/comptoir-libanais-1.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/british-red-cross.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/sym.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/penguin.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/raw.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/penhaligons.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/stoli.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/bounce.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/tangerine.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/tribepad.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/matchroom.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/diageo.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/sonovate.svg
https://kota-content.b-cdn.net/app/uploads/2023/10/saatchi.svg
```

### Case Study Videos (MP4)
```
https://kota-content.b-cdn.net/app/uploads/2025/04/Featured2-Compressed.mp4
https://kota-content.b-cdn.net/app/uploads/2025/08/GOAT-FeatureVideo.mp4
https://kota-content.b-cdn.net/app/uploads/2025/02/isi-vid2-1.mp4
https://kota-content.b-cdn.net/app/uploads/2025/04/Duplicated-Assets.mp4
https://kota-content.b-cdn.net/app/uploads/2025/09/Company-Loop4-compressed-2.mp4
https://kota-content.b-cdn.net/app/uploads/2024/04/dka-thumbnail-compressed.mp4
https://kota-content.b-cdn.net/app/uploads/2024/03/work-video.mp4
```

### Service Page Images (JPG)
```
https://kota-content.b-cdn.net/app/uploads/2023/11/header-3.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento1-1.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento2-1.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento4-1.jpg
```

### Team Photos (JPG/PNG)
```
https://kota-content.b-cdn.net/app/uploads/2024/02/team-alex.jpg
https://kota-content.b-cdn.net/app/uploads/2024/11/Jules-filtered.png
https://kota-content.b-cdn.net/app/uploads/2024/02/team-nat.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-jonny.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-margo.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-matt-1.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-huse.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-ed.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-piper.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-nicola2-1.jpg
https://kota-content.b-cdn.net/app/uploads/2024/03/team-emily3.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-ffion.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-bekah.jpg
https://kota-content.b-cdn.net/app/uploads/2024/02/team-em.jpg
https://kota-content.b-cdn.net/app/uploads/2024/11/Ash-Filtered.png
https://kota-content.b-cdn.net/app/uploads/2024/02/team-maja.jpg
```

## 5.2 Replacement Guide

| KOTA Asset | Replace With | Source | Priority |
|------------|-------------|--------|----------|
| KOTA logo | Corum8 logo (logo-white.png for dark bg) | assets/logo/ | Immediate |
| KOTA client logos (Jamie Oliver, Penguin, etc.) | Corum8 client logos (Binance, KuCoin, etc.) | assets/clients/ | Immediate |
| KOTA trust badges (Awwwards, CSSDA) | Corum8 badges (Trustpilot, Blockchain Life) | assets/awards/ | Immediate |
| KOTA case study videos | Stock video loops or Corum8 project recordings | Need to create | Wave 2 |
| KOTA service page images | Blockchain/tech stock images | Unsplash/Pexels | Wave 1 |
| KOTA team photos | Corum8 team photos (or placeholder) | Need to shoot | Wave 2 |
| KOTA testimonial client photos | Corum8 client avatars | Need to source | Wave 1 |
| KOTA media/footer badges | Corum8 media logos (Forbes, Bloomberg, etc.) | assets/media/ | Immediate |

---

# PART 6: CLAUDE CODE MASTER PROMPT

Copy-paste this ENTIRE section into Claude Code at the start of the project.

---

```
## PROJECT: CORUM8 WEBSITE — KOTA.CO.UK EXACT CLONE

### WHAT YOU ARE BUILDING

You are building an exact visual and functional clone of https://kota.co.uk — every page, every animation, every component, every interaction pattern — adapted for Corum8, a Web3 marketing and development agency.

### PHASE 1: EXACT CLONE (Current Task)

Build the homepage first. It must be pixel-perfect to KOTA's homepage with these substitutions ONLY:
- Logo → Corum8 logo (from assets/logo/logo-white.png)
- Company name → "Corum8" everywhere
- Tagline → "Global Web3 Marketing, PR & Development Agency"
- Navigation links → Use Corum8 nav structure (see NAV SPEC below)
- Hero text → "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*"
- Email → info@corum8.com
- Socials → X, LinkedIn, Telegram, Instagram (see SOCIAL LINKS below)

Everything else — images, videos, layout, animations, colors, fonts, spacing — stays EXACTLY as KOTA has it initially. We will replace content systematically later.

### REFERENCE SITE
- Homepage: https://kota.co.uk/
- Service Pillar: https://kota.co.uk/service/web-design-development/
- About: https://kota.co.uk/agency/
- Portfolio: https://kota.co.uk/work/
- Contact: https://kota.co.uk/contact/

### TECH STACK
- Next.js 14+ (App Router)
- Tailwind CSS for utility classes + custom CSS for animations
- GSAP (ScrollTrigger, SplitText) for scroll animations
- Lenis for smooth scroll
- TypeScript
- next/font for font loading

### DESIGN SYSTEM — MATCH KOTA EXACTLY

COLORS (Keep KOTA's light theme initially — we switch to dark mode in Phase 2):
- Background: #FFFFFF
- Text: #1A1A1A
- Secondary text: #666666
- Borders: rgba(0,0,0,0.08)
- CTAs: #000000 background, #FFFFFF text

TYPOGRAPHY:
- Headlines: Serif font with italic on emotional keywords
- Body: Clean sans-serif
- Eyebrow labels: Uppercase, letter-spaced, small
- Scale: Hero 5-7rem, H1 2.5-4.5rem, body 1-1.125rem

SPACING:
- Section padding: 120-160px vertical
- Container max-width: 1440px
- Side padding: clamp(24px, 4vw, 80px)

### HOMEPAGE SECTIONS (Match KOTA order exactly)

1. TOP BANNER — thin strip: "Trusted by 1,100+ Web3 Projects Worldwide"
2. NAVIGATION — transparent → sticky with blur on scroll
   - Logo | Marketing▾ | Development▾ | Industries▾ | Resources▾ | About▾ | [Book a Strategy Call]
3. HERO — full viewport
   - Headline: "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*"
   - Trust badges row below
4. SERVICES GRID — 3 asymmetric cards
   - Development (with sub-service links)
   - Marketing (with sub-service links)  
   - Advisory (with sub-service links)
   - Each: eyebrow + headline + sub-links list + description + CTA
5. BRAND PROMISE — numbered 01-04
   - 01/ Execution Over Promises
   - 02/ Data Meets Creativity
   - 03/ Global Reach, Local Impact
   - 04/ Full-Stack Capabilities
   - Each with image + expandable description
6. CASE STUDIES — 2-column cards with video/image hover
7. RESULTS STATS — horizontal carousel with large numbers
8. CLIENT LOGOS — infinite scroll marquee (use KOTA's logos initially)
9. TESTIMONIALS — horizontal auto-scroll carousel
10. BLOG PREVIEW — 3 article cards
11. FAQ — expandable accordion
12. FOOTER — 5-column layout

### ANIMATIONS — IMPLEMENT ALL OF THESE

- Scroll-triggered fade-up reveals (GSAP ScrollTrigger)
- Staggered card entrances (0.15s delay between items)
- Case study card hover: overlay from bottom, slight image scale
- CTA hover: background color slide/invert
- Link hover: underline draws left to right
- Nav: transparent → solid + blur on scroll
- Logo marquee: infinite CSS scroll, pause on hover
- Testimonial carousel: auto-scroll horizontal loop
- Stats: count-up animation on scroll
- Mobile menu: full-screen overlay with staggered text
- Process timeline: horizontal step highlight
- FAQ: smooth expand/collapse

### CRITICAL RULES

1. Download ALL images from KOTA's CDN (kota-content.b-cdn.net) and save locally
2. NEVER use Bootstrap, Material UI, or generic component libraries
3. NEVER center-align all text in every section — use KOTA's asymmetric layout
4. NEVER make equal-width 3-column grids for services
5. EVERY section must have scroll-triggered animation
6. EVERY button must have a hover state
7. EVERY image must be responsive
8. Mobile-first responsive design
9. Match KOTA's spacing EXACTLY — generous whitespace is non-negotiable
10. Match KOTA's typography scale EXACTLY — large serif headlines with italic keywords

### IMAGE DOWNLOAD SCRIPT

Before building, download all KOTA assets. Create a script that:
1. Downloads all images/videos from the URLs listed in this document
2. Saves them to /public/assets/kota/
3. Creates a CSV tracker of all downloaded files
4. Logs which files succeeded/failed

### NAV SPEC

Primary: Logo | Marketing▾ | Development▾ | Industries▾ | Resources▾ | About▾ | [Book a Strategy Call]

Marketing Mega Menu (3 columns + CTA):
- Col 1 (Growth & Digital): Performance Marketing, SEO AEO & GEO, Social Media, B2B Marketing, Web3 Growth, Strategy & GTM
- Col 2 (PR & Branding): Crypto PR, Branding & Design, Fractional CMO, OOH & Print, Personal Branding, Celebrity Marketing
- Col 3 (Web3 Specific): Influencer & KOL, Community Building, Exchange Volume, Listing Support, Token Sale Marketing, Events, Gaming Community
- CTA: "Grow With Us" + "25,000+ influencers. 10,000+ media outlets." + Button

Development Mega Menu (3 columns + CTA):
- Col 1 (Web3 & Blockchain): RWA Marketplace, CEX & DEX, Wallet, DeFi & Staking, Blockchain Layer, Token & Stablecoin, Smart Contracts, NFT Marketplace, Enterprise Blockchain, Tokenization, Metaverse
- Col 2 (AI & Core Tech): AI & Automation, Mobile & Web Apps, Game Dev, E-commerce, Website Dev, Automation
- Col 3 (Fintech): Referral & MLM, MT4/MT5 Broker, Fintech & Payments
- CTA: "See Our Products Live" + "Explore production-ready demos." + Button

Industries Dropdown: Web3 & Crypto, Startups, SaaS, Fintech, AI, Enterprise
Resources Dropdown: Case Studies, Gallery, Blog, Insights, Guides
About Dropdown: Company, Team, Careers, Contact

### SOCIAL LINKS
- X: https://x.com/corum8
- LinkedIn: https://linkedin.com/company/corum8
- Telegram: https://t.me/corum8
- Instagram: https://instagram.com/corum8

### CONTACT INFO
- Email: info@corum8.com
- Phone: +971 52 343 8098
- HQ: Dubai, UAE
- Offices: Dubai UAE (HQ), United States, India

### AFTER HOMEPAGE IS DONE

Build in this order:
1. Service Pillar: /services/development (clone kota.co.uk/service/web-design-development/)
2. Service Pillar: /services/marketing (clone same template)
3. About: /about (clone kota.co.uk/agency/)
4. Case Studies Hub: /case-studies (clone kota.co.uk/work/)
5. Contact: /contact (clone kota.co.uk/contact/)
6. First 5 dev cluster pages
7. First 5 marketing cluster pages
8. Industry verticals (clone kota.co.uk sector pages)
9. Blog hub + 3 posts
10. Remaining cluster pages

Each page MUST include for SEO/AEO:
- Meta title + description
- Open Graph tags
- JSON-LD schema (Service, FAQPage, BreadcrumbList, Organization as appropriate)
- FAQ section with expandable answers
- Internal links to pillar + 2-3 related clusters
- Breadcrumb navigation
- 800-1200+ words minimum content
```

---

# PART 7: SEO/AEO/GEO ENHANCEMENTS (Beyond KOTA)

Things KOTA doesn't do that Corum8 MUST do for search dominance:

## 7.1 On Every Page
- **Direct Answer Block** — 2-3 sentence summary at top of content area (for AI citation by ChatGPT, Gemini, Perplexity)
- **FAQ section** — 5-6 questions matching real search queries, with FAQPage schema
- **HowTo schema** — on all service pages ("How We Do It" process sections)
- **Breadcrumb schema** — on every page
- **Internal linking** — every page links to its pillar, 2-3 related clusters, and a use case
- **800-1200+ words minimum** — no thin content pages

## 7.2 Schema Per Page Type
| Page Type | JSON-LD Schemas |
|-----------|----------------|
| Homepage | Organization, WebSite, LocalBusiness |
| Service pages | Service, FAQPage, BreadcrumbList, HowTo |
| Industry pages | Service, FAQPage, BreadcrumbList |
| Case studies | Article, FAQPage, BreadcrumbList |
| Blog posts | Article, FAQPage, BreadcrumbList |
| GEO pages | LocalBusiness, FAQPage, BreadcrumbList |
| Comparison pages | Article, FAQPage, BreadcrumbList |
| Cost guides | Article, FAQPage, HowTo, BreadcrumbList |
| Tools | WebApplication, BreadcrumbList |

## 7.3 AEO-Specific Content Patterns
Every service page should answer these patterns:
- "What is [service]?" — definition block
- "How much does [service] cost?" — pricing range or "contact for custom quote"
- "How long does [service] take?" — timeline estimate
- "What's included in [service]?" — deliverables list
- "Why choose Corum8 for [service]?" — differentiator paragraph
- "[Service] vs [Alternative]?" — comparison context

## 7.4 GEO Pages
12 location pages targeting regional searches:
- /locations/dubai — "Web3 Agency in Dubai"
- /locations/united-states — "Blockchain Development Company USA"
- etc.
Each includes: local office info, regional clients, jurisdiction-specific compliance knowledge, local case studies, LocalBusiness schema.

---

# PART 8: IMAGE REPLACEMENT TRACKER TEMPLATE

Use this spreadsheet structure to track every image replacement:

| # | Page | Section | KOTA Image | KOTA URL | Corum8 Replacement | Source | Status | Notes |
|---|------|---------|-----------|----------|-------------------|--------|--------|-------|
| 1 | Homepage | Logo | KOTA logo | — | logo-white.png | assets/logo/ | DONE | Immediate swap |
| 2 | Homepage | Trust badges | DAN, Clutch, Awwwards, CSSDA | kota-content.b-cdn.net/... | Trustpilot, Blockchain Life, Clutch | assets/awards/ | TODO | Need badge SVGs |
| 3 | Homepage | Client logos | 15 KOTA client SVGs | kota-content.b-cdn.net/... | 30 Corum8 client PNGs | assets/clients/ | TODO | Convert to grayscale SVG |
| 4 | Homepage | Case studies | 5 MP4 videos | kota-content.b-cdn.net/... | Stock video loops or project recordings | Need to create | TODO | Use Unsplash video initially |
| 5 | Homepage | Testimonials | Client photos | — | Corum8 client avatars | Need to source | TODO | Use initials as fallback |
| 6 | Service pillar | Hero image | header-3.jpg | kota-content.b-cdn.net/... | Blockchain/tech stock photo | Unsplash | TODO | Search "blockchain technology" |
| 7 | Service pillar | Bento grid | bento1-4.jpg | kota-content.b-cdn.net/... | Code screens, architecture diagrams | Unsplash/Pexels | TODO | 4 images needed |
| 8 | About | Team photos | 16 team photos | kota-content.b-cdn.net/... | Corum8 team photos | Need to shoot | Wave 2 | Use placeholder initially |
| 9 | All pages | Footer badges | DAN, Clutch, Awwwards, CSSDA | kota-content.b-cdn.net/... | Same as trust badges | assets/awards/ | TODO | |
| 10 | Blog | Article images | KOTA blog images | — | Stock photos per topic | Unsplash | TODO | |

---

# PART 9: EXECUTION CHECKLIST

## Phase 1: Clone (Week 1)
- [ ] Set up Next.js project with Tailwind + GSAP
- [ ] Download all KOTA assets to /public/assets/kota/
- [ ] Build Homepage — exact KOTA clone with Corum8 text substitutions
- [ ] Build Navigation component with mega menus
- [ ] Build Footer component (5-column)
- [ ] Verify all animations match KOTA
- [ ] Swap logo + basic text
- [ ] Test responsive on mobile

## Phase 2: Core Pages (Week 2)
- [ ] Build Service Pillar template
- [ ] Create /services/development using template
- [ ] Create /services/marketing using template
- [ ] Build About page (clone kota.co.uk/agency/)
- [ ] Build Case Studies hub (clone kota.co.uk/work/)
- [ ] Build Contact page

## Phase 3: Cluster Pages (Week 3-4)
- [ ] Build Service Cluster template
- [ ] Create 11 dev cluster pages
- [ ] Create 10 marketing cluster pages
- [ ] Build Industry Vertical template
- [ ] Create 6 industry pages
- [ ] Build Blog template + 3 posts

## Phase 4: Content Swap (Week 4-5)
- [ ] Replace all KOTA images with Corum8 assets
- [ ] Replace all KOTA text with Corum8 content
- [ ] Add FAQ sections to all pages
- [ ] Add schema markup to all pages
- [ ] Add internal linking
- [ ] SEO audit

## Phase 5: Expansion (Month 2-3)
- [ ] Build remaining 55 dev clusters
- [ ] Build remaining 51 marketing clusters
- [ ] Build 48 industry clusters
- [ ] Build 12 GEO pages
- [ ] Build comparison + cost guide pages
- [ ] Launch CMS for ongoing blog

---

END OF DOCUMENT
