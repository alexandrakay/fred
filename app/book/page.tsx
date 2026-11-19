import { pageMeta } from '@/lib/seo';
import { Suspense } from 'react';
import BookForm from './BookForm';

export const metadata = pageMeta({ title: 'Book a Golf Lesson', description: 'Book a golf lesson with Frederique Bruell in Melbourne, Merritt Island, Brevard County, or Seminole County, FL.', path: '/book' });

const steps = ['Send an inquiry with a little about your game.', 'Frederique replies to find a time and location.', 'Your first lesson starts with a conversation.'];

export default function Book() {
  return (
    <div className="wrap" style={{ paddingTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 72, alignItems: 'start' }}>
      <div style={{ position: 'sticky', top: 120, display: 'flex', flexDirection: 'column', gap: 32, color: 'var(--forest)' }}>
        <span className="eyebrow">Book a Lesson</span>
        <h1 className="h1" style={{ fontSize: 'clamp(52px,5.6vw,88px)' }}>Let's talk about <span className="script hl hl-script">your game.</span></h1>
        <div style={{ borderTop: '1px solid var(--line)' }}>{steps.map((s, i) => <div key={s} style={{ display: 'grid', gridTemplateColumns: '40px minmax(0,1fr)', gap: 12, padding: '16px 0', borderBottom: '1px solid var(--line)', fontSize: 15 }}><span className="mono accent-ink" style={{ fontSize: 11, paddingTop: 3 }}>0{i + 1}</span><span>{s}</span></div>)}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 15, color: 'var(--muted)' }}><span style={{ fontWeight: 600, color: 'var(--forest)' }}>Serving</span><span>Melbourne, Merritt Island, Brevard County, and Seminole County</span></div>
      </div>
      <Suspense><BookForm /></Suspense>
    </div>
  );
}
