import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { homepage } from '@/content';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {homepage.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {homepage.hero.subtitle}
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <Link href={homepage.hero.cta.href}>{homepage.hero.cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}
