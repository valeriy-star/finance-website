import Link from 'next/link';
import { Container } from './Container';
import { Logo } from './Logo';
import { siteConfig } from '@/data/site';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-ink text-white/85 mt-24">
      <Container className="py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo variant="light" />
          <p className="mt-6 text-sm leading-relaxed text-white/65 max-w-sm">
            Strategic CFO advisory and finance transformation for technology, SaaS,
            logistics and international businesses.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow eyebrow-light">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow eyebrow-light">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-white/85 hover:text-white"
              >
                {siteConfig.contactEmail}
              </a>
            </li>
            <li className="text-white/65">{siteConfig.url.replace('https://', '')}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/55">
          <p>© {year} Valeriy Kosovan. All rights reserved.</p>
          <p className="tracking-wide">KOSOVAN FTE — Financial Technology Expert</p>
        </Container>
      </div>
    </footer>
  );
}
