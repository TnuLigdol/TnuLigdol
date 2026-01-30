import { Facebook } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo and Facebook */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="size-5" />
            </a>
            <Link href="/" className="text-primary font-bold">
              {siteConfig.name}
            </Link>
          </div>

          {/* Credit */}
          <a
            href={siteConfig.footer.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            <span className="text-gray-400">🔗</span>
            {siteConfig.footer.credit.text}
          </a>
        </div>
      </div>
    </footer>
  );
}
