/**
 * An X with one extra short stroke off its bottom-left corner — read the
 * long "top-right → bottom-left" diagonal together with that short stroke
 * and it traces a checkmark too, for a feature that's neither a clean yes
 * nor no.
 */
export function PartialStatusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 6 6 18" />

      <path d="m10 6 8 8" />
      {/* <path d="m6 6 12 12" /> */}
      <path d="M6 18 2 14" />
    </svg>
  );
}
