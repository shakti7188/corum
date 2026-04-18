export const brand = {
  name: 'Corum8',
  shortMark: 'C8',
  email: 'info@corum8.com',
  copyrightYear: 2019,
};

export const ctaLink = {
  href: '/book-a-strategy-call',
  label: 'Book a Strategy Call',
  shortLabel: 'Book a Strategy Call',
};

export const navLinks: Array<{
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
}> = [
  { label: 'Home', href: '/' },
  {
    label: 'Marketing',
    children: [
      { label: 'Performance Marketing', href: '/services/marketing/performance-marketing' },
      { label: 'SEO, AEO & GEO', href: '/services/marketing/seo' },
      { label: 'Social Media Management', href: '/services/marketing/social-media' },
      { label: 'B2B & Lead Generation', href: '/services/marketing/b2b-marketing' },
      { label: 'Crypto PR & Media', href: '/services/marketing/pr' },
      { label: 'Branding & Design Studio', href: '/services/marketing/branding' },
      { label: 'Content Marketing', href: '/services/marketing/content' },
      { label: 'Influencer & KOL Marketing', href: '/services/marketing/influencer-marketing' },
      { label: 'Community Building', href: '/services/marketing/community' },
      { label: 'Exchange Listings', href: '/services/marketing/listing' },
    ],
  },
  {
    label: 'Development',
    children: [
      { label: 'CEX & DEX Exchanges', href: '/services/development/exchange' },
      { label: 'RWA Marketplace', href: '/services/development/rwa' },
      { label: 'Wallet Infrastructure', href: '/services/development/wallet' },
      { label: 'DeFi & Staking Platforms', href: '/services/development/defi' },
      { label: 'AI & Automation', href: '/services/development/ai' },
      { label: 'Mobile & Web Apps', href: '/services/development/mobile-web' },
      { label: 'Token & Stablecoin', href: '/services/development/token' },
      { label: 'Blockchain L0/L1/L2', href: '/services/development/blockchain-layer' },
      { label: 'Payment Solutions', href: '/services/development/payment' },
      { label: 'Trading Bots & Tools', href: '/services/development/trading' },
      { label: 'NFT Marketplace', href: '/services/development/nft' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Web3 & Crypto', href: '/industries/web3' },
      { label: 'Startups', href: '/industries/startups' },
      { label: 'SaaS', href: '/industries/saas' },
      { label: 'Fintech', href: '/industries/fintech' },
      { label: 'AI', href: '/industries/ai' },
      { label: 'Enterprise', href: '/industries/enterprise' },
    ]
  },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

export const socialLinks: Array<{ label: string; href: string }> = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/corum8' },
  { label: 'Telegram', href: 'https://t.me/corum8' },
  { label: 'Instagram', href: 'https://instagram.com/corum8' },
  { label: 'X/Twitter', href: 'https://x.com/corum8' },
];

export const sectorLinks: Array<{ label: string; href: string }> = [
  { label: 'Web3 & Crypto', href: '/industries/web3' },
  { label: 'Tech Startups', href: '/industries/startups' },
  { label: 'SaaS', href: '/industries/saas' },
  { label: 'Fintech', href: '/industries/fintech' },
  { label: 'AI', href: '/industries/ai' },
  { label: 'Enterprise', href: '/industries/enterprise' },
];

export const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Contact', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
