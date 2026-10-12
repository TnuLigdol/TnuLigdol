import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { Supplier } from '@/content';

export function SupplierCard({ supplier }: { supplier: Supplier }) {
  const deviceCount = Object.keys(supplier.devices).length;

  return (
    <Link href={`/suppliers/${supplier.code}`} className="group block h-full">
      <article className="flex h-full flex-col justify-between rounded-[20px] border border-card-border bg-white p-[25px] transition-shadow group-hover:shadow-[0px_0px_30px_-4px_rgba(12,51,13,0.25)]">
        <div>
          <h3 className="text-right font-sans text-[19px] font-bold text-green-darkest">
            {supplier.name}
          </h3>
          {supplier.description && (
            <p className="mt-2 text-right font-sans text-[15px] leading-[1.5em] text-ink">
              {supplier.description}
            </p>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-sans text-[13px] text-ink/60">
            {deviceCount} מכשירים
          </span>
          <span className="flex items-center font-sans text-[15px] font-bold text-green-darkest transition-colors group-hover:text-primary">
            <span>לצפייה</span>
            <ArrowLeftIcon className="mr-2" />
          </span>
        </div>
      </article>
    </Link>
  );
}
