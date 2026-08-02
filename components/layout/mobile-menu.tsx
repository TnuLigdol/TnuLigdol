'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { siteConfig } from '@/content/site';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Elementor's burger dropdown: a full-width white panel that drops out of the
 * header, with a green hover/active state on each row.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('mobile-menu-open');
    return () => document.body.classList.remove('mobile-menu-open');
  }, [open]);

  if (!open) return null;

  // Elementor's submenus repeat their parent as the first child; in a flat
  // list that just reads as a duplicate row, so drop it.
  const rows = siteConfig.navigation.flatMap((item) => [
    { label: item.label, href: item.href },
    ...(item.children ?? []).filter((child) => child.href !== item.href),
  ]);

  return (
    <nav className="absolute inset-x-0 top-full z-[1001] bg-white shadow-[0px_0px_22px_-14px_rgba(0,0,0,0.31)] desktop:hidden">
      <ul>
        {rows.map((row) => (
          <li key={`${row.href}-${row.label}`}>
            <Link
              href={row.href}
              onClick={onClose}
              className="block px-5 py-[13px] text-center font-sans text-[17px] leading-[1.5] text-green-darkest hover:bg-green-dropdown hover:text-white"
            >
              {row.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={siteConfig.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="block px-5 py-[13px] text-center font-sans text-[17px] leading-[1.5] text-green-darkest hover:bg-green-dropdown hover:text-white"
          >
            לקבוצת הפייסבוק
          </a>
        </li>
      </ul>
    </nav>
  );
}
