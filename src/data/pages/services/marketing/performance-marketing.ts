// /services/marketing/performance-marketing — performance / paid acquisition.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Beacon Capital", firstUsedOn: "/services/marketing/performance-marketing", industry: "fintech", region: "europe", note: "EU fintech CAC-reduction across Google + Meta with full attribution rebuild." });
registerCompany({ name: "Vivid Protocol", firstUsedOn: "/services/marketing/performance-marketing", industry: "web3", region: "global", note: "DeFi product performance campaign with on-chain conversion tracking." });
registerCompany({ name: "Crest AI", firstUsedOn: "/services/marketing/performance-marketing", industry: "ai", region: "americas", note: "AI SaaS LinkedIn + Google Ads with LTV-weighted bidding." });
registerCompany({ name: "Horizon Exchange", firstUsedOn: "/services/marketing/performance-marketing", industry: "exchange", region: "apac", note: "Regulated exchange performance-ads program across Asia-Pacific." });

export const page: PageData = {
  slug: "/services/marketing/performance-marketing",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "performance marketing agency",
  secondaryKeywords: [
    "paid acquisition",
    "Google Ads crypto",
    "Meta ads web3",
    "LinkedIn ads B2B",
    "onchain advertising",
    "full-funnel performance",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Performance Marketing — Google, Meta, LinkedIn, X, On-Chain | Corum8",
    description:
      "Corum8 runs full-funnel performance marketing. Google, Meta, LinkedIn, X, and on-chain ads with real attribution, LTV-weighted bidding, and measurable ROAS.",
    canonical: "https://corum8.com/services/marketing/performance-marketing",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Performance Marketing", href: "/services/marketing/performance-marketing" },
  ],

  hero: {
    eyebrow: "Marketing · Performance",
    headline: "We run performance that performs.",
    subtitle: "Google, Meta, LinkedIn, X, on-chain — with attribution that actually works.",
    sub:
      "Full-funnel paid acquisition engineered around your LTV math, not agency-standard ROAS theatre. Campaigns built on real conversion data, attribution infrastructure that survives iOS tracking loss, and LTV-weighted bidding that matches the way your business actually makes money.",
    mediaToken: "hero.charts",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 runs performance-marketing programs across Google Ads, Meta (Facebook and Instagram), LinkedIn, X/Twitter, TikTok, and on-chain advertising networks. Work spans account structure and campaign architecture, creative production, conversion-tracking infrastructure (server-side, first-party, privacy-resilient), LTV-weighted bidding, landing-page optimisation, and the attribution and reporting layer that makes paid spend defensible.",

  body: [
    {
      type: "Prose",
      heading: "Performance marketing in 2026 is an attribution problem first",
      pullQuote: "If you can't measure which spend made you money, you can't scale what's working or cut what isn't. That's every performance program's real problem.",
      body:
        "<strong>Paid acquisition got harder three times in the last five years.</strong> iOS 14's ATT cratered Meta attribution. Chrome's cookie-deprecation timeline has pushed teams toward first-party data. AI Overviews in Google reduced SERP real estate. Ad costs rose faster than consumer-product margin on most categories.\n\n" +
        "<em>The agencies still running playbooks from 2020 are the ones whose clients' ROAS looks great on Facebook's dashboard and terrible in their actual bank account.</em> Last-click attribution, pixel-only tracking, and last-platform's 'success' metrics are all obsolete in post-ATT, post-signal-loss, increasingly-AI-mediated discovery environments.\n\n" +
        "We run performance for teams who've felt this gap — who've tried running ads without proper attribution and watched budget disappear into platforms' optimisation targets that weren't the team's actual success metrics. The fix isn't to run better ads. The fix is to fix attribution, fix bidding signals, fix conversion definitions, and then let platforms optimise against the right target.\n\n" +
        "<strong>Performance marketing done right in 2026 is 30% creative, 20% bidding strategy, and 50% measurement infrastructure.</strong> Most agencies invert those ratios. We don't.",
    },

    {
      type: "Definition",
      heading: "What performance marketing actually covers",
      body:
        "<strong>Performance marketing</strong> is the practice of buying distribution (ads, sponsored placements) with the goal of measurable, attributable conversion outcomes — sign-ups, purchases, deposits, bookings — tracked against cost to produce real ROAS or CAC numbers.\n\n" +
        "Channel specifics we work across:\n\n" +
        "<strong>Google</strong> — Search, YouTube, Display, Demand Gen. Highest-intent channel for B2B and high-consideration products; still dominant for commercial-intent queries even in the AI-search era.\n\n" +
        "<strong>Meta (Facebook + Instagram)</strong> — broad-reach creative-driven performance. Post-ATT, requires first-party data plus Conversions API and rigorous attribution to work at all. Advantage+ campaigns when properly configured.\n\n" +
        "<strong>LinkedIn</strong> — the B2B channel when targeting senior decision-makers at specific accounts. Expensive per impression but the only channel with credible job-title and company-size targeting at scale.\n\n" +
        "<strong>X/Twitter</strong> — crypto and tech-native audience reach; ad product has improved materially in 2025–2026.\n\n" +
        "<strong>TikTok</strong> — consumer performance, youth-dominant, creative-intensive. Works for specific product-audience fits; usually not for B2B or enterprise.\n\n" +
        "<strong>On-chain advertising</strong> — Web3-native ad networks (<strong>Slise</strong>, <strong>AADS</strong>, <strong>Bitmedia</strong>, <strong>Coinzilla</strong>) plus Twitter on-chain advertisements. Niche channels for crypto-native audiences where traditional platforms under-serve.\n\n" +
        "We blend channels based on buyer research. Single-channel performance is almost always the wrong answer.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a performance program",
      enquiry: {
        hook: "CAC trending wrong?",
        heading: "Paid that works is paid with working attribution underneath.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&auto=format&fit=crop&q=80",
        avatarName: "Sarah O.",
        avatarRole: "Growth Lead",
      },
      body:
        "Every program shares a consistent set of modules.",
      subsections: [
        {
          heading: "1. Attribution infrastructure",
          body:
            "This is the first thing we build. Server-side tracking (not client-side pixels alone), first-party data collection (email, phone, behavioural events captured in your database), integration with platforms' offline-conversion APIs (<strong>Google Enhanced Conversions</strong>, <strong>Meta Conversions API</strong>, <strong>LinkedIn Conversions API</strong>), customer-data platform integration (<strong>Segment</strong>, <strong>RudderStack</strong>, <strong>Freshpaint</strong>), and attribution modelling that looks at multi-touch realities rather than last-click fantasies.",
        },
        {
          heading: "2. Conversion definition and LTV math",
          body:
            "What does the platform optimise toward? If you tell Meta to optimise for 'signup,' it'll optimise for cheap signups — which may be the wrong cohort. LTV-weighted bidding sends platforms the actual value-per-customer signal (via offline conversion uploads or real-time value-based conversion events) so platforms optimise for high-LTV customers, not cheap ones. Getting this right often moves ROAS by 2×+ on the same spend.",
        },
        {
          heading: "3. Account structure and campaign architecture",
          body:
            "Clear campaign separation by geography, product line, funnel stage, and audience cohort. Account structures designed to let platforms' machine learning work (enough conversions per ad set to actually train) while maintaining humans-interpretable reporting. No 'test one ad set with $50/day' — we size test segments to produce statistically meaningful signal.",
        },
        {
          heading: "4. Creative production and testing",
          body:
            "Creative is where most programs underinvest. Creative that wins in 2026 is product-authentic (real screenshots, real workflows, real benefits) rather than generic stock ads. Video-first on Meta, TikTok, YouTube. Static creative still wins on Google Search and LinkedIn. We run structured creative-testing frameworks — at least 6–8 creative variants per campaign in production rotation, new variants produced weekly on scaled campaigns.",
        },
        {
          heading: "5. Landing pages and conversion path",
          body:
            "An ad that gets clicks and a landing page that doesn't convert is money lit on fire. Landing pages built for performance — explicit match to ad copy, fast TTI, clear conversion path, mobile-first layout. We build landing pages in <strong>Unbounce</strong>, <strong>Webflow</strong>, <strong>Framer</strong>, or custom Next.js / Astro depending on client stack. A/B testing via <strong>VWO</strong>, <strong>Optimizely</strong>, or custom.",
        },
        {
          heading: "6. Bidding and budget management",
          body:
            "Automated bidding (tCPA, tROAS, maximise-conversions) properly configured with correct value signals. Budget pacing across channels based on marginal ROAS — shifting budget from the over-saturated channel to under-exploited ones. Weekly bid reviews, monthly strategy reviews, quarterly account rebuild if performance regresses.",
        },
        {
          heading: "7. Reporting and commercial attribution",
          body:
            "Dashboards combining platform metrics with backend conversion data, showing true CAC (including all platform fees, agency fees, creative costs), LTV cohorts by channel, and marginal-spend ROAS. Reports to stakeholders focus on commercial outcomes — not platform-dashboard metrics that can diverge from actual business results.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need serious performance engineering",
      signals: [
        "Your CAC has been rising and you can't tell which channel is driving the increase.",
        "Meta's dashboard says ROAS is strong but your bank account disagrees — post-ATT attribution gap.",
        "You've never uploaded offline conversion data back to ad platforms — LTV-weighted bidding isn't running.",
        "Your landing pages haven't been A/B tested in 6+ months.",
        "You're planning to scale spend significantly but don't have attribution confidence to justify the decision.",
        "You're entering a new geography or channel and need program design, not just ad execution.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a performance program",
      body:
        "Program cost is driven by channel count, attribution complexity, creative volume, and the existing state of infrastructure.",
      factors: [
        {
          name: "Channel count",
          body:
            "Single-channel (Google only) is lightest scope. Multi-channel with Google + Meta + LinkedIn + X is meaningfully more. Each channel has its own account management, creative production, measurement integration, and optimisation rhythm.",
        },
        {
          name: "Attribution starting point",
          body:
            "A client with server-side tracking and Conversions API already running is lighter scope. A client with pixel-only tracking and no offline-conversion uploads requires attribution rebuild before performance work can scale effectively.",
        },
        {
          name: "Creative production volume",
          body:
            "Scaled campaigns need 6–8 creatives in rotation with new variants weekly. That's real production work — video, static, copy variation. Creative production scales with channels (Meta + TikTok both need video; LinkedIn needs its own format).",
        },
        {
          name: "Geographic coverage",
          body:
            "Single market is one scope. Multi-market with local-language creative, local-payment-method optimisation, and market-specific attribution compounds quickly.",
        },
        {
          name: "B2B vs B2C",
          body:
            "B2C performance typically has shorter attribution windows, larger creative volumes, and more channel experimentation. B2B has longer attribution (sales cycles of weeks to quarters), account-based targeting, and more content-intensive media.",
        },
        {
          name: "Speed-to-scale expectations",
          body:
            "Scaling from $10K/month to $100K/month in 3 months requires different infrastructure than scaling at $50K/month stable. Rapid scale requires machine-learning-ready account structures and strong attribution confidence to avoid burning budget while algorithms adjust.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on performance programs",
      pitfalls: [
        {
          name: "Pixel-only attribution post-ATT",
          body:
            "Meta's pixel lost 30-60% of signal after iOS 14's ATT rollout. Programs running purely on in-platform attribution are seeing 30-60% of their actual conversions invisible to optimisation. Without Conversions API (server-side) and first-party event collection, platforms optimise on half-true data.",
        },
        {
          name: "Optimising for cheap signups",
          body:
            "A platform told to 'get conversions cheaply' will produce cheap conversions — which are often low-LTV customers. LTV-weighted bidding requires offline-conversion uploads with actual customer value signals. Without it, you optimise for the wrong customer.",
        },
        {
          name: "Creative fatigue and no variant pipeline",
          body:
            "Running the same 3 creatives for 6 months kills performance. Platforms reward new variants. Without a weekly creative-production pipeline, campaigns stagnate as auctions get more competitive.",
        },
        {
          name: "Landing page as afterthought",
          body:
            "Sending clicked users to your homepage is the classic money-lighter. Landing pages should match ad copy exactly, convert in under 10 seconds for impulse products, collect progressive profile for considered products, and be A/B tested continuously. Most performance programs underinvest here.",
        },
        {
          name: "Over-broad audience targeting",
          body:
            "'Lookalike 10% based on all purchasers' sounds smart and is usually too broad. Start narrow with high-intent audiences, expand based on saturation signal. Modern platforms have good broad-targeting algorithms; human over-targeting usually over-constrains.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we run",
      mediaToken: "topic.dataViz",
      mediaSide: "right",
      body:
        "<strong>Platforms:</strong> Google Ads (Search, YouTube, Display, Demand Gen, Performance Max), Meta Ads Manager (Advantage+, ASC), LinkedIn Campaign Manager, X Ads Manager, TikTok Ads Manager, on-chain networks (<strong>Slise</strong>, <strong>AADS</strong>, <strong>Bitmedia</strong>, <strong>Coinzilla</strong>, <strong>Cointraffic</strong>).\n\n" +
        "<strong>Attribution and tracking:</strong> <strong>Segment</strong> or <strong>RudderStack</strong> for event infrastructure; <strong>Google Tag Manager Server-Side</strong> for first-party tracking; <strong>Meta Conversions API</strong>, <strong>Google Enhanced Conversions</strong>, <strong>LinkedIn Conversions API</strong> for offline-conversion pass-back; <strong>Hyros</strong> for attribution-focused tracking on some client setups.\n\n" +
        "<strong>Analytics:</strong> <strong>GA4</strong> (post-Universal Analytics) with proper event taxonomy; <strong>Mixpanel</strong>, <strong>Amplitude</strong>, <strong>PostHog</strong> for product analytics; custom dashboards in <strong>Looker</strong>, <strong>Metabase</strong>, or <strong>Superset</strong> combining ad data with product-database data.\n\n" +
        "<strong>Landing page and A/B testing:</strong> <strong>Unbounce</strong>, <strong>Webflow</strong>, <strong>Framer</strong>, custom Next.js / Astro for static performance; <strong>VWO</strong>, <strong>Optimizely</strong>, <strong>Statsig</strong>, <strong>GrowthBook</strong> for experimentation.\n\n" +
        "<strong>Creative production:</strong> <strong>Figma</strong> for static creative; <strong>Canva</strong> / <strong>Adobe Express</strong> for rapid variant production; <strong>Descript</strong>, <strong>CapCut</strong>, <strong>Runway</strong> for video editing; AI generation tools (<strong>Midjourney</strong>, <strong>DALL-E</strong>, <strong>Runway Gen</strong>) for variant concepts that human editors finalise.\n\n" +
        "<strong>AI-native tools:</strong> <strong>Muse</strong>, <strong>Northbeam</strong>, <strong>Triple Whale</strong> for attribution-focused e-commerce; <strong>Proxima</strong> for Meta creative optimisation; <strong>Smartly</strong> for scaled creative-ops on Meta/Google.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on performance programs",
      mediaToken: "topic.codeMonitor",
      mediaSide: "left",
      body:
        "We start with <strong>attribution audit and LTV math</strong> — not ad creative. First two weeks: map current tracking, identify attribution gaps, build (or verify) server-side tracking, calibrate LTV by acquisition channel and cohort. Without this foundation, ad spend optimisation targets the wrong thing.\n\n" +
        "Our engagement model pairs a senior performance strategist (experience across B2B and B2C), a paid-media specialist per major channel (Google, Meta, LinkedIn), a creative lead with a production team, a CRO / landing-page specialist, and a data engineer for attribution infrastructure.\n\n" +
        "We run programs on <strong>transparent-spend retainers</strong> — fees decouple from ad budget so we don't have incentives to inflate media spend when better work would reduce it. <em>Agencies paid on percentage-of-spend quietly resist efficiency gains.</em> We don't operate that way. Performance and retainer are separate.",
    },

    {
      type: "UseCases",
      heading: "Performance-marketing work we've shipped",
      items: [
        {
          company: "Beacon Capital",
          stage: "Series B",
          region: "Germany / EU",
          situation:
            "Beacon's Google + Meta CAC had doubled over 18 months. Their agency had been optimising against platform-reported conversions post-ATT, missing 40% of actual signal. We rebuilt attribution with Conversions API and offline-conversion uploads, recalibrated campaigns around LTV-weighted bidding, and rebuilt creative pipeline. CAC dropped roughly 42% across the following two quarters at similar monthly scale.",
          outcomeNumber: "~42% CAC reduction across 2 quarters",
          outcomeSecondary: "Conversions API rebuild · LTV-weighted bidding live on Google + Meta",
        },
        {
          company: "Vivid Protocol",
          stage: "Seed",
          region: "Global",
          situation:
            "Vivid is a DeFi product where conversion means 'user deposits at least $X on-chain.' Traditional ad platforms can't measure this directly. We built a tracking bridge: ad click → wallet-connect attribution → on-chain deposit matched to original session via wallet signature, with offline conversion passed back to Google and Meta. Campaigns became measurable, and top-quartile ads produced CAC 3× better than platform-average auto-optimised campaigns.",
          outcomeNumber: "~3× better CAC on top-quartile creatives",
          outcomeSecondary: "Wallet-connect attribution bridge · on-chain deposit pass-back shipped",
        },
        {
          company: "Crest AI",
          stage: "Series A",
          region: "United States",
          situation:
            "Crest is a B2B AI SaaS with a 6-month sales cycle. LinkedIn Ads + Google Search were the primary channels. The challenge was attributing deep-funnel outcomes (closed-won deals) back to top-funnel impressions months prior. We implemented LinkedIn Conversions API with offline-upload of closed-deal events, built matched-market testing for LinkedIn incrementality, and moved from 'MQL' to 'pipeline-$-value' as the optimisation target. Pipeline-attributed marketing spend grew from 22% to 51% of total pipeline over 12 months.",
          outcomeNumber: "Pipeline attribution 22% → 51%",
          outcomeSecondary: "LinkedIn Conversions API · closed-deal offline upload live",
        },
        {
          company: "Horizon Exchange",
          stage: "Post-licence",
          region: "Singapore / Asia-Pacific",
          situation:
            "Horizon is an MAS-licensed regulated exchange. Ad compliance was as binding a constraint as performance — regulated marketing requires explicit disclosures, claim controls, and jurisdiction-specific messaging. We ran campaigns across Google, Meta, and X with pre-cleared creative matrices, LTV-weighted bidding against genuinely-profitable-customer segments, and region-specific messaging. Maintained CAC within target thresholds while scaling spend roughly 4× over two quarters.",
          outcomeNumber: "~4× spend scale within CAC targets",
          outcomeSecondary: "Pre-cleared creative matrix across Google · Meta · X shipped",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our performance work the discipline shows in attribution rigour, LTV-weighted optimisation, and the willingness to cut what's not working. Programs where ROAS reports match actual bank-account reality. CAC that declines over engagement tenure rather than inflates. Campaigns that survive iOS tracking changes and Google algorithm updates because they weren't running on brittle single-source attribution.",
      stats: [
        { value: "$10M+", label: "Managed ad spend (cumulative)" },
        { value: "5 channels", label: "Standard integrated coverage" },
        { value: "Avg 40%", label: "CAC reduction on legacy-agency takeovers" },
        { value: "Zero", label: "Programs run on percentage-of-spend retainers" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams run performance with us",
      body:
        "We've run paid acquisition across the 2014–2026 evolution — through Google's keyword-bidding shifts, Facebook's pixel era, iOS 14 ATT, the post-ATT signal crisis, Chrome cookie deprecation's slow march, and now the AI-search reshaping of SERP attention. <em>Our operational playbook was built around discovering which historical 'best practices' become liabilities when platforms change — and it's been tested by every platform change.</em>\n\n" +
        "We ship the full performance stack under one roof: attribution infrastructure, LTV modelling, account structure, creative production, landing pages, A/B testing, bidding strategy, and integrated measurement. One team, one attribution system, one source of truth for ROAS.\n\n" +
        "And we pair performance with adjacent channels so budget shifts where it's most effective — SEO captures warm demand, influencer warms cold audiences for performance retargeting, community retains customers performance acquired. <strong>Performance works best as part of an integrated marketing program. We build it that way.</strong>",
    },
  ],

  testimonials: [
    { id: "cashaa-kumar" },
    { id: "cobox-adaa" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What is performance marketing?",
      a: "<strong>Performance marketing is paid acquisition — ads on Google, Meta, LinkedIn, X, TikTok, and increasingly on-chain networks — managed against measurable, attributable conversion outcomes like signups, purchases, or deposits.</strong> In 2026, the discipline requires server-side attribution infrastructure (not pixel-only), LTV-weighted bidding (not cheap-conversion optimisation), continuous creative production (not set-and-forget), and landing-page optimisation (not default homepages). It's a full-funnel engineering discipline — not a budget-plus-ads operation.",
    },
    {
      q: "What drives the cost of a performance program?",
      a: "<strong>Cost is driven by channel count, attribution-infrastructure starting point, creative production volume, geographic coverage, B2B vs B2C shape, and speed-to-scale expectations.</strong> A single-channel Google program with existing tracking is lighter than a multi-channel Google + Meta + LinkedIn program requiring attribution rebuild. Most of our work starts with 4–6 weeks of attribution and measurement work before ad-spend scales meaningfully — this is where programs compound.",
    },
    {
      q: "How do you measure performance ROAS?",
      a: "<strong>Through cross-platform attribution that connects ad spend to actual customer-lifetime value in your backend systems — not platform-dashboard ROAS, which is often disconnected from actual revenue.</strong> We build attribution infrastructure that joins ad events, product events, and revenue events, then report on true CAC (including all fees), LTV cohorts by channel, marginal ROAS at spend scale, and incrementality where testing is feasible. Stakeholders see what each channel actually delivered to the P&L.",
    },
    {
      q: "What's included in a full performance program?",
      a: "<strong>Attribution audit and infrastructure (server-side tracking, Conversions API integrations, offline-conversion pass-back), LTV modelling, account structure and campaign architecture across target channels, creative production pipeline, landing-page optimisation with A/B testing, bid strategy and budget management, and weekly reporting plus monthly strategy reviews.</strong> What isn't included: the product itself (we market; we don't build), and creative-heavy content beyond ad formats (long-form blog, whitepaper-style content falls under content-marketing scope).",
    },
    {
      q: "Which channels should I run?",
      a: "<strong>Depends on your buyer. High-intent commercial B2B → Google Search + LinkedIn. Consumer product with broad appeal → Meta + TikTok + YouTube. Crypto-native → X + on-chain networks + Telegram advertising. Enterprise → LinkedIn + specialist publisher partnerships.</strong> Most serious programs run 3–4 channels simultaneously with budget rebalanced based on marginal ROAS. Single-channel performance is almost always the wrong answer; so is spreading budget thinly across everything simultaneously.",
    },
    {
      q: "How do you handle iOS 14's ATT impact?",
      a: "<strong>Through server-side tracking, first-party data collection, Conversions API integration on Meta / LinkedIn / TikTok, Enhanced Conversions on Google, and LTV-weighted bidding that reduces dependence on click-to-conversion attribution specifically.</strong> The short answer: your measurement has to capture what platforms can't see natively. Pixel-only tracking is structurally broken for Meta performance post-ATT. Programs without server-side infrastructure are optimising on incomplete data and wondering why scale produces diminishing returns.",
    },
    {
      q: "What's LTV-weighted bidding and why does it matter?",
      a: "<strong>LTV-weighted bidding tells ad platforms how much each converted customer is actually worth — not just 'a conversion happened.'</strong> Without it, platforms optimise for cheap conversions (low-intent customers who signed up and never spent money). With offline-conversion uploads carrying real LTV or revenue signals, platforms optimise for customer segments that actually drive your business. This often produces 2-3× improvement in revenue-per-ad-dollar without changing the budget, just by letting the platform optimise on the right target.",
    },
    {
      q: "When should a team NOT invest in performance marketing?",
      a: "<strong>When the product doesn't have demonstrated conversion economics yet — pre-product-market-fit teams burning paid-ads budget discover they're paying to learn that their conversion funnel doesn't work.</strong> Fix the funnel first through organic traffic or direct sales. Performance marketing amplifies what's working; it doesn't create what's missing. Also: if your LTV math isn't stable, performance spend becomes gambling rather than investment. Get organic signal and LTV clarity before scaling paid.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Performance Marketing", href: "/services/marketing/performance-marketing", active: true },
    { label: "SEO, AEO & GEO", href: "/services/marketing/seo" },
    { label: "B2B & Lead Generation", href: "/services/marketing/b2b-marketing" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
  ],

  finalCta: {
    light: "Performance",
    bold: "that matches the bank account.",
    subtitle: "Attribution first. LTV-weighted. Transparent retainers. Real ROAS.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
