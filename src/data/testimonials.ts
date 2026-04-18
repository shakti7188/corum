// Testimonials library.
// Seeded with real client quotes from docs/CONTENT.md, then grown with authored
// reviews through Wave 1. Every authored review follows CLAUDE.md §4.3 rules:
// named reviewer + role + company + location, quote references the exact page
// topic, specific outcome number, 40–80 words per quote.
//
// Every page pulls 3 testimonials by id. Matching logic in
// src/components/sections/TestimonialsBlock.astro uses the `topics`, `industry`
// and `region` tags.

export interface Testimonial {
  id: string;                  // stable slug — do not rename after shipped
  quote: string;               // 40–80 words
  author: string;
  role: string;
  company: string;
  location?: string;
  industry:                    // broad industry tag for matching
    | "web3"
    | "defi"
    | "exchange"
    | "fintech"
    | "payments"
    | "nft"
    | "ai"
    | "saas"
    | "enterprise"
    | "gaming"
    | "igaming"
    | "metaverse"
    | "other";
  topics: string[];            // fine-grained topic tags (matches page keywords)
  region?: "mea" | "apac" | "europe" | "americas" | "africa" | "global";
  outcome?: string;            // short factual result, used inline
  rating?: 5 | 4.9 | 4.8;      // default 5
  source: "client-real" | "client-video" | "authored";  // "authored" for written-per-page archetypes
  datePublished?: string;      // YYYY-MM
  avatarToken?: string;        // optional media pool key; falls back to initials
}

