import Image from 'next/image';
import Link from 'next/link';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const bullets = [
  'Built financial planning and budgeting processes from zero, with operating cash-flow forecasting accuracy of approximately 7% annual deviation.',
  'Designed and implemented international corporate structures across the United Kingdom, United States, Ireland, Cyprus, China and Georgia.',
  'Led ERP-driven finance transformation, migrating a 15-entity, ~500-employee group from spreadsheets to Odoo Accounting.',
];

export function ExecutiveSummaryPreview() {
  return (
    <section className="py-20 lg:py-24 bg-brand-ink text-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-soft bg-brand">
              <Image
                src="/images/valeriy-kosovan-executive-dark.jpg"
                alt="Valeriy Kosovan, Financial Technology Expert"
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              variant="dark"
              eyebrow="Executive summary"
              title={
                <>
                  Valeriy Kosovan — a strategic CFO for technology-driven international businesses.
                </>
              }
              intro="An international finance executive with more than twenty years of experience across corporate finance, SaaS, logistics, ERP implementation, international tax structuring and operational finance. CFO expertise combined with hands-on execution."
            />
            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-white/85 leading-relaxed">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/executive-summary/"
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-ink px-5 py-3 text-sm font-medium hover:bg-brand-mist transition-colors"
              >
                Read the full profile
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-3 text-sm font-medium hover:border-white transition-colors"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
