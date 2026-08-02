import {
  About,
  FAQ,
  FooterCTA,
  Hero,
  KickstartSection,
  PhoneGuideSection,
  ShareStorySection,
  StoriesSection,
} from '@/components/home';

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
