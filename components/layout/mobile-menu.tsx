"use client";

import Link from "next/link";
import { useEffect } from "react";
import { siteConfig } from "@/content/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Toggle body class for scroll locking (CSS handles responsive behavior)
  useEffect(() => {
    if (open) {
      document.body.classList.add("mobile-menu-open");
      return () => document.body.classList.remove("mobile-menu-open");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-bold text-primary">
            {siteConfig.name}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-gray-700 hover:text-primary"
            aria-label="סגור תפריט"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mr-4 border-r border-gray-200">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 hover:text-primary rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href={siteConfig.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block py-3 px-4 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-lg transition-colors"
              >
                קבוצת הפייסבוק שלנו
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
