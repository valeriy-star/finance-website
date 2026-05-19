import type { Metadata } from 'next';
import { Container } from '@/components/Container';
import { FiveStagesTimeline } from '@/components/FiveStagesTimeline';
import { StageThreeProblem } from '@/components/StageThreeProblem';
import { CFORequirement } from '@/components/CFORequirement';
import { BigCircle } from '@/components/BigCircle';
import { SevenStageRoadmap } from '@/components/SevenStageRoadmap';
import { UpgradeAreasDiagram } from '@/components/UpgradeAreasDiagram';
import { UpgradeLevels } from '@/components/UpgradeLevels';
import { EvolutionPyramid } from '@/components/EvolutionPyramid';
import { ExperienceDriveFormula } from '@/components/ExperienceDriveFormula';
import { FounderCredibility } from '@/components/FounderCredibility';
import { ServiceCards } from '@/components/ServiceCards';
import { WorldMap } from '@/components/WorldMap';
import { ContactCTA } from '@/components/ContactCTA';

export const metadata: Metadata = {
  title: 'Financial Expertise',
  description:
    'Financial expertise for the upgrade of your IT business — accounting systems, cash-flow architecture, metrics, payroll and international presence.',
};

export default function ExpertisePage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100">
        <Container className="pt-16 sm:pt-24 pb-12">
          <p className="eyebrow rise">Financial Expertise</p>
          <h1 className="rise-2 mt-4 max-w-4xl font-display font-semibold tracking-tightest text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.06] text-brand-ink">
            Financial expertise for the{' '}
            <span className="relative inline-block">
              <span className="relative z-10">upgrade</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1.5 h-3 bg-brand-accent/85 -z-0 -skew-x-6" />
            </span>{' '}
            of your IT business.
          </h1>
          <p className="rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate">
            Accounting systems, cash-flow architecture, metrics, payroll and international presence
            for fast-growing technology companies. KOSOVAN helps founders and management teams move
            from fragmented finance processes to a structured, automated and decision-ready financial
            system.
          </p>
        </Container>
      </section>

      <FiveStagesTimeline />
      <StageThreeProblem />
      <CFORequirement />
      <BigCircle />
      <SevenStageRoadmap />
      <EvolutionPyramid />
      <UpgradeAreasDiagram />
      <UpgradeLevels />
      <FounderCredibility />
      <ExperienceDriveFormula />
      <ServiceCards />
      <WorldMap />
      <ContactCTA />
    </>
  );
}
