// /services/marketing/listing — CEX listing strategy & market making coordination.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Ember Token", firstUsedOn: "/services/marketing/listing", industry: "web3", region: "global", note: "Governance token listing across 8 CEXs in a phased rollout." });
registerCompany({ name: "Wavelet Protocol", firstUsedOn: "/services/marketing/listing", industry: "defi", region: "apac", note: "Post-launch tier-two CEX listings with coordinated liquidity." });
registerCompany({ name: "Obsidian Finance", firstUsedOn: "/services/marketing/listing", industry: "defi", region: "europe", note: "Stablecoin CEX listing campaign paired with institutional credibility play." });
registerCompany({ name: "Keystone Utility", firstUsedOn: "/services/marketing/listing", industry: "web3", region: "americas", note: "Utility token listings following mainnet-launch milestone." });

export const page: PageData = {
  slug: "/services/marketing/listing",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "exchange listing agency",
  secondaryKeywords: [
    "CEX listing strategy",
    "crypto exchange listing",
    "token listing services",
    "market making",
    "liquidity provision",
    "CoinMarketCap listing",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Exchange Listing Strategy & Market Making | Corum8",
    description:
      "Corum8 coordinates CEX listings, market-maker partnerships, and post-listing liquidity for token launches. Real exchange relationships, not list-my-token spam.",
    canonical: "https://corum8.com/services/marketing/listing",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Exchange Listings", href: "/services/marketing/listing" },
  ],

  hero: {
    eyebrow: "Marketing · Listings",
    headline: "We get tokens listed.",
    subtitle: "CEX listings, market makers, CoinMarketCap, CoinGecko — coordinated with launch.",
    sub:
      "Real exchange relationships, real market-maker introductions, real data-provider registrations. Listing is a process with specific requirements, specific timelines, and specific decision makers — not a form submission.",
    mediaToken: "hero.trading",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 runs exchange listing campaigns for token projects — coordinating tier-one and tier-two centralised exchange (CEX) applications, market-maker partnerships for liquidity provision, data provider registrations (CoinMarketCap, CoinGecko, Messari), and post-listing market support. Work covers application preparation, exchange-relationship coordination, MM negotiation, and the launch-window operations that determine whether a listing sustains volume or fades.",

  body: [
    {
      type: "Prose",
      heading: "Exchange listings are process, not mystery",
      pullQuote: "Tier-one exchanges list the teams who prepared properly. Tier-three exchanges list anyone who pays.",
      body:
        "<strong>The exchange-listing market has a reputation problem.</strong> Most of what circulates as 'listing services' is pay-for-placement on tier-three exchanges nobody trades on. The big listings — <strong>Binance</strong>, <strong>Coinbase</strong>, <strong>Kraken</strong>, <strong>OKX</strong>, <strong>Bybit</strong>, <strong>Bitfinex</strong>, <strong>Gate</strong>, <strong>KuCoin</strong> — don't sell listings. They select them.\n\n" +
        "<em>The teams that get listed on top-tier venues prepared for it.</em> They had completed legal compliance checks applicable to the exchange's jurisdictions. They had audited smart contracts. They had demonstrable user base or trading volume on DEXs that signalled real demand. They had signed market-maker partnerships before the listing. They had the right data-provider registrations (<strong>CoinMarketCap</strong>, <strong>CoinGecko</strong>) so listings would propagate to the broader discovery surface.\n\n" +
        "We run listing campaigns that treat them as the process they actually are. Application preparation per specific exchange's requirements. Relationship coordination with the decision makers at each exchange (not the sales team that fields unsolicited listing emails). Market-maker negotiation with tier-one MMs who work the venue. Data-provider registrations. And the post-listing launch-window operations that determine whether a listing develops real volume or shows up once and fades.\n\n" +
        "<strong>Listings that sustain volume are listings that were prepared for.</strong> We prepare for them.",
    },

    {
      type: "Definition",
      heading: "What listing services actually cover",
      body:
        "<strong>Exchange listing services</strong> cover the strategic, operational, and relationship work that gets a token listed on appropriate centralised exchanges with supporting liquidity and discovery infrastructure.\n\n" +
        "<strong>CEX listing applications</strong> — completed applications to specific target exchanges with their specific documentation requirements, technical specifications, legal opinions, and audit materials.\n\n" +
        "<strong>Exchange-relationship coordination</strong> — direct communication with decision makers at target exchanges, managing timelines, responding to diligence requests, negotiating listing terms including any listing fees and MM commitments required.\n\n" +
        "<strong>Market-maker partnerships</strong> — introducing projects to tier-one MMs (<strong>Wintermute</strong>, <strong>GSR</strong>, <strong>Keyrock</strong>, <strong>Flowdesk</strong>, <strong>Cumberland</strong>, regional specialists) and negotiating the market-making agreement that underpins listing liquidity.\n\n" +
        "<strong>Data-provider registrations</strong> — <strong>CoinMarketCap</strong>, <strong>CoinGecko</strong>, <strong>Messari</strong>, and the smaller data sites. Without CMC / CoinGecko registration, listings don't propagate to the broader crypto discovery ecosystem.\n\n" +
        "<strong>Launch-window operations</strong> — coordinating the listing announcement, press coverage, community activation, and initial trading-volume monitoring that determines whether a listing develops sustained demand.\n\n" +
        "<strong>Post-listing monitoring</strong> — tracking order-book depth, trading volume, cross-venue arbitrage opportunities, MM performance against contract terms.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a listing campaign",
      body:
        "Every campaign we run shares the same core modules.",
      subsections: [
        {
          heading: "1. Exchange targeting and sequencing",
          body:
            "Not every token should target Binance first. Sometimes tier-two exchanges with strong regional positioning (<strong>Gate</strong> for Asia, <strong>Bitget</strong> for global derivative volume, <strong>KuCoin</strong> for retail altcoin discovery) are better launch venues than prestige tier-ones. We map target exchanges based on the project's buyer audience, regulatory posture, expected trading volume, and what exchanges will actually list. Sequencing matters — one successful listing generates traction that makes subsequent listings easier.",
        },
        {
          heading: "2. Application preparation",
          body:
            "Each major exchange has its own application. <strong>Binance's BNB Chain listings vs main-exchange listings</strong> have different paths. <strong>Coinbase's listing framework</strong> is notoriously strict on asset-classification (security vs commodity). <strong>OKX</strong> and <strong>Bybit</strong> have their own processes. We prepare applications with: complete token documentation, audited smart-contract reports, legal opinions (typically US / UK / EU jurisdictions), team KYC, financial disclosures, tokenomics documentation, use-case documentation, community-metrics evidence.",
        },
        {
          heading: "3. Relationship management",
          body:
            "Applications sitting in inboxes are applications that don't get reviewed. We use our direct relationships with listing teams at target exchanges to move applications through review, respond to diligence questions promptly, and surface edge cases before they become blockers. These relationships were built over years of past engagements — they're why our applications move faster than cold-submitted applications on the same merit.",
        },
        {
          heading: "4. Market-maker coordination",
          body:
            "Most tier-one exchanges require or strongly prefer signed market-maker commitments before listing. We coordinate introductions to tier-one MMs, help projects evaluate MM proposals (spread commitments, size commitments, pricing), and negotiate terms. For smaller projects where tier-one MMs don't make sense economically, we coordinate regional MM partnerships and liquidity-provision alternatives.",
        },
        {
          heading: "5. Data-provider registrations",
          body:
            "<strong>CoinMarketCap</strong> and <strong>CoinGecko</strong> registrations need to happen concurrent with exchange listings — otherwise the trading data doesn't propagate to the major discovery sites. We prepare the required documentation for each (often requires exchange confirmation of listing, token supply disclosures, contract addresses, team verification), submit, and follow up until registrations process.",
        },
        {
          heading: "6. Launch-window operations",
          body:
            "The listing day itself is a coordinated operation: exchange announces listing at specific time, we coordinate with PR to announce simultaneously to trade press, community notification goes out, influencer partners amplify, initial trading-volume monitoring catches issues early. A well-executed listing window produces significantly better sustained volume than an uncoordinated one.",
        },
        {
          heading: "7. Post-listing monitoring and optimisation",
          body:
            "Weekly monitoring of trading volume, order-book depth, cross-venue arbitrage, MM performance versus contract commitments. When issues surface (MM not meeting spread commitments, unusual volume patterns suggesting wash trading or manipulation), we engage with the relevant parties to resolve. Listings that need follow-up listings (adding additional exchanges after establishing track record on the first) get coordinated continuously.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals a listing campaign is the right investment",
      signals: [
        "You're launching a token and tier-one CEX listings are part of the go-to-market plan.",
        "You listed on tier-three exchanges that haven't produced meaningful volume and want to move up the exchange hierarchy.",
        "You need market-maker partnerships and don't have direct relationships with tier-one MMs.",
        "You're listed on DEXs but need CEX presence to reach retail audiences and institutional counterparties that don't self-custody.",
        "You've submitted listing applications yourself and they've sat unanswered for months.",
        "You need CoinMarketCap and CoinGecko registrations handled properly as part of the overall listing plan.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a listing campaign",
      body:
        "Campaign cost is driven by exchange tier, number of target exchanges, market-maker scope, and timeline flexibility.",
      factors: [
        {
          name: "Exchange tier target",
          body:
            "Tier-one listings (Binance, Coinbase, Kraken, OKX, Bybit) require the most preparation and the most established project credentials. Tier-two listings (Gate, KuCoin, Bitget, Huobi, Bitfinex) are achievable earlier. Tier-three listings are mostly not worth pursuing — minimal volume, minimal discovery benefit.",
        },
        {
          name: "Number of target exchanges",
          body:
            "A single tier-one listing is a focused campaign. A phased rollout across 5–8 exchanges over 6 months is a much larger coordination effort with sequenced timing.",
        },
        {
          name: "Market-maker scope",
          body:
            "A single MM for primary venues is simpler. Multiple MMs across multiple venues with different spread commitments per venue is a multi-party coordination project with ongoing monitoring.",
        },
        {
          name: "Legal and compliance preparation",
          body:
            "Projects with existing legal opinions and audited smart contracts move faster. Projects that need to generate those materials pre-application add weeks or months to timeline. Coinbase-tier compliance is particularly demanding.",
        },
        {
          name: "Regional focus",
          body:
            "Global listings versus regional focus shape exchange selection. Asian-heavy rollout prioritises different exchanges than Western-heavy. Retail-heavy versus institutional-heavy also shapes venue selection.",
        },
        {
          name: "Listing fees reality",
          body:
            "Most tier-one exchanges charge listing fees ranging meaningfully based on project tier and market conditions — fees fluctuate and are genuinely case-specific. We provide realistic expectations on fee ranges during strategy work rather than promising outcomes before the specifics are known.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on listing campaigns",
      pitfalls: [
        {
          name: "Chasing tier-one listings prematurely",
          body:
            "Projects trying to list on Binance before they have product traction, community engagement, or DEX volume get declined — and tier-one declines often affect subsequent applications at other venues. Build demand signals first, then pursue tier-one.",
        },
        {
          name: "Listing without MM commitment",
          body:
            "A listing that goes live with thin order books and no market-making commitment fades within weeks as the absence of liquidity kills trading interest. MM partnerships must be signed before listing, not after.",
        },
        {
          name: "Cold-submitting applications",
          body:
            "Applications submitted through public forms without established relationships sit indefinitely. Applications moved through known decision-makers move on predictable timelines. Relationship-driven submission is the difference between 'listing this quarter' and 'listing unclear.'",
        },
        {
          name: "Ignoring data-provider registrations",
          body:
            "Getting listed on Binance without a corresponding CoinMarketCap registration means the listing doesn't fully propagate to the broader discovery surface. CMC and CoinGecko need to be in-progress concurrent with listing applications.",
        },
        {
          name: "No launch-window coordination",
          body:
            "Listings announced with minimal coordinated support produce soft launches with low sustained volume. The listing window requires coordinated PR, community activation, and influencer amplification to convert listing moment into sustained demand.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The relationships and tooling we work with",
      mediaToken: "topic.tradingScreen",
      mediaSide: "right",
      body:
        "<strong>Tier-one CEX relationships:</strong> direct working relationships with listing teams at Binance, Coinbase, Kraken, OKX, Bybit, KuCoin, Bitget, Gate, Huobi, Bitfinex, WhiteBIT, Bittrex-successor venues, plus regional exchanges (Upbit, Bithumb for Korea; BitFlyer for Japan; WazirX for India).\n\n" +
        "<strong>Market-maker relationships:</strong> tier-one (Wintermute, GSR, Keyrock, Flowdesk, Cumberland, B2C2), mid-tier (DWF Labs, Kairon Labs, Amber Group, Acheron Trading), regional specialists (Korean, Japanese, Middle Eastern MMs).\n\n" +
        "<strong>Data providers:</strong> <strong>CoinMarketCap</strong> and <strong>CoinGecko</strong> as mandatory; <strong>Messari</strong> for institutional discovery; <strong>Nomics</strong>, <strong>CryptoCompare</strong>, <strong>DefiLlama</strong> for category-specific inclusion.\n\n" +
        "<strong>Exchange-listing documentation:</strong> audited smart-contract reports from <strong>CertiK</strong>, <strong>OpenZeppelin</strong>, <strong>Trail of Bits</strong>, <strong>Quantstamp</strong>, <strong>Hacken</strong>; legal opinions from specialised crypto law firms per jurisdiction; team KYC and disclosure documentation.\n\n" +
        "<strong>Post-listing monitoring:</strong> <strong>Kaiko</strong>, <strong>CoinGecko Terminal</strong> for cross-exchange volume tracking; <strong>Arkham</strong>, <strong>Nansen</strong> for wallet-activity patterns; custom dashboards for spread-monitoring and MM-performance-against-contract.\n\n" +
        "<strong>Launch-window tools:</strong> <strong>PR Newswire</strong> / <strong>Chainwire</strong> for coordinated distribution; internal CRM for exchange-communication tracking; cross-team Slack / Telegram channels for real-time coordination on listing day.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on listing campaigns",
      mediaToken: "topic.candleChart",
      mediaSide: "left",
      body:
        "We start with an <strong>exchange-readiness audit</strong>. First two weeks: what's the current project state (community, product, on-chain metrics, legal completeness), what exchanges would realistically list the project today, what gaps would need closing before higher-tier applications, what timeline the project has for listing relative to token launch or broader go-to-market.\n\n" +
        "Our engagement model pairs a senior listing strategist (manages exchange relationships and application strategy), a technical documentation lead (prepares audit and technical-specification materials), a market-maker-liaison (handles MM introductions and contract negotiation), a compliance coordinator (works with legal counsel to produce required opinions), and a launch-operations lead for the listing-day window.\n\n" +
        "We run campaigns against <strong>specific exchange sequences</strong> rather than 'list everywhere simultaneously.' <em>Successful listings compound — the second exchange is easier to secure after the first shows sustained volume.</em> Sequence planning considers which exchanges are strategic first listings, which follow-on listings build on that momentum, and which to postpone until the project has more traction.",
    },

    {
      type: "UseCases",
      heading: "Four listing campaigns, four different shapes",
      items: [
        {
          company: "Ember Token",
          stage: "Post-launch",
          region: "Global",
          situation:
            "Ember is a governance token that launched on DEXs and needed a coordinated tier-one CEX rollout across 8 exchanges in a 90-day window. We built the phased sequence — two tier-two exchanges first to establish volume history, then two tier-one listings leveraging that track record, then four additional exchanges propagating the initial momentum. MM partnerships signed with two tier-one MMs for primary venues. Listing campaign produced sustained spot volume meaningfully higher than what DEX-only trading had delivered.",
          outcomeNumber: "8 CEX listings · 90 days",
        },
        {
          company: "Wavelet Protocol",
          stage: "Post-mainnet",
          region: "Asia-Pacific",
          situation:
            "Wavelet is a DeFi protocol whose community concentrated in Asia-Pacific markets. We prioritised Asian-retail-heavy exchanges (Gate, KuCoin, Bitget, Bybit) rather than Western tier-ones. Paired listings with regional PR and influencer amplification in local languages. Asian trading volume contributed majority of token's trading activity within the first quarter — materially better product-market fit than a Western-exchange-first strategy would have produced.",
          outcomeNumber: "Majority volume from Asian venues Q1",
        },
        {
          company: "Obsidian Finance",
          stage: "Stablecoin launch",
          region: "Europe / Switzerland",
          situation:
            "Obsidian is a regulated European stablecoin where institutional credibility was as important as retail access. We prioritised institutional-relevant listings — specific Kraken pair, OKX institutional liquidity pool, integration with Bridge's stablecoin-settlement rails — before retail-facing tier-ones. The listing strategy matched the product's positioning: serious institutional-grade product with retail availability as secondary.",
          outcomeNumber: "Institutional-credible listing progression",
        },
        {
          company: "Keystone Utility",
          stage: "Post-mainnet",
          region: "Americas",
          situation:
            "Keystone is a utility token for a consumer product whose mainnet launch generated genuine retail interest. We timed the listing campaign to land the first CEX within two weeks of mainnet launch to capture the attention window. First listing was Bybit (fast response time, retail-friendly), followed by Gate and KuCoin for altcoin-community reach, then Coinbase application leveraging the demonstrated track record. Coinbase listing secured four months post-mainnet — fast for a utility token in 2026.",
          outcomeNumber: "Coinbase listing 4 months post-mainnet",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our listing work the discipline shows in sustained-volume listings rather than one-off listing announcements. Projects that got on tier-one venues because they were prepared for it. Market-maker partnerships that produced real liquidity. Launch windows that converted listing moments into sustained trading activity.",
      stats: [
        { value: "100+", label: "Successful CEX listings coordinated" },
        { value: "15+", label: "Direct tier-one exchange relationships" },
        { value: "Tier-one", label: "MM partnerships routine" },
        { value: "CMC + CoinGecko", label: "Standard on every listing" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams run listings with us",
      body:
        "We've been coordinating exchange listings since 2016 — through every major bull and bear cycle, through multiple exchange collapses and consolidations, through the tier-one listing playbook's evolution. <em>Our exchange relationships were built during years when those relationships mattered most, and have sustained through every platform shift since.</em>\n\n" +
        "We ship the full listing stack under one roof: strategy, application preparation, relationship management, MM coordination, data-provider registrations, launch operations, and post-listing monitoring. One team, one application pipeline, one listing-day operations runbook. No handoff between a 'listing consultant,' a separate MM-introduction firm, and a PR agency.\n\n" +
        "And we pair listing coordination with the adjacent marketing work a listing needs — PR for the listing announcement, influencer amplification for the launch window, community programming for the trading-interest follow-through. <strong>A listing without supporting marketing produces soft launches. We build both.</strong>",
    },
  ],

  testimonials: [
    { id: "cashaa-kumar" },
    { id: "metarix-founder" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What are exchange listing services?",
      a: "<strong>Exchange listing services coordinate the strategic, operational, and relationship work required to list a token on appropriate centralised exchanges (CEXs) with supporting liquidity and discovery infrastructure.</strong> Work covers exchange targeting and sequencing, application preparation, direct relationship management with exchange listing teams, market-maker partnerships, data-provider registrations (CoinMarketCap, CoinGecko, Messari), launch-window operations, and post-listing monitoring. It's a process with specific requirements — not a form submission or a pay-for-placement transaction.",
    },
    {
      q: "What drives the cost of a listing campaign?",
      a: "<strong>Cost is driven by exchange-tier targets, number of exchanges, market-maker scope, legal/compliance preparation, regional focus, and exchange listing fees themselves.</strong> A single tier-two listing is lighter than a phased tier-one rollout across eight exchanges with multiple MM partnerships. Exchange listing fees vary meaningfully by tier and project; we provide realistic ranges during strategy work rather than promising specific outcomes before the exchange specifics are known.",
    },
    {
      q: "Can you guarantee a Binance listing?",
      a: "<strong>No credible firm can — Binance and other tier-one exchanges make listing decisions based on their own criteria, not on vendor relationships.</strong> What we can do: prepare the best-possible application, route it through established relationships, ensure all documentation meets their requirements, and advocate for the project during review. Firms promising specific tier-one outcomes are either running pay-for-placement scams or misrepresenting the reality of how tier-one listings work.",
    },
    {
      q: "What's included in a full listing campaign?",
      a: "<strong>Exchange-readiness audit, target-exchange list and sequencing, application preparation per specific exchange requirements, relationship management with exchange listing teams, market-maker introductions and contract negotiation coordination, data-provider registrations (CMC, CoinGecko, Messari), launch-window operations with coordinated PR and community, and post-listing monitoring of trading volume and MM performance.</strong> What isn't included: exchange listing fees themselves (paid to exchanges), MM retainer fees (paid to market makers), and legal counsel fees (paid to client's legal firm) — these are direct costs between the project and the relevant counterparties.",
    },
    {
      q: "Do we need a market maker?",
      a: "<strong>For tier-one and most tier-two listings, yes — most exchanges either require or strongly prefer signed MM commitments before listing.</strong> A listing going live with no active market maker produces thin order books that kill trading interest within weeks. Exception: very large projects with massive demonstrated DEX volume sometimes secure listings without formal MM partnerships if the exchange believes organic liquidity will fill the role. Most serious listing campaigns include MM coordination as core scope.",
    },
    {
      q: "How long does an exchange listing take?",
      a: "<strong>Realistic timelines vary significantly by exchange — some tier-two exchanges can list within weeks once application is complete; tier-one exchanges typically take months.</strong> Application preparation itself takes weeks to months depending on the project's starting documentation. Review cycles at major exchanges run 2–6 months typically. Well-prepared applications move faster than cold-submitted ones. We build timelines into the overall go-to-market plan with realistic windows per exchange — not single promised dates we can't control.",
    },
    {
      q: "What about CoinMarketCap and CoinGecko?",
      a: "<strong>CoinMarketCap and CoinGecko registrations are mandatory for any serious token launch — they're the primary discovery surfaces for crypto-asset data.</strong> Without them, price data, trading volume, and exchange listings don't propagate to most crypto research tools, portfolio trackers, or news coverage. We coordinate these registrations concurrent with exchange listings, handling the submission documentation (token metadata, exchange confirmation, team verification, supply disclosures) and following up through processing.",
    },
    {
      q: "When should a team NOT prioritise CEX listings?",
      a: "<strong>When the token doesn't have genuine demand signals yet — listings on tier-one exchanges before the project has community engagement, DEX volume, or product traction typically get declined, and decline damages subsequent applications.</strong> Build the demand signals first (community, DEX volume, product usage, media coverage), then pursue exchange listings. Also: if the token is better served by DEX-only liquidity and the project is DeFi-native with no retail-CEX audience, CEX listings may add cost without meaningful benefit.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Exchange Listings", href: "/services/marketing/listing", active: true },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Community Building", href: "/services/marketing/community" },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
    { label: "Exchange Development", href: "/services/development/exchange" },
  ],

  finalCta: {
    light: "Listings",
    bold: "that sustain volume.",
    subtitle: "Real relationships, real MMs, real launch operations — coordinated end-to-end.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
