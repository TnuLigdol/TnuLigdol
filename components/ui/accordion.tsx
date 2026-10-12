'use client';

import { useState } from 'react';
import { LinkText } from '@/components/ui/link-text';

interface AccordionItem {
  question: string;
  /** Blank lines separate paragraphs; `[label](url)` becomes a link. */
  answer: string;
}

/**
 * Elementor's accordion widget: one panel open at a time, chevron flips on the
 * active row. Answers are plain text with blank-line paragraph breaks.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div key={item.question} className="border-b border-card-border">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-[15px] text-right font-sans text-[18px] leading-[1.4em] text-green-darkest transition-colors hover:text-primary"
              >
                <span>{item.question}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className={`size-4 shrink-0 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>

            {isOpen && (
              <section
                id={panelId}
                aria-labelledby={buttonId}
                className="pb-[15px] text-right font-sans text-[17px] font-light leading-[1.6em] text-ink"
              >
                {item.answer.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="mt-0 mb-[1em]">
                    <LinkText>{paragraph}</LinkText>
                  </p>
                ))}
              </section>
            )}
          </div>
        );
      })}
    </div>
  );
}
