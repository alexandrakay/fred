import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Golf Insights';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'Notes from the', script: 'lesson tee.', kicker: 'Golf instruction videos and drills' });
}
