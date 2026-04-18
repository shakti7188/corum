// /services/development/trading
// Service cluster — trading bots & automated trading infrastructure.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Westgate Alpha", firstUsedOn: "/services/development/trading", industry: "exchange", region: "europe", note: "Quant fund running cross-venue arb on listed crypto pairs." });
registerCompany({ name: "Solstice Trading", firstUsedOn: "/services/development/trading", industry: "exchange", region: "americas", note: "Prop-trading desk with proprietary market-making infrastructure." });
registerCompany({ name: "Narrows Markets", firstUsedOn: "/services/development/trading", industry: "exchange", region: "apac", note: "Retail-facing automated trading platform for Asian exchanges." });
registerCompany({ name: "Lantern Quant", firstUsedOn: "/services/development/trading", industry: "exchange", region: "mea", note: "MEA-focused crypto DMA broker with execution algos." });

export const page: PageData = {
  slug: "/services/development/trading",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "crypto trading bot development",
  secondaryKeywords: [
    "automated trading platform",
    "algorithmic trading infrastructure",
    "market-making bot",
    "crypto arbitrage bot",
    "trading API integration",
    "execution algo development",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Trading Bots & Automated Trading Infrastructure | Corum8",
    description:
      "Corum8 builds algo trading systems — execution algos, market-making bots, arb engines, signal bots, retail platforms. Exchange integrations across 30+ venues.",
    canonical: "https://corum8.com/services/development/trading",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "Trading Bots & Tools", href: "/services/development/trading" },
  ],

  hero: {
    eyebrow: "Development · Trading",
    headline: "We build trading infrastructure.",
    subtitle: "Execution algos, market-making, arbitrage, signals — that run in production, not in backtests.",
    sub:
      "Cross-venue trading systems, risk controls, latency engineering, reconciliation, and the operational tooling that makes the difference between a bot that works on paper and a bot that survives a real market event.",
    mediaToken: "hero.trading",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds automated trading infrastructure — execution algorithms, market-making bots, arbitrage engines, signal-driven strategies, and retail-facing trading platforms. Work spans exchange integrations across 30+ venues, latency-aware order routing, risk and position management, reconciliation pipelines, and the alerting and ops tooling live trading requires.",

  body: [
    {
      type: "Prose",
      heading: "The trading-system market split clearly between 'works in backtest' and 'works in production'",
      pullQuote: "A backtest is a hypothesis. A live system is a hypothesis being tested against an adversarial market.",
      body:
        "<strong>Most trading-bot projects don't survive their first real volatility event.</strong>\n\n" +
        "The patterns are familiar. The bot tested beautifully against six months of historical data. The first week of paper trading looked clean. Then a real flash crash hit, fills went sideways, the exchange API rate-limited during the exact minute the bot needed to reduce risk, one leg of an arb filled and the hedge didn't, and suddenly the 'low-risk' strategy has an eight-figure open position on the wrong side of a 15% move.\n\n" +
        "This isn't a quant problem. It's a systems problem. <em>The quant work is hard; the production engineering around the quant work is what separates the firms that keep making money from the ones that blow up.</em>\n\n" +
        "We build trading infrastructure for teams that have already lost money to engineering bugs and now understand what they need. Quant funds moving from research notebooks to production. Prop desks upgrading their in-house stack. Retail-facing products offering automated strategies to subscribers. The specific strategy matters less than the infrastructure that makes any strategy runnable — order routing, risk controls, position reconciliation, fault tolerance.",
    },

    {
      type: "Definition",
      heading: "What trading infrastructure actually covers",
      body:
        "<strong>Trading infrastructure</strong> is the software between an idea about when to trade and the actual trade landing in the market. In professional trading it's called <em>execution infrastructure</em>. In crypto it's often just called 'the bot,' which understates it by an order of magnitude.\n\n" +
        "Categories we build: <strong>execution algos</strong> (TWAP, VWAP, POV, implementation shortfall — algorithms that slice a large order into smaller pieces to minimise market impact), <strong>market-making bots</strong> (two-sided quoting with inventory management, usually for specific pairs or venues), <strong>arbitrage engines</strong> (cross-venue, triangular, cross-asset arbitrage with tight risk management), <strong>signal-driven strategies</strong> (trading against model outputs, sentiment, on-chain metrics, or external data feeds), and <strong>retail-facing automated trading platforms</strong> (copy-trading, grid bots, DCA automation — where the end user is a non-professional).\n\n" +
        "Every category shares a set of hard problems: connection stability to exchanges, order state management, partial-fill handling, rate-limit discipline, balance reconciliation, risk cutoffs, and the alerting that tells a human when something is wrong in a useful timeframe.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a trading infrastructure build",
      enquiry: {
        hook: "Trading UX killing retention?",
        heading: "A fast matching engine is half the job. The chart is the other half.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=80",
        avatarName: "Leo P.",
        avatarRole: "Trading Platform Lead",
      },
      body:
        "Every production trading system we ship has the same core modules. Specifics vary by strategy category and latency tier, but the shape is consistent.",
      subsections: [
        {
          heading: "1. Exchange connectivity and market-data feeds",
          body:
            "We integrate across the major crypto venues — <strong>Binance</strong>, <strong>Coinbase</strong>, <strong>Kraken</strong>, <strong>OKX</strong>, <strong>Bybit</strong>, <strong>Bitfinex</strong>, <strong>Gate</strong>, <strong>KuCoin</strong>, <strong>Deribit</strong>, <strong>dYdX</strong>, <strong>Hyperliquid</strong>, <strong>Vertex</strong>, <strong>GMX</strong>, and others — through native REST, WebSocket, and where available FIX APIs. Market-data feeds use WebSocket streams with explicit reconnect/resubscribe logic; order-book reconstruction is done in-process with snapshot + delta reconciliation. We never trust a single venue's feed — redundancy and comparison catch stale or corrupt data.",
        },
        {
          heading: "2. Order management system (OMS)",
          body:
            "Every order has explicit state: <em>pending → submitted → acknowledged → partially_filled → filled / rejected / cancelled</em>. Our OMS tracks this deterministically with event sourcing — every state change is logged and replayable. Orphan orders (exchange says submitted, our state says pending) are reconciled on every reconnect. The OMS is where most trading bugs originate, and where the engineering rigour pays off.",
        },
        {
          heading: "3. Risk engine",
          body:
            "Pre-trade: position limits, order-size caps, notional exposure per venue, max-concurrent-orders, fat-finger checks. Post-trade: real-time P&L, VaR, stress-scenario exposure. Circuit breakers: auto-halt on loss limits, on anomalous price moves, on exchange-connectivity failures. Every strategy runs behind the risk engine — the risk engine doesn't ask, it enforces.",
        },
        {
          heading: "4. Strategy layer",
          body:
            "Where the alpha lives. We build strategies in the language that fits the team — <strong>Python</strong> for research-to-production workflows, <strong>Rust</strong> or <strong>C++</strong> when latency dominates, <strong>Go</strong> when throughput and concurrency matter more than microseconds. Strategies emit <em>target positions</em> or <em>order intents</em>; the execution layer handles how those get into the market.",
        },
        {
          heading: "5. Execution algos",
          body:
            "The bridge between strategy intent and actual orders. <strong>TWAP</strong>, <strong>VWAP</strong>, <strong>POV</strong>, <strong>Iceberg</strong>, <strong>Sniper</strong>, <strong>Pegged</strong> — each algo slices orders into child orders based on market conditions. Good execution can swing P&L by tens of basis points on large orders. We build execution algos parameterised by strategy tolerance for market impact, time-to-fill, and slippage.",
        },
        {
          heading: "6. Reconciliation and balance tracking",
          body:
            "What does the exchange say our balance is? What does our OMS say we've done? What does blockchain explorer say for on-chain movements? These three views have to reconcile continuously — any drift is either a bug, a missed trade, or a security issue. We build reconciliation as a first-class service with every discrepancy investigated and logged.",
        },
        {
          heading: "7. Monitoring, alerts, and kill switches",
          body:
            "Live trading systems fail. Market conditions change. Exchanges have outages. The question is whether someone knows within seconds or hours. We build structured alerting (Grafana + PagerDuty + custom Slack bots), kill switches (one-button halt, per-strategy and global), and runbooks for every known failure mode. <em>A trading system that nobody monitors at 3am will lose money at 3am.</em>",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need production trading infrastructure",
      signals: [
        "Your strategy works in backtest but your first live week showed unexpected behaviour nobody can debug.",
        "You're running paper trading and the first real funding round is conditional on moving to live capital.",
        "You operate across 3+ exchanges and current integration breaks or drifts every time a venue updates its API.",
        "Your risk controls are 'the trader manually checks balances' and audit won't accept that anymore.",
        "You're launching a retail-facing automated-strategies product and consumer-facing reliability is a product requirement.",
        "Your current system works but adding a new strategy takes a month of engineering — infrastructure isn't modular.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a trading build",
      body:
        "Trading system cost is driven by latency tier, venue coverage, strategy complexity, and ops footprint — not strategy logic, which is usually the smallest piece.",
      factors: [
        {
          name: "Latency tier",
          body:
            "A retail DCA bot tolerates seconds. A cross-venue arb needs tens of milliseconds. High-frequency market making wants microseconds. Each tier demands different language choices, different infrastructure (colocation, kernel bypass, FPGA in extreme cases), and radically different engineering cost.",
        },
        {
          name: "Venue coverage",
          body:
            "Integrating one exchange is a week. Ten exchanges is a quarter. Thirty exchanges with spot + futures + options plus DEX integrations is a year of ongoing engineering — every venue has idiosyncratic quirks that show up in production.",
        },
        {
          name: "Asset class breadth",
          body:
            "Spot only is lightest. Adding futures adds funding-rate handling, liquidation management. Adding options adds greeks, volatility surfaces, early-exercise logic. Adding perpetuals cross-margin adds position netting. Each layer compounds engineering.",
        },
        {
          name: "Strategy count",
          body:
            "One strategy on the infrastructure is cheap. Ten strategies sharing infrastructure requires strong strategy isolation, per-strategy risk, and strategy-specific deployment. Multi-strategy platforms need a real framework, not a script.",
        },
        {
          name: "User-facing vs internal",
          body:
            "An internal system for one quant team is simpler. A retail-facing product with user accounts, individual strategy subscriptions, accounting for user funds, and customer support load is effectively a fintech product on top of a trading system.",
        },
        {
          name: "Regulatory scope",
          body:
            "Proprietary trading in permissive jurisdictions is lightest. Running regulated broker-dealer operations in the US or MiFID-equivalent in EU adds significant compliance, reporting, and audit engineering.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on trading builds",
      pitfalls: [
        {
          name: "Backtest-driven infrastructure",
          body:
            "Teams build systems optimised for backtest speed and then discover they're not built for live reliability. Live trading has connection drops, API changes, exchange halts, partial fills — backtests don't. Build for live-first; the backtest is a downstream feature.",
        },
        {
          name: "No state reconciliation on reconnect",
          body:
            "The bot loses WebSocket connection, reconnects, and resumes — without checking whether any orders filled or cancelled during the outage. Result: position state drift, phantom orders, duplicate submissions. Every reconnect must trigger a full state reconciliation with the exchange.",
        },
        {
          name: "Risk limits tested only in normal markets",
          body:
            "Position limits that work when prices are calm can be catastrophic when a flash crash causes orders to fill at unexpected levels. Stress-test risk limits against historical extreme events — COVID March 2020, May 2021 crypto flash, November 2022 FTX week, March 2023 Silicon Valley Bank week.",
        },
        {
          name: "One-exchange concentration",
          body:
            "Exchange outages happen. Exchange listings change. Exchange terms of service change. Strategies that depend on a single venue die the day that venue does something unexpected. Build for multi-venue even if you only trade one venue on day one.",
        },
        {
          name: "Insufficient monitoring",
          body:
            "Alerts that fire after a 30-minute delay are alerts about historical losses. Real-time anomaly detection — P&L deviation, fill rate drop, spread widening, API error rate spike — should fire within seconds and should page a human within minutes for anything unusual.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.candleChart",
      mediaSide: "right",
      body:
        "<strong>Languages:</strong> <strong>Rust</strong> or <strong>C++</strong> for latency-critical paths; <strong>Go</strong> for throughput-heavy infrastructure; <strong>Python</strong> for research, backtesting, and non-latency-critical strategies; <strong>TypeScript/Node</strong> for retail-facing surfaces.\n\n" +
        "<strong>Market data:</strong> <strong>CCXT</strong> for quick multi-venue prototyping; native exchange SDKs for production; <strong>Tardis</strong> for historical tick data; <strong>Kaiko</strong> / <strong>CryptoCompare</strong> for aggregated data feeds where vendor coverage matters.\n\n" +
        "<strong>OMS / execution:</strong> <strong>Hummingbot</strong> as a base framework when the fit is right; <strong>nautilus-trader</strong> for Python-native event-driven systems; custom Rust OMS for microsecond-tier strategies.\n\n" +
        "<strong>Storage:</strong> <strong>TimescaleDB</strong> or <strong>ClickHouse</strong> for market-data storage and time-series analytics; <strong>PostgreSQL</strong> for order history and accounting; <strong>Redis</strong> for hot state (current positions, open orders, rate-limit tracking).\n\n" +
        "<strong>Event streaming:</strong> <strong>Kafka</strong> for audit trail and replay; <strong>NATS JetStream</strong> for low-latency inter-service messaging; in-process channels for intra-strategy communication.\n\n" +
        "<strong>Infrastructure:</strong> <strong>AWS</strong> / <strong>GCP</strong> / <strong>Hetzner</strong> colocated with exchange-region endpoints (AWS Tokyo for Asia-based venues, AWS Frankfurt for EU, AWS Ashburn for US); bare-metal or dedicated instances for latency-sensitive workloads.\n\n" +
        "<strong>Monitoring:</strong> <strong>Grafana</strong> + <strong>Prometheus</strong> + <strong>Loki</strong>; <strong>Datadog</strong> for broader observability; custom P&L and risk dashboards built on the same data plane.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on trading builds",
      mediaToken: "topic.tradingScreen",
      mediaSide: "left",
      body:
        "We start with the <strong>failure model</strong>, not the strategy. Two weeks mapping every way the system can break — exchange outage, WebSocket flap, rate-limit hit, partial fill, mispriced order-book snapshot, clock drift, credential rotation, external dependency failure. That document sets the engineering discipline that prevents those failures from becoming P&L events.\n\n" +
        "Our engagement model is a senior systems engineer (low-latency systems experience), a quantitative engineer (understands your strategy and can translate it to production), an execution-algos specialist, and an ops engineer who runs the live system during the initial weeks of production. For regulated deployments we add a compliance engineer.\n\n" +
        "We always ship to a <strong>paper-trading environment</strong> first — identical code path, real market data, fake fills — for at least a few weeks. Live deployment starts with small capital and graduated increase against measurable reliability metrics. <em>The hardest week of any trading system's life is week one of live; the engineering discipline is about making that week boring.</em>",
    },

    {
      type: "UseCases",
      heading: "Trading-platform work we've shipped",
      items: [
        {
          company: "Westgate Alpha",
          stage: "Series B",
          region: "London, UK",
          situation:
            "Westgate runs a crypto-native quant strategy across seven venues (spot + perps). Their legacy Python stack was losing money to execution slippage on large orders and missing fills during volatility events. We rebuilt the OMS and execution layer in Rust with latency-tier separation: critical path in Rust, strategy logic unchanged in Python. Cross-venue execution slippage dropped roughly 40 basis points on comparable order flow, and the system handled a significant volatility event in Q2 2026 with no missed fills.",
          outcomeNumber: "~40bps execution slippage reduction",
          outcomeSecondary: "Rust OMS + execution · 7 venues · Python strategy intact",
        },
        {
          company: "Solstice Trading",
          stage: "Established prop desk",
          region: "Chicago, USA",
          situation:
            "Solstice wanted to add regulated crypto market-making to their traditional-finance desk. The constraint was integrating crypto venues with their existing FIX-based OMS and risk stack, not rebuilding. We built a protocol-bridge service translating between the FIX OMS and the heterogeneous crypto venue APIs (WebSocket, REST, proprietary). Market-making bots deployed on major spot pairs and perps without touching the existing risk-and-reporting infrastructure.",
          outcomeNumber: "Zero refactor to existing OMS",
          outcomeSecondary: "FIX↔crypto protocol bridge · MM bots on spot + perps",
        },
        {
          company: "Narrows Markets",
          stage: "Series A",
          region: "Singapore",
          situation:
            "Narrows is a retail-facing automated trading platform offering grid bots, DCA, and copy-trading strategies to Asian retail users across Binance, OKX, Bybit, KuCoin, and Gate. The engineering challenge was user-fund safety — the platform custodies strategy execution keys but not the user's actual funds. We built an isolated-execution architecture where each user's strategy ran in a sandboxed context with per-user rate limits, per-user loss circuit breakers, and auditable execution logs. Retail user count crossed 40K with zero per-user fund-loss incidents.",
          outcomeNumber: "40K+ users · 0 fund-loss incidents",
          outcomeSecondary: "Sandboxed execution · 5-venue integration · per-user circuit breakers",
        },
        {
          company: "Lantern Quant",
          stage: "Seed",
          region: "Dubai, UAE",
          situation:
            "Lantern is a VARA-licensed crypto DMA broker offering execution algos (TWAP, VWAP, POV, Iceberg) to Middle East institutional clients. The product was essentially 'a trad-fi execution platform for crypto,' with regulatory expectations to match. We built the execution layer with per-client order isolation, best-execution reporting for every fill, MiFID-equivalent audit trails for the VARA framework, and a client-facing portal for execution analytics. Passed VARA's operational examination on first pass.",
          outcomeNumber: "Passed VARA op exam on first pass",
          outcomeSecondary: "TWAP/VWAP/POV/Iceberg algos · MiFID-grade audit trails",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our trading work the through-line is systems that keep trading. P&L that survives the events that break less-disciplined stacks. Ops teams that sleep at night because the monitoring actually works. Strategies that can be added without rebuilding infrastructure.",
      stats: [
        { value: "30+", label: "Exchanges integrated" },
        { value: "$4B+", label: "Cumulative volume traded" },
        { value: "Sub-10ms", label: "Median execution latency on HFT builds" },
        { value: "Zero", label: "Customer-fund incidents on retail platforms" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building trading systems work with us",
      body:
        "We've built trading infrastructure through multiple market regimes — 2021 mania, 2022 crash, 2023–2024 consolidation, 2025–2026 institutional arrival. <em>The engineering instincts we use now were shaped by watching systems fail across all of those regimes.</em>\n\n" +
        "We ship the full stack under one roof: exchange connectivity, OMS, risk engine, strategy framework, execution algos, reconciliation, monitoring, and the ops tooling live trading demands. One team, one architecture, one security lead. No handoff between a quant consultancy, a low-latency shop, and a UX studio.\n\n" +
        "And we pair trading engineering with the launch and distribution work your product needs — broker partnerships for retail platforms, market-maker relationships for proprietary volume, exchange business-development for favourable rates, and the PR and community work for any consumer-facing automated trading product. <strong>A trading system is a technical product with commercial operating requirements. We build for both.</strong>",
    },
  ],

  testimonials: [
    { id: "meridian-naomi" },
    { id: "halcyon-pierre" },
    { id: "aurelia-jon" },
  ],

  faqs: [
    {
      q: "What is crypto trading bot development?",
      a: "<strong>Crypto trading bot development is the engineering of software that automatically places and manages orders in crypto markets based on a strategy.</strong> Categories range from retail tools (grid bots, DCA automation, copy-trading) to professional systems (execution algos, market-making, arbitrage, signal-driven strategies). Real production systems involve exchange connectivity across multiple venues, order management with deterministic state tracking, risk engines that enforce limits pre- and post-trade, reconciliation against exchange balances, and monitoring that catches failure modes in seconds.",
    },
    {
      q: "What drives the cost of a trading system?",
      a: "<strong>Cost is driven by latency tier, venue coverage, asset-class breadth, strategy count, user-facing surface, and regulatory scope — not by strategy logic, which is usually the smallest piece.</strong> A retail DCA bot is one build. A multi-venue low-latency arbitrage engine with cross-margin perpetuals coverage is an order of magnitude heavier. High-frequency market making with colocation and kernel-bypass networking is another order beyond that. We scope cost only after the latency and venue decisions are locked.",
    },
    {
      q: "What's included in a full trading infrastructure build?",
      a: "<strong>Exchange connectivity across your target venues, market-data feeds with redundancy, OMS with deterministic state tracking, risk engine with pre- and post-trade limits, strategy framework or explicit strategy implementation, execution algos appropriate to your order flow, reconciliation pipeline, monitoring dashboards, alerting, and runbooks for known failure modes.</strong> What isn't included: the strategy alpha itself (we implement your strategy; the edge is yours), exchange agreements and MM contracts (we integrate their APIs; you sign the deals), and regulatory licences (we build to your regulatory framework; you hold the licence).",
    },
    {
      q: "Rust, Go, Python, C++ — which for trading?",
      a: "<strong>It depends on latency tier and team skill.</strong> Latency-critical paths (HFT, aggressive market-making) benefit from Rust or C++ — microseconds matter. Throughput-heavy infrastructure (large OMS, signal-processing for many strategies) often lands well in Go. Strategy research and less-latency-sensitive execution (retail platforms, slow arb, signal-driven strategies) runs comfortably in Python with optimized hot paths. Most serious systems mix languages across the stack. We recommend based on specific latency and team considerations.",
    },
    {
      q: "How do you handle exchange API rate limits?",
      a: "<strong>As a first-class infrastructure concern, not a retry loop.</strong> Each venue has specific rate limits across endpoints — order placement, cancellation, market data, account queries. We build dedicated rate-limit tracking per venue per endpoint, queue orders when limits approach, prioritise critical operations (cancellations over placements), and alert when rate-limit exhaustion correlates with trading opportunity. Getting rate-limited during a volatility event is a known P&L risk, not a surprise.",
    },
    {
      q: "What regulatory considerations apply?",
      a: "<strong>It depends on what you're operating — proprietary trading for your own account is different from running a broker or a retail product.</strong> Proprietary crypto trading in permissive jurisdictions (BVI, Cayman, Seychelles) is lightest. Regulated broker-dealers need specific licences — VARA in UAE, MAS CMS in Singapore, MiFID-equivalent in EU. Retail-facing automated trading platforms add consumer-protection requirements. Running market-making on regulated venues (e.g., CME crypto futures) adds their specific exchange-member requirements. We architect to the regulatory reality.",
    },
    {
      q: "Can you integrate with DEXs like Uniswap or GMX?",
      a: "<strong>Yes — we integrate DEX execution alongside CEX execution.</strong> DEX execution has different characteristics: no rate limits but gas costs, MEV exposure requiring private-mempool solutions (Flashbots, MEV-Share), slippage modeling against AMM curves, atomic-execution patterns for arbitrage between DEXs and CEXs. We build DEX execution layers that fit into the same OMS and risk framework as CEX trading — from a strategy's perspective the venue type is configuration, not a different system.",
    },
    {
      q: "When should a team NOT build custom trading infrastructure?",
      a: "<strong>If an off-the-shelf platform (Hummingbot, 3Commas, Cryptohopper) delivers the strategy without material adaptation, use it — the engineering and ops cost of custom is real.</strong> If you're running one simple strategy on one or two venues at low capital, custom is overkill. Custom makes sense when venue coverage, latency requirements, risk controls, strategy complexity, or user-facing product needs genuinely exceed what off-the-shelf tools provide. Don't build custom because custom sounds sophisticated — build custom because the constraints require it.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Trading Bots & Tools", href: "/services/development/trading", active: true },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "AI & Automation", href: "/services/development/ai" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
    { label: "Payment Solutions", href: "/services/development/payment" },
  ],

  finalCta: {
    light: "Trading that survives",
    bold: "the events that matter.",
    subtitle: "OMS, risk, execution, monitoring — engineered before your first bad market day.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
