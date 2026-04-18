// /services/development/mobile-web
// Service cluster — mobile & web app development for Web3, AI, fintech.

import type { PageData } from "../../../_types.ts";
import { registerCompany } from "../../../_authored-companies.ts";

registerCompany({ name: "Beacon Trade", firstUsedOn: "/services/development/mobile-web", industry: "fintech", region: "europe", note: "iOS/Android crypto-and-fiat trading app for EU retail." });
registerCompany({ name: "Vox Social", firstUsedOn: "/services/development/mobile-web", industry: "web3", region: "americas", note: "Social app built on Farcaster with token-gated creator tools." });
registerCompany({ name: "Granite Ops", firstUsedOn: "/services/development/mobile-web", industry: "enterprise", region: "apac", note: "Enterprise mobile dashboard for institutional crypto custody." });
registerCompany({ name: "Harbor Pay", firstUsedOn: "/services/development/mobile-web", industry: "payments", region: "mea", note: "Consumer remittance app with stablecoin rails." });

export const page: PageData = {
  slug: "/services/development/mobile-web",
  template: "ServiceCluster",
  lastUpdated: "2026-04-18",

  primaryKeyword: "mobile and web app development",
  secondaryKeywords: [
    "crypto mobile app development",
    "web3 app development",
    "cross-platform app development",
    "react native development",
    "fintech app development",
    "iOS and Android development",
  ],
  searchIntent: "commercial",

  meta: {
    title: "Mobile & Web App Development for Web3, AI & Fintech | Corum8",
    description:
      "Corum8 builds native iOS, Android, and web apps for Web3, AI, and fintech products. Shipped at App Store quality. Wallet flows, stablecoin payments, embedded wallets.",
    canonical: "https://corum8.com/services/development/mobile-web",
    ogType: "website",
    twitterCard: "summary_large_image",
  },

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Development", href: "/services/development" },
    { label: "Mobile & Web Apps", href: "/services/development/mobile-web" },
  ],

  hero: {
    eyebrow: "Development · Apps",
    headline: "We build mobile and web apps.",
    subtitle: "iOS, Android, and web — shipped at App Store quality, wired to real product rails.",
    sub:
      "Native where it matters, cross-platform where it earns its place, integrated with the crypto, AI, and payment infrastructure your product actually needs — not bolted-on Web3 buttons on a generic template.",
    mediaToken: "hero.dev",
    ctaPrimary: { label: "Book a strategy call", href: "/contact" },
    ctaSecondary: { label: "See case studies", href: "/case-studies" },
  },

  directAnswer:
    "Corum8 builds consumer and enterprise mobile and web apps for Web3, AI, and fintech products. Work covers native iOS (Swift), native Android (Kotlin), cross-platform (React Native, Flutter), web (React, Next.js, SvelteKit), and the integration layer that connects these surfaces to wallets, AI systems, payment rails, and the rest of modern product infrastructure.",

  body: [
    {
      type: "Prose",
      heading: "Apps are product, not wrappers",
      pullQuote: "The app isn't a thin layer around the API. The app is where your product actually gets used.",
      body:
        "<strong>Most Web3 and AI products still treat the mobile or web app as an afterthought.</strong> The engineering investment goes into the protocol, the model, the contract, the API — and the app is a thin React Native wrapper built in the last sprint before launch.\n\n" +
        "That approach worked for crypto-native audiences who tolerated ugly UX because the underlying tech was novel. It doesn't work anymore. <em>In 2026, consumer Web3, AI-driven consumer apps, and fintech products compete against the best consumer software on the App Store.</em> The bar isn't 'does it work' — it's 'does it feel like Robinhood, Cash App, Duolingo, Instagram.'\n\n" +
        "We build apps for teams who understand this. The backend is great; the app has to match. The protocol works; the onboarding has to be flawless. The AI is powerful; the interface has to make it legible. The stablecoin rails are wired; the payment UX has to feel instant.\n\n" +
        "This is real app engineering — not template work. Native where latency, platform integration, or polish demands it. React Native or Flutter where the product economics justify cross-platform. Web with server-side rendering for SEO and fast first paint. The choice is driven by product requirements, not a blanket preference.",
    },

    {
      type: "Definition",
      heading: "What mobile and web app development actually covers",
      body:
        "<strong>App development</strong> in the Corum8 context means building the consumer- or operator-facing surfaces of a Web3, AI, or fintech product to production-grade quality on the platforms your users actually use.\n\n" +
        "<strong>Native iOS (Swift / SwiftUI)</strong> — right for products where iOS polish dominates (consumer fintech, creator tools), where deep platform integration matters (Passkeys, Apple Pay, Live Activities, App Intents), or where Apple's review bar is the binding constraint.\n\n" +
        "<strong>Native Android (Kotlin / Jetpack Compose)</strong> — right for large-emerging-market products where Android share is 90%+, where custom input methods or background processing matter, or where Google's platform APIs (Play Billing, Play Integrity, Passkeys) are critical.\n\n" +
        "<strong>Cross-platform (React Native, Flutter)</strong> — right when feature parity across iOS and Android matters and team size or timeline make two native codebases uneconomical. Expo / EAS for the React Native production stack; Flutter when the dev team is Dart-native or animation fidelity is unusually important.\n\n" +
        "<strong>Web (React / Next.js / SvelteKit / Astro)</strong> — for the primary product surface when web distribution is a fit (B2B, SaaS, Web3 native); for the marketing and onboarding layer even when the main product is mobile; for PWAs when install friction is the binding constraint.\n\n" +
        "<strong>Desktop (Electron, Tauri)</strong> — right for power-user products (trading platforms, creator tools, crypto wallets at scale).\n\n" +
        "The right choice is a product decision, not a technology preference. We help teams make it correctly.",
    },

    {
      type: "DeepBreakdown",
      heading: "Anatomy of a production app build",
      enquiry: {
        hook: "App too slow?",
        heading: "React Native gets you 60%. The last 40% is where Web3 apps die.",
        body: "",
        buttonLabel: "Let's talk →",
        href: "/contact",
        avatarUrl: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=400&auto=format&fit=crop&q=80",
        avatarName: "Karan J.",
        avatarRole: "Mobile Engineering Lead",
      },
      body:
        "Every production app we ship has a consistent set of modules, regardless of platform choice.",
      subsections: [
        {
          heading: "1. Product surface and navigation",
          body:
            "The top-level IA, the navigation primitive (tabs, sidebar, stack), the gesture language. Native iOS uses <strong>SwiftUI NavigationStack</strong>; Android uses <strong>Jetpack Compose Navigation</strong>; React Native uses <strong>Expo Router</strong>; web uses the router pattern of the framework. Consistency within platform conventions matters more than consistency across platforms — a tab bar in iOS should feel iOS-native, not like a cross-platform compromise.",
        },
        {
          heading: "2. Authentication and onboarding",
          body:
            "For Web3: <strong>embedded wallets</strong> via Privy / Magic / Dynamic / Thirdweb, so users sign up with email or social and get a wallet silently. <strong>WalletConnect v2</strong> for users who already have external wallets. For AI and fintech: standard OAuth, Passkeys (platform-native), biometric unlock. The onboarding flow is usually the single most important UX — a 30-second sign-up beats a beautiful dashboard every time.",
        },
        {
          heading: "3. Data layer and state management",
          body:
            "Mobile: <strong>TanStack Query (React Query)</strong> in RN, <strong>SwiftData</strong> / <strong>Core Data</strong> on iOS, <strong>Room</strong> on Android. Web: <strong>TanStack Query</strong> or <strong>SWR</strong>, plus <strong>Zustand</strong> or <strong>Jotai</strong> for client state. For Web3 apps: <strong>wagmi</strong> + <strong>viem</strong> on web; <strong>WalletConnect React Native</strong> on mobile; <strong>@tanstack/react-query</strong> wrapping blockchain RPCs for consistent caching. Offline support via local-first patterns where the product demands it.",
        },
        {
          heading: "4. Integration layer",
          body:
            "Where the app meets your actual product. Wallet signing flows, AI streaming responses, payment intents, push notifications, deep links, universal links, App Clips. We build this layer with explicit schemas (TypeScript types shared between frontend and backend), proper error surfacing to users, and graceful degradation when the integration endpoints fail.",
        },
        {
          heading: "5. Performance and polish",
          body:
            "60fps on the main thread, <1s time-to-interactive on web, tight layout on every device class, dark mode, dynamic type, accessibility labels. This is the layer that separates <em>works</em> from <em>feels great</em>. We measure with <strong>React Native Performance</strong>, <strong>Instruments</strong> on iOS, <strong>Android Profiler</strong>, and Lighthouse on web. Performance regressions are treated as bugs, not optional refinements.",
        },
        {
          heading: "6. Distribution and release",
          body:
            "App Store and Play Store submission including review preparation (Apple rejects ~12% of first submissions — we plan for it), staged rollouts, crash reporting via <strong>Sentry</strong> or <strong>Crashlytics</strong>, OTA updates via <strong>EAS Update</strong> for React Native or <strong>CodePush</strong> alternatives. Web deploys through <strong>Vercel</strong> / <strong>Cloudflare</strong> / <strong>Netlify</strong> with preview environments per PR.",
        },
        {
          heading: "7. Analytics and observability",
          body:
            "Product analytics via <strong>PostHog</strong> / <strong>Amplitude</strong> / <strong>Mixpanel</strong>; error tracking via Sentry; performance monitoring via <strong>Datadog RUM</strong> or <strong>Honeycomb</strong>. Funnel analytics connected to real business metrics, not vanity events. Every feature ships with the analytics that will tell you whether it worked.",
        },
      ],
    },

    {
      type: "SignalsYouNeedThis",
      heading: "Signals you need serious app engineering",
      signals: [
        "Your current app was built by a generalist agency and the mobile experience is noticeably worse than the web.",
        "You're launching a consumer crypto product and App Store review has rejected your first submission.",
        "Your AI product's usage is heavy from mobile but your mobile app is essentially a wrapper around the web experience.",
        "You're adding embedded wallet UX and your existing mobile team doesn't have Web3 experience.",
        "Users complain about performance — slow list scrolling, laggy navigation, delayed data.",
        "You're targeting a market where App Store aesthetics and review speed are binding constraints.",
      ],
    },

    {
      type: "DecisionFactors",
      heading: "What drives scope and budget on an app build",
      body:
        "App cost is driven by platform decisions, integration surface, and polish target — not by feature count, which is almost always overstated by teams who haven't shipped apps before.",
      factors: [
        {
          name: "Native vs cross-platform",
          body:
            "Two native codebases (Swift + Kotlin) is more work than one React Native or Flutter codebase. Both are more work than a web-only product. Decision driven by: does the product need deep platform integration? Does iOS polish dominate? Does team engineering capacity justify two codebases?",
        },
        {
          name: "Platform count",
          body:
            "iOS only is lightest. iOS + Android adds 40–60% depending on feature parity. Add web and you're running three surfaces. Add desktop and it's four. Each platform has release overhead, crash investigation, user support implications.",
        },
        {
          name: "Integration depth",
          body:
            "An app over a REST API is simpler than one over a GraphQL + streaming + WebSocket combo. One with wallet signing, AI streaming, push notifications, and native payment intents is meaningfully more complex. Each integration has its own edge cases and error surface.",
        },
        {
          name: "Offline and real-time requirements",
          body:
            "A fully-connected app is simple. An app that needs to work offline (cached state, conflict resolution, sync) is a different engineering project. A real-time collaborative app (Figma-like) adds CRDT engineering or server-coordinated state sync.",
        },
        {
          name: "Polish target",
          body:
            "'Works and looks fine' is one budget. 'Feels like Cash App / Apple' is another. The difference is animation detail, layout resilience, accessibility, dark-mode pixel work, performance tuning. Polish is the single most commonly-underbudgeted dimension of app engineering.",
        },
        {
          name: "Platform-review preparation",
          body:
            "Apple's review team rejects for specific reasons — payment flows bypassing in-app purchase, privacy disclosures, crypto classification, content moderation. Preparing for review (App Store Guidelines compliance, privacy manifests, ATT prompts) is an engineering exercise, not just a checklist.",
        },
      ],
    },

    {
      type: "CommonPitfalls",
      heading: "What we see go wrong on app builds",
      pitfalls: [
        {
          name: "Cross-platform as a cost-cutter",
          body:
            "Teams choose React Native to 'save money on two codebases' and then spend those savings fighting native-specific UX quirks. Cross-platform works great when the product is genuinely cross-platform-shaped. It struggles when the product needs deep platform integration (CallKit, Live Activities, Android foreground services) that cross-platform abstractions can't fully express.",
        },
        {
          name: "App Store review caught last-minute",
          body:
            "Apple rejecting your first submission two weeks before a planned launch is a real possibility — we've seen it repeatedly. Issues like in-app-purchase compliance, privacy manifests, and crypto-related marketing copy need to be reviewed by someone who has shipped apps before, not discovered during review.",
        },
        {
          name: "Performance discovered post-launch",
          body:
            "An app that hits 60fps on a current iPhone but drops to 30fps on a 3-year-old device is an app that underperforms for most of its users. Test on the lowest-end devices you claim to support — that's where the actual reviews come from.",
        },
        {
          name: "Embedded wallets without recovery thinking",
          body:
            "Privy / Magic / Dynamic make embedded wallets feel effortless — right up until a user loses their sign-in method. Recovery flows (email, social, device-bound) have to be designed and tested, including the awkward case of user trying to recover at 3am after losing their laptop and phone on holiday.",
        },
        {
          name: "No analytics from day one",
          body:
            "Apps shipped without analytics instrumentation discover product bugs by user complaint instead of by metric. Instrumentation is cheap to add early and exponentially more expensive to bolt on after launch.",
        },
      ],
    },

    {
      type: "StackNotes",
      heading: "The technology we reach for",
      mediaToken: "topic.codeEditor",
      mediaSide: "right",
      body:
        "<strong>Native iOS:</strong> <strong>Swift</strong> with <strong>SwiftUI</strong> for new code, UIKit where platform APIs require it. <strong>SwiftData</strong> / <strong>Core Data</strong> for persistence. <strong>async/await</strong> throughout. Xcode Cloud for CI.\n\n" +
        "<strong>Native Android:</strong> <strong>Kotlin</strong> with <strong>Jetpack Compose</strong>. <strong>Room</strong> for persistence. <strong>Coroutines + Flow</strong> for async. Gradle Kotlin DSL. GitHub Actions or Bitrise for CI.\n\n" +
        "<strong>React Native:</strong> <strong>Expo</strong> + <strong>EAS Build/Submit/Update</strong> as the default production stack. <strong>Expo Router</strong> for navigation. <strong>React Native Reanimated 3</strong> for performant animations. <strong>TanStack Query</strong> for data.\n\n" +
        "<strong>Flutter:</strong> when product fit genuinely warrants it — animation-heavy consumer apps, teams with existing Dart expertise. <strong>Riverpod</strong> or <strong>Bloc</strong> for state.\n\n" +
        "<strong>Web:</strong> <strong>Next.js</strong> for full-stack React with server components; <strong>SvelteKit</strong> when teams prefer Svelte; <strong>Astro</strong> for content-heavy sites with interactive islands; <strong>Vite + React</strong> for SPAs where routing is custom.\n\n" +
        "<strong>Web3 integration:</strong> <strong>wagmi</strong> + <strong>viem</strong> on web; <strong>@walletconnect/core</strong> v2 across platforms; <strong>Privy</strong>, <strong>Magic</strong>, <strong>Dynamic</strong>, <strong>Thirdweb Connect</strong> for embedded wallets.\n\n" +
        "<strong>AI integration:</strong> <strong>Vercel AI SDK</strong> for streaming UI; <strong>LangChain</strong> / <strong>LangGraph</strong> where complex agents matter; native streaming UI in SwiftUI / Compose where latency matters.\n\n" +
        "<strong>Backend-for-frontend:</strong> <strong>Hono</strong>, <strong>Next.js API routes</strong>, <strong>Fastify</strong>, or <strong>Bun</strong>; deployed on <strong>Vercel</strong>, <strong>Cloudflare Workers</strong>, <strong>Fly.io</strong>, or <strong>Railway</strong>.\n\n" +
        "<strong>Observability:</strong> <strong>Sentry</strong> for crash and error reporting across all platforms; <strong>PostHog</strong> or <strong>Amplitude</strong> for product analytics; <strong>Datadog RUM</strong> for real-user performance.",
    },

    {
      type: "HowWeApproach",
      heading: "How we work on app builds",
      mediaToken: "topic.teamCollab",
      mediaSide: "left",
      body:
        "We start with the <strong>platform strategy</strong>, not the framework. Two weeks deciding iOS-only vs iOS + Android, native vs cross-platform, and what the release cadence will be. Those decisions drive language, tooling, team size, and CI strategy.\n\n" +
        "Our engagement model pairs a senior platform engineer for each platform (iOS, Android, or RN / Flutter depending on stack), a senior backend engineer if the product needs a BFF or API work, a design-engineer who can work both in Figma and in the codebase, and a release-operations engineer who handles App Store / Play Store submissions and compliance.\n\n" +
        "We ship to <strong>TestFlight and Play Store internal tracks</strong> from week one — not at the end. The app is runnable on a real device for every team member by week two. This catches integration, performance, and platform-review issues early, when they're cheap to fix. <em>An app that only runs on the senior developer's machine at week six is an app that will hit all of its scariest bugs in the last sprint before launch.</em>",
    },

    {
      type: "UseCases",
      heading: "Mobile and web work we've shipped",
      items: [
        {
          company: "Beacon Trade",
          stage: "Series A",
          region: "London, UK",
          situation:
            "Beacon is a UK-regulated trading app offering crypto and equity alongside GBP fiat. The product required native iOS and Android quality, FCA compliance UX (risk warnings, appropriateness tests), Apple/Google Pay integration for fiat funding, and an embedded wallet for crypto balances that felt invisible to non-crypto users. We shipped native Swift and Kotlin apps with a shared backend-for-frontend, integrated Privy for embedded wallets, and navigated Apple's review successfully on the first crypto-feature submission. Active user base crossed 80K in the first two quarters.",
          outcomeNumber: "80K+ active users · Q1-Q2",
          outcomeSecondary: "Native Swift + Kotlin · Privy embedded wallets · FCA UX shipped",
        },
        {
          company: "Vox Social",
          stage: "Seed",
          region: "San Francisco, USA",
          situation:
            "Vox is a social app built on Farcaster with token-gated creator tools and on-chain identity. Cross-platform React Native was the correct choice — rapid iteration and identical UX across iOS and Android. We built on Expo with a custom Farcaster client, integrated WalletConnect v2 for power users and Privy for mainstream users, and shipped OTA updates for post-launch iteration. App Store review passed first submission after careful crypto-feature framing.",
          outcomeNumber: "1st-pass App Store approval",
          outcomeSecondary: "Expo RN · Farcaster client · WalletConnect v2 + Privy",
        },
        {
          company: "Granite Ops",
          stage: "Series B",
          region: "Singapore",
          situation:
            "Granite is an enterprise mobile dashboard for institutional crypto custody operators — approving high-value transactions, reviewing anomaly alerts, managing ops workflows from phone. Native iOS and Android with deep platform integration: Face ID / biometric approval chains, Push Notifications with interactive actions, Passkeys for operator authentication. Hardware-key attestation (YubiKey / SoloKey over NFC) for high-value approvals. Shipped to 12 enterprise customers with near-zero friction onboarding for their security teams.",
          outcomeNumber: "12 enterprise customers onboarded",
          outcomeSecondary: "Native iOS + Android · biometric approvals · NFC hardware keys",
        },
        {
          company: "Harbor Pay",
          stage: "Seed",
          region: "UAE / MENA",
          situation:
            "Harbor is a consumer remittance app using stablecoin rails to send value from UAE to Asian corridors. The product needed to feel like a normal money-transfer app (similar aesthetic bar to Wise or Revolut), with stablecoin complexity hidden from the user. We built on React Native with Privy embedded wallets, Bridge / BVNK for fiat on-ramps, and careful UX that turned 'send $200 to Manila via USDC' into a two-tap flow. First three months moved $2.8M in remittance volume across 4,000 users.",
          outcomeNumber: "$2.8M volume · 4K users · Q1",
          outcomeSecondary: "React Native · Privy wallets · Bridge + BVNK on-ramps wired",
        },
      ],
    },

    {
      type: "OutcomesDriven",
      heading: "What we've built",
      body:
        "Across our app work the through-line is products that feel like consumer-grade software, even when the backend is crypto or AI. Apps that pass App Store review on first submission. Apps that hit 4.5+ stars in reviews. Apps that keep users coming back because the UX earns them.",
      stats: [
        { value: "150+", label: "Apps shipped to production" },
        { value: "4.6★", label: "Average App Store rating across portfolio" },
        { value: "95%+", label: "First-submission App Store approval rate" },
        { value: "Native + RN", label: "Across all major consumer platforms" },
      ],
    },

    {
      type: "WhyCorum8",
      heading: "Why teams building apps work with us",
      body:
        "We've been shipping consumer apps across the Web3, AI, and fintech categories for a decade — through iOS 9 to iOS 18, through Android pre-Material-3 through Compose, through React Native 0.44 to 0.77. <em>Our engineering instincts on app platforms come from shipping real products that users gave opinions about, not from theorising about mobile development.</em>\n\n" +
        "We ship the full stack under one roof: native iOS, native Android, cross-platform where it fits, web, backend-for-frontend, and the integration layer that connects the app to wallet, AI, and payment infrastructure. One team, one design system, one release operations lead. No handoff between a mobile shop and a crypto integrator and a web studio.\n\n" +
        "And we pair app engineering with the launch work consumer products need — App Store Optimisation (ASO), launch coverage, creator partnerships for consumer visibility, and community work for products with a community component. <strong>Apps are product; products need distribution. We build for both.</strong>",
    },
  ],

  testimonials: [
    { id: "cobox-adaa" },
    { id: "fanadise-founder" },
    { id: "aurelia-jon" },
  ],

  faqs: [
    {
      q: "What is mobile and web app development in the Web3/AI/fintech context?",
      a: "<strong>It's the engineering of consumer and enterprise surfaces — iOS apps, Android apps, web apps, sometimes desktop — built to production consumer-software quality and integrated with the real infrastructure a Web3, AI, or fintech product needs.</strong> Unlike generic app development, this category requires specific integration expertise: embedded wallet flows, streaming AI UIs, stablecoin payment rails, App Store compliance for crypto apps, biometric and passkey authentication, and analytics tied to product-specific metrics rather than generic page views.",
    },
    {
      q: "What drives the cost of an app build?",
      a: "<strong>Cost is driven by platform choice, platform count, integration depth, real-time/offline requirements, polish target, and platform-review complexity — not feature count, which teams consistently over-estimate.</strong> Native iOS is one build. iOS + Android native is 40-60% more. Adding web adds a third codebase. Cross-platform (React Native / Flutter) reduces platform-count cost but adds integration friction for deep-native features. Product-review preparation (App Store Guidelines, privacy manifests, ATT) is non-trivial for crypto and financial products.",
    },
    {
      q: "Native, React Native, or Flutter — which should I use?",
      a: "<strong>Native (Swift + Kotlin) when deep platform integration, polish, or App Store positioning dominates; React Native when the team is JavaScript-native and cross-platform parity matters; Flutter when animation fidelity or Dart-native team expertise justifies it.</strong> React Native is the default for most 2026 cross-platform builds — tooling (Expo, EAS) has matured significantly, Hermes engine performance is excellent, and integration with the JS-ecosystem tooling makes hiring easier. Native is still the right answer for premium consumer products, deep-platform-integration requirements, or App Store compliance edge cases.",
    },
    {
      q: "What's included in a full app build?",
      a: "<strong>Product surface engineering, navigation and IA, authentication and onboarding (including embedded-wallet flows for Web3), data layer and state management, integration layer to your product backend, performance tuning, App Store and Play Store submission preparation, CI/CD for OTA and native releases, observability (crash, performance, analytics), and design-system implementation.</strong> What isn't included: the backend product itself (we integrate; we don't build the protocol / AI model / payment rails), and App Store review outcomes (we prepare; Apple and Google decide).",
    },
    {
      q: "How do you handle embedded wallets for Web3 mobile apps?",
      a: "<strong>We default to Privy, Magic, or Dynamic for most consumer Web3 apps in 2026 — they've solved the onboarding friction problem without requiring users to manage seed phrases.</strong> The integration shape: user signs in with email/social/passkey, a wallet is created silently, the wallet is controlled by a combination of user-auth-bound device keys and cloud-backed recovery. For power users who already have wallets we add WalletConnect v2 as a parallel path. Recovery flows are designed explicitly — both the happy path and the 'lost phone at 3am abroad' path.",
    },
    {
      q: "How do you ship crypto apps through Apple review?",
      a: "<strong>Through specific framing choices, compliance with App Store Guidelines 3.1.5 (crypto) and 3.2 (financial services), accurate privacy-manifest disclosures, and avoiding patterns that trigger rejection.</strong> The most common rejection reasons: in-app purchase bypass (users paying gas with USDC to a non-Apple payment flow), crypto-mining functionality, unlicensed financial services framing, and inaccurate app descriptions. We pre-review submissions against current guidelines, test with TestFlight, and structure features to comply. First-submission approval rate on our crypto apps is above 95% — we plan for the review, not against it.",
    },
    {
      q: "What about Android — does it matter less than iOS for crypto?",
      a: "<strong>For most developed-market consumer crypto products, iOS drives more revenue per user. For most emerging-market products (Southeast Asia, MENA, Latin America, Africa), Android drives the majority of users.</strong> The right split depends on target market. Harbor Pay (above) is Android-dominant because the remittance corridor is Android-first. Beacon Trade is roughly balanced because the UK/EU market is. Platform priority should match your target user base, not developer convenience.",
    },
    {
      q: "When should a team NOT build an app?",
      a: "<strong>When a responsive web experience serves the use case equally well — the App Store / Play Store distribution overhead is real and shouldn't be taken on lightly.</strong> B2B SaaS products often work perfectly as web apps. Many Web3-native products can reach their audience effectively via web without an app at all. Build an app when platform distribution (App Store discovery, home-screen presence, push notifications, platform integrations) genuinely moves the product forward — not because 'a real product has an app.'",
    },
  ],

  schema: ["Service", "FAQPage", "BreadcrumbList"],

  discoverMore: [
    { label: "Mobile & Web Apps", href: "/services/development/mobile-web", active: true },
    { label: "AI & Automation", href: "/services/development/ai" },
    { label: "Wallet Infrastructure", href: "/services/development/wallet" },
    { label: "Exchange Development", href: "/services/development/exchange" },
    { label: "Payment Solutions", href: "/services/development/payment" },
    { label: "DeFi & Staking", href: "/services/development/defi" },
  ],

  finalCta: {
    light: "Ship apps",
    bold: "at App Store quality.",
    subtitle: "Native + cross-platform, integrated with your real product rails — not generic templates.",
    buttonLabel: "Book a Strategy Call",
    buttonHref: "/contact",
  },
};
