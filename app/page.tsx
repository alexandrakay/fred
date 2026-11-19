import Link from 'next/link';
import Reveal from '@/components/Reveal';
import RotatingWord from '@/components/RotatingWord';
import Placeholder from '@/components/Placeholder';
import VideoButton from '@/components/VideoButton';
import { credentials, principles, programs, msQuote } from '@/lib/content';

export default function HomeA() {
  return (
    <>
      <section className="wrap split" style={{ paddingTop: 24 }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 36, paddingBottom: 12 }}>
          <span className="eyebrow">Golf instruction · Melbourne, FL</span>
          <h1 className="h1">Better golf starts with understanding<br /><RotatingWord className="script hl hl-script" /></h1>
          <p className="lead" style={{ maxWidth: 400 }}>Individualized coaching from a former Division I captain and Ohio State Amateur Champion.</p>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}><Link href="/book" className="btn">Book a Lesson</Link><Link href="/coaching" className="link">Explore coaching →</Link></div>
        </Reveal>
        <Reveal delay={120}><Placeholder label="PHOTO · FREDERIQUE ON THE RANGE" style={{ height: 'min(78vh,760px)' }} /></Reveal>
      </section>

      <Reveal className="wrap stats" style={{ marginTop: 120 }}>
        {credentials.map(c => <div key={c.big} className="stat"><b style={{ fontStyle: c.italic ? 'italic' : 'normal' }}>{c.big}</b><span>{c.small}</span></div>)}
      </Reveal>

      <section className="wrap section label-col">
        <span className="eyebrow" style={{ paddingTop: 14 }}>The philosophy</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          <Reveal as="p" className="statement">Every golfer moves and learns differently. Lessons begin with understanding <em>you</em>, not a universal swing model.</Reveal>
          <Reveal delay={120} className="auto-grid">
            {principles.map(p => <div key={p.title}><h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--forest)' }}>{p.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--muted)' }}>{p.body}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}><span className="eyebrow">Coaching</span><Link href="/coaching" className="link" style={{ fontSize: 14 }}>All programs →</Link></div>
        <div className="rows">
          {programs.map((p, i) => <Link key={p.id} href={'/coaching#' + p.id} className="row"><span className="mono" style={{ fontSize: 11 }}>0{i + 1}</span><span className="name" style={{ fontStyle: p.italic ? 'italic' : 'normal' }}>{p.name}</span><span className="desc">{p.blurb}</span><span className="arr accent-ink" style={{ fontSize: 20 }}>→</span></Link>)}
        </div>
      </section>

      <section className="wrap section split rev" style={{ alignItems: 'center' }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28, color: 'var(--forest)' }}>
          <span className="eyebrow">Student stories · draft</span>
          <p className="serif" style={{ margin: 0, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(32px,3.4vw,50px)', lineHeight: 1.12 }}>“{msQuote}”</p>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>Adult student · Brevard County</span>
        </Reveal>
        <Reveal delay={120}><Link href="/students" style={{ display: 'flex', flexDirection: 'column', gap: 16, color: 'var(--forest)' }}><Placeholder label="PHOTO · ZOOEY" style={{ aspectRatio: '4/5' }} /><span className="serif" style={{ fontWeight: 500, fontSize: 26, lineHeight: 1.15 }}>Zooey earned a spot on Viera High's top team. <span className="accent-ink">→</span></span></Link></Reveal>
      </section>

      <section className="wrap section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 56, alignItems: 'center' }}>
        <Reveal><Placeholder label="PHOTO · WOMEN'S CLINIC" style={{ aspectRatio: '1' }} /></Reveal>
        <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--forest)' }}>
          <span className="tag" style={{ alignSelf: 'flex-start' }}>Women's Golf &amp; Clinics</span>
          <h2 className="h2" style={{ fontSize: 'clamp(44px,4.6vw,72px)' }}>Better golf, among <span className="script" style={{ fontSize: '1.2em' }}>friends.</span></h2>
          <p className="lead">Encouraging clinics for every skill level. Improve your game and gain the confidence to say yes to the next corporate outing.</p>
          <Link href="/womens-clinics" className="link">All clinics →</Link>
        </Reveal>
      </section>

      <section className="wrap section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28 }}><span className="eyebrow">Instruction in action</span><Link href="/insights" className="link" style={{ fontSize: 14 }}>Golf Insights →</Link></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
          {['Before & after: swing sequencing', 'Clubface awareness drill', 'Crisper chip contact'].map((t, i) => <VideoButton key={t} title={t} className="card-link" style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}><Placeholder dark={i === 0} play style={{ aspectRatio: '4/5', width: '100%' }} /><span style={{ fontSize: 15, fontWeight: 500, color: 'var(--forest)' }}>{t}</span></VideoButton>)}
        </div>
      </section>

      <section className="section" style={{ margin: '160px var(--pad) 0' }}>
        <div className="cta-band">
          <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: 'clamp(48px,5.4vw,84px)', lineHeight: 1 }}>Let's build your <span className="script" style={{ color: 'var(--accent-soft)', fontSize: '1.2em' }}>better game.</span></h2>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}><Link href="/book" className="btn light">Book a Lesson</Link><Link href="/book" style={{ fontWeight: 600 }}>Ask a question →</Link></div>
        </div>
      </section>
    </>
  );
}
