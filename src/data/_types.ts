// Corum8 PageData type system.
// Every page in /src/pages/ that uses a protocol-compliant layout passes a PageData
// object to that layout. This file is the contract.
//
// Runtime validation happens in scripts/validate-pages.ts — it imports all page
// modules and asserts the required fields exist before the Astro build runs.

// ============================================================================
// Page template types
// ============================================================================

export type PageTemplate =
  | "Homepage"
  | "ServicePillar"
  | "ServiceCluster"
  | "IndustryVertical"
  | "IndustryCluster"
  | "UseCase"
  | "CaseStudy"
  | "About"
  | "Portfolio"
  | "BlogPost"
  | "Comparison"
  | "CostGuide"
  | "Location"
  | "Tool"
  | "Contact"
  | "Generic";

// Word-count FLOORS per template. Enforced by validator as a hard minimum.
// Calibrated 2026-04-18: the new normal is 50–70% of the ~5,500-word reference
// page. If content can say what it needs to say in 2,300 words, that's fine.
// If it needs 4,000, that's fine too. Keep filler out either way.
export const WORD_MIN: Record<PageTemplate, number> = {
  Homepage: 1800,
  ServicePillar: 2800,
  ServiceCluster: 2300,
  IndustryVertical: 2400,
  IndustryCluster: 2000,
  UseCase: 1600,
  CaseStudy: 1200,
  About: 900,
  Portfolio: 700,
  BlogPost: 1000,
  Comparison: 2200,
  CostGuide: 2900,
  Location: 1600,
  Tool: 900,
  Contact: 450,
  Generic: 800,
};

// ============================================================================
// Structured content units
// ============================================================================

export interface MetaTags {
  title: string;           // 50–60 chars
  description: string;     // 140–160 chars
  canonical?: string;
  ogImage?: string;        // media token or absolute path
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  noindex?: boolean;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface HeroData {
  eyebrow?: string;
  /**
   * Short, impactful title (1 line, ~6-10 words). Renders at hero-size.
   * Keep it crisp — elaborate in `subtitle`, not here.
   */
  headline: string;
  /**
   * Optional second line under the headline, smaller typography, carries the
   * elaboration / value proposition. Replaces the old verbose headline pattern.
   */
  subtitle?: string;
  /** Short supporting paragraph below the title block. Optional. */
  sub?: string;
  mediaToken?: string;      // key into src/data/media.ts
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: "default" | "video" | "split" | "minimal";
}

export interface FAQ {
  q: string;
  a: string;                // 75–125 words, opens with direct answer
}

export interface TestimonialRef {
  id: string;               // id in src/data/testimonials.ts
}

export interface UseCase {
  company: string;          // invented name; must be unique across site
  stage?: string;           // "pre-seed", "Series A", "post-ICO", etc.
  region?: string;
  situation: string;        // 80–140 word paragraph narrative
  /** Primary outcome — usually the commercial win ("$32M raised", "Series A closed") */
  outcomeNumber?: string;
  /** Secondary outcome — usually the technical proof underneath the win */
  outcomeSecondary?: string;
}

export interface StatItem {
  value: string;            // "1,100+"
  label: string;            // "Projects delivered"
}

export interface HowToStep {
  name: string;
  text: string;
}

// ============================================================================
// Body section union (ordered content blocks)
// ============================================================================

/**
 * Sidebar enquiry card — rendered in the right-side empty space of a prose
 * section (same slot as `pullQuote` or `mediaToken`, mutually exclusive).
 * Small form + provocative hook + avatar of a Corum8 person who'd take the call.
 */
export interface EnquirySidebar {
  hook: string;               // tiny eyebrow label, provocative
  heading: string;             // 1-line direct challenge to the reader
  body: string;                // 20–40 words, can contain <em>
  buttonLabel?: string;
  href?: string;               // defaults to /contact
  avatarUrl?: string;
  avatarName?: string;
  avatarRole?: string;
}

export type BodySection =
  | { type: "Prose"; heading?: string; body: string | string[]; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "DirectAnswer"; body: string }
  | { type: "Definition"; heading: string; body: string; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "DeepBreakdown"; heading: string; body: string; subsections?: Array<{ heading: string; body: string }>; enquiry?: EnquirySidebar }
  | { type: "SignalsYouNeedThis"; heading?: string; signals: string[]; enquiry?: EnquirySidebar }
  | { type: "DecisionFactors"; heading?: string; body: string; factors?: Array<{ name: string; body: string }> }
  | { type: "CommonPitfalls"; heading?: string; pitfalls: Array<{ name: string; body: string }> }
  | { type: "StackNotes"; heading?: string; body: string; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "HowWeApproach"; heading?: string; body: string; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "ProcessTimeline"; heading?: string; steps: HowToStep[] }  // optional — only when truly useful
  | { type: "HowTo"; heading: string; steps: HowToStep[] }
  | { type: "UseCases"; heading?: string; items: UseCase[] }
  | { type: "OutcomesDriven"; heading?: string; body: string; stats?: StatItem[]; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "StatsBar"; stats: StatItem[] }
  | { type: "WhyCorum8"; heading?: string; body: string; mediaToken?: string; mediaSide?: "left" | "right"; pullQuote?: string; pullAttrib?: string; enquiry?: EnquirySidebar }
  | { type: "ComparisonTable"; heading?: string; columns: string[]; rows: string[][] }
  | { type: "CostBreakdown"; heading?: string; tiers: Array<{ name: string; scope: string; drivers: string[] }> }
  | { type: "LocalContext"; heading?: string; body: string; regulators?: string[] }
  | { type: "ExchangeMockup"; heading?: string; caption?: string; pair?: string; last?: string; change?: string }
  | { type: "InlineEnquiry"; heading: string; body: string; hook: string; buttonLabel?: string; href?: string; avatarUrl?: string; avatarName?: string; avatarRole?: string }
  | { type: "Cta"; heading: string; sub?: string; buttonLabel: string; href: string };

// ============================================================================
// Schema markup
// ============================================================================

export type SchemaType =
  | "Organization"
  | "WebSite"
  | "LocalBusiness"
  | "Service"
  | "FAQPage"
  | "BreadcrumbList"
  | "HowTo"
  | "Article"
  | "Person"
  | "WebApplication"
  | "Review";

// ============================================================================
// Top-level PageData
// ============================================================================

export interface DiscoverLink {
  label: string;
  href: string;
  active?: boolean;  // marks the current page in the nav
}

export interface PageData {
  // Identity
  slug: string;                  // "/services/development/exchange"
  template: PageTemplate;
  lastUpdated: string;           // "YYYY-MM-DD"

