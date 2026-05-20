import { siteConfig } from '@/data/site';

/**
 * Schema.org JSON-LD blocks for SEO and Knowledge Graph eligibility.
 *
 * - <WebSiteSchema /> goes on every page (renders the site name and URL
 *   so Google can show "KOSOVAN" as the site title in search results).
 * - <PersonSchema /> goes on the homepage and any page where Valeriy is
 *   the primary subject (powers the Knowledge Panel for his name).
 *
 * If/when LinkedIn, X/Twitter, or other professional profile URLs become
 * available, add them to the sameAs array below — that's how Google
 * connects the dots between the website and external profiles.
 */

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: 'KOSOVAN FTE',
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-GB',
    publisher: {
      '@type': 'Person',
      name: siteConfig.fullName,
    },
  };
  return (
    <script
      type="application/ld+json"
      // The schema is static, so dangerouslySetInnerHTML is safe and required
      // (next.js otherwise escapes the JSON, breaking the schema).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.fullName,
    givenName: 'Valeriy',
    familyName: 'Kosovan',
    jobTitle: 'Strategic CFO and Finance Transformation Leader',
    description:
      'International finance executive with 20+ years of experience across corporate finance, SaaS, logistics, ERP implementation and international tax structuring.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/valeriy-kosovan-executive-dark.jpg`,
    email: `mailto:${siteConfig.contactEmail}`,
    knowsAbout: [
      'Corporate Finance',
      'Financial Transformation',
      'ERP Implementation',
      'Odoo Accounting',
      'SaaS Finance',
      'International Tax Structuring',
      'Treasury Management',
      'Strategic Finance',
      'Investor Readiness',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'KOSOVAN FTE',
      url: siteConfig.url,
    },
    // Add LinkedIn / X / other public profiles here as they become available:
    // sameAs: ['https://www.linkedin.com/in/...', 'https://x.com/...'],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
