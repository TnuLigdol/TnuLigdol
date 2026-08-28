import { Smartphone } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExtraDetailItem } from '@/components/devices/extra-detail-item';
import { FeatureBadge } from '@/components/devices/feature-badge';
import { FooterCTA } from '@/components/layout';
import { SupplierList } from '@/components/suppliers/supplier-list';
import { ArrowLeftIcon } from '@/components/ui/icons';
import { devices, getDeviceBySlug, getSuppliersForDevice } from '@/content';
import { inputTypeLabel, listFeatures } from '@/lib/device-features';
import { formatPriceRange } from '@/lib/device-price';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return devices.map((device) => ({ slug: device.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const device = getDeviceBySlug(slug);
  if (!device) return { title: 'מכשיר לא נמצא' };

  return {
    title: `${device.name} · תנו לגדול על שקט`,
    description: device.description,
  };
}

const SPEC_LABELS = {
  screenSize: 'מסך',
  camera: 'מצלמה',
  battery: 'סוללה',
  weight: 'משקל',
  memory: 'זיכרון',
} as const;

export default async function DevicePage({ params }: PageProps) {
  const { slug } = await params;
  const device = getDeviceBySlug(slug);
  if (!device) notFound();

  const features = listFeatures(device.features);
  const inputLabel = inputTypeLabel(device.features.touchscreen);
  const deviceSuppliers = getSuppliersForDevice(device.slug);
  const specEntries = (Object.keys(SPEC_LABELS) as (keyof typeof SPEC_LABELS)[])
    .filter((key) => device.specs[key])
    .map((key) => ({ label: SPEC_LABELS[key], value: device.specs[key] }));

  return (
    <>
      <section className="relative -mt-[92px] overflow-hidden bg-primary">
        <div className="mx-auto flex max-w-[900px] flex-col p-[10px]">
          <div className="mb-5 h-[72px]" />

          <div className="mb-9 flex justify-start">
            <Link
              href="/devices"
              className="inline-flex items-center rounded-[20px] bg-green-dark px-[25px] py-[12px] font-sans text-[18px] leading-none text-white transition-colors hover:bg-white hover:text-green-dark"
            >
              <ArrowLeftIcon className="ml-3 rotate-180" />
              <span>כל המכשירים</span>
            </Link>
          </div>

          <h1 className="mb-5 text-center font-sans text-[32px] font-normal leading-[1.1em] text-white desktop:text-[48px]">
            {device.name}
          </h1>

          <div className="h-[10px] desktop:h-[40px]" />
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[143%] -translate-x-1/2 fill-background"
        >
          <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
        </svg>
      </section>

      <div className="mx-auto max-w-[1000px] px-[10px]">
        <div className="flex flex-col-reverse gap-[10px] desktop:flex-row desktop:gap-[40px]">
          {/* Photo + gallery-ish frame — 42% */}
          <div className="w-full desktop:w-[42%]">
            <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-[20px] border border-card-border bg-panel-gray shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)] desktop:-mt-[40px] desktop:h-[380px]">
              {device.image ? (
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain p-8"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-ink/30">
                  <Smartphone className="h-16 w-16" aria-hidden="true" />
                  <span className="font-sans text-[13px]">
                    תמונה תתווסף בקרוב
                  </span>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap justify-center gap-2 desktop:justify-start">
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
          </div>

          {/* Details — 58% */}
          <div className="w-full pt-[20px] desktop:w-[58%] desktop:pt-[30px]">
            <div className="text-right font-sans text-[14px] text-ink/60">
              {device.brand}
            </div>

            <div className="mt-1 text-right font-sans text-[26px] font-bold text-primary">
              {formatPriceRange(device.price) ?? 'מחיר מול הספק'}
            </div>

            <p className="mt-4 text-right font-sans text-[16px] leading-[1.6em] text-ink">
              {device.description}
            </p>

            {device.colors.length > 0 && (
              <div className="mt-4 text-right font-sans text-[15px] text-ink">
                <span className="font-bold">צבעים: </span>
                {device.colors.join(', ')}
              </div>
            )}

            {specEntries.length > 0 && (
              <div className="mt-6 overflow-hidden rounded-[15px] border border-card-border">
                <table className="w-full border-collapse text-right font-sans text-[15px]">
                  <tbody>
                    {specEntries.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={i % 2 === 1 ? 'bg-panel-gray/40' : ''}
                      >
                        <th className="w-[35%] px-4 py-3 font-bold text-ink">
                          {spec.label}
                        </th>
                        <td className="px-4 py-3 text-ink">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {deviceSuppliers.length > 0 ? (
              <SupplierList
                suppliers={deviceSuppliers}
                deviceSlug={device.slug}
              />
            ) : (
              <p className="mt-6 font-sans text-[15px] text-ink/60">
                פרטי רכישה יתעדכנו בהמשך.
              </p>
            )}
          </div>
        </div>

        {device.extraDetails && device.extraDetails.length > 0 && (
          <div className="mt-[50px] rounded-[20px] border border-card-border p-[25px]">
            <h2 className="mb-4 text-right font-sans text-[22px] font-bold text-green-darkest">
              פרטים נוספים
            </h2>
            <div className="flex flex-wrap gap-3">
              {device.extraDetails.map((detail) => (
                <ExtraDetailItem key={detail.url} detail={detail} />
              ))}
            </div>
          </div>
        )}

        <div className="h-[60px]" />
      </div>

      <FooterCTA />
    </>
  );
}
