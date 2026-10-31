import {
  About,
  FAQ,
  Hero,
  KickstartSection,
  PartiesSection,
  PhoneGuideSection,
  ShareStorySection,
  StoriesSection,
} from '@/components/home';
import { FooterCTA } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <KickstartSection />
      <PartiesSection />
      <StoriesSection />
      <ShareStorySection />
      <PhoneGuideSection />
      <FAQ />
      <FooterCTA />
    </>
  );
}
