import { Construction } from "lucide-react";
import { siteConfig } from "@/content/site";

function DecorativeCircles() {
  return (
    <>
      {/* Orange filled circle - top left */}
      <div className="absolute top-16 left-8 w-16 h-16 md:w-24 md:h-24 rounded-full bg-accent-orange opacity-90 animate-float" />

      {/* Orange outline circle - middle left */}
      <div className="absolute top-1/2 left-12 w-28 h-28 md:w-40 md:h-40 rounded-full border-4 border-accent-orange opacity-80 animate-float-slow" />

      {/* Orange filled circle - right side */}
      <div className="absolute top-1/3 right-0 translate-x-1/3 w-24 h-24 md:w-32 md:h-32 rounded-full bg-accent-orange opacity-90 animate-float-delayed" />

      {/* Green circle - bottom right */}
      <div className="absolute bottom-0 right-8 translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent-green opacity-80 animate-float-slow" />

      {/* Yellow arc - top right corner */}
      <div className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-full border-8 border-accent-orange opacity-70" />
    </>
  );
}

export default function Home() {
  return (
    <main className="h-full">
      <section className="relative bg-primary py-24 md:py-40 overflow-hidden min-h-[70vh] h-full flex items-center">
        <DecorativeCircles />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center animate-fade-in-up">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/15 flex items-center justify-center">
              <Construction className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animate-delay-100">
            האתר בשיפוצים
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            אנחנו עובדים על חידוש האתר כדי להעניק לכם חוויה טובה יותר.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up animate-delay-300">
            נשמח שתחזרו לבקר בקרוב. תודה על הסבלנות וההבנה!
            <br />
            <br />
            מוזמנים בינתיים להכנס לעמוד הפייסבוק שלנו
          </p>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-8 py-3 rounded-full bg-white text-primary font-medium hover:bg-white/90 transition-colors animate-fade-in-up animate-delay-400"
          >
            לינק לפייסבוק
          </a>
        </div>
      </section>
    </main>
  );
}
