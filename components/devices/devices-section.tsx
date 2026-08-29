'use client';

import { DeviceCard } from '@/components/cards/device-card';
import { ComparisonTable } from '@/components/devices/comparison-table';
import { MobileComparisonAccordion } from '@/components/devices/mobile-comparison-accordion';
import type { Device } from '@/content';
import { useShuffled } from '@/lib/use-shuffled';

/** The comparison table + device grid on /devices, sharing one shuffled order. */
export function DevicesSection({ devices }: { devices: Device[] }) {
  const shuffled = useShuffled(devices);

  return (
    <>
      <div className="tablet:hidden">
        <MobileComparisonAccordion devices={shuffled} />
      </div>
      <div className="hidden tablet:block">
        <h2 className="mb-[15px] text-right font-sans text-[22px] font-bold text-green-darkest">
          השוואה מהירה
        </h2>
        <ComparisonTable devices={shuffled} />
      </div>

      <div className="h-[45px]" />

      <h2 className="mb-[20px] text-right font-sans text-[22px] font-bold text-green-darkest">
        כל המכשירים
      </h2>
      <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] tablet:grid-cols-2 desktop:grid-cols-3">
        {shuffled.map((device) => (
          <DeviceCard key={device.slug} device={device} />
        ))}
      </div>
    </>
  );
}
