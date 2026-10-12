'use client';

import { SupplierCard } from '@/components/cards/supplier-card';
import type { Supplier } from '@/content';
import { useShuffled } from '@/lib/use-shuffled';

export function SuppliersGrid({ suppliers }: { suppliers: Supplier[] }) {
  const shuffled = useShuffled(suppliers);

  return (
    <div className="grid grid-cols-1 gap-x-[25px] gap-y-[25px] tablet:grid-cols-2 desktop:grid-cols-3">
      {shuffled.map((supplier) => (
        <SupplierCard key={supplier.code} supplier={supplier} />
      ))}
    </div>
  );
}
