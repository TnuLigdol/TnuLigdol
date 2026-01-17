import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StoryCard } from "@/components/cards/story-card";
import { stories } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

export const metadata: Metadata = {
  title: "סיפורים מהשטח | תנו לגדול על שקט",
  description: "סיפורי הצלחה מקהילות שהצטרפו ליוזמה",
};

export default function StoriesPage() {
  const sortedStories = [...stories].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            סיפורים מהשטח
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            איך קהילות אחרות הצליחו להטמיע את היוזמה
          </p>
          <Button asChild>
            <Link href="/share-your-story">שתפו את הסיפור שלכם</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sortedStories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>

      <StartupKitForm />
    </div>
  );
}
