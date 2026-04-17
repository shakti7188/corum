# CORUM8 — PHASED BUILD FROM KOTA CLONE
## Master Prompt for Claude Code

**Date:** April 16, 2026
**Goal:** Pixel-perfect KOTA.co.uk clone → Systematic Corum8 transformation

---

# EXECUTION PHASES (STRICT ORDER — DO NOT SKIP)

## PHASE 1: EXACT KOTA CLONE — Same text, same images, same everything
- Download ALL KOTA images, videos, SVGs, fonts
- Build site with KOTA's EXACT text content
- KOTA's EXACT images in KOTA's EXACT positions
- KOTA's EXACT animations and interactions
- KOTA's EXACT colors, fonts, spacing
- Verify: open in browser → should look IDENTICAL to kota.co.uk
- **NO Corum8 content at all in this phase**

## PHASE 2: REPLACE ONLY CRITICAL IDENTIFIERS
- Logo → Corum8 logo
- Company name "KOTA" → "Corum8" everywhere
- Email → info@corum8.com
- Phone → +971 52 343 8098
- Addresses → Dubai UAE (HQ), United States, India
- Social links → Corum8's X, LinkedIn, Telegram, Instagram
- Navigation structure → Corum8's menu (Marketing▾, Development▾, Industries▾, etc.)
- CTA text → "Book a Strategy Call"
- Footer → Corum8's 5-column footer
- **ALL images remain KOTA's images**
- **ALL body text, headlines, descriptions remain KOTA's text**

## PHASE 3: ADD CORUM8 ADDITIONAL CONTENT
- Replace KOTA's 15 client logos with Corum8's 30 client logos (3 rows)
- Replace KOTA's 4 trust badges with Corum8's badges (Trustpilot, Blockchain Life, etc.)
- Add Corum8's media coverage section (16 logos: Forbes, Bloomberg, etc.)
- Replace KOTA's 5 case studies with Corum8's 6 case studies
- Replace KOTA's testimonials with Corum8's testimonials
- Replace KOTA's stats (67.6%, 70.8%, etc.) with Corum8's stats ($120M+, 2.5B+, etc.)
- Replace KOTA's service descriptions with Corum8's services
- Replace KOTA's FAQ content with Corum8's SEO-optimized FAQs
- Add Corum8's awards section (8 awards from 50+ total)
- Add Corum8's industry cards section
- Add Corum8's process section (Discover → Position → Activate → Scale)
- **Images still remain KOTA's images where Corum8 doesn't have replacements**

## PHASE 4: IMAGE REPLACEMENT (LAST)
- Replace all remaining KOTA images with Corum8 assets or stock photos
- Replace KOTA team photos with Corum8 team (or professional placeholders)
- Replace KOTA case study videos with Corum8 project visuals
- Replace KOTA service page hero images with Web3/blockchain stock images
- Replace KOTA bento grid images with Corum8-relevant visuals
- Final visual QA — ensure no KOTA branding remains anywhere

---

# PHASE 1 DETAILED SPEC: EXACT KOTA CLONE

## Step 1: Download ALL KOTA Assets

Create a download script that fetches every single asset below and saves to `/public/assets/kota/`

### COMPLETE KOTA IMAGE/VIDEO URL LIST

