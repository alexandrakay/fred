'use client';
import { useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style, ...rest }: { children: React.ReactNode; delay?: number; as?: any; className?: string; style?: React.CSSProperties; [k: string]: any }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { threshold: .12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} className={'reveal ' + className} style={{ transitionDelay: delay + 'ms', ...style }} {...rest}>{children}</Tag>;
}
