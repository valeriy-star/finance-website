import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { services } from '@/data/expertise';

export function ServiceCards() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Service areas"
          title="Accounting, payroll, metrics and international presence."
          intro="The four operating areas where finance work consistently creates measurable improvements for IT businesses."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 hover:border-brand/40 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-brand-ink tracking-tight">{s.title}</h3>
                <span className="h-1.5 w-8 rounded-full bg-brand-accent" aria-hidden />
              </div>
              <p className="mt-4 text-base leading-relaxed text-brand-ink/85">{s.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-brand-mist text-brand text-xs font-medium px-3 py-1"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
