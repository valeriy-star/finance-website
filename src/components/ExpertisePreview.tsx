import Link from 'next/link';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const tiles = [
  {
    title: 'Accounting systems',
    body: 'Cloud accounting for simpler structures, full ERP platforms such as Odoo for complex international groups.',
  },
  {
    title: 'Metrics & OKRs',
    body: 'The numbers that answer the critical questions: is growth proportionate to cost, what is the real value of the project.',
  },
  {
    title: 'Cash-flow architecture',
    body: 'How money moves through the business, with treasury, banking and reconciliation logic designed to scale.',
  },
  {
    title: 'Payroll',
    body: 'Financial, legal and structural design for distributed teams and international compensation arrangements.',
  },
  {
    title: 'International presence',
    body: 'Cross-border structures across the UK, US, Ireland, Cyprus, China and Georgia, with banking and substance in mind.',
  },
  {
    title: 'Comprehensive upgrade',
    body: 'Whole-architecture finance transformation, when the business is ready to move beyond fragmented systems.',
    accent: true,
  },
];

export function ExpertisePreview() {
  return (
    <section className="py-20 lg:py-24 bg-brand-mist/50 border-y border-slate-100">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Core expertise"
            title="Where finance work creates measurable leverage."
          />
          <Link
            href="/expertise/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-accent"
          >
            See full expertise
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tiles.map((t) => (
            <div
              key={t.title}
              className={`group rounded-2xl border ${
                t.accent
                  ? 'bg-brand-accent text-white border-brand-accent'
                  : 'bg-white text-brand-ink border-slate-200 hover:border-brand/40'
              } p-6 transition-colors`}
            >
              <h3 className={`text-lg font-semibold ${t.accent ? 'text-white' : 'text-brand-ink'}`}>
                {t.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  t.accent ? 'text-white/85' : 'text-brand-slate'
                }`}
              >
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
