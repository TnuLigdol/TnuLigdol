import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { StartupKitForm } from '@/components/forms/startup-kit-form';
import { ContentRenderer } from '@/components/ui/content-renderer';
import { articles, categoryLabels, getArticleBySlug } from '@/content';

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'מאמר לא נמצא' };

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="text-muted-foreground">
            {article.author} •{' '}
            {new Date(article.publishedAt).toLocaleDateString('he-IL')}
          </div>
        </header>

        {/* Content */}
        <ContentRenderer
          content={article.content}
          className="prose prose-lg max-w-none"
        />
      </article>

      <StartupKitForm />
    </div>
  );
}
