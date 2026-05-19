import { HeroHome } from '@/components/HeroHome';
import { ValueProposition } from '@/components/ValueProposition';
import { ExpertisePreview } from '@/components/ExpertisePreview';
import { EvolutionPreview } from '@/components/EvolutionPreview';
import { ExecutiveSummaryPreview } from '@/components/ExecutiveSummaryPreview';
import { FeaturedArticles } from '@/components/FeaturedArticles';
import { ContactCTA } from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <ValueProposition />
      <ExpertisePreview />
      <EvolutionPreview />
      <ExecutiveSummaryPreview />
      <FeaturedArticles />
      <ContactCTA />
    </>
  );
}
