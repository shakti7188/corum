// JSON-LD schema emitters.
// Every page renders its schema block by calling one of these helpers.
// Keep emission logic OUT of page templates — so schema changes (new types,
// fixes to existing ones) happen once, here, and propagate to every page.
//
// All helpers return a JS object. The layout wraps the array of returned
// objects in a single <script type="application/ld+json"> tag.

import type { Breadcrumb, FAQ, HowToStep, PageData, Testimonial } from "./_types";
import { getTestimonial } from "./testimonials";

// ---------------------------------------------------------------------------
// Site-wide constants used by emitters
// ---------------------------------------------------------------------------

export const SITE = {
  origin: "https://corum8.com",
  name: "Corum8",
  legalName: "Corum8",
  logo: "https://corum8.com/assets/logo/logo-dark.png",
  email: "info@corum8.com",
  phone: "+971 52 343 8098",
  founded: "2014",
  social: [
    "https://x.com/corum8",
    "https://linkedin.com/company/corum8",
    "https://t.me/corum8",
    "https://instagram.com/corum8",
  ],
  addresses: [
    {
      type: "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
      areaServed: "Middle East",
    },
    {
      type: "PostalAddress",
      addressLocality: "Wilmington",
      addressRegion: "DE",
      addressCountry: "US",
      areaServed: "North America",
    },
    {
      type: "PostalAddress",
      addressLocality: "India",
      addressCountry: "IN",
      areaServed: "APAC",
    },
  ],
};

// ---------------------------------------------------------------------------
// Emitters
// ---------------------------------------------------------------------------

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.origin,
    logo: SITE.logo,
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: SITE.social,
    address: SITE.addresses.map((a) => ({
      "@type": "PostalAddress",
      addressLocality: a.addressLocality,
      addressRegion: (a as any).addressRegion,
      addressCountry: a.addressCountry,
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.origin}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema(opts?: { city?: string; country?: string; areaServed?: string }) {
  const { city = "Dubai", country = "AE", areaServed = "Global" } = opts ?? {};
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.origin,
    image: SITE.logo,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressCountry: country,
    },
    areaServed,
  };
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href.startsWith("http") ? c.href : `${SITE.origin}${c.href}`,
    })),
  };
}

export function serviceSchema(page: PageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.hero.headline,
    name: page.meta.title.replace(/\s*\|\s*Corum8.*/i, "").trim(),
    description: page.meta.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.origin,
    },
    areaServed: "Global",
    url: `${SITE.origin}${page.slug}`,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function howToSchema(name: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function articleSchema(page: PageData, author = SITE.name) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.hero.headline,
    description: page.meta.description,
    datePublished: page.lastUpdated,
    dateModified: page.lastUpdated,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    mainEntityOfPage: `${SITE.origin}${page.slug}`,
  };
}

export function personSchema(opts: { name: string; jobTitle?: string; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    worksFor: { "@type": "Organization", name: SITE.name },
    url: opts.url,
  };
}

export function reviewSchema(testimonial: Testimonial, aboutName = SITE.name) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: testimonial.quote,
    author: {
      "@type": "Person",
      name: testimonial.author,
      jobTitle: testimonial.role,
      worksFor: { "@type": "Organization", name: testimonial.company },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating ?? 5,
      bestRating: 5,
    },
    itemReviewed: { "@type": "Organization", name: aboutName },
  };
}

export function webApplicationSchema(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

// ---------------------------------------------------------------------------
// Composer — given a PageData, return the full JSON-LD array for the page.
// ---------------------------------------------------------------------------

export function schemasForPage(page: PageData): object[] {
  const out: object[] = [];

  for (const t of page.schema) {
    switch (t) {
      case "Organization":
        out.push(orgSchema());
        break;
      case "WebSite":
        out.push(websiteSchema());
        break;
      case "LocalBusiness":
        out.push(localBusinessSchema());
        break;
      case "Service":
        out.push(serviceSchema(page));
        break;
      case "FAQPage":
        if (page.faqs.length > 0) out.push(faqSchema(page.faqs));
        break;
      case "BreadcrumbList":
        out.push(breadcrumbSchema(page.breadcrumbs));
        break;
      case "HowTo": {
        // Pull the first HowTo body section if present
        const ht = page.body.find(
          (b): b is Extract<typeof b, { type: "HowTo" }> => b.type === "HowTo",
        );
        if (ht) out.push(howToSchema(ht.heading, ht.steps));
        break;
      }
      case "Article":
        out.push(articleSchema(page));
        break;
      case "WebApplication":
        out.push(
          webApplicationSchema({
            name: page.hero.headline,
            description: page.meta.description,
            url: `${SITE.origin}${page.slug}`,
          }),
        );
        break;
      case "Review":
        // Emitted inline by TestimonialsBlock, per-testimonial.
        break;
      case "Person":
        // Emitted by blog pages; skip here unless the page declares an author.
        break;
    }
  }

  // Always emit a Review schema per testimonial for rich-result eligibility.
  for (const ref of page.testimonials) {
    const t = getTestimonial(ref.id);
    if (t) out.push(reviewSchema(t));
  }

  return out;
}
