// /services/marketing/pr
// Service cluster — Crypto PR & media relations.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Northstar Protocol", firstUsedOn: "/services/marketing/pr", industry: "web3", region: "global", note: "DeFi protocol Series A announcement press campaign." });
registerCompany({ name: "Harbor Labs", firstUsedOn: "/services/marketing/pr", industry: "web3", region: "americas", note: "L2 chain mainnet-launch PR across tier-one trade press." });
registerCompany({ name: "Skyline Finance", firstUsedOn: "/services/marketing/pr", industry: "fintech", region: "mea", note: "MENA-regulated fintech launch, mainstream business press." });
registerCompany({ name: "Orchard AI", firstUsedOn: "/services/marketing/pr", industry: "ai", region: "europe", note: "AI tooling Series A with dual crypto + tech press coverage." });

export const page: PageData = {
  slug: "/services/marketing/pr",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "crypto PR agency",
  secondaryKeywords: [
    "crypto public relations",
    "blockchain PR",
    "web3 media relations",
    "press release distribution crypto",
    "category expertship crypto",
    "crypto PR strategy",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Crypto PR & Media Relations Agency | Corum8",
    description:
      "Corum8 runs crypto PR campaigns that actually earn coverage. 10,000+ media outlets. Tier-one trade press. Mainstream business press. Regulated-brand positioning.",
    canonical: "https://corum8.com/services/marketing/pr",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
  ],

  hero: {
    eyebrow: "Marketing · PR",
    headline: "We place real stories.",
    subtitle: "Tier-one trade press, mainstream business press, regulator-aware framing — not wire-service spam.",
    sub:
      "A working press list of 10,000+ outlets, retained relationships with every crypto-trade editor that matters, and the strategic framing that turns a technical product into coverage other founders notice and regulators don't flag.",
    mediaToken: "hero.marketing",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 runs crypto PR campaigns for Web3, AI, and fintech companies — product launches, funding announcements, regulatory milestones, category expertship. Work covers strategic framing, press-list management, pitch writing, direct-to-editor outreach, trade and mainstream business media, podcast placement, and the crisis-communications infrastructure regulated products require.",

  body: [
    {
      type: "Prose",
      heading: "Crypto PR in 2026 is a craft, not a wire-service button",
      pullQuote: "Anyone can buy a press-release wire. Getting a trade editor to actually write about you is something different.",
      body:
        "<strong>Most crypto PR still looks like 2021.</strong> A press release written in breathless language about a 'game-changing' product, distributed through a wire service, and then quoted on a dozen aggregator sites that nobody reads. The announcement hits the crypto-news longtail. It doesn't hit anyone who matters.\n\n" +
        "The PR that actually moves founders' stock, raises raises, and unlocks partnerships comes from a different playbook. <em>Earned coverage in the outlets the market reads.</em> <strong>The Block</strong>. <strong>CoinDesk</strong>. <strong>Decrypt</strong>. <strong>Blockworks</strong>. <strong>The Defiant</strong>. <strong>Unchained</strong>. <strong>Bloomberg</strong>. <strong>Reuters</strong>. <strong>Forbes</strong>. <strong>Financial Times</strong>. <strong>Fortune Crypto</strong>. <strong>TechCrunch</strong>. <strong>Wall Street Journal</strong>. <strong>New York Times</strong> when the story warrants it. Podcasts (<strong>Bankless</strong>, <strong>Unchained</strong>, <strong>Empire</strong>, <strong>The Scoop</strong>). Newsletters that founders actually forward.\n\n" +
        "Earned coverage requires real pitches to real editors based on real relationships. That's the work.\n\n" +
        "We've been running crypto PR since the 2017 ICO cycle — through the <strong>2021 bull</strong>, the <strong>2022 collapse</strong>, the <strong>2023–2024 consolidation</strong>, and into the <strong>2025–2026 institutional era</strong>. The press list we use today includes editors who were covering this space before most crypto PR agencies existed. That relationship base is what separates placements that get read from press releases that get ignored.",
    },

    {
      type: "Definition",
      heading: "What crypto PR actually covers",
      body:
        "<strong>Crypto PR</strong> is the practice of placing newsworthy stories about Web3, AI, and fintech companies in the outlets that matter to buyers, investors, and regulators. It covers several distinct motions.\n\n" +
        "<strong>Product-launch PR</strong> — announcing a mainnet, a product feature, a partnership, a major milestone. The goal is coverage that reaches the right audience at the right time with the right framing.\n\n" +
        "<strong>Funding announcement PR</strong> — raising a seed, Series A, Series B, or token sale. These run through specific outlet hierarchies (The Information, Bloomberg, TechCrunch, Reuters for mainstream; The Block, CoinDesk, Decrypt for trade). Framing a raise well affects the next round's valuation.\n\n" +
        "<strong>Founder category expertship</strong> — op-eds in trade press, speaking slots at Token2049 / Consensus / EthCC / Devcon, podcast appearances, expert-commentary programs where founders become go-to sources for reporters. This is a compounding asset, not a campaign.\n\n" +
        "<strong>Crisis communications</strong> — exploits, regulatory actions, executive departures, incidents. The work is specific: stabilising press narrative, coordinating legal and ops teams, direct-to-editor communication, managing holder sentiment.\n\n" +
        "<strong>Regulatory and business-media positioning</strong> — moving a crypto-native company into <strong>Bloomberg</strong>, <strong>Reuters</strong>, <strong>Forbes</strong>, <strong>FT</strong>, <strong>Fortune</strong> narratives. Requires translation of technical product into institutional language.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a crypto PR campaign",
      enquiry: {
        hook: "Press release died quietly?",
        heading: "Tier-1 coverage doesn't start with pressing send on a press release.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop&q=80",
        avatarName: "Natalia F.",
        avatarRole: "Head of PR",
      },
      body:
        "Every PR engagement we run has the same core modules. The emphasis shifts based on whether the campaign is launch, funding, crisis, or ongoing category expertship.",
      subsections: [
        {
          heading: "1. Strategic framing",
          body:
            "Before we write a pitch, we define the <em>narrative angle</em> that makes the story reportable. A 'new token launch' is not a story. 'First MiCA-licensed perpetuals protocol' is. 'New DeFi product' is not a story. 'DeFi protocol that brought $40M of real-world credit on-chain' is. We work with founders to find the angle that a trade editor will actually write — which usually requires translating the team's internal framing into the category question the market is currently asking.",
        },
        {
          heading: "2. Press-list management",
          body:
            "Our working list covers 10,000+ outlets globally with relationship tiers: <strong>Tier 1 trade</strong> (The Block, CoinDesk, Decrypt, Blockworks, The Defiant, Unchained), <strong>Tier 1 mainstream</strong> (Bloomberg, Reuters, Forbes, FT, Fortune, TechCrunch, Wall Street Journal), <strong>vertical-specific</strong> (Protos for DeFi, Rekt for incident coverage, Blockworks Research for analysis), <strong>regional</strong> (Asia crypto press, LatAm Spanish-language, MENA Arabic-language), and <strong>podcasts + newsletters</strong> (Bankless, Empire, Unchained, Light, The Milk Road, Matt Levine's Money Stuff, Packy McCormick's Not Boring). Lists are maintained editor-by-editor with beat notes and past-coverage history — not scraped spreadsheets.",
        },
        {
          heading: "3. Pitch writing and direct outreach",
          body:
            "We write pitches as if we're writing the story ourselves — specific, data-rich, editor-aware. Not press-release prose. Pitches go directly to specific editors who cover specific beats, with specific angles. <em>Spray-and-pray wire distribution is the opposite of what we do.</em> Response rates on our pitches run meaningfully above industry-average.",
        },
        {
          heading: "4. Announcement orchestration",
          body:
            "For launches, fundings, and major milestones — coordinating the embargo, the exclusive (if any), the supporting outlets, the timing, the sharing strategy. Good PR operations are calendar management: who gets the exclusive, when does the broader wire go, which conferences and podcasts are announcing the day-of vs day-after. We run this like an operations function, not an art form.",
        },
        {
          heading: "5. Founder category expertship program",
          body:
            "Beyond reactive announcements, we build ongoing-visibility programs — op-ed pipelines, regular podcast appearances, expert-commentary registration (founders become the default source reporters call on a specific topic), speaking calendar management for the major crypto and fintech events. Expert visibility compounds over quarters, so we design it as a sustained program, not a campaign.",
        },
        {
          heading: "6. Crisis and reputation infrastructure",
          body:
            "For products holding user funds, serving regulated markets, or operating in politically sensitive spaces, we maintain crisis-ready infrastructure: pre-drafted holding statements, editor relationships warmed, legal team pre-aligned, customer-support talking points. <em>The time to build crisis infrastructure is before the crisis.</em>",
        },
        {
          heading: "7. Measurement and reporting",
          body:
            "Not just clips-and-circulation. We measure share-of-voice in target narratives, quality-of-placement scoring (Bloomberg tier vs SEO-aggregator tier), message pull-through (did the coverage reinforce your positioning or work against it), and commercial attribution where possible (press coverage driving specific funnel events — meetings requested, investor intros, partnership inbound).",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need real PR — not wire-service distribution",
      signals: [
        "You're approaching a major milestone (mainnet, large raise, licence, partnership) and announcement quality will affect commercial outcomes.",
        "Your competitors are getting covered in outlets you're not — and investor due-diligence teams notice.",
        "Your current PR effort is wire-based and you can't name a single trade reporter who'd write about you unprompted.",
        "You're entering regulated markets (VARA, MiCA, FCA) and need positioning that clears institutional due diligence.",
        "Your founder has strong opinions but isn't showing up in the trade press conversations where those opinions would matter.",
        "You've had an incident (exploit, regulatory action, exec departure) and the narrative is running without you.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a PR engagement",
      body:
        "PR cost is driven mostly by campaign complexity, geographic coverage, founder-time investment, and ongoing vs one-off scope.",
      factors: [
        {
          name: "Campaign type",
          body:
            "Single announcement (one launch, one raise) is bounded scope. Ongoing retainer for trade-press visibility is a different scope. An expert-visibility program spanning multiple quarters compounds across engagements. Each has a different shape.",
        },
        {
          name: "Outlet tier target",
          body:
            "Trade press only (The Block, CoinDesk, Decrypt) is the most achievable. Adding mainstream business press (Bloomberg, Reuters, Forbes, FT) expands the work. Adding regulated-market credibility (WSJ, FT, Financial News, Reuters) expands it further. Top-tier mainstream placements are harder by an order of magnitude than trade placements.",
        },
        {
          name: "Geographic coverage",
          body:
            "English-language trade and mainstream is one scope. Adding regional coverage (Asia, LatAm, MENA, Europe-local languages) adds meaningful work — each region has its own outlets, editors, relationships, and cultural norms.",
        },
        {
          name: "Founder availability",
          body:
            "A founder who can spend 6 hours per week on PR — writing op-eds, taking editor calls, recording podcasts, attending events — gets meaningfully more coverage than one who can't. Our retainers scale with founder-time availability.",
        },
        {
          name: "Sector complexity",
          body:
            "A consumer wallet is easier to position than an RWA tokenization platform. A DeFi protocol is easier to position than a crypto-derivatives exchange serving accredited investors. Technical and regulatory complexity requires more framing work per placement.",
        },
        {
          name: "Crisis readiness",
          body:
            "Adding pre-crisis infrastructure (warm editor relationships, holding statements, legal alignment) is a one-time scope expansion. Active crisis management during an incident is a separate engagement with short-turnaround operational intensity.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on crypto PR",
      pitfalls: [
        {
          name: "Wire service announcements with nothing newsworthy",
          body:
            "Teams push press releases through wires without a reportable story — then wonder why no trade reporter writes a follow-up piece. If the only 'coverage' is an unedited wire-service repost on aggregator sites, the campaign produced zero earned media. The fix is earlier: don't run the campaign until the story is newsworthy.",
        },
        {
          name: "Spray-and-pray pitching",
          body:
            "BCC'ing 200 journalists the same pitch is how you get zero responses and get flagged as spam by their filters. Editors ignore mass pitches and remember teams who waste their time. Targeted pitching — specific editor, specific angle, specific reason this editor would care — is the only approach that works.",
        },
        {
          name: "Over-polished founder voice",
          body:
            "Founder commentary run through layers of communications review sounds like committee output — and editors can tell. <em>The founder-visibility program dies when founders stop sounding like themselves.</em> We coach framing and then trust the founder's voice, rather than rewriting into corporate-speak.",
        },
        {
          name: "Regulatory-insensitive framing",
          body:
            "A press release that describes a product in ways that trigger regulatory scrutiny (unregistered securities framing, yield-guarantee language, mischaracterised custody posture) is worse than no coverage. Regulated-product PR has to clear compliance and legal before hitting the wire — adding a few days of preparation is much cheaper than regulator follow-up.",
        },
        {
          name: "Only running PR at milestones",
          body:
            "Teams that only engage PR when they have an announcement — then go silent for months — lose editor mindshare completely. A sustainable founder-visibility program means regular touch (op-eds, podcast appearances, expert commentary) even between announcements. Editors work with founders they hear from, not ones who only email when they need something.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling and playbook we work from",
      mediaToken: "topic.community",
      mediaSide: "right",
      body:
        "<strong>Press-list infrastructure:</strong> maintained in-house on a custom CRM built for editor-relationship tracking — not <strong>Cision</strong> or <strong>Muck Rack</strong> dumps. Editor beat notes, recent-coverage history, response-rate tracking per editor, preferred pitch format (email vs Signal vs Twitter DM).\n\n" +
        "<strong>Distribution:</strong> direct email to editors (primary channel); <strong>Signal</strong> and <strong>Telegram</strong> for trade-press editors who prefer them; wire services (<strong>PR Newswire</strong>, <strong>BusinessWire</strong>, <strong>Chainwire</strong>) only where wire distribution is the product — e.g. formal financial disclosures.\n\n" +
        "<strong>Trade-press tier-one relationships:</strong> <strong>The Block</strong>, <strong>CoinDesk</strong>, <strong>Decrypt</strong>, <strong>Blockworks</strong>, <strong>The Defiant</strong>, <strong>Unchained</strong>, <strong>Cointelegraph</strong>, <strong>Bitcoin Magazine</strong>, <strong>CryptoSlate</strong>, <strong>Protos</strong>, <strong>Rekt</strong>.\n\n" +
        "<strong>Mainstream business tier-one relationships:</strong> <strong>Bloomberg</strong>, <strong>Reuters</strong>, <strong>Financial Times</strong>, <strong>Wall Street Journal</strong>, <strong>Forbes</strong>, <strong>Fortune Crypto</strong>, <strong>TechCrunch</strong>, <strong>The Information</strong>, <strong>Axios Crypto</strong>.\n\n" +
        "<strong>Podcasts and newsletters:</strong> <strong>Bankless</strong>, <strong>Empire</strong>, <strong>Unchained</strong>, <strong>The Scoop</strong>, <strong>Bell Curve</strong>, <strong>On The Margin</strong>, <strong>Light</strong>, <strong>The Milk Road</strong>, <strong>Matt Levine's Money Stuff</strong>, <strong>Packy McCormick's Not Boring</strong>, <strong>Lenny's Newsletter</strong>.\n\n" +
        "<strong>Regional relationships:</strong> <strong>Yicai</strong> / <strong>Chaincatcher</strong> / <strong>Foresight</strong> (China/Asia), <strong>Crypto Briefing</strong> (EU), <strong>AMBCrypto</strong> (India), <strong>BeInCrypto</strong> (global), <strong>Cointelegraph</strong>'s regional desks.\n\n" +
        "<strong>Event calendar:</strong> <strong>Token2049</strong> (Singapore, Dubai), <strong>Consensus</strong>, <strong>EthCC</strong>, <strong>Devcon</strong>, <strong>Mainnet</strong>, <strong>Permissionless</strong>, <strong>Blockchain Life</strong>, <strong>Finext</strong>, regional events in Seoul, Bangkok, Istanbul, São Paulo.\n\n" +
        "<strong>Measurement tooling:</strong> <strong>Meltwater</strong> and <strong>Signal AI</strong> for coverage tracking; custom share-of-voice dashboards; sentiment scoring via <strong>Brandwatch</strong> or custom models; UTM-tracked coverage traffic landing on client sites.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on PR engagements",
      mediaToken: "topic.teamMeeting",
      mediaSide: "left",
      body:
        "We start with the <strong>story audit</strong>, not the pitch. First week is spent with the founder mapping what's actually newsworthy, what's nearly-newsworthy, and what's noise. That audit defines the campaign calendar — when to announce what, in what sequence, to which editors.\n\n" +
        "Our engagement model pairs a senior PR strategist (10+ years in tech / crypto / fintech press), a senior pitch writer, a dedicated outlet-relations lead for the target tier, and a crisis-trained account manager for ongoing retainers. On regulated-market engagements we add a compliance reviewer who clears every external communication against the client's legal framework.\n\n" +
        "We don't run <strong>pay-for-placement</strong> arrangements. Every placement we deliver is earned, edited by the outlet, and owned by the outlet. <em>Paid content marked as editorial destroys the asset we spent years building — editor trust.</em> If a client wants sponsored content or paid placements, we coordinate with dedicated sponsored-content teams but keep them separate from the earned-media work.",
    },

    {
      type: "UseCases",
      heading: "PR work we've shipped",
      items: [
        {
          company: "Northstar Protocol",
          stage: "Series A",
          region: "Global",
          situation:
            "Northstar is a DeFi protocol that had closed a $25M Series A with tier-one investors but hadn't yet announced. The challenge: launching the Series A narrative into trade and mainstream simultaneously, across multiple markets, with the investor brands reinforcing the framing. We coordinated an embargo across The Block (exclusive), CoinDesk, Decrypt, Bloomberg, and The Information; prepared the founder for podcast circuit (Bankless, Empire); and landed a Protos deep-dive three weeks later. Series A announcement produced 40+ tier-one placements and a measurable inbound spike for the next raise conversations.",
          outcomeNumber: "40+ tier-one placements on announcement",
          outcomeSecondary: "Embargo across The Block, CoinDesk, Decrypt, Bloomberg",
        },
        {
          company: "Harbor Labs",
          stage: "Mainnet launch",
          region: "North America",
          situation:
            "Harbor shipped their L2 chain mainnet after two years of testnet work. The story challenge was that 'yet another rollup launches' is hard to make reportable — the market is saturated. We reframed the story around a specific technical innovation (their custom sequencer decentralisation approach) and a verifiable outcome (a named institutional validator in their launch set). Announcement landed placements in The Block, Blockworks, and an EthCC stage-level mention, with founder invited onto Bell Curve and Empire within the first month.",
          outcomeNumber: "Bell Curve + Empire podcast placements",
          outcomeSecondary: "Sequencer-angle reframe · The Block + Blockworks + EthCC mention",
        },
        {
          company: "Skyline Finance",
          stage: "Post-licence launch",
          region: "UAE",
          situation:
            "Skyline is a VARA-licensed retail fintech combining crypto and fiat services. The regulatory narrative was the entire story — 'crypto product launches in UAE' happens every week, but 'VARA-licensed retail fintech with specific novel licensing' is reportable to business press. We ran dual-track coverage: trade press for the crypto angle (CoinDesk, Decrypt, Arabian Business), mainstream business press for the regulatory angle (The National, Gulf News, Bloomberg MENA bureau). Landed 18 earned placements across trade and mainstream in the launch window.",
          outcomeNumber: "18 earned placements · trade + mainstream",
          outcomeSecondary: "Dual-track rollout · VARA narrative · MENA + global outlets",
        },
        {
          company: "Orchard AI",
          stage: "Series A",
          region: "Germany / EU",
          situation:
            "Orchard is an AI tooling product with a dual audience: crypto infrastructure teams (developer audience) and traditional enterprise (commercial audience). Their Series A needed coverage in both AI-adjacent trade press (The Information, TechCrunch, VentureBeat) and crypto trade (The Block, Decrypt). We ran sequenced rollout: AI trade first with the technical angle, crypto trade second with the Web3 use-case angle. Result: founder on Bankless, TechCrunch feature, and a German mainstream-business-press profile in Handelsblatt.",
          outcomeNumber: "TechCrunch feature + Bankless placement",
          outcomeSecondary: "Sequenced rollout · AI trade first · Handelsblatt profile landed",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our PR work the discipline shows in relationship durability — editors still picking up Corum8 client calls five years after the first placement, message pull-through that survives news cycles, and the compounding effect of founders who show up consistently as sources.",
      stats: [
        { value: "10,000+", label: "Media outlets in working list" },
        { value: "2.5B+", label: "Earned impressions (cumulative)" },
        { value: "250+", label: "Tier-one placements delivered" },
        { value: "95+", label: "Active editor relationships" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams running PR work with us",
      body:
        "We've been in crypto PR since <strong>2014</strong> — before most crypto PR agencies existed. The editors we call today are editors we've been talking to for a decade. <em>That's the asset.</em>\n\n" +
        "We ship the full PR stack under one roof: strategy, pitch writing, outlet relations, founder media prep, crisis readiness, category expertship program design, measurement, and the coordination layer between PR and the rest of marketing (community, content, events). One team, one calendar, one relationship network.\n\n" +
        "And we pair PR with the adjacent marketing work that PR operations actually interact with — community where announcement echoes land, influencer where founder appearances get distributed, content where op-eds become owned assets, events where in-person editor relationships get built. <strong>PR is the tip of a marketing spear, not a standalone service. We build the full spear.</strong>",
    },
  ],

  testimonials: [
    { id: "cashaa-kumar" },
    { id: "ubuntu-tribe-team" },
    { id: "salamantex-rene" },
  ],

  faqs: [
    {
      q: "What is crypto PR?",
      a: "<strong>Crypto PR is the practice of placing newsworthy stories about Web3, AI, and fintech companies in the outlets that matter — trade press (The Block, CoinDesk, Decrypt, Blockworks), mainstream business press (Bloomberg, Reuters, Forbes, FT, TechCrunch), podcasts (Bankless, Empire, Unchained), and newsletters founders actually read.</strong> It covers product-launch announcements, funding communications, founder category expertship, crisis and reputation management, and regulatory-aware positioning for institutional audiences. The work is earned coverage, not paid placement.",
    },
    {
      q: "What drives the cost of a crypto PR engagement?",
      a: "<strong>Cost is driven by campaign type, outlet tier targets, geographic coverage, founder-time availability, sector complexity, and ongoing vs one-off scope.</strong> A single announcement into trade press is a bounded project. An ongoing retainer for sustained trade plus mainstream coverage is meaningfully larger. Regulated-market positioning with tier-one mainstream business press targets (Bloomberg, Reuters, FT) is among the heaviest work because those placements require serious news value and founder availability. We scope based on campaign shape, not headcount.",
    },
    {
      q: "How is Corum8 different from a traditional PR agency?",
      a: "<strong>The press list and the category expertise.</strong> We've been in crypto since 2014 — the editors we work with now were our contacts before most traditional agencies had crypto practices. We know which editor at The Block covers RWA versus DeFi, which Bloomberg reporter takes crypto seriously, which podcasts matter for which audiences, and how to navigate the regulatory framing that mainstream agencies often get wrong. Crypto PR is a specialist discipline; treating it as generalist tech PR produces generalist results.",
    },
    {
      q: "What's included in a full PR engagement?",
      a: "<strong>Strategic framing and story development, press-list management and editor relationships, direct pitching and outreach, announcement orchestration (embargoes, exclusives, timing), founder media prep, ongoing founder-visibility program, measurement and reporting, and crisis-ready infrastructure.</strong> What isn't included: paid placements (we only run earned media), wire-service distribution (we can coordinate but it's rarely the right tool), and legal / compliance review (we recommend angles; your counsel clears them).",
    },
    {
      q: "Do you guarantee placement outcomes?",
      a: "<strong>No — no credible PR firm does.</strong> Earned media outcomes depend on news value, editor judgment, and news-cycle timing — none of which any agency fully controls. What we do guarantee: a working press list of 10,000+ outlets, real outreach to target editors, quality pitch writing, strategic framing, and measurable effort. On ongoing retainers we track coverage volume, placement tier quality, and message pull-through transparently. Agencies that guarantee specific placements are usually guaranteeing pay-for-placement — which isn't earned media.",
    },
    {
      q: "Can you work with regulated products (VARA, MiCA, SEC)?",
      a: "<strong>Yes — regulated-product PR is one of our deepest areas.</strong> We run engagements for VARA-licensed UAE products, MiCA-aligned EU products, FCA-regulated UK products, and US-accredited instruments with SEC-sensitive framing. The work involves explicit legal review of every external communication, regulator-aware framing that doesn't create future compliance problems, and positioning for mainstream business press that institutional investors actually read. Licensed-market PR requires disciplined message control — every external statement can become a compliance artefact, and editors in that tier expect precision rather than crypto-native enthusiasm. We work closely with clients' in-house counsel throughout to make sure coverage lands the intended positioning cleanly.",
    },
    {
      q: "What's a realistic timeline for placement outcomes?",
      a: "<strong>An announcement-driven campaign delivers coverage within the announcement window — typically the week of launch. Sustained founder-visibility programs compound across quarters — by month three you see editors proactively reaching out, by month six you see consistent trade-press presence, by month twelve mainstream business press becomes accessible.</strong> Agencies promising overnight founder-visibility results either deliver paid placement or overselling. The work is relationship-built and compounds with time.",
    },
    {
      q: "When should a team NOT invest in PR?",
      a: "<strong>When there's nothing newsworthy to report — PR without story is an expense without return.</strong> Early-stage teams without product-market fit, with no meaningful announcement on the horizon, and without a founder available to invest time are better off spending that PR budget on product. Once you have a real announcement (meaningful launch, genuine raise, concrete metric milestone), or once the founder has category-specific expertise worth amplifying, PR starts to earn its keep. Before that, PR is mostly theatre.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Crypto PR & Media", href: "/services/marketing/pr", active: true },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
    { label: "Community Building", href: "/services/marketing/community" },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Branding & Design", href: "/services/marketing/branding" },
    { label: "SEO, AEO & GEO", href: "/services/marketing/seo" },
  ],

  finalCta: {
    light: "Real stories",
    bold: "placed in outlets that matter.",
    subtitle: "Tier-one trade, mainstream business, regulator-aware framing — earned, not paid.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
