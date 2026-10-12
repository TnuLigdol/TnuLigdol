'use client';

import { useEffect, useState } from 'react';

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Returns `items` in their original order for the first render, then a
 * shuffled copy once mounted. The site is statically exported, so
 * randomizing during render would bake one frozen order into the prerendered
 * HTML (and mismatch on hydration if it ran again client-side) — shuffling
 * in an effect keeps the server/first-paint markup deterministic and only
 * reorders after the client takes over.
 */
export function useShuffled<T>(items: T[]): T[] {
  const [ordered, setOrdered] = useState(items);

  useEffect(() => {
    setOrdered(shuffle(items));
  }, [items]);

  return ordered;
}
