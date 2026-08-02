import { FacebookCircleIcon, StudioMarkIcon } from '@/components/ui/icons';
import { siteConfig } from '@/content/site';

/**
 * The bottom bar of Elementor footer template #467: the Facebook group link on
 * the right, the studio credit on the left.
 */
export function Footer() {
  return (
    <footer className="p-[30px]">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 p-[10px] tablet:flex-row tablet:justify-between tablet:gap-0">
        <a
          href={siteConfig.footer.facebook.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center font-sans text-[16px] leading-[1.5] text-primary transition-colors hover:text-primary-hover"
        >
          <FacebookCircleIcon className="ml-[9px] h-[19px] w-[19px]" />
          <span>{siteConfig.footer.facebook.text}</span>
        </a>

        <a
          href={siteConfig.footer.credit.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex items-center font-sans text-[16px] leading-[1.5] text-primary transition-colors hover:text-primary-hover"
        >
          <StudioMarkIcon className="ml-[9px] h-[19px] w-[19px]" />
          <span>{siteConfig.footer.credit.text}</span>
        </a>
      </div>
    </footer>
  );
}
