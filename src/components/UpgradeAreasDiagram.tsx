import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { upgradeAreas } from '@/data/expertise';

export function UpgradeAreasDiagram() {
  return (
    <section className="py-20 lg:py-24 bg-brand-mist/40 border-y border-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Comprehensive upgrade or individual tools"
          title="Whole-architecture finance transformation — or targeted work where it matters most."
          intro="Every IT business is at a different stage. Some companies need full transformation; others need targeted improvements in a specific area: accounting, cash-flow architecture, payroll, metrics, valuation or international presence."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {/* central comprehensive card on the left at lg */}
          <div className="lg:col-span-1 rounded-3xl bg-brand-accent text-white p-7 shadow-soft flex flex-col">
            <span className="eyebrow eyebrow-light">Hub</span>
            <h3 className="mt-3 font-display text-2xl leading-tight">Comprehensive upgrade</h3>
            <p className="mt-4 text-sm text-white/85 leading-relaxed flex-1">
              Whole-architecture finance transformation, when the business is ready to move beyond
              fragmented systems and into scalable, decision-ready financial infrastructure.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-[12px] font-medium">
              {upgradeAreas.map((a) => (
                <li key={a.title} className="bg-white/10 rounded-md px-2.5 py-1.5">{a.title}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {upgradeAreas.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-brand/10 bg-white p-5 hover:border-brand/40 transition-colors"
              >
                <h4 className="font-semibold text-brand-ink">{a.title}</h4>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
