import Image from 'next/image';
import { StartupKitForm } from '@/components/forms/startup-kit-form';

export function FooterCTA() {
  return (
    <section className="bg-primary py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Form Section */}
          <div className="flex-1 w-full md:max-w-xl animate-fade-in-right">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-right">
              זה יכול להצליח גם בקהילה שלכם.
            </h2>
            <StartupKitForm variant="dark" hideTitle />
          </div>

          {/* Image Section */}
          <div className="relative flex-shrink-0 hidden md:block">
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-[#f5b642] opacity-80" />
            <Image
              src="/images/hero/kid-playing.png"
              alt="ילד שמח"
              width={350}
              height={400}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
