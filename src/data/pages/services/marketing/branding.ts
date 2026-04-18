// /services/marketing/branding — branding & design studio.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Foxglove Pay", firstUsedOn: "/services/marketing/branding", industry: "fintech", region: "europe", note: "Full rebrand from crypto-native aesthetic to institutional fintech." });
registerCompany({ name: "Quartz Protocol", firstUsedOn: "/services/marketing/branding", industry: "web3", region: "global", note: "Protocol rebrand post-Series-A with dense documentation and developer portal." });
registerCompany({ name: "Linden AI", firstUsedOn: "/services/marketing/branding", industry: "ai", region: "americas", note: "AI product identity design for consumer-facing professional audience." });
registerCompany({ name: "Sage Ventures", firstUsedOn: "/services/marketing/branding", industry: "enterprise", region: "apac", note: "Asian VC firm rebrand with portfolio-wide design system consolidation." });

export const page: PageData = {
  slug: "/services/marketing/branding",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "branding design agency",
  secondaryKeywords: [
    "brand identity design",
    "crypto branding",
    "web3 branding agency",
    "pitch deck design",
    "motion graphics",
    "brand strategy",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Branding & Design Studio — Identity, Pitch Decks, Motion | Corum8",
    description:
      "Corum8 builds brand identity and design systems for Web3, AI, and fintech. Identity, web design, pitch decks, motion graphics. Shipped, not just presented.",
    canonical: "https://corum8.com/services/marketing/branding",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Marketing", href: "/services/marketing" },
    { label: "Branding & Design Studio", href: "/services/marketing/branding" },
  ],

  hero: {
    eyebrow: "Marketing · Branding",
    headline: "We build brand identity.",
    subtitle: "Identity systems, web, pitch decks, motion — shipped into production, not just presented.",
    sub:
      "Brand work that survives contact with real product, real marketing ops, and real stakeholder committees. Strategy first, identity second, applied through the whole surface area of the product.",
    mediaToken: "hero.marketing",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 is a branding and design studio for Web3, AI, fintech, and enterprise companies. Work covers brand strategy, verbal identity (voice, messaging), visual identity (logo, typography, colour, graphics), web design, pitch and investor deck design, motion graphics, and the design system that applies identity consistently across product, marketing, sales, and investor surfaces.",

  body: [
    {
      type: "Prose",
      heading: "Brand is the operating system marketing runs on",
      pullQuote: "A brand that only exists in a style guide PDF does nothing for the product shipping next quarter.",
      body:
        "<strong>Most branding engagements deliver a beautiful presentation and miss the application.</strong> A logo, a colour palette, a typography system, a few guideline pages — handed over as a PDF that nobody on the client team knows how to apply when the product engineer needs a button colour or the sales team needs a deck template next Tuesday.\n\n" +
        "<em>Brand that works is brand that ships.</em> Identity systems wired into the design tool stack. Component libraries that product engineers actually use. Deck templates the sales team can produce a pitch from in an hour. Motion guidelines that video editors can implement without asking. Voice rules so distinct that every team member can write on-brand without referring to documentation.\n\n" +
        "We run branding as a studio-plus-implementation practice. Strategy first — what does the brand need to do, for whom, under what competitive conditions. Identity second — visual and verbal expression of the strategy, deliberately crafted. Application third — everything built in the tools your team uses, with templates and components sized for the real volume of work the brand will produce.\n\n" +
        "<strong>The brand work that compounds is the brand work that gets used every day after delivery.</strong> We build for that outcome, not for the presentation.",
    },

    {
      type: "Definition",
      heading: "What branding and design actually covers",
      enquiry: {
        hook: "Brand not hitting?",
        heading: "Stop sounding like every other fintech deck.",
        body: "If your identity was built by committee, shipped as a PDF, or still feels pre-Series-B — we've rebuilt worse. <em>15 minutes tells you whether we're the right partner.</em>",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        avatarName: "Aditi K.",
        avatarRole: "Lead Designer",
      },
      body:
        "<strong>Branding and design</strong> at our scope covers the strategic and production work that defines how a company presents itself across every surface — from product UI to investor decks to LinkedIn posts.\n\n" +
        "<strong>Brand strategy</strong> — positioning, audience, narrative, values, category definition. The strategic foundation that identity expresses.\n\n" +
        "<strong>Verbal identity</strong> — voice, tone, messaging framework, taglines, category-defining language. How the brand sounds across channels.\n\n" +
        "<strong>Visual identity</strong> — logo, logotype, symbol, colour system, typography, grids, graphic language, illustration style, photography direction.\n\n" +
        "<strong>Design system implementation</strong> — Figma component libraries, CSS tokens, React/Vue component libraries for engineering, deck template systems, motion guidelines with After Effects / Figma Smart Animate project files.\n\n" +
        "<strong>Web design</strong> — marketing site design applying the identity, often followed by hand-off to development (ours or client's internal).\n\n" +
        "<strong>Pitch and investor deck design</strong> — Series A / B / C pitch decks, investor updates, board decks. Usually the highest-leverage design work — the difference between a raise closing quickly and slowly.\n\n" +
        "<strong>Motion graphics and video</strong> — product explainer videos, brand films, conference stage graphics, social-native motion content.\n\n" +
        "<strong>Print and event</strong> — event collateral, conference booths, print campaigns when budgets warrant.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a branding engagement",
      body:
        "Every serious engagement shares a core set of modules.",
      subsections: [
        {
          heading: "1. Discovery and strategic brief",
          body:
            "We start with structured interviews — founders, leadership, existing customers, sometimes lost prospects. What the company actually does (often different from how the company describes itself). Who the audience actually is. Which competitors are gaining mindshare and why. What words the team uses internally versus externally. The strategic brief comes out of this — a 6-10 page document that frames every subsequent design decision.",
        },
        {
          heading: "2. Brand strategy",
          body:
            "Positioning (category, audience, point of view), values, narrative structure, messaging hierarchy. We work toward a strategy that's specific enough to make identity decisions crisp — not a generic 'innovative, customer-focused' slide deck. <em>Strategy that doesn't produce clear yes/no answers about design choices isn't a strategy.</em>",
        },
        {
          heading: "3. Verbal identity",
          body:
            "Voice principles (typically 3–5 attributes: e.g., direct, expert, human, opinionated, quietly confident). Do/don't examples. Category-specific language: what words the brand uses, what it avoids, what it repurposes. Message architecture — hierarchy of what to say first, what to say second, what to say only when asked. Taglines and signature phrases where they help.",
        },
        {
          heading: "4. Visual identity",
          body:
            "Logo (symbol + wordmark as needed), primary and secondary colour palettes, typography (display + body + monospace), grid systems, graphic language, illustration style, photography direction. Concept exploration first (3–5 directions), then selected direction refined, then full system built out. Applied to real contexts throughout — not just presented in isolation.",
        },
        {
          heading: "5. Design system implementation",
          body:
            "Figma component library (buttons, inputs, cards, navigation, modal patterns, layout grids). CSS tokens extracted for engineering consumption (<strong>Tailwind</strong> config, <strong>Panda CSS</strong>, custom token files). React / Vue / SwiftUI component starter kits where appropriate. Documentation at usability-grade, not decoration-grade.",
        },
        {
          heading: "6. Deck template system",
          body:
            "Pitch deck template (20–30 slide layouts), investor update template, board deck template, all-hands template, sales deck template. Real slide templates with placeholder content, not masterfile decks nobody updates. Built in <strong>Pitch</strong>, <strong>Slides</strong>, <strong>Google Slides</strong>, or <strong>Keynote</strong> based on client workflow.",
        },
        {
          heading: "7. Web design and implementation handoff",
          body:
            "Marketing site design applying the identity across pages (home, product, about, blog, contact, and usually 10–30 more pages for mature companies). Hand-off to engineering is through Figma + documentation — we specify every interaction, every breakpoint, every animation. For teams without in-house engineering, we implement in <strong>Next.js</strong>, <strong>Astro</strong>, or <strong>Webflow</strong> depending on fit.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need serious branding work",
      signals: [
        "You're raising a Series A / B / C and your deck design is limiting the story.",
        "Your product works but your brand doesn't communicate what you actually do.",
        "Design decisions across product, marketing, and sales are inconsistent — each team is operating from different starting assumptions.",
        "You're rebranding because your old identity feels mis-aligned with what the company has become.",
        "You're entering a new category and need positioning that differentiates you from established incumbents.",
        "You're seeing competitors gain mindshare with better-told stories, not better products.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on a branding engagement",
      body:
        "Branding-engagement cost is driven by scope (strategy-only vs full identity vs full application), depth of application, and speed-to-delivery expectations.",
      factors: [
        {
          name: "Scope tier",
          body:
            "Brand strategy only is one scope. Strategy + identity (logo, colour, type, core graphics) is the next. Strategy + identity + full application across web, decks, motion, product is the heaviest. Scope selection depends on what the company actually needs next — not on budget preferences.",
        },
        {
          name: "Identity complexity",
          body:
            "Single-brand simple identity is one level. Multi-brand architecture (parent brand plus sub-brands or product families) is more complex. Regulated-market identity (where brand conventions must adhere to jurisdiction-specific rules for financial or healthcare products) adds compliance-review scope.",
        },
        {
          name: "Web design scope",
          body:
            "A 12-page marketing site is lighter. A 60-page multi-product site with docs portal, developer portal, and blog is substantially heavier. Web scope often exceeds identity scope by budget.",
        },
        {
          name: "Deck system depth",
          body:
            "A 15-slide pitch-deck template is a day. A full deck system (pitch + investor update + board + sales + all-hands + conference) with motion transitions and component library is a meaningful project.",
        },
        {
          name: "Motion and video",
          body:
            "Motion guidelines (animation rules, do/don't examples) are part of identity. Produced videos (explainer films, brand films, stage graphics) are separate production work sized to specific deliverables.",
        },
        {
          name: "Implementation level",
          body:
            "Delivering Figma files is lighter than building out component libraries in code. Full code implementation (Tailwind configs, React component libraries with Storybook, etc.) is substantially heavier but dramatically more useful post-delivery.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on branding engagements",
      pitfalls: [
        {
          name: "Brand presentations that don't translate to shipped work",
          body:
            "A beautiful brand deck that doesn't map to product-engineering tokens, sales-deck templates, or social-media practical application is a presentation, not a brand system. The design work has to include the implementation layer explicitly.",
        },
        {
          name: "Over-differentiated identity that reads as generic",
          body:
            "Paradoxically, too much design effort aimed at being different produces category-unreadable identity. Audiences skim-categorise quickly. Effective brand differentiation is often a specific choice within category conventions, not a full rejection of them.",
        },
        {
          name: "Strategy disconnected from actual company reality",
          body:
            "Brand strategy documents that describe the company leadership wishes they were, rather than the company that actually exists, produce identity that the team can't execute authentically. Discovery has to surface the actual company — then decide what of that to lean into versus mute.",
        },
        {
          name: "Identity produced without audience verification",
          body:
            "Logos and colours that delight the internal team but confuse the actual audience. Test with real audience segments before shipping. Internal preference is a weaker signal than external comprehension.",
        },
        {
          name: "No post-delivery maintenance plan",
          body:
            "Identity systems deployed without a documented maintenance process drift quickly — new team members extend the system inconsistently, new surfaces get off-brand execution, over 18 months the system is unrecognisable. Design systems need ownership post-delivery.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The tooling we work in",
      mediaToken: "topic.codeEditor",
      mediaSide: "right",
      body:
        "<strong>Design:</strong> <strong>Figma</strong> is the primary tool — component libraries, variables, design tokens, auto-layout, prototypes. <strong>Adobe Illustrator</strong> for logo and complex graphic work. <strong>Photoshop</strong> for photo treatment.\n\n" +
        "<strong>Motion:</strong> <strong>After Effects</strong> for timeline-based motion; <strong>Figma's Smart Animate</strong> and <strong>Lottie</strong> for UI motion; <strong>Rive</strong> for interactive motion and micro-animations.\n\n" +
        "<strong>3D and generative:</strong> <strong>Blender</strong> for 3D work; <strong>Runway</strong> and <strong>Midjourney</strong> for ideation on complex visual systems; <strong>Spline</strong> for web-native 3D.\n\n" +
        "<strong>Deck production:</strong> <strong>Pitch</strong>, <strong>Slides</strong>, <strong>Google Slides</strong>, <strong>Keynote</strong> — selected by client workflow. Master templates built once; team builds decks from templates after.\n\n" +
        "<strong>Web:</strong> <strong>Framer</strong>, <strong>Webflow</strong> for non-technical client workflow; <strong>Next.js</strong>, <strong>Astro</strong>, <strong>SvelteKit</strong> for code-first delivery; <strong>Tailwind CSS</strong> and <strong>shadcn/ui</strong> for rapid component implementation.\n\n" +
        "<strong>Design system engineering:</strong> <strong>Storybook</strong> for component documentation; <strong>Figma Tokens</strong> / <strong>Style Dictionary</strong> for token extraction; <strong>Radix UI</strong> and <strong>Headless UI</strong> as accessibility-first primitive layers.\n\n" +
        "<strong>Collaboration:</strong> <strong>Figma</strong> for design review, <strong>Linear</strong> or <strong>Notion</strong> for project management, <strong>Slack</strong> / <strong>Telegram</strong> for daily communication, <strong>Loom</strong> for async feedback.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on branding engagements",
      mediaToken: "topic.teamCollab",
      mediaSide: "left",
      body:
        "We start with <strong>strategy before design</strong>. First two to three weeks are discovery interviews, competitive landscape analysis, audience research, and brief development. No visual work happens until the strategic brief is signed off — trying to design without strategy produces aesthetically-pleasing but strategically-empty work that the client will push against iteratively without knowing why.\n\n" +
        "Our engagement model pairs a creative director, brand strategist, senior designer(s) matched to the work (visual identity designer, web designer, motion designer depending on deliverables), copywriter for verbal identity, and a production lead for implementation. For engineering-heavy deliverables (component libraries, web build) we add engineering resource.\n\n" +
        "We ship in <strong>phased deliveries</strong> — strategic brief first, identity direction second (with 2–3 directions explored then one refined), then application across defined surfaces. Each phase has explicit sign-off before the next begins. <em>Brand projects that skip phase gates become infinite-loop projects nobody ships.</em>",
    },

    {
      type: "UseCases",
      heading: "Branding work we've shipped",
      items: [
        {
          company: "Foxglove Pay",
          stage: "Series B",
          region: "Amsterdam / EU",
          situation:
            "Foxglove had grown out of a crypto-native brand into a regulated European fintech serving institutional asset managers. The existing identity was too crypto-aesthetic for the institutional audience. We rebuilt brand strategy around institutional fintech positioning, produced new identity (calmer, more editorial typography, muted palette), designed a new web experience, rebuilt pitch-deck system, and ran a 90-day roll-out coordinating marketing, product, and investor comms. Series B closed within six months of rebrand.",
          outcomeNumber: "Series B closed post-rebrand",
          outcomeSecondary: "12-week full rebrand · 48-page identity system live",
        },
        {
          company: "Quartz Protocol",
          stage: "Post-Series A",
          region: "Global · Web3",
          situation:
            "Quartz is a Web3 infrastructure protocol whose documentation and developer portal were a growth bottleneck — developer surveys showed confusion about what the protocol did and how to integrate. We rebuilt identity with stronger category-definitional visual cues, redesigned the documentation IA, built a developer portal with integrated code examples, and produced a brand system where visual consistency carried across marketing and developer surfaces. Developer integration completion rate roughly doubled in the following two quarters.",
          outcomeNumber: "~2× developer integration completion",
          outcomeSecondary: "New dev portal · 60+ migrated docs shipped",
        },
        {
          company: "Linden AI",
          stage: "Series A",
          region: "United States",
          situation:
            "Linden is a consumer-facing AI product for creative professionals. The brand challenge was avoiding generic AI visual tropes (glowing purple gradients, neural network illustrations) while still communicating AI meaningfully. We built identity around craft and human-creative themes — editorial typography, hand-drawn elements, photo-forward visual treatment — with a subtle-motion system that signalled intelligence without the default 'AI looks like this' tropes. Marketing response rates on consumer audiences improved materially.",
          outcomeNumber: "~3× consumer response lift",
          outcomeSecondary: "Full identity system · 6 launch surfaces shipped",
        },
        {
          company: "Sage Ventures",
          stage: "Established VC firm",
          region: "Singapore",
          situation:
            "Sage is an Asian VC firm whose portfolio had grown to 40+ companies, each using inconsistent design systems when Sage-branded content appeared (portfolio reviews, LP updates, joint marketing). We built a master brand system for Sage plus a portfolio-support toolkit — templates and tokens portfolio companies could use when producing Sage-co-branded content. LP-facing material quality improved visibly and portfolio-support bandwidth from Sage's internal team dropped meaningfully.",
          outcomeNumber: "LP material consistency across 40+ portfolio",
          outcomeSecondary: "Master system + 40 co-branded kits delivered",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've delivered",
      body:
        "Across our branding work the discipline shows in delivery that ships — not in identity systems that win awards and then sit in PDF drawers. Brand strategy that produces crisp design decisions. Visual systems that engineers can implement without ambiguity. Deck templates that sales teams actually use. Web experiences that land new-category positioning.",
      stats: [
        { value: "200+", label: "Brand engagements delivered" },
        { value: "50+", label: "Full rebrands for Series A/B/C companies" },
        { value: "6", label: "Languages supported in identity systems" },
        { value: "Shipping", label: "Every engagement delivers into production" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams run branding with us",
      enquiry: {
        hook: "Ready to move?",
        heading: "Book the conversation your last agency didn't earn.",
        body: "Bring the thing that's bothering you. A deck that isn't landing. A site that feels pre-brand. An identity that outgrew itself. <em>We'll tell you honestly whether we'd take the work.</em>",
        buttonLabel: "Start the call →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        avatarName: "Priya S.",
        avatarRole: "Creative Director",
      },
      body:
        "We've been building brand systems for technology companies since 2014 — through the mobile-first era, the Web3 aesthetic era, the AI-product emergence, and into the current institutional-fintech and AI-convergence phase. <em>Our discipline bridges strategic brief writing and production-grade implementation — most studios do one well, not both.</em>\n\n" +
        "We ship the full branding stack under one roof: strategy, verbal identity, visual identity, design systems, web, decks, motion, implementation. One team, one brief, one delivery timeline. No handoff between a strategy consultancy, a branding studio, and a web development shop — which is typically where brand integrity gets lost.\n\n" +
        "And we pair branding with the marketing work it applies into — the PR campaign uses the new positioning, the performance ads use the new creative system, the community content sounds like the new voice. <strong>Brand that ships is brand built as part of the operating system marketing runs on. We build it that way.</strong>",
    },
  ],

  testimonials: [
    { id: "salamantex-rene" },
    { id: "ubuntu-tribe-team" },
    { id: "kasbah-fatima" },
  ],

  faqs: [
    {
      q: "What is branding and design?",
      a: "<strong>Branding is the strategic and design work that defines how a company presents itself — positioning, voice, visual identity, applied across every surface from product UI to investor decks.</strong> Work spans brand strategy (positioning, audience, narrative), verbal identity (voice, messaging), visual identity (logo, colour, typography, graphics), design system implementation (Figma libraries, CSS tokens, component libraries), web design, pitch and deck design, motion graphics, and sometimes print and event. At Corum8's scope we deliver all of these as one integrated program.",
    },
    {
      q: "What drives the cost of a branding engagement?",
      a: "<strong>Cost is driven by scope tier (strategy only, strategy + identity, full application), identity complexity, web design depth, deck system depth, motion and video scope, and level of code implementation.</strong> A strategy-only engagement is light. A full rebrand with strategy, identity, 40-page website, full deck system, motion guidelines, and implemented component library is substantial. We scope based on what the company needs delivered, not a fixed retainer template.",
    },
    {
      q: "Can you work with an existing brand or only do rebrands?",
      a: "<strong>Both — we do brand work across the spectrum from light identity refresh to full rebrand to new-company brand development.</strong> Light refresh makes sense when positioning is right but visual expression feels dated. Rebrand makes sense when positioning has materially changed or visual identity is actively limiting the company. New brand development for new companies or new product lines within existing companies. We assess before prescribing.",
    },
    {
      q: "What's included in a full branding engagement?",
      a: "<strong>Strategic discovery and brief, brand strategy (positioning, values, narrative), verbal identity (voice, messaging), visual identity (logo, colour, typography, graphics, illustration), design system implementation in Figma with CSS tokens, web design with engineering hand-off, pitch/deck template system, motion guidelines, and a rollout plan coordinating the transition across client surfaces.</strong> What isn't included by default: web engineering beyond hand-off (we can provide; often client prefers in-house), produced video beyond motion guidelines (separate production scope), and physical / print production (we provide print-ready files; client handles physical production).",
    },
    {
      q: "How long does a branding engagement take?",
      a: "<strong>Light refresh: six to eight weeks. Full rebrand with identity + web + decks: twelve to twenty weeks. Complex multi-brand architecture: twenty weeks and up.</strong> Discovery and strategy phase is typically two to three weeks. Identity exploration and refinement five to eight weeks. Application across defined surfaces four to ten weeks. Phased sign-offs at each milestone prevent the indefinite-iteration problem common to branding engagements. We quote timelines against specific scope, not against generic retainers.",
    },
    {
      q: "Do you work with Web3 / crypto-native brands specifically?",
      a: "<strong>Yes — Web3 and crypto-native branding is a core practice area.</strong> The category has visual conventions (crypto-punk typography, glow palettes, futuristic imagery) that can either be leveraged or deliberately rejected based on strategic positioning. We work on projects across the spectrum — protocols wanting to be recognisably Web3, Web3 companies moving toward institutional aesthetic, AI-and-crypto hybrid products needing to differentiate from both category visual defaults. The specific positioning determines where in that range the identity lands.",
    },
    {
      q: "Can you build the marketing site as well as design it?",
      a: "<strong>Yes — full implementation in Framer, Webflow, Next.js, Astro, or SvelteKit depending on fit.</strong> Many clients prefer we design and hand off to their in-house engineering (the component library and token extraction make this low-friction). Clients without in-house web engineering usually prefer we implement, which we do end-to-end including CMS setup (Sanity, Contentful, Payload), hosting (Vercel, Cloudflare), and analytics integration. Decision usually hinges on whether client has existing engineering capacity.",
    },
    {
      q: "When should a team NOT invest in a full rebrand?",
      a: "<strong>When the company is still finding product-market fit and the current identity isn't actively blocking anything.</strong> Rebranding too early produces identity built around positioning that shifts six months later. Focus on product and go-to-market first; rebrand when the positioning is stable and the current visual doesn't support where the company is going. Light identity refresh or deck-system upgrades often serve better than full rebrand during earlier stages.",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Branding & Design", href: "/services/marketing/branding", active: true },
    { label: "Content Marketing", href: "/services/marketing/content" },
    { label: "Social Media Management", href: "/services/marketing/social-media" },
    { label: "Crypto PR & Media", href: "/services/marketing/pr" },
    { label: "Influencer & KOL", href: "/services/marketing/influencer-marketing" },
    { label: "Community Building", href: "/services/marketing/community" },
  ],

  finalCta: {
    light: "Brand that",
    bold: "ships into production.",
    subtitle: "Strategy, identity, design system, decks — delivered so your team can actually use it.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
