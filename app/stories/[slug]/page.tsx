import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { stories, getStoryBySlug } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

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
        <div className="prose prose-lg max-w-none mb-12">
          {story.content.split("\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("- ")) {
              return (
                <li key={i} className="text-muted-foreground">
                  {trimmed.replace("- ", "")}
                </li>
              );
            }
            return (
              <p key={i} className="text-muted-foreground mb-4">
                {trimmed}
              </p>
            );
          })}
        </div>

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
