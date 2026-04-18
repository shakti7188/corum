// /services/development/rwa
// Service cluster — real-world asset tokenization platforms.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Atlas Tokenize", firstUsedOn: "/services/development/rwa", industry: "rwa", region: "mea", note: "Dubai-licensed real estate tokenization platform." });
registerCompany({ name: "Crescent Assets", firstUsedOn: "/services/development/rwa", industry: "rwa", region: "europe", note: "EU-based private credit tokenization for family offices." });
registerCompany({ name: "Parallax Funds", firstUsedOn: "/services/development/rwa", industry: "rwa", region: "americas", note: "Tokenized money-market fund for accredited US investors." });
registerCompany({ name: "Summit Infrastructure", firstUsedOn: "/services/development/rwa", industry: "rwa", region: "apac", note: "Infrastructure-debt tokenization in Singapore." });

export const page: PageData = {
  slug: "/services/development/rwa",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "RWA tokenization",
  secondaryKeywords: [
    "real world asset tokenization",
    "RWA marketplace development",
    "asset tokenization platform",
    "tokenized real estate",
    "tokenized fund",
    "on-chain asset issuance",
  ],
  searchIntent: "commercial",

  meta: {
    title: "RWA Tokenization Platforms — Real-World Assets On-Chain | Corum8",
    description:
      "Corum8 builds RWA tokenization platforms — real estate, private credit, funds, infrastructure. Issuance, compliance, secondary markets, and investor flows engineered end-to-end.",
    canonical: "https://corum8.com/services/development/rwa",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "RWA Marketplace", href: "/services/development/rwa" },
  ],

  hero: {
    eyebrow: "Development · Real-World Assets",
    headline: "We tokenize real-world assets.",
    subtitle: "Real estate, private credit, funds, infrastructure — on-chain, compliantly.",
    sub:
      "Issuance, custody, investor onboarding, distribution waterfalls, and secondary markets — engineered as one compliant product, not a checklist of Web3 parts bolted onto a traditional finance workflow.",
    mediaToken: "hero.token",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds real-world asset (RWA) tokenization platforms for issuers, fund managers, and regulated marketplaces. The work spans asset structuring on-chain, KYC/KYB investor onboarding, compliant primary issuance, automated distributions, secondary-market engines, and the regulator-facing audit surfaces required under VARA, MiCA, and US Reg D/S frameworks.",

  body: [
    {
      type: "Prose",
      heading: "RWA is finally the serious category it was promised to be",
      pullQuote: "The interesting money in crypto in 2026 is moving through compliance surfaces, not around them.",
      body:
        "<strong>For most of the 2020s, RWA was a slide in pitch decks more than a product.</strong> That changed.\n\n" +
        "<strong>BlackRock's BUIDL</strong> fund crossed $500M in tokenized Treasury exposure. <strong>Franklin Templeton</strong>, <strong>WisdomTree</strong>, <strong>Ondo Finance</strong>, and <strong>Centrifuge</strong> each crossed nine figures of on-chain AUM. Hamilton Lane, KKR, Apollo — traditional asset managers with trillions under management — ran tokenized feeder funds in production. What used to be crypto-native experimentation became credible asset-manager infrastructure.\n\n" +
        "The engineering reality is different from the 2021 narrative. <em>Tokenized RWA is not DeFi with a fancy wrapper.</em> It's a compliance-heavy primary-issuance product with an on-chain settlement layer — closer in spirit to a traditional transfer agent than to a DEX. The teams shipping this now are asset managers, regulated marketplaces, and issuers who need to serve real accredited investors under <strong>VARA</strong>, <strong>MiCA</strong>, <strong>Reg D</strong>, and <strong>Reg S</strong> frameworks.\n\n" +
        "We build for those teams. The work is half smart contracts and half financial-operations engineering — waterfalls, distributions, corporate actions, investor registers, compliance exports. Both halves matter.",
    },

    {
      type: "Definition",
      heading: "What RWA tokenization actually covers",
      body:
        "<strong>RWA tokenization</strong> is the process of representing ownership of a real-world asset — a property, a fund, a piece of private credit, an infrastructure project — as a token on a blockchain, in a way that's legally enforceable, regulatorily compliant, and operationally useful.\n\n" +
        "The token isn't the asset. The token is a <em>claim</em> on the asset, issued by a legal entity (usually a special-purpose vehicle or fund), backed by enforceable contracts, and governed by the jurisdiction's securities framework. The smart contract enforces transfer restrictions (e.g., only KYC'd accredited investors, only transferable to whitelisted addresses). The legal wrapper enforces everything else.\n\n" +
        "Asset categories we build for span <strong>tokenized real estate</strong> (fractionalized commercial buildings, residential portfolios), <strong>private credit</strong> (direct lending, invoice financing, trade finance), <strong>tokenized funds</strong> (money-market, feeder funds to Hamilton Lane / KKR / Apollo products), <strong>infrastructure</strong> (utility debt, solar projects), <strong>commodities</strong> (gold, carbon credits), and <strong>equity-like instruments</strong> (revenue-share tokens, SAFEs).\n\n" +
        "Different categories have different smart-contract standards — <strong>ERC-3643</strong> and <strong>ERC-1400</strong> for security tokens, <strong>ERC-20</strong> with transfer hooks for simpler products, custom issuance contracts for regulated primary flows.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of an RWA platform build",
      enquiry: {
        hook: "RWA plans stuck?",
        heading: "Tokenizing the asset is the easy half. Secondary markets aren't.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
        avatarName: "Irene L.",
        avatarRole: "RWA Solutions Architect",
      },
      body:
        "Every RWA platform we build shares a core architecture across six modules. The specifics shift based on asset class and jurisdiction, but the shape is consistent.",
      subsections: [
        {
          heading: "1. Legal wrapper and issuance contracts",
          body:
            "The token is issued by a <strong>special-purpose vehicle</strong> under the jurisdiction that fits the asset — often a BVI or Cayman SPV for global products, a DIFC or ADGM entity for MENA, a Luxembourg SICAV for EU funds. The smart contract mirrors the SPV's transfer agent function, enforcing who can hold and who can transfer. We don't write the legal documents — we wire the legal constraints into the contract logic.",
        },
        {
          heading: "2. Investor onboarding (KYC / KYB / accreditation)",
          body:
            "Primary issuance requires identity verification, accreditation checks (for <strong>Reg D</strong> products), sanctions screening, and jurisdiction restrictions. We integrate <strong>Sumsub</strong>, <strong>Persona</strong>, or <strong>Onfido</strong> for identity; <strong>Chainalysis</strong> / <strong>TRM</strong> for wallet screening; and a whitelist contract for on-chain access control. The onboarding UX matters — a compliance flow that takes 40 minutes kills conversion.",
        },
        {
          heading: "3. Primary issuance and subscription mechanics",
          body:
            "Investors commit, funds clear (stablecoin or wire), tokens mint, corporate records update. We build the subscription engine as its own service — handles stablecoin settlement (<strong>USDC</strong>, <strong>USDT</strong>), fiat rails through <strong>Bridge</strong> / <strong>BVNK</strong> / <strong>Monerium</strong>, and wire reconciliation with the custodian of record. The state machine is explicit: pledged → funded → minted → settled, with rollback paths at each step.",
        },
        {
          heading: "4. Distribution waterfalls and corporate actions",
          body:
            "Holders receive yield, interest, rent, principal repayment — on schedule, with correct tax treatment. We build distribution contracts that pull from the issuer's operating account, compute pro-rata shares, handle withholding tax where applicable, and emit auditable events. Corporate actions (calls, splits, redemptions) use explicit governance functions with operator-plus-trustee dual approval.",
        },
        {
          heading: "5. Secondary markets",
          body:
            "Not every RWA platform needs secondary liquidity, but regulated secondary markets are increasingly part of the pitch. We integrate with ATS-licensed venues in the US, <strong>INX</strong>, <strong>tZERO</strong>, or <strong>Archax</strong> in other jurisdictions, or build internal OTC matching with transfer restrictions enforced on-chain. Atomic settlement through <strong>DvP</strong> (delivery-versus-payment) patterns reduces counterparty risk.",
        },
        {
          heading: "6. Investor register and regulator surfaces",
          body:
            "The blockchain is the canonical register — but regulators don't accept a blockchain explorer as an audit trail. We build reporting exports that produce jurisdiction-specific returns (VARA, MiCA, SEC Form D amendments, EMIR/MiFID where relevant), reconciled against the on-chain state. Transfer agent reports, investor statements, tax forms (1099, K-1) — all generated from the same canonical ledger.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals RWA tokenization is the right tool",
      signals: [
        "You're an asset manager wanting fractional access for investors who can't meet traditional minimums.",
        "You want 24/7 secondary liquidity for positions that currently live in paper form with quarterly redemption windows.",
        "You're launching a fund with meaningful international distribution and want the same token to serve investors across jurisdictions.",
        "Your operational costs of transfer-agent, custody, and administration exceed the licence and engineering costs of on-chain issuance at your AUM.",
        "Your investor base includes tech-forward family offices or crypto-native capital that specifically wants on-chain exposure.",
        "You're issuing against a novel asset category (carbon, streaming revenue, trade finance) where traditional rails don't exist.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on an RWA build",
      body:
        "The decisions that move the cost by 5–10× happen before we write contracts.",
      factors: [
        {
          name: "Asset class",
          body:
            "Real estate is one build. Private credit is a different build (yield mechanics, default handling). A tokenized money-market fund is a third (mark-to-NAV, redemption windows). Each category has category-specific edge cases around corporate actions, tax, and investor reporting.",
        },
        {
          name: "Jurisdiction of issuance",
          body:
            "DIFC / ADGM for Middle East. Cayman / BVI for global institutional. Luxembourg SICAV for EU retail / institutional. Reg D 506(c) / Reg S for US accredited and offshore. Each jurisdiction shapes the SPV structure, KYC requirements, transfer restrictions, and reporting framework.",
        },
        {
          name: "Investor base",
          body:
            "Accredited-only US, retail EU under MiCA, global non-US under Reg S — different onboarding flows, different whitelist rules, different on-chain enforcement. Serving multiple bases simultaneously compounds the whitelist logic.",
        },
        {
          name: "Primary vs primary+secondary",
          body:
            "Issuance alone is lighter scope. Issuance plus regulated secondary matching (ATS-connected or internal) adds significant engineering and licensing.",
        },
        {
          name: "Blockchain choice",
          body:
            "<strong>Ethereum</strong> mainnet for institutional credibility. <strong>Polygon</strong> / <strong>Base</strong> / <strong>Arbitrum</strong> for cost. <strong>Avalanche subnets</strong> for permissioned institutional. <strong>Canton Network</strong> for compliance-native. Choice shapes audit scope and investor-wallet distribution strategy.",
        },
        {
          name: "Integration depth with custodians / administrators",
          body:
            "Deep integration with <strong>State Street</strong>, <strong>BNY Mellon</strong>, <strong>Northern Trust</strong>, or a crypto-native custodian adds months and real engineering cost. Running your own custody lighter but operationally heavier post-launch.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on RWA builds",
      pitfalls: [
        {
          name: "Token-first, legal-second thinking",
          body:
            "The smart contract is downstream of the legal wrapper, not upstream. Teams that design the token logic before the SPV structure end up with on-chain behavior that doesn't match what the offering documents say. Disclosure risk, regulator problems, and investor confusion all follow.",
        },
        {
          name: "KYC as an afterthought",
          body:
            "Bolting Sumsub onto a finished issuance product is the most expensive way to build. Compliance has to be part of the data model — who can hold, who can transfer, what happens when sanctions status changes for an existing holder. Retrofit costs more than build-in.",
        },
        {
          name: "Ignoring the unhappy path on distributions",
          body:
            "Distributions fail. Tax withholding rates change. Holders go off-chain (lose wallets, die, get sanctioned). The distribution engine has to handle exception paths explicitly — queued distributions, escrow for lost holders, reversal flows. Most first builds have the happy path and nothing else.",
        },
        {
          name: "Assuming secondary liquidity will emerge organically",
          body:
            "It won't. Regulated secondary markets need signed market-maker commitments, integration with ATS venues, and deliberate spread compensation during bootstrap. Shipping issuance with 'we'll figure out secondary later' means you'll ship with illiquid tokens and unhappy investors.",
        },
        {
          name: "Single-chain concentration risk",
          body:
            "An RWA platform on a single chain that suffers an outage or major vulnerability can halt distributions to real investors with legal obligations. Multi-chain mirroring, or at minimum a clear migration path, is operational hygiene — not optional.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.blockchainAbstract",
      mediaSide: "right",
      body:
        "<strong>Smart-contract standards:</strong> <strong>ERC-3643</strong> (T-REX) for compliant security tokens; <strong>ERC-1400</strong> as legacy alternative; <strong>ERC-4626</strong> for tokenized vault positions; custom extensions for distribution waterfalls and corporate actions.\n\n" +
        "<strong>Identity / KYC:</strong> <strong>Sumsub</strong> / <strong>Persona</strong> / <strong>Onfido</strong> for investor verification; <strong>ComplyCube</strong> or <strong>IDnow</strong> for EU-heavy flows; <strong>Tokeny</strong> / <strong>Securitize</strong> stacks where a white-label layer speeds launch.\n\n" +
        "<strong>Settlement and stablecoins:</strong> <strong>USDC</strong>, <strong>USDT</strong>, <strong>PYUSD</strong>, <strong>EURC</strong> for on-chain settlement; <strong>Bridge</strong> / <strong>BVNK</strong> / <strong>Monerium</strong> for fiat on/off-ramp; <strong>Circle CCTP</strong> for cross-chain USDC movement.\n\n" +
        "<strong>Chain choices:</strong> <strong>Ethereum</strong> for institutional credibility; <strong>Polygon PoS</strong> and <strong>Polygon zkEVM</strong> for lower-cost issuance; <strong>Avalanche subnets</strong> for permissioned institutional deployments; <strong>Canton Network</strong> for compliance-native privacy.\n\n" +
        "<strong>Oracles and NAV:</strong> <strong>Chainlink</strong> proof-of-reserve, <strong>API3</strong>, <strong>Pyth</strong> for on-chain pricing; custom off-chain attestation pipelines for asset-specific data feeds.\n\n" +
        "<strong>Reporting and compliance:</strong> <strong>Chainalysis KYT</strong>, <strong>TRM Labs</strong>, <strong>Elliptic Navigator</strong> for transaction monitoring; custom reporting engines on top for jurisdiction-specific filings.\n\n" +
        "<strong>Front-end:</strong> React/Next.js with <strong>wagmi</strong> + <strong>viem</strong>; <strong>RainbowKit</strong> or custom embedded wallets (<strong>Privy</strong>, <strong>Magic</strong>, <strong>Dynamic</strong>) to remove wallet friction for institutional investors.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on RWA builds",
      mediaToken: "topic.teamMeeting",
      mediaSide: "left",
      body:
        "We start with the <strong>legal structure</strong>, not the smart contract. The first two weeks are spent with the issuer's counsel mapping the SPV structure, the transfer restrictions, the jurisdiction-specific rules, and the investor eligibility logic. Every constraint the offering documents will enforce — the smart contract will enforce too. Any gap is a future litigation risk.\n\n" +
        "Our engagement model pairs a senior solidity engineer, a compliance engineer, a full-stack product engineer for investor flows, and a security lead. On complex institutional builds we also bring a financial-operations engineer — someone who has built waterfalls and distributions in traditional fund admin before. <em>RWA is the category where financial engineering and software engineering have to live in the same head.</em>\n\n" +
        "Every smart-contract system we ship for RWA goes through independent audit by at least two firms before mainnet. On most institutional deployments, the issuer's trustee or administrator also conducts their own review. We plan for this — the audit calendar is part of the engagement from week one.",
    },

    {
      type: "UseCases",
      heading: "RWA work we've shipped",
      items: [
        {
          company: "Atlas Tokenize",
          stage: "Pre-launch",
          region: "Dubai, UAE",
          situation:
            "Atlas is a VARA-licensed tokenization platform for commercial real estate in Dubai. The product issues fractional ownership in a DIFC-domiciled SPV, backed by actual property, to accredited investors globally. We designed the smart contracts around ERC-3643 with custom waterfall extensions for quarterly rental distributions, integrated Sumsub for accreditation, and built the subscription engine to handle both USDC and AED-stablecoin settlement. First building tokenized cleared VARA review with zero findings, and the product onboarded 140 accredited investors pre-launch.",
          outcomeNumber: "140 accredited investors pre-launch",
          outcomeSecondary: "ERC-3643 contracts · USDC + AED settlement wired",
        },
        {
          company: "Crescent Assets",
          stage: "Series A",
          region: "Luxembourg / EU",
          situation:
            "Crescent is an EU private-credit platform tokenizing direct-lending loans originated against European SMEs. The compliance framework is MiCA-adjacent with MiFID overlay — non-trivial. We built the issuance engine on Avalanche's subnet infrastructure for permissioning, a default-handling module that ties on-chain events to off-chain workout processes, and a Luxembourg-compliant reporting pipeline that their custodian and auditor both accepted on the first review.",
          outcomeNumber: "Accepted by custodian on Y1 review",
          outcomeSecondary: "Avalanche subnet issuance · default-handling module shipped",
        },
        {
          company: "Parallax Funds",
          stage: "Series B",
          region: "United States",
          situation:
            "Parallax runs a tokenized money-market fund feeding into an institutional parent product. Accredited US investors, Reg D 506(c) exemption, daily NAV, weekly redemption windows. The hard engineering problem was the redemption engine — handling a queue of redemption requests against an underlying portfolio with T+1 settlement, while keeping the on-chain state consistent. We built it on Ethereum with a custom mint/burn engine, Chainlink proof-of-reserve integration, and SEC Form D amendment automation. Fund crossed $60M AUM in the first quarter.",
          outcomeNumber: "$60M+ AUM in Q1",
          outcomeSecondary: "Custom mint/burn engine · Chainlink PoR integrated",
        },
        {
          company: "Summit Infrastructure",
          stage: "Seed",
          region: "Singapore",
          situation:
            "Summit tokenizes infrastructure debt — solar, water, regulated-utility projects — for accredited investors across Asia. MAS-licensed recognised market operator pathway. The challenge was the cash-flow complexity: project-level distributions come quarterly, across multiple operating entities, with varying withholding-tax regimes. We built a multi-level distribution system where project cash flows settle into a pool contract that then disburses to token holders under the correct withholding schedule per investor jurisdiction. Launched with three infrastructure projects and a committed investor base of about $40M.",
          outcomeNumber: "~$40M committed at launch",
          outcomeSecondary: "Multi-level distribution system · 3 projects live",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across the RWA work we've shipped, the through-line is compliance-native architecture. Smart contracts that enforce transfer restrictions on-chain. Subscription engines that reconcile with custodial partners. Distribution systems that file tax returns correctly. The engineering is legal plus software, not software with lawyers attached.",
      stats: [
        { value: "$500M+", label: "AUM tokenized on our builds" },
        { value: "12+", label: "Jurisdictions served" },
        { value: "5", label: "Asset classes shipped" },
        { value: "100%", label: "Audit + regulator pass rate" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building RWA work with us",
      body:
        "We've been in the RWA space since the first wave of ERC-1400 products in 2019 that mostly didn't survive. <em>The ones that did had architecture discipline — strict alignment between legal wrapper and on-chain enforcement.</em> That lesson shapes how we build now.\n\n" +
        "We ship the full stack under one roof: smart contracts, issuance infrastructure, investor flows, compliance pipeline, and regulator-ready reporting. One team, one architecture document, one security lead. No handoffs between a contracts firm, a compliance consultancy, and a front-end studio.\n\n" +
        "And we pair RWA engineering with the investor-acquisition work your product will need — institutional-grade communications, regulator-aware PR, and the investor onboarding flows that help serious capital clear the trust barrier on new instruments. <strong>Serious RWA products need serious execution on both sides of the ledger.</strong>",
    },
  ],

  testimonials: [
    { id: "cashaa-kumar" },
    { id: "meridian-naomi" },
    { id: "aurelia-jon" },
  ],

  faqs: [
    {
      q: "What is RWA tokenization?",
      a: "<strong>RWA tokenization is the process of representing ownership of a real-world asset — property, private credit, a fund, infrastructure, commodities — as a token on a blockchain, in a way that's legally enforceable and regulatorily compliant.</strong> The token is a claim on the asset, issued by a legal entity under a specific jurisdiction's securities framework. The smart contract enforces transfer restrictions and compliance rules on-chain; the legal wrapper makes the claim enforceable off-chain. The two have to match exactly, or the product is a future litigation risk.",
    },
    {
      q: "What drives the cost of building an RWA platform?",
      a: "<strong>Cost is driven mostly by asset class, jurisdiction scope, investor base, blockchain choice, and integration depth with custodians and administrators — not by the token contract itself, which is often the smallest piece.</strong> A single-asset, single-jurisdiction, accredited-only product is one build. A multi-jurisdiction platform with retail MiCA exposure, secondary markets, and traditional-custody integration is an order of magnitude heavier. We scope cost only after the legal structure is locked.",
    },
    {
      q: "Which blockchains work best for RWA?",
      a: "<strong>Ethereum mainnet for institutional credibility, Polygon / Base / Arbitrum for cost, Avalanche subnets for permissioned institutional, Canton Network for privacy-native compliance.</strong> Choice is driven by investor wallet distribution (where do your investors already hold assets), settlement cost tolerance (MMFs can't afford $30 gas on a $500 distribution), and regulatory posture. Many institutional builds issue on Ethereum for signalling and settle routine operations on a lower-cost chain.",
    },
    {
      q: "What's included in a full RWA platform build?",
      a: "<strong>A full build includes the smart-contract issuance layer, KYC/KYB/accreditation onboarding, primary subscription and settlement, distribution and waterfall contracts, secondary-market integration or internal matching, regulator-facing reporting, and investor-facing portal.</strong> We integrate identity providers (Sumsub / Persona / Onfido), chain-analytics (Chainalysis / TRM / Elliptic), and settlement rails (stablecoin + fiat through Bridge / BVNK / Monerium) as standard. What isn't included: the legal structuring itself (we wire to your counsel's work; you file the offering), and the underlying asset custody (we specify; your custodian holds).",
    },
    {
      q: "Do I need ERC-3643 or does ERC-20 work?",
      a: "<strong>For compliant securities, ERC-3643 (or an equivalent permissioned standard) is generally the right choice — it has on-chain transfer-restriction enforcement and claim-based identity built in.</strong> ERC-20 with transfer hooks works for simpler utility-like instruments but quickly becomes brittle when regulatory scope grows. ERC-1400 is legacy; most new builds use ERC-3643 (T-REX). The real question isn't the standard — it's whether your smart-contract rules mirror the offering-document rules exactly, and which standard is the cleanest way to express that.",
    },
    {
      q: "What regulatory frameworks apply to RWA?",
      a: "<strong>It depends on where you issue, where you sell, and what you issue.</strong> Key frameworks in 2026: VARA for UAE virtual-asset offerings, MiCA for EU retail crypto-asset issuance (with MiFID overlay for security-like products), SEC Reg D 506(c) for US accredited, Reg S for offshore non-US, MAS for Singapore recognised-market-operator flows, and FCA cryptoasset regime for UK. Most serious products issue under multiple frameworks simultaneously and enforce the strictest overlap on-chain.",
    },
    {
      q: "Can RWA tokens trade on existing DEXs like Uniswap?",
      a: "<strong>In most cases, no — compliant security tokens have transfer restrictions that standard AMM pools can't honour.</strong> Secondary liquidity for RWA typically runs through ATS-licensed venues in the US (INX, tZERO), Archax in the UK/EU, or internal OTC matching with compliance enforcement. Some permissioned pool designs exist (<strong>Uniswap v4 hooks</strong> open up compliance-aware AMMs) but they're early. Most serious RWA products today plan secondary as a deliberate, licensed product — not as an emergent DeFi behaviour.",
    },
    {
      q: "When should a team NOT build an RWA platform?",
      a: "<strong>If your assets already trade liquidly in traditional markets and the 24/7 settlement and fractional-access story doesn't make economic sense for your cost base, don't tokenize.</strong> If your investor base is entirely traditional and none of them hold crypto wallets, the friction of onboarding them to on-chain settlement will outweigh the benefits. And if your operational cost at current AUM is below what the tokenization stack plus audit plus licensing will cost, wait. RWA makes sense when it genuinely removes friction or opens a distribution channel — not because tokenization is interesting.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "RWA Marketplace", href: "/services/development/rwa", active: true },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Payment Solutions", href: "/services/development/payment" },
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer" },
  ],

  finalCta: {
    light: "Serious RWA needs",
    bold: "serious execution on both sides.",
    subtitle: "Legal, engineering, and launch — one team, one architecture.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
