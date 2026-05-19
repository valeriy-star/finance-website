import Link from 'next/link';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { articles } from '@/data/articles';

export function FeaturedArticles() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <SectionHeading
            eyebrow="Professional articles"
            title="Practical CFO insights."
            intro="Reflections from inside finance transformation, ERP implementation, SaaS valuation and international structuring."
          />
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-accent"
          >
            All articles
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
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
              <p className="mt-3 text-sm text-brand-slate leading-relaxed line-clamp-4">
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
  );
}
