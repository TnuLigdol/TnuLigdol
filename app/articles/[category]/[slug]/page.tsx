import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, categoryLabels } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "מאמר לא נמצא" };

  return {
    title: `${article.title} | תנו לגדול על שקט`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20">
      <article className="container mx-auto px-4 max-w-3xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/articles" className="hover:text-primary">
            מאמרים
          </Link>
          <span className="mx-2">/</span>
          <span>{categoryLabels[article.category]}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="text-primary font-medium mb-2">
            {categoryLabels[article.category]}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          <div className="text-muted-foreground">
            {article.author} •{" "}
            {new Date(article.publishedAt).toLocaleDateString("he-IL")}
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {article.content.split("\n").map((paragraph, i) => {
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
      </article>

      <StartupKitForm />
    </div>
  );
}
