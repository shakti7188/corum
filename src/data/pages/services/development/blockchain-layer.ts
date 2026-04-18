// /services/development/blockchain-layer
// Service cluster — custom L1 / L2 / L3 blockchain layer development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Stratus Chain", firstUsedOn: "/services/development/blockchain-layer", industry: "web3", region: "global", note: "Sovereign app-chain for an institutional settlement protocol." });
registerCompany({ name: "Lucent Rollup", firstUsedOn: "/services/development/blockchain-layer", industry: "web3", region: "europe", note: "Ethereum L2 rollup optimised for RWA issuance." });
registerCompany({ name: "Cobalt Subnet", firstUsedOn: "/services/development/blockchain-layer", industry: "enterprise", region: "americas", note: "Permissioned Avalanche subnet for enterprise supply-chain." });
registerCompany({ name: "Juniper Layer", firstUsedOn: "/services/development/blockchain-layer", industry: "web3", region: "apac", note: "Gaming-optimised L3 with custom fee abstraction." });

export const page: PageData = {
  slug: "/services/development/blockchain-layer",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "blockchain development",
  secondaryKeywords: [
    "layer 1 blockchain development",
    "layer 2 blockchain development",
    "app-chain development",
    "custom blockchain",
    "rollup development",
    "Avalanche subnet",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Blockchain L0/L1/L2 Development | Corum8",
    description:
      "Corum8 builds custom blockchain layers — app-chains, L2 rollups, subnets, sovereign chains. Only when a custom layer is genuinely the right answer.",
    canonical: "https://corum8.com/services/development/blockchain-layer",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer" },
  ],

  hero: {
    eyebrow: "Development · Blockchain Layers",
    headline: "We build blockchain layers.",
    subtitle: "App-chains, rollups, subnets — when a sovereign chain is genuinely the right answer.",
    sub:
      "Custom consensus, execution environments, bridges, and operational infrastructure — built on Cosmos SDK, OP Stack, Arbitrum Orbit, Polygon CDK, Avalanche Subnet-EVM, or zkSync Stack depending on what fits. Not sovereign-for-the-sake-of-it.",
    mediaToken: "hero.infrastructure",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds custom blockchain layers — application-specific chains, L2 rollups, L3 super-rollups, Avalanche subnets, Cosmos SDK chains, and permissioned enterprise networks. Work spans consensus and execution engineering, bridge infrastructure, validator and sequencer operations, and the developer tooling teams need to build on the chain post-launch.",

  body: [
    {
      type: "Prose",
      heading: "Most teams don't need a custom chain. The ones that do, need it seriously.",
      pullQuote: "Choosing to build a chain is choosing to operate a chain — for years, with real users.",
      body:
        "<strong>The app-chain era arrived with a wave of overbuilding.</strong> Teams launched sovereign chains because the narrative said they should, then discovered that running a production blockchain is a serious ops commitment they weren't ready for. Validator sets that under-decentralised. Bridges that got exploited. Sequencer infrastructure that went down. Dev tooling nobody maintained. Ecosystems that never materialised because 'come build on our chain' isn't an ecosystem strategy.\n\n" +
        "In 2026 the question 'should we build our own chain?' has sharper answers. <em>Most teams shouldn't.</em> A dApp on a mature L2 (<strong>Arbitrum</strong>, <strong>Optimism</strong>, <strong>Base</strong>, <strong>zkSync Era</strong>) serves 90% of use cases with better security, better liquidity access, and less operational overhead. A subnet or app-rollup costs real money to run and requires sustained validator or sequencer operations.\n\n" +
        "The teams for whom custom chains are genuinely the right answer share specific properties: <strong>gas-abstraction and fee-token control</strong> (gaming, consumer apps), <strong>permissioning requirements</strong> (enterprise, regulated products), <strong>unique execution semantics</strong> (privacy, domain-specific VM, non-EVM architectures), or <strong>scale beyond shared-L2 economics</strong> (very high throughput that would saturate a shared sequencer).\n\n" +
        "If you're in that set, a custom chain is a powerful product advantage. If you're not, don't build one. We help teams make the call honestly before the decision becomes expensive.",
    },

    {
      type: "Definition",
      heading: "What blockchain layer development actually covers",
      body:
        "<strong>Blockchain layer development</strong> is the engineering of a new blockchain network — the consensus mechanism, the execution environment, the bridge infrastructure to settlement layers, the developer SDK, and the operational tooling required to run it in production.\n\n" +
        "<strong>Layer 1 (sovereign chain)</strong> — independent consensus, full security budget, standalone validator set. Rare for app-specific use cases in 2026 outside specific enterprise or novel-architecture contexts.\n\n" +
        "<strong>Layer 2 (rollup)</strong> — inherits security from a base layer (Ethereum mainnet usually), batches transactions, posts proofs (optimistic or zero-knowledge) back. <strong>OP Stack</strong>, <strong>Arbitrum Orbit</strong>, <strong>Polygon CDK</strong>, <strong>zkSync Stack</strong>, <strong>Scroll SDK</strong>, <strong>Linea</strong>. Most 'custom chain' projects in 2026 are L2s, not L1s.\n\n" +
        "<strong>Layer 3 (app-rollup or super-rollup)</strong> — settles to an L2 instead of L1, gains even tighter gas abstraction, throughput, and customisation. Arbitrum Orbit, Caldera, Alt-L1-on-L2 patterns.\n\n" +
        "<strong>Avalanche subnets</strong> — independent validator sets, custom VM (EVM, WASM, custom), interoperability via <strong>ICM (Interchain Messaging)</strong>. Strong fit for permissioned enterprise and compliance-sensitive deployments.\n\n" +
        "<strong>Cosmos SDK chains</strong> — sovereign L1s in the Cosmos ecosystem, <strong>IBC</strong> for interoperability, <strong>CometBFT</strong> for consensus. Right for teams who need full sovereignty, non-EVM execution, or tight control over tokenomics and validator set.\n\n" +
        "<strong>Permissioned enterprise chains</strong> — <strong>Hyperledger Besu</strong>, <strong>ConsenSys Quorum</strong>, <strong>Hyperledger Fabric</strong>, <strong>Canton Network</strong>. Right for regulated products where permissionless public chains don't fit.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a blockchain layer build",
      body:
        "Every custom chain we build has a consistent set of core modules.",
      subsections: [
        {
          heading: "1. Consensus and execution",
          body:
            "For OP Stack rollups: configure <strong>op-geth</strong> (execution) + <strong>op-node</strong> (consensus / derivation pipeline) + <strong>op-batcher</strong> / <strong>op-proposer</strong>. For Arbitrum Orbit: <strong>nitro node</strong> plus custom fast-withdrawal and data-availability configuration. For Cosmos SDK: <strong>CometBFT</strong> with custom module configuration. For Avalanche subnets: <strong>Subnet-EVM</strong> or custom VM with <strong>AvalancheGo</strong> validator config. Each stack has opinions; we pick the one where the opinions fit the product.",
        },
        {
          heading: "2. Bridge infrastructure",
          body:
            "No chain is useful in isolation. Bridges move assets and messages between the chain and its settlement layer (L1 for an L2), and to other chains users come from. Native canonical bridges for L2s; general-purpose bridges (<strong>LayerZero</strong>, <strong>Wormhole</strong>, <strong>Axelar</strong>, <strong>CCTP</strong> for USDC, <strong>Across</strong>, <strong>Hop</strong>) for broader interoperability. Bridge security is chain security — we invest audit time here proportional to the TVL the chain will hold.",
        },
        {
          heading: "3. Data availability",
          body:
            "Rollups need to post transaction data somewhere. Options: <strong>Ethereum mainnet</strong> (most secure, most expensive), <strong>Ethereum blobs (EIP-4844)</strong> (cheap since Dencun), <strong>Celestia</strong> (modular DA, even cheaper), <strong>EigenDA</strong>, <strong>Avail</strong>. Each DA choice affects cost, security assumptions, and reorg risk. Choice is driven by economic model, not preference.",
        },
        {
          heading: "4. Sequencer and operations",
          body:
            "L2s and app-chains need someone to order transactions. Default is a centralised sequencer operated by the chain team (acceptable for early stages, increasingly scrutinised as TVL grows). Decentralised sequencing via shared sequencers (<strong>Astria</strong>, <strong>Espresso</strong>) or custom multi-party sequencer setups is the path for chains planning to decentralise seriously. We build sequencer infrastructure with observability, failover, and MEV management designed in.",
        },
        {
          heading: "5. Developer tooling and SDKs",
          body:
            "A chain is only as useful as the dev experience. We build block explorers (custom or hosted via <strong>Blockscout</strong>), RPC node infrastructure, <strong>Etherscan</strong>-style verifier deployment, native faucets, <strong>Foundry</strong> / <strong>Hardhat</strong> configuration, native wallet integration (MetaMask, Rabby, Phantom for Solana-derived). Without this infrastructure the chain is a ghost network.",
        },
        {
          heading: "6. Validator / node operator program",
          body:
            "For sovereign chains or subnets with validator sets: we design the staking economics, the delegation framework, the slashing rules, and onboard the validator operators. Geographic distribution, hardware diversity, and operator independence matter for long-term chain health. The launch validator set shapes the chain's credibility permanently.",
        },
        {
          heading: "7. Gas abstraction and fee model",
          body:
            "Custom chains get to design their fee economics from scratch. Pay fees in any token, sponsored-gas accounts for specific use cases, free transactions for whitelisted contracts, native subscription models. This is often the biggest product reason to build a custom chain — UX improvements that aren't possible on shared infrastructure.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals a custom chain is genuinely the right answer",
      signals: [
        "Your product requires gas-abstraction UX (pay in stablecoin, no fees for specific users) that shared L2s can't give you.",
        "You need permissioned execution — only approved addresses can deploy, transact, or validate.",
        "Your throughput needs are so high they'd saturate a shared sequencer at current economics.",
        "Your execution semantics are non-EVM — domain-specific VM, custom opcodes, privacy-preserving execution.",
        "You have genuine ecosystem gravity — commitments from apps, users, and capital to live on your chain on day one.",
        "Your regulatory requirements demand auditability controls that public chains can't express (fully permissioned validator set, transaction-level censorship controls).",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a blockchain build",
      body:
        "Building a chain is a capital-intensive multi-year commitment. These factors shape the scope most.",
      factors: [
        {
          name: "Layer type",
          body:
            "An L2 rollup on OP Stack or Arbitrum Orbit is the lightest and most common path in 2026. An Avalanche subnet is comparable complexity. A sovereign Cosmos SDK chain is heavier — full validator program, independent security budget. A fully custom L1 is the heaviest and rarely justified.",
        },
        {
          name: "Customisation depth",
          body:
            "Stock OP Stack or Orbit deployment with standard EVM and canonical bridge is lightest. Custom precompiles, custom gas tokens, custom consensus modifications each add engineering and audit surface. Every deviation from a mainstream stack is a future maintenance obligation.",
        },
        {
          name: "Bridge design",
          body:
            "Canonical L1↔L2 bridges are part of stock rollup stacks. Additional general-purpose bridges (LayerZero, Wormhole, Axelar, CCTP) add integration work per bridge. Custom bridges built in-house are a full security engagement.",
        },
        {
          name: "Data availability choice",
          body:
            "Ethereum blobs (most secure, higher cost) vs Celestia / EigenDA / Avail (cheaper, different security model). Choice affects economic model at scale; every additional DA option means another security assumption to audit.",
        },
        {
          name: "Decentralisation timeline",
          body:
            "Starting with centralised sequencer and decentralising later is cheaper to launch but adds a future migration cost. Launching with decentralised sequencing is more engineering now. Decide based on what the chain actually needs credibility-wise at each stage.",
        },
        {
          name: "Validator program scope",
          body:
            "A bootstrapped L2 with centralised sequencing needs no validator program. A subnet with independent validators or a sovereign chain needs validator selection, incentive design, onboarding operations, and ongoing coordination — a non-trivial part of the build.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on blockchain builds",
      pitfalls: [
        {
          name: "Building a chain without ecosystem commitment",
          body:
            "A chain with no apps is a ghost network. Ecosystem commitment — actual apps planning to deploy, capital planning to bridge, users who need the chain's specific properties — should be in place before the chain launches. Launching 'and they will come' has a very poor track record.",
        },
        {
          name: "Under-investment in bridges",
          body:
            "Bridges are where chains lose real money. Rolled-your-own bridges are a multi-year audit obligation. Rely on mature general-purpose bridges (LayerZero, Wormhole, Axelar, CCTP) where possible; if a custom bridge is necessary, budget audit time comparable to the protocol itself.",
        },
        {
          name: "Sequencer as single point of failure",
          body:
            "Centralised sequencers have outages. Sequencers go offline, and the chain stops. Plan for sequencer failover from day one, even if the initial configuration is simple. Long sequencer outages during chain bootstrapping damage credibility permanently.",
        },
        {
          name: "Inadequate validator decentralisation",
          body:
            "Chains that launch with 7 validators controlled by the same entity can't credibly claim to be decentralised. Validator set diversification — geographic, entity, infrastructure — has to be real, not performative.",
        },
        {
          name: "Tooling gaps post-launch",
          body:
            "A chain without a reliable block explorer, deployed verifier, usable RPC, and dev documentation is a chain nobody builds on. Post-launch tooling engineering is often underscoped — budget it properly.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.networkNodes",
      mediaSide: "right",
      body:
        "<strong>Rollup stacks:</strong> <strong>OP Stack</strong> (most common L2 stack in 2026, strong tooling, Superchain interop); <strong>Arbitrum Orbit</strong> (Nitro-based, good for apps that need Arbitrum compatibility); <strong>Polygon CDK</strong> (zk-first rollups); <strong>zkSync Stack</strong> (zkEVM rollups); <strong>Scroll SDK</strong>, <strong>Linea</strong>, <strong>Base Hooks</strong> for specific needs.\n\n" +
        "<strong>Subnet / sovereign stacks:</strong> <strong>Avalanche Subnet-EVM</strong> and <strong>HyperSDK</strong>; <strong>Cosmos SDK</strong> + <strong>CometBFT</strong>; <strong>Polkadot parachains</strong> when the ecosystem fits.\n\n" +
        "<strong>Data availability:</strong> <strong>Ethereum blobs</strong> (EIP-4844); <strong>Celestia</strong>; <strong>EigenDA</strong>; <strong>Avail</strong>.\n\n" +
        "<strong>Bridges:</strong> canonical L1↔L2 for each rollup stack; <strong>LayerZero</strong>, <strong>Wormhole</strong>, <strong>Axelar</strong> for general-purpose; <strong>CCTP</strong> for native USDC movement; <strong>Across</strong>, <strong>Hop</strong> for fast-withdrawal UX.\n\n" +
        "<strong>Sequencer / shared infrastructure:</strong> centralised team-run sequencer for early stages; <strong>Astria</strong>, <strong>Espresso</strong> for shared sequencing when decentralisation is the priority; custom multi-party configurations where neither fits.\n\n" +
        "<strong>Block explorers:</strong> <strong>Blockscout</strong> self-hosted; <strong>Etherscan</strong>-style custom deployments; Routescan for multi-chain visibility.\n\n" +
        "<strong>Validator infrastructure:</strong> <strong>Chainflow</strong> / <strong>Everstake</strong> / <strong>Figment</strong> for professional validator operations; custom validator programs for sovereign chains.\n\n" +
        "<strong>Monitoring:</strong> <strong>Prometheus</strong> + <strong>Grafana</strong> for chain metrics; <strong>PagerDuty</strong> for operational alerts; custom indexers via <strong>The Graph</strong>, <strong>Goldsky</strong>, or <strong>Alchemy Subgraphs</strong>.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on blockchain builds",
      mediaToken: "topic.serverRoom",
      mediaSide: "left",
      body:
        "We start with a <strong>should-we-even-build-this</strong> conversation. The first two weeks are spent validating that the chain is genuinely necessary for the product — testing the alternative of 'deploy on Arbitrum / Optimism / Base' against actual product requirements. If the alternative works, we build the dApp there. Only when a custom chain is clearly justified do we move to architecture.\n\n" +
        "Our engagement model pairs a senior protocol engineer (Geth / Cosmos / Substrate / Subnet-EVM expertise), a systems engineer for operational infrastructure (sequencer, RPC, monitoring), a bridges and cross-chain specialist, and an ecosystem-relations lead who bridges the engineering work to validator operators, bridge partners, and early app developers.\n\n" +
        "Every chain we build launches to a <strong>testnet</strong> with at least eight weeks of external participation before mainnet. Apps deploy to testnet. Bridges integrate with testnet. Validators run testnet nodes. We don't take a chain to mainnet until the full stack has operated under real (simulated) load. <em>A chain's credibility is built in the testnet phase — or never.</em>",
    },

    {
      type: "UseCases",
      heading: "Four blockchain builds, four different reasons to build",
      items: [
        {
          company: "Stratus Chain",
          stage: "Series A",
          region: "Global · Institutional",
          situation:
            "Stratus is a sovereign L1 for an institutional settlement protocol. The requirement was sovereign control over fee economics (all fees paid in the protocol's native stablecoin), a permissioned validator set (named regulated institutions only), and on-chain privacy for certain transaction types. Cosmos SDK was the clear choice — native tokenomics flexibility, permissioning via custom module, CometBFT-governed validator set. We shipped the chain with 12 named institutional validators across three jurisdictions, native stablecoin fee payment, and IBC integration to the broader Cosmos ecosystem.",
          outcomeNumber: "12 institutional validators · 3 jurisdictions",
        },
        {
          company: "Lucent Rollup",
          stage: "Seed",
          region: "Luxembourg / EU",
          situation:
            "Lucent is an Ethereum L2 optimised for RWA issuance — specifically compliance-friendly token issuance with permissioned validator set and MiCA-aligned audit trails. We built on OP Stack with custom modifications: a permissioned-sequencer configuration, native KYC module integrated with Sumsub, and compliance-reporting hooks that emitted regulator-readable audit events. Deployed to mainnet after six months with two institutional issuers live at launch.",
          outcomeNumber: "2 institutional issuers at mainnet",
        },
        {
          company: "Cobalt Subnet",
          stage: "Enterprise",
          region: "United States",
          situation:
            "Cobalt is a permissioned Avalanche subnet for enterprise supply-chain coordination — B2B only, no retail access, transaction-level privacy. We built on Subnet-EVM with custom precompiles for document-hash attestation and cross-enterprise messaging via Avalanche ICM. Validator set is six enterprise operators plus three independent nodes. Production load of roughly 50K transactions per day across eight enterprise participants.",
          outcomeNumber: "50K daily txs · 8 enterprise participants",
        },
        {
          company: "Juniper Layer",
          stage: "Seed",
          region: "Seoul, South Korea",
          situation:
            "Juniper is a gaming-optimised L3 settling to Base. The product requirement was near-zero transaction fees (in-game actions can't cost users money), rapid finality for real-time gameplay, and custom gas abstraction so players pay in the game's utility token. We built on Arbitrum Orbit with AnyTrust DA, gas-token abstraction to the game's native token, and sponsored-gas infrastructure for the largest in-game interactions. Two launch partner games deployed with combined DAU crossing 50K post-launch.",
          outcomeNumber: "50K+ combined DAU across 2 launch games",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our blockchain-layer work the discipline shows in what didn't happen. No catastrophic bridge exploits. No sequencer outages that broke chain credibility. No validator-set centralisation scandals. The chains we shipped are the chains still running — because the operational discipline matched the engineering discipline.",
      stats: [
        { value: "8+", label: "Custom chains shipped to mainnet" },
        { value: "4", label: "Rollup stacks deeply integrated" },
        { value: "Zero", label: "Bridge exploits on our builds" },
        { value: "12+", label: "Jurisdictions covered via our subnets" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building blockchain layers work with us",
      body:
        "We've been in chain engineering since the early Cosmos and Avalanche days, through the rollup era, into the 2026 modular-DA era. <em>Our engineering discipline was built around watching chains fail specifically because operational surface was underbuilt — not because the consensus was wrong.</em>\n\n" +
        "We ship the full stack under one roof: consensus + execution configuration, bridges, sequencer operations, validator program design, developer tooling, block explorers, RPC infrastructure, and the ecosystem-onboarding work that turns a new chain into a useful one. One team, one architecture document, one launch calendar. No handoffs between a protocol shop, an ops consultancy, and a bridges specialist.\n\n" +
        "And we pair chain engineering with the ecosystem-development work your chain will need — validator recruitment, launch-partner app onboarding, bridge integrations with partner protocols, and the PR that positions a new chain credibly in a crowded category. <strong>A blockchain is engineering plus operations plus ecosystem. We build for all three.</strong>",
    },
  ],

  testimonials: [
    { id: "meridian-naomi" },
    { id: "aurelia-jon" },
    { id: "halcyon-pierre" },
  ],

  faqs: [
    {
      q: "What is custom blockchain development?",
      a: "<strong>Custom blockchain development is the engineering of a new blockchain network — consensus, execution, bridges, developer tooling, and operational infrastructure — for cases where deploying on existing chains doesn't meet the product requirements.</strong> In 2026, most 'custom chain' projects are L2 rollups (OP Stack, Arbitrum Orbit, Polygon CDK, zkSync Stack) rather than sovereign L1s, because rollups inherit security from Ethereum while still offering meaningful customisation. Avalanche subnets, Cosmos SDK chains, and permissioned enterprise networks cover the cases where rollups don't fit.",
    },
    {
      q: "Should I build a custom chain or deploy on an existing L2?",
      a: "<strong>Most teams should deploy on an existing L2. Custom chains are genuinely right only for specific cases: gas-abstraction requirements shared L2s can't provide, permissioning needs, unique execution semantics, regulated-validator-set requirements, or throughput that saturates shared sequencers.</strong> If your product works on Arbitrum or Base or Optimism, build there — you get security, liquidity, and ecosystem for free. Build custom when the customisation is a genuine product advantage, not because 'we'd rather have our own chain.'",
    },
    {
      q: "What drives the cost of building a blockchain layer?",
      a: "<strong>Cost is driven by layer type, customisation depth, bridge design, DA choice, decentralisation timeline, and validator program scope.</strong> A stock OP Stack rollup deployment with canonical bridge and centralised sequencer is the lightest path. A sovereign Cosmos SDK chain with independent validator set and custom modules is an order of magnitude heavier. Custom precompiles, novel consensus modifications, and bespoke bridges each add months to timeline and require independent audits.",
    },
    {
      q: "What's included in a full blockchain layer build?",
      a: "<strong>Consensus and execution configuration, canonical bridge infrastructure, data availability integration, sequencer operations (for rollups), validator program design (for sovereign chains), RPC infrastructure, block explorer deployment, developer SDK, faucets, monitoring and alerting, plus the security audits appropriate to the TVL the chain will hold.</strong> What isn't included: the applications that will run on the chain (we help recruit early apps; we don't build them), the tokenomics of any native token (we wire contracts; you decide the economics), and ongoing post-launch operations beyond the handoff period.",
    },
    {
      q: "Which rollup stack should I use — OP, Arbitrum Orbit, Polygon CDK, zkSync?",
      a: "<strong>OP Stack is the default for most 2026 L2 projects — largest ecosystem, Superchain interop, strong tooling.</strong> Arbitrum Orbit is better when you need Arbitrum-specific features or near-Arbitrum-ecosystem adjacency. Polygon CDK or zkSync Stack are right when zero-knowledge properties matter (e.g., privacy, fast finality). Scroll SDK and Linea for specific partnership reasons. Choice depends on where your users and apps already are, not on raw technical comparison.",
    },
    {
      q: "How do you handle bridge security?",
      a: "<strong>We use canonical L1↔L2 bridges that come with each rollup stack and rely on mature general-purpose bridges (LayerZero, Wormhole, Axelar, CCTP for native USDC, Across for fast withdrawals) for broader interoperability.</strong> Custom bridges require audit investment comparable to the protocol itself and are avoided where possible. Bridge security is chain security — we invest audit time proportional to the TVL crossing the bridges, with independent audits from firms specialising in bridge code (Spearbit, Zellic, ConsenSys Diligence) before mainnet.",
    },
    {
      q: "Can you build a permissioned / enterprise chain?",
      a: "<strong>Yes — we build permissioned Avalanche subnets, permissioned OP Stack rollups with access-controlled sequencers, and Hyperledger Besu / Canton Network deployments for enterprise use cases.</strong> The engineering shape is similar (consensus, execution, bridge), but the permissioning module, the validator recruitment, and the compliance reporting differ substantially from a public chain. Permissioned builds typically serve regulated products, B2B coordination, or high-value transaction networks where public-chain trust assumptions don't fit.",
    },
    {
      q: "When should a team NOT build a custom chain?",
      a: "<strong>When deploying on an existing L2 works — which is most of the time.</strong> If your product is a DeFi protocol, an NFT marketplace, a gaming project, or a consumer app, there's almost always a mature L2 that serves it. Custom chains are right when the customisation is a genuine product advantage (not a marketing story), when ecosystem commitment is already in place before launch, and when the team has the long-term operations capacity to run a chain in production. Building a chain is a multi-year commitment — don't take it on lightly.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Blockchain L0/L1/L2", href: "/services/development/blockchain-layer", active: true },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "RWA Marketplace", href: "/services/development/rwa" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
  ],

  finalCta: {
    light: "Build a chain",
    bold: "only when you really need one.",
    subtitle: "We'll help you decide honestly — then ship it properly.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
