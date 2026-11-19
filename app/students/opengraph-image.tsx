import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Student Success';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'Results beyond', script: 'the scorecard.', kicker: 'Student success stories' });
}
