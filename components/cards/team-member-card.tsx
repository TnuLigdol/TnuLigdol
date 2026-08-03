import Image from 'next/image';
import { LinkText } from '@/components/ui/link-text';
import type { TeamMember } from '@/content';

/**
 * One cell of the "מי אנחנו" 2-up grid: circular photo, name in primary
 * green, justified bio paragraphs — repeated for all 18 people with no
 * further variation in the original.
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col items-center p-[15px]">
      <Image
        src={member.photo}
        alt={member.name}
        width={160}
        height={160}
        className="size-[140px] rounded-full border-[10px] border-[#f0f8f0] object-cover desktop:size-[160px]"
      />

      <h2 className="mt-[6px] mb-[6px] text-center font-sans text-[25px] font-normal leading-tight text-primary">
        {member.name}
      </h2>

      <div className="text-justify font-sans text-[18px] leading-[1.5em] text-green-text">
        {member.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="my-[1em]">
            <LinkText>{paragraph}</LinkText>
          </p>
        ))}
      </div>
    </article>
  );
}
