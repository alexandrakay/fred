import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import RotatingWord from '@/components/RotatingWord';
import { credentials, principles, programs, msQuote } from '@/lib/content';

export const metadata = pageMeta({ title: 'Golf Lessons in Melbourne, FL', description: 'Design version 5b of the Frederique Bruell Golf home page.', path: '/', noindex: true });

const cream = '#f2ede1', bg = '#10291c', panel = '#173a28', dim = 'rgba(242,237,225,.75)', line = 'rgba(242,237,225,.2)';
const cond: React.CSSProperties = { fontFamily: 'var(--font-condensed)', fontWeight: 700, textTransform: 'uppercase' };
const news: React.CSSProperties = { fontFamily: 'var(--font-news)', fontStyle: 'italic', fontWeight: 400, textTransform: 'none', color: 'var(--accent-soft)' };
const ph: React.CSSProperties = { borderRadius: 6, background: panel + ' repeating-linear-gradient(135deg,rgba(242,237,225,.05) 0 2px,transparent 2px 12px)', display: 'flex', alignItems: 'flex-end', padding: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: dim };
const Label = ({ n }: { n: string }) => <span className="mono" style={{ fontSize: 11, color: 'var(--accent-soft)', paddingTop: 8 }}>{n}</span>;
const Row = ({ n, children }: { n: string; children: React.ReactNode }) => <section style={{ margin: '140px var(--pad) 0', display: 'grid', gridTemplateColumns: 'minmax(0,clamp(110px,14vw,220px)) minmax(0,1fr)', gap: 48 }}><Label n={n} />{children}</section>;

export default function HomeB() {
  return (
    <div style={{ background: bg, color: cream, fontFamily: 'var(--font-inst)', paddingBottom: 100 }}>
      <section style={{ padding: '96px var(--pad) 0', display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'flex-end' }}>
          <Reveal as="h1" style={{ ...cond, margin: 0, fontSize: 'clamp(80px,9.6vw,164px)', lineHeight: .86, flex: '1 1 640px' }}>Better golf starts with understanding <RotatingWord style={{ ...news, letterSpacing: '-.02em' }} /></Reveal>
          <Reveal delay={120} style={{ flex: '0 1 320px', display: 'flex', flexDirection: 'column', gap: 22, paddingBottom: 14 }}><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: dim }}>Golf instruction in Melbourne, Florida for juniors, adults, competitors, and women at every level.</p><Link href="/book" className="btn light" style={{ alignSelf: 'flex-start' }}>Book a Lesson</Link></Reveal>
        </div>
        <Reveal delay={120} style={{ ...ph, height: 'min(70vh,640px)' }}>WIDE PHOTO · FREDERIQUE COACHING AT GOLDEN HOUR</Reveal>
      </section>
      <Row n="01 — RECORD"><Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', borderTop: '1px solid ' + line }}>{credentials.map(c => <div key={c.big} style={{ padding: '24px 20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}><span style={c.italic ? { fontFamily: 'var(--font-news)', fontStyle: 'italic', fontSize: 54, lineHeight: .9 } : { ...cond, fontSize: 56, lineHeight: .9 }}>{c.big === 'Division I' ? 'D-I' : c.big === 'Sean Foley' ? 'Foley' : c.big === '8 years' ? '8 YRS' : c.big}</span><span style={{ fontSize: 14, color: dim }}>{c.small}</span></div>)}</Reveal></Row>
      <Row n="02 — PHILOSOPHY"><div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}><Reveal as="p" style={{ margin: 0, fontFamily: 'var(--font-news)', fontSize: 'clamp(34px,3.6vw,56px)', lineHeight: 1.12 }}>Great golf instruction isn't about making every golfer swing the same way. It's about <em style={{ color: 'var(--accent-soft)' }}>understanding the golfer.</em></Reveal><Reveal delay={120} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 28 }}>{principles.map(p => <div key={p.title}><h3 style={{ ...cond, fontWeight: 600, margin: '0 0 8px', fontSize: 22, letterSpacing: '.06em' }}>{p.title}</h3><p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: dim }}>{p.body}</p></div>)}</Reveal></div></Row>
      <Row n="03 — COACHING"><Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', borderTop: '1px solid ' + line, borderLeft: '1px solid ' + line }}>{programs.map(p => <Link key={p.id} href={'/coaching#' + p.id} style={{ padding: 28, minHeight: 200, borderRight: '1px solid ' + line, borderBottom: '1px solid ' + line, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}><span className="mono" style={{ fontSize: 11, color: p.italic ? 'var(--accent-soft)' : dim }}>{p.blurb.toUpperCase()}</span><span style={p.italic ? { fontFamily: 'var(--font-news)', fontStyle: 'italic', fontSize: 38, lineHeight: .95 } : { ...cond, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: .95 }}>{p.name}</span></Link>)}</Reveal></Row>
      <Row n="04 — STUDENTS"><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 40, alignItems: 'end' }}><Reveal style={{ display: 'flex', flexDirection: 'column', gap: 22 }}><p style={{ margin: 0, fontFamily: 'var(--font-news)', fontSize: 'clamp(28px,2.8vw,42px)', lineHeight: 1.18 }}>“{msQuote}”</p><span style={{ fontSize: 14, color: dim }}>Adult student · Brevard County · draft quote</span></Reveal><Reveal delay={120}><Link href="/students" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><div style={{ ...ph, aspectRatio: '4/3' }}>PHOTO · ZOOEY</div><span style={{ ...cond, fontWeight: 600, fontSize: 24 }}>Zooey made Viera High's top team <span style={{ color: 'var(--accent-soft)' }}>→</span></span></Link></Reveal></div></Row>
      <Row n="05 — WOMEN'S CLINICS"><Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 40, alignItems: 'center' }}><div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}><h2 style={{ ...cond, margin: 0, fontSize: 'clamp(56px,5.6vw,92px)', lineHeight: .86 }}>Better golf. <span style={news}>Good company.</span></h2><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: dim, maxWidth: 420 }}>Clinics for every level. Improve your game, make friends, and feel ready for the next corporate outing.</p><Link href="/womens-clinics" style={{ alignSelf: 'flex-start', border: '1px solid var(--accent-soft)', color: 'var(--accent-soft)', padding: '14px 24px', borderRadius: 999, fontWeight: 600 }}>Upcoming clinics</Link></div><div style={{ ...ph, aspectRatio: '4/3' }}>PHOTO · CLINIC</div></Reveal></Row>
      <section style={{ margin: '160px var(--pad) 0', borderTop: '1px solid ' + line, paddingTop: 72, display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 40, flexWrap: 'wrap' }}>
        <h2 style={{ ...cond, margin: 0, fontSize: 'clamp(72px,8vw,136px)', lineHeight: .85 }}>Let's <span style={news}>play.</span></h2>
        <div style={{ display: 'flex', gap: 12 }}><Link href="/book" className="btn light">Book a Lesson</Link><Link href="/book" style={{ border: '1px solid rgba(242,237,225,.5)', padding: '17px 30px', borderRadius: 999, fontWeight: 600 }}>Ask a Question</Link></div>
      </section>
    </div>
  );
}
