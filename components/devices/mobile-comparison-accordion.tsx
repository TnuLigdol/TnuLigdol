'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ComparisonTable } from '@/components/devices/comparison-table';
import type { Device } from '@/content';
import { cn } from '@/lib/utils';

/**
 * Mobile-only collapsible wrapper around the comparison table — closed by
 * default so it doesn't push the device grid below the fold, but the header
 * always states what's inside so collapsing it doesn't hide that it exists.
 * Tablet/desktop render the table open via a separate, non-collapsible block.
 */
export function MobileComparisonAccordion({ devices }: { devices: Device[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-b border-card-border">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-4 text-right"
      >
        <span>
          <span className="block font-sans text-[18px] font-bold text-green-darkest">
            השוואה מהירה
          </span>
          <span className="mt-1 block font-sans text-[13px] text-ink/60">
            {devices.length} מכשירים · מחיר, מסך, מצלמה, GPS, SMS ומסך מגע
          </span>
        </span>
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 text-ink/60 transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="pb-4">
          <p className="mb-3 text-right font-sans text-[13px] text-ink/50">
            גללו בטבלה לצדדים לצפייה בכל הנתונים
          </p>
          <ComparisonTable devices={devices} />
        </div>
      )}
    </div>
  );
}