```
# ═══════════════════════════════════════════════════════
# TRUST & AWARD BADGES (8 files)
# ═══════════════════════════════════════════════════════
https://kota-content.b-cdn.net/app/uploads/2024/03/Digital-Agency-Network.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/clutch.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/awwwards.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/cssda.svg
https://kota-content.b-cdn.net/app/uploads/2023/11/awwwards.svg
https://kota-content.b-cdn.net/app/uploads/2023/11/mindsparkle.svg
https://kota-content.b-cdn.net/app/uploads/2023/11/cssda.svg
https://kota-content.b-cdn.net/app/uploads/2024/02/Path-1345.svg
https://kota-content.b-cdn.net/app/uploads/2025/11/The-Lovies-4.png
https://kota-content.b-cdn.net/app/uploads/2024/06/DAN-1-500x167.png

# ═══════════════════════════════════════════════════════
# CLIENT/PARTNER LOGOS (15 files)
# ═══════════════════════════════════════════════════════
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

# ═══════════════════════════════════════════════════════
# CASE STUDY / PORTFOLIO VIDEOS (7 files)
# ═══════════════════════════════════════════════════════
https://kota-content.b-cdn.net/app/uploads/2025/04/Featured2-Compressed.mp4
https://kota-content.b-cdn.net/app/uploads/2025/08/GOAT-FeatureVideo.mp4
https://kota-content.b-cdn.net/app/uploads/2025/02/isi-vid2-1.mp4
https://kota-content.b-cdn.net/app/uploads/2025/04/Duplicated-Assets.mp4
https://kota-content.b-cdn.net/app/uploads/2025/09/Company-Loop4-compressed-2.mp4
https://kota-content.b-cdn.net/app/uploads/2024/04/dka-thumbnail-compressed.mp4
https://kota-content.b-cdn.net/app/uploads/2024/03/work-video.mp4

# ═══════════════════════════════════════════════════════
# SERVICE PAGE IMAGES (4 files)
# ═══════════════════════════════════════════════════════
https://kota-content.b-cdn.net/app/uploads/2023/11/header-3.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento1-1.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento2-1.jpg
https://kota-content.b-cdn.net/app/uploads/2023/11/bento4-1.jpg

# ═══════════════════════════════════════════════════════
# TEAM PHOTOS (16 files)
# ═══════════════════════════════════════════════════════
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

# ═══════════════════════════════════════════════════════
# CONTACT PAGE (1 file)
# ═══════════════════════════════════════════════════════
https://kota-content.b-cdn.net/app/uploads/2023/10/contact-bg-2560x1440.jpg

# ═══════════════════════════════════════════════════════
# SITE-WIDE UI ELEMENTS (2 files)
# ═══════════════════════════════════════════════════════
https://kota.co.uk/images/cyber-essentials.svg
https://kota.co.uk/images/GPTW-Certificate.svg

# ═══════════════════════════════════════════════════════
# TOTAL: ~55 files (10 badges + 15 logos + 7 videos + 
#        4 service images + 16 team photos + 1 contact bg + 2 UI)
# ═══════════════════════════════════════════════════════
```

### Download Script Instructions for Claude Code

```
Create a Node.js or Python script that:
1. Creates directory structure:
   /public/assets/kota/badges/
   /public/assets/kota/logos/
   /public/assets/kota/videos/
   /public/assets/kota/images/
   /public/assets/kota/team/
   /public/assets/kota/ui/

2. Downloads every URL from the list above into the appropriate folder
3. Preserves original filenames
4. Creates a JSON manifest file: /public/assets/kota/manifest.json
   Format: { "badges": [...filenames], "logos": [...], "videos": [...], etc. }
5. Logs success/failure for each file
6. Reports total: downloaded / failed / skipped (if already exists)
7. Retries failed downloads once

Run this script FIRST before building any pages.
After download, verify by opening a few images in browser to confirm they're valid.
```

## Step 2: Build KOTA Homepage (Exact Clone)

Reference URL: https://kota.co.uk/

Build the homepage with KOTA's EXACT content. Here is every section in order with KOTA's actual text:

### Section 1: Top Banner
- Text: "Celebrating 13 years : 2013 - 2026"
- Link: https://10-years.kota.co.uk/
- Thin strip above navigation

### Section 2: Navigation
- Logo: KOTA logo (download from site or use text "KOTA")
- Links: Work | Agency | Services▾ | Blog | Culture | Contact
- Services dropdown shows: Web design & development, Branding, Digital marketing
- CTA button: "Start your project"
- Second CTA: "Hire us"
- Behavior: transparent initially → solid with backdrop-blur on scroll
- Mobile: hamburger → full-screen overlay

### Section 3: Hero
- Headline: "We're a creative web design and branding agency based in London that crafts beautiful work for brands who **refuse to blend in.**"
- The words "refuse to blend in." should be in italic/emphasis
- Full viewport height
- Left-aligned, spanning ~70% of width
- Trust badges below: DAN logo, Clutch logo, Awwwards logo, CSSDA logo
- CTA: "Start your project"

### Section 4: Services Grid (3 cards, ASYMMETRIC layout — NOT equal columns)

**Card 1: "Web design & development"**
Sub-links: Creative web design, Web development, Copywriting, E-Commerce, WordPress
Description: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click."
CTA: "Find out more"

**Card 2: "Branding"**
Sub-links: Brand strategy, Tone of voice, Visual identity
Description: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice."
CTA: "Find out more"

