// /services/development/nft
// Service cluster — NFT marketplace + platform development.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Pillar Gallery", firstUsedOn: "/services/development/nft", industry: "nft", region: "global", note: "Institutional-grade art-NFT platform with provenance." });
registerCompany({ name: "Quarry Collectibles", firstUsedOn: "/services/development/nft", industry: "nft", region: "apac", note: "Licensed IP collectibles platform for anime brands." });
registerCompany({ name: "Ember Music", firstUsedOn: "/services/development/nft", industry: "nft", region: "americas", note: "Music royalty NFT platform with secondary revenue splits." });
registerCompany({ name: "Oasis Assets", firstUsedOn: "/services/development/nft", industry: "nft", region: "mea", note: "Real-world-asset-backed NFT platform for high-value collectibles." });

export const page: PageData = {
  slug: "/services/development/nft",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "NFT marketplace development",
  secondaryKeywords: [
    "NFT platform development",
    "NFT marketplace",
    "white label NFT marketplace",
    "NFT minting platform",
    "ERC-721 development",
    "music NFT platform",
  ],
  searchIntent: "commercial",

  meta: {
    title: "NFT Marketplace & Platform Development | Corum8",
    description:
      "Corum8 builds NFT platforms that survived the hype cycle. Marketplaces, mint platforms, licensed IP collectibles, music royalties, RWA-backed NFTs.",
    canonical: "https://corum8.com/services/development/nft",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "NFT Marketplace", href: "/services/development/nft" },
  ],

  hero: {
    eyebrow: "Development · NFT",
    headline: "We build NFT platforms.",
    subtitle: "Marketplaces, mint platforms, licensed IP, music royalties — useful long after the hype fades.",
    sub:
      "Smart contracts, provenance, royalties, marketplace mechanics, and creator tooling — built for the categories of NFT work still compounding in 2026, not the 2021 JPEG cycle.",
    mediaToken: "hero.nft",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds NFT platforms with genuine product fit — fine-art marketplaces with provenance, licensed IP collectibles, music royalty platforms, ticketing, membership, and real-world asset-backed NFTs. Work spans smart-contract engineering (ERC-721, ERC-1155, ERC-6551, ERC-2981), marketplace mechanics, creator tooling, royalty enforcement, and the distribution infrastructure serious NFT products require.",

  body: [
    {
      type: "Prose",
      heading: "The NFT market in 2026 is the one that survived 2022",
      pullQuote: "The NFT projects still growing are the ones that never needed speculation to work.",
      body:
        "<strong>The NFT market people remember is the speculative one.</strong> Bored Apes at the peak, $300K CryptoPunks, profile pictures as status symbols. That market cratered through 2022 and 2023, and a lot of platforms died with it.\n\n" +
        "<em>The NFT market that exists in 2026 is different.</em> It's music royalties distributed to fans (<strong>Royal</strong>, <strong>Audius</strong> patterns), licensed IP collectibles (<strong>Pudgy Penguins</strong> at Walmart, <strong>Moonbirds</strong> acquired and absorbed into Yuga Labs, Disney tokenised IP experiments), ticketing (<strong>Ticketmaster</strong>, <strong>OpenSeason</strong>, <strong>GET Protocol</strong>), membership passes that actually work (private community access, event entitlements), gaming assets with real interoperability, and RWA-backed NFTs — fine art, watches, rare cars, wine — where the NFT is a certificate of ownership over a physical asset.\n\n" +
        "These aren't the same product category as 2021 JPEG PFPs, despite sharing the ERC-721 standard. The engineering work, the legal wrappers, the marketplace mechanics, and the customer types are all different. <strong>Building an NFT product in 2026 looks more like building a collectibles e-commerce platform with blockchain ownership rails than building a speculative art market.</strong>\n\n" +
        "We build for teams that have a genuine product reason to use NFTs — not teams copying a 2021 playbook.",
    },

    {
      type: "Definition",
      heading: "What NFT development actually covers",
      body:
        "<strong>NFT development</strong> is the engineering behind platforms where unique digital (or physical-asset-backed) ownership tokens get minted, traded, and composed with other products. The specific categories that still compound in 2026 look quite different.\n\n" +
        "<strong>Fine-art and collectibles marketplaces</strong> — primary and secondary markets for digital and physical collectibles with provenance verification, royalty enforcement, and curator-driven discovery. <strong>SuperRare</strong>, <strong>Foundation</strong>, <strong>Artsy's Web3 extensions</strong>.\n\n" +
        "<strong>Licensed IP collectibles</strong> — partnerships with established brands (Disney, sports leagues, anime studios) to issue digital collectibles connected to real IP. Distribution often hybrid (blockchain ownership, Web2 UX for mainstream users).\n\n" +
        "<strong>Music and creator royalty platforms</strong> — NFTs that represent a percentage of streaming or mechanical royalties from specific songs or catalogs. Royal, Opus, Mint Songs.\n\n" +
        "<strong>Ticketing and membership</strong> — event tickets that survive the secondary market (preventing scalping via ERC-6551 bound tokens, transfer restrictions, or explicit resale floor/ceiling caps), plus membership passes with real utility (event access, private communities, merch).\n\n" +
        "<strong>Gaming and in-game assets</strong> — items and characters as on-chain assets with real ownership and (limited, pragmatic) interoperability.\n\n" +
        "<strong>RWA-backed NFTs</strong> — certificates of ownership for physical goods: fine art, vintage watches, rare wine, collectible cars, classic comic books. Each NFT backed by a physical asset held in custody with insurance.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of an NFT platform build",
      enquiry: {
        hook: "NFT drop flopped?",
        heading: "Most NFT platforms win the mint and lose the secondary.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80",
        avatarName: "Maya R.",
        avatarRole: "NFT Platform Lead",
      },
      body:
        "Every NFT platform we build has six core modules. Specifics shift based on category and distribution strategy, but the shape is consistent.",
      subsections: [
        {
          heading: "1. Smart contracts",
          body:
            "For EVM: <strong>ERC-721</strong> for one-of-one, <strong>ERC-1155</strong> for semi-fungible (editions, items, tickets), <strong>ERC-2981</strong> for royalty standard, <strong>ERC-6551</strong> for token-bound accounts (NFT-owned wallets for gaming and memberships), <strong>ERC-4907</strong> for rental/lending. For Solana: <strong>Metaplex Token Metadata Standard</strong> with compressed NFTs (<strong>Bubblegum</strong>) for cost-efficient minting at scale. For Sui / Aptos: Move-native object standards with different composability properties.",
        },
        {
          heading: "2. Minting infrastructure",
          body:
            "Batch minting, allowlists, progressive reveals, lazy minting (mint-on-sale for gas-sensitive launches), airdrop distribution. For large collections we use <strong>ERC-721A</strong> for gas-efficient batch transfers, or migrate to Solana compressed NFTs where the collection size makes L1 mainnet uneconomical. Merkle-proof allowlists, signed-approval gates, and fair-queue minting mechanics that prevent bots from dominating launches.",
        },
        {
          heading: "3. Marketplace mechanics",
          body:
            "Listing, bidding, offers, counter-offers, time-weighted auctions, Dutch auctions, private sales. We build on top of <strong>Seaport</strong> (OpenSea's marketplace protocol) when the fit is right, or custom marketplace contracts when we need non-standard flows. Royalty enforcement via <strong>operator allowlists</strong> (controversial but effective), <strong>creator-signed approvals</strong>, or <strong>token-gated transfers</strong> — not trusting marketplace goodwill.",
        },
        {
          heading: "4. Provenance and metadata",
          body:
            "IPFS + <strong>Arweave</strong> for permanent metadata and media storage; content hashes on-chain for verifiability; chain of custody for physical-backed NFTs (handwritten authentication records, custodian attestations, insurance certificates). For art and collectibles, on-chain provenance is the entire product — we build it with the same discipline as financial audit trails.",
        },
        {
          heading: "5. Creator and admin tooling",
          body:
            "Creators need to launch collections, set royalties, configure allowlists, manage drops, track secondary-sale revenue. Platform admins need moderation tools, takedown mechanisms for illegal content, compliance controls, and analytics. This surface is often underbuilt — a creator flow that takes 30 minutes per drop doesn't scale; a moderation queue without structure drowns in spam.",
        },
        {
          heading: "6. Integration with traditional surfaces",
          body:
            "Most serious NFT products in 2026 are hybrid — blockchain ownership underneath, Web2 UX on top for users who don't want to manage wallets. We integrate with <strong>Privy</strong>, <strong>Magic</strong>, <strong>Dynamic</strong>, or <strong>Shopify</strong>'s Web3 modules for embedded wallet flows; fiat on-ramps via <strong>Stripe</strong> / <strong>MoonPay</strong> / <strong>Transak</strong>; and direct integrations with brand partner systems (Shopify, Salesforce, Disney's internal systems for licensed IP).",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals NFT infrastructure is the right tool",
      signals: [
        "You have a product that genuinely benefits from verifiable ownership and transferability (e.g., tickets, memberships, collectibles).",
        "You're distributing royalties or revenue shares to creators or contributors in a programmable way.",
        "You're working with licensed IP from a brand partner and need a rights-tracked distribution layer.",
        "Your physical goods (art, watches, rare items) need verifiable provenance and ownership transfer.",
        "Your community genuinely cares about ownership mechanics — not just 'we should have NFTs' as a marketing decision.",
        "You're building gaming assets where on-chain ownership meaningfully changes the player experience.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on an NFT build",
      body:
        "The expensive decisions on NFT builds happen in product fit and distribution strategy, not contract complexity.",
      factors: [
        {
          name: "NFT category",
          body:
            "Fine-art marketplace is one build. Ticketing with scalper prevention is a different build. Music royalty distribution is a third. Licensed IP collectibles is a fourth. Each category has different engineering shape and different regulatory surface.",
        },
        {
          name: "Chain choice",
          body:
            "Ethereum mainnet for institutional credibility and art. Polygon / Base / Arbitrum for cost-sensitive consumer products. Solana with compressed NFTs for very large collections. Each affects mint economics, marketplace reach, and wallet distribution.",
        },
        {
          name: "Distribution strategy",
          body:
            "Direct-to-crypto-user (users bring wallets) is lightest. Embedded wallet flow for mainstream users adds onboarding UX complexity. Physical-world distribution (pop-up, retail partnership) adds real-world logistics.",
        },
        {
          name: "Secondary market scope",
          body:
            "Primary-only is simple. Internal secondary market adds listing, bidding, royalty enforcement. Integration with OpenSea, Blur, Magic Eden, Tensor adds cross-marketplace consistency requirements.",
        },
        {
          name: "Royalty model",
          body:
            "Fixed percentage ERC-2981 is simple. Multi-recipient splits for music royalties (songwriter, producer, label, performer) add Splits.org or 0xSplits integration. On-chain royalty enforcement vs marketplace-trust varies in aggressiveness.",
        },
        {
          name: "Legal framework",
          body:
            "Ordinary digital collectibles have limited regulatory surface. Music royalty NFTs (representing revenue claims) can be securities in US jurisdiction. RWA-backed NFTs carry custody, insurance, and jurisdiction considerations. Legal scope shapes contract design.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on NFT builds",
      pitfalls: [
        {
          name: "Royalty enforcement by hope",
          body:
            "Shipping a collection with ERC-2981 royalty metadata and hoping marketplaces honour it is how creators lose ongoing revenue. Some marketplaces (Blur) default to 0% royalty. Serious collections use operator allowlists, signed transfers, or other enforcement mechanisms — or accept that secondary royalties won't materialise.",
        },
        {
          name: "Metadata hosted at a URL that will disappear",
          body:
            "Collections with metadata hosted on centralised hosts lose their metadata when the company shuts down or stops paying. Use IPFS + Arweave for permanence, with content hashes anchored on-chain so the reference is immutable.",
        },
        {
          name: "Gas-reckless minting at scale",
          body:
            "A 10,000-collection mint on Ethereum mainnet with naive ERC-721 costs collectors $2,000+ in gas collectively. ERC-721A reduces that significantly; compressed NFTs on Solana or L2 deployments reduce it further. Economics have to be designed in advance, not discovered at launch.",
        },
        {
          name: "Marketplace dependency concentration",
          body:
            "Shipping a product that only works on OpenSea is shipping a product that dies if OpenSea changes terms or goes offline. Multi-marketplace listing, native direct-on-platform trading, or cross-chain portability reduces single-point-of-failure risk.",
        },
        {
          name: "No moderation plan",
          body:
            "NFT platforms attract illegal content (CSAM, copyright infringement), spam collections, and scam airdrops. Platforms without a moderation queue, a DMCA takedown process, and a clear ToS enforcement mechanism end up in compliance trouble within weeks of launch.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.blockchainAbstract",
      mediaSide: "right",
      body:
        "<strong>Standards:</strong> <strong>ERC-721</strong>, <strong>ERC-1155</strong>, <strong>ERC-2981</strong> (royalties), <strong>ERC-6551</strong> (token-bound accounts), <strong>ERC-4907</strong> (rentable NFTs), <strong>ERC-721A</strong> (batch-efficient mints), Metaplex standards on Solana.\n\n" +
        "<strong>Marketplace infrastructure:</strong> <strong>Seaport</strong> (OpenSea protocol), <strong>Reservoir</strong> for aggregated marketplace data, <strong>Zora Protocol</strong> for composable primitives, custom marketplace contracts when the flow warrants.\n\n" +
        "<strong>Metadata storage:</strong> <strong>IPFS</strong> via <strong>Pinata</strong> / <strong>NFT.Storage</strong>; <strong>Arweave</strong> via <strong>Bundlr</strong> for permanent storage; content hashes anchored on-chain for verifiability.\n\n" +
        "<strong>Mint tooling:</strong> <strong>Thirdweb</strong> or <strong>Manifold</strong> for creator-controlled mints; custom mint contracts when collection mechanics need non-standard patterns; Solana compressed NFTs via <strong>Metaplex Bubblegum</strong> for very large collections.\n\n" +
        "<strong>Royalty splits:</strong> <strong>0xSplits</strong>, <strong>Splits.org</strong>, or custom distribution contracts for multi-recipient royalty routing.\n\n" +
        "<strong>Wallet integration:</strong> <strong>Privy</strong>, <strong>Magic</strong>, <strong>Dynamic</strong>, <strong>Thirdweb Connect</strong> for embedded-wallet UX; <strong>WalletConnect v2</strong> for cross-wallet connection.\n\n" +
        "<strong>Fiat on-ramp:</strong> <strong>MoonPay</strong>, <strong>Transak</strong>, <strong>Coinbase Pay</strong>, <strong>Crossmint</strong> for credit-card NFT checkout flows.\n\n" +
        "<strong>Analytics:</strong> <strong>Reservoir API</strong>, <strong>OpenSea API</strong>, custom subgraph indexing via <strong>The Graph</strong>, <strong>Flipside Crypto</strong> for historical analytics.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on NFT builds",
      mediaToken: "topic.community",
      mediaSide: "left",
      body:
        "We start with the <strong>product thesis</strong>, not the smart contract. Two weeks asking why this product needs NFTs at all, and whether the answer holds up against the simpler alternatives (Web2 loyalty, a database with a blockchain confirmation layer, etc.). Most projects that failed in 2022 shouldn't have been NFT projects in the first place.\n\n" +
        "Our engagement model is a senior Solidity or Move engineer, a full-stack engineer for the marketplace and creator-tooling surfaces, a front-end engineer for the consumer UX (which is often the product's moat), and a product strategist experienced in NFT launches. For licensed-IP builds we bring in rights-management specialists.\n\n" +
        "Every NFT contract we ship goes through independent audit. For marketplace contracts handling escrow and royalty distribution, two audits minimum. For RWA-backed NFT products, the custody and insurance layer gets its own diligence. <em>NFT contracts have the same consumer-fund-safety bar as any DeFi contract — a bug affects the holders, not just the issuer.</em>",
    },

    {
      type: "UseCases",
      heading: "NFT work we've shipped",
      items: [
        {
          company: "Pillar Gallery",
          stage: "Series A",
          region: "Global · Fine art",
          situation:
            "Pillar is an institutional-grade fine-art NFT platform for established artists and serious collectors. The critical product requirements were auditable provenance (who owned what, when, with custody chain for physical pieces), royalty enforcement for secondary sales, and buyer verification for high-value transactions. We built on Ethereum mainnet with Seaport for trading, custom provenance contracts anchoring authentication records, and an operator allowlist for royalty enforcement. First year gross merchandise value crossed $18M with secondary-royalty collection at above 95% of owed amount — roughly 3× the OpenSea market norm.",
          outcomeNumber: "~95% royalty collection rate",
          outcomeSecondary: "Ethereum mainnet · Seaport + custom provenance contracts",
        },
        {
          company: "Quarry Collectibles",
          stage: "Seed",
          region: "Japan",
          situation:
            "Quarry is a licensed digital collectibles platform for Japanese anime IP. The platform issues verified digital collectibles from licensed anime catalogues, distributed to mainstream fans who mostly don't own crypto wallets. We built on Polygon PoS for cost, with embedded wallets via Privy and credit-card checkout via Crossmint. License-holder admin tools issue rights-tracked collections with royalty splits to the studios. First licensed drop sold out without any crypto-wallet education in the customer funnel.",
          outcomeNumber: "First drop sold out — zero wallet friction",
          outcomeSecondary: "Polygon PoS · Privy embedded wallets + Crossmint checkout",
        },
        {
          company: "Ember Music",
          stage: "Seed",
          region: "New York, USA",
          situation:
            "Ember is a music royalty platform where fans can own a share of future streaming revenue from specific songs. Each NFT represents a pro-rata claim on a defined percentage of a song's royalty pool. Engineering challenge: mechanical royalty distribution across multiple recipient categories per song (songwriter, producer, label, performer, fan-NFT-holders), with different percentages per jurisdiction. We built on Ethereum with 0xSplits-powered distribution and a custom rights-metadata contract that encodes the royalty structure on-chain. First album generated quarterly distributions to 1,200 NFT holders across three releases.",
          outcomeNumber: "1,200 holders · Q distributions live",
          outcomeSecondary: "Ethereum · 0xSplits routing + on-chain rights metadata",
        },
        {
          company: "Oasis Assets",
          stage: "Series A",
          region: "Dubai, UAE",
          situation:
            "Oasis tokenises high-value physical collectibles — vintage watches, classic cars, fine wine, rare spirits — with physical custody in Dubai Free Zone facilities. Each NFT is backed by a specific physical asset held with insurance and a custody chain. We built the platform on Polygon with on-chain custody attestations, integration with the physical-warehouse management system, and a redemption flow where an NFT holder can claim the physical asset (triggering NFT burn and physical shipment). First-year platform inventory crossed $12M across 400 verified assets.",
          outcomeNumber: "$12M+ verified physical inventory",
          outcomeSecondary: "Polygon · custody attestations + warehouse + redemption flow",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our NFT work the through-line is products that solve real ownership or distribution problems. Not speculation vehicles. Marketplaces with real secondary royalties. Licensed-IP platforms with real brand partnerships. Music royalty distribution that actually distributes. Physical-backed NFTs that can actually be redeemed.",
      stats: [
        { value: "70+", label: "NFT platforms shipped" },
        { value: "$45M+", label: "Primary volume on our stacks" },
        { value: "8", label: "Licensed IP partnerships supported" },
        { value: "Zero", label: "Metadata-loss incidents" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building NFT products work with us",
      body:
        "We were in NFT engineering before 2021, through the speculative wave, and into the 2025–2026 utility-first era. <em>The platforms we built that survived the downturn share the characteristic that none of them needed speculation to work.</em>\n\n" +
        "We ship the full stack under one roof: smart contracts, metadata infrastructure, marketplace mechanics, creator and admin tooling, embedded-wallet onboarding, and the consumer UX that mainstream users can actually use. One team, one architecture document, one security lead. No handoff between a contract shop, a design studio, and a Web3 integrator.\n\n" +
        "And we pair NFT engineering with the launch work these products specifically need — community building, influencer partnerships for PFP-adjacent products, licensed-IP negotiations for brand partners, and the PR that positions 2026 NFT products as distinct from 2021 speculative products. <strong>NFTs are a product category, not a buzzword. We build for the category.</strong>",
    },
  ],

  testimonials: [
    { id: "cobox-adaa" },
    { id: "metarix-founder" },
    { id: "fanadise-founder" },
  ],

  faqs: [
    {
      q: "What is NFT marketplace development?",
      a: "<strong>NFT marketplace development is the engineering of platforms where unique ownership tokens are minted, traded, and connected to real product utility — digital collectibles, music royalties, licensed IP, ticketing, membership, gaming assets, or physical-asset-backed certificates.</strong> Full-stack builds include smart contracts (ERC-721, ERC-1155, ERC-2981, ERC-6551 where relevant), minting infrastructure, marketplace mechanics (listing, bidding, royalty enforcement), metadata and provenance storage, creator and admin tooling, and the consumer UX — often including embedded wallets and credit-card checkout for mainstream users.",
    },
    {
      q: "What drives the cost of an NFT platform build?",
      a: "<strong>Cost is driven by NFT category, chain choice, distribution strategy, secondary-market scope, royalty enforcement, and legal framework — not by the token contract itself, which is usually a small piece.</strong> A primary-only collectibles drop on Polygon is lightest. A full marketplace with cross-chain support, embedded wallets, fiat on-ramp, and secondary royalty enforcement is an order of magnitude heavier. Physical-asset-backed NFTs add custody, insurance, and redemption operations on top of the engineering.",
    },
    {
      q: "Is NFT still a viable product category in 2026?",
      a: "<strong>Yes — for specific use cases. The speculative PFP market is mostly gone. What remains and keeps growing is NFT as a functional primitive: music royalties, licensed IP distribution, event ticketing with scalper prevention, membership passes, gaming assets, and RWA-backed collectibles.</strong> If your product thesis requires verifiable ownership, programmable royalty distribution, or rights-tracked distribution, NFT infrastructure is the right tool. If your thesis is 'community will speculate on our JPEGs,' that market is essentially closed.",
    },
    {
      q: "What's included in a full NFT platform build?",
      a: "<strong>Smart contracts (token, marketplace, royalty, any custom flows), minting infrastructure with allowlist and batch support, marketplace mechanics, IPFS + Arweave metadata storage, creator tooling, admin and moderation tools, embedded-wallet UX via Privy / Magic / Dynamic, fiat on-ramp integration, and analytics via Reservoir / subgraphs / custom indexers.</strong> We ship with independent audits on all contracts. What isn't included: the actual creator onboarding and content acquisition (we build tools; you sign the creators), and physical custody operations for RWA-backed NFTs (we integrate; you operate the warehouse).",
    },
    {
      q: "How do you enforce royalties when marketplaces don't?",
      a: "<strong>Through a combination of operator allowlists, signed-transfer patterns, token-bound enforcement, and choosing which marketplaces your NFTs are listable on in the first place.</strong> Operator allowlists (controversial but effective) restrict which smart contracts can move your tokens — this was the industry response to Blur-era zero-royalty defaults. On-chain signed approvals require marketplace integration of the royalty check into the transfer itself. Token-bound accounts (ERC-6551) can embed the enforcement in the token's own logic. None of these are perfect; all are better than hoping marketplaces honour ERC-2981 metadata.",
    },
    {
      q: "Which blockchain should an NFT platform use?",
      a: "<strong>Ethereum mainnet for institutional-grade art and fine collectibles. Polygon / Base / Arbitrum for cost-sensitive consumer products. Solana with compressed NFTs for very large collections where mint economics matter. Flow or Immutable for gaming-specific requirements.</strong> Choice depends on user base (where do your buyers already hold crypto?), mint economics (what's an acceptable gas cost per mint?), and ecosystem (is your primary discovery venue OpenSea / Blur on Ethereum, Magic Eden / Tensor on Solana, or your own platform?).",
    },
    {
      q: "Can mainstream users without wallets buy NFTs on my platform?",
      a: "<strong>Yes, and in 2026 this is the norm for consumer products — embedded wallets plus fiat on-ramp remove the crypto-native friction entirely.</strong> Privy, Magic, Dynamic, and Thirdweb Connect create wallets silently on first login (email, phone, social). Crossmint, MoonPay, and Transak handle credit-card NFT checkout. Your users don't see 'connect wallet' screens or gas fees. The chain ownership benefits remain — but the UX is closer to Shopify than to OpenSea.",
    },
    {
      q: "When should a team NOT build an NFT product?",
      a: "<strong>If your product works identically without NFTs — if the database row could be equally valuable — then skip NFTs.</strong> Ownership, transferability, and programmable rights matter as real product features in specific contexts (collectibles, tickets, royalties, memberships with secondary markets). They don't matter for most customer-loyalty programs, most subscription products, or most content experiences. In 2026, the question to ask is 'what does this product gain from being an NFT that it can't get from a normal database?' If the answer is fuzzy, skip NFT.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "NFT Marketplace", href: "/services/development/nft", active: true },
    { label: "RWA Marketplace", href: "/services/development/rwa" },
    { label: "Token & Stablecoin", href: "/services/development/token" },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
  ],

  finalCta: {
    light: "NFTs that",
    bold: "earn their existence.",
    subtitle: "Products with real ownership utility — not speculation with extra steps.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
