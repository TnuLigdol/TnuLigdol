import {
  About,
  FAQ,
  Hero,
  KickstartSection,
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
      <StoriesSection />
      <ShareStorySection />
      <PhoneGuideSection />
      <FAQ />
      <FooterCTA />
    </>
  );
}
