'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav } from '@/lib/content';

const homes = [{ id: '5a', href: '/' }, { id: '5b', href: '/home-b' }, { id: '5c', href: '/home-c' }];

export default function Header() {
  const path = usePathname();
  const onHome = homes.some(h => h.href === path);
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="header">
        <Link href="/" className="logo"><span className="script">Frederique</span><small>BRUELL GOLF</small></Link>
        <nav className="nav" aria-label="Main">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" className={onHome ? 'active' : ''}>Home</Link>
            <span className="home-chips">
              {homes.map(h => <Link key={h.id} href={h.href} className={path === h.href ? 'active' : ''} title={'Home version ' + h.id}>{h.id}</Link>)}
            </span>
          </span>
          {nav.map(n => <Link key={n.href} href={n.href} className={path === n.href ? 'active' : ''}>{n.label}</Link>)}
        </nav>
        <div className="header-end">
          <Link href="/book" className="book-link"><span className="dot" />Book a Lesson</Link>
          <button className="menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="bars" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
        <div id="mobile-menu" className="mobile-menu" data-open={open} inert={!open}>
          <nav aria-label="Mobile">
            {[{ label: 'Home', href: '/' }, ...nav, { label: 'Book a Lesson', href: '/book' }].map((n, i) => (
              <Link key={n.href} href={n.href} style={{ transitionDelay: open ? 80 + i * 45 + 'ms' : '0ms' }} className={path === n.href ? 'active' : ''}>{n.label}</Link>
            ))}
          </nav>
          <div className="mobile-homes">
            <span>Home versions</span>
            {homes.map(h => <Link key={h.id} href={h.href} className={path === h.href ? 'active' : ''}>{h.id}</Link>)}
          </div>
        </div>
    </>
  );
}
