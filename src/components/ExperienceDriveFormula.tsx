import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function ExperienceDriveFormula() {
  return (
    <section className="py-20 lg:py-24 bg-brand-mist/50 border-y border-slate-100">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What works"
              title="Experience multiplied by drive."
              intro="Practice shows that the formula for fast change comes down to two mutually reinforcing factors. Experience — the expertise of someone who has already passed through the stages of growth. Drive — the internal energy of the business and its team."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-brand-ink p-6 sm:p-10 text-white shadow-soft">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 sm:gap-5">
                <Block label="Experience" sub="Hands-on CFO and transformation practice" />
                <Operator>×</Operator>
                <Block label="Drive" sub="The energy of the business and team" />
                <Operator>=</Operator>
                <Block accent label="Fast transformation" sub="A finance system ready for the next stage" />
              </div>
              <p className="mt-6 text-sm text-white/65 italic">
                This formula became the foundation of our product.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Block({ label, sub, accent }: { label: string; sub: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-2xl border ${
        accent
          ? 'bg-brand-accent border-brand-accent text-white'
          : 'bg-white/5 border-white/10 text-white'
      } p-5`}
    >
      <p className="font-display text-2xl leading-tight tracking-tight">{label}</p>
      <p className={`mt-2 text-xs leading-relaxed ${accent ? 'text-white/85' : 'text-white/65'}`}>{sub}</p>
    </div>
  );
}

function Operator({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-center font-display text-3xl text-white/70 sm:px-1">{children}</span>
  );
}
