import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = 'Book a Lesson';
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: "Let's talk about", script: 'your game.', kicker: 'Book a lesson in Brevard & Seminole Counties' });
}
