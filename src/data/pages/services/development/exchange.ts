// /services/development/exchange
// Reference page — voice calibration page for Wave 1. Full protocol depth.
// Template: ServiceCluster.  Primary keyword: crypto exchange development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

// Register invented companies used on this page (prevents reuse elsewhere).
registerCompany({ name: "Meridian Exchange", firstUsedOn: "/services/development/exchange", industry: "exchange", region: "apac", note: "Series A hybrid CEX-DEX, Singapore." });
registerCompany({ name: "Halcyon Markets", firstUsedOn: "/services/development/exchange", industry: "exchange", region: "europe", note: "EU-licensed perpetuals venue." });
registerCompany({ name: "Kasbah Trade", firstUsedOn: "/services/development/exchange", industry: "exchange", region: "mea", note: "VARA-licensed spot CEX for MENA pairs." });
registerCompany({ name: "Aurelia Capital", firstUsedOn: "/services/development/exchange", industry: "exchange", region: "global", note: "Institutional OTC desk with on-book execution." });
registerCompany({ name: "Sable Exchange", firstUsedOn: "/services/development/exchange", industry: "exchange", region: "africa", note: "Pan-African DEX aggregator." });

export const page: PageData = {
  slug: "/services/development/exchange",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "crypto exchange development",
  secondaryKeywords: [
    "cryptocurrency exchange development",
    "CEX development",
    "DEX development",
    "white label crypto exchange",
    "exchange matching engine",
    "crypto exchange development company",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Crypto Exchange Development — CEX, DEX & Hybrid | Corum8",
    description:
      "Corum8 builds production crypto exchanges — matching engines, wallet stacks, compliance, and liquidity. CEX, DEX, and hybrid venues engineered for real load.",
    canonical: "https://corum8.com/services/development/exchange",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/development" },
    { label: "Development", href: "/services/development" },
    { label: "Exchange Development", href: "/services/development/exchange" },
  ],

  hero: {
    eyebrow: "Development · Exchanges",
    headline: "We build crypto exchanges.",
    subtitle: "CEX, DEX, and hybrid — engineered for the load you actually get.",
    sub:
      "Matching engines, multi-chain wallets, compliance pipelines, market-maker integrations, risk and surveillance, and the ops surfaces your team will live in — shipped by one team, not five vendors.",
    mediaToken: "hero.exchange",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds production crypto exchanges — centralized, decentralized, and hybrid. Core components include a deterministic matching engine, multi-chain wallet and custody infrastructure, KYC and AML tooling, market-maker and liquidity integrations, risk surveillance, and admin surfaces. We ship the full stack, not just a front end, so projects stay up under real load.",

  body: [
    // --- Opening context -------------------------------------------------------
    {
      type: "Prose",
      heading: "The exchange market in 2026 is not the one people remember from 2021",
      pullQuote: "The bar for a credible launch is much higher than it used to be.",
      pullAttrib: "Corum8 engineering",
      body:
        "Volume is still huge. Competition is brutal. <strong>The bar for a credible launch is much higher than it used to be.</strong>\n\n" +
        "A few years ago you could stand up a white-label exchange, plug in a third-party matching engine, and point a community at a landing page. That path still exists. <em>It mostly fails.</em> Users now expect <strong>Binance-grade UX</strong>, <strong>Coinbase-grade compliance posture</strong>, and the settlement finality of a venue that can actually handle its own order book.\n\n" +
        "The reality is that an exchange is a distributed-systems product with a trading-floor operator sitting on top of it. Every part has to work — <strong>the matching engine</strong>, <strong>the wallet infrastructure</strong>, <strong>the compliance pipeline</strong>, <strong>the liquidity and market-making integrations</strong>, <strong>the risk and surveillance layer</strong>, and <strong>the admin surfaces</strong> your ops team lives in. Get any one of those wrong and the whole product is a liability.\n\n" +
        "We build exchanges for teams that know this. Some are launching their first venue. Some are migrating away from a white-label that stopped scaling. Some are institutional desks that need on-book execution without retail exposure. The through-line: they all want a partner who <em>has shipped the pieces before</em>, not a vendor who is about to learn on their money.",
    },

    // --- Definition ------------------------------------------------------------
    {
      type: "Definition",
      heading: "What crypto exchange development actually covers",
      pullQuote: "An exchange is at least seven products fused together. Teams who've built one or two usually underestimate the other five.",
      body:
        "<strong>Crypto exchange development</strong> is the end-to-end build of a venue where users — retail, institutional, or both — can trade digital assets. It is not one product. It is <strong>at least seven products fused together</strong>, and a software team that has only built one or two of them usually underestimates the other five.\n\n" +
        "Exchanges split into three broad categories. <strong>Centralized exchanges (CEXes)</strong> hold user funds in operator-controlled wallets and run their own matching engine — <strong>Binance</strong>, <strong>Coinbase</strong>, <strong>Kraken</strong>, <strong>OKX</strong>, <strong>Bybit</strong>. <strong>Decentralized exchanges (DEXes)</strong> let users trade non-custodially via smart contracts — <strong>Uniswap</strong>, <strong>Curve</strong>, <strong>GMX</strong>, <strong>dYdX</strong> (post v4 migration). <strong>Hybrid exchanges</strong> combine off-chain matching with on-chain settlement or custody — <strong>Vertex Protocol</strong>, <strong>Injective</strong>, and much of the newer perpetuals landscape.\n\n" +
        "Each category has different trust assumptions, regulatory surfaces, performance ceilings, and liquidity dynamics. <em>Picking the right one is a product decision, not a technology decision.</em> We help teams make that call before we write a line of code — because building the wrong category of exchange is <strong>the most expensive mistake available to a founder</strong> in this space.",
    },

    // --- Visual anchor: exchange UI mockup -----------------------------------
    {
      type: "ExchangeMockup",
      heading: "What we ship, visually",
      caption:
        "Illustrative — not a live market. Our production stacks render the same surfaces with real depth, TradingView charting, and sub-millisecond streaming APIs over WebSocket and FIX.",
      pair: "BTC / USDT",
      last: "67,842.50",
      change: "+2.14%",
    },

    // --- Deep breakdown --------------------------------------------------------
    {
      type: "DeepBreakdown",
      heading: "Anatomy of an exchange build",
      enquiry: {
        hook: "Exchange stalling?",
        heading: "White-label demos look great. Production usually breaks them.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80",
        avatarName: "Ravi S.",
        avatarRole: "Exchange Architect",
      },
      body:
        "Every exchange we build shares a core architecture. The specifics shift based on CEX versus DEX versus hybrid, but the modules are the same — and if any one of them is weak, the venue doesn't survive contact with real users.",
      subsections: [
        {
          heading: "1. The matching engine",
          body:
            "This is the core. It ingests orders, maintains the order book, matches bids to asks, and emits trades. <strong>A matching engine that performs at 10K TPS in a demo can collapse at 40K during a launch week</strong> — we have seen it repeatedly. We build matching engines in <strong>Rust</strong> when latency matters and in <strong>Go</strong> when throughput and horizontal scaling matter more. Order types (<em>limit</em>, <em>market</em>, <em>stop</em>, <em>iceberg</em>, <em>post-only</em>, <em>reduce-only</em>), price-time priority, and deterministic replay are all table-stakes. What separates a credible engine from a toy is how it behaves under burst load, how cleanly it recovers from a replica failover, and whether its trade feed is <strong>actually reproducible</strong> for compliance and surveillance teams.",
        },
        {
          heading: "2. Wallet and custody infrastructure",
          body:
            "Users deposit. The exchange has to hold those funds, move them between hot and cold wallets, support withdrawals without bleeding the hot wallet, and rotate keys without losing sleep. For CEXes we build with <strong>MPC custody</strong> (<strong>Fireblocks</strong>-style split-key schemes, or threshold-signature schemes in the <strong>ZenGo</strong> lineage) as the default, because <em>single-sig hot wallets are an incident waiting to happen.</em> Multi-chain support is not optional anymore — a useful CEX needs <strong>Bitcoin, Ethereum, Solana, TON, Tron, Polygon, BNB Chain</strong>, and enough flexibility to add new chains as listings demand. DEXes have different problems: wallet-connect UX, gas sponsoring, and session-key management — especially on L2s. Hybrid venues have to solve both.",
        },
        {
          heading: "3. KYC, AML, and compliance pipeline",
          body:
            "<em>This is where white-labels quietly fail.</em> A compliance pipeline has three jobs: verify identity at onboarding (<strong>Sumsub</strong>, <strong>Jumio</strong>, <strong>Onfido</strong>), monitor transactions against sanctions and chain-analytics lists (<strong>Chainalysis</strong>, <strong>Elliptic</strong>, <strong>TRM Labs</strong>), and produce auditable reports for regulators (<strong>VARA</strong>, <strong>FCA</strong>, <strong>MAS</strong>, <strong>MiCA</strong> authorities). None of that is a plug-in. It is a pipeline with explicit <strong>state machines, decision logs, and operator surfaces</strong>. We build the pipeline so your compliance team can actually work inside it — instead of chasing symptoms through three vendor dashboards.",
        },
        {
          heading: "4. Liquidity and market-maker integrations",
          body:
            "<strong>An exchange without liquidity is a landing page.</strong> We wire in market-maker APIs (<strong>Wintermute</strong>, <strong>GSR</strong>, <strong>Keyrock</strong>, <strong>B2C2</strong>, <strong>Cumberland</strong> patterns, or smaller regional MMs), build internal liquidity mirroring so the book looks healthy on pairs before real flow arrives, and design the fee structure so MMs actually want to quote. For DEXes the equivalent is liquidity-pool architecture, concentrated-liquidity strategies à la <strong>Uniswap v3</strong>, and LP incentive programs <em>that don't cannibalize your treasury</em>.",
        },
        {
          heading: "5. Risk, surveillance, and ops",
          body:
            "Position limits, leverage rules, margin calls, liquidation engines, wash-trading detection, layering and spoofing surveillance, circuit breakers. <strong>This layer exists so your exchange doesn't blow up during an event nobody anticipated.</strong> We design it with the ops team who will actually use it — because <em>a surveillance dashboard nobody looks at is worse than no dashboard</em>.",
        },
        {
          heading: "6. Admin surfaces and tooling",
          body:
            "Your ops team needs to freeze withdrawals, flag suspicious accounts, approve listings, rotate keys, cut off markets during flash events, and produce compliance reports at 3am on a Saturday. <strong>The admin console is not a back-of-the-napkin project — it is arguably the most important UI in the venue.</strong> We design it with the people who will live in it, not for screenshots.",
        },
        {
          heading: "7. The client surfaces — web, mobile, API",
          body:
            "The part everyone focuses on. We build the trading UI with real order-book depth, <strong>TradingView</strong> charting, native mobile apps on iOS and Android when the user base warrants it, and <strong>REST, WebSocket, and FIX</strong> APIs for algo traders and market makers. The design target: <em>a professional trader can use your exchange without reaching for a third-party terminal.</em>",
        },
      ],
    },

    // --- Signals ---------------------------------------------------------------
    {
      type: "SignalsYouNeedThis",
      heading: "Signals you actually need to build — not white-label",
      signals: [
        "You are targeting regulated markets (VARA, MAS, FCA, MiCA) and need the compliance pipeline to be auditable end-to-end.",
        "You are building something white-labels don't support — exotic derivatives, structured products, institutional OTC flows, novel custody models.",
        "You have a listings and product roadmap that depends on fast iteration, and every feature request becoming a vendor ticket is a deal-breaker.",
        "Your tokenomics or revenue model requires control over the matching engine, fee tiering, or liquidity incentives that white-labels won't expose.",
        "You have raised enough capital that the multi-year TCO of a white-label — license fees, revenue shares, customization costs — exceeds a custom build.",
        "Your team has the engineering leadership to own a complex systems product post-launch. If that is not true, a white-label is the right answer even if the optics are worse.",
      ],
    },

    // --- Decision factors ------------------------------------------------------
    {
      type: "DecisionFactors",
      heading: "What actually drives scope and budget on an exchange build",
      body:
        "We get asked about cost and timeline on every first call. The honest answer is that both depend on a handful of decisions you make early, and those decisions move the envelope by 10x in either direction. Here is what really moves the number.",
      factors: [
        {
          name: "Category: CEX, DEX, or hybrid",
          body:
            "Fully custodial CEXes are the heaviest build because you own wallet infrastructure, compliance, and counterparty risk. DEXes shift complexity into smart contracts and oracle design. Hybrids carry the worst of both in some ways — on-chain settlement with off-chain matching is elegant but requires MEV resistance and a settlement layer that actually finalizes.",
        },
        {
          name: "Asset coverage",
          body:
            "Ten spot pairs on Ethereum is one build. Forty pairs across eight chains plus perpetuals plus options is another. Each additional chain adds wallet integration, address validation, RPC redundancy, and compliance data feeds. Each additional product class (spot → margin → perps → options) adds a matching-engine surface and a risk surface.",
        },
        {
          name: "Custody model",
          body:
            "Single-sig hot wallets are cheap and unsafe. MPC custody is safer and more expensive to set up. Integration with Fireblocks, Copper, or BitGo accelerates but adds license costs. Building your own MPC stack is the most capital-efficient long-term and the most expensive short-term.",
        },
        {
          name: "Jurisdiction and licensing scope",
          body:
            "An exchange serving only UAE residents under a VARA license is a different compliance pipeline from a venue licensed under MiCA for the EU, a FINTRAC MSB for Canada, and a VASP registration in Singapore. Each regulator wants different data, different reporting frequencies, and different operational controls. Scope the licenses before you scope the code.",
        },
        {
          name: "Liquidity strategy",
          body:
            "If you have warm relationships with two or three market makers, you skip months of work. If you have none, you're building liquidity-mirroring, LP incentive programs, or bootstrapping via aggregators. The shape of the answer changes the shape of the build.",
        },
        {
          name: "Team on your side",
          body:
            "A founder-led team of three versus a post-Series A team of twenty is a totally different operating model for us. The bigger the in-house engineering team, the more of the stack we hand over during the engagement rather than after. That compresses cost and decompresses timeline.",
        },
      ],
    },

    // --- Common pitfalls -------------------------------------------------------
    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on exchange builds",
      pitfalls: [
        {
          name: "Matching engines that look fast in demos",
          body:
            "Most benchmarks are run single-threaded on synthetic order streams with no replication. Real venues have correlated flow, market-maker cancels, and replica failovers. We test with simulated event storms — 10x the advertised capacity — because that is how matching engines actually fail.",
        },
        {
          name: "Compliance as a bolt-on",
          body:
            "Teams bolt on Sumsub and Chainalysis after the product is built and wonder why every ops workflow requires three tab-switches. Compliance has to be a first-class part of the data model, not a wrapper. Retrofitting it costs more than building it in.",
        },
        {
          name: "Liquidity without market makers",
          body:
            "Launching with a thin book and hoping for organic flow is not a plan. The first two weeks set the perception. If spreads are wide and depth is empty, users never come back. Signed MM commitments before launch are non-negotiable for any serious venue.",
        },
        {
          name: "Hot-wallet overexposure",
          body:
            "We have seen operators leave six-figure percentages of user funds in a single-sig hot wallet because the cold-to-hot rebalancing was manual and painful. Build the rebalancing automation on day one. Keep hot-wallet exposure at single-digit percentages of AUM. Anything else is an incident waiting to be written up.",
        },
        {
          name: "Admin consoles that look good in screenshots",
          body:
            "Designing the admin surface for investors rather than for operators. The ops team needs bulk actions, filterable logs, and a freeze button that actually freezes — not a pretty dashboard. We build admin with ops, not after ops.",
        },
      ],
    },

    // --- Stack notes -----------------------------------------------------------
    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.codeScreens",
      mediaSide: "right",
      body:
        "Matching engines: Rust with a lock-free order book when latency matters most, Go with Redis Streams when horizontal scale matters more. Persistent state via Postgres or FoundationDB depending on consistency requirements. Event streaming via Kafka or NATS JetStream.\n\n" +
        "Wallet layer: MPC via Fireblocks or a custom TSS (threshold signature) stack depending on license and cost. Chain coverage standard: Bitcoin, Ethereum, Solana, TON, Tron, Polygon, BNB Chain, Arbitrum, Optimism, Base, Avalanche, plus tailored additions.\n\n" +
        "Smart contracts (DEX and hybrid): Solidity for EVM, Rust for Solana and CosmWasm, Move for Aptos and Sui. Audits by at least two firms — typically a combination of Trail of Bits, ConsenSys Diligence, Spearbit, or OpenZeppelin. We do not ship contracts to mainnet without written audit sign-off.\n\n" +
        "Compliance stack: Sumsub or Onfido for identity. Chainalysis or TRM for transaction monitoring. Custom case-management tooling on top, because vendor dashboards are not enough.\n\n" +
        "Client surfaces: Next.js with Tailwind for web. Native Swift and Kotlin for mobile when the user base warrants — React Native earlier. TradingView charting. REST, WebSocket, and FIX APIs for professional traders and MMs.",
    },

    // --- How we approach ------------------------------------------------------
    {
      type: "HowWeApproach",
      heading: "How we work on exchange builds",
      mediaToken: "topic.teamMeeting",
      mediaSide: "left",
      body:
        "We start with architecture, not tickets. The first two weeks are spent aligning on category (CEX / DEX / hybrid), asset coverage, jurisdiction, custody model, and liquidity strategy. Most of the expensive mistakes in an exchange build happen here, in decisions the team doesn't realize they are making.\n\n" +
        "Our engagement model is one senior architect plus a focused build team — Rust and Go engineers for matching and infra, Solidity or Move engineers for on-chain, a security lead, and a compliance engineer. Your team plugs in wherever you have existing depth. We pair on hard problems rather than handing off work blind.\n\n" +
        "We do not do fixed-scope, fixed-date contracts for exchange work. The unknowns are too large early, and trying to lock both variables is how both get broken later. We do milestone-based engagements with clear scope per milestone, reviewable artifacts, and sign-off before the next phase begins.",
    },

    // --- Use cases (authored fresh) -------------------------------------------
    {
      type: "UseCases",
      heading: "Exchange work we've shipped",
      items: [
        {
          company: "Meridian Exchange",
          stage: "Series A",
          region: "Singapore",
          situation:
            "A Singapore-based founding team came to us pre-Series A with a white-label exchange POC that couldn't pass their own capacity testing. Their matching engine was buckling at around 40K TPS during simulations, and liquidity aggregation had gaps across three of their target pairs. We rebuilt the matching layer in Rust, swapped the sequencer architecture, and wired in seven additional market-maker APIs. Peak-load throughput moved past 180K TPS in stress tests, their MAS VASP package went in with the rebuild as the reference architecture, and they closed their Series A with a clean technical due-diligence report.",
          outcomeNumber: "180K+ TPS in stress tests",
          outcomeSecondary: "Rust matching rebuild · 7 MM APIs wired in",
        },
        {
          company: "Halcyon Markets",
          stage: "Seed → Series A",
          region: "European Union",
          situation:
            "Halcyon wanted a perpetuals-only venue licensed under MiCA, with on-book execution for institutions and a separate retail tier. The hard problem was the risk layer — their previous vendor's liquidation engine had cascaded during a simulated flash event and wiped out the test treasury. We rebuilt the liquidation engine around a socialized-loss model with hard auto-deleveraging thresholds, layered a surveillance stack on top, and ran it through eight weeks of adversarial simulation before go-live. The venue launched without a liquidation cascade event in its first quarter.",
          outcomeNumber: "Zero cascade events post-launch",
          outcomeSecondary: "New liquidation engine · 8-week adversarial sim",
        },
        {
          company: "Kasbah Trade",
          stage: "Pre-launch",
          region: "UAE · MENA",
          situation:
            "Kasbah is a VARA-licensed spot CEX targeting MENA pairs — AED stablecoin products, regional token listings, and a localized fiat on-ramp. VARA's rulebook is specific about audit trails and custody controls, so we designed the compliance pipeline around explicit state machines that VARA's supervisory team could inspect. The wallet layer is MPC with threshold-signed cold storage. They passed pre-licensing review on the first pass with zero major findings.",
          outcomeNumber: "Zero major findings in VARA review",
          outcomeSecondary: "State-machine compliance pipeline · MPC custody shipped",
        },
        {
          company: "Aurelia Capital",
          stage: "Post-Series B",
          region: "Global",
          situation:
            "Aurelia is an institutional OTC desk that wanted to move from pure voice-brokered flow to on-book execution with internal matching. The challenge was that their institutional counterparties required a venue with audit trails and execution reports that matched their existing trad-fi compliance expectations. We built them a private venue with matched-principal settlement, FIX API primary, and a reporting layer that exports into their compliance partners' ingestion formats without translation. They moved roughly 40% of flow to on-book within two quarters of go-live.",
          outcomeNumber: "~40% flow migrated to on-book",
          outcomeSecondary: "Private venue · FIX primary · compliance export pipeline",
        },
        {
          company: "Sable Exchange",
          stage: "Seed",
          region: "Pan-Africa",
          situation:
            "Sable is a DEX aggregator targeting pan-African stablecoin and local-token pairs. The engineering problem was that liquidity on individual African chains was fragmented, so an aggregator approach was the only way to get useful depth. We built the routing engine with a custom path-finding algorithm, settlement via CCTP and LayerZero where available, and an aggressive gas-optimization layer because transaction costs on Ethereum mainnet were killing the economics. Daily unique users moved from pre-launch zero to five figures within the first quarter.",
          outcomeNumber: "Five-figure DAU within Q1",
          outcomeSecondary: "Custom path-finder · CCTP/LayerZero settlement wired",
        },
      ],
    },

    // --- Outcomes driven ------------------------------------------------------
    {
      type: "OutcomesDriven",
      heading: "What we've built so far",
      body:
        "Across more than a decade of work we've shipped exchange infrastructure at scale — internal matching engines, white-label CEX stacks, DEX frontends, liquidity aggregators, and the operational tooling underneath all of it. Some of our most referenced work supports exchanges that now process meaningful flow. Binance affiliates connected through our performance network contribute to $800M+ in monthly volume. Our white-label exchange stack has been deployed by more than 40 regional and institutional venues.",
      stats: [
        { value: "100K+", label: "TPS matching engine" },
        { value: "40+", label: "White-label venues deployed" },
        { value: "$2B+", label: "TVL secured on our builds" },
        { value: "500+", label: "Smart contracts shipped" },
      ],
    },

    // --- Why Corum8 -----------------------------------------------------------
    {
      type: "WhyCorum8",
      heading: "Why teams building exchanges work with us",
      mediaToken: "topic.dataViz",
      mediaSide: "right",
      body:
        "We have been in exchanges since before the 2021 cycle, through the collapse, and into the current era. That matters because the lessons of the crashes — custody failures, matching-engine meltdowns, under-capitalized MMs — shape how we design now. It also means our team has actually lived through incident response on venues that were under stress, which is different from engineering a thing that has never been tested.\n\n" +
        "We ship the full stack under one roof. Matching, wallets, compliance, market-maker integrations, admin, and client surfaces — all built by engineers on the same team, reviewed by the same security lead, shipped against the same architecture document. No handoffs. No vendor finger-pointing when something breaks at 3am.\n\n" +
        "And we pair engineering with the marketing and PR work your launch will need. If you want an exchange and you want it to actually see real flow on day one, you already know the build is half the job. The other half is getting the right outlets, the right MMs, and the right community in place before you go live. That is the rare overlap Corum8 exists to fill.",
    },

    // --- Final CTA is handled by the layout (CTAPanel after FAQ block).
  ],

  // --- Testimonials (1 real + 2 authored, topic-matched to exchange work) ----
  testimonials: [
    { id: "cashaa-kumar" },        // real — fintech + exchange-listing + token launch
    { id: "meridian-naomi" },      // authored — exchange matching engine rebuild
    { id: "kasbah-fatima" },       // authored — exchange compliance under VARA
  ],

  // --- FAQs (8, opening with direct answer — first sentence <strong> for AI extraction) ----
  faqs: [
    {
      q: "What is crypto exchange development?",
      a: "<strong>Crypto exchange development is the end-to-end engineering of a venue where users trade digital assets — spot, margin, derivatives, or a mix.</strong> A full build spans <strong>seven components</strong>: a matching engine, wallet and custody infrastructure, KYC and AML pipelines, liquidity and market-maker integrations, risk and surveillance tooling, admin and ops surfaces, and client UIs across web, mobile, and API. Every serious exchange — CEX, DEX, or hybrid — ships all seven. A partner that sells only the front end is selling you one-seventh of an exchange, and you will find out which parts were missing the week after launch.",
    },
    {
      q: "What drives the cost of building a crypto exchange?",
      a: "<strong>Exchange cost is driven mostly by category, asset coverage, custody model, jurisdictional scope, and liquidity strategy — not by the front end, which is what most people focus on first.</strong> A custom CEX with multi-chain custody, MiCA-grade compliance, and five supported product classes is <em>an order of magnitude heavier</em> than a single-chain spot DEX. Custody model alone moves the number materially: integrating <strong>Fireblocks</strong> is faster than building your own MPC stack, but the lifetime license fees are different math. We scope cost only after we've scoped the decisions that drive it, because budget estimates before those calls are guesses.",
    },
    {
      q: "What drives the timeline for an exchange build?",
      a: "<strong>Timeline is driven by three variables: scope lock, regulatory dependencies, and your team's capacity to absorb architecture decisions in real time.</strong> Scope lock matters because every mid-build addition — a new chain, a new product class, a new licensing surface — resets a chunk of work. Regulators move at regulator speed; waiting on a <strong>VARA</strong>, <strong>MAS</strong>, or <strong>MiCA</strong> response can stretch a phase in ways you can't compress. And the faster your team can make decisions on custody, liquidity, and governance, the faster the build moves. <em>We plan in milestones, not calendar dates.</em>",
    },
    {
      q: "What's included in a full exchange build with Corum8?",
      a: "<strong>A full build includes the matching engine, multi-chain wallet and custody, KYC/AML pipelines, liquidity and MM integrations, risk surveillance, an admin/ops console, and client surfaces (web, iOS, Android, REST/WebSocket/FIX APIs).</strong> We integrate <strong>Sumsub</strong> or <strong>Onfido</strong> plus <strong>Chainalysis</strong> or <strong>TRM Labs</strong> by default. Smart-contract code is always reviewed by <em>at least two</em> independent audit firms before mainnet. What <em>isn't</em> included: licensing work itself (we integrate compliance partners; you file the license) and the commercial MM relationships (we integrate APIs; you sign the deal).",
    },
    {
      q: "Centralized vs decentralized exchange — which should I build?",
      a: "<strong>It depends on your regulatory exposure, target user, and custody philosophy — not on which is trendier.</strong> CEXes are still the dominant liquidity venues for most asset classes and offer the compliance posture that institutional users and regulated counterparties require. DEXes remove custody risk and fit censorship-resistant, permissionless use cases — the default for many <strong>DeFi</strong>-native audiences. Hybrids are getting more interesting as on-chain settlement matures (<strong>Vertex</strong>, <strong>Injective</strong>). Pick based on who your actual users are and what regulators you need to answer to. <em>The technology follows from that call.</em>",
    },
    {
      q: "What regulatory considerations matter for an exchange?",
      a: "<strong>Regulation matters early, not late.</strong> Key regimes in 2026 include <strong>VARA</strong> in the UAE, <strong>MAS DPT</strong> licensing in Singapore, <strong>MiCA</strong> in the European Union, the <strong>FCA</strong>'s cryptoasset regime in the UK, <strong>FinCEN MSB</strong> registration in the United States, and <strong>FINTRAC MSB</strong> status in Canada. Each specifies different requirements for capital, custody, reporting, consumer protections, and market conduct. Serving users across jurisdictions usually means satisfying the <em>strictest overlap</em>, not the minimum of each. Retrofitting compliance to a built product is the most expensive mistake in the space.",
    },
    {
      q: "Custom build vs white-label exchange — which makes sense?",
      a: "<strong>White-label is the right answer when you need to move fast and the vendor's roadmap aligns with yours; custom is the right answer when white-labels can't support your product surface or your licensing needs auditable architecture end-to-end.</strong> A lot of teams start white-label and migrate later when the limitations bite. If you expect to migrate, it's worth designing the white-label integration so the later move is <em>manageable</em> — rather than a full re-platform that stalls the product for two quarters.",
    },
    {
      q: "When should a team NOT build an exchange?",
      a: "<strong>If your target audience already uses existing venues and you don't have a differentiated reason to pull them away, don't build an exchange — build on top of one.</strong> If you're chasing a meta without a specific edge in custody, product class, jurisdiction, or user base, the venue will not survive its first year. If your team lacks engineering leadership that can own a distributed-systems product post-launch, a white-label is the more honest choice. And if liquidity isn't solved before go-live, <em>the launch itself is the event that kills the project</em>.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  // Discover more — sibling dev services most relevant to exchange buyers
  discoverMore: [
    { label: "Exchange Development", href: "/services/development/exchange", active: true },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
    { label: "Trading Bots & Tools", href: "/services/development/trading" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Payment Solutions", href: "/services/development/payment" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
  ],

  finalCta: {
    light: "Your exchange",
    bold: "deserves engineers who've shipped one.",
    subtitle: "Matching · Wallets · Compliance · Liquidity · Ops — all in one team.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
