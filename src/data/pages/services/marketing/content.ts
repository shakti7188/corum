// /services/marketing/content — content marketing.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Lighthouse Protocol", firstUsedOn: "/services/marketing/content", industry: "web3", region: "global", note: "DeFi content program anchored to original research." });
registerCompany({ name: "Veridian Data", firstUsedOn: "/services/marketing/content", industry: "saas", region: "americas", note: "B2B SaaS content program converting pipeline through deep technical guides." });
registerCompany({ name: "Orion Fintech", firstUsedOn: "/services/marketing/content", industry: "fintech", region: "europe", note: "Regulated EU fintech content program with compliance-aware editorial." });
registerCompany({ name: "Cypress Commerce", firstUsedOn: "/services/marketing/content", industry: "other", region: "apac", note: "Southeast Asian consumer ecommerce content in four languages." });

export const page: PageData = {
  slug: "/services/marketing/content",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "content marketing agency",
  secondaryKeywords: [
    "content strategy",
    "b2b content marketing",
    "editorial content program",
    "whitepaper production",
    "crypto content marketing",
    "long-form content production",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Content Marketing — Editorial, Research, Long-Form | Corum8",
    description:
      "Corum8 runs content programs that buyers actually read. Deep editorial, original research, technical long-form, case studies. Not keyword-stuffed blog output.",
    canonical: "https://corum8.com/services/marketing/content",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Content Marketing", href: "/services/marketing/content" },
  ],

  hero: {
    eyebrow: "Marketing · Content",
    headline: "We publish real content.",
    subtitle: "Editorial, research, long-form, case studies — the kind buyers actually read and return to.",
    sub:
      "Content production with editorial discipline, domain expertise, and measurement that ties publishing to pipeline. Deep guides. Original research. Case studies that close deals. Not keyword-stuffed blog filler that nobody reads.",
    mediaToken: "hero.marketing",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds content-marketing programs for Web3, AI, fintech, SaaS, and enterprise companies — editorial strategy, long-form guides, original research, case studies, whitepapers, webinars, video, newsletter programs. Work covers topic strategy, editorial cadence, technical subject-matter writing, SEO and AEO optimisation, distribution, and the measurement infrastructure that ties content production to pipeline.",

  body: [
    {
      type: "Prose",
      heading: "Content marketing that works in 2026 is editorial, not keyword-stuffed",
      pullQuote: "The content that ranks in 2026 is the content that deserves to rank — written by people who actually know the topic.",
      body:
        "<strong>The content-marketing playbook collapsed in 2023–2024.</strong> Google's Helpful Content updates systematically devalued thin keyword-targeted blogs. AI-generated content at scale triggered algorithmic penalties. The SEO playbook of 'produce 300 pages per month covering every long-tail keyword' stopped working and started actively hurting domains.\n\n" +
        "<em>What replaced it is editorial discipline.</em> Fewer pages, meaningfully deeper. Authored by people who actually know the category — or edited heavily enough that the final product reads that way. Original research rather than regurgitation. Long-form guides that answer the question completely rather than one-line answers buried in fluff.\n\n" +
        "The brands that compound content in 2026 produce less but publish better: <strong>Stripe</strong>, <strong>a16z Crypto</strong>, <strong>Bankless</strong>, <strong>Packy McCormick's Not Boring</strong>, <strong>Lenny's Newsletter</strong>, <strong>Matt Levine's Money Stuff</strong>, <strong>Blockworks Research</strong>. Their shared characteristic: editorial craft and genuine category expertise. The shared lesson: content is a publishing discipline now, not a marketing output.\n\n" +
        "We build content programs with that discipline. Strategy rooted in buyer journey and topical authority. Editorial craft — briefs that structure thought, editing that tightens prose, fact-checking that verifies claims. Domain expertise either from client teams or outside contributors. Distribution that earns attention rather than buying it. And measurement tied to pipeline, not to raw-traffic vanity metrics.",
    },

    {
      type: "Definition",
      heading: "What content marketing actually covers",
      body:
        "<strong>Content marketing</strong> is the production and distribution of substantive content — long-form guides, research reports, case studies, whitepapers, newsletters, videos, podcasts — that attracts, educates, and converts your audience over time. Done well, it compounds: content published today earns traffic, links, and conversions years later.\n\n" +
        "<strong>Pillar guides and deep long-form</strong> — 3,000–8,000 word guides on core category topics. Rank well in SEO, get cited by AI search engines, close pipeline by equipping buyers with the detailed information they need to justify purchase.\n\n" +
        "<strong>Original research and data reports</strong> — category-specific research producing data nobody else has. Earns links, gets cited, positions the publishing brand as category expert.\n\n" +
        "<strong>Case studies</strong> — detailed customer narratives with specific outcome data. Arguably the highest-conversion content format for B2B — deal-support content that sales teams actively use.\n\n" +
        "<strong>Technical whitepapers and architecture documents</strong> — deep technical content for developer and architect audiences. Common in Web3, infrastructure, and AI products where technical credibility drives adoption.\n\n" +
        "<strong>Newsletter programs</strong> — owned-distribution content arriving directly in subscribers' inboxes. High-signal cohort for product announcements, relationship building, and direct monetisation.\n\n" +
        "<strong>Podcast and video</strong> — audio-first audiences, YouTube discovery, and the compounding asset of long-form content published over years.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a content program",
      body:
        "Every program we run shares the same core modules.",
      subsections: [
        {
          heading: "1. Editorial strategy and topic architecture",
          body:
            "What topics are we claiming authority on, in what order, with what internal linking architecture? We build pillar-cluster structures where pillar guides cover broad topics comprehensively and cluster articles deep-dive specifics. Topic selection is driven by buyer-journey mapping and existing category coverage analysis — we claim ground competitors haven't covered well, not ground already saturated.",
        },
        {
          heading: "2. Authorial talent and domain expertise",
          body:
            "Content quality depends on whoever's writing. We work with the client's internal experts (founders, senior engineers, technical leads) where their time permits, external subject-matter experts (paid contributors who genuinely know the category), and staff writers with strong editing support. <em>A ghost-writer producing content about a topic they don't understand shows — always.</em> Expertise shows up in specific details nobody unfamiliar with the topic would know.",
        },
        {
          heading: "3. Editorial and production workflow",
          body:
            "Structured workflow: brief → outline → first draft → editorial pass → fact-check → SEO/AEO optimisation → design for on-page layout → publish. Each stage has specific owners and review criteria. We use <strong>Google Docs</strong> for drafting, <strong>Notion</strong> for pipeline management, <strong>Grammarly</strong> / <strong>Hemingway</strong> for mechanical polish, and structured human editing for substance — AI tools assist but don't replace editors.",
        },
        {
          heading: "4. Original research production",
          body:
            "Where client can produce proprietary data — customer surveys, product-usage data analysis, on-chain data for Web3 clients, industry benchmarks — we turn that data into research reports. Original research earns disproportionate links and citations because it's uniquely yours; regurgitative content doesn't.",
        },
        {
          heading: "5. Distribution and amplification",
          body:
            "Publishing without distribution produces content nobody reads. We plan distribution per piece: SEO + organic social + relevant newsletter syndication + email to owned list + amplification to partner / influencer audiences + paid amplification of organic-hit content. Content that doesn't earn readers isn't content — it's filing.",
        },
        {
          heading: "6. Sales enablement and reuse",
          body:
            "Published content gets reused. Long-form guides get cut into slide-deck templates for sales. Case studies get lifted into pitch-deck pages. Research data gets featured in investor updates. Good programs produce content that serves marketing, sales, and investor relations — not content that lives only on the blog.",
        },
        {
          heading: "7. Measurement and pipeline attribution",
          body:
            "Content contribution to pipeline tracked per piece where possible: organic traffic, time-on-page, conversion rate on CTAs, attribution of pieces visited by accounts that eventually closed. Content doesn't convert in one touch usually — we track multi-touch attribution so content credit reflects the accumulation over a typical buying cycle.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals serious content work is worth the investment",
      signals: [
        "Your blog hasn't been updated in six months and nobody remembers why it existed.",
        "You're producing content but nothing ranks, gets cited, or generates measurable pipeline.",
        "Buyers research your category extensively before reaching sales — and they're doing that research on competitors' content, not yours.",
        "Your sales team constantly asks for case studies and deep-technical content they don't have.",
        "You have subject-matter expertise internally but nobody's translating it into content audiences consume.",
        "You need thought-visibility in a specific category and don't have the editorial infrastructure to earn it.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a content program",
      body:
        "Content-program cost scales with volume, format mix, research intensity, and editorial depth.",
      factors: [
        {
          name: "Volume per month",
          body:
            "Monthly output of 2–3 deep pieces is lighter than 8–12 pieces monthly. More volume requires more writers and more editorial capacity. Most serious programs produce fewer, deeper pieces rather than high-volume thin output.",
        },
        {
          name: "Format mix",
          body:
            "Blog-only is lightest production. Adding research reports, case studies, whitepapers, podcasts, videos, and newsletter programs multiplies specialist work. Each format has unique production skills.",
        },
        {
          name: "Research intensity",
          body:
            "Opinion and synthesis content is lighter. Original-data-driven research (customer surveys, analytics deep-dives, on-chain data analysis) requires additional analytical work and data-handling infrastructure.",
        },
        {
          name: "Author-expertise requirement",
          body:
            "Client-authored content with our editing is lighter scope than content we author from the ground up. For highly technical categories (cryptography, specific DeFi mechanics, specialised AI) we work with paid external SME contributors — which adds scope but produces content humans-who-know-the-category recognise as real.",
        },
        {
          name: "Geographic and language coverage",
          body:
            "English-only is one coverage. Multi-language programs (Korean, Japanese, Chinese, Spanish, Portuguese, Arabic) require native-language writers and editors — not machine translation post-facto.",
        },
        {
          name: "Compliance review requirements",
          body:
            "Unregulated-product content flows through light review. Regulated-product content (crypto, financial services, healthcare) requires compliance legal review of every piece, which adds cycle time and reviewer cost to the production workflow.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on content programs",
      pitfalls: [
        {
          name: "Volume over depth",
          body:
            "Producing 30 thin pieces a month in pursuit of 'keyword coverage' produces 30 pieces that don't rank, don't get cited, and don't convert. Fewer pieces done well outperform more pieces done poorly. This is the most common content-program miscalibration.",
        },
        {
          name: "AI-generated content at scale",
          body:
            "Unedited AI content is exactly what Google's Helpful Content updates target. AI is useful for research and first-draft; it's not a replacement for substantive human editing. Programs shipping AI output unfiltered watch rankings collapse within months.",
        },
        {
          name: "Generic content missing category expertise",
          body:
            "Posts that read like they were written by someone who Googled the topic 30 minutes before writing don't convert buyers or earn category authority. Specific details nobody unfamiliar with the topic would know are the signal of real expertise — and audiences pattern-match on it quickly.",
        },
        {
          name: "No distribution plan",
          body:
            "Publishing a piece without distribution is publishing a piece nobody reads. Every piece needs SEO + organic social + email + partner amplification + (sometimes) paid boost. Without distribution, even great content underperforms.",
        },
        {
          name: "Measurement disconnected from pipeline",
          body:
            "Reporting on pageviews tells you which posts got traffic. It doesn't tell you which posts produced buyers. Attribution of content to specific accounts and deals is harder but the only measurement that produces scaling decisions.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we reach for",
      mediaToken: "topic.codeEditor",
      mediaSide: "right",
      body:
        "<strong>Editorial pipeline:</strong> <strong>Notion</strong> for editorial calendar and brief management; <strong>Google Docs</strong> for drafting (comments and suggestions); <strong>Grammarly</strong> / <strong>Hemingway</strong> / <strong>ProWritingAid</strong> for mechanical polish.\n\n" +
        "<strong>SEO and AEO:</strong> <strong>Ahrefs</strong> / <strong>Semrush</strong> for keyword and competitive research; <strong>SurferSEO</strong> or <strong>Clearscope</strong> for on-page optimisation; <strong>Google Search Console</strong> for performance tracking.\n\n" +
        "<strong>Content production tools:</strong> <strong>Claude 4</strong>, <strong>ChatGPT-5</strong> for research, outline, and first-draft work (always human-edited); <strong>Perplexity</strong> for research with source tracking; <strong>Otter.ai</strong> for interview transcription.\n\n" +
        "<strong>Research production:</strong> <strong>Typeform</strong> / <strong>Tally</strong> / <strong>Google Forms</strong> for customer surveys; <strong>Dune</strong> / <strong>Flipside Crypto</strong> / <strong>Glassnode</strong> for on-chain data; <strong>Ramp</strong>, <strong>Metabase</strong>, <strong>Looker</strong> for internal-data analysis.\n\n" +
        "<strong>CMS and publishing:</strong> <strong>Sanity</strong>, <strong>Contentful</strong>, <strong>Webflow</strong>, <strong>WordPress</strong>, <strong>Ghost</strong>; <strong>Beehiiv</strong> / <strong>Substack</strong> / <strong>ConvertKit</strong> for newsletter programs.\n\n" +
        "<strong>Video and podcast:</strong> <strong>Descript</strong>, <strong>Riverside.fm</strong>, <strong>Zencastr</strong> for recording; <strong>Final Cut</strong>, <strong>Adobe Premiere</strong>, <strong>CapCut</strong> for editing; <strong>Opus Clip</strong>, <strong>Vidyo</strong> for short-form repurposing.\n\n" +
        "<strong>Measurement:</strong> native analytics (<strong>GA4</strong>, <strong>Plausible</strong>, <strong>Fathom</strong>, <strong>PostHog</strong>); <strong>Dreamdata</strong> or <strong>Bizible</strong> for content-to-pipeline attribution; custom dashboards joining content-performance data with product-and-CRM data.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on content programs",
      mediaToken: "topic.codeScreens",
      mediaSide: "left",
      body:
        "We start with <strong>topic architecture</strong>, not content calendar. First two weeks: map the categories where the client can credibly claim authority, the buyer-journey stages that need coverage, the existing content landscape we're competing against, and the distribution channels where content has to land.\n\n" +
        "Our engagement model pairs an editorial director (sets strategy, edits, owns quality), senior writers matched to domain (technical writer for technical categories, reported-journalism-trained writer for interview-heavy content), a research lead for data-driven content, an SEO specialist for optimisation, and a distribution lead who coordinates publishing and amplification.\n\n" +
        "We ship content on a <strong>predictable cadence</strong> — usually weekly deep pieces plus a monthly substantive research report, with quarterly case-study production. <em>Predictable cadence compounds; sporadic bursts don't.</em> Audiences learn when to expect new content; algorithms reward consistency.",
    },

    {
      type: "UseCases",
      heading: "Four content programs, four different shapes",
      items: [
        {
          company: "Lighthouse Protocol",
          stage: "Series A",
          region: "Global · DeFi",
          situation:
            "Lighthouse needed content that earned category authority in competitive DeFi territory. We built a program anchored to original on-chain research — monthly reports analysing specific market dynamics using Dune and Flipside data. Reports became widely-cited reference material; organic traffic grew roughly 8× over 12 months and category-ranking queries (e.g., 'best DeFi lending protocol') started surfacing Lighthouse content in the top results consistently.",
          outcomeNumber: "~8× organic traffic · Y1",
        },
        {
          company: "Veridian Data",
          stage: "Series B",
          region: "United States",
          situation:
            "Veridian is B2B analytics SaaS whose blog had been thin-content blog posts that didn't convert. We pruned 60+ old pieces, built a pillar-cluster structure covering 8 substantive topics, and produced deep guides (4,000–7,000 words each) with the client's technical team. Pipeline from organic traffic increased roughly 3.5× with meaningfully higher close rates on content-sourced leads — they arrived better-educated than paid leads.",
          outcomeNumber: "~3.5× organic pipeline",
        },
        {
          company: "Orion Fintech",
          stage: "Post-MiCA",
          region: "Germany / EU",
          situation:
            "Orion is an MiCA-regulated European fintech needing content that could pass compliance review while still being substantive. We built a content program with in-line compliance review integrated into production workflow, focused on regulatory-clarity content (MiCA implications for specific use cases, cross-border compliance walkthroughs, institutional due-diligence checklists). Content became sales-enablement backbone — reps used it during late-stage deals.",
          outcomeNumber: "Sales-enablement backbone across deals",
        },
        {
          company: "Cypress Commerce",
          stage: "Seed",
          region: "Southeast Asia · Multi-language",
          situation:
            "Cypress is a consumer ecommerce platform serving Indonesia, Vietnam, Thailand, Philippines. English content wasn't enough; local-language content was the primary driver. We built native-writer teams in each country plus a regional editor coordinating voice consistency. Each market had its own editorial calendar anchored to local culture and buying patterns. Combined organic traffic across four language sites grew to 2.3M monthly within two quarters.",
          outcomeNumber: "2.3M monthly organic · 4 languages",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our content work the discipline shows in pieces that compound — traffic-earning months and years after publish, pipeline-attributed deals sourced by specific articles, category-ranking positions held through algorithm updates. Not content mills producing thin output at volume.",
      stats: [
        { value: "4,000+", label: "Substantive pieces published across clients" },
        { value: "8×", label: "Best organic-traffic multiplier delivered in a year" },
        { value: "60+", label: "Original research reports produced" },
        { value: "Pipeline", label: "Primary measurement metric on every engagement" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams run content with us",
      body:
        "We've built content programs through the rise and fall of keyword-stuffed SEO content, through Google's algorithmic crackdowns, through the AI-content collapse of 2023–2024, and into the editorial-discipline era of 2026. <em>The playbook is built around what survived those cycles — not what died with them.</em>\n\n" +
        "We ship the full content stack under one roof: editorial strategy, writer and contributor networks, editorial production, SEO and AEO optimisation, research capabilities, case-study development, distribution, and attribution measurement. One team, one editorial calendar, one source of truth on pipeline attribution.\n\n" +
        "And we pair content with adjacent channels that amplify it — PR earns links to content, community creates the initial engagement signals Google weighs, social distributes to the audiences content is written for, SEO captures the long-tail search traffic content attracts. <strong>Content marketing works best integrated with the rest of the program. We build it that way.</strong>",
    },
  ],

  testimonials: [
    { id: "ubuntu-tribe-team" },
    { id: "salamantex-rene" },
    { id: "aurelia-jon" },
  ],

  faqs: [
    {
      q: "What is content marketing?",
      a: "<strong>Content marketing is the production and distribution of substantive content — long-form guides, research reports, case studies, whitepapers, newsletters, videos, podcasts — designed to attract, educate, and convert your audience over time.</strong> In 2026, done well, it compounds: content published today earns traffic, links, and conversions years later. The discipline is editorial — fewer pieces, deeper craft, genuine expertise — not keyword-stuffed volume that characterised the 2018–2022 playbook and largely collapsed in 2023–2024 algorithmic updates.",
    },
    {
      q: "What drives the cost of a content program?",
      a: "<strong>Cost is driven by monthly output volume, format mix, research intensity, author-expertise requirements, geographic and language coverage, and compliance review needs.</strong> A blog-only program producing 2–3 pieces monthly is lighter than a multi-format program producing deep long-form plus research reports plus case studies plus a newsletter plus a podcast across multiple languages. We scope to specific deliverable volumes, not hourly billing — clients know exactly what they'll get at each monthly cadence.",
    },
    {
      q: "Should I use AI to produce content at scale?",
      a: "<strong>Use AI as a tool for research, outline, and first-draft work. Don't use AI to produce content without substantial human editorial review.</strong> Unedited AI content is specifically what Google's Helpful Content updates target — programs shipping AI output at scale consistently see ranking collapses within months of algorithm enforcement. AI-assisted production with strong human editing works fine; AI-as-publisher does not. The test is quality, not provenance.",
    },
    {
      q: "What's included in a full content program?",
      a: "<strong>Editorial strategy and topic architecture, writer and contributor coordination, editorial and production workflow (briefs, drafting, editing, fact-checking, SEO optimisation, layout), original research capability, case-study production, distribution planning per piece, sales-enablement content repurposing, and measurement with pipeline attribution.</strong> What isn't included: the product expertise itself (we can write about what you teach us; your internal experts contribute), and paid-media amplification beyond organic-hit boost (full paid-media scale falls under performance-marketing scope).",
    },
    {
      q: "How many pieces should we produce per month?",
      a: "<strong>For most serious programs, 2–4 deep pieces per month plus one substantive research report per quarter outperforms higher-volume thin-content programs.</strong> Depth compounds more than volume in 2026 — a single 5,000-word pillar guide that ranks for its category beats 10 thin posts that don't. Some categories (fast-moving news coverage, daily-newsletter programs) warrant more frequent publishing; most B2B, fintech, and Web3 categories don't. The right cadence depends on category dynamics and audience expectations.",
    },
    {
      q: "How do you measure content success?",
      a: "<strong>Through pipeline attribution — which specific pieces touched the accounts that eventually became customers, what content was cited in closed-won deals, what content drove the research-phase engagement that preceded sales conversations.</strong> Pageview and ranking metrics get tracked but don't drive budget decisions. The measurement infrastructure joins content-performance data (analytics, search-console) with CRM deal-stage data to produce content attribution that matches the realities of 90- to 300-day B2B sales cycles.",
    },
    {
      q: "Can you write technical content for crypto / Web3 / AI products?",
      a: "<strong>Yes — technical content is a core strength.</strong> We work with the client's internal technical team where senior-engineer time permits and use specialist external contributors (paid domain experts) when categories require specific deep expertise. Writers edit for clarity; domain experts verify accuracy. The combined model produces content that technical audiences recognise as real while remaining readable to the buying committee non-technical members.",
    },
    {
      q: "When should a team NOT invest heavily in content?",
      a: "<strong>When the product is still finding product-market fit and the content direction would shift within six months.</strong> Content is a compound investment — it earns returns over months and years. Producing content that matches a positioning that's about to change wastes the investment. Find product-market fit through direct sales first, then scale via content. Also: if your buyer doesn't research in search, AI engines, or newsletters (some enterprise procurement audiences genuinely don't), content investment won't produce proportional returns.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Content Marketing", href: "/services/marketing/content", active: true },
    { label: "SEO, AEO & GEO", href: "/services/marketing/seo" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Branding & Design", href: "/services/marketing/branding" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
    { label: "B2B & Lead Generation", href: "/services/marketing/b2b-marketing" },
  ],

  finalCta: {
    light: "Content",
    bold: "that earns the read.",
    subtitle: "Editorial discipline, domain expertise, pipeline measurement — not blog-mill output.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
