'use client';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import { insights } from '@/lib/content';
import VideoButton from '@/components/VideoButton';

const cats = ['All', 'Swing', 'Short game', 'Practice', 'Course mgmt', 'Competition', "Women's golf"];

export default function InsightsView() {
  const [f, setF] = useState('All');
  return (
    <>
      <section className="wrap" style={{ paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span className="eyebrow">Golf Insights</span>
        <h1 className="h1" style={{ maxWidth: 1000 }}>Notes from the <span className="script hl hl-script">lesson tee.</span></h1>
      </section>
      <section className="wrap split rev" style={{ marginTop: 72, gap: 40 }}>
        <Reveal><VideoButton title="Sequencing: let the body lead the club" style={{ display: 'block', width: '100%' }}><Placeholder dark play style={{ aspectRatio: '16/10' }} /></VideoButton></Reveal>
        <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 18, color: 'var(--forest)' }}>
          <span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em' }}>Featured · Swing · Video · Sample</span>
          <h2 className="h2" style={{ fontSize: 'clamp(34px,3.4vw,50px)', lineHeight: 1.05 }}>Sequencing: let the body lead the club</h2>
          <p className="lead">A before-and-after look at how a better sequence changes contact, with the drill used in the lesson.</p>
        </Reveal>
      </section>
      <section className="wrap" style={{ marginTop: 120 }}>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>{cats.map(c => <button key={c} className="pill" aria-pressed={f === c} onClick={() => setF(c)}>{c}</button>)}</div>
        <div className="rows">
          {insights.filter(i => f === 'All' || i.cat === f).map(i => (
            <VideoButton key={i.title} title={i.title} className="row" style={{ gridTemplateColumns: '160px minmax(0,1fr) 140px 30px', width: '100%', textAlign: 'left' }}>
              <span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.24em' }}>{i.cat}</span>
              <span className="name" style={{ fontSize: 'clamp(24px,2.4vw,34px)', lineHeight: 1.1 }}>{i.title}</span>
              <span className="mono desc" style={{ fontSize: 11 }}>{i.meta}</span>
              <span className="arr accent-ink">→</span>
            </VideoButton>
          ))}
        </div>
        <p style={{ margin: '18px 0 0', fontSize: 13, color: 'var(--muted)' }}>Sample topics. Frederique's videos and articles will replace these.</p>
      </section>
    </>
  );
}
