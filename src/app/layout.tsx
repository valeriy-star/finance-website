import type { Metadata } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { WebSiteSchema } from '@/components/StructuredData';
import { siteConfig } from '@/data/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Financial Technology Expert`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'CFO',
    'Finance Transformation',
    'ERP',
    'Odoo',
    'SaaS Finance',
    'International Tax Structuring',
    'Valeriy Kosovan',
    'KOSOVAN',
    'Finance Executive',
  ],
  authors: [{ name: 'Valeriy Kosovan' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    title: `${siteConfig.name} — Financial Technology Expert`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KOSOVAN — Financial Technology Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Financial Technology Expert`,
    description: siteConfig.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <WebSiteSchema />
      </head>
      <body className="font-sans antialiased bg-white text-brand-ink">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
