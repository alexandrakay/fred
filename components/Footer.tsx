import Link from 'next/link';
import { nav } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link href="/" className="logo"><span className="script">Frederique</span><small>BRUELL GOLF</small></Link>
        <nav aria-label="Footer" className="footer-nav">
          {nav.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          <Link href="/book">Book a Lesson</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Frederique Bruell Golf</span>
        <span>Melbourne · Merritt Island · Brevard &amp; Seminole Counties</span>
        <span style={{ display: 'flex', gap: 16 }}>
          <a href="https://www.instagram.com/frederiquebruell" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/search/top?q=Frederique%20Bruell%20Golf" target="_blank" rel="noreferrer">Facebook</a>
        </span>
      </div>
    </footer>
  );
}