// ---------------------------------------------------------------------------
// Real testimonials (from docs/CONTENT.md §Testimonials + case studies)
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    id: "cashaa-kumar",
    quote:
      "Corum8 ran the narrative, the media, and the community push around our token event. The execution was clean, the relationships with outlets were already in place, and the team moved at the pace we needed. We raised what we set out to raise, and the coverage has kept working for us months later.",
    author: "Kumar Gaurav",
    role: "Founder & CEO",
    company: "Cashaa",
    location: "London, UK",
    industry: "fintech",
    topics: ["pr", "token-launch", "community", "influencer-marketing", "exchange-listing"],
    region: "europe",
    outcome: "$32M raised",
    rating: 5,
    source: "client-real",
    datePublished: "2025-08",
  },
  {
    id: "salamantex-rene",
    quote:
      "Professional, direct, and dependable. Timelines held, output was solid, and the communication stayed clear even when the scope moved. That combination is rare in this market — we've seen enough partners to know.",
    author: "Rene Pomassl",
    role: "Founder",
    company: "Salamantex",
    location: "Vienna, Austria",
    industry: "payments",
    topics: ["pr", "branding", "payment", "content"],
    region: "europe",
    rating: 5,
    source: "client-real",
    datePublished: "2025-06",
  },
  {
    id: "cobox-adaa",
    quote:
      "The consistency is what sets them apart. Our community didn't just grow — it got stronger. Engagement quality is up, moderation is tight, and the content cadence never slips. That steady hand matters more than anyone expects before they've lived through a launch.",
    author: "Adaa",
    role: "Head of Growth",
    company: "Cobox",
    location: "Dubai, UAE",
    industry: "metaverse",
    topics: ["community", "social-media", "content", "influencer-marketing"],
    region: "mea",
    rating: 5,
    source: "client-real",
    datePublished: "2025-09",
  },
  {
    id: "fanadise-founder",
    quote:
      "We needed a partner who could run the full stack — campaign, narrative, community, and the listing push — without us translating between three separate agencies. Corum8 was that partner. The raise closed on target and the community carried the momentum.",
    author: "Fanadise leadership",
    role: "Founding team",
    company: "Fanadise",
    location: "Global",
    industry: "web3",
    topics: ["token-launch", "pr", "influencer-marketing", "community", "performance-marketing"],
    region: "global",
    outcome: "$5M raised",
    rating: 5,
    source: "client-real",
    datePublished: "2025-07",
  },
  {
    id: "ubuntu-tribe-team",
    quote:
      "Corum8 put us in front of the right audiences at Token2049 and kept the global coverage consistent in the months after. The community shape we came out of that run with is what's driven everything since.",
    author: "Ubuntu Tribe team",
    role: "Growth & partnerships",
    company: "Ubuntu Tribe",
    location: "Global / Africa",
    industry: "web3",
    topics: ["pr", "events", "community", "influencer-marketing"],
    region: "global",
    rating: 5,
    source: "client-real",
    datePublished: "2025-10",
  },
  {
    id: "metarix-founder",
    quote:
      "Full-launch work that held together end-to-end — influencers, press, community, and the funnels underneath. We closed the round, the audience we built is still active, and the PR engine didn't vanish the day the token went live.",
    author: "Metarix founders",
    role: "Founding team",
    company: "Metarix",
    location: "Global",
    industry: "metaverse",
    topics: ["token-launch", "influencer-marketing", "pr", "community"],
    region: "global",
    outcome: "$780K raised",
    rating: 5,
    source: "client-real",
    datePublished: "2025-05",
  },

  // ------------------------------------------------------------------
  // Authored testimonials (per CLAUDE.md §4.3) — used to fill matching
  // gaps until real client content is cleared for publication.
  // Names, companies, and outcomes invented; register in _authored-companies.
  // ------------------------------------------------------------------
  {
    id: "meridian-naomi",
    quote:
      "We came in with a white-label POC that was buckling around 40K TPS. The Corum8 team rebuilt our matching layer in Rust, wired seven more market makers into the book, and put us through weeks of adversarial load tests before go-live. We closed Series A with a clean technical due-diligence file — something our previous stack would not have survived.",
    author: "Naomi Loh",
    role: "CTO",
    company: "Meridian Exchange",
    location: "Singapore",
    industry: "exchange",
    topics: ["exchange", "matching-engine", "token-launch", "liquidity"],
    region: "apac",
    outcome: "180K+ TPS in stress tests",
    rating: 5,
    source: "authored",
    datePublished: "2026-02",
  },
  {
    id: "halcyon-pierre",
    quote:
      "Perpetuals without a well-engineered liquidation engine are a lawsuit waiting to happen. Corum8 rebuilt ours around a socialized-loss model with hard ADL thresholds, then put it through eight weeks of adversarial simulation before anyone saw real flow. We launched into MiCA-regulated markets and haven't had a cascade event in the first quarter of live trading.",
    author: "Pierre Vandermeer",
    role: "Head of Risk",
    company: "Halcyon Markets",
    location: "Paris, France",
    industry: "exchange",
    topics: ["exchange", "derivatives", "risk", "compliance", "liquidation"],
    region: "europe",
    outcome: "Zero cascade events Q1",
    rating: 5,
    source: "authored",
    datePublished: "2026-01",
  },
  {
    id: "kasbah-fatima",
    quote:
      "VARA's rulebook on custody and audit trails is specific, and most vendors treat it as a checklist. Corum8 designed the compliance pipeline around explicit state machines that VARA's supervisors could actually inspect. We passed pre-licensing review on the first pass with zero major findings — the team knew what a regulator wanted to see before we did.",
    author: "Fatima Al-Mansouri",
    role: "Chief Compliance Officer",
    company: "Kasbah Trade",
    location: "Dubai, UAE",
    industry: "exchange",
    topics: ["exchange", "compliance", "custody", "vara", "mena"],
    region: "mea",
    outcome: "Zero VARA findings on first pass",
    rating: 5,
    source: "authored",
    datePublished: "2026-02",
  },
  {
    id: "aurelia-jon",
    quote:
      "Moving institutional OTC flow to an on-book venue is a trust problem before it's a tech problem. Corum8 built us a matched-principal venue with FIX primary and reporting that drops into our counterparties' existing compliance workflows without translation. Four quarters in and about 40 percent of our flow now clears on-book — the rest follows as the audit confidence builds.",
    author: "Jonathan Kessel",
    role: "Managing Director",
    company: "Aurelia Capital",
    location: "New York, USA",
    industry: "exchange",
    topics: ["exchange", "otc", "institutional", "fix-api", "compliance"],
    region: "americas",
    outcome: "~40% OTC flow on-book",
    rating: 5,
    source: "authored",
    datePublished: "2026-03",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getTestimonial(id: string): Testimonial | undefined {
  return testimonials.find((t) => t.id === id);
}

// Pick N testimonials best matching page topic/industry/region.
// Used by pages that don't hand-pick IDs.
export function pickTestimonials(opts: {
  topics?: string[];
  industry?: Testimonial["industry"];
  region?: Testimonial["region"];
  limit?: number;
}): Testimonial[] {
  const { topics = [], industry, region, limit = 3 } = opts;
  const scored = testimonials.map((t) => {
    let score = 0;
    for (const topic of topics) if (t.topics.includes(topic)) score += 3;
    if (industry && t.industry === industry) score += 2;
    if (region && t.region === region) score += 1;
    return { t, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((x) => x.t);
}
