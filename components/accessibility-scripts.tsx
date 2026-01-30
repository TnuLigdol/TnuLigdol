// spell-checker:ignore negishim
'use client';

import { useEffect } from 'react';

export function AccessibilityScripts() {
  useEffect(() => {
    // Load accessibility scripts only after React has hydrated, so they don't
    // modify the DOM before hydration and cause a hydration mismatch (e.g.
    // negishim adds data-font-size / data-line-height to elements).
    const jq = document.createElement('script');
    jq.src = 'https://code.jquery.com/jquery-1.12.4.js';
    document.body.appendChild(jq);

    jq.onload = () => {
      window.accessibility_rtl = true;
      window.pixel_from_side = 20;
      window.pixel_from_start = 20;

      const a11y = document.createElement('script');
      a11y.src =
        'https://www.negishim.com/accessibility/accessibility_pro_group255.js';
      document.body.appendChild(a11y);
    };
  }, []);

  return null;
}
