import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function ValueProposition() {
  return (
    <section className="py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Positioning"
              title={
                <>
                  Finance, designed to <span className="text-brand-accent">scale</span> with the business.
                </>
              }
            />
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-lg leading-relaxed text-brand-ink/85">
              The work focuses on the financial architecture that fast-growing technology businesses
              actually need — accounting systems, management reporting, budgeting and forecasting,
              treasury, payroll, international structuring and ERP-driven operational finance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              The intent is not to add another consulting layer. It is to give founders and management
              teams a finance function that is accurate, scalable and ready for the next stage of
              growth — including international expansion, investor readiness and audit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
