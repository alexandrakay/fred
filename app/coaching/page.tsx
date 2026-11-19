import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Placeholder from '@/components/Placeholder';
import { programs } from '@/lib/content';

export const metadata = pageMeta({ title: 'Golf Coaching & Instruction', description: "Private lessons, beginner development, competitive junior and adult coaching, women's golf, and group instruction in Brevard County, FL.", path: '/coaching' });

const steps = [
  { t: 'Conversation', b: 'Your experience, goals, and anything about how your body moves that Frederique should know.' },
  { t: 'Assessment', b: 'How you move, your strengths, and the patterns holding you back.' },
  { t: 'A plan for you', b: 'Cues and drills that fit you, built for repeatable results on the course.' },
];

export default function Coaching() {
  return (
    <>
      <PageHero eyebrow="Coaching & Instruction" title="Coaching built around" script="the golfer." intro="From first swings to tournament play, every program starts the same way: understanding how you move, how you learn, and what you want from the game." />
      <div className="wrap" style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 8 }}>{programs.map(p => <a key={p.id} href={'#' + p.id} className="pill">{p.name}</a>)}</div>
      <section className="wrap section label-col" style={{ marginTop: 120 }}>
        <span className="eyebrow" style={{ paddingTop: 6 }}>How lessons work</span>
        <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 40 }}>
          {steps.map((s, i) => <div key={s.t} style={{ display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid var(--forest)', paddingTop: 18 }}><span className="mono accent-ink" style={{ fontSize: 11 }}>0{i + 1}</span><h3 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: 28, color: 'var(--forest)' }}>{s.t}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>{s.b}</p></div>)}
        </Reveal>
      </section>
      <section className="wrap" style={{ marginTop: 120 }}>
        {programs.map((p, i) => (
          <Reveal as="article" key={p.id} id={p.id} className="split" style={{ alignItems: 'start', padding: '64px 0', borderTop: '1px solid var(--line)', scrollMarginTop: 110 }}>
            <Placeholder label={'PHOTO · ' + p.name.toUpperCase()} style={{ aspectRatio: '4/5' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: 'var(--forest)' }}>
              <span className="mono" style={{ fontSize: 11 }}>0{i + 1}</span>
              <h2 className="h2" style={{ fontStyle: p.italic ? 'italic' : 'normal' }}>{p.name}</h2>
              <p className="lead" style={{ maxWidth: 560 }}>{p.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 24, borderTop: '1px solid var(--line)', paddingTop: 22 }}>
                <div><div className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em', marginBottom: 6 }}>Who it's for</div><div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>{p.who}</div></div>
                <div><div className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em', marginBottom: 6 }}>You'll work on</div><div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--muted)' }}>{p.work}</div></div>
              </div>
              <div style={{ display: 'flex', gap: 22, alignItems: 'center', flexWrap: 'wrap' }}><Link href={'/book?type=' + encodeURIComponent(p.name)} className="btn" style={{ fontSize: 14, padding: '15px 24px' }}>Inquire about {p.name}</Link><span style={{ fontSize: 13, color: 'var(--muted)' }}>Melbourne area · location confirmed when booking</span></div>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
