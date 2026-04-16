import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const filesToProcess = ['index.astro']; // Expand this later when 260 pages are added.

const replacements = [
  // Typography and Headings
  { find: /Creative Digital Agency/gi, replace: "Global Web3 Marketing, PR & Development Agency" },
  { find: /Celebrating 12 years/gi, replace: "Trusted by 1,100+ Web3 Projects Worldwide" },
  { find: /Celebrating 13 years : 2013 - 2026/gi, replace: "Trusted by 1,100+ Web3 Projects Worldwide" },
  { find: /Start your project/gi, replace: "Book a Strategy Call" },
  { find: /Hire us/gi, replace: "Book a Strategy Call" },

  // Emails and Contacts
  { find: /hello@kota\.co\.uk/gi, replace: "info@corum8.com" },
  { find: /newbiz@kota\.co\.uk/gi, replace: "info@corum8.com" },
  { find: /careers@kota\.co\.uk/gi, replace: "careers@corum8.com" },
  { find: /\+44\(0\)20 3951 0562/g, replace: "+971 52 343 8098" },

  // Addresses
  { find: /1-5 Clerkenwell Rd, London EC1M 5PA/gi, replace: "Dubai, UAE (HQ)" },
  { find: /477 Madison Ave, Midtown Manhattan, 6th Floor, NY 10022/gi, replace: "16192 Coastal Highway, Lewes, Delaware, 19958" },
  { find: /London \&amp; NYC/gi, replace: "Dubai & USA" },
  { find: /London \& NYC/gi, replace: "Dubai & USA" },

  // Social Links
  { find: /linkedin\.com\\*\/company\\*\/kota-creative/gi, replace: "linkedin.com/company/corum8" },
  { find: /facebook\.com\\*\/kotacreative/gi, replace: "t.me/corum8" },
  { find: /instagram\.com\\*\/kotalondon/gi, replace: "instagram.com/corum8" },
  { find: /bsky\.app\\*\/profile\\*\/kota-creative/gi, replace: "x.com/corum8" },
  { find: /linkedin\.com\/company\/kota-creative/gi, replace: "linkedin.com/company/corum8" },
  { find: /facebook\.com\/kotacreative/gi, replace: "t.me/corum8" },
  { find: /instagram\.com\/kotalondon/gi, replace: "instagram.com/corum8" },

  // Sector replacements inside the mega menu options specifically so they sync with the real copy
  { find: /Agencies(?=([^"]*"[^"]*")*[^"]*$)/gi, replace: "Web3 & Crypto" },
  { find: /SaaS and Tech/gi, replace: "Startups" },
  { find: /B2B Transformation/gi, replace: "SaaS" },
  { find: /Healthcare(?=([^"]*"[^"]*")*[^"]*$)/gi, replace: "Fintech" },
  { find: /Media \&amp; Entertainment/gi, replace: "AI" },
  { find: /Media \& Entertainment/gi, replace: "AI" },
  { find: /Retail(?=([^"]*"[^"]*")*[^"]*$)/gi, replace: "Enterprise" },

  // Copyright and Brand
  { find: /© KOTA 2026/gi, replace: "© 2026 Corum8. All rights reserved." },
];

for (const file of filesToProcess) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const { find, replace } of replacements) {
    content = content.replace(find, replace);
  }

  // Handle generic KOTA brand name replacements carefully (avoid URLs and Classes)
  // We strictly look for KOTA surrounded by spaces or brackets or standard punctuation
  content = content.replace(/(?<!\w)KOTA(?!\w)/g, 'Corum8');
  content = content.replace(/>Kota</g, '>Corum8<');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Injected Corum8 replacements into ${file}`);
}
