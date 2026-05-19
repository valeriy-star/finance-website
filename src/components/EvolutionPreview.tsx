import Link from 'next/link';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { financeStages } from '@/data/expertise';

export function EvolutionPreview() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The evolution model"
          title="From manual control to predictive finance — in five stages."
          intro="Corporate finance evolves through a predictable sequence. Most companies stall at the third stage, where automation outruns documented policy. This is where CFO-level leadership becomes essential."
        />

        <div className="mt-12 relative">
          {/* connecting line */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-4">
            {financeStages.map((s) => (
              <li
                key={s.number}
                className={`relative rounded-2xl border p-5 ${
                  s.highlight
                    ? 'bg-brand-accent text-white border-brand-accent shadow-soft'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div
                  className={`relative z-10 flex items-center justify-center h-10 w-10 rounded-full text-sm font-semibold ${
                    s.highlight ? 'bg-white text-brand-accent' : 'bg-brand text-white'
                  }`}
                >
                  {s.number}
                </div>
                <h3 className={`mt-4 font-semibold ${s.highlight ? 'text-white' : 'text-brand-ink'}`}>
                  {s.short}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    s.highlight ? 'text-white/85' : 'text-brand-slate'
                  }`}
                >
                  {s.description}
                </p>
                {s.highlight && (
                  <span className="absolute -top-3 right-4 text-[10px] font-semibold tracking-[0.18em] uppercase bg-white text-brand-accent px-2 py-1 rounded-full shadow-soft">
                    CFO required
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <Link
            href="/expertise/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-accent"
          >
            Explore the full framework
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
