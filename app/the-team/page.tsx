import type { Metadata } from "next";
import { TeamCard } from "@/components/cards/team-card";
import { founders, advisors, coordinators } from "@/content";

export const metadata: Metadata = {
  title: "הצוות | תנו לגדול על שקט",
  description: "הכירו את הצוות שמוביל את היוזמה",
};

export default function TeamPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          הצוות
        </h1>

        {/* Founders */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            מייסדות
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {founders.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Academic Advisor */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            יועץ אקדמי
          </h2>
          <div className="grid gap-6 max-w-xl mx-auto">
            {advisors.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Regional Coordinators */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            רכזים אזוריים
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {coordinators.map((member, index) => (
              <TeamCard key={index} member={member} showRegion />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
