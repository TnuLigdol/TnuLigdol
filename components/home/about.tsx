import { homepage } from "@/content";

export function About() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {homepage.about.title}
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {homepage.about.content.trim()}
        </div>
      </div>
    </section>
  );
}
