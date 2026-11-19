import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Coaching & Instruction';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'Coaching built around', script: 'the golfer.', kicker: 'Private, junior, adult, and group coaching' });
}
