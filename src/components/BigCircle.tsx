import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function BigCircle() {
  return (
    <section className="py-24 lg:py-28 bg-brand-ink text-white">
      <Container className="text-center">
        <SectionHeading
          align="center"
          variant="dark"
          eyebrow="Beyond the bottleneck"
          title={
            <>
              Passing the third stage is not the final goal. It is the route to the higher levels of the game.
            </>
          }
          intro="A well-managed finance upgrade creates the foundation for analytics, predictive finance, financial AI and strategic investment decisions. The goal is not only an efficient finance department — it is a financial system that supports scale, resilience and long-term strategic choices."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Card
            number="6"
            title="External investment"
            body="The company begins to use financial and investment instruments to generate returns. The finance function does not only support the core business — it can also create additional cash flow."
          />
          <Card
            number="7"
            title="Financing cultural expansion"
            body="The company operates within ecosystems and develops projects and strategies aimed at long-term social value — philanthropy, patronage, charitable foundations and legacy planning."
          />
        </div>
      </Container>
    </section>
  );
}

function Card({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="text-left rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-accent text-white text-sm font-semibold">
        {number}
      </div>
      <h3 className="mt-4 font-semibold text-lg text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75 leading-relaxed">{body}</p>
    </div>
  );
}
