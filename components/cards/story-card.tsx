import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import type { Story } from '@/content';

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all cursor-pointer overflow-hidden hover:-translate-y-1">
        {story.featuredImage && (
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={story.featuredImage}
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {story.title}
          </h3>
        </CardContent>
      </Card>
    </Link>
  );
}