**Card 3: "Digital Marketing"**
Sub-links: Motion graphics, Creative campaigns, Marketing support
Description: "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions."
CTA: "Find out more"

### Section 5: Brand Promise (numbered 01-04)
Header: "Brand-led. Strategically built."

01/ "Design with guts."
"We build immersive, brand-led digital experiences that wow and work hard. The kind that raises eyebrows, sparks emotion, and moves people to act."

02/ "Nail the process."
"We're collaborative, decisive, and clear from day one. You'll feel the momentum. You'll know where you stand. You'll have a team that knows when to lead, and when to listen."

03/ "Build to flex."
"We're ready for your growth. In fact, we're rooting for it. Whether it's a new campaign, product, or pivot, we make sure your digital presence is set up to flex with you."

04/ "Create to convert."
"We sweat the small stuff. From brand visuals to UX flow, every decision is intentional—designed to boost engagement, drive conversions, and build brand equity."

Each has an image/visual on the side.

### Section 6: Case Studies
Header: "Our Work"
Subheader: "Making brands a damn site better."
Description: "Let's face it, first impressions matter. Your website's an opportunity to wow your audience, so why choose bad design? Brands win over fans when they're brave enough to go beyond their creative comfort zone."

**5 project cards** (2-column layout, video on hover):

| Project | Year | Description | Tags |
|---------|------|-------------|------|
| UPP | 2025 | We crafted a cinematic web experience for a Hollywood powerhouse. | Web design & development, Agencies |
| The Goat Agency | 2025 | Influence everywhere: a future-ready website for The Goat Agency. | Web design & development, Agencies |
| ISI Global | 2025 | We revamped this global design agency's digital identity. | Branding, Web design & development, Agencies, Retail |
| Incentive Games | 2025 | We designed for play with Incentive Games' new website. | Web design & development, B2B tech, software & SaaS |
| Wogan Coffee | 2023 | We completely transformed the image of Bristol's finest coffee company. | Branding, Web design & development, E-Commerce, Digital Marketing, Retail |

CTA: "View all projects"

### Section 7: Results Stats (horizontal carousel)

| Stat | Description | Project Link |
|------|-------------|-------------|
| 67.6% | rise in engaged sessions per user after 1 month. | /work/pison/ |
| 70.8% | increase in average engagement time after 3 months. | /work/dka/ |
| 83.14% | increase in sales after 1 year. | /work/wogan-coffee/ |
| 104.9% | increase in organic visits after 1 month | /work/isi-global/ |

Each stat has background project screenshots/images.

### Section 8: Client Logo Marquee
- 15 logos in infinite horizontal scroll
- Logos: Jamie Oliver, Comptoir Libanais, British Red Cross, SYM, Penguin, RAW, Penhaligon's, Stoli, Bounce, Tangerine, Tribepad, Matchroom, Diageo, Sonovate, Saatchi
- Grayscale, infinite CSS animation
- Pauses on hover

### Section 9: Testimonials (auto-scrolling horizontal carousel)

6 testimonials, each with:
- Quote text
- Client name + title
- "View project" link

Testimonial 1 — Laura Wogan, Third Generation Director (Wogan Coffee)
Testimonial 2 — Shanice Daeche, CMO (Florence)
Testimonial 3 — Jenny Frame, Marketing Manager (Incentive Games)
Testimonial 4 — Shaun Obanion, PR Manager of Universal Production Partners (UPP)
Testimonial 5 — Bianca Cristescu, Key Account Director, ISI Global
Testimonial 6 — Laurie Bushe, Head of Marketing (Tangerine)

Carousel is duplicated for seamless infinite loop. Auto-scrolls, pauses on hover.

### Section 10: Blog Preview
Header: "Latest articles"
CTA: "View our blog"

Show latest blog cards with image + category tag + title. Use whatever blog images are available from KOTA's CDN.

### Section 11: FAQ Accordion

6 FAQ items, expandable on click:

Q1: "How much does web design and development typically cost?"
Q2: "How long does a project usually take?"
Q3: "Can your creative agency accommodate tight deadlines?"
Q4: "What ongoing support and maintenance do you offer post-launch?"
Q5: "How do you handle revisions and feedback during the design process?"
Q6: "Are there additional costs for digital marketing services integrated into web projects?"

