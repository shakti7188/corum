export const brand = {
  name: 'Corum8',
  shortMark: 'C8',
  email: 'hello@corum8.com',
  copyrightYear: 2026,
};

export const ctaLink = {
  href: '/start-your-project',
  label: 'Start your project',
  shortLabel: 'Hire us',
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
  { label: 'LinkedIn', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Bluesky', href: '#' },
];

export const sectorLinks: Array<{ label: string; href: string }> = [
  { label: 'Agencies', href: '/agencies' },
  { label: 'SaaS and Tech', href: '/b2b-tech-software-saas' },
  { label: 'B2B Transformation', href: '/b2b-transformation' },
  { label: 'Healthcare', href: '/healthcare' },
  { label: 'Media & Entertainment', href: '/media-entertainment' },
  { label: 'Retail', href: '/retail' },
];

export const legalLinks: Array<{ label: string; href: string }> = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];
