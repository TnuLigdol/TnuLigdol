import type { Metadata } from 'next';
import { TeamMemberCard } from '@/components/cards/team-member-card';
import { FooterCTA, PageHero } from '@/components/layout';
import { team } from '@/content';

export const metadata: Metadata = {
  title: 'מי אנחנו · תנו לגדול על שקט',
  description:
    'סיגל רובין שהם מייסדת שותפה של תנועת ״תנו לגדול על שקט״, לצד נעמה גלעדי. גרה בהוד השרון, נשואה ליואב ואם ל- 3 ילדים.',
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="מי אנחנו" />

      <div className="mx-auto max-w-[1000px] p-[15px]">
        <div className="grid grid-cols-1 gap-x-[60px] tablet:grid-cols-2">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      <FooterCTA />
    </>
  );
}
