export const brand = {
  name: 'Corum8',
  shortMark: 'C8',
  email: 'info@corum8.com',
  copyrightYear: 2026,
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
  { label: 'Work', href: '/work' },
  { label: 'Agency', href: '/agency' },
  {
    label: 'Services',
    children: [
      { label: 'Web design & development', href: '/service/web-design-development' },
      { label: 'Branding', href: '/service/branding' },
      { label: 'Digital marketing', href: '/service/digital-marketing' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Culture', href: '/culture' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: Array<{ label: string; href: string }> = [
  { label: 'LinkedIn', href: 'https://linkedin.com/company/corum8' },
  { label: 'Telegram', href: 'https://t.me/corum8' },
  { label: 'Instagram', href: 'https://instagram.com/corum8' },
  { label: 'X/Twitter', href: 'https://x.com/corum8' },
];

export const sectorLinks: Array<{ label: string; href: string }> = [
  { label: 'Web3 & Crypto', href: '/web3-and-crypto' },
  { label: 'Startups', href: '/startups' },
  { label: 'SaaS', href: '/saas' },
  { label: 'Fintech', href: '/fintech' },
  { label: 'AI', href: '/ai' },
  { label: 'Enterprise', href: '/enterprise' },
];

export const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
