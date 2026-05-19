import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { sevenStages } from '@/data/expertise';

export function SevenStageRoadmap() {
  return (
    <section className="py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Seven stages of finance evolution"
          title="From inward control to outward impact."
          intro="The finance function evolves together with the founder, the business model and the company’s strategic horizon. Attention shifts from inward — control, accounting, automation, analytics — to outward — investment, ecosystems and long-term social value."
        />

        <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-brand-slate font-semibold">
          <span className="inline-flex items-center gap-2">
            <Arrow direction="left" />
            Attention inward
          </span>
          <span className="inline-flex items-center gap-2">
            Attention outward
            <Arrow direction="right" />
          </span>
        </div>

        <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {sevenStages.map((s) => {
            const transformation = s.transformation;
            const note = s.note;
            const isBigCircle = note.includes('big circle');
            return (
              <li
                key={s.number}
                className={`rounded-2xl border p-4 ${
                  transformation
                    ? 'bg-brand text-white border-brand'
                    : isBigCircle
                      ? 'bg-brand-mist border-brand/20'
                      : 'bg-white border-slate-200'
                }`}
              >
                <div
                  className={`flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider ${
                    transformation ? 'text-white/70' : 'text-brand-slate'
                  }`}
                >
                  <span>Stage {s.number}</span>
                  {transformation && (
                    <span className="rounded-full bg-brand-accent text-white px-1.5 py-0.5">Pivot</span>
                  )}
                </div>
                <h3
                  className={`mt-2 font-semibold leading-tight text-[15px] ${
                    transformation ? 'text-white' : 'text-brand-ink'
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-[13px] leading-relaxed ${
                    transformation ? 'text-white/85' : 'text-brand-slate'
                  }`}
                >
                  {s.body}
                </p>
                {note !== '' && (
                  <p
                    className={`mt-3 text-[11px] font-medium ${
                      transformation ? 'text-white' : 'text-brand'
                    }`}
                  >
                    {note}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      {direction === 'right' ? (
        <path d="M1 5h18m-4-3l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M21 5H3m4-3L3 5l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
