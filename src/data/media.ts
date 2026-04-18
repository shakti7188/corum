// Shared media pool — every page references these tokens.
// The pool is intentionally small (< 50 total assets). The same hero/bento/ambient
// media is reused across dozens of pages to keep total site weight low.
//
// Rule: a page's data file MUST reference media by token (e.g., "hero.dev"),
// never by raw path. If an image is missing, add it here and add the file to
// /public/assets/ — do not inline a path in a page file.

export interface MediaAsset {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  kind?: "image" | "video";
  /**
   * Shared/repeated decorative imagery (the ambient pool). When true, the
   * rendered <img> gets `alt=""` + `role="presentation"` + `aria-hidden="true"`
   * so that search engines and AI crawlers skip it. Avoids the same visual
   * asset bleeding SEO signal across dozens of pages.
   *
   * Use `false` (or omit) for unique content images (hero shots, client
   * logos, real case-study imagery) where the alt text is the meaning.
   */
  decorative?: boolean;
}

// ------------------------------------------------------------------
// IMAGE + VIDEO POOL
// ------------------------------------------------------------------

// Unsplash URL helper — all pool images hotlink from Unsplash for now. Stable,
// free, no licence issue, easy to swap to local files later. Size via `w` arg.
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;

export const media = {
  // Hero imagery — topic-specific, one per cluster family. These carry page
  // meaning so alt text is descriptive (NOT decorative).
  hero: {
    // Generic fallbacks (KOTA stock) — use when a topic-specific one isn't ready
    dev: {
      src: "/assets/kota/images/header-3.jpg",
      alt: "Dark terminal and code running during a Corum8 engineering sprint",
      w: 2400, h: 1200, kind: "image",
    },
    marketing: {
      src: "/assets/kota/images/bento1-1.jpg",
      alt: "Campaign creative surface — type, colour and composition notes in review",
      w: 2400, h: 1200, kind: "image",
    },
    industry: {
      src: "/assets/kota/images/bento2-1.jpg",
      alt: "Industry brief open on a working table",
      w: 2400, h: 1200, kind: "image",
    },
    location: {
      src: "/assets/kota/images/bento4-1.jpg",
      alt: "Geography-focused working session with regional notes pinned",
      w: 2400, h: 1200, kind: "image",
    },
    contact: {
      src: "/assets/kota/images/contact-bg-2560x1440.jpg",
      alt: "Corum8 contact surface — desk, light and a working session",
      w: 2560, h: 1440, kind: "image",
    },

    // --- Topic-specific heroes (Unsplash) ---
    exchange: {
      src: u("1611974789855-9c2a0a7236a3", 1400),
      alt: "Multi-monitor trading desk showing candles, order book and depth charts",
      w: 1400, h: 1050, kind: "image",
    },
    trading: {
      src: u("1633158829875-e5316a358c6f", 1400),
      alt: "Candlestick chart on a dark trading interface",
      w: 1400, h: 1050, kind: "image",
    },
    wallet: {
      src: u("1621761191319-c6fb62004040", 1400),
      alt: "Stacked cryptocurrency coins representing a multi-asset wallet",
      w: 1400, h: 1050, kind: "image",
    },
    defi: {
      src: u("1639152201720-5e536d254d81", 1400),
      alt: "Abstract network of connected nodes suggesting a DeFi liquidity graph",
      w: 1400, h: 1050, kind: "image",
    },
    nft: {
      src: u("1639762681485-074b7f938ba0", 1400),
      alt: "Glowing digital asset visualisation in a web3 style",
      w: 1400, h: 1050, kind: "image",
    },
    token: {
      src: u("1518546305927-5a555bb7020d", 1400),
      alt: "Gold-lit cryptocurrency tokens on a dark surface",
      w: 1400, h: 1050, kind: "image",
    },
    ai: {
      src: u("1620228885847-9eab2a1adddc", 1400),
      alt: "Abstract neural-network visualisation representing an AI system",
      w: 1400, h: 1050, kind: "image",
    },
    infrastructure: {
      src: u("1558494949-ef010cbdcc31", 1400),
      alt: "Rows of data-centre servers with blue status lights",
      w: 1400, h: 1050, kind: "image",
    },
    security: {
      src: u("1550751827-4bd374c3f58b", 1400),
      alt: "Cybersecurity lock overlaid on a dark code background",
      w: 1400, h: 1050, kind: "image",
    },
    charts: {
      src: u("1551288049-bebda4e38f71", 1400),
      alt: "Analytics dashboard with multiple live performance charts",
      w: 1400, h: 1050, kind: "image",
    },
    payments: {
      src: u("1614064641938-3bbee52942c7", 1400),
      alt: "Bitcoin alongside fiat charts on a trader's workstation",
      w: 1400, h: 1050, kind: "image",
    },
  },

  // Bento / layout imagery — composable blocks reused across many pages.
  // Marked decorative: crawlers skip, page-specific content carries the meaning.
  bento: {
    code:         { src: "/assets/kota/images/header-3.jpg", alt: "", kind: "image", decorative: true },
    architecture: { src: "/assets/kota/images/bento2-1.jpg", alt: "", kind: "image", decorative: true },
    dashboard:    { src: "/assets/kota/images/bento1-1.jpg", alt: "", kind: "image", decorative: true },
    event:        { src: "/assets/kota/images/bento4-1.jpg", alt: "", kind: "image", decorative: true },
  },

  // Topic-tagged Unsplash imagery for body side-images. Decorative (repeated
  // across pages) so alt="" + role=presentation is applied automatically.
  topic: {
    tradingScreen:  { src: u("1611974789855-9c2a0a7236a3", 800), alt: "", kind: "image", decorative: true },
    candleChart:    { src: u("1633158829875-e5316a358c6f", 800), alt: "", kind: "image", decorative: true },
    cryptoCoins:    { src: u("1621761191319-c6fb62004040", 800), alt: "", kind: "image", decorative: true },
    cryptoGold:     { src: u("1518546305927-5a555bb7020d", 800), alt: "", kind: "image", decorative: true },
    cryptoMobile:   { src: u("1518544801976-3e159e50e5bb", 800), alt: "", kind: "image", decorative: true },
    btcChart:       { src: u("1614064641938-3bbee52942c7", 800), alt: "", kind: "image", decorative: true },
    stockScreen:    { src: u("1516321318423-f06f85e504b3", 800), alt: "", kind: "image", decorative: true },
    blockchainAbstract: { src: u("1639762681485-074b7f938ba0", 800), alt: "", kind: "image", decorative: true },
    networkNodes:   { src: u("1639152201720-5e536d254d81", 800), alt: "", kind: "image", decorative: true },
    dataViz:        { src: u("1551288049-bebda4e38f71", 800), alt: "", kind: "image", decorative: true },
    serverRoom:     { src: u("1558494949-ef010cbdcc31", 800), alt: "", kind: "image", decorative: true },
    serverClose:    { src: u("1591696205602-2f950c417cb9", 800), alt: "", kind: "image", decorative: true },
    codeEditor:     { src: u("1555066931-4365d14bab8c", 800), alt: "", kind: "image", decorative: true },
    codeScreens:    { src: u("1498050108023-c5249f4df085", 800), alt: "", kind: "image", decorative: true },
    codeMonitor:    { src: u("1517694712202-14dd9538aa97", 800), alt: "", kind: "image", decorative: true },
    devWorking:     { src: u("1563986768494-4dee2763ff3f", 800), alt: "", kind: "image", decorative: true },
    teamMeeting:    { src: u("1600880292203-757bb62b4baf", 800), alt: "", kind: "image", decorative: true },
    teamCollab:     { src: u("1552664730-d307ca884978", 800), alt: "", kind: "image", decorative: true },
    teamWorking:    { src: u("1519389950473-47ba0277781c", 800), alt: "", kind: "image", decorative: true },
    modernOffice:   { src: u("1497366216548-37526070297c", 800), alt: "", kind: "image", decorative: true },
    security:       { src: u("1550751827-4bd374c3f58b", 800), alt: "", kind: "image", decorative: true },
    community:      { src: u("1589994965851-a8f479c573a9", 800), alt: "", kind: "image", decorative: true },
    event:          { src: u("1531482615713-2afd69097998", 800), alt: "", kind: "image", decorative: true },
    aiNeural:       { src: u("1620228885847-9eab2a1adddc", 800), alt: "", kind: "image", decorative: true },
    cryptoAbstract: { src: u("1624996752380-8ec242e0f85d", 800), alt: "", kind: "image", decorative: true },
  },

  // Video loops — ambient, decorative. Crawlers skip.
  video: {
    ambient:  { src: "/assets/video/bg2.mp4",                             alt: "", kind: "video", decorative: true },
    workReel: { src: "/assets/kota/videos/Company-Loop4-compressed-2.mp4", alt: "", kind: "video", decorative: true },
    featured: { src: "/assets/kota/videos/Featured2-Compressed.mp4",      alt: "", kind: "video", decorative: true },
    // Case-study videos are content, not decoration — keep descriptive alt.
    fanadise: { src: "/assets/video/fenadise.mp4",                         alt: "Fanadise case-study clip", kind: "video" },
    case:     { src: "/assets/kota/videos/dka-thumbnail-compressed.mp4",   alt: "Case-study thumbnail loop", kind: "video" },
  },

  // Process / approach imagery — used when a page warrants a timeline section.
  // All shared pool → decorative.
  process: {
    discover: { src: "/assets/kota/images/bento1-1.jpg", alt: "", kind: "image", decorative: true },
    position: { src: "/assets/kota/images/bento2-1.jpg", alt: "", kind: "image", decorative: true },
    activate: { src: "/assets/kota/images/bento4-1.jpg", alt: "", kind: "image", decorative: true },
    scale:    { src: "/assets/kota/images/header-3.jpg", alt: "", kind: "image", decorative: true },
  },

  // Studio / team imagery. Shared pool — decorative.
  team: {
    office:   { src: "/assets/kota/images/bento4-1.jpg", alt: "", kind: "image", decorative: true },
    strategy: { src: "/assets/kota/images/bento1-1.jpg", alt: "", kind: "image", decorative: true },
    collab:   { src: "/assets/kota/images/bento2-1.jpg", alt: "", kind: "image", decorative: true },
  },
} as const satisfies Record<string, Record<string, MediaAsset>>;

// ------------------------------------------------------------------
// LOGO / BRAND POOL (not tokenised — direct paths are fine)
// ------------------------------------------------------------------

export const brandMedia = {
  logo: {
    wordmark: "/assets/logo/logo-white.png",
    wordmarkDark: "/assets/logo/logo-dark.png",
    icon: "/assets/logo/icon-gold.png",
  },
  favicon: "/favicon.png",
  ogDefault: "/assets/logo/logo-dark.png", // fallback OG image
} as const;

// ------------------------------------------------------------------
// Resolver — used by components. Returns raw path + alt.
// ------------------------------------------------------------------

export function resolveMedia(token: string): MediaAsset | null {
  // token format: "hero.dev" / "video.ambient" / "bento.code"
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  // @ts-expect-error — dynamic lookup into the typed pool is safe at runtime.
  const group = media[parts[0]];
  if (!group) return null;
  // @ts-expect-error — same as above.
  const asset = group[parts[1]];
  return asset ?? null;
}
