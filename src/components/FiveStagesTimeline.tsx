import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { financeStages } from '@/data/expertise';

export function FiveStagesTimeline() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Five stages of finance evolution"
          title="From the foundation of a business, corporate finance passes through five stages."
          intro="Every company starts with manual control. As the business grows, finance needs to evolve: through tools, automation, analytics and, eventually, predictive financial systems. For IT companies, this journey is often compressed — growth happens quickly while the financial system stays behind."
        />

        <div className="mt-12 relative">
          <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-slate-200" />
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
                <h3 className={`mt-4 font-semibold leading-tight ${s.highlight ? 'text-white' : 'text-brand-ink'}`}>
                  {s.title}
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
      </Container>
    </section>
  );
}
