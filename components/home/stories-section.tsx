import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/cards/story-card";
import { homepage, getRecentStories } from "@/content";

export function StoriesSection() {
  const stories = getRecentStories(3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {homepage.storiesSection.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {homepage.storiesSection.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href={homepage.storiesSection.cta.href}>
              {homepage.storiesSection.cta.label}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
