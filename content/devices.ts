export type {
  Device,
  DeviceFeatures,
  DevicePrice,
  DeviceSpecs,
  ExtraDetail,
  ExtraDetailType,
} from '@/DB/devices';
export { devices } from '@/DB/devices';

import { devices } from '@/DB/devices';

export function getDeviceBySlug(slug: string) {
  return devices.find((device) => device.slug === slug);
}
