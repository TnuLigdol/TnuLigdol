import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards/article-card";
import { articles, categoryLabels } from "@/content";
import { StartupKitForm } from "@/components/forms/startup-kit-form";

export const metadata: Metadata = {
  title: "מאמרים | תנו לגדול על שקט",
  description: "מאמרים וחומרי קריאה בנושא שימוש בטוח בטכנולוגיה לילדים",
};

export default function ArticlesPage() {
  // Group articles by category
  const articlesByCategory = articles.reduce(
    (acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = [];
      }
      acc[article.category].push(article);
      return acc;
    },
    {} as Record<string, typeof articles>
  );

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          כל המאמרים
        </h1>

        {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <StartupKitForm />
    </div>
  );
}
