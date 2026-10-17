import { type DeviceRecord, devicesData } from '@/DB/devices';

export type { DeviceFeatures, DevicePrice, DeviceSpecs, ExtraDetail, ExtraDetailType } from '@/DB/devices';

export interface Device extends DeviceRecord {
  slug: string;
}

/** Devices in `DB/devices.ts`, keyed there by slug, as a list with the slug on each. */
export const devices: Device[] = Object.entries(devicesData).map(([slug, device]) => ({ slug, ...device }));

export function getDeviceBySlug(slug: string) {
  return devices.find((device) => device.slug === slug);
}
