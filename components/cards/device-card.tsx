import { Smartphone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FeatureBadge } from '@/components/devices/feature-badge';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { Device } from '@/content';
import { inputTypeLabel, listFeatures } from '@/lib/device-features';
import { formatPriceRange } from '@/lib/device-price';

const HIGHLIGHTED_FEATURES: (keyof Device['features'])[] = ['gps', 'sms'];

export function DeviceCard({ device }: { device: Device }) {
  const features = listFeatures(device.features).filter((feature) =>
    HIGHLIGHTED_FEATURES.includes(feature.key),
  );
  const inputLabel = inputTypeLabel(device.features.touchscreen);

  return (
    <Link href={`/devices/${device.slug}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-[20px] border border-card-border bg-white transition-shadow group-hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)]">
        <div className="relative flex h-[200px] w-full items-center justify-center bg-panel-gray">
          {device.image ? (
            <Image
              src={device.image}
              alt={device.name}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-contain p-5"
            />
          ) : (
            <Smartphone
              className="h-12 w-12 text-muted-foreground/40"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col px-[25px] pt-5 pb-[25px]">
          <div className="text-right font-sans text-[13px] text-ink/60">
            {device.brand}
          </div>

          <h3 className="text-right font-sans text-[19px] font-bold leading-[24px] text-green-darkest">
            {device.name}
          </h3>

          <div className="mt-2 text-right font-sans text-[17px] font-bold text-primary">
            {formatPriceRange(device.price) ?? 'מחיר מול הספק'}
          </div>

          {(features.length > 0 || inputLabel) && (
            <div className="mt-3 flex flex-wrap justify-end gap-2">
              {features.map((feature) => (
                <FeatureBadge
                  key={feature.key}
                  label={feature.label}
                  value={feature.value}
                  note={device.featureNotes?.[feature.key]}
                />
              ))}
              {inputLabel && (
                <span className="inline-flex items-center rounded-full bg-panel-gray px-3 py-1 font-sans text-[13px] leading-none text-ink">
                  {inputLabel}
                </span>
              )}
            </div>
          )}

          <div className="mt-4 flex flex-1 items-end justify-end">
            <span className="flex items-center font-sans text-[15px] font-bold text-green-darkest transition-colors group-hover:text-primary">
              <span>לפרטים נוספים</span>
              <ArrowLeftIcon className="mr-2" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
