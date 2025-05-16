import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ToolHighlightsSection } from '@/components/sections/ToolHighlightsSection';
import { CommunitySection } from '@/components/sections/CommunitySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ToolHighlightsSection />
      <CommunitySection />
    </>
  );
}
