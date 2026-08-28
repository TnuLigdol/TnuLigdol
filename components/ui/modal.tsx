'use client';

import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

/** A centered popup over a dark backdrop — closes on backdrop click or Escape. */
export function Modal({ onClose, children }: ModalProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    // biome-ignore lint/a11y/noStaticElementInteractions: backdrop click-to-close; Escape and the close button below cover keyboard/screen-reader users
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="presentation"
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: onClick here only stops the backdrop's close-on-click from firing, it's not itself an interactive action */}
      <div
        className="relative max-h-[85vh] w-[calc(100vw-2rem)] max-w-[800px] overflow-auto rounded-[15px] bg-white p-2"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="סגירה"
          className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-md transition-colors hover:text-primary"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
