import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Story } from '@/content';

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl">{story.title}</CardTitle>
          <CardDescription>
            {story.author} •{' '}
            {new Date(story.publishedAt).toLocaleDateString('he-IL', {
              timeZone: 'UTC',
            })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{story.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
