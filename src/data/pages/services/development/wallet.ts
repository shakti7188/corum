// /services/development/wallet
// Service cluster — crypto wallet infrastructure development.
// Target: ~2,800-3,200 words. Template: ServiceCluster.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Vermilion Wallet", firstUsedOn: "/services/development/wallet", industry: "wallet", region: "global", note: "Enterprise MPC wallet for institutional custody." });
registerCompany({ name: "Tidepool Keys", firstUsedOn: "/services/development/wallet", industry: "wallet", region: "apac", note: "Retail multi-chain wallet, Singapore fintech." });
registerCompany({ name: "Sienna Vault", firstUsedOn: "/services/development/wallet", industry: "wallet", region: "europe", note: "EU-regulated custody for family offices." });
registerCompany({ name: "Haven Self-Custody", firstUsedOn: "/services/development/wallet", industry: "wallet", region: "americas", note: "Non-custodial browser wallet with social recovery." });

export const page: PageData = {
  slug: "/services/development/wallet",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "crypto wallet development",
  secondaryKeywords: [
    "cryptocurrency wallet development",
    "MPC wallet development",
    "custodial wallet",
    "non-custodial wallet",
    "multi-chain wallet infrastructure",
    "white label wallet",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Crypto Wallet Development — MPC, Custodial & Non-Custodial | Corum8",
    description:
      "Corum8 builds wallet infrastructure that holds real value at scale — MPC, custodial, non-custodial, multi-chain. Threshold signing, hot/cold rotation, recovery.",
    canonical: "https://corum8.com/services/development/wallet",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
  ],

  hero: {
    eyebrow: "Development · Wallets",
    headline: "We build wallet infrastructure.",
    subtitle: "Custodial, non-custodial and MPC — holding real value at real scale.",
    sub:
      "Key management, multi-chain support, hot/cold rotation, threshold signing, and recovery flows that users can actually complete — shipped as one integrated stack, not a vendor checklist.",
    mediaToken: "hero.wallet",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds production-grade wallet infrastructure — MPC, custodial, non-custodial, and hybrid. The work spans key generation, multi-chain transaction signing, hot/cold segregation, threshold signatures, recovery and social-recovery flows, and the admin surfaces your security team will actually live inside.",

  body: [
    {
      type: "Prose",
      heading: "Why wallets are the hardest product in Web3 to ship well",
      pullQuote: "If a wallet works 99.9% of the time, 0.1% of the user base loses money. That's not acceptable.",
      pullAttrib: "Corum8 security lead",
      body:
        "<strong>A wallet is the last line of defence between a user and their money.</strong> Every other Web3 product can survive a bug. A wallet can't.\n\n" +
        "This is the category where 'move fast and break things' is actively dangerous. A matching-engine hiccup costs a venue a few seconds of missed trades. A wallet hiccup can permanently lose seven figures of user funds and end the product. <em>Teams that treat wallets like ordinary software underestimate what ordinary means here.</em>\n\n" +
        "The engineering work divides across three hard problems: key management (how secrets live, rotate, and recover), chain coverage (how the same abstraction handles <strong>Bitcoin</strong>, <strong>Ethereum</strong>, <strong>Solana</strong>, <strong>TON</strong>, <strong>Tron</strong> and the dozens of L2s that followed), and UX (how a non-technical user signs a transaction without being socially engineered into signing the wrong one).\n\n" +
        "We build wallets for teams who know all three problems are real. Exchanges treasuring user funds. Fintechs offering custodial crypto alongside fiat. Institutional desks moving eight-figure positions across jurisdictions. And consumer apps trying to give retail users self-custody without requiring them to understand cryptography.",
    },

    {
      type: "Definition",
      heading: "What wallet development actually covers",
      body:
        "<strong>Wallet development</strong> is the engineering behind any software surface where users hold, move, or authorise transactions of digital assets. Wallets split into three broad categories, each with different trust assumptions and regulatory surfaces.\n\n" +
        "<strong>Custodial wallets</strong> hold keys on behalf of users — the operator is the custodian. Exchange wallets (<strong>Binance</strong>, <strong>Coinbase</strong>), institutional custody (<strong>Fireblocks</strong>, <strong>Copper</strong>, <strong>BitGo</strong>), and fiat-on-ramp wallets all live here. The regulatory surface is heavy: licensing, reserves, audits, segregation of client funds.\n\n" +
        "<strong>Non-custodial wallets</strong> put the keys on the user's device. <strong>MetaMask</strong>, <strong>Phantom</strong>, <strong>Rainbow</strong>, hardware wallets from <strong>Ledger</strong> and <strong>Trezor</strong>. The operator never touches funds. The regulatory surface is lighter but the UX problem gets harder — recovery, gas, chain switching, transaction simulation.\n\n" +
        "<strong>MPC (multi-party computation) wallets</strong> split keys across parties using threshold signatures — usually the user's device, the operator's server, and a third-party co-signer. <em>No single party ever holds a full key.</em> This is the category most institutional and hybrid custodial products have migrated to, and it's where the most interesting engineering work happens in 2026.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a wallet build",
      body:
        "Every wallet we build shares a core architecture. The specifics shift based on custodial vs non-custodial vs MPC, but the modules are the same.",
      subsections: [
        {
          heading: "1. Key management",
          body:
            "Where keys are generated, how they're stored, how they're rotated, how they're backed up, and how they're destroyed when a user closes an account. For <strong>custodial</strong>: HSMs (<strong>YubiHSM 2</strong>, <strong>AWS CloudHSM</strong>, <strong>Thales Luna</strong>) and operator policy. For <strong>non-custodial</strong>: secure enclaves (<strong>Apple Secure Enclave</strong>, <strong>Android StrongBox</strong>), biometric gating, and seed-phrase export flows that survive real-world user error. For <strong>MPC</strong>: threshold-signature schemes (<strong>GG20</strong>, <strong>CMP</strong>, <strong>FROST</strong>) with explicit protocol steps that we implement and audit independently.",
        },
        {
          heading: "2. Multi-chain transaction signing",
          body:
            "A useful wallet supports <strong>Bitcoin</strong>, <strong>Ethereum</strong>, <strong>Solana</strong>, <strong>TON</strong>, <strong>Tron</strong>, <strong>Polygon</strong>, <strong>BNB Chain</strong>, <strong>Arbitrum</strong>, <strong>Optimism</strong>, <strong>Base</strong>, <strong>Avalanche</strong> at minimum. Each chain has its own signature scheme (ECDSA, EdDSA, Schnorr), its own address format, its own fee model, and its own quirks. We abstract these into a chain-agnostic transaction layer so product engineering doesn't have to care which chain a user is on — but the abstraction never hides the parts that matter for security.",
        },
        {
          heading: "3. Hot/cold segregation",
          body:
            "Operational liquidity lives in a hot wallet — online, fast, exposed. Long-term reserves live in a cold wallet — offline, air-gapped, slow to reach. The question isn't whether you have both. It's whether the movement between them is automated, auditable, and resistant to insider threat. We build rebalancing daemons that rotate funds under policy (e.g. 'keep hot wallet at less than 5% of AUM, move excess to cold on a random interval'), with explicit approval steps and anomaly alerts.",
        },
        {
          heading: "4. Recovery and social recovery",
          body:
            "The single biggest reason non-custodial wallets fail in production is that ordinary users lose their seed phrases. Social recovery (via <strong>ERC-4337</strong> account abstraction, <strong>Argent</strong>-style guardians, or custom multi-sig schemes) solves this by letting users recover access through trusted friends, hardware devices, or backup services without ever writing down a 24-word mnemonic. We build the recovery flow and we stress-test it — because a recovery flow nobody can complete during panic is worse than no recovery flow at all.",
        },
        {
          heading: "5. Transaction simulation and signing UX",
          body:
            "A signed transaction is legal and irreversible. The UX must make it impossible for a user to sign what they don't intend to sign. We build transaction simulation (preview the actual state change before signing), phishing detection (flag suspicious contract calls), and explicit confirmation for destructive actions (set approvals, infinite allowances, seed-phrase exports). The goal is that a user can't be socially engineered into losing funds even if the interface is under active attack.",
        },
        {
          heading: "6. Admin, compliance, and audit surfaces",
          body:
            "Custodial and MPC products need operator tools: freeze accounts, flag suspicious transactions, produce auditable logs for regulators (<strong>VARA</strong>, <strong>MiCA</strong>, <strong>FCA</strong>, <strong>FinCEN</strong>), export balance attestations. Chain-analytics integration (<strong>Chainalysis</strong>, <strong>TRM Labs</strong>, <strong>Elliptic</strong>) happens here, not at the transaction-signing layer. We design the admin so compliance officers can answer regulator questions without engineering support.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need a custom wallet build — not a SDK wrapper",
      signals: [
        "You're running a custodial product and the white-label wallet provider's roadmap doesn't include something you need next quarter.",
        "Your licensing jurisdiction (VARA, MAS, MiCA) requires audit trails that vendor APIs can't produce end-to-end.",
        "You're holding eight-figure AUM and Fireblocks / BitGo fees at that scale are now higher than engineering costs.",
        "Your users need chains the vendor doesn't support yet — or UX patterns that need direct control of the signing layer.",
        "You're building something categorically new: an account-abstraction wallet, a social-recovery product, a wallet-as-a-platform.",
        "Security reviews keep surfacing risks that exist because you don't own the full stack.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a wallet build",
      body:
        "The decisions that move the cost by 10× on a wallet build happen in the first two weeks. Here's what we put on the table before writing code.",
      factors: [
        {
          name: "Custodial vs non-custodial vs MPC",
          body:
            "Each category has different HSM, custody, and licensing costs. MPC is the most capital-efficient long-term and the most expensive short-term because the threshold-signature protocols need independent audit.",
        },
        {
          name: "Chain coverage on day one",
          body:
            "Five chains is one build. Twenty chains is a fundamentally different build. Each additional chain adds address validation, fee estimation, RPC redundancy, transaction parsing, and chain-specific edge cases (e.g. UTXO vs account models, fee-bumping on Bitcoin, rent on Solana).",
        },
        {
          name: "HSM and custody tooling",
          body:
            "Integrating <strong>Fireblocks</strong> / <strong>BitGo</strong> / <strong>Copper</strong> is faster. Building your own HSM-backed MPC stack is more capital-efficient long-term but requires cryptography engineering and a formal security review — non-trivial scope.",
        },
        {
          name: "Recovery model",
          body:
            "A plain 24-word mnemonic is cheapest. Social recovery via ERC-4337 or Argent-style guardians adds complexity but dramatically reduces user-loss rates. Institutional products often need hardware-backed multi-sig with geographic key distribution.",
        },
        {
          name: "Regulatory scope",
          body:
            "A single-jurisdiction wallet (e.g. UAE only under VARA) is a different compliance pipeline from a multi-jurisdiction product. Serving EU users means MiCA custody controls. Serving US users means state-by-state money transmitter considerations.",
        },
        {
          name: "Integration surface",
          body:
            "Standalone consumer wallet vs embedded inside an exchange vs wallet-as-a-service for other fintechs — all three have different engineering shape, API surface, and support costs.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on wallet builds",
      pitfalls: [
        {
          name: "Single-sig hot wallets holding material AUM",
          body:
            "Still happens in 2026. A product goes live, funds accumulate, and the cold-to-hot rebalancing script nobody wrote means a growing percentage of AUM sits in a single-sig wallet that one compromised engineer machine can drain. Build the rebalancing automation on day one.",
        },
        {
          name: "Seed-phrase UX that assumes users are careful",
          body:
            "Users aren't careful. They screenshot seeds. They email them to themselves. They store them in password managers that then get breached. <em>If your product requires perfect user hygiene to be safe, your product is unsafe.</em> Build recovery flows that don't require users to never make mistakes.",
        },
        {
          name: "Transaction signing without simulation",
          body:
            "Users get phished. Malicious dApps ask for infinite allowances. Contract calls that look innocent drain funds. If your wallet signs without simulating first, you'll eventually eat a customer-loss event that was entirely preventable.",
        },
        {
          name: "Chain support that silently breaks",
          body:
            "RPC providers have outages. Chains upgrade. A wallet that doesn't monitor transaction success rates per chain ships degraded experiences that only show up in support tickets. We build per-chain health monitoring from day one.",
        },
        {
          name: "Compliance as an export button",
          body:
            "Regulators don't want a CSV. They want explicit audit trails with decision logs, operator actions, and chain-analytics decisions tied to specific transactions. If your compliance stack is a scheduled export, you'll discover this the hard way during first examination.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.security",
      mediaSide: "right",
      body:
        "<strong>Key storage:</strong> HSMs (YubiHSM 2, AWS CloudHSM, Thales Luna) for custodial; <strong>Secure Enclave</strong> / <strong>StrongBox</strong> for mobile; cloud KMS (AWS KMS, GCP KMS) for operational secrets.\n\n" +
        "<strong>MPC libraries:</strong> ZenGo's <strong>multi-party-ecdsa</strong>, <strong>Binance's tss-lib</strong>, Fireblocks' proprietary stack, or a custom implementation of <strong>GG20</strong> / <strong>CMP</strong> / <strong>FROST</strong> when the use case warrants it. Every custom implementation gets independent cryptography review before mainnet.\n\n" +
        "<strong>Chain SDKs:</strong> <strong>ethers.js</strong> / <strong>viem</strong> / <strong>web3.js</strong> for EVM; <strong>@solana/web3.js</strong> for Solana; <strong>@ton/ton</strong> for TON; <strong>TronWeb</strong> for Tron; native RPC for Bitcoin; chain-specific libraries for the rest.\n\n" +
        "<strong>Account abstraction:</strong> <strong>ERC-4337</strong> bundler infrastructure (<strong>Stackup</strong>, <strong>Pimlico</strong>, <strong>Alchemy AA</strong>) for smart-contract wallets; <strong>Safe{Wallet}</strong> module system for institutional multi-sig.\n\n" +
        "<strong>Transaction simulation:</strong> <strong>Tenderly</strong>, <strong>Blocknative</strong>, or custom simulation infrastructure on top of <strong>Foundry</strong> / <strong>Hardhat</strong>.\n\n" +
        "<strong>Client:</strong> native Swift and Kotlin when the user base warrants; React Native earlier; browser extensions via Manifest V3.\n\n" +
        "<strong>Compliance:</strong> <strong>Chainalysis Signals</strong>, <strong>TRM Labs</strong>, <strong>Elliptic</strong> for transaction monitoring; custom case-management on top of vendor APIs.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on wallet builds",
      mediaToken: "topic.devWorking",
      mediaSide: "left",
      body:
        "We start with the <strong>threat model</strong>, not the feature list. Two weeks spent explicitly enumerating who might attack the wallet (external phisher, malicious employee, state actor, ransomware operator) and what each attack costs in recoverable vs unrecoverable loss. That document shapes every architecture decision after.\n\n" +
        "Our engagement model is a senior cryptography engineer, a chain-integration engineer, a security reviewer, and a product engineer for the client surfaces. Your team plugs in where you have depth. <em>Wallets are where paired work matters most — a single person should never be the only one who understands a critical path.</em>\n\n" +
        "We don't ship mainnet without independent cryptography review. For custom MPC or smart-contract-wallet code, we commission audits from at least one firm from <strong>Trail of Bits</strong>, <strong>Least Authority</strong>, or <strong>ConsenSys Diligence</strong> — and the audit runs in parallel with a separate security review by our own team. No dual-signed risk assessment, no mainnet.",
    },

    {
      type: "UseCases",
      heading: "Four wallet builds, four different shapes of problem",
      items: [
        {
          company: "Vermilion Wallet",
          stage: "Series B",
          region: "Global · Institutional",
          situation:
            "Vermilion is an institutional MPC wallet serving family offices and asset managers moving eight and nine-figure positions. Their previous vendor's threshold-signature protocol had a liveness issue — under partial network partition, signing ceremonies would deadlock. We rebuilt the MPC layer on a modern CMP-based implementation with explicit ceremony timeouts and automatic recovery, commissioned two independent audits, and shipped without a signing failure across the first year of production use.",
          outcomeNumber: "Zero ceremony failures in Y1",
        },
        {
          company: "Tidepool Keys",
          stage: "Seed",
          region: "Singapore",
          situation:
            "Tidepool wanted a retail multi-chain wallet for Southeast Asia with fiat on-ramp integration and social-recovery UX that worked for first-time crypto users. The hard constraint: the product had to feel like a normal fintech app, not a Web3 tool. We built an ERC-4337 account-abstraction wallet with guardian-based recovery, integrated four regional on-ramps, and spent disproportionate time on the signing and recovery flows. MAS licensing came through clean and the product shipped with a week-one recovery rate above 95% for users who triggered the social-recovery flow in testing.",
          outcomeNumber: "95%+ social-recovery success rate",
        },
        {
          company: "Sienna Vault",
          stage: "Series A",
          region: "Switzerland / EU",
          situation:
            "Sienna is an EU-regulated custody product for family offices. MiCA was the design constraint — they needed audit trails that a Swiss regulator could read without the company translating them. We built the custody layer on HSM-backed MPC with explicit approval workflows for every movement, a compliance export pipeline that produced MiCA-compliant reports directly from the ledger, and a UI designed for compliance officers rather than crypto natives. First regulatory examination passed without a single clarifying question.",
          outcomeNumber: "First examination — zero findings",
        },
        {
          company: "Haven Self-Custody",
          stage: "Series A",
          region: "United States",
          situation:
            "Haven is a consumer non-custodial browser wallet with social recovery for people who don't understand seed phrases. The product philosophy: never ask the user to write down twenty-four words. We built the recovery layer on a combination of passkeys, hardware-device attestation, and trusted-contact multi-sig, all wrapped in a UX where recovery feels like 'reset my password' rather than 'retrieve my 24-word mnemonic.' Recovery completion rate in user testing landed at 93% — roughly 4× what the team measured with their prior seed-phrase flow.",
          outcomeNumber: "~4× recovery completion vs prior",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across a decade of wallet work, we've shipped custodial infrastructure for exchanges, institutional MPC stacks for asset managers, non-custodial consumer wallets, and white-label wallet SDKs other fintechs deploy under their own brand. The work compounds — every new build benefits from the threat models, protocol implementations, and audit findings of the ones before it.",
      stats: [
        { value: "40+", label: "Wallet products shipped" },
        { value: "$2B+", label: "AUM secured on our builds" },
        { value: "Zero", label: "Custody incidents to date" },
        { value: "15+", label: "Chains supported natively" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building wallets work with us",
      mediaToken: "topic.codeScreens",
      mediaSide: "right",
      body:
        "We've been in wallet engineering since before MPC was widely deployed in commercial products. That matters because the lessons of the 2020–2022 custody failures — <strong>QuadrigaCX</strong>, <strong>Celsius</strong>, <strong>FTX</strong>, and the ones that didn't make the news because they were recoverable — shape how we design now. <em>Wallets that look fine in demos fail specifically when the threat model wasn't enumerated in the first place.</em>\n\n" +
        "We ship the full stack under one roof: cryptography, chain integration, HSM infrastructure, compliance, and the client surfaces users actually touch. One team, one architecture document, one security lead. No handoffs between a crypto vendor, a mobile app contractor, and a compliance consultancy.\n\n" +
        "And we pair wallet engineering with the launch work your product will need — community education on self-custody, PR that positions your custody model correctly, and the marketing operations that help regulated products clear jurisdictional friction. <strong>Wallets are technical products with commercial trust requirements. We build for both.</strong>",
    },
  ],

  testimonials: [
    { id: "salamantex-rene" },
    { id: "meridian-naomi" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What is crypto wallet development?",
      a: "<strong>Crypto wallet development is the engineering behind any software surface where users hold, move, or authorise transactions of digital assets.</strong> It spans three broad categories: custodial (operator holds keys), non-custodial (user holds keys), and MPC (keys split via threshold signatures). Real builds also include multi-chain transaction signing, HSM or Secure-Enclave key storage, hot/cold segregation for custodial products, social-recovery flows for consumer products, transaction simulation to prevent phishing, and compliance tooling. A 'wallet' in isolation is a signing surface; a usable wallet product is all of the above.",
    },
    {
      q: "What drives the cost of building a crypto wallet?",
      a: "<strong>Wallet cost is driven mostly by custody model, chain coverage, HSM and MPC choices, regulatory scope, and recovery model — not by the client UI, which is what most teams focus on first.</strong> A single-chain non-custodial wallet is an order of magnitude lighter than a multi-chain MPC wallet with institutional compliance requirements. Building your own MPC stack is more expensive up front than integrating Fireblocks, but the multi-year licence math flips at scale. We scope cost only after the custody, chain, and licensing decisions are locked.",
    },
    {
      q: "MPC vs custodial vs non-custodial — which should I build?",
      a: "<strong>It depends on who holds the liability and who the product is serving.</strong> Custodial is right for exchanges and regulated products where the operator is already the counterparty of record. Non-custodial is right for DeFi-native audiences where censorship resistance and self-sovereignty are the product. MPC is where most institutional and hybrid products have landed in 2026 — the operator carries some operational control without ever holding a full key, which satisfies many regulatory frameworks without the risk concentration of pure custody.",
    },
    {
      q: "What's included in a full wallet build with Corum8?",
      a: "<strong>A full build includes key management (HSM or MPC), multi-chain transaction signing, hot/cold segregation for custodial products, recovery flows including social recovery when needed, transaction simulation, phishing detection, admin and compliance surfaces integrated with Chainalysis / TRM, and the client applications — browser extension, iOS, Android, or embedded SDK depending on distribution.</strong> Security reviews by at least one independent audit firm are standard for custom MPC or smart-contract code. What isn't included: the custody licence itself (we integrate compliance partners; you file with the regulator) and HSM hardware procurement (we specify; you procure).",
    },
    {
      q: "How is wallet security actually verified?",
      a: "<strong>Through threat modelling before code, adversarial review during build, and independent audit before mainnet.</strong> We enumerate attackers, map costs to recoverable vs unrecoverable loss, and review every critical path under assumption of compromise at each layer. Custom cryptography — any custom MPC or threshold-signature code — gets at least one independent audit from Trail of Bits, Least Authority, or ConsenSys Diligence before touching production funds. Post-launch, we run continuous anomaly monitoring on transaction patterns and periodic red-team exercises.",
    },
    {
      q: "What regulatory considerations matter for a wallet?",
      a: "<strong>Regulatory scope is a product decision, not a post-build afterthought.</strong> Key regimes: VARA in the UAE for virtual asset custody, MiCA in the EU, the FCA cryptoasset regime in the UK, FinCEN MSB registration in the US, MAS DPT licensing in Singapore. Each specifies requirements for capital, client-fund segregation, audit trails, consumer protections, and incident reporting. Non-custodial wallets face a lighter surface but are increasingly covered under money-transmission frameworks when they include fiat on/off-ramps. We design the compliance pipeline first, then the product.",
    },
    {
      q: "Can you integrate with Fireblocks / BitGo / Copper, or do you only build custom?",
      a: "<strong>Both — we integrate third-party custody when it's the right answer, and we build custom when white-label fees, product control, or regulatory requirements make it the right answer.</strong> Fireblocks integration is fastest for institutional products moving from spreadsheet custody to policy-driven MPC. Custom builds make sense when a product needs custody features the vendor doesn't offer, when licensing requires end-to-end auditable architecture, or when lifetime vendor costs at your AUM exceed the cost of building. We run the math with you before recommending either.",
    },
    {
      q: "When should a team NOT build a wallet?",
      a: "<strong>If your product is fundamentally consumer-finance and wallet-as-a-service will suffice, don't build.</strong> Integrating Privy, Magic, Dynamic, or a similar embedded-wallet provider removes the wallet engineering problem entirely — the trade-off is control and margin at scale. If you're below a few million AUM and will stay there for two years, the engineering cost of a custom wallet is almost certainly larger than the vendor cost. Build when the vendor is genuinely the bottleneck for your product or licensing, not when it's the interesting engineering problem in the room.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Wallet Infrastructure", href: "/services/development/wallet", active: true },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Payment Solutions", href: "/services/development/payment" },
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer" },
  ],

  finalCta: {
    light: "Wallets are",
    bold: "the last line of defence.",
    subtitle: "Let's design yours before the first user deposits.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
