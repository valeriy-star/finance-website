import Image from 'next/image';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

const bullets = [
  'Built the financial planning and budgeting process from zero.',
  'Developed a financial planning system that forecasted operating cash flow with an annual deviation of approximately 7%.',
  'Registered companies and built tax accounting systems across the USA, Ireland, the UK, Belize, Georgia and China.',
];

export function FounderCredibility() {
  return (
    <section className="py-20 lg:py-24 border-t border-slate-100">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-brand">
              <Image
                src="/images/valeriy-kosovan-city.jpg"
                alt="Valeriy Kosovan — Financial Technology Expert"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Founder"
              title="Hello, I’m Valeriy Kosovan, founder of KOSOVAN FTE."
              intro="I personally passed through the finance upgrade stages described here as CFO of a fast-growing technology business — building the function from the ground up across multiple jurisdictions."
            />
            <ul className="mt-8 space-y-4 text-brand-ink/85">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-brand-slate">
              Over eight years I built a successful and efficient finance department for a company
              operating at the fifth level. The main idea is simple: finance in IT has its own
              specific character — and the cost of learning it the slow way is too high.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
