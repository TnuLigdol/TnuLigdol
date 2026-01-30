/**
 * Single source of truth for the site URL.
 * Change DEFAULT_SITE_URL here to update the domain everywhere (layout, sitemap, robots).
 * Env vars SITE_URL / NEXT_PUBLIC_SITE_URL override at runtime.
 */
export const DEFAULT_SITE_URL = 'https://tnuligdol.co.il';

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    DEFAULT_SITE_URL
  );
}
