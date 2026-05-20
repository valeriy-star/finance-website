import Link from 'next/link';
import { Container } from './Container';

export function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_55%,transparent_75%)] opacity-70"
      />
      <Container className="relative pt-16 sm:pt-24 lg:pt-28 pb-20 lg:pb-28">
        <p className="eyebrow rise">KOSOVAN · Financial Technology Expert</p>
        <h1 className="rise-2 mt-4 max-w-4xl font-display font-semibold tracking-tightest text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.04] text-brand-ink">
          Financial expertise for the{' '}
          <span className="relative inline-block">
            <span className="relative z-10">upgrade</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1.5 h-3 bg-brand-accent/85 -z-0 -skew-x-6"
            />
          </span>{' '}
          of your IT business.
        </h1>
        <p className="rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate">
          KOSOVAN helps technology, SaaS and logistics businesses move from fragmented finance processes
          to structured, automated and decision-ready financial systems — at CFO level, across multiple
          jurisdictions.
        </p>
        <div className="rise-4 mt-8 flex flex-wrap gap-3">
          <Link
            href="/expertise/"
            className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-3 text-sm font-medium hover:bg-brand-ink transition-colors"
          >
            Explore expertise
            <Arrow />
          </Link>
          <Link
            href="/executive-summary/"
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white text-brand-ink px-5 py-3 text-sm font-medium hover:border-brand/50 transition-colors"
          >
            View executive summary
          </Link>
          <Link
            href="/articles/"
            className="inline-flex items-center gap-2 rounded-full border border-transparent text-brand-ink px-5 py-3 text-sm font-medium hover:text-brand-accent transition-colors"
          >
            Read articles
            <Arrow />
          </Link>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl">
          <Stat title="20+ years" body="Corporate finance experience" />
          <Stat title="15 entities" body="Multi-jurisdictional structure managed" />
          <Stat title="10 countries" body="UK, US, Ireland, Cyprus +6 more" />
          <Stat title="≈ 7% deviation" body="Operating cash-flow forecast accuracy" />
        </dl>
      </Container>
    </section>
  );
}

function Stat({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl text-brand-ink tracking-tight">{title}</p>
      <p className="mt-1 text-sm text-brand-slate leading-snug">{body}</p>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
