import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { financeStages } from '@/data/expertise';

// Pyramid recreated as five horizontal trapezoid layers, widest at the bottom.
// Stage 3 is the crimson accent layer with a "CFO required here" side label.
export function EvolutionPyramid() {
  // Layer widths from bottom to top — wider base, narrower apex
  const widths = ['100%', '86%', '72%', '58%', '44%'];

  // Render the pyramid in reverse: top of array = top of pyramid visually.
  // Our data is 1..5 bottom-to-top, so iterate reversed for display.
  const layers = [...financeStages].reverse();

  return (
    <section className="py-20 lg:py-24 bg-brand-mist/40 border-t border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Evolution pyramid"
          title="Five stages of corporate finance evolution."
          intro="Passing through every stage of evolution is a challenge that every founder eventually faces. The pyramid maps that journey from manual control at the base to predictive finance at the apex."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="space-y-2 lg:space-y-2.5">
              {layers.map((stage, i) => {
                const width = widths[4 - i]; // top = narrow, bottom = wide
                const isHighlight = stage.highlight;
                return (
                  <div key={stage.number} className="flex items-center justify-center">
                    <div
                      style={{ width }}
                      className={`relative h-14 sm:h-16 flex items-center justify-between px-5 sm:px-6 rounded-md shadow-soft ${
                        isHighlight
                          ? 'bg-brand-accent text-white'
                          : 'bg-brand text-white'
                      }`}
                    >
                      <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/80">
                        Stage {stage.number}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">{stage.title}</span>
                      {isHighlight && (
                        <span className="hidden md:block absolute left-full ml-4 whitespace-nowrap text-xs font-semibold tracking-[0.18em] uppercase text-brand-accent">
                          ← CFO required here
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {financeStages.map((s) => (
              <div key={s.number} className="border-l-2 pl-4 border-slate-200">
                <p
                  className={`text-xs font-semibold tracking-[0.18em] uppercase ${
                    s.highlight ? 'text-brand-accent' : 'text-brand-slate'
                  }`}
                >
                  Stage {s.number} — {s.title}
                </p>
                <p className="mt-1 text-sm text-brand-ink/85 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
