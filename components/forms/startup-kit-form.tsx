import { ArrowLeftIcon } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

const STARTUP_KIT_PDF_URL = encodeURI('/ערכת התנעה.pdf');

interface StartupKitFormProps {
  /** Button colour and layout differ between placements. */
  variant: 'kickstart' | 'footer';
  className?: string;
}

export function StartupKitForm({ variant, className }: StartupKitFormProps) {
  const isFooter = variant === 'footer';

  return (
    <div
      className={cn(
        'flex w-full justify-center',
        isFooter && 'tablet:justify-stretch',
        className,
      )}
    >
      <a
        href={STARTUP_KIT_PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex min-h-[47px] items-center justify-center rounded-[4px] font-sans text-[18px] font-bold leading-none tracking-[0.6px] text-white tablet:text-[20px]',
          isFooter
            ? 'bg-green-dark px-[30px] py-[15px] tablet:w-full'
            : 'bg-primary px-6 py-[10px]',
        )}
      >
        <span>הורידו את ערכת ההתנעה</span>
        <ArrowLeftIcon className="mr-[11px]" />
      </a>
    </div>
  );
}
