import { Fragment } from 'react';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders `[label](url)` segments of a copy string as external links, leaving
 * the rest as plain text — the one inline link the original hand-wrote into
 * an Elementor text-editor widget (Ofri Gonen's bio, linking to her studio's
 * site) is carried through this way instead of being hardcoded in a component.
 */
export function LinkText({ children }: { children: string }) {
  const parts = children.split(LINK_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        const key = `${index}-${part.slice(0, 12)}`;
        if (index % 3 === 1) {
          const href = parts[index + 1];
          return (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover"
            >
              {part}
            </a>
          );
        }
        if (index % 3 === 2) return null;
        return <Fragment key={key}>{part}</Fragment>;
      })}
    </>
  );
}
