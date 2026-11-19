'use client';
import { usePathname } from 'next/navigation';

const homes = ['/', '/home-b', '/home-c'];

export default function MockNote() {
  const path = usePathname();
  if (homes.includes(path)) return null;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, padding: '7px 16px', fontSize: 12, color: 'var(--muted)', borderBottom: '1px solid rgba(23,64,42,.12)' }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-dot)' }} />
      Mock design · this page follows the Home 5a (Quiet Editorial) style
    </div>
  );
}
