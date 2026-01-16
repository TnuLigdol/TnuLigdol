import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TeamMember } from "@/content";

interface TeamCardProps {
  member: TeamMember;
  showRegion?: boolean;
}

export function TeamCard({ member, showRegion = false }: TeamCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{member.name}</CardTitle>
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
