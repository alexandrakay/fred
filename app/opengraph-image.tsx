import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Frederique Bruell Golf';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'Better golf starts with understanding', script: 'you.', kicker: 'Golf lessons in Melbourne, Florida' });
}
