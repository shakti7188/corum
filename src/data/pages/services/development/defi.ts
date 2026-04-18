// /services/development/defi
// Service cluster — DeFi & staking platform development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Orchid Yield", firstUsedOn: "/services/development/defi", industry: "defi", region: "global", note: "Cross-chain yield aggregator with automated vault rebalancing." });
registerCompany({ name: "Veridian Lending", firstUsedOn: "/services/development/defi", industry: "defi", region: "europe", note: "Isolated-markets lending protocol, MiCA-aligned." });
registerCompany({ name: "Brightside Staking", firstUsedOn: "/services/development/defi", industry: "defi", region: "americas", note: "Liquid-staking protocol for Ethereum validators." });
registerCompany({ name: "Kindred Perpetuals", firstUsedOn: "/services/development/defi", industry: "defi", region: "apac", note: "Cross-margin perpetuals protocol on an L2." });

export const page: PageData = {
  slug: "/services/development/defi",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "DeFi development",
  secondaryKeywords: [
    "DeFi protocol development",
    "staking platform development",
    "yield aggregator",
    "lending protocol development",
    "DEX development",
    "liquid staking",
  ],
  searchIntent: "commercial",

  meta: {
    title: "DeFi & Staking Platform Development | Corum8",
    description:
      "Corum8 builds production DeFi protocols — lending, staking, yield aggregators, DEXs, perpetuals. Audited smart contracts, liquidity strategy, launch support.",
    canonical: "https://corum8.com/services/development/defi",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
  ],

  hero: {
    eyebrow: "Development · DeFi",
    headline: "We build DeFi protocols.",
    subtitle: "Lending, staking, yield, DEXs, perpetuals — audited, capital-efficient, survivable.",
    sub:
      "Smart contracts, oracle design, liquidity strategy, risk models, and the launch operations that separate protocols that compound from protocols that cascade.",
    mediaToken: "hero.defi",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds production DeFi protocols — lending markets, liquid-staking systems, yield aggregators, DEXs, perpetuals venues. Work spans smart-contract engineering, oracle design, risk parameter modelling, liquidity bootstrapping, independent audit coordination, and the post-launch operations that keep capital-efficient protocols solvent through market stress.",

  body: [
    {
      type: "Prose",
      heading: "DeFi in 2026 rewards a different set of engineering choices",
      pullQuote: "The protocols compounding now are the ones whose parameters survived 2022 — and whose builders knew why.",
      body:
        "<strong>The DeFi protocols growing in 2026 are the ones that didn't blow up between 2022 and 2024.</strong>\n\n" +
        "Terra, Celsius, 3AC, BlockFi, FTX, Mango, Euler — a list of things that either weren't DeFi or weren't as DeFi as they claimed. The protocols that stayed solvent through that period had a shared characteristic: they enforced their invariants on-chain and didn't assume permanent liquidity. <strong>Aave</strong>, <strong>Compound</strong>, <strong>MakerDAO</strong>, <strong>Curve</strong>, <strong>Uniswap</strong>, <strong>Lido</strong>, <strong>Morpho</strong>, <strong>Pendle</strong>. Not perfect, but solvent.\n\n" +
        "The lesson for new protocols is that <em>the interesting engineering isn't the yield mechanics. It's the liquidation engine, the oracle selection, the parameter governance, and the risk isolation between markets.</em> Those are the systems that decide whether a protocol survives a flash event, a stablecoin depeg, or a correlated liquidation cascade.\n\n" +
        "We build DeFi for teams that know the interesting work lives in the boring-looking parts. Lending protocols where each market's risk is isolated. Staking protocols where slashing doesn't become a liveness event. Yield aggregators whose rebalancing doesn't turn into MEV-extractable arbitrage against the vault. DEXs whose AMM curves behave predictably under stress.",
    },

    {
      type: "Definition",
      heading: "What DeFi development actually covers",
      body:
        "<strong>DeFi development</strong> is the engineering of permissionless financial primitives — lending, borrowing, trading, staking, yield generation, derivatives — as composable on-chain protocols. The defining characteristic is that the protocol is the counterparty: smart contracts hold the funds, enforce the rules, and settle positions without a traditional intermediary.\n\n" +
        "Categories we build: <strong>lending markets</strong> (Aave-style pools, Morpho-style peer-to-peer, isolated-asset markets à la Euler v2), <strong>liquid staking</strong> (Lido-style validator pools, EigenLayer-style restaking, liquid-restaking tokens), <strong>DEXs</strong> (Uniswap v3/v4 concentrated-liquidity AMMs, stable-swap curves, order-book hybrids), <strong>perpetuals and derivatives</strong> (GMX-style peer-to-pool, dYdX-style off-chain matching, Vertex-style on-chain order book), <strong>yield aggregators</strong> (Yearn-style vaults, auto-rebalancing strategies), and <strong>synthetic assets</strong> (over-collateralised dollar instruments like DAI, delta-neutral yield tokens like sUSDe).\n\n" +
        "Every category shares the same hard problems: oracle selection, liquidation design, parameter governance, and the security assumptions that bind the whole system. Specific solutions differ. The shape of the engineering doesn't.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a DeFi build",
      body:
        "Every protocol we build has six modules. The shape is consistent even when the financial product is radically different.",
      subsections: [
        {
          heading: "1. Core protocol contracts",
          body:
            "The financial logic: deposit / borrow / repay for lending, stake / unstake / slash for staking, swap / add-liquidity / remove-liquidity for AMMs, open / close / liquidate for perpetuals. We write these in Solidity for EVM, Move for Aptos / Sui, Rust for Solana / CosmWasm. The invariants (total supply = sum of balances, collateralisation ratio always > liquidation threshold) are enforced on every state transition — not assumed.",
        },
        {
          heading: "2. Oracle layer",
          body:
            "Every DeFi protocol's security is bounded by its oracle. We integrate <strong>Chainlink</strong> price feeds as the default, <strong>Pyth</strong> for low-latency assets, <strong>API3</strong> for first-party data, and build custom TWAP oracles from on-chain sources when the risk profile warrants. The oracle isn't just a price feed — it's the fallback logic for stale data, the heartbeat checks, the deviation guards, and the protocol-level halts that prevent cascade liquidations during oracle failure.",
        },
        {
          heading: "3. Liquidation engine",
          body:
            "The most security-critical piece of any over-collateralised protocol. We build liquidation with explicit priority ordering (Dutch auction, sealed-bid, or direct with keeper incentive), partial-liquidation support (never force 100% closure when 20% recovers health), and fail-safe auto-deleveraging when liquidations can't clear fast enough. Socialised-loss fallbacks are designed in, not bolted on after the first bad day.",
        },
        {
          heading: "4. Risk parameters and governance",
          body:
            "Every lending market has an LTV cap, liquidation threshold, liquidation bonus, borrow cap, supply cap, interest-rate curve. Setting these at launch and adjusting them over time is the actual product work. We build parameter governance as a deliberate process — timelocks on changes, risk-committee review, on-chain proposals with enforcement — not an ad-hoc dev-keys decision.",
        },
        {
          heading: "5. Liquidity bootstrapping",
          body:
            "A DeFi protocol without liquidity is a paper cut. We plan LP incentive programs with explicit emission schedules, integrate with <strong>Merkl</strong> / <strong>Hyperliquid's points system</strong> / <strong>Blast</strong> for distribution, and coordinate with market-makers (<strong>Wintermute</strong>, <strong>GSR</strong>, <strong>Flowdesk</strong>, regional MMs) for concentrated liquidity on key pairs. The bootstrap plan is separate from the product plan — and has its own timeline.",
        },
        {
          heading: "6. Monitoring, alerts, and incident response",
          body:
            "Production DeFi is not 'deploy and walk away.' We build per-market health dashboards, keeper networks for liquidations, alerting on anomalous borrow rates or deposit patterns, and an explicit runbook for protocol halts. <em>The protocols that survive incidents are the ones whose operators knew what to do at 3am when the oracle deviated.</em>",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals a DeFi build is the right path",
      signals: [
        "You have identified a specific market inefficiency that permissionless composition can solve better than a centralised product.",
        "Your user base is crypto-native and will self-custody — the UX friction of DeFi is acceptable to them.",
        "Your economic model depends on capital being composable across protocols (e.g., deposited collateral that can also earn yield elsewhere).",
        "You need censorship resistance or non-sovereign settlement — not available from a centralised counterparty.",
        "You're building a product category where regulatory clarity around permissionless finance is your moat.",
        "Your team has the post-launch capacity to operate a protocol — monitoring, parameter adjustment, incident response.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a DeFi build",
      body:
        "The decisions that swing cost and risk by an order of magnitude happen before the first Solidity line.",
      factors: [
        {
          name: "Protocol category",
          body:
            "A simple yield aggregator is lighter than a lending market. A lending market is lighter than a perpetuals venue. A perpetuals venue is lighter than a cross-chain restaking protocol. Each layer of financial complexity compounds the audit surface.",
        },
        {
          name: "Oracle dependence",
          body:
            "A protocol with a single asset and a single oracle is simple. A multi-asset lending market with heterogeneous oracle sources is not. Each additional oracle increases the blast radius of a mispriced feed.",
        },
        {
          name: "Chain choice",
          body:
            "Ethereum mainnet for security and TVL. Arbitrum / Optimism / Base for cost with similar tooling. Solana for throughput-sensitive products. L2s vs L1s vs app-chains have different MEV environments and different operational cadences.",
        },
        {
          name: "Governance design",
          body:
            "Fully on-chain governance with timelocks is a protocol product in itself. Admin-multisig with progressive decentralisation is lighter to ship but has reputational costs. The right answer depends on target audience and regulatory posture.",
        },
        {
          name: "Security review depth",
          body:
            "Two audits from top firms is baseline for a serious protocol. Formal verification for critical components (liquidation, oracle, core accounting) adds real cost but also real safety. Immunefi bug bounty programs are non-optional.",
        },
        {
          name: "Launch liquidity plan",
          body:
            "A protocol launching with signed market-makers and a treasury-backed LP incentive program is a different product from one launching with 'we'll figure out liquidity later.'",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on DeFi builds",
      pitfalls: [
        {
          name: "Assuming oracles are reliable",
          body:
            "Oracles are the single most common failure mode. Chainlink price feeds have paused updates. Pyth has had outages. First-party oracles can be manipulated by attackers. Every oracle interaction needs deviation checks, heartbeat monitoring, and circuit breakers — not just a call to <code>latestAnswer()</code>.",
        },
        {
          name: "Liquidation engines that work in testnets",
          body:
            "Gas spikes during volatile markets can make liquidations unprofitable for keepers, leaving bad debt accumulating. Dutch auctions without adequate incentives stall. Liquidation logic has to be tested against adversarial keeper behaviour and simulated gas environments, not just happy-path testnet.",
        },
        {
          name: "Over-isolated vs under-isolated markets",
          body:
            "Shared-pool lending (Aave-style) is capital-efficient but contagious — one bad asset listing can drain the pool. Fully isolated (Euler v2, Morpho Blue) is safer but splits liquidity. The right answer depends on asset risk correlation and target user base. Getting this wrong is the most expensive design mistake in lending.",
        },
        {
          name: "Governance capture via flash loans",
          body:
            "On-chain governance votes can be temporarily captured with a flash loan of the governance token. Protocols without quorum-time, snapshot-based voting, or voting-delay mechanics have lost parameter control through governance attacks. Design for the adversarial case.",
        },
        {
          name: "No plan for stablecoin depegs",
          body:
            "Stablecoins depeg. USDC did. USDT has. DAI has in certain market conditions. Protocols that treat stablecoins as hard pegs end up insolvent when the peg breaks. Oracle caps, depeg detection, and automatic protocol halts are required for any product holding material stablecoin exposure.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.networkNodes",
      mediaSide: "right",
      body:
        "<strong>Smart-contract languages:</strong> Solidity for EVM (Ethereum, Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche); Rust for Solana and CosmWasm; Move for Aptos and Sui.\n\n" +
        "<strong>Development frameworks:</strong> <strong>Foundry</strong> as primary test/deploy framework; Hardhat for specific tooling; Anchor for Solana; Move CLI for Aptos/Sui.\n\n" +
        "<strong>Oracles:</strong> <strong>Chainlink</strong> for ubiquity and coverage; <strong>Pyth</strong> for low-latency pricing; <strong>API3</strong> for first-party data; <strong>RedStone</strong> for modular pull-based; custom on-chain TWAP oracles for specific risk profiles.\n\n" +
        "<strong>Security tooling:</strong> <strong>Slither</strong> and <strong>Aderyn</strong> for static analysis; <strong>Echidna</strong> and <strong>Medusa</strong> for property-based fuzzing; <strong>Certora</strong> for formal verification of critical invariants; <strong>Tenderly</strong> for simulation and incident debugging.\n\n" +
        "<strong>Audits:</strong> We coordinate with <strong>Trail of Bits</strong>, <strong>OpenZeppelin</strong>, <strong>ConsenSys Diligence</strong>, <strong>Spearbit</strong>, <strong>Code4rena</strong> contests, and <strong>Sherlock</strong> depending on scope and risk profile. Two audits minimum for any protocol holding material TVL.\n\n" +
        "<strong>Governance:</strong> <strong>OpenZeppelin Governor</strong> + <strong>TimelockController</strong> for standard on-chain governance; <strong>Tally</strong> or <strong>Boardroom</strong> frontends; <strong>Safe{Wallet}</strong> modules for multisig treasury.\n\n" +
        "<strong>Monitoring:</strong> <strong>Forta</strong> for on-chain alerts; <strong>Tenderly War Room</strong> for incident response; custom Grafana + Prometheus dashboards for protocol-specific metrics.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on DeFi builds",
      mediaToken: "topic.codeEditor",
      mediaSide: "left",
      body:
        "We start with the <strong>security model</strong> and the <strong>economic model</strong> in the same document. Two weeks spent writing the threat model, the liquidation math, the oracle-failure scenarios, and the parameter sensitivity analysis. That document is the architectural reference for the rest of the build — and it's the first thing the auditors will read.\n\n" +
        "Our engagement model is a senior Solidity engineer, a DeFi mechanism designer (someone who has built curves / AMMs / liquidation engines before), a security reviewer, and a product engineer for the client surfaces and keeper infrastructure. For novel mechanism design we often bring in an outside economist — usually from the communities around <strong>Gauntlet</strong>, <strong>Chaos Labs</strong>, or independent DeFi-native quantitative research.\n\n" +
        "We do not ship mainnet without <em>at least two independent audits</em>. On critical components (liquidation, oracle, core accounting) we also run formal verification through Certora or a similar tool. Bug bounty via Immunefi launches at mainnet. None of this is optional for protocols holding other people's money.",
    },

    {
      type: "UseCases",
      heading: "Four DeFi builds, four different shapes of problem",
      items: [
        {
          company: "Orchid Yield",
          stage: "Series A",
          region: "Global",
          situation:
            "Orchid is a cross-chain yield aggregator routing capital between lending, staking, and LP positions across six chains. The hard problem was rebalancing without leaking value to MEV — naively moving $10M in stablecoins between chains telegraphs arbitrage. We built a custom intent-based rebalancing layer using <strong>Across</strong> and <strong>CCTP</strong> as settlement rails, with batched netting across vaults to reduce cross-chain footprint. TVL crossed $80M in the first two quarters with measurably better net yield than the aggregators they competed with.",
          outcomeNumber: "$80M+ TVL · Q1-Q2",
        },
        {
          company: "Veridian Lending",
          stage: "Series A",
          region: "Luxembourg / EU",
          situation:
            "Veridian is a MiCA-aligned lending protocol for European institutional users — isolated markets, explicit KYC gate at the UI level, transfer-restricted collateral. We designed the protocol around Morpho-Blue-style isolated markets, added a whitelist layer at the market-entry point (not the token level — tokens stay permissionless), and built the risk-parameter governance as a three-of-five institutional multisig with a 48-hour timelock. MiCA licensing was in scope from week one and the protocol cleared review without a single blocking finding.",
          outcomeNumber: "MiCA review — no blocking findings",
        },
        {
          company: "Brightside Staking",
          stage: "Seed",
          region: "United States",
          situation:
            "Brightside is a liquid-staking protocol for Ethereum validators aimed at crypto-native retail and small institutional. The competitive bar is Lido. We differentiated on validator set diversification (randomised delegation across 40+ operators, no operator above 3% of stake) and slashing insurance via a protocol-owned insurance module. The design deliberately trades raw APY for risk-adjusted return. First staking round filled $45M and the protocol survived its first slashing event (a validator DVT misconfiguration) with zero customer-facing impact thanks to the insurance buffer.",
          outcomeNumber: "$45M staked · 0 customer impact",
        },
        {
          company: "Kindred Perpetuals",
          stage: "Seed",
          region: "Singapore",
          situation:
            "Kindred is a perpetuals protocol on an L2, cross-margin, targeting Asian retail. The risk engine was the critical piece — correlated liquidations during crypto flash events are how perpetuals protocols die. We built a socialised-loss auto-deleveraging module with hard per-market thresholds and a dedicated insurance fund funded from funding-rate revenue. Protocol launched with signed market-maker partnerships and survived a $50M+ single-hour liquidation event in Q2 without touching the insurance fund.",
          outcomeNumber: "Survived $50M liquidation event cleanly",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our DeFi work the through-line is protocols that survive. Solvent lending markets through stablecoin depegs. Staking products through slashing events. Perpetuals venues through volatility cascades. The engineering quality shows up specifically during the events that break less-careful protocols.",
      stats: [
        { value: "$2B+", label: "TVL across our DeFi builds" },
        { value: "Zero", label: "Loss events from code on our contracts" },
        { value: "500+", label: "Smart contracts shipped" },
        { value: "14+", label: "Audit firms partnered" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building DeFi work with us",
      body:
        "We've been building DeFi since the earliest yield protocols in 2020, through the 2022 cascade, and into the 2026 regulated-institutional era. <em>Our engineering discipline was shaped by watching what failed, not by theorising about what might.</em>\n\n" +
        "We ship the full stack under one roof: Solidity (or Move, or Rust), oracle integration, keeper infrastructure, governance tooling, monitoring, and the client surfaces users touch. One team, one architecture document, one security lead. Auditors have a single point of contact and a consistent protocol model.\n\n" +
        "And we pair protocol engineering with the launch work DeFi specifically needs — liquidity market-making partnerships, crypto-native PR that understands the category, community building for the governance phase, and the incident communication playbook you'll need the first time something novel goes wrong. <strong>DeFi is an engineering product and a financial product simultaneously. We build for both.</strong>",
    },
  ],

  testimonials: [
    { id: "fanadise-founder" },
    { id: "meridian-naomi" },
    { id: "halcyon-pierre" },
  ],

  faqs: [
    {
      q: "What is DeFi development?",
      a: "<strong>DeFi development is the engineering of permissionless financial primitives — lending, borrowing, trading, staking, yield, derivatives — as composable on-chain protocols.</strong> The defining characteristic is that the protocol itself is the counterparty: smart contracts hold user funds, enforce the rules, and settle positions without a traditional intermediary. Real DeFi builds include core protocol contracts, oracle integration, liquidation engines, parameter governance, liquidity bootstrapping, and the monitoring plus incident response that keeps protocols solvent after launch.",
    },
    {
      q: "What drives the cost of building a DeFi protocol?",
      a: "<strong>Cost is driven mostly by protocol category, oracle dependence, chain choice, governance design, security-review depth, and launch liquidity strategy — not by the client UI, which is a small slice.</strong> A simple yield aggregator is lighter than a lending market, which is lighter than a perpetuals venue, which is lighter than a cross-chain restaking protocol. Two audits from tier-one firms and formal verification on critical invariants are non-negotiable for anything holding material TVL, and those are real line items.",
    },
    {
      q: "Do I need formal verification or do audits suffice?",
      a: "<strong>For most protocols, two independent audits plus a robust bug bounty program is the appropriate bar. For the most security-critical components — liquidation logic, oracle handling, core accounting invariants — formal verification with Certora or a similar tool is increasingly standard.</strong> The real question isn't 'audit vs formal verification' — it's whether your security posture matches the TVL the protocol will hold. A $50M lending protocol needs more rigour than a $500K experimental AMM.",
    },
    {
      q: "Which chains are best for DeFi in 2026?",
      a: "<strong>Ethereum mainnet for security, tooling, and TVL. Arbitrum / Optimism / Base for cheaper execution with EVM compatibility. Solana for throughput-sensitive products. Cosmos app-chains or custom rollups when the protocol benefits from sovereign infrastructure.</strong> Choice depends on your target user base (where do they already hold assets), your MEV tolerance, and your operational complexity appetite. Many serious protocols deploy on multiple chains with careful bridge risk management.",
    },
    {
      q: "What's included in a full DeFi protocol build?",
      a: "<strong>Core smart contracts, oracle integration with failover, liquidation engine, risk-parameter governance, keeper infrastructure, monitoring and alerts, and the client-facing surfaces (web dApp, subgraph, API for data providers).</strong> Two independent audits and formal verification on critical components are standard. Bug bounty via Immunefi launches at mainnet. What isn't included: the liquidity itself (we integrate market-makers; you sign the commercial deal) and the governance token distribution (we build the token; you design the tokenomics alongside).",
    },
    {
      q: "How do you handle oracle risk?",
      a: "<strong>Every oracle interaction has explicit deviation checks, heartbeat monitoring, and circuit breakers — not just a call to a price feed.</strong> We integrate Chainlink as default, Pyth for low-latency assets, API3 for first-party data, with custom on-chain TWAP as a fallback or verification layer where the risk profile warrants. Protocols halt rather than transact when oracles deviate beyond thresholds. This is non-negotiable — oracle failure is the single most common DeFi exploit vector, and protocols that don't design for it lose user funds when the price feed misbehaves.",
    },
    {
      q: "Can you build on Solana / Aptos / Sui instead of EVM?",
      a: "<strong>Yes — we ship Rust on Solana, Move on Aptos and Sui, Solidity on EVM, CosmWasm on Cosmos.</strong> The financial mechanics translate; the tooling, MEV environment, and operational cadence differ. Solana favours high-throughput products and is excellent for DEXs and derivatives. Move chains have strong primitives for digital-asset ownership semantics. Your choice should be driven by target audience, product category, and ecosystem maturity — not by which language the team is most comfortable in.",
    },
    {
      q: "When should a team NOT build a DeFi protocol?",
      a: "<strong>If your product can be delivered as a centralised counterparty without meaningful trust or censorship-resistance loss, don't build DeFi — the engineering, audit, and incident-response cost is real.</strong> If your user base won't self-custody and the UX cost of permissionless is higher than the value of permissionless for them, build a centralised product with DeFi rails underneath. DeFi is the right answer when composability, non-sovereign settlement, or permissionless access is genuinely core to the product — not because it's the trendy architecture in the room.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "DeFi & Staking", href: "/services/development/defi", active: true },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Trading Bots & Tools", href: "/services/development/trading" },
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer" },
  ],

  finalCta: {
    light: "DeFi that survives",
    bold: "what you can't predict.",
    subtitle: "Solid contracts, tight oracles, disciplined parameters — one team, one shipping plan.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
