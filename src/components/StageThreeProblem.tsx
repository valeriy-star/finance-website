import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

export function StageThreeProblem() {
  return (
    <section className="py-20 lg:py-24 bg-brand-accent text-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              variant="dark"
              eyebrow="The bottleneck"
              title="Most companies get stuck at stage three: automation and digitalisation."
            />
          </div>
          <div className="lg:col-span-7 lg:pt-2 text-white/90 leading-relaxed text-lg space-y-5">
            <p>
              At first, automation looks simple. It may feel as if everything is running by itself.
              In reality, this stage requires constant control. Someone has to sit down, describe the
              processes, document how they work and decide exactly what should be automated.
            </p>
            <p>
              Without proper management, automation can become endless. After some time, no one
              remembers where the process started, why certain decisions were made, or how the system
              is supposed to work.
            </p>
            <blockquote className="mt-8 border-l-2 border-white/60 pl-5 font-display text-2xl sm:text-3xl leading-snug text-white">
              Automation without documented financial logic becomes permanent automation.
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
