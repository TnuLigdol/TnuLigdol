import { StartupKitForm } from '@/components/forms/startup-kit-form';
import {
  About,
  FAQ,
  Hero,
  PhoneGuideSection,
  StoriesSection,
} from '@/components/home';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <StartupKitForm />
      <StoriesSection />
      <PhoneGuideSection />
      <FAQ />
      <StartupKitForm title="הצטרפו אלינו" id="join-us" />
    </main>
  );
}
