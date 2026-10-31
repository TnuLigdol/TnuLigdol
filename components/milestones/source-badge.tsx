import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Round icon of an author or publisher; falls back to the first letter of the name when there is no icon. */
export function SourceBadge({ name, icon, className }: { name: string; icon?: string; className?: string }) {
  return icon ? (
    <Image
      src={icon}
      alt={name}
      title={name}
      width={96}
      height={96}
      className={cn('h-[22px] w-[22px] rounded-full bg-white object-contain', className)}
    />
  ) : (
    <span
      title={name}
      role='img'
      aria-label={name}
      className={cn(
        'inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#ebf3ec] font-sans text-[12px] font-bold text-green-dark',
        className
      )}
    >
      {name.charAt(0)}
    </span>
  );
}

/** Publishers of a milestone's related articles, one badge each. */
export function PublisherBadges({
  articles,
  className,
}: {
  articles: { publication: string; publicationIcon?: string }[];
  className?: string;
}) {
  const unique = [...new Map(articles.map((a) => [a.publication, a])).values()];
  return (
    <span className='inline-flex items-center gap-[6px]'>
      {unique.map((a) => (
        <SourceBadge key={a.publication} name={a.publication} icon={a.publicationIcon} className={className} />
      ))}
    </span>
  );
}
