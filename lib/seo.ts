import type { Metadata } from 'next';

// Set NEXT_PUBLIC_SITE_URL once the real domain is live; until then Vercel's production URL is used
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
).replace(/\/$/, '');

export const SITE_NAME = 'Frederique Bruell Golf';

// Child openGraph/twitter objects replace the parent's rather than merging, so every page builds the full set here
export function pageMeta({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const full = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: SITE_NAME, type: 'website', locale: 'en_US' },
    twitter: { card: 'summary_large_image', title: full, description },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}
