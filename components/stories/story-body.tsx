import Image from 'next/image';
import { LinkText } from '@/components/ui/link-text';
import type { StoryBlock } from '@/content';

/**
 * Renders a story's block content with the same right-aligned 18px/1.6 light
 * body type the original used for post content, plus WordPress-style figures
 * (image with an optional caption underneath).
 */
export function StoryBody({ blocks }: { blocks: StoryBlock[] }) {
  return (
    <div className="text-right font-sans text-[18px] font-light leading-[1.6em] text-ink">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === 'paragraph') {
          return (
            <p key={key} className="my-[1em]">
              <LinkText>{block.text}</LinkText>
            </p>
          );
        }

        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul';
          return (
            <List
              key={key}
              className={`my-[1em] pr-[1.5em] ${
                block.ordered ? 'list-decimal' : 'list-disc'
              }`}
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 32)} className="my-[0.25em]">
                  <LinkText>{item}</LinkText>
                </li>
              ))}
            </List>
          );
        }

        return (
          <figure key={key} className="my-[1em]">
            <Image
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              className="h-auto w-full"
            />
            {block.caption && (
              <figcaption className="mt-[0.5em] text-center font-sans text-[13px] text-ink/70">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
