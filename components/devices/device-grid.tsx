'use client';

import { DeviceCard } from '@/components/cards/device-card';
import type { Device } from '@/content';
import { useShuffled } from '@/lib/use-shuffled';

export function DeviceGrid({ devices }: { devices: Device[] }) {
  const shuffled = useShuffled(devices);

  return (
    <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] tablet:grid-cols-2 desktop:grid-cols-3">
      {shuffled.map((device) => (
        <DeviceCard key={device.slug} device={device} />
      ))}
    </div>
  );
}
