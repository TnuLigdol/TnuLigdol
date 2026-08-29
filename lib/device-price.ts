import type { DevicePrice } from '@/content';

/** "₪200", or "₪220-300" for a range whose ends differ. Undefined when there's no confirmed price. */
export function formatPriceRange(price?: DevicePrice) {
  if (price === undefined) return undefined;
  if (typeof price === 'number') return `₪${price}`;
  if (price.min === price.max) return `₪${price.min}`;
  return `₪${price.min}-${price.max}`;
}
