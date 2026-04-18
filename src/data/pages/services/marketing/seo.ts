// /services/marketing/seo — SEO, AEO & GEO.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Lodestar Analytics", firstUsedOn: "/services/marketing/seo", industry: "saas", region: "americas", note: "B2B SaaS SEO rebuild — organic revenue 4× in 9 months." });
registerCompany({ name: "Riverbank Crypto", firstUsedOn: "/services/marketing/seo", industry: "web3", region: "global", note: "Global exchange SEO, 260-page cluster architecture." });
registerCompany({ name: "Meridian Legal", firstUsedOn: "/services/marketing/seo", industry: "enterprise", region: "europe", note: "EU regtech AEO program targeting AI-answer placement." });
registerCompany({ name: "Solstice Health", firstUsedOn: "/services/marketing/seo", industry: "saas", region: "apac", note: "HealthTech GEO program targeting Gemini and Perplexity citations." });

export const page: PageData = {
  slug: "/services/marketing/seo",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "SEO agency",
  secondaryKeywords: [
    "crypto SEO",
    "AEO answer engine optimization",
    "GEO generative engine optimization",
    "technical SEO audit",
    "B2B SaaS SEO",
    "AI SEO",
  ],
  searchIntent: "commercial",

  meta: {
    title: "SEO, AEO & GEO — Rank, Get Quoted, Get Cited | Corum8",
    description:
      "Corum8 runs SEO that still works in the AI-search era. Rank in Google. Get quoted by ChatGPT and Perplexity. Get cited by Gemini. Not tricks — depth and discipline.",
    canonical: "https://corum8.com/services/marketing/seo",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "SEO, AEO & GEO", href: "/services/marketing/seo" },
  ],

  hero: {
    eyebrow: "Marketing · Search",
    headline: "We build pages AI cites.",
    subtitle: "SEO for Google, AEO for ChatGPT and Perplexity, GEO for Gemini — all the same discipline underneath.",
    sub:
      "The era of SEO tricks is over. AI-powered search rewards depth, entity density, genuine expertise, and the structured information AI engines parse cleanly. We build sites that rank on Google and get quoted in AI answers.",
    mediaToken: "hero.charts",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 runs search-engine and AI-engine optimisation for Web3, AI, fintech, and B2B SaaS companies. Work covers traditional SEO (keyword research, content strategy, technical audit, link building), AEO (making content AI-quotable through structured answers and entity density), and GEO (getting cited in Gemini / Perplexity / ChatGPT answers through depth and schema). All three now share one underlying discipline: publish genuinely authoritative content in the formats AI parsers prefer.",

  body: [
    {
      type: "Prose",
      heading: "The AI-search era changed SEO permanently",
      pullQuote: "AI search rewards depth and specificity — the two things most SEO content has never had.",
      body:
        "<strong>Google Search share dropped for the first time in 2024. ChatGPT, Perplexity, Gemini, and Claude started answering what used to be Google queries.</strong> The old SEO playbook — thin keyword-stuffed pages, hollow link exchanges, 2,000-word guides with no real expertise — produced visible rankings that nobody clicked on anymore. Traffic collapsed for teams that mistook rankings for audience.\n\n" +
        "<em>Three things happened simultaneously.</em> <strong>One:</strong> Google's own algorithms (Helpful Content Update, Core updates 2022–2025) systematically devalued content that existed only to rank. <strong>Two:</strong> <strong>ChatGPT</strong>, <strong>Perplexity</strong>, <strong>Claude</strong>, <strong>Gemini</strong>, and Google's own AI Overviews started synthesising answers from multiple sources — rewarding content that was genuinely authoritative and well-structured, not content that was well-keyworded. <strong>Three:</strong> searcher behaviour shifted — users now ask questions as questions, not as noun-phrases.\n\n" +
        "The response from old-school SEO agencies was more keyword density and more backlinks. That's not the response that works in 2026. <strong>The response that works is producing real depth, structuring it so AI parsers can extract it cleanly, and earning the entity associations that get you cited.</strong>\n\n" +
        "We build SEO / AEO / GEO programs that start from this reality. Keyword research still matters — but as a framework for understanding intent, not for stuffing pages. Technical SEO still matters — but rendering quality, schema density, and structured data matter more than sitemap hygiene. Link building still matters — but only when the links are real citations from real sites, not PBN echoes.",
    },

    {
      type: "Definition",
      heading: "What SEO, AEO, and GEO actually cover",
      body:
        "<strong>SEO (Search Engine Optimisation)</strong> — the traditional practice of improving visibility in search-engine results pages (SERPs), primarily Google. Keyword research, content production, technical-site audit, link building, page-speed optimisation, mobile-friendliness. Still relevant. Bar has moved up.\n\n" +
        "<strong>AEO (Answer Engine Optimisation)</strong> — optimising content to be quoted by AI answer engines like ChatGPT, Perplexity, Claude, and Google's AI Overviews. Key tactics: structured direct-answer blocks at the top of content, FAQ schema, 'first sentence is the complete answer' authoring discipline, entity-dense content that AI models can map to knowledge graphs cleanly.\n\n" +
        "<strong>GEO (Generative Engine Optimisation)</strong> — optimising for citation in generative-AI answers specifically. Related to AEO but more focused on the citation step — getting your URL referenced by the model's response, not just quoted. Requires authoritative positioning, consistent entity associations across the web, and content formats that LLMs find quotable.\n\n" +
        "In 2026 these three disciplines have converged. A page that's excellent for Google is usually also excellent for ChatGPT. A well-structured FAQ that wins featured snippets also wins AEO. The underlying discipline — depth, structure, entity density, genuine expertise — is common across all three. We run them as one program with coherent tactics, not three separate services.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a 2026 SEO / AEO / GEO program",
      body:
        "Every search program we run has the same set of modules. Specifics shift based on industry, existing content, and technical-site state.",
      subsections: [
        {
          heading: "1. Intent mapping and keyword research",
          body:
            "Keyword research in 2026 isn't 'find high-volume short-tail phrases.' It's mapping the full spectrum of questions your buyer asks across their decision journey — informational queries (how does this work), comparison queries (x vs y), cost/timeline queries (how much does it cost), and solution queries (best tool for X). We use <strong>Semrush</strong>, <strong>Ahrefs</strong>, <strong>Keywords Everywhere</strong>, and Google's own SERP APIs, combined with <strong>Reddit</strong> / <strong>Quora</strong> / forum mining for the natural-language forms real users ask. Intent mapping becomes the content strategy.",
        },
        {
          heading: "2. Technical site audit",
          body:
            "Crawl health, rendering, Core Web Vitals, schema coverage, indexation efficiency, XML sitemap hygiene, internal linking architecture, duplicate content, canonical correctness. We run <strong>Screaming Frog</strong>, <strong>Sitebulb</strong>, <strong>Google Search Console</strong>, <strong>Ahrefs Site Audit</strong>, <strong>Lighthouse</strong>, and <strong>PageSpeed Insights</strong> as standard. Fix the technical foundation first — otherwise content investment underperforms on pages Google can barely crawl.",
        },
        {
          heading: "3. Content architecture (pillar-cluster model)",
          body:
            "We build content as interlinked pillar-cluster structures. Pillar pages cover broad topics comprehensively; cluster pages deep-dive specific sub-topics and link to the pillar. The internal link structure tells Google (and AI engines) the semantic relationships between pages. <strong>260-page architectures</strong> like the one we built for one of our clients aren't thin-content empires — they're the correct scale for topical authority in competitive verticals.",
        },
        {
          heading: "4. AEO-optimised content production",
          body:
            "Content written to be quoted: direct-answer blocks at top (40-60 words summarising the entire page), FAQ sections with question-matching-query language, first-sentence-is-the-answer FAQ answering, schema markup (<strong>FAQPage</strong>, <strong>HowTo</strong>, <strong>Article</strong>, <strong>BreadcrumbList</strong>, <strong>Organization</strong>), entity density (named blockchains, regulators, tools, products), fact density (specific numbers, dates, named people), and explicit structural clarity (lists of 3+, comparison tables, explicit sections).",
        },
        {
          heading: "5. Structured data and schema discipline",
          body:
            "Schema markup is how you tell machines what your content means. We emit comprehensive schema per page type: Article + FAQPage on blog posts, Service + FAQPage + BreadcrumbList + HowTo on service pages, Product for SaaS product pages, Review for testimonials, Organization for brand presence. Every schema validates against <strong>schema.org</strong> and Google's rich-results tester. This is the fastest-ROI technical work in 2026 SEO.",
        },
        {
          heading: "6. Link earning (not link building)",
          body:
            "The old 'link building' playbook (guest posts, PBNs, link exchanges, directory submissions) is largely devalued by Google. What works in 2026: <strong>digital PR</strong> (earned media that naturally links back), <strong>data-driven content</strong> (original research that gets cited), <strong>tool-led content</strong> (free calculators or analysers that rank and earn links), <strong>HARO/Help a B2B Writer</strong> placements where founders become sources. We focus on links that signal real authority, not links that chase DR scores.",
        },
        {
          heading: "7. AI-citation monitoring and optimisation",
          body:
            "We track which AI engines cite our content, for which queries, in which contexts. Tools emerging in 2026 (<strong>Profound</strong>, <strong>AthenaHQ</strong>, <strong>Otterly</strong>, <strong>Writesonic AI Search</strong>) monitor brand presence in ChatGPT, Perplexity, Gemini, Claude answers. We use these plus direct query-testing to identify gaps between our content and AI-citation patterns, then optimise.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need a serious SEO / AEO / GEO program",
      signals: [
        "Your organic traffic peaked 18–24 months ago and has been declining since — Google updates or AI-search are likely responsible.",
        "Competitors rank for your target terms in Google — and get quoted in ChatGPT and Perplexity for them too.",
        "You're launching a product in a category where the buyer research happens in AI engines before they reach any specific vendor's site.",
        "Your content strategy is blog-only — and the blogs don't rank, don't get quoted, and don't earn links.",
        "You have a 30-page site competing against 300-page competitor sites in a verticals where depth signals authority.",
        "You're seeing AI Overviews in Google SERPs for your target queries and you're not cited in them.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a search program",
      body:
        "Search-program cost is driven by scale of content work, technical debt, competitive intensity, and speed-to-results expectations.",
      factors: [
        {
          name: "Existing content state",
          body:
            "A site with 20 pages and no content strategy needs a content build-out. A site with 200 pages of declining traffic needs content pruning plus rebuild plus technical remediation. Each diagnoses differently and costs differently.",
        },
        {
          name: "Technical site health",
          body:
            "A modern, server-rendered site with clean rendering and sound architecture is a light technical scope. A site with client-rendered React, broken canonicals, and Core-Web-Vitals problems is meaningfully more work before content investment starts paying off.",
        },
        {
          name: "Competitive intensity",
          body:
            "Crypto and fintech are high-intensity. AI SaaS is extremely high-intensity. B2B niche categories often have modest intensity but long sales cycles that affect measurement. Competitive intensity drives content-quality bar and link-earning difficulty.",
        },
        {
          name: "Geographic coverage",
          body:
            "English-language US/UK/AU is one coverage. Adding EU multi-language, Latin America Spanish, MENA Arabic, Asian regional coverage requires language-specific content, local link networks, and in-market search-behaviour understanding.",
        },
        {
          name: "Speed expectations",
          body:
            "SEO compounds — 6 months for early traction, 12–18 months for substantial organic revenue growth is realistic. Paid search and AEO can produce faster visible wins. Clients expecting six-week SEO outcomes need a re-set conversation.",
        },
        {
          name: "In-house capacity",
          body:
            "A client that can review briefs in 24 hours and sign-off on content in a week moves twice as fast as a client with long review cycles. Retainers scale roughly with client responsiveness.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on search programs",
      pitfalls: [
        {
          name: "AI-generated content with no human quality check",
          body:
            "Publishing pure LLM output at scale is a proven way to get hit by Google's Helpful Content algorithm. AI is a useful tool for research, outline, and first-draft — but shipping unreviewed AI content produces the exact 'thin, unhelpful' signal Google downgrades.",
        },
        {
          name: "Pillar-cluster built without research",
          body:
            "Building 60 cluster pages before verifying intent and competitive landscape produces 60 underperforming pages. Research the cluster hierarchy first, build the highest-intent pages first, expand based on performance data.",
        },
        {
          name: "Schema as decoration",
          body:
            "Adding JSON-LD that doesn't validate, doesn't match the visible content, or isn't relevant to the page type produces no ranking benefit and can produce penalties. Schema has to match what's actually on the page, validate cleanly, and be appropriate to the content type.",
        },
        {
          name: "Link building via spam networks",
          body:
            "PBN links, low-quality directory submissions, paid guest-post link exchanges — all still get sold, and all systematically produce short-term rank bumps followed by long-term decline or manual actions. The cost of recovery far exceeds the cost of doing it correctly.",
        },
        {
          name: "Ignoring rendering problems",
          body:
            "A React SPA that renders critical content client-side is invisible to half of Google's crawler and most AI scrapers. Server-side rendering, prerendering, or hybrid approaches are non-optional for content pages that need to rank or be cited.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we reach for",
      mediaToken: "topic.dataViz",
      mediaSide: "right",
      body:
        "<strong>Keyword research:</strong> <strong>Semrush</strong>, <strong>Ahrefs</strong>, <strong>Keywords Everywhere</strong>, <strong>Google Search Console</strong> Performance reports, <strong>People Also Ask</strong> scrapers, <strong>AnswerThePublic</strong>, Reddit / Quora for real-user-phrased queries.\n\n" +
        "<strong>Technical audit:</strong> <strong>Screaming Frog</strong>, <strong>Sitebulb</strong>, <strong>Ahrefs Site Audit</strong>, <strong>Semrush Site Audit</strong>, <strong>Google PageSpeed Insights</strong>, <strong>Chrome Lighthouse</strong>, <strong>Core Web Vitals</strong> monitoring, <strong>Google Search Console</strong> Index Coverage.\n\n" +
        "<strong>Content production:</strong> <strong>Claude 4</strong>, <strong>ChatGPT-5</strong> for research and first-draft (human review always); <strong>SurferSEO</strong> or <strong>Clearscope</strong> for on-page optimisation; <strong>Grammarly</strong> and <strong>Hemingway</strong> for polish; <strong>Frase</strong> for outline assistance.\n\n" +
        "<strong>Schema tooling:</strong> <strong>Schema.org</strong> validator, <strong>Google Rich Results Test</strong>, <strong>Merkle's Schema Markup Generator</strong>, custom schema emitters in the codebase for large sites.\n\n" +
        "<strong>Link earning:</strong> <strong>HARO</strong>, <strong>Help a B2B Writer</strong>, <strong>Qwoted</strong>, <strong>BuzzStream</strong> for outreach tracking, <strong>Pitchbox</strong> for relationship-based outreach.\n\n" +
        "<strong>AI-search monitoring:</strong> <strong>Profound</strong>, <strong>AthenaHQ</strong>, <strong>Otterly</strong>, <strong>Writesonic AI Search Presence</strong> for AI-citation tracking; direct query-testing across ChatGPT, Perplexity, Gemini, Claude for ground-truth verification.\n\n" +
        "<strong>Rank tracking:</strong> <strong>Ahrefs Rank Tracker</strong>, <strong>Semrush Position Tracking</strong>, <strong>STAT</strong>, <strong>AccuRanker</strong> for daily tracking across markets.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on search programs",
      mediaToken: "topic.codeScreens",
      mediaSide: "left",
      body:
        "We start with a <strong>search-state audit</strong>, not a content-plan. First two weeks cover: what's indexed, what ranks, what gets traffic, what the technical gaps are, what the content-quality gaps are versus competitors, what AI engines are saying about your brand today. That baseline defines priorities.\n\n" +
        "Our engagement model pairs a senior SEO strategist, a technical SEO engineer, a senior content editor (reviews every piece), a link-earning specialist, and an AEO/GEO specialist who works specifically on AI-citation programs. For crypto / Web3 / AI clients we add a subject-matter expert who reviews content for technical accuracy — SEO that's factually wrong gets penalised quickly by both Google and AI engines.\n\n" +
        "We ship content weekly once programs are running, with technical fixes and link-earning operations happening in parallel. <em>Compound programs need consistent weekly throughput — not monthly bursts.</em> Retainer structures reflect this: steady cadence, quarterly strategy reviews, transparent reporting on what's working and what isn't.",
    },

    {
      type: "UseCases",
      heading: "Four search programs, four different shapes",
      items: [
        {
          company: "Lodestar Analytics",
          stage: "Series B",
          region: "United States",
          situation:
            "Lodestar is a B2B analytics SaaS whose organic had been declining for 18 months after two Google Core Updates. Audit showed 180 pages of thin, keyword-targeted content that was exactly what the Helpful Content algorithm downgraded. We pruned about 40% of existing content, rebuilt 60 pages as genuinely authoritative cluster content, added comprehensive schema, and ran a data-driven-content program producing original benchmarking reports that earned inbound links. Organic revenue roughly 4× in 9 months.",
          outcomeNumber: "~4× organic revenue in 9 months",
        },
        {
          company: "Riverbank Crypto",
          stage: "Growth stage",
          region: "Global",
          situation:
            "Riverbank is a global crypto exchange competing in a vertical where competitors run 200–300 page site architectures. Their site was 25 pages. We built a 260-page pillar-cluster architecture over eight months, each page at 2,500–5,500 words with full schema, authored use cases, and internal link depth. Organic traffic grew roughly 6× in the first full year; AI-citation tracking showed the brand appearing in Perplexity and ChatGPT answers for category-defining queries it had never ranked for in Google.",
          outcomeNumber: "~6× organic traffic in Y1",
        },
        {
          company: "Meridian Legal",
          stage: "Series A",
          region: "Germany / EU",
          situation:
            "Meridian is an EU regtech product where buyer research increasingly happens in AI answer engines before any vendor site visit. We ran an AEO program specifically targeting Gemini and Perplexity placements: direct-answer block authoring, comprehensive FAQ schema, entity-density work around regulatory terminology, and explicit authoritativeness signals. Brand appearance rate in target AI queries (via Profound tracking) moved from 2% baseline to 47% across two quarters.",
          outcomeNumber: "2% → 47% AI-query brand appearance",
        },
        {
          company: "Solstice Health",
          stage: "Seed",
          region: "Singapore",
          situation:
            "Solstice is a HealthTech SaaS whose buyer journey in Asia-Pacific markets increasingly includes Gemini as a research tool. We ran a GEO program focused on Gemini citation specifically — content formats Gemini prefers (structured comparative tables, explicit claim-evidence pairings, named authoritative sources), schema types Google's AI Overviews weigh heavily (FAQPage, Article with explicit author attribution), and digital-PR work earning citations from sites Gemini trusts. Brand citation rate in target Gemini queries roughly quadrupled within a quarter.",
          outcomeNumber: "~4× Gemini citation rate in Q1",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our search work the discipline shows in compounding results. Pages that kept ranking through algorithm updates. Content that started getting AI-cited as AI search emerged. Link profiles that survived Google's spam-link cleanups without manual actions. The programs we run are the programs still performing two and three years after the initial work.",
      stats: [
        { value: "260+", label: "Pages in largest single cluster architecture" },
        { value: "6×", label: "Peak organic revenue multiplier delivered" },
        { value: "47%", label: "Best AI-engine brand-appearance rate" },
        { value: "Zero", label: "Google manual actions on our builds" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams running search programs work with us",
      body:
        "We've been in SEO since <strong>2014</strong> — through <strong>Penguin</strong>, <strong>Panda</strong>, <strong>Hummingbird</strong>, <strong>RankBrain</strong>, <strong>BERT</strong>, <strong>Helpful Content</strong>, <strong>Core Updates</strong>, and now the AI-search era. <em>The discipline we run on programs today was shaped by watching what survived every major algorithm shift.</em>\n\n" +
        "We ship the full search stack under one roof: keyword research, content strategy, content production with human editorial, technical SEO engineering, schema implementation, link earning through digital PR, AI-citation optimisation, and the measurement infrastructure that ties organic work to commercial outcomes. One team, one content calendar, one measurement dashboard.\n\n" +
        "And we pair search with the adjacent channels that amplify it — PR earns the links that SEO can't buy, community creates the engagement signals that Google weighs, content production doubles as sales-enablement assets. <strong>Search works better as part of an integrated marketing program than as a standalone service. That's how we deliver it.</strong>",
    },
  ],

  testimonials: [
    { id: "cobox-adaa" },
    { id: "ubuntu-tribe-team" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What's the difference between SEO, AEO, and GEO?",
      a: "<strong>SEO optimises for Google rankings in traditional SERPs. AEO (Answer Engine Optimisation) optimises for being quoted or cited by AI answer engines (ChatGPT, Perplexity, Claude). GEO (Generative Engine Optimisation) is closely related — specifically optimising for citation in generative AI answers including Google's AI Overviews.</strong> In 2026 these three disciplines have converged — the tactics that win Google rankings (depth, structure, entity density, schema, authentic authority signals) also win AI citations. We run them as one integrated program rather than three separate services.",
    },
    {
      q: "What drives the cost of a search program?",
      a: "<strong>Cost is driven by content scale, technical-debt remediation scope, competitive intensity, geographic coverage, speed expectations, and in-house review capacity.</strong> A program building 60+ pages of new authoritative content, fixing a full technical-SEO backlog, earning links in a competitive vertical, and monitoring AI-citation performance is meaningfully larger than a program doing one of those activities. We scope based on the diagnosis — what's actually broken and what's actually missing — not on a fixed retainer template.",
    },
    {
      q: "How long before I see results?",
      a: "<strong>Technical fixes and AEO wins can show in 4–8 weeks. Content programs show traction at 3–6 months. Substantial organic revenue impact typically shows at 9–15 months. AI-citation improvements can move within a quarter when the content base is strong.</strong> Agencies promising meaningful six-week SEO results are selling either thin tactics that won't last or paid traffic labelled as SEO. Search is a compound investment; patience is structural, not optional.",
    },
    {
      q: "Is AI-generated content a problem for SEO?",
      a: "<strong>Unedited AI content is a problem. AI-assisted content written with expert review, factual verification, and original insight is fine — and often the practical way to produce content at modern scale.</strong> Google's Helpful Content updates specifically target low-effort AI output: articles regurgitating what's already on the web, factually wrong content, and content with no genuine expertise behind it. The test is quality, not provenance. AI-as-tool passes. AI-as-publisher fails.",
    },
    {
      q: "What's included in a full SEO / AEO / GEO program?",
      a: "<strong>Search-state audit, keyword and intent mapping, technical site remediation, content strategy and cluster architecture, content production with human editorial, schema implementation, internal linking strategy, link earning through digital PR, AI-citation monitoring and optimisation, and transparent measurement with dashboards.</strong> What isn't included: paid search (separate specialism, we coordinate but don't run), content hosting and CMS migration (we can support; it's usually a separate project), and ongoing content production beyond the retainer scope unless contracted separately.",
    },
    {
      q: "Can you work with our existing CMS or do we need to move platforms?",
      a: "<strong>We can work with most CMSes — WordPress, Webflow, Shopify, Sanity, Contentful, custom Next.js / Astro, Framer, and others. We rarely require platform migration unless the current CMS fundamentally can't support the technical changes required.</strong> Most SEO programs can work within existing CMSes with targeted schema, technical, and content improvements. Migration happens when server-side rendering is impossible on the current stack, when indexation is broken at the platform level, or when content operations at scale require capabilities the current CMS doesn't offer. Migration is the exception, not the rule.",
    },
    {
      q: "How do you measure success?",
      a: "<strong>Through commercial metrics, not ranking screenshots.</strong> We track organic traffic, organic-attributed revenue, organic-attributed leads, AI-citation rates (brand appearance in target AI queries), share-of-voice in target keyword clusters, and competitive positioning over time. Vanity metrics like ranking-for-one-keyword or DR-score-increase don't correlate reliably with commercial outcomes — we report on them but don't build programs around them. Quarterly business reviews focus on what's driving revenue, not what's driving ranking.",
    },
    {
      q: "When should a team NOT invest in search?",
      a: "<strong>When your target buyers don't research via search engines — some enterprise categories, some ultra-high-touch B2B, early-stage products where the market doesn't exist yet.</strong> If your customers don't Google (or ChatGPT) the problem your product solves before reaching out, SEO / AEO / GEO won't produce proportional returns. Before investing, validate that real buyer research happens through search or AI engines. If it doesn't, spend that budget on the channels where your buyers actually spend attention — sales, events, partnerships, community.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "SEO, AEO & GEO", href: "/services/marketing/seo", active: true },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Performance Marketing", href: "/services/marketing/performance-marketing" },
    { label: "B2B & Lead Generation", href: "/services/marketing/b2b-marketing" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
  ],

  finalCta: {
    light: "Rank on Google,",
    bold: "get quoted by ChatGPT.",
    subtitle: "One program. All three search surfaces. No tricks.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
