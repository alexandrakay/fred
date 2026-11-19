'use client';
import { useEffect, useState } from 'react';

const words = ['you.', 'your swing.', 'your body.', 'your goals.'];

// Each word rises in and the previous one lifts out; the key forces a remount so the CSS animation replays
export default function RotatingWord({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(n => (n + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className={'rotator-word ' + className} style={style}>{words[i]}</span>
    </span>
  );
}
