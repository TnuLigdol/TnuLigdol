import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { stories, getStoryBySlug } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";
import { ContentRenderer } from "@/components/ui/content-renderer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "סיפור לא נמצא" };

  return {
    title: `${story.title} | תנו לגדול על שקט`,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/stories" className="hover:text-primary">
            סיפורים מהשטח
          </Link>
          <span className="mx-2">/</span>
          <span>{story.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h1>
          <div className="text-muted-foreground">
            {story.author} •{" "}
            {new Date(story.publishedAt).toLocaleDateString("he-IL")}
          </div>
        </header>

        {/* Content */}
        <ContentRenderer
          content={story.content}
          className="prose prose-lg max-w-none mb-12"
        />

        {/* CTA */}
        <div className="text-center p-8 bg-muted/50 rounded-lg">
          <p className="text-lg mb-4">יש לכם סיפור משלכם?</p>
          <Button asChild>
            <Link href="/share-your-story">שתפו את הסיפור שלכם</Link>
          </Button>
        </div>
      </article>

      <StartupKitForm />
    </div>
  );
}
