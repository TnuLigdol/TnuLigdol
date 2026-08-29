'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/ui/icons';
import type { Supplier } from '@/content';
import { useShuffled } from '@/lib/use-shuffled';

interface SupplierListProps {
  suppliers: Supplier[];
  deviceSlug: string;
}

/** Suppliers selling one device — each row links to the supplier's own page and to buying from them directly. */
export function SupplierList({ suppliers, deviceSlug }: SupplierListProps) {
  const shuffled = useShuffled(suppliers);

  return (
    <div className="mt-6 flex flex-col gap-3">
      {shuffled.map((supplier) => (
        <div
          key={supplier.code}
          className="flex flex-wrap items-center justify-between gap-3 rounded-[15px] border border-card-border px-5 py-4"
        >
          <span className="font-sans text-[15px] font-bold text-green-darkest">
            {supplier.name}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={`/suppliers/${supplier.code}`}
              className="inline-flex items-center justify-center rounded-[50px] border border-card-border px-[20px] py-[12px] font-sans text-[15px] font-bold leading-none text-green-darkest transition-colors hover:border-primary hover:text-primary"
            >
              עמוד הספק
            </Link>
            <a
              href={supplier.devices[deviceSlug]}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[50px] bg-primary px-[20px] py-[12px] font-sans text-[15px] font-bold leading-none text-white transition-colors hover:bg-primary-hover"
            >
              <span>לרכישה</span>
              <ArrowLeftIcon className="mr-[10px]" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
