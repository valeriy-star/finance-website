import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactCTA } from '@/components/ContactCTA';
import { articles, categories } from '@/data/articles';

export const metadata: Metadata = {
  title: 'Professional Articles',
  description:
    'Practical CFO insights on finance transformation, SaaS valuation, ERP implementation and international business structures.',
};

export default function ArticlesIndexPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <Container className="pt-16 sm:pt-24 pb-12">
          <p className="eyebrow">Professional articles</p>
          <h1 className="mt-4 max-w-4xl font-display font-semibold tracking-tightest text-[2.25rem] sm:text-5xl lg:text-[3.4rem] leading-[1.06] text-brand-ink">
            Practical CFO insights on finance, ERP, SaaS and international structuring.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate">
            These articles reflect practical experience from building and transforming finance
            functions inside complex, fast-growing organisations: accounting systems, ERP migration,
            SaaS economics, valuation logic, international structures, banking, tax and operational
            finance.
          </p>
        </Container>
      </section>

      {/* Category strip */}
      <section className="py-12 border-b border-slate-100">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 hover:border-brand/40 transition-colors"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-accent">
                  Category
                </p>
                <p className="mt-1 font-semibold text-brand-ink">{c.name}</p>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Latest articles"
            title="Reading list."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}/`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand/40 transition-colors flex flex-col"
              >
                <span className="inline-flex items-center self-start rounded-full bg-brand-mist text-brand text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1">
                  {a.category}
                </span>
                <h3 className="mt-4 font-display text-xl text-brand-ink leading-snug tracking-tight group-hover:text-brand-accent transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-brand-slate leading-relaxed flex-1">
                  {a.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between text-xs text-brand-slate">
                  <span>{a.readingTime}</span>
                  <span className="inline-flex items-center gap-1 text-brand font-medium">
                    Read article
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
