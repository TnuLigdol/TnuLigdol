import { homepage } from '@/content';

export function About() {
  return (
    <section className="py-16 md:py-24 bg-primary relative">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-accent-orange opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-green opacity-70 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            {homepage.about.title}
          </h2>
          <p className="text-xl md:text-2xl text-primary text-center mb-8">
            {homepage.about.subtitle}
          </p>
          <div className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-center">
            {homepage.about.content.trim()}
          </div>
        </div>
      </div>
    </section>
  );
}
