import { Fragment } from 'react';

/**
 * Renders `**bold**` segments of a copy string as `<b>`, leaving the rest as
 * plain text. The original site marked these up by hand inside Elementor's
 * text editor; keeping the markers in the content files is the least
 * surprising way to carry that through.
 */
export function BoldText({ children }: { children: string }) {
  const parts = children.split(/\*\*([\s\S]+?)\*\*/g);

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: parts are positional
          <b key={index}>{part}</b>
        ) : (
          // biome-ignore lint/suspicious/noArrayIndexKey: parts are positional
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