(Use KOTA's actual answer text for each)

### Section 12: Footer

Left side:
- "Celebrating 12 years" + "Explore" link
- Email: hello@kota.co.uk + copy button
- Social links: LinkedIn, Facebook, Instagram, Bluesky

Right columns:
- Contact, FAQs, Privacy Policy links
- Sectors: Agencies, SaaS and Tech, B2B Transformation, Healthcare, Media & Entertainment, Retail

Bottom: Badge row (DAN, Clutch, Awwwards, CSSDA) + © KOTA 2026 + Cyber Essentials badge

---

## Step 3: Build Additional KOTA Pages (Same Exact Content)

After homepage is verified as identical, build these pages in order:

### Page 2: Service Pillar — Web Design & Development
URL reference: https://kota.co.uk/service/web-design-development/
- Hero: "Creative Web Design and Development Services" + "Welcome to the *digital* renaissance."
- Sub-nav pills
- Bento grid (4 images)
- Service cards (5: Creative web design, Web development, Copywriting, E-Commerce, WordPress)
- Results stats (4 stats)
- Process timeline (horizontal, 6 steps: Immersion → Kick Off → Structure → Design → Development → QA & Launch)
- Testimonials
- Related articles (3)
- Related projects (6)
- FAQ

### Page 3: Agency/About
URL reference: https://kota.co.uk/agency/
- Hero: "Proudly signing every piece."
- Mission section with video
- Approach section (two-column)
- Awards badges grid (Awwwards ×12, Mindsparkle ×2, CSSDA ×3, FWA ×1, Lovies ×1)
- Team photo carousel (16 team members)
- Partner logo marquee

### Page 4: Work/Portfolio Hub
URL reference: https://kota.co.uk/work/
- Hero: "We are *experts* in bringing brands to life digitally." + background video
- Project grid (reuse homepage case study cards)

### Page 5: Contact
URL reference: https://kota.co.uk/contact/
- Hero: "Good things happen when you say *hey.*"
- Contact form with interest checkboxes
- Two office addresses (London + New York)
- Phone number
- Email addresses (general, new business, careers)
- Social links
- Background image (contact-bg-2560x1440.jpg)

### Page 6: Culture
URL reference: https://kota.co.uk/culture/
- Hero: "Be part of a *great team,* but work from anywhere."
- Great Place to Work badge
- Values numbered 01-05 (Tune in, Get Dirty, Think Diversely, Leave No Crumbs, Leave a Legacy)
- Perks section ("4.5 day week")
- Career interest tags
- CTA to get in touch

---

## Step 4: Verify Phase 1

Open each page in browser and compare side-by-side with KOTA:
- [ ] Homepage matches kota.co.uk/ — layout, spacing, colors, typography, animations
- [ ] Service page matches kota.co.uk/service/web-design-development/
- [ ] Agency page matches kota.co.uk/agency/
- [ ] Work page matches kota.co.uk/work/
- [ ] Contact page matches kota.co.uk/contact/
- [ ] Culture page matches kota.co.uk/culture/
- [ ] Navigation works — links, dropdowns, mobile menu
- [ ] All animations fire — scroll reveals, hovers, marquees, carousels
- [ ] All images load from local /assets/kota/ folder
- [ ] All videos play (muted, autoloop on hover)
- [ ] Mobile responsive on all pages

**DO NOT PROCEED TO PHASE 2 UNTIL ALL CHECKS PASS.**

---

# PHASE 2 DETAILED SPEC: REPLACE IDENTIFIERS ONLY

## What Changes

| Element | KOTA Value | Corum8 Value |
|---------|-----------|--------------|
| Logo | KOTA logo | assets/logo/logo-white.png (dark bg) or logo-dark.png (light bg) |
| Company name | "KOTA" | "Corum8" |
| Tagline | "Creative Digital Agency" | "Global Web3 Marketing, PR & Development Agency" |
| Top banner | "Celebrating 13 years : 2013 - 2026" | "Trusted by 1,100+ Web3 Projects Worldwide" |
| Main email | hello@kota.co.uk | info@corum8.com |
| Phone | +44(0)20 3951 0562 | +971 52 343 8098 |
| London address | 1-5 Clerkenwell Rd, London EC1M 5PA | Dubai, UAE (HQ) |
| New York address | 477 Madison Ave, NY 10022 | 16192 Coastal Highway, Lewes, Delaware 19958 |
| Social: LinkedIn | linkedin.com/company/kota-creative/ | linkedin.com/company/corum8 |
| Social: Facebook | facebook.com/kotacreative/ | (remove — replace with Telegram: t.me/corum8) |
| Social: Instagram | instagram.com/kotalondon/ | instagram.com/corum8 |
| Social: Bluesky | bsky.app/profile/kotacreative.bsky.social | x.com/corum8 (X/Twitter replaces Bluesky) |
| Nav links | Work, Agency, Services▾, Blog, Culture, Contact | Marketing▾, Development▾, Industries▾, Resources▾, About▾ |
| CTA button | "Start your project" / "Hire us" | "Book a Strategy Call" |
| Footer sectors | Agencies, SaaS and Tech, B2B Transformation, Healthcare, Media & Entertainment, Retail | Web3 & Crypto, Startups, SaaS, Fintech, AI, Enterprise |
| Footer bottom | © KOTA 2026 | © 2026 Corum8. All rights reserved. |
| Footer links | Contact, FAQs, Privacy Policy | Privacy Policy, Terms of Service, Sitemap |

## What Does NOT Change Yet
- ALL hero headlines remain KOTA's text
- ALL service descriptions remain KOTA's text
- ALL images remain KOTA's images
- ALL case study content remains KOTA's
- ALL testimonials remain KOTA's
- ALL stats remain KOTA's
- ALL FAQ answers remain KOTA's
- ALL blog content remains KOTA's

## Navigation Structure (Replace KOTA's)

```
Desktop:
[Corum8 Logo] | Marketing▾ | Development▾ | Industries▾ | Resources▾ | About▾ | [Book a Strategy Call]

Marketing Mega Menu (3 columns + CTA panel):
  Column 1 — Growth & Digital:
    Performance Marketing | SEO, AEO & GEO | Social Media Management |
    B2B Marketing & Lead Generation | Web3 Growth Marketing | Marketing Strategy & GTM

  Column 2 — PR & Branding:
    Crypto PR & Media Coverage | Branding & Design Studio | Fractional CMO Team |
    OOH & Print Media | Personal Branding | Celebrity Marketing

  Column 3 — Web3 Specific:
    Influencer & KOL Marketing | Community Building & Growth |
    Exchange Volume & Liquidity Growth | Listing Support |
    Token Sale Marketing | Events | Gaming & Traders Community

  CTA Panel:
    Heading: "Grow With Us"
    Text: "25,000+ influencers. 10,000+ media outlets. Full-funnel campaigns that deliver measurable ROI."
    Button: "Book Strategy Call"

Development Mega Menu (3 columns + CTA panel):
  Column 1 — Web3 & Blockchain:
    RWA Marketplace Development | CEX & DEX Exchange Development |
    Wallet Infrastructure | DeFi & Staking Platforms |
    Blockchain Layer Development | Token & Stablecoin Infrastructure |
    Smart Contract Development | NFT & Marketplace Development |
    Enterprise Blockchain Solutions | Tokenization Platforms | Metaverse Development

  Column 2 — AI & Core Tech:
    AI & Automation Solutions | Mobile & Web Applications |
    Game Development | E-commerce Solutions |
    Website Development | Automation Solutions

  Column 3 — Fintech & Trading:
    Referral & MLM Platforms | MT4/MT5 Broker Platforms | Fintech & Payments

  CTA Panel:
    Heading: "See Our Products Live"
    Text: "Explore production-ready demos of our exchanges, wallets, RWA platforms, and more."
    Button: "View Demos"

Industries Dropdown:
  Web3 & Crypto | Startups | SaaS | Fintech | AI | Enterprise

Resources Dropdown:
  Case Studies | Gallery | Blog | Insights | Guides

About Dropdown:
  Company | Team | Careers | Contact
```

---

# PHASE 3 DETAILED SPEC: ADD CORUM8 CONTENT

## Replace in this order (one section at a time, test after each):

### 3.1 Homepage Hero
**Old (KOTA):** "We're a creative web design and branding agency based in London that crafts beautiful work for brands who *refuse to blend in.*"
**New (Corum8):** "We build, market & scale Web3, AI and fintech companies that *refuse to blend in.*"

Trust badges: Replace KOTA badges with:
- ★★★★★ 4.9/5 Trustpilot
- Blockchain Life 2025 badge
- Clutch badge
- 50+ Awards badge

### 3.2 Client Logos
**Old:** 15 KOTA client logos in 1 row
**New:** 30 Corum8 client logos in 3 rows (10 per row, alternating scroll direction)

Row 1: Binance, KuCoin, Gate.io, OKX, WazirX, MetaMask, TRON, Tether, CoinMarketCap, Cointelligence
Row 2 (reverse): KAVA, EOS, eToro, Dream11, Chingari, Flappy Bird, Metarix, Metavisa, CoinFunda, CoinJournal
Row 3 (slow): IoTeX, Obortech, Cobox, Ubuntu Tribe, Fanadise, Ozonex, Salamantex, MAGA, AMBCrypto, PlasmaPay

Source: assets/clients/ folder (37 PNGs available)

### 3.3 Services Grid
Replace KOTA's 3 service cards with Corum8's pillars:

**Card 1: "Development"**
Sub-links: Exchange Development, RWA Marketplace, Wallet Infrastructure, DeFi & Staking, AI & Automation, Smart Contracts
Description: "Enterprise-grade blockchain development, AI solutions, and full-stack platforms built for security, speed, and scale."
CTA: "Explore Development"

**Card 2: "Marketing"**
Sub-links: Crypto PR, Influencer & KOL, Community Building, Performance Marketing, SEO & AEO, Social Media
Description: "Full-funnel marketing with 25,000+ influencers, 10,000+ media outlets, and data-driven campaigns that deliver measurable ROI."
CTA: "Explore Marketing"

**Card 3: "Advisory"**
Sub-links: Fractional CMO, Marketing Strategy, Tokenomics Design, Go-to-Market
Description: "Strategic guidance from a team that's shipped 1,100+ projects — from token launches to enterprise campaigns."
CTA: "Talk to Us"

### 3.4 Brand Promise / Differentiators
Replace KOTA's 4 values:

01/ "Execution Over Promises"
"We don't pitch ideas and disappear. 10+ years of shipping products, running campaigns, and delivering measurable outcomes."

02/ "Data Meets Creativity"
"Every campaign is guided by analytics and refined through creative excellence. Performance and aesthetics, never a tradeoff."

03/ "Global Reach, Local Impact"
"Teams across Dubai, US, and India. Partnerships in 30+ countries. We scale campaigns where your audience actually lives."

04/ "Full-Stack Capabilities"
"Marketing, PR, community, development, and white-label — all under one roof. No handoffs between agencies."

### 3.5 Case Studies
Replace KOTA's 5 projects with Corum8's 6:

| Project | Year | Description | Tags | Result |
|---------|------|-------------|------|--------|
| Cashaa | 2023 | Influencer marketing, PR, community building and token launch support | Token Launch, PR, Community | $32M raised |
| Fanadise | 2023 | Full-stack campaign — influencers, PR, community, and launch execution | Web3 Growth, Full-Stack | $5M raised |
| Ubuntu Tribe | 2023 | PR, community building, influencer marketing, Token2049 side event | Global Campaign, Events | Global presence |
| KuCoin | 2024 | Strategic PR support for one of the world's largest exchanges | PR Strategy, Exchange | Brand visibility |
| Metarix | 2023 | Complete launch campaign with influencers, PR and community activation | Token Launch, Community | $780K raised |
| Binance | 2024 | Performance affiliate network built for volume-led growth | Affiliate, Performance | $800M+ monthly volume |

### 3.6 Stats
Replace KOTA's stats:

| Stat | Label |
|------|-------|
| $120M+ | Revenue Generated for Clients |
| 2.5B+ | Impressions Across Campaigns |
| 25,000+ | Influencers in Network |
| 1,100+ | Projects Delivered |

### 3.7 Testimonials
Replace KOTA's 6 testimonials with Corum8's 3 + video:

1. **Adaa** — Cobox Metaverse: "Corum8 was genuinely easy to work with and extremely consistent. They helped us strengthen our community foundation and improved engagement quality across all channels."

2. **Kumar Gaurav** — Cashaa, CEO: "Corum8 delivered exactly what they promised — professional execution with strong media and distribution reach. Their team made the entire process seamless and results-driven."

3. **Rene Pomassl** — Salamantex, Founder: "We worked with Corum8 for PR and product development support, and the experience was highly professional. Clear communication, reliable timelines, and solid output."

Video testimonial: YouTube embed (wHMfo38ZbN8)

### 3.8 Awards Section (ADD NEW — not in KOTA homepage)
Insert after testimonials, before blog preview.

Header: "50+ industry awards for excellence in development, marketing, and creative execution"

Show 8 awards:

| # | Award | Event | Year |
|---|-------|-------|------|
| 1 | Best Marketing Agency | Blockchain Life | 2025 |
| 2 | Best Development Agency | Finext | 2024 |
| 3 | Best Leadership Award | Finext | 2025 |
| 4 | Industry Recognition | Dubai Expo | 2020 |
| 5 | Best Web3 Agency | EMMI Empire | 2024 |
| 6 | Excellence in Innovation | IISA | 2024 |
| 7 | Top Marketing Company | Clutch | 2025 |
| 8 | Best Crypto Marketing | CoinTelegraph Awards | 2025 |

Display as: KOTA's awards grid style (badge image + award name + event + count)

### 3.9 Media Coverage Section (ADD NEW)
Insert after client logos.

Header: "Global visibility across 10,000+ media outlets"
16 logos in grid or marquee: Forbes, Bloomberg, Nasdaq, Reuters, CoinTelegraph, CoinDesk, MarketWatch, Entrepreneur, USA Today, Yahoo Finance, CNBC, Business Insider, Benzinga, TechBullion, HackerNoon, Decrypt
Source: assets/media/ folder

### 3.10 Industries Section (ADD NEW)
Insert before testimonials.

Header: "Built for Ambitious Companies Across Every Sector"
6 industry cards: Web3 & Crypto, Tech Startups, SaaS, Fintech, AI Tech, Enterprise
Each card links to /industries/[slug]

### 3.11 Process Section (ADD NEW)
Insert after differentiators.

Header: "From Vision to Velocity"
4 steps (horizontal timeline like KOTA's process):
1. Discover — "Product, market, audience, goals — clarity before action."
2. Position — "Right message, right channels, global market fit."
3. Activate — "PR, influencers, community, campaigns — all at once."
4. Scale — "Track, optimize, expand. Sustainable compound growth."

### 3.12 FAQ
Replace KOTA's FAQ with Corum8 SEO-optimized questions:

Q1: "What services does Corum8 offer?"
Q2: "How much do your services cost?"
Q3: "How long does a typical project take?"
Q4: "Do you work with early-stage startups or only established companies?"
Q5: "What industries does Corum8 specialize in?"
Q6: "Where are your offices located?"

---

# PHASE 4: IMAGE REPLACEMENT (DO LAST)

## Replacement Map

| Location | Current (KOTA) | Replace With | Source |
|----------|---------------|-------------|--------|
| Hero background | KOTA hero (if any bg image/video) | Corum8 bg2.mp4 or Dubai skyline stock | assets/video/ or Unsplash |
| Service page hero | header-3.jpg | Blockchain/server room stock image | Unsplash: "blockchain technology dark" |
| Bento grid image 1 | bento1-1.jpg | Exchange UI screenshot or code screen | Unsplash: "trading platform dark" |
| Bento grid image 2 | bento2-1.jpg | Smart contract code screenshot | Unsplash: "code screen developer" |
| Bento grid image 3 | bento4-1.jpg | Team meeting / strategy session | Unsplash: "team meeting modern office" |
| Case study thumbnails | 5 KOTA MP4 videos | Static images initially → Corum8 project recordings later | Unsplash: "crypto app mobile" |
| Team photos | 16 KOTA team photos | Corum8 team photos (TBD) OR professional avatar placeholders | Need to shoot or use AI avatars |
| Contact background | contact-bg-2560x1440.jpg | Dubai cityscape or modern office | Unsplash: "Dubai skyline night" |
| Blog card images | KOTA blog images | Web3/crypto/marketing stock | Unsplash per topic |
| Brand promise visuals | 4 section images | Web3 themed visuals | Unsplash |
| Culture page photos | KOTA culture photos | Corum8 culture photos (TBD) | Need to shoot |
| Testimonial avatars | KOTA client photos | Corum8 client initials or avatars | Generate or source |
| Award badges | KOTA award SVGs | Corum8 award logos | assets/awards/ |
| Footer badges | DAN, Clutch, Awwwards, CSSDA | Trustpilot, Blockchain Life, Clutch, Google Partner | assets/awards/ |
| Client logos | 15 KOTA SVGs | 30 Corum8 PNGs (grayscale filter via CSS) | assets/clients/ |
| Media logos | N/A (new section) | 16 media partner logos | assets/media/ |

---

# TECH STACK

```
Framework:      Next.js 14+ (App Router, TypeScript)
Styling:        Tailwind CSS + custom CSS for complex animations
Animations:     GSAP (ScrollTrigger, SplitText) + Lenis (smooth scroll)
Fonts:          Serif display + sans-serif body (match KOTA's pairing)
                Load via next/font for performance
Images:         next/image with local files initially
Videos:         HTML5 <video> with muted autoplay loop
Forms:          React Hook Form
Deployment:     localhost initially → Vercel when ready
CMS:            None initially — all content hardcoded
                Add Sanity.io or Strapi in Wave 2 for 260+ pages
```

---

# CRITICAL RULES FOR CLAUDE CODE

1. **Phase 1 is SACRED** — do not deviate from KOTA's design in any way during Phase 1
2. **Download ALL assets first** — before writing a single line of HTML
3. **Match KOTA's spacing exactly** — generous whitespace, 120-160px section padding
4. **Match KOTA's typography exactly** — serif + sans-serif pairing, italic keywords in headlines
5. **Asymmetric layouts** — NEVER equal-width 3-column grids
6. **Every section must animate** — GSAP ScrollTrigger fade-up reveals
7. **Every button must have hover state** — color inversion or slide transition
8. **Video cards for case studies** — <video> elements with hover play
9. **Infinite scroll marquees** — CSS animation for logo bars, pause on hover
10. **Auto-scrolling testimonial carousel** — infinite loop, pause on hover
11. **Horizontal process timeline** — NOT vertical accordion
12. **Mobile-first responsive** — test on mobile after every page
13. **No Bootstrap, no Material UI** — custom components only
14. **No system fonts** — no Arial, Helvetica, Roboto, Inter
15. **FAQ accordion must be smooth** — CSS transition on max-height, not display toggle

---

# VERIFICATION CHECKLIST (Use After Each Phase)

## Phase 1 Checklist
- [ ] All 55 KOTA assets downloaded successfully
- [ ] Homepage renders identically to kota.co.uk
- [ ] Service pillar page renders identically
- [ ] Agency page renders identically
- [ ] Work page renders identically
- [ ] Contact page renders identically
- [ ] Culture page renders identically
- [ ] All scroll animations fire correctly
- [ ] All hover states work
- [ ] Logo marquee scrolls infinitely
- [ ] Testimonial carousel auto-scrolls
- [ ] Mobile menu works (hamburger → overlay)
- [ ] Responsive on mobile / tablet / desktop

## Phase 2 Checklist
- [ ] Logo is Corum8 everywhere
- [ ] Company name is "Corum8" everywhere (check all pages)
- [ ] Email is info@corum8.com everywhere
- [ ] Social links point to Corum8 accounts
- [ ] Navigation has Corum8 structure with mega menus
- [ ] Footer has Corum8 5-column layout
- [ ] CTA says "Book a Strategy Call"
- [ ] Addresses show Dubai / US / India
- [ ] All KOTA images still display correctly (no broken images)
- [ ] No "KOTA" text remains anywhere except in image alt tags (acceptable)

## Phase 3 Checklist
- [ ] 30 client logos display in 3-row marquee
- [ ] Media coverage section shows 16 logos
- [ ] 6 case studies with correct Corum8 data
- [ ] Testimonials show Corum8 client quotes
- [ ] Stats show Corum8 numbers
- [ ] Services describe Corum8's offerings
- [ ] 8 awards display correctly
- [ ] Industry cards section added
- [ ] Process section added
- [ ] FAQs are Corum8-specific
- [ ] All new sections have scroll animations
- [ ] Layout still matches KOTA's design language

## Phase 4 Checklist
- [ ] Zero KOTA images remain
- [ ] All stock images are high-quality and relevant
- [ ] All images are optimized (WebP, proper sizing)
- [ ] No broken image links
- [ ] Visual consistency maintained across all pages
- [ ] Final mobile QA pass

---

END OF DOCUMENT
