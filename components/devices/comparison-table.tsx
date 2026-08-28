import { Check, Smartphone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Device } from '@/content';
import { inputTypeLabel } from '@/lib/device-features';
import { formatPriceRange } from '@/lib/device-price';
import { cn } from '@/lib/utils';
import { InfoTooltip } from './info-tooltip';
import { PartialStatusIcon } from './partial-status-icon';

function FeatureCell({
  value,
  note,
}: {
  value?: boolean | 'partial';
  note?: string;
}) {
  if (value === undefined) {
    return <span className="text-ink/30">–</span>;
  }
  return (
    <span className="inline-flex items-center justify-center gap-1">
      {value === true && (
        <Check className="h-4 w-4 text-primary" aria-label="כן" />
      )}
      {value === false && <X className="h-4 w-4 text-ink/30" aria-label="לא" />}
      {value === 'partial' && (
        <PartialStatusIcon
          className="h-4 w-4 text-accent-orange"
          aria-label="חלקי"
        />
      )}
      {note && <InfoTooltip text={note} />}
    </span>
  );
}

const columns = [
  { key: 'screenSize', label: 'מסך' },
  { key: 'camera', label: 'מצלמה' },
] as const;

const featureColumns = [
  { key: 'gps', label: 'GPS' },
  { key: 'sms', label: 'SMS' },
] as const;

export function ComparisonTable({ devices }: { devices: Device[] }) {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-card-border">
      <table className="w-full min-w-[720px] border-collapse text-right font-sans text-[14px]">
        <thead>
          <tr className="border-b border-card-border bg-panel-gray text-ink">
            <th className="px-4 py-3 font-bold">דגם</th>
            <th className="px-4 py-3 font-bold">מחיר</th>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 font-bold">
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 font-bold">מסך מגע</th>
            {featureColumns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-center font-bold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.map((device, i) => (
            <tr
              key={device.slug}
              className={cn(
                'border-b border-card-border last:border-b-0',
                i % 2 === 1 && 'bg-panel-gray/40',
              )}
            >
              <td className="px-4 py-3">
                <Link
                  href={`/devices/${device.slug}`}
                  className="flex items-center gap-3 font-bold text-green-darkest hover:text-primary"
                >
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-panel-green">
                    {device.image ? (
                      <Image
                        src={device.image}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-contain p-1"
                      />
                    ) : (
                      <Smartphone className="h-4 w-4 text-green-darkest/40" />
                    )}
                  </span>
                  {device.name}
                </Link>
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-ink">
                {formatPriceRange(device.price) ?? 'מול הספק'}
              </td>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-ink">
                  {device.specs[col.key] ?? '–'}
                </td>
              ))}
              <td className="px-4 py-3 text-ink">
                {inputTypeLabel(device.features.touchscreen) ?? '–'}
              </td>
              {featureColumns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-center">
                  <FeatureCell
                    value={device.features[col.key]}
                    note={device.featureNotes?.[col.key]}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
