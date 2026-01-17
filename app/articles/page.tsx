import type { Metadata } from 'next';
import { ArticleCard } from '@/components/cards/article-card';
import { StartupKitForm } from '@/components/forms/startup-kit-form';
import {
  type Article,
  type ArticleCategory,
  articles,
  categoryLabels,
} from '@/content';

export const metadata: Metadata = {
  title: 'מאמרים | תנו לגדול על שקט',
  description: 'מאמרים וחומרי קריאה בנושא שימוש בטוח בטכנולוגיה לילדים',
};

export default function ArticlesPage() {
  // Group articles by category
  const articlesByCategory = articles.reduce<
    Partial<Record<ArticleCategory, Article[]>>
  >((acc, article) => {
    const list = acc[article.category];
    if (list) {
      list.push(article);
    } else {
      acc[article.category] = [article];
    }
    return acc;
  }, {});

  // Get categories that have articles
  const categories = Object.keys(categoryLabels).filter(
    (cat): cat is ArticleCategory => cat in articlesByCategory,
  );

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          כל המאמרים
        </h1>

        {categories.map((category) => {
          const categoryArticles = articlesByCategory[category];
          if (!categoryArticles) return null;

          return (
            <section key={category} className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                {categoryLabels[category]}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <StartupKitForm />
    </div>
  );
}
