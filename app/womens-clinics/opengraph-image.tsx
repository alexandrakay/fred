import { ogCard, ogSize, ogContentType } from '@/lib/og';

export const alt = "Women's Golf Clinics";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogCard({ title: 'Better golf, among', script: 'friends.', kicker: "Women's clinics for every skill level" });
}
