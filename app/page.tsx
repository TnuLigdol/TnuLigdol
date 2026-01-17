import {
  Hero,
  About,
  FAQ,
  StoriesSection,
  PhoneGuideSection,
} from "@/components/home";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

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
