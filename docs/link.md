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
| Awards badges grid (Awwwards ×12, Mindsparkle ×2, CSSDA ×3, FWA ×1, Lovies ×1) | Awards grid: Blockchain Life 2025, Finext 2024, Finext 2025, Dubai Expo 2020 (give atleast 8 , rest you create your own)
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

## 4.5 Component Inventory

### Navigation
- **Desktop:** Transparent → sticky with blur. Logo left, links center, CTA right
- **KOTA mega-menu:** Services dropdown shows sub-service links
- **Corum8 mega-menu:** 3-column layout with CTA panel (per SITE_SPEC)
- **Mobile:** Hamburger → full-screen overlay with large staggered text

### Footer
- KOTA: 2 main columns (contact + links), sector links, badges
- Corum8: 5 columns (brand, company, development, marketing, contact) + bottom bar

---


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

### PHASE 1: EXACT CLONE (Current Task)


- Logo → Corum8 logo (from assets)
- Company name → "Corum8" everywhere
- Tagline → "Global Web3 Marketing, PR & Development Agency"
- Navigation links → Use Corum8 nav structure (see NAV SPEC below)
- Hero text → "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*"






### HOMEPAGE SECTIONS (Match KOTA order exactly)

1. TOP BANNER — thin strip: "Trusted by 1,100+ Web3 Projects Worldwide"
2. NAVIGATION —
   - Logo | Marketing▾ | Development▾ | Industries▾ | Resources▾ | About▾ | [Book a Strategy Call]
3. HERO — full viewport
   - Headline: "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*"
   - Trust badges row below
4.
5. BRAND PROMISE — numbered 01-04
   - 01/ Execution Over Promises
   - 02/ Data Meets Creativity
   - 03/ Global Reach, Local Impact
   - 04/ Full-Stack Capabilities
   - Each with image + expandable description



### CRITICAL RULES

2. NEVER use Bootstrap, Material UI, or generic component libraries
3. NEVER center-align all text in every section — use KOTA's asymmetric layout

5. EVERY section must have scroll-triggered animation
6. EVERY button must have a hover state
7. EVERY image must be responsive
8. Mobile-first responsive design
9.
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
| 1 | Homepage | Logo | KOTA logo | — | logo | assets/logo/ | DONE | Immediate swap |
| 2 | Homepage | Trust badges | DAN, Clutch, Awwwards, CSSDA | kota-content.b-cdn.net/... | Trustpilot 4.9 star, Blockchain Life, Clutch | assets/awards/ | TODO | Need badge SVGs |
| 3 | Homepage | Client logos | 15 KOTA client SVGs | kota-content.b-cdn.net/... | 30 Corum8 client PNGs | assets/clients/ | TODO | Convert to grayscale SVG |
| 4 | Homepage | Case studies | 5 MP4 videos | kota-content.b-cdn.net/... | Stock video loops or project recordings | Need to create | TODO | Use Unsplash video initially |
| 5 | Homepage | Testimonials | Client photos | — | Corum8 client avatars | Need to source | TODO | Use free stock images|
| 6 | Service pillar | Hero image | header-3.jpg | kota-content.b-cdn.net/... | Blockchain/tech stock photo | Unsplash | TODO | Search "blockchain technology" |
| 7 | Service pillar | Bento grid | bento1-4.jpg | kota-content.b-cdn.net/... | Code screens, architecture diagrams | Unsplash/Pexels | TODO | 4 images needed |
| 8 | About | Team photos | 16 team photos | kota-content.b-cdn.net/... | Corum8 team photos use stock photo |
| 9 | All pages | Footer badges | DAN, Clutch, Awwwards, CSSDA | kota-content.b-cdn.net/... | Same as trust badges | assets/awards/ | TODO | |
| 10 | Blog | Article images | KOTA blog images | — | Stock photos per topic | Unsplash | TODO | |

---

# PART 9: EXECUTION CHECKLIST

## Phase 1: Clone (Week 1)
- [ ]
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
