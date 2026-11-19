import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import RotatingWord from '@/components/RotatingWord';
import Placeholder from '@/components/Placeholder';
import { credentials, programs, msQuote, manifesto, clinics } from '@/lib/content';

export const metadata = pageMeta({ title: 'Golf Lessons in Melbourne, FL', description: 'Design version 5c of the Frederique Bruell Golf home page.', path: '/', noindex: true });

const bod: React.CSSProperties = { fontFamily: 'var(--font-bodoni)', fontWeight: 400 };
const all: React.CSSProperties = { fontFamily: 'var(--font-allura)', fontWeight: 400 };
const muted = '#46554b';

export default function HomeC() {
  return (
    <div style={{ background: '#f7f3ea', fontFamily: 'var(--font-inst)', color: 'var(--forest)', paddingTop: 10 }}>
      <section style={{ margin: '0 20px', position: 'relative', height: 'min(84vh,780px)', minHeight: 600, borderRadius: 12, overflow: 'hidden' }}>
        <Placeholder dark label="FULL-BLEED PHOTO · FREDERIQUE ON THE COURSE" style={{ position: 'absolute', inset: 0, alignItems: 'flex-start', justifyContent: 'flex-end' }} />
        <Reveal style={{ position: 'absolute', left: 40, bottom: 40, width: 'min(560px,calc(100% - 80px))', background: '#f7f3ea', borderRadius: 8, padding: 44, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ ...bod, fontSize: 11, letterSpacing: '.36em' }}>MELBOURNE · FLORIDA</span>
          <h1 style={{ ...bod, margin: 0, fontSize: 'clamp(40px,4.4vw,64px)', lineHeight: 1.02 }}>Better golf starts with understanding <RotatingWord className="hl" style={{ ...all, fontSize: '1.35em', lineHeight: .8 }} /></h1>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}><Link href="/book" className="btn">Book a Lesson</Link><Link href="/coaching" className="link">Explore coaching →</Link></div>
        </Reveal>
      </section>
      <Reveal style={{ margin: '96px var(--pad) 0', display: 'flex', justifyContent: 'center', gap: 'clamp(24px,5vw,80px)', flexWrap: 'wrap', textAlign: 'center' }}>
        {credentials.map(c => <div key={c.big} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ ...bod, fontSize: 40, fontStyle: c.italic ? 'italic' : 'normal' }}>{c.big}</span><span style={{ fontSize: 13, color: muted }}>{c.small}</span></div>)}
      </Reveal>
      <section style={{ margin: '160px auto 0', maxWidth: 980, padding: '0 var(--pad)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 48 }}>
        <span style={{ ...all, fontSize: 56, lineHeight: .8 }} className="accent-ink">the philosophy</span>
        <Reveal as="p" style={{ ...bod, margin: 0, fontSize: 'clamp(32px,3.6vw,54px)', lineHeight: 1.15 }}>{manifesto}</Reveal>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>{['Individualized', 'Repeatable', 'Sustainable', 'Confidence-building'].map(t => <span key={t} style={{ border: '1px solid var(--forest)', borderRadius: 999, padding: '9px 18px', fontSize: 14 }}>{t}</span>)}</div>
      </section>
      <section style={{ marginTop: 160, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ padding: '0 var(--pad)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><h2 style={{ ...bod, margin: 0, fontSize: 'clamp(40px,4vw,60px)' }}>Coaching</h2><span style={{ fontSize: 13, color: muted }}>Scroll →</span></div>
        <div style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollPaddingInline: 'var(--pad)', padding: '0 var(--pad) 12px' }}>
          {programs.map(p => <Link key={p.id} href={'/coaching#' + p.id} style={{ flex: 'none', width: 320, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 14 }}><div className="ph" style={{ aspectRatio: '4/5', borderRadius: 8 }}>{p.italic && <span className="tag">Clinics</span>}</div><span style={{ ...bod, fontSize: 26, fontStyle: p.italic ? 'italic' : 'normal' }}>{p.name}</span><span style={{ fontSize: 14, color: muted }}>{p.blurb}</span></Link>)}
        </div>
      </section>
      <section style={{ margin: '160px var(--pad) 0', background: 'var(--forest)', color: '#f7f3ea', borderRadius: 12, padding: '80px 56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 56, alignItems: 'center' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 24 }}><span style={{ ...all, fontSize: 44, lineHeight: .8, color: 'var(--accent-soft)' }}>in their words</span><p style={{ ...bod, margin: 0, fontStyle: 'italic', fontSize: 'clamp(28px,2.8vw,42px)', lineHeight: 1.2 }}>“{msQuote}”</p><span style={{ fontSize: 14, opacity: .75 }}>Adult student · Brevard County · draft quote</span></Reveal>
        <Reveal delay={120}><Link href="/students" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}><Placeholder dark label="PHOTO · ZOOEY" style={{ aspectRatio: '4/3', borderRadius: 8, border: '1px solid rgba(247,243,234,.2)' }} /><span style={{ ...bod, fontSize: 24 }}>Zooey made Viera High's top team →</span></Link></Reveal>
      </section>
      <section style={{ margin: '160px var(--pad) 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))', gap: 56, alignItems: 'center' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h2 style={{ margin: 0, display: 'flex', flexDirection: 'column' }}><span style={{ ...bod, fontSize: 'clamp(40px,4vw,60px)', letterSpacing: '.18em', lineHeight: 1 }}>SOCIAL</span><span className="accent-ink" style={{ ...all, fontSize: 'clamp(64px,6vw,96px)', lineHeight: .7, marginLeft: 48 }}>gathering</span></h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: muted, maxWidth: 440 }}>Women's clinics for every skill level. Better golf, real friendships, and confidence for the next corporate outing.</p>
          {clinics.slice(0, 2).map(c => <Link key={c.title} href="/womens-clinics" style={{ display: 'grid', gridTemplateColumns: '70px minmax(0,1fr) auto', gap: 16, alignItems: 'center', padding: '16px 20px', borderRadius: 8, background: '#efe9dc' }}><span style={{ ...bod, fontSize: 22, lineHeight: 1.1 }}>{c.m}<br /><em>{c.d}</em></span><span style={{ fontWeight: 600 }}>{c.title} <span style={{ fontWeight: 400, color: muted }}>· sample</span></span><span className="accent-ink">→</span></Link>)}
        </Reveal>
        <Reveal delay={120}><Placeholder label="PHOTO · CLINIC ON THE GREEN" style={{ aspectRatio: '4/5', borderRadius: 8 }} /></Reveal>
      </section>
      <section style={{ margin: '180px var(--pad) 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 28 }}>
        <span style={{ ...bod, fontSize: 12, letterSpacing: '.42em' }}>WELCOME TO</span>
        <h2 style={{ ...all, margin: 0, fontSize: 'clamp(90px,11vw,180px)', lineHeight: .75 }}>your better game</h2>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}><Link href="/book" className="btn">Book a Lesson</Link><Link href="/book" className="link">Ask a question <span className="accent-ink">→</span></Link></div>
      </section>
    </div>
  );
}
