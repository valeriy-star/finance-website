import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { upgradeLevels } from '@/data/expertise';

export function UpgradeLevels() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="How many levels of upgrade are there?"
          title="Five upgrade levels — each unlocks the next."
          intro="From delegation and accounting systems, through automation and analytics, to predictive systems. Most companies stop at level three. Only those that complete the homework on processes, policies and data earn the right to dashboards and predictive finance."
        />

        <ol className="mt-12 space-y-5">
          {upgradeLevels.map((l) => (
            <li
              key={l.number}
              className={`relative rounded-2xl border p-6 sm:p-7 grid grid-cols-12 gap-6 items-start ${
                l.highlight ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white border-slate-200'
              }`}
            >
              <div className="col-span-12 sm:col-span-2">
                <span
                  className={`font-display text-5xl sm:text-6xl leading-none tracking-tight ${
                    l.highlight ? 'text-white' : 'text-brand'
                  }`}
                >
                  {String(l.number).padStart(2, '0')}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-10">
                <h3
                  className={`font-semibold text-xl ${l.highlight ? 'text-white' : 'text-brand-ink'}`}
                >
                  {l.title}
                </h3>
                <p
                  className={`mt-2 text-base leading-relaxed ${
                    l.highlight ? 'text-white/85' : 'text-brand-slate'
                  }`}
                >
                  {l.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
