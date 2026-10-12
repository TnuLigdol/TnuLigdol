'use client';

import { Info } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * A small (i) button that reveals a note on click or hover/focus.
 *
 * Rendered through a portal to `document.body` and positioned from the
 * trigger's bounding rect — an ordinary absolutely-positioned tooltip gets
 * clipped by any ancestor with `overflow: hidden`/`auto` (e.g. a rounded
 * card, or the comparison table's horizontal-scroll wrapper), which a portal
 * sidesteps entirely.
 */
const TOOLTIP_WIDTH = 220;
const VIEWPORT_MARGIN = 8;

export function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Center on the button, then clamp so the fixed-width box never
      // extends past the viewport edge on narrow (mobile) screens.
      const idealLeft = rect.left + rect.width / 2 - TOOLTIP_WIDTH / 2;
      const maxLeft = Math.max(
        VIEWPORT_MARGIN,
        window.innerWidth - TOOLTIP_WIDTH - VIEWPORT_MARGIN,
      );
      const left = Math.min(Math.max(idealLeft, VIEWPORT_MARGIN), maxLeft);

      setCoords({ top: rect.top, left });
    }

    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open]);

  return (
    <span className="relative inline-flex">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-label="מידע נוסף"
        aria-expanded={open}
        className="inline-flex h-3.5 w-3.5 items-center justify-center text-current"
      >
        <Info className="h-3.5 w-3.5" aria-hidden="true" />
      </button>

      {open &&
        coords &&
        createPortal(
          <span
            role="tooltip"
            style={{ top: coords.top, left: coords.left, width: TOOLTIP_WIDTH }}
            className="fixed z-50 -translate-y-[calc(100%+8px)] rounded-[10px] bg-slate px-3 py-2 text-right font-sans text-[12px] leading-[1.4em] text-white shadow-lg"
          >
            {text}
          </span>,
          document.body,
        )}
    </span>
  );
}
