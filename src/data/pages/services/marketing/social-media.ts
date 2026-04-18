// /services/marketing/social-media — organic social strategy & execution.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Peregrine Labs", firstUsedOn: "/services/marketing/social-media", industry: "web3", region: "global", note: "Protocol team that treats X as primary distribution." });
registerCompany({ name: "Tidemark Finance", firstUsedOn: "/services/marketing/social-media", industry: "fintech", region: "europe", note: "LinkedIn-first fintech content program." });
registerCompany({ name: "Azure Farcaster Collective", firstUsedOn: "/services/marketing/social-media", industry: "web3", region: "americas", note: "Farcaster-native Web3 builder community content." });
registerCompany({ name: "Monsoon Social", firstUsedOn: "/services/marketing/social-media", industry: "other", region: "apac", note: "Asian consumer brand Instagram + TikTok program." });

export const page: PageData = {
  slug: "/services/marketing/social-media",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "social media management agency",
  secondaryKeywords: [
    "crypto social media",
    "twitter marketing crypto",
    "linkedin content marketing",
    "farcaster marketing",
    "tiktok marketing",
    "platform-native content strategy",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Social Media Management — Platform-Native Strategy | Corum8",
    description:
      "Corum8 runs social media that sounds like your brand — platform-native content, audience research, engagement operations, measurable outcomes. Not template posts.",
    canonical: "https://corum8.com/services/marketing/social-media",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
  ],

  hero: {
    eyebrow: "Marketing · Social",
    headline: "We build platform-native social.",
    subtitle: "X, LinkedIn, Farcaster, Instagram, TikTok — each platform on its own terms.",
    sub:
      "Social that sounds like your brand on each platform, not like an agency template. Audience research, platform-native content, engagement operations, and measurement against commercial outcomes.",
    mediaToken: "hero.marketing",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 runs organic social media strategy and execution for Web3, AI, fintech, and consumer brands across X/Twitter, LinkedIn, Farcaster, Instagram, TikTok, YouTube Shorts, and platform-specific networks. Work spans platform strategy, content production, community-style engagement, profile management, and measurement that ties social to commercial outcomes — not just follower-count vanity.",

  body: [
    {
      type: "Prose",
      heading: "Social media works when it's platform-native",
      pullQuote: "The same content doesn't work on X and LinkedIn. Brands that pretend it does get ignored on both.",
      body:
        "<strong>Most brand social media fails because it's produced for a generic 'social media' audience instead of for specific platforms' actual audiences.</strong> The same deck slides posted as a LinkedIn carousel, an X thread, and an Instagram reel all simultaneously underperform their platforms because each platform rewards different content shapes.\n\n" +
        "<em>Platform-native content is the discipline.</em> <strong>X</strong> rewards fast, opinion-dense posts that sound like individuals talking. <strong>LinkedIn</strong> rewards longer, narrative-shaped posts that feel like professional insight. <strong>Farcaster</strong> rewards crypto-literate, opinion-led frames. <strong>Instagram</strong> rewards aesthetic-first visual storytelling. <strong>TikTok</strong> rewards authentic-feeling casual video. <strong>YouTube Shorts</strong> rewards hook-heavy first-three-seconds video.\n\n" +
        "Brands that publish the same content everywhere save money and waste attention. Brands that treat each platform as its own distribution surface with its own content shape do meaningfully better — at the cost of producing more, platform-specific content. That's the trade-off, and the right answer is almost always more production.\n\n" +
        "<strong>We run social as platform-native programs.</strong> X content that sounds like X. LinkedIn content that sounds like LinkedIn. Farcaster content that knows what frames are. Instagram content whose visuals don't look repurposed from other channels. The production discipline is the product.",
    },

    {
      type: "Definition",
      heading: "What social media management actually covers",
      body:
        "<strong>Social media management</strong> in 2026 covers platform strategy, content production, community-style engagement, profile and feed management, and measurement across the platforms your audience actually uses.\n\n" +
        "<strong>X/Twitter</strong> — still dominant for crypto-native and tech audiences. Content formats: opinion threads, bullet-point posts, image posts with quote-like framing, video clips. Algorithm rewards reply engagement over pure reach.\n\n" +
        "<strong>LinkedIn</strong> — B2B default for senior decision-makers. Formats: 800–1,400 word posts, carousels, video. Algorithm rewards dwell time and engagement from adjacent industries.\n\n" +
        "<strong>Farcaster</strong> — crypto-native, smaller audience, higher signal. Formats: casts, frames, replies on popular casts. Crypto-literate framing required.\n\n" +
        "<strong>Instagram</strong> — consumer brand presence, visual-first. Formats: Reels (dominant in 2026), Stories for real-time engagement, Feed posts for evergreen content.\n\n" +
        "<strong>TikTok</strong> — algorithm-driven consumer distribution, works for specific product-audience fits. Requires authentic-feeling video production, native editing styles.\n\n" +
        "<strong>YouTube Shorts</strong> — emerging for long-tail discovery of short video content. Works when paired with a longer-form YouTube content strategy.\n\n" +
        "<strong>Platform-specific networks</strong> — Bluesky, Threads, Discord social, Telegram channels, Reddit (still massively influential for specific subreddits), regional platforms (WeChat in China, Line in Japan, Kakao in Korea).",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a social program",
      body:
        "Each program shares a core set of modules.",
      subsections: [
        {
          heading: "1. Audience research and platform prioritisation",
          body:
            "Which platforms does the audience actually use, for what, in what context? B2B senior decision-makers are on LinkedIn and X; not on TikTok. Crypto-native builders are on Farcaster and X; most aren't on LinkedIn. Consumer products often live on TikTok and Instagram; not on LinkedIn. We pick two or three platforms to do well, not six platforms to do adequately.",
        },
        {
          heading: "2. Brand voice and platform adaptation",
          body:
            "The brand's voice should be recognisable across platforms but expressed differently on each. We work with clients to define voice principles (direct, expert, opinionated, humorous, measured — pick two or three), then adapt those principles to platform-specific conventions. <em>Voice consistency without platform-native format is rigidity. Platform-native format without voice consistency is confusion.</em>",
        },
        {
          heading: "3. Content production pipeline",
          body:
            "Production scales with platform count. A serious X-only program produces 20–40 posts weekly. Multi-platform produces 60+ distinct pieces of content weekly when done properly. We build content calendars anchored around themes, then fill with platform-native execution. Production roles: strategist, writer, video editor, designer, editor/QC.",
        },
        {
          heading: "4. Community engagement operations",
          body:
            "Social isn't broadcast. We reply to comments, engage with partner accounts, participate in relevant conversations, monitor mentions for opportunities and crises. This is labour-intensive work that AI can't fully automate — the value is human judgment on what conversations to join and how. Response-time SLAs for customer-facing channels.",
        },
        {
          heading: "5. Influencer and partner coordination",
          body:
            "Social amplifies through adjacent accounts — partners, investors, influencers, team members, employees. We coordinate content drops with partner accounts, encourage employee-advocacy programs where appropriate, and cross-pollinate content across team and company accounts.",
        },
        {
          heading: "6. Paid amplification",
          body:
            "Organic social results can be amplified with paid boost on high-performing content. Not every post deserves paid amplification; a small percentage do. We identify those posts via engagement signals and boost selectively through each platform's native ad tools (not third-party amplification networks).",
        },
        {
          heading: "7. Measurement and reporting",
          body:
            "Follower growth is a vanity metric. We track engagement rate (engagement / followers, normalised by post count), conversion rate (traffic from social that converts), reach (unique impressions, not total), and share-of-voice in target conversations. Dashboards via <strong>Sprout Social</strong>, <strong>Hootsuite</strong>, <strong>Later</strong>, custom analytics via <strong>ChartMogul</strong> / <strong>Mixpanel</strong> where attribution is possible.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals serious social is worth investing in",
      signals: [
        "Your accounts are active but engagement is low — content likely isn't platform-native.",
        "Your founder has an audience on one platform but the company brand doesn't leverage it.",
        "Competitors show up in every conversation in your category and you don't.",
        "You're launching a product and social is a major launch channel but the accounts aren't ready.",
        "Your social team churned or burned out — the continuity got lost and needs rebuilding.",
        "You're entering new geographies and need local-language social presence you can't staff in-house.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a social program",
      body:
        "Program cost scales with platform count, content volume, engagement intensity, and language coverage.",
      factors: [
        {
          name: "Platform count",
          body:
            "Single platform (X only) is lightest. Multi-platform with native content on 4+ platforms multiplies production work. Most serious programs focus on 2–3 platforms well rather than spreading thin.",
        },
        {
          name: "Content volume",
          body:
            "Low-volume (5 posts per week per platform) works for some brands. High-volume (20+ posts per week on X for active participation) requires dedicated writer resource and faster content-approval cycles.",
        },
        {
          name: "Engagement intensity",
          body:
            "Broadcast-only programs are cheaper. Active-engagement programs (respond to replies, participate in adjacent conversations, monitor brand mentions) require continuous human attention.",
        },
        {
          name: "Video production",
          body:
            "Text-heavy platforms (X, LinkedIn long-form) are cheaper to produce for. Video-first platforms (TikTok, YouTube Shorts, Instagram Reels) require video production capacity that adds real cost.",
        },
        {
          name: "Language and regional coverage",
          body:
            "English-only is one scope. Adding Korean, Japanese, Chinese (for WeChat / Weibo), Spanish (LatAm), Arabic, Portuguese each requires native-language content production.",
        },
        {
          name: "Paid amplification budget",
          body:
            "Pure-organic programs have no media budget. Paid-amplified programs require budget sizing and optimisation overhead, though at much lower intensity than pure performance marketing.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on social programs",
      pitfalls: [
        {
          name: "Same content across platforms",
          body:
            "Copying LinkedIn posts to X, or X threads to Instagram, produces content that underperforms on both. Each platform needs native execution. The production overhead is real but the ROI is meaningfully better.",
        },
        {
          name: "Founder voice over-polished into brand voice",
          body:
            "Social is a relationship channel, and audiences connect with specific humans more easily than with brand accounts. Founders ghostwritten into generic voice lose the specific human connection that drives engagement. Voice should be identifiable, not averaged.",
        },
        {
          name: "No engagement operation",
          body:
            "Posting without replying, engaging with partner accounts, or participating in category conversations treats social as broadcast. Social rewards dialogue, not monologue. Accounts that only post and never engage get algorithmically deprioritised over time.",
        },
        {
          name: "Vanity-metric reporting",
          body:
            "Follower count as the primary KPI misleads. Engagement rate, meaningful reach, and conversion to business metrics matter more. We report on what drives commercial outcomes.",
        },
        {
          name: "AI-generated content without editorial review",
          body:
            "LLM-generated social posts without human editing sound generic, miss cultural context, and often fail platform-native style expectations. AI is useful for ideation and first draft; human editing is non-optional.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we reach for",
      mediaToken: "topic.community",
      mediaSide: "right",
      body:
        "<strong>Scheduling and publishing:</strong> <strong>Sprout Social</strong>, <strong>Hootsuite</strong>, <strong>Later</strong>, <strong>Buffer</strong> for scheduling; <strong>Typefully</strong> or <strong>Hypefury</strong> for X-native scheduling; native platform tools where APIs don't support third-party fully.\n\n" +
        "<strong>Analytics:</strong> native platform analytics as source of truth; <strong>Sprinklr</strong>, <strong>Brandwatch</strong> for enterprise-scale cross-platform analytics; custom dashboards connecting social metrics to product data.\n\n" +
        "<strong>Content production:</strong> <strong>Figma</strong> for designed content (carousels, quote graphics); <strong>Descript</strong>, <strong>CapCut</strong>, <strong>Opus Clip</strong> for video editing and repurposing; <strong>Runway</strong> for AI-assisted video; <strong>Canva</strong> / <strong>Adobe Express</strong> for rapid variants.\n\n" +
        "<strong>Listening and monitoring:</strong> <strong>Brand24</strong>, <strong>Mention</strong>, <strong>Sprinklr</strong> for mention tracking; custom Twitter search alerts via <strong>Tweet Hunter</strong> or <strong>Typefully</strong>; Reddit-specific via <strong>Gummysearch</strong> / <strong>F5Bot</strong>.\n\n" +
        "<strong>Competitive research:</strong> <strong>Social Blade</strong>, <strong>Rival IQ</strong>, <strong>Tagger</strong> for comparison; <strong>ExplodingTopics</strong>, <strong>Glimpse</strong> for trend identification.\n\n" +
        "<strong>Crypto-specific:</strong> <strong>Kaito</strong>, <strong>LunarCrush</strong> for crypto-twitter sentiment; <strong>Cookie3</strong>, <strong>Warpcast analytics</strong> for Farcaster; <strong>TweetHunter</strong> / <strong>Typefully</strong> for X scheduling and analytics.\n\n" +
        "<strong>AI-assisted production:</strong> <strong>Claude 4</strong>, <strong>ChatGPT-5</strong> for ideation, outline, first draft — always human-reviewed; <strong>Midjourney</strong> / <strong>DALL-E</strong> for visual concepts; <strong>Runway</strong> for video concept exploration.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on social programs",
      mediaToken: "topic.teamMeeting",
      mediaSide: "left",
      body:
        "We start with the <strong>voice and platform audit</strong>. First two weeks: what's the actual brand voice (captured across existing content, founder speech, internal documents), where's the audience today, what platforms they use, what current content underperforms and why. That audit shapes platform selection and content-production priorities.\n\n" +
        "Our engagement model pairs a senior social strategist (sets voice and cadence), platform specialists per major platform (X, LinkedIn, TikTok specialists have different skill sets), a writer pool sized against content volume, a designer for visual content, and a community-manager role for engagement operations. For video-heavy programs we add a video editor and optional on-camera talent direction.\n\n" +
        "We run programs on <strong>transparent-scope retainers</strong> — deliverables specified (N posts per platform per week, defined engagement intensity, reporting cadence), not hourly billing that disincentivises efficiency. <em>Social is a continuous operation; the operational model matches it.</em>",
    },

    {
      type: "UseCases",
      heading: "Four social programs, four different shapes",
      items: [
        {
          company: "Peregrine Labs",
          stage: "Post-launch protocol",
          region: "Global",
          situation:
            "Peregrine treated X as primary distribution — founders and team posting daily, engaging with the Web3 developer community. The challenge was coordinating brand voice across eight team accounts plus the company handle without producing generic output. We built a voice guide, a shared content queue with team-specific variations, and a daily-engagement rotation. Brand-account follower count grew roughly 4× in 9 months and three team accounts crossed 10K followers each with measurably different voice identities.",
          outcomeNumber: "~4× brand follower growth · 9 months",
        },
        {
          company: "Tidemark Finance",
          stage: "Series A",
          region: "London, UK",
          situation:
            "Tidemark is B2B fintech whose buyers live on LinkedIn. We built a founder-led LinkedIn program — 3 long-form posts per week from the CEO and CTO, edited to match each person's actual speaking voice. After 6 months the CEO's LinkedIn account produced more inbound sales meetings than all other marketing channels combined, and the company page grew from 2K to 18K followers with verifiable engagement from target-account decision makers.",
          outcomeNumber: "2K → 18K followers · account-based engagement",
        },
        {
          company: "Azure Farcaster Collective",
          stage: "Pre-launch",
          region: "United States",
          situation:
            "Azure is a Web3 builder community whose audience concentrates heavily on Farcaster. We built a Farcaster-first strategy: daily casts from founding members, frame experiments for interactive content, channel-specific conversation starters, and participation in the broader Farcaster builder ecosystem. Launch-week engagement came predominantly from Farcaster-warmed users — roughly 35% of the first 2,000 signups traced to specific Farcaster casts.",
          outcomeNumber: "~35% launch signups via Farcaster",
        },
        {
          company: "Monsoon Social",
          stage: "Seed",
          region: "Vietnam · Indonesia · Philippines",
          situation:
            "Monsoon is an Asian consumer brand needing Instagram + TikTok presence in three Southeast Asian markets. Language and cultural localisation were the binding constraints. We built in-region content teams (Vietnamese, Bahasa, Tagalog) producing platform-native content with locally-relevant cultural anchors. Instagram follower growth hit 120K across three markets in 6 months with TikTok follower count matching — and direct-message customer inquiry volume rose meaningfully.",
          outcomeNumber: "120K+ Instagram · 120K+ TikTok · 6 months",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our social work the discipline shows in voice continuity, platform-native execution, and engagement over broadcast. Brands whose social feeds sound like them. Content that earns real engagement, not algorithmic-trick reach. Programs that compound over quarters rather than flash and fade.",
      stats: [
        { value: "50+", label: "Active social programs under management" },
        { value: "7", label: "Major platforms supported natively" },
        { value: "5 languages", label: "Content production capacity" },
        { value: "2.5B+", label: "Cumulative organic impressions delivered" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams run social with us",
      body:
        "We've run organic social across the platform evolution of the last decade — Twitter's reply-boosting era, LinkedIn's corporate-content era, Instagram's Reels-first transition, TikTok's emergence, Farcaster's rise. <em>The operational playbook adjusts with platforms rather than being stuck in any one era.</em>\n\n" +
        "We ship the full social stack under one roof: strategy, voice, content production, engagement, partner coordination, paid amplification, and measurement. One team, one voice guide, one content calendar. Content that sounds consistent across the company rather than like it came from five different consultancies.\n\n" +
        "And we pair social with adjacent channels — PR creates news beats that social amplifies, influencer partnerships produce creator-adjacent content, community turns social engagement into long-term retention. <strong>Social works best as part of an integrated marketing program. We build it that way.</strong>",
    },
  ],

  testimonials: [
    { id: "cobox-adaa" },
    { id: "ubuntu-tribe-team" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What is social media management in a B2B / Web3 / fintech context?",
      a: "<strong>Social media management is the discipline of running organic presence across platforms where your audience actually lives — producing platform-native content, engaging authentically in relevant conversations, and measuring commercial outcomes.</strong> The work covers platform strategy, voice development, content production pipelines, community-style engagement operations, partner coordination, and paid amplification of organic hits. Specific platforms vary by audience: B2B fintech leans LinkedIn + X; Web3 native leans X + Farcaster; Asian consumer leans Instagram + TikTok + regional platforms.",
    },
    {
      q: "What drives the cost of a social program?",
      a: "<strong>Cost is driven by platform count, content volume per platform, engagement intensity, video production needs, language coverage, and paid-amplification budget.</strong> A single-platform X program with 20 posts per week plus engagement operations has a defined cost. Multi-platform programs with video production, multi-language content, and daily engagement scale meaningfully larger. We scope programs around specific deliverable volumes (number of posts per week per platform, engagement-response SLA, reporting cadence) rather than hourly billing, so clients know exactly what they're paying for and what they're getting — and can scale up or down based on what actually moves the needle in the first quarter.",
    },
    {
      q: "How do you measure social media success?",
      a: "<strong>Engagement rate, meaningful reach, conversion from social to product, share-of-voice in target conversations — not follower count as the primary KPI.</strong> Engagement rate (engagement / followers, normalised by post count) is a better proxy for real audience activity. Conversion tracking requires attribution infrastructure that ties social traffic to product events. We build reporting dashboards that surface the metrics tied to commercial outcomes, not the ones that only look good in isolation.",
    },
    {
      q: "Should I use AI to write social content?",
      a: "<strong>AI is a useful tool for ideation, outline, and first draft — but unedited AI content underperforms consistently, sounds generic, and often misses platform-native style expectations.</strong> Use AI as a productivity multiplier for human editors, not as a replacement. Posts that land reliably combine AI-assisted production with human judgment on framing, cultural context, platform fit, and brand voice. The specific editing that distinguishes high-performing social from average social tends to be the founder-familiar turn of phrase or the timely topical hook — neither of which AI reliably produces on its own. Our production pipeline uses AI wherever it speeds work without weakening quality, and human editors for everything that does.",
    },
    {
      q: "What's included in a full social program?",
      a: "<strong>Voice and strategy work, platform-native content production across target platforms, engagement operations (replies, participation in adjacent conversations, mention monitoring), partner account coordination, optional paid amplification of organic hits, and measurement dashboards connecting social to commercial metrics.</strong> What isn't included: paid-social-as-performance (separate from organic social; managed under performance marketing when scaled), and one-off creative projects beyond the ongoing content calendar. Programs typically include a founder-voice coaching component where senior leadership's personal accounts become part of the brand's distribution surface, since founder accounts often outperform brand-only accounts in direct-audience connection and outbound conversion.",
    },
    {
      q: "Which platforms should my brand be on?",
      a: "<strong>Depends entirely on where your buyers and community spend attention.</strong> B2B senior decision makers: LinkedIn plus X for category participation. Web3 native: X plus Farcaster plus platform-specific community chats. Consumer visual brand: Instagram plus TikTok plus Pinterest. Enterprise specialist: LinkedIn focused with long-form content. Crypto-dev builders: X plus specific Discord communities. We start with audience research to determine platform priority rather than defaulting to a 'be on everything' posture.",
    },
    {
      q: "Can founder-led accounts be part of the program?",
      a: "<strong>Yes — and for many brands, founder-led content is the strongest asset.</strong> A CEO's LinkedIn account or a CTO's X account often produces more engaged audience than the company handle because humans connect with specific humans more readily than with brand logos. We coordinate founder content as part of the program — ghost-writing only where the founder approves, more commonly editing their raw thoughts into publishable posts, and scheduling to match the cadence their voice actually supports.",
    },
    {
      q: "When should a team NOT invest in social media management?",
      a: "<strong>When your audience doesn't actually use social as a research or decision-making surface.</strong> Ultra-enterprise procurement teams, institutional investors in some categories, and highly regulated specialist audiences may not use social professionally. If your buyers decide via references and direct sales rather than social-media-informed research, direct sales and conferences produce better returns than social investment. Validate audience-platform fit before committing to serious social investment.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Social Media Management", href: "/services/marketing/social-media", active: true },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
    { label: "Community Building", href: "/services/marketing/community" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Branding & Design", href: "/services/marketing/branding" },
  ],

  finalCta: {
    light: "Social",
    bold: "that sounds like you, natively.",
    subtitle: "Each platform on its own terms. Engagement over broadcast. Measurement over vanity.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
