import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { homepage } from '@/content';

function DecorativeCircles() {
  return (
    <>
      {/* Orange filled circle - top left */}
      <div className="absolute top-16 left-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent-orange opacity-90 animate-float" />

      {/* Orange outline circle - middle left */}
      <div className="absolute top-1/2 left-4 w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-accent-orange opacity-80 animate-float-slow" />

      {/* Green circle - bottom right */}
      <div className="absolute bottom-0 right-8 translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-green opacity-80 animate-float-slow" />

      {/* Orange arc - top right corner */}
      <div className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-accent-orange opacity-70" />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative bg-primary py-12 md:py-16 overflow-hidden min-h-[500px] md:min-h-[600px]">
      <DecorativeCircles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Left Child Image (appears on right in RTL) */}
          <div className="hidden md:block flex-shrink-0 animate-slide-up">
            <Image
              src="/images/hero/happy-kid-2.png"
              alt="ילד שמח"
              width={280}
              height={350}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          {/* Center Text Content */}
          <div className="flex-1 text-center px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-right">
              {homepage.hero.title}.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
              {homepage.hero.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 animate-fade-in-up animate-delay-300"
            >
              <Link href={homepage.hero.cta.href}>{homepage.hero.cta.label}</Link>
            </Button>
          </div>

          {/* Right Child Image (appears on left in RTL) */}
          <div className="hidden md:block flex-shrink-0 animate-slide-up animate-delay-100">
            <Image
              src="/images/hero/happy-kid-1.png"
              alt="ילדה שמחה"
              width={280}
              height={350}
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Mobile: Show one child image below */}
        <div className="md:hidden flex justify-center mt-8 animate-slide-up animate-delay-200">
          <Image
            src="/images/hero/happy-kid-1.png"
            alt="ילד שמח"
            width={200}
            height={250}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
