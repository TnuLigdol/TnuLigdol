import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DeviceGrid } from '@/components/devices/device-grid';
import { PageHero } from '@/components/layout';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { devices, getSupplierByCode, suppliers } from '@/content';

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateStaticParams() {
  return suppliers.map((supplier) => ({ code: supplier.code }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } = await params;
  const supplier = getSupplierByCode(code);
  if (!supplier) return { title: 'ספק לא נמצא' };

  return {
    title: `${supplier.name} · תנו לגדול על שקט`,
    description: supplier.description,
  };
}

export default async function SupplierPage({ params }: PageProps) {
  const { code } = await params;
  const supplier = getSupplierByCode(code);
  if (!supplier) notFound();

  const supplierDevices = devices.filter(
    (device) => device.slug in supplier.devices,
  );

  return (
    <>
      <PageHero title={supplier.name} />

      <div className="mx-auto max-w-[1140px] p-[10px]">
        <div className="mx-auto max-w-[760px] text-center">
          {supplier.description && (
            <p className="font-sans text-[16px] leading-[1.5em] text-ink">
              {supplier.description}
            </p>
          )}

          <a
            href={supplier.url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="mt-4 inline-flex items-center font-sans text-[15px] font-bold text-primary hover:text-primary-hover"
          >
            <span>לאתר הספק</span>
            <ArrowLeftIcon className="mr-2" />
          </a>
        </div>

        <div className="h-[40px]" />

        <h2 className="mb-[20px] text-right font-sans text-[22px] font-bold text-green-darkest">
          מכשירים אצל {supplier.name}
        </h2>

        {supplierDevices.length > 0 ? (
          <DeviceGrid devices={supplierDevices} />
        ) : (
          <p className="text-center font-sans text-[15px] text-ink/60">
            לא נמצאו מכשירים אצל ספק זה כרגע.
          </p>
        )}

        <div className="mt-[35px] flex justify-center">
          <Link
            href="/devices"
            className="rounded-[30px] bg-slate px-5 py-[13px] font-sans text-[15px] text-white transition-colors hover:bg-green-hover"
          >
            לכל המכשירים
          </Link>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
}
