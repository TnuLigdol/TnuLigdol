'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FacebookIcon } from '@/components/ui/icons';
import { type NavItem, siteConfig } from '@/content/site';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';

/**
 * Elementor's sticky header only paints a background once the page has
 * scrolled (its `elementor-sticky--active` state), and shrinks the logo with
 * it. Below 1025px the header is sticky, so this drives both.
 */
function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

/**
 * Recreates the Elementor header (template #23).
 *
 * The original shipped two separate headers — a static desktop one (>=1025px)
 * and a sticky mobile/tablet one (<=1024px) carrying a *different* set of menu
 * items. They are unified here onto the desktop menu; the sticky behaviour
 * below 1025px is kept.
 *
 * The header is transparent and 91px tall so the homepage hero can slide up
 * underneath it, exactly as the original did.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        'sticky top-0 z-[1002] h-[88px] transition-colors duration-300 desktop:static desktop:h-[91px] desktop:bg-transparent',
        scrolled || menuOpen ? 'bg-white/90' : 'bg-transparent',
      )}
    >
      {/* Desktop: logo right, menu + Facebook pill left */}
      <div className="hidden px-[30px] desktop:block">
        <div className="mx-auto flex h-[90px] max-w-[1140px] items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="לוגו תנו לגדול על שקט"
              width={285}
              height={50}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center">
            <nav className="ml-[18px]">
              <ul className="flex items-center justify-end">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href} className="group relative">
                    <NavLink item={item} />
                    {item.children && (
                      <ul className="invisible absolute top-full right-0 z-10 min-w-dropdown-min-w rounded-b-[10px] bg-white opacity-0 shadow-[0px_0px_22px_-14px_rgba(0,0,0,0.31)] transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block whitespace-nowrap px-5 py-[10px] font-sans text-[16px] leading-[1.5] text-green-darkest last:rounded-b-[10px] hover:bg-green-dropdown hover:text-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <FacebookPill />
          </div>
        </div>
      </div>

      {/* Mobile / tablet: logo right, burger left */}
      <div className="mx-auto flex h-[87px] max-w-[1000px] items-center justify-between p-5 desktop:hidden">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="לוגו תנו לגדול על שקט"
            width={285}
            height={50}
            priority
            className={cn(
              'w-auto transition-[height] duration-200',
              scrolled ? 'h-[42px]' : 'h-[43px]',
            )}
          />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="כפתור פתיחת תפריט"
          aria-expanded={menuOpen}
          className="text-green-darkest"
        >
          <BurgerIcon open={menuOpen} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const className =
    'flex items-center whitespace-nowrap px-4 py-[35px] font-sans text-[15.5px] font-medium leading-[20px] tracking-[0.2px] text-green-darkest transition-colors hover:text-primary';

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

function FacebookPill() {
  return (
    <a
      href={siteConfig.socials.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center whitespace-nowrap rounded-[30px] bg-facebook-pill py-[9px] pl-[17px] pr-[14px] font-sans text-[14px] font-bold leading-none tracking-[0.8px] text-white"
    >
      <FacebookIcon className="ml-[9px] h-[14px] w-[10px]" />
      <span>לפייסבוק</span>
    </a>
  );
}

/** Stand-in for Elementor's `eicon-menu-bar` / `eicon-close` pair, at 31px. */
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      className="h-[31px] w-[31px]"
    >
      <title>תפריט</title>
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}
