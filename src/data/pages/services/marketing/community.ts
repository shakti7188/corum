// /services/marketing/community — community building & management.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Starlight Protocol", firstUsedOn: "/services/marketing/community", industry: "defi", region: "global", note: "Lending protocol community grown from 3K to 85K across Discord and Telegram." });
registerCompany({ name: "Seafoam Social", firstUsedOn: "/services/marketing/community", industry: "web3", region: "apac", note: "Consumer Web3 social app community launch in Asia-Pacific." });
registerCompany({ name: "Hearthstone Games", firstUsedOn: "/services/marketing/community", industry: "gaming", region: "americas", note: "Web3 game pre-launch community targeting non-crypto gamers." });
registerCompany({ name: "Meridian Finance", firstUsedOn: "/services/marketing/community", industry: "fintech", region: "europe", note: "EU fintech ambassador program replacing paid-acquisition spend." });

export const page: PageData = {
  slug: "/services/marketing/community",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "community building agency",
  secondaryKeywords: [
    "crypto community management",
    "telegram community",
    "discord community management",
    "community growth",
    "ambassador program",
    "DAO community",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Community Building & Management Agency | Corum8",
    description:
      "Corum8 builds real communities on Discord, Telegram, X, and Farcaster. Active, engaged, conversion-driving — not bot-inflated vanity counts.",
    canonical: "https://corum8.com/services/marketing/community",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Community Building", href: "/services/marketing/community" },
  ],

  hero: {
    eyebrow: "Marketing · Community",
    headline: "We build real communities.",
    subtitle: "Discord, Telegram, X, Farcaster — active, engaged, organically grown.",
    sub:
      "Not paid-engagement theatre. Real members who show up, ask questions, convert, retain, and refer. Moderation infrastructure, ambassador programs, contributor pipelines, and the quiet operational work that turns community from a vanity count into a growth engine.",
    mediaToken: "hero.marketing",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds and manages communities for Web3, AI, fintech, and consumer products across Discord, Telegram, X/Twitter, Farcaster, and relevant emerging platforms. Work spans community strategy, platform setup, moderation and abuse management, content cadence, ambassador and contributor programs, events, and the measurement infrastructure that ties community engagement to commercial outcomes.",

  body: [
    {
      type: "Prose",
      heading: "Community is the highest-leverage marketing channel nobody measures properly",
      pullQuote: "Community members acquired cheaply retain longer than any paid channel. Nobody tracks the comparison rigorously.",
      body:
        "<strong>Most crypto projects brag about Discord and Telegram member counts.</strong> Most of those counts are meaningless. Bot-inflated servers, paid engagement farms, ghost members who joined for an airdrop and never returned — the raw count metric tells you almost nothing about whether the community actually does anything.\n\n" +
        "<em>Real community is a compounding marketing asset.</em> Members who convert to buyers. Buyers who refer other buyers. Contributors who become advocates. Advocates who become employees, moderators, ambassadors. Community turns single transactions into long relationships — which is why the products that get it right dramatically outperform equivalent products that don't.\n\n" +
        "The engineering of real community is unglamorous. It's picking the right platforms for the audience you actually have, not the platforms the last agency used. It's moderation discipline — catching spam, abuse, scams, and bot infiltration before they poison the atmosphere. It's content cadence that's sustainable across quarters, not burst-then-silence. It's ambassador programs where contributors get actual recognition, not just Discord roles. It's events — AMAs, workshops, community calls — that happen consistently because someone's job is making them happen.\n\n" +
        "<strong>We build communities this way.</strong> Slower to grow than paid-inflation tactics. More resilient over time. Measurably higher conversion and retention. The communities we build are the ones still active three years after launch — not the ones that peaked during a token event and cratered the week after.",
    },

    {
      type: "Definition",
      heading: "What community building actually covers",
      body:
        "<strong>Community building</strong> in the Web3/AI/fintech context is the deliberate development of an engaged audience that interacts with your product, with each other, and with your brand — typically on platforms like Discord, Telegram, X, Farcaster, and increasingly niche platforms like <strong>Circle</strong>, <strong>Mighty Networks</strong>, <strong>Geneva</strong>, and <strong>Guild.xyz</strong>.\n\n" +
        "The work splits across several phases. <strong>Community strategy</strong> — which platforms, what membership tiers, what value does the community provide to members, what goals for the brand. <strong>Platform setup and structure</strong> — server architecture, channel organisation, role hierarchy, bot stack, moderation rules. <strong>Moderation and safety</strong> — managing spam, scams, abuse, token-targeted phishing, and the constant influx of low-intent joiners. <strong>Content and programming</strong> — AMAs, community calls, contests, workshops, threads, ongoing conversation prompts. <strong>Ambassador and contributor programs</strong> — formal programs where trusted members become moderators, content creators, and growth agents. <strong>Measurement</strong> — engagement rates, conversion from community to product usage, referral patterns, retention of community members as customers.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a community program",
      enquiry: {
        hook: "Discord a ghost town?",
        heading: "Communities aren't hired. They're earned — usually in the boring months.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&auto=format&fit=crop&q=80",
        avatarName: "Alex M.",
        avatarRole: "Community Lead",
      },
      body:
        "Every program we run covers the same core modules. Specifics shift based on platform mix and product type.",
      subsections: [
        {
          heading: "1. Strategy and platform selection",
          body:
            "Audience-first platform selection. Crypto-native early adopters live on Telegram and X. Developer communities live on Discord and GitHub Discussions. Consumer products often work better on Farcaster, Instagram, or Reddit than on Discord. Asian audiences often concentrate on Telegram and Kakao. Japanese audiences on Twitter and LINE. We start from where the audience actually is, not where legacy playbooks say they should be.",
        },
        {
          heading: "2. Server architecture and infrastructure",
          body:
            "For Discord: role hierarchy, channel categories, permissions per role, bot stack (<strong>MEE6</strong>, <strong>Carl-bot</strong>, <strong>Statbot</strong>, <strong>Dyno</strong>, <strong>Sesh</strong>, <strong>Collab.Land</strong> for token gating), verification flow (<strong>Wick</strong>, <strong>Guild.xyz</strong>), anti-raid protection, phishing-detection bots (<strong>HAM</strong>), and onboarding flow. For Telegram: channel + group structure, admin tools, anti-spam bots (<strong>Shieldy</strong>, <strong>Combot</strong>), captcha gates, and moderation workflow. Infrastructure first — grown communities are only as safe as the infrastructure under them.",
        },
        {
          heading: "3. Moderation and safety operations",
          body:
            "Moderation is 24/7 coverage. We staff moderation across time zones with trained moderators (internal + trusted contractor network), escalation playbooks for specific incident types (coordinated raid, targeted phishing attack, coordinated spam, abuse complaints), and documented response times per severity. <em>A community without active moderation becomes a scam-attack surface within weeks.</em>",
        },
        {
          heading: "4. Content and engagement programming",
          body:
            "A community calendar: weekly AMAs with core team, bi-weekly community calls, monthly contest or initiative, daily conversation starters, ongoing threads around product milestones. Programming isn't ad-hoc — it's calendared like any content pipeline, with assigned owners and accountability. Consistency is the discipline.",
        },
        {
          heading: "5. Ambassador and contributor programs",
          body:
            "Formal programs where trusted community members earn recognition (titles, access, bounties, eventually paid work) for sustained contribution. We build ambassador programs with explicit tiers, advancement criteria, review cycles, and compensation — whether that's token rewards, fiat stipends, merchandise, or platform-level access. Well-run ambassador programs compound — early ambassadors become long-term advocates and sometimes full-time hires.",
        },
        {
          heading: "6. Events and campaigns",
          body:
            "AMAs with partners, developer workshops, community hackathons, onboarding events for new cohorts, IRL meetups at Token2049 / Consensus / Devcon / ETHDenver, seasonal campaigns tied to product milestones or market moments. Events create the shared experiences that convert casual members into engaged ones.",
        },
        {
          heading: "7. Measurement and attribution",
          body:
            "We track community engagement rate (active members / total members, not raw count), conversion from community to product usage, retention (do community members become customers and stay customers longer than non-community-acquired users), referral patterns (are community members recruiting others), and sentiment over time. Dashboards pull from <strong>Statbot</strong>, <strong>Common Room</strong>, <strong>Orbit</strong>, custom analytics, and direct product-database joins.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need serious community work",
      signals: [
        "Your Discord or Telegram member count is inflated but engagement is low — the community is inactive despite the raw number.",
        "You've suffered moderator burnout — the team members running community are also building the product and both suffer.",
        "Phishing attacks, scam DMs, and token-drainer posts are happening in your server regularly.",
        "You're pre-launch and community is your primary launch channel — you need infrastructure before the token event.",
        "Your customer-support load is high and community could deflect common questions if organised properly.",
        "Your paid-acquisition costs are rising and community-driven referral is underdeveloped as a channel.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a community program",
      body:
        "Community-program cost is driven by platform count, coverage hours, moderation intensity, ambassador-program scope, and event cadence.",
      factors: [
        {
          name: "Platform mix",
          body:
            "Single-platform (Discord only) is lightest. Multi-platform (Discord + Telegram + X + Farcaster) multiplies moderation, content, and reporting surfaces. Each platform has idiosyncrasies that don't transfer between them.",
        },
        {
          name: "Coverage hours",
          body:
            "Business-hours moderation in one region is light. 24/7 coverage across Asia, Europe, Americas requires a trained team working shifts. The more active the community, the more coverage hours needed.",
        },
        {
          name: "Moderation intensity",
          body:
            "Pre-launch / small community is manageable. Post-token-launch / viral-growth phase requires ramped moderation — scam-targeting spikes, phishing attempts multiply, coordinated raids happen. We staff elastically against expected intensity.",
        },
        {
          name: "Ambassador-program shape",
          body:
            "Informal role-based ambassador is simple. Formal multi-tier program with advancement criteria, stipends, and ongoing recognition is a full internal product with its own operations. The more serious the program, the more operational overhead.",
        },
        {
          name: "Event cadence",
          body:
            "Weekly AMA + monthly workshop is one cadence. Weekly AMAs + bi-weekly developer workshops + monthly IRL events + seasonal hackathons is an order of magnitude more. Event production is real work — planning, execution, follow-up content.",
        },
        {
          name: "Language coverage",
          body:
            "English-only is lightest. Adding Korean, Japanese, Chinese, Russian, Vietnamese, Turkish, Spanish, Portuguese, Arabic coverage adds language-native moderators, translation of content, and parallel community spaces in some cases.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on community programs",
      pitfalls: [
        {
          name: "Member count as the KPI",
          body:
            "Teams celebrate member count milestones — 10K, 50K, 100K — without measuring whether the members are active, real, or converting. Inflated counts attract more bots and more low-intent joiners, which further dilutes signal. Engagement rate is the correct metric, not raw count.",
        },
        {
          name: "Under-investment in moderation",
          body:
            "Communities without active moderation become spam, scam, and abuse surfaces — the atmosphere turns toxic, genuine members leave, and the server becomes a trash fire. Moderation is infrastructure, not overhead. Budget for it from day one.",
        },
        {
          name: "Ambassador programs without structure",
          body:
            "Granting 'ambassador' role to anyone who asks produces role-inflation without meaningful contribution signals. Ambassador programs need explicit tiers, advancement criteria, and real recognition — otherwise the title means nothing and fewer serious contributors engage.",
        },
        {
          name: "Burnout-driven team churn",
          body:
            "Having product engineers or founders run community is a short-term hack that becomes a long-term cost. They burn out, community engagement degrades when they're absent, and the product suffers from the dual load. Community is a specialist role; treat it as one.",
        },
        {
          name: "Paying for engagement",
          body:
            "Paid-comment services, paid-engagement farms, and coordinated-tweet payments produce short-term metric bumps and long-term trust damage. Platforms increasingly detect these patterns. Budget the money that would go to paid engagement on actual community programming instead.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we reach for",
      mediaToken: "topic.community",
      mediaSide: "right",
      body:
        "<strong>Discord:</strong> <strong>MEE6</strong>, <strong>Carl-bot</strong>, <strong>Dyno</strong>, <strong>Statbot</strong> for core management; <strong>Sesh</strong> for event scheduling; <strong>Collab.Land</strong> or <strong>Guild.xyz</strong> for token gating; <strong>Wick</strong> for anti-raid; <strong>HAM</strong> for phishing protection.\n\n" +
        "<strong>Telegram:</strong> <strong>Shieldy</strong>, <strong>Combot</strong> for moderation; custom CAPTCHA gates; <strong>Rose</strong> for advanced moderation; TL-specific analytics via <strong>Telegago</strong> or custom scrapers.\n\n" +
        "<strong>Cross-platform CRM:</strong> <strong>Common Room</strong>, <strong>Orbit</strong> for unified community-member tracking; <strong>DAOcentric</strong> for DAO-context; custom data infrastructure for large or complex programs.\n\n" +
        "<strong>Analytics:</strong> <strong>Statbot</strong> and native platform analytics; <strong>Common Room</strong> for cohort and member-level tracking; custom dashboards in <strong>Looker</strong>, <strong>Metabase</strong>, or <strong>Grafana</strong> tied to product-usage data.\n\n" +
        "<strong>Ambassador-program infrastructure:</strong> <strong>Guild.xyz</strong> for on-chain role gating; <strong>Dework</strong> for bounty and contribution tracking; <strong>Coordinape</strong> for peer-recognition distribution; <strong>Gitcoin Passport</strong> for Sybil resistance.\n\n" +
        "<strong>Event production:</strong> <strong>Luma</strong>, <strong>Partiful</strong>, <strong>Hopin</strong> for virtual events; on-chain event systems (<strong>POAP</strong>, <strong>Lens</strong>-native) where attendance proof matters; native Discord Stage / Telegram Live for in-platform audio.\n\n" +
        "<strong>Sentiment analysis:</strong> <strong>Brandwatch</strong>, <strong>Sprinklr</strong> for large-scale sentiment; custom LLM-based classifiers for crypto-specific slang and context.\n\n" +
        "<strong>Security and incident response:</strong> <strong>Fort</strong>, <strong>Wick</strong>, and custom Discord bots for raid protection; standardised incident-response playbooks for coordinated attacks.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on community programs",
      mediaToken: "topic.teamMeeting",
      mediaSide: "left",
      body:
        "We start with the <strong>audience map</strong> and the <strong>goal</strong>, not the platform. First two weeks cover: who the audience actually is (demographics, platforms they use, existing communities they're in), what the community should do for them (access, learning, recognition, status, commerce), and what the community should do for the brand (retention, referral, feedback, advocacy). That definition shapes everything downstream.\n\n" +
        "Our engagement model pairs a senior community strategist, a head moderator who owns day-to-day operations, a team of shift moderators covering the time zones the community spans, a content programmer (AMAs, events, contests), an ambassador-program lead for formal programs, and a data analyst for ongoing measurement.\n\n" +
        "We run programs as <strong>ongoing retainers</strong>, not one-off launches. Community is a compound asset — starting and stopping it loses most of the value. <em>Communities we've managed continuously for multiple years have retention and conversion rates that newly-started communities simply can't match.</em> The operational discipline is the product.",
    },

    {
      type: "UseCases",
      heading: "Community work we've shipped",
      items: [
        {
          company: "Starlight Protocol",
          stage: "Series B",
          region: "Global",
          situation:
            "Starlight is a DeFi lending protocol whose community was stuck at 3K members for 18 months after an early ambassador program collapsed. We rebuilt infrastructure (Discord architecture, moderation bots, anti-phishing), launched a structured three-tier ambassador program, and programmed weekly community calls, bi-weekly technical AMAs, and monthly governance-participation initiatives. 12 months later the community is at 85K active members with roughly 30% active-to-registered ratio — well above category norms.",
          outcomeNumber: "3K → 85K · ~30% active ratio",
          outcomeSecondary: "3-tier ambassador program · weekly AMA cadence live",
        },
        {
          company: "Seafoam Social",
          stage: "Pre-launch",
          region: "Southeast Asia",
          situation:
            "Seafoam is a consumer Web3 social app launching in Indonesia, Philippines, and Vietnam. Traditional Discord wasn't the right platform for consumer Asian markets — Telegram and Kakao dominated. We built Telegram channels per country, local-language moderators, and a country-ambassador program where local creators earned recognition and access. Pre-launch community hit 40K engaged members across three country channels and launch-week app install-conversion was tracked at roughly 28% from community.",
          outcomeNumber: "~28% community-to-install conversion",
          outcomeSecondary: "3 Telegram country channels · local-language mod teams live",
        },
        {
          company: "Hearthstone Games",
          stage: "Pre-launch",
          region: "United States",
          situation:
            "Hearthstone is a Web3 game whose community challenge was bringing in mainstream gamers — not crypto-audience. We built a Discord community structured around gaming concerns (game design feedback, playtest feedback, tournaments) rather than crypto-centric content. The game-community programming ran alongside a light token-economics track for crypto-curious members. Community grew to 50K with majority-gamer composition and a strong playtest-feedback loop that shaped the pre-launch build.",
          outcomeNumber: "50K community · gamer-majority composition",
          outcomeSecondary: "Discord built for playtest feedback · tournaments and design channels shipped",
        },
        {
          company: "Meridian Finance",
          stage: "Series A",
          region: "Germany / EU",
          situation:
            "Meridian's paid-acquisition costs had doubled year-over-year, making paid-only growth economically unsustainable. We built a formal EU-ambassador program with regional leads across Germany, France, Spain, and Italy, structured contributor pipelines with clear advancement criteria, and ongoing community-led content production. 9 months later, community-attributed signups represented roughly 35% of total new-user acquisition with meaningfully lower CAC than the paid channels it partially replaced.",
          outcomeNumber: "~35% of signups via community",
          outcomeSecondary: "Regional ambassador program across 4 EU markets live",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our community work, the discipline shows in retention and activity — not just growth. Members who join, stay, and convert. Moderation that keeps atmospheres productive. Ambassador programs that produce long-term contributors. Communities that are useful to members, not just useful to the brand.",
      stats: [
        { value: "500K+", label: "Community members under management" },
        { value: "25+", label: "Active community programs" },
        { value: "24/7", label: "Moderation coverage standard" },
        { value: "Zero", label: "Major uncontrolled raid incidents in last 24 months" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams build community with us",
      body:
        "We've been running community management since before Discord dominated the Web3 landscape — through IRC, Slack, early Telegram, the rise of Discord, and now the return of multi-platform (Discord + Telegram + Farcaster + X) strategies. <em>Our operational discipline comes from running communities continuously through multiple market regimes — bear markets, bull markets, incidents, algorithmic changes, platform policy shifts.</em>\n\n" +
        "We ship the full community stack under one roof: strategy, platform infrastructure, moderation operations, content programming, ambassador program design, event production, and measurement. One team, one operational playbook, one reporting framework. No handoff between a community consultancy and a moderation contractor and a content agency.\n\n" +
        "And we pair community with adjacent channels — PR provides the announcement drumbeat community amplifies, influencer partnerships produce creators who become community-aligned ambassadors, content production feeds community programming. <strong>Community is the retention layer under every other marketing channel. We build it that way.</strong>",
    },
  ],

  testimonials: [
    { id: "cobox-adaa" },
    { id: "ubuntu-tribe-team" },
    { id: "metarix-founder" },
  ],

  faqs: [
    {
      q: "What is community building?",
      a: "<strong>Community building is the deliberate development of an engaged audience that interacts with your product, each other, and your brand on platforms like Discord, Telegram, X, Farcaster, and niche alternatives.</strong> Real community work covers strategy, platform infrastructure setup, 24/7 moderation, content programming (AMAs, workshops, contests), ambassador and contributor programs, events, and measurement tying community engagement to commercial outcomes. It's distinct from social-media management — community lives inside spaces members own together, not platform feeds they passively consume.",
    },
    {
      q: "What drives the cost of a community program?",
      a: "<strong>Cost is driven by platform count, moderation coverage hours, moderation intensity, ambassador-program shape, event cadence, and language coverage.</strong> A single-platform Discord with business-hours moderation and monthly events is lighter than a multi-platform Discord + Telegram + X + Farcaster program with 24/7 coverage, structured multi-tier ambassadors, and weekly events across multiple languages. We scope based on what the community actually needs to accomplish, not a standard retainer template.",
    },
    {
      q: "How do you measure community success?",
      a: "<strong>Through engagement ratio (active members / total members), conversion from community to product usage, retention comparing community-acquired vs non-community-acquired customers, referral patterns (are members recruiting others), and sentiment over time — not raw member counts.</strong> Raw counts are easy to inflate and don't correlate with commercial outcomes. We build dashboards tied to product-database data so community metrics connect to revenue, retention, and LTV — which are the outcomes that matter for budget decisions.",
    },
    {
      q: "What's included in a full community program?",
      a: "<strong>Strategy and audience research, platform infrastructure (bots, roles, channels, verification), 24/7 moderation with trained staff, content and event programming calendar, ambassador and contributor program design and operations, measurement dashboards, and incident-response playbooks for raids, phishing attacks, and abuse escalation.</strong> What isn't included: the product itself (we manage the community around your product), and individual content creation beyond the programming calendar (marketing content falls under content-marketing scope).",
    },
    {
      q: "Discord or Telegram or both?",
      a: "<strong>Depends on audience.</strong> Crypto-native Western audiences often live on Discord and X. Asian crypto audiences concentrate on Telegram (and Kakao in Korea). Eastern European and MENA audiences heavy on Telegram. Consumer and non-crypto audiences often better-served by Farcaster, Instagram, Reddit, or platform-specific communities. Many serious programs run Discord + Telegram as the default, with X/Farcaster presence for the outbound-visibility layer. Pick where your audience actually lives, not where legacy playbooks say they should.",
    },
    {
      q: "How do you handle community incidents and attacks?",
      a: "<strong>Through documented incident-response playbooks per attack type and 24/7 moderation coverage capable of executing them.</strong> Common patterns: coordinated raid (silence channels, kick attackers, post all-clear), targeted phishing (warn members, update pinned, deploy scam-detection bots), token-drainer posts (remove immediately, report to platform, notify affected), coordinated spam (rate-limit, implement verification gates, review recent joins). Serious communities need these playbooks before they're needed — not improvised under attack pressure.",
    },
    {
      q: "What's an ambassador program and when do we need one?",
      a: "<strong>A structured program where trusted community members earn recognition (titles, access, bounties, sometimes paid work) for sustained contribution — moderating, creating content, onboarding newcomers, representing the brand at events.</strong> You need a formal program when informal contributor efforts start producing meaningful value and deserving contributors aren't getting recognised, when scaling moderation requires more trusted hands than you can hire, and when community-led growth is a viable acquisition channel. Don't build formal ambassadors when the community is too small to have genuinely distinguished contributors yet.",
    },
    {
      q: "When should a team NOT invest in community building?",
      a: "<strong>When your product doesn't benefit from collective-audience dynamics — single-user productivity tools, ultra-private enterprise products, products whose buyers are institutional procurement teams rather than individual users.</strong> Community works when members interacting with each other creates value (peer learning, user-to-user referral, governance participation, shared identity). If your product serves users in isolation and buyers decide in silos, community investment won't produce proportional returns. Other marketing channels are more efficient for those categories.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Community Building", href: "/services/marketing/community", active: true },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Exchange Listings", href: "/services/marketing/listing" },
  ],

  finalCta: {
    light: "Real community,",
    bold: "managed with discipline.",
    subtitle: "Moderation, programming, ambassadors — shipped as a continuous operation, not a campaign.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
