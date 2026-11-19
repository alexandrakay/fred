'use client';
import { useState } from 'react';
import { stories } from '@/lib/content';
import Dialog from '@/components/Dialog';
import { StoryView } from '@/components/StoryButton';

const cats = ['All', 'Competitive', 'Adapted instruction', "Women's clinics", 'Technical'];

export default function StoryGrid() {
  const [f, setF] = useState('All');
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="wrap section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <h2 className="h2">More stories</h2>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{cats.map(c => <button key={c} className="pill" aria-pressed={f === c} onClick={() => setF(c)}>{c}</button>)}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,300px),1fr))', gap: '40px 24px' }}>
        {stories.map((s, i) => ({ s, i })).filter(({ s }) => f === 'All' || s.cat === f).map(({ s, i }) => (
          <button key={s.title} type="button" className="unbutton card-link" onClick={() => setOpen(i)} style={{ display: 'flex', flexDirection: 'column', gap: 14, color: 'var(--forest)', textAlign: 'left' }}>
            <div className="ph zoom" style={{ aspectRatio: '4/3', width: '100%' }} />
            <span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em' }}>{s.cat}</span>
            <span className="serif" style={{ fontWeight: 500, fontSize: 26, lineHeight: 1.1 }}>{s.title}</span>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>{s.status}</span>
          </button>
        ))}
      </div>
      <Dialog open={open !== null} onClose={() => setOpen(null)} label={open !== null ? stories[open].title : 'Story'}>
        {open !== null && <StoryView story={stories[open]} />}
      </Dialog>
    </section>
  );
}
