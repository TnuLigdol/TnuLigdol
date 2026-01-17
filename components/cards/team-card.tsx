import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { TeamMember } from '@/content';

interface TeamCardProps {
  member: TeamMember;
  showRegion?: boolean;
}

export function TeamCard({ member, showRegion = false }: TeamCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold leading-none">{member.name}</h3>
        {showRegion && member.region && (
          <p className="text-sm text-primary font-medium">{member.region}</p>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{member.bio}</p>
      </CardContent>
    </Card>
  );
}
