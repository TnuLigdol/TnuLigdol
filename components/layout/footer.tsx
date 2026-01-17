import Link from "next/link";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Links */}
          <nav className="flex flex-wrap gap-4 md:gap-6">
            {siteConfig.footer.links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Credit */}
          <p className="text-sm text-gray-500">{siteConfig.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
