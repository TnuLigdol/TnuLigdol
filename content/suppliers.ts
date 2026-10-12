import { suppliersData } from '@/DB/suppliers';

export interface Supplier {
  code: string;
  name: string;
  url: string;
  description?: string;
  /** Device slug → this supplier's product page URL for that device. */
  devices: Record<string, string>;
}

/**
 * Suppliers for the devices on /devices, keyed by supplier code with a
 * secondary key per device slug (see `DB/suppliers.ts`) so the same supplier
 * can carry a different product URL per device — and a device can be sold by
 * more than one supplier.
 */
export const suppliers: Supplier[] = Object.entries(suppliersData).map(
  ([code, supplier]) => ({ code, ...supplier }),
);

export function getSupplierByCode(code: string) {
  return suppliers.find((supplier) => supplier.code === code);
}

export function getSuppliersForDevice(deviceSlug: string) {
  return suppliers.filter((supplier) => deviceSlug in supplier.devices);
}
