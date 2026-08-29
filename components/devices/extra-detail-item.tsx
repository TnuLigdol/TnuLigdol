'use client';

import { ImageIcon, Link2, Video as VideoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Modal } from '@/components/ui/modal';
import type { ExtraDetail } from '@/content';

const BUTTON_CLASS =
  'inline-flex items-center gap-2 rounded-[30px] border border-card-border px-5 py-[13px] font-sans text-[15px] text-ink transition-colors hover:border-primary hover:text-primary';

function TypeIcon({ type }: { type: ExtraDetail['type'] }) {
  if (type === 'video') {
    return <VideoIcon className="h-4 w-4 shrink-0" aria-hidden="true" />;
  }
  if (type === 'image') {
    return <ImageIcon className="h-4 w-4 shrink-0" aria-hidden="true" />;
  }
  return <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />;
}

/** One supplementary link/media item on a device page — icon signals the type; video/image open in a popup. */
export function ExtraDetailItem({ detail }: { detail: ExtraDetail }) {
  const [open, setOpen] = useState(false);

  if (detail.type === 'video' || detail.type === 'image') {
    return (
      <>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={BUTTON_CLASS}
        >
          <TypeIcon type={detail.type} />
          {detail.description}
        </button>

        {open && (
          <Modal onClose={() => setOpen(false)}>
            {detail.type === 'video' ? (
              <video
                controls
                autoPlay
                className="max-h-[70vh] w-full rounded-[10px]"
                src={detail.url}
              >
                <track kind="captions" />
              </video>
            ) : (
              <div className="relative h-[60vh] w-full">
                <Image
                  src={detail.url}
                  alt={detail.description}
                  fill
                  sizes="800px"
                  className="object-contain"
                />
              </div>
            )}
          </Modal>
        )}
      </>
    );
  }

  const isExternal = detail.url.startsWith('http');
  if (isExternal) {
    return (
      <a
        href={detail.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={BUTTON_CLASS}
      >
        <TypeIcon type={detail.type} />
        {detail.description}
      </a>
    );
  }

  return (
    <Link href={detail.url} className={BUTTON_CLASS}>
      <TypeIcon type={detail.type} />
      {detail.description}
    </Link>
  );
}
