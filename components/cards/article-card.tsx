import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Article } from "@/content";
import { categoryLabels } from "@/content";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.category}/${article.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <div className="text-xs text-primary font-medium mb-1">
            {categoryLabels[article.category]}
          </div>
          <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
          <CardDescription>
            {article.author} •{" "}
            {new Date(article.publishedAt).toLocaleDateString("he-IL")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {article.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