  // Meta
  meta: MetaTags;

  // Navigation
  breadcrumbs: Breadcrumb[];

  // Content
  hero: HeroData;
  directAnswer: string;          // 40–60 words, shown at top of <main>
  body: BodySection[];           // ordered section list

  // Page-bottom universal blocks (design always present, content per-page)
  testimonials: TestimonialRef[];  // exactly 3 (except tool pages which may skip)
  testimonialsHeading?: string;    // optional override — defaults to "What our clients say"
  faqs: FAQ[];                     // 8, or 10 for CostGuide
  faqsHeading?: { light: string; bold: string; subtitle?: string };  // optional override
  discoverMore: DiscoverLink[];    // 5–7 related sibling pages for cross-linking
  discoverHeading?: string;        // optional — defaults to "Discover more"

  // Final CTA (design is the Corum8 FinalCta panel; copy is per-page)
  finalCta?: {
    light: string;                 // first line of the headline
    bold: string;                  // second line, italic/bolder emphasis
    subtitle?: string;
    buttonLabel?: string;
    buttonHref?: string;
  };

  // Schema
  schema: SchemaType[];            // required types for this page type

  // Keyword tracking (for later SEO audits)
  primaryKeyword: string;
  secondaryKeywords?: string[];
  searchIntent: "commercial" | "informational" | "comparison" | "navigational";
}

// ============================================================================
// Validation helpers (shape checks used by scripts/validate-pages.ts)
// ============================================================================

export const REQUIRED_SCHEMAS: Record<PageTemplate, SchemaType[]> = {
  Homepage: ["Organization", "WebSite", "LocalBusiness"],
  ServicePillar: ["Service", "FAQPage", "BreadcrumbList"],
  ServiceCluster: ["Service", "FAQPage", "BreadcrumbList"],
  IndustryVertical: ["Service", "FAQPage", "BreadcrumbList"],
  IndustryCluster: ["Service", "FAQPage", "BreadcrumbList"],
  UseCase: ["Article", "FAQPage", "BreadcrumbList"],
  CaseStudy: ["Article", "FAQPage", "BreadcrumbList"],
  About: ["Organization", "BreadcrumbList"],
  Portfolio: ["BreadcrumbList"],
  BlogPost: ["Article", "FAQPage", "BreadcrumbList", "Person"],
  Comparison: ["Article", "FAQPage", "BreadcrumbList"],
  CostGuide: ["Article", "FAQPage", "HowTo", "BreadcrumbList"],
  Location: ["LocalBusiness", "FAQPage", "BreadcrumbList"],
  Tool: ["WebApplication", "BreadcrumbList"],
  Contact: ["Organization", "BreadcrumbList"],
  Generic: ["BreadcrumbList"],
};

export const REQUIRED_FAQ_COUNT: Partial<Record<PageTemplate, number>> = {
  CostGuide: 10,
  // everything else: 8 (enforced by default in validator)
};

// Phrases that must never appear in body content. Enforced by validator.
// Keep in sync with CLAUDE.md §4.5.
export const FORBIDDEN_PHRASES: string[] = [
  "in today's fast-paced world",
  "in the ever-evolving landscape",
  "cutting-edge",
  "best-in-class",
  "world-class",
  "seamlessly",
  "unlock the power of",
  "game-changer",
  "revolutionize",
  "revolutionary",
  "next-generation",
  "synergy",
  "state-of-the-art",
  "paradigm shift",
  "holistic",
  "empower your business",
  "take your business to the next level",
  "navigate the complexities",
  "at the forefront of",
  "elevate your",
  "unparalleled",
  "dive deep into",
  "transformative",
  "thought leader",
  "moving the needle",
  "boil the ocean",
  "low-hanging fruit",
  "circle back",
  "table stakes",
];

// Commitment phrases the validator flags if present outside hedged contexts.
// CLAUDE.md §2.1 forbids timelines and aggressive pricing.
export const FORBIDDEN_COMMITMENT_PATTERNS: RegExp[] = [
  /\b(delivered|ships?|launches?|completed?)\s+in\s+\d+\s+(day|week|month)s?\b/i,
  /\btakes?\s+(only|just)?\s*\d+\s+(day|week|month)s?\b/i,
  /\bstarting\s+at\s+\$\s?\d/i,
  /\bonly\s+\$\s?\d/i,
  /\bguaranteed\s+ROI\b/i,
  /\bguaranteed\s+results\b/i,
  /\bmoney[- ]back\s+guarantee\b/i,
];
