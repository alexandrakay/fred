import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'About Frederique';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'A competitor who coaches', script: 'the person.', kicker: 'About Frederique Bruell' });
}
