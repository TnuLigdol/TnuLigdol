import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { homepage } from '@/content';

export function PhoneGuideSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {homepage.phoneGuideSection.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {homepage.phoneGuideSection.description}
            </p>
            <Button asChild size="lg">
              <Link href={homepage.phoneGuideSection.cta.href}>
                {homepage.phoneGuideSection.cta.label}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
