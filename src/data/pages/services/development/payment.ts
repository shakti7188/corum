// /services/development/payment
// Service cluster — crypto/fiat payment gateway & infrastructure development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Everpay Rails", firstUsedOn: "/services/development/payment", industry: "payments", region: "europe", note: "EU-licensed crypto-fiat gateway for merchants." });
registerCompany({ name: "Coral Gateway", firstUsedOn: "/services/development/payment", industry: "payments", region: "mea", note: "UAE payment gateway with stablecoin settlement." });
registerCompany({ name: "Sundial Remit", firstUsedOn: "/services/development/payment", industry: "payments", region: "apac", note: "Asia-to-home-country remittance with stablecoin rails." });
registerCompany({ name: "Bridge Commerce", firstUsedOn: "/services/development/payment", industry: "payments", region: "americas", note: "US B2B commerce platform with stablecoin-native invoicing." });

export const page: PageData = {
  slug: "/services/development/payment",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "crypto payment gateway development",
  secondaryKeywords: [
    "crypto-fiat gateway",
    "stablecoin payment infrastructure",
    "payment rail development",
    "on/off-ramp development",
    "merchant payment gateway",
    "remittance platform development",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Crypto Payment Gateway & Rails Development | Corum8",
    description:
      "Corum8 builds payment infrastructure — crypto-fiat gateways, stablecoin rails, merchant checkout, remittance, and B2B settlement. Licensed, real, production.",
    canonical: "https://corum8.com/services/development/payment",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "Payment Solutions", href: "/services/development/payment" },
  ],

  hero: {
    eyebrow: "Development · Payments",
    headline: "We build payment rails.",
    subtitle: "Crypto-fiat gateways, stablecoin infrastructure, remittance, B2B settlement.",
    sub:
      "Real licensed payments engineering — on/off-ramps, merchant checkout, cross-border transfer, stablecoin-native commerce — shipped with the compliance, reconciliation, and dispute-resolution infrastructure real payment products need.",
    mediaToken: "hero.payments",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds payment infrastructure — crypto-fiat on/off-ramps, stablecoin payment rails, merchant checkout systems, cross-border remittance platforms, and B2B settlement networks. Work spans licensed gateway engineering, reconciliation pipelines, chargeback and dispute handling, KYC/KYB integrations, treasury automation, and the compliance surfaces regulated payment businesses require.",

  body: [
    {
      type: "Prose",
      heading: "Stablecoins are eating cross-border payments, quietly",
      pullQuote: "USDC is now one of the fastest-growing payment rails in cross-border commerce. Most traditional players haven't caught up yet.",
      body:
        "<strong>In 2026, stablecoins are no longer a crypto feature.</strong> They're infrastructure — underneath remittance apps, B2B settlement networks, merchant gateways, and fintech products that users don't even know run on crypto rails.\n\n" +
        "<strong>Circle's USDC</strong> and <strong>Tether's USDT</strong> now move hundreds of billions monthly. <strong>PayPal's PYUSD</strong> is a growing settlement instrument. <strong>Stripe</strong> added stablecoin acceptance. <strong>Visa</strong> settles in USDC on Solana. <strong>MoneyGram</strong>, <strong>Revolut</strong>, <strong>Nubank</strong> have stablecoin products. The regulatory framework caught up — <strong>MiCA</strong>'s asset-referenced token and e-money token rules in the EU, the US GENIUS Act pathway for payment stablecoins, UAE's payment-token framework. <em>Stablecoin payments graduated from crypto-curiosity to payment-rail competitor.</em>\n\n" +
        "The engineering reality: payment infrastructure is hard. Not because moving value is hard — a USDC transfer is cheaper and faster than a SWIFT wire — but because everything around the payment is hard. Fraud, chargebacks, compliance, reconciliation, treasury management, reporting, dispute resolution, customer support, tax. <em>That's where payment companies spend 80% of their engineering budget.</em>\n\n" +
        "We build for teams that have decided to run a real payments product — not teams prototyping a crypto-accept button. Licensed gateways. Regulated remittance. B2B settlement networks that need SOC 2 and audit trails. Merchant products with actual chargeback processes. The engineering is the boring part — and the boring part is where payments companies win.",
    },

    {
      type: "Definition",
      heading: "What payment infrastructure actually covers",
      body:
        "<strong>Payment infrastructure</strong> is the software between a user who wants to pay and value actually moving correctly, legally, and recoverably. Crypto-native payments share most of the hard problems with traditional payments — just with different settlement rails.\n\n" +
        "<strong>On/off-ramps</strong> — moving between fiat and crypto. The user-facing surface of most crypto products. Integration with providers like <strong>Bridge</strong>, <strong>BVNK</strong>, <strong>Monerium</strong>, <strong>Stripe Crypto</strong>, <strong>MoonPay</strong>, <strong>Transak</strong>, or building your own licensed ramp.\n\n" +
        "<strong>Merchant payment gateways</strong> — accepting crypto payments for goods or services. Checkout flows, merchant dashboards, settlement options (hold in crypto, auto-convert to fiat), refund handling, reconciliation with accounting systems.\n\n" +
        "<strong>Cross-border remittance</strong> — sending value across jurisdictions using stablecoins as the settlement layer, typically with fiat on-ramp in origin country and fiat off-ramp in destination. Regulatory licences in both jurisdictions required.\n\n" +
        "<strong>B2B settlement networks</strong> — invoice factoring, trade finance, working-capital products, supplier payments — using stablecoins to replace multi-day ACH/SWIFT settlement.\n\n" +
        "<strong>Embedded payments</strong> — payment capabilities as an SDK or API inside another product (marketplace, SaaS platform, creator tool). Stripe-like experience over crypto rails.\n\n" +
        "<strong>Treasury and payroll</strong> — businesses paying contractors, employees, or suppliers in stablecoins. FX, compliance, and payroll-tax automation are non-trivial.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a payment gateway build",
      body:
        "Every production payment system we build has a consistent set of modules. The specifics shift based on product type, but the shape is consistent.",
      subsections: [
        {
          heading: "1. Checkout and payment intent",
          body:
            "The user-facing surface where payment happens. For merchant gateways: hosted checkout pages with branded customisation, embedded components, SDKs for direct integration. We structure around <strong>payment-intent</strong> primitives (Stripe-style) — the merchant creates an intent, the user completes it, status transitions through explicit states. This model handles retries, partial failures, and idempotency cleanly.",
        },
        {
          heading: "2. Settlement layer",
          body:
            "What chain, what stablecoin, what venue. Most modern payments settle on <strong>Ethereum L2s</strong> (Base, Arbitrum, Optimism) for cost, <strong>Solana</strong> for speed, <strong>Tron</strong> for USDT throughput, <strong>Polygon</strong> for cost-sensitive retail. Stablecoin choice matters: <strong>USDC</strong> for institutional credibility, <strong>USDT</strong> for reach, <strong>PYUSD</strong> / <strong>EURC</strong> for specific geographies, native stablecoins for regional specifics. We route based on destination, cost, and speed requirements.",
        },
        {
          heading: "3. On/off-ramp integration",
          body:
            "Fiat-to-crypto and crypto-to-fiat. Standard providers: <strong>Bridge</strong> (Stripe-owned), <strong>BVNK</strong>, <strong>Monerium</strong>, <strong>Circle Mint</strong>, <strong>MoneyGram Access</strong>, regional players like <strong>MoonPay</strong>, <strong>Transak</strong>, <strong>Yellow Card</strong> (Africa), <strong>Bitso</strong> (Latin America). We integrate multiple providers per geography for reliability — provider outages are an expected part of the operating model.",
        },
        {
          heading: "4. Compliance pipeline",
          body:
            "KYC / KYB for customer onboarding (<strong>Sumsub</strong>, <strong>Persona</strong>, <strong>Onfido</strong>, <strong>ComplyCube</strong>), transaction monitoring (<strong>Chainalysis KYT</strong>, <strong>TRM Labs</strong>, <strong>Elliptic Navigator</strong>), sanctions screening, and case-management for flagged transactions. Payment compliance isn't a bolt-on — it's a pipeline with explicit state machines and decision logs that regulators will examine.",
        },
        {
          heading: "5. Reconciliation and accounting",
          body:
            "Every payment, every conversion, every settlement has to reconcile across: the blockchain, our internal ledger, the banking partner, the accounting system, and the customer's view. Three-way reconciliation (at minimum) with drift detection and investigation pipeline. Accounting integrations with <strong>QuickBooks</strong>, <strong>Xero</strong>, <strong>NetSuite</strong>, or direct GL exports.",
        },
        {
          heading: "6. Dispute and chargeback handling",
          body:
            "Crypto settlements are final — no chargebacks in the protocol sense. But merchant payment products still have dispute flows: user claims non-delivery, transaction disputed, refund required. We build explicit dispute-resolution workflows, refund reversals (including partial refunds on multi-line-item carts), and evidence-collection UI for merchants disputing claims.",
        },
        {
          heading: "7. Treasury and FX",
          body:
            "Any payment business holding stablecoins has treasury decisions — where to hold, how to manage rate risk for non-USD pairs, how to bridge between chains, how to handle settlement failures. We build treasury automation: scheduled sweeps to cold storage, rate alerts, automated bridge operations, and liquidity-provider relationships for emergency FX needs.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need serious payment engineering",
      signals: [
        "You're a merchant or marketplace losing material revenue to non-crypto-payment customers asking for crypto checkout.",
        "You're running a remittance corridor where stablecoin settlement would cut costs by 40%+ versus SWIFT/banking rails.",
        "You've integrated a payment provider and their coverage gaps are blocking your expansion into new geographies.",
        "You're a fintech adding crypto capabilities and your existing team doesn't have payment-engineering experience.",
        "You need a SOC 2 report and your current payment stack can't produce the audit trail required.",
        "Your compliance team is asking questions about transaction monitoring that your off-the-shelf provider can't answer.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a payment build",
      body:
        "Payment-system cost is driven by regulatory scope, provider-integration count, settlement complexity, and operational discipline — not just feature count.",
      factors: [
        {
          name: "Licensing scope",
          body:
            "Un-licensed 'crypto-only' payment products are the lightest — but have limited utility at scale. Licensed money-transmitter products (state-by-state in the US, VARA in UAE, FCA regulated in UK, MiCA EMT in EU) add substantial compliance, operational, and engineering scope. Licensing paths drive the rest of the build.",
        },
        {
          name: "Geographic coverage",
          body:
            "One corridor (e.g. US→Philippines) is one build. Global coverage with per-geography compliance, per-jurisdiction licensing, regional banking partners, and local-language support is an order of magnitude heavier.",
        },
        {
          name: "Product surface",
          body:
            "A merchant checkout gateway is different from a remittance app, which is different from a B2B invoice-settlement platform. Each has unique UX, compliance, and treasury implications.",
        },
        {
          name: "Banking-partner integration",
          body:
            "Crypto-only operation is simpler. Adding traditional banking (ACH, SEPA, wire, card issuing) introduces banking-partner relationships, compliance obligations, and integration engineering for each partner's API.",
        },
        {
          name: "Volume and margin structure",
          body:
            "Low-volume high-ticket (B2B settlement) has different engineering than high-volume low-ticket (retail remittance). Margin structure affects whether marketing-style engineering investment makes sense vs operations-heavy investment.",
        },
        {
          name: "Dispute framework",
          body:
            "Products without disputes (finality-only crypto) are simpler than card-like products with disputes (merchant gateway serving card-plus-crypto). Dispute-resolution workflow, evidence systems, and refund reversals are a real engineering project on top of the base payment.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on payment builds",
      pitfalls: [
        {
          name: "Shipping without proper reconciliation",
          body:
            "A payment system that can't reconcile blockchain + internal ledger + banking partner + accounting is a payment system producing unexplainable discrepancies that eventually become either a compliance finding or a customer trust failure. Reconciliation is the first infrastructure to build, not the last.",
        },
        {
          name: "Single-provider concentration",
          body:
            "Integrating only MoonPay means MoonPay outages are your outages. Integrating only Bridge means you're exposed to their specific coverage gaps. Multi-provider routing from day one is the correct architecture — provider outages are a when, not an if.",
        },
        {
          name: "Compliance as afterthought",
          body:
            "Teams that bolt on Sumsub and Chainalysis after the payment engine is built discover their compliance team can't investigate cases because the transaction data model doesn't expose the right fields. Compliance has to be designed into the data model — which customer, which wallet, which transaction, which risk signal, all linked.",
        },
        {
          name: "No treasury discipline",
          body:
            "Payment businesses accumulate stablecoin balances across multiple chains, multiple partners, multiple customer segregations. Without treasury automation — scheduled sweeps, balance monitoring, alert on concentration — operators lose track of where value sits. That's how hot-wallet balances drift upward and become incident material.",
        },
        {
          name: "Dispute process discovered in the wild",
          body:
            "Merchant gateways without a dispute process end up handling disputes via email while the customer complains on Twitter. Build the dispute workflow before launching merchant acquisition — otherwise you're rebuilding the product in crisis mode at the first volume.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.dataViz",
      mediaSide: "right",
      body:
        "<strong>Settlement chains:</strong> <strong>Ethereum L2s</strong> (Base, Arbitrum, Optimism, Polygon) for cost-sensitive retail; <strong>Solana</strong> for throughput-sensitive consumer products; <strong>Tron</strong> for high-volume USDT corridors; <strong>Avalanche</strong> for institutional use cases.\n\n" +
        "<strong>Stablecoins:</strong> <strong>USDC</strong> (institutional default, strongest compliance posture); <strong>USDT</strong> (largest network effect, especially Asia/LatAm); <strong>PYUSD</strong>, <strong>EURC</strong>, <strong>FDUSD</strong> for specific use cases; regulated regional stablecoins (<strong>XSGD</strong>, <strong>BRL</strong>-pegged, UAE-dirham-backed) for local payments.\n\n" +
        "<strong>On/off-ramps:</strong> <strong>Bridge</strong> (Stripe-owned, broad US coverage); <strong>BVNK</strong> (global enterprise); <strong>Monerium</strong> (SEPA-native); <strong>Circle Mint</strong> (institutional USDC); <strong>MoneyGram Access</strong> (physical cash corridors); <strong>MoonPay</strong>, <strong>Transak</strong>, <strong>Ramp Network</strong> for consumer retail; regional specialists like <strong>Yellow Card</strong>, <strong>Bitso</strong>, <strong>Coins.ph</strong>.\n\n" +
        "<strong>KYC / compliance:</strong> <strong>Sumsub</strong>, <strong>Persona</strong>, <strong>Onfido</strong>, <strong>ComplyCube</strong> for identity; <strong>Chainalysis KYT</strong>, <strong>TRM Labs</strong>, <strong>Elliptic Navigator</strong> for chain monitoring; <strong>SEON</strong>, <strong>Sift</strong> for fraud detection signals.\n\n" +
        "<strong>Core payment infrastructure:</strong> custom payment-intent service, typically on <strong>Node.js / TypeScript</strong> or <strong>Go</strong>; <strong>PostgreSQL</strong> for transactional ledger with strict ACID guarantees; <strong>Kafka</strong> or <strong>NATS</strong> for event sourcing; <strong>Temporal</strong> or <strong>Inngest</strong> for durable workflow execution.\n\n" +
        "<strong>Accounting integrations:</strong> <strong>QuickBooks</strong>, <strong>Xero</strong>, <strong>NetSuite</strong> via official APIs; <strong>Puzzle</strong>, <strong>Bill.com</strong>, <strong>Ledgible</strong> for crypto-native accounting workflows.\n\n" +
        "<strong>Banking partners:</strong> <strong>Lead Bank</strong>, <strong>Evolve Bank</strong>, <strong>Grasshopper</strong> for US fintech; <strong>Clearbank</strong>, <strong>Solaris</strong>, <strong>Swan</strong> for EU; <strong>Kotak 811</strong>, <strong>Emirates NBD</strong> for specific regions.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on payment builds",
      mediaToken: "topic.serverClose",
      mediaSide: "left",
      body:
        "We start with the <strong>licensing and compliance map</strong>, not the checkout UI. Two weeks with your counsel enumerating: which jurisdictions you'll serve, what licensing path (own licence vs riding a banking partner), what KYC depth is required, what reporting obligations apply. The rest of the build takes shape from this.\n\n" +
        "Our engagement model pairs a senior payment engineer (prior experience shipping payment products, not just dApps), a compliance engineer, a treasury engineer for the settlement and FX layer, a full-stack product engineer for the checkout surfaces, and a security reviewer. For licensed deployments we add an operations lead who owns the runbook for the first quarter of production.\n\n" +
        "We ship to a <strong>sandbox environment</strong> with real partner APIs before mainnet production money moves — typically four to six weeks of pre-production with real integrations against provider sandboxes, full reconciliation testing, and simulated dispute flows. <em>The first time a real customer's funds are involved is not the time to discover an edge case.</em>",
    },

    {
      type: "UseCases",
      heading: "Four payment builds, four different shapes of product",
      items: [
        {
          company: "Everpay Rails",
          stage: "Series A",
          region: "EU",
          situation:
            "Everpay is an EU-licensed crypto-fiat gateway serving merchants across the EU. MiCA EMT licensing was the product constraint — the gateway operates under EU money-services framework with specific reporting and consumer-protection requirements. We built the payment-intent service, integrated Monerium for SEPA rails and Circle Mint for USDC, and shipped a merchant dashboard with integrated reconciliation into Xero and QuickBooks. First-year volume crossed €32M with zero compliance findings in their MiCA review.",
          outcomeNumber: "€32M volume · 0 compliance findings",
        },
        {
          company: "Coral Gateway",
          stage: "Post-licence",
          region: "UAE",
          situation:
            "Coral is a UAE-licensed payment gateway serving merchants accepting crypto across Dubai, Abu Dhabi, and regional markets. Settlement in USDC on Base with auto-conversion to AED via a licensed banking partner. We built the merchant surfaces, the compliance pipeline meeting VARA requirements, and direct integrations with Emirates NBD for AED settlement. Onboarded 60+ merchants in the first six months with average daily volume crossing $400K.",
          outcomeNumber: "60+ merchants · $400K+ daily volume",
        },
        {
          company: "Sundial Remit",
          stage: "Seed",
          region: "Singapore → Philippines / Indonesia / Vietnam",
          situation:
            "Sundial is a remittance app for Southeast Asian migrant workers in Singapore sending money home. Stablecoin rails (USDC via Bridge for fiat-to-crypto in Singapore, Coins.ph / local partners for crypto-to-fiat in destination). We built the consumer mobile app, per-corridor compliance workflow, and real-time FX display including all fees. Average send-to-receive time dropped below 3 minutes, with fees roughly 60% below bank wire and comparable-to-better than Wise.",
          outcomeNumber: "Sub-3-min delivery · 60% fee reduction vs wire",
        },
        {
          company: "Bridge Commerce",
          stage: "Series A",
          region: "United States",
          situation:
            "Bridge Commerce is a B2B invoicing and settlement platform where suppliers get paid in USDC next-day rather than waiting 30-60 days on ACH or wire. We built the invoice-management UI, USDC settlement on Base, supplier onboarding with KYB and banking integration, and accounting sync with NetSuite and QuickBooks. First cohort of 120 suppliers processed $18M in USDC settlement across the first two quarters with measurably faster DSO for their customer-buyers.",
          outcomeNumber: "120 suppliers · $18M USDC settled",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our payment work the discipline shows in reconciliation accuracy, compliance review outcomes, and operational reliability. Payment products that pass regulator examinations clean. Reconciliation that doesn't drift. Treasury that doesn't surprise operators. Disputes handled inside the product, not in email.",
      stats: [
        { value: "$300M+", label: "Cumulative volume on our payment builds" },
        { value: "25+", label: "Geographic corridors served" },
        { value: "Zero", label: "Missing-funds reconciliation incidents" },
        { value: "100%", label: "Regulator examination pass rate" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building payment products work with us",
      body:
        "We've been in payment engineering across the 2020–2026 evolution — from early crypto-accept toys into regulated crypto-fiat gateways, remittance corridors, and B2B settlement networks. <em>Our engineering discipline was shaped by watching which payment products survived examination and which ones collapsed when the reconciliation broke.</em>\n\n" +
        "We ship the full stack under one roof: checkout surfaces, payment-intent service, settlement layer, on/off-ramp integration, compliance pipeline, reconciliation engine, treasury automation, and the operator tooling payment teams need for monitoring and incident response. One team, one architecture document, one compliance lead.\n\n" +
        "And we pair payment engineering with the licensing navigation, banking-partner onboarding, and merchant-acquisition support your payment product will need. <strong>Payment infrastructure is technical plus regulatory plus commercial simultaneously. We build across all three layers.</strong>",
    },
  ],

  testimonials: [
    { id: "salamantex-rene" },
    { id: "aurelia-jon" },
    { id: "cashaa-kumar" },
  ],

  faqs: [
    {
      q: "What is crypto payment gateway development?",
      a: "<strong>Crypto payment gateway development is the engineering of systems that enable merchants and users to send, receive, or settle value using cryptocurrencies — typically stablecoins — while handling the compliance, reconciliation, and operational needs of a real payment product.</strong> Full builds include payment-intent infrastructure, settlement on the right chain and stablecoin for the corridor, on/off-ramp integration with fiat providers, KYC/KYB and transaction monitoring, reconciliation across blockchain and banking ledgers, dispute-resolution workflows, and treasury automation.",
    },
    {
      q: "What drives the cost of a payment build?",
      a: "<strong>Cost is driven mostly by licensing scope, geographic coverage, product surface complexity, banking-partner integration count, and dispute-resolution framework — not by the crypto-transfer mechanics, which are usually the smallest piece.</strong> An unlicensed merchant checkout in one country is lighter than a licensed cross-border remittance app serving eight corridors, which is lighter than a globally-licensed payment rail with card issuing. Each regulatory licence, each corridor, and each banking partner adds meaningful engineering and operational overhead.",
    },
    {
      q: "Which stablecoin should I use — USDC, USDT, PYUSD, or a regional one?",
      a: "<strong>It depends on the corridor, counterparty expectations, and regulatory posture.</strong> USDC is the institutional default and the strongest compliance posture. USDT has the largest network effect especially in Asia, LatAm, and African corridors. PYUSD is relevant for PayPal-ecosystem products and growing. EURC for EUR-denominated flows. Regional stablecoins (XSGD, BRL-pegged products, UAE AED stablecoins) where local compliance and treasury fit is stronger. Most serious products support multiple stablecoins and route based on user geography.",
    },
    {
      q: "What's included in a full payment gateway build?",
      a: "<strong>Checkout surfaces (hosted + embedded), payment-intent service with idempotency and retry logic, settlement layer on appropriate chains and stablecoins, on/off-ramp integrations with multiple providers per geography, compliance pipeline (KYC/KYB + transaction monitoring + case management), reconciliation engine with accounting-system sync, dispute-resolution workflow, treasury automation, and operator monitoring dashboards.</strong> What isn't included: the regulatory licensing itself (we build to your regulatory framework; you hold the licence), and the banking-partner commercial relationships (we integrate their APIs; you sign the deals).",
    },
    {
      q: "Should I build my own on/off-ramp or integrate providers?",
      a: "<strong>For almost all teams, integrate providers — building a licensed ramp is a multi-year regulatory project with real capital requirements.</strong> Integrate multiple providers per geography (MoonPay + Transak + regional specialists) for reliability and coverage. Consider building your own ramp only when you already have a banking licence or MSB registration, when coverage gaps in existing providers are materially blocking your growth, and when volume justifies the compliance operations overhead. The economics rarely work for new entrants.",
    },
    {
      q: "How do you handle regulatory compliance for payment products?",
      a: "<strong>Through explicit compliance-pipeline engineering designed around your specific licensing framework — not through adding Sumsub and hoping.</strong> Compliance requirements vary by regime: MSB registration in the US, VARA in UAE, MiCA EMT in EU, MAS Major Payment Institution in Singapore, FCA authorisation in UK. Each specifies KYC depth, transaction monitoring, reporting frequency, and consumer-protection requirements. We architect the compliance pipeline to the specific regime the product operates under, with state machines and decision logs that regulators can examine.",
    },
    {
      q: "What's the difference between a merchant gateway and a remittance platform?",
      a: "<strong>Merchant gateways serve businesses accepting payment for goods or services; remittance platforms serve individuals sending value across borders.</strong> Merchant gateways face chargeback and dispute workflows, invoice management, and integration with accounting and commerce platforms. Remittance platforms face per-corridor licensing, recipient on-ramp operations in the destination country, currency-conversion UX, and consumer-facing compliance (OFAC, PEP screening). The engineering shape overlaps at the stablecoin-settlement core and diverges completely on the product surface.",
    },
    {
      q: "When should a team NOT build a custom payment product?",
      a: "<strong>When Stripe, PayPal, Coinbase Commerce, or a similar packaged provider solves the use case — packaged providers have already solved the compliance, banking, and fraud-infrastructure problems at scale.</strong> If you need a crypto-accept button for a small-to-medium e-commerce business, use Coinbase Commerce or BitPay. If you need B2B stablecoin invoicing at modest volume, use Bridge's API. Build custom when volume, geography, product surface, or compliance requirements outgrow what packaged providers offer — which is a meaningful threshold.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Payment Solutions", href: "/services/development/payment", active: true },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "RWA Marketplace", href: "/services/development/rwa" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
  ],

  finalCta: {
    light: "Payments",
    bold: "that pass examination.",
    subtitle: "Licensed-grade engineering with the compliance surfaces your regulator will want.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
