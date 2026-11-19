'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { lessonTypes } from '@/lib/content';

export default function BookForm() {
  const q = useSearchParams().get('type');
  const start = Math.max(0, lessonTypes.findIndex(t => q && q.toLowerCase().includes(t.toLowerCase().split(' ')[0])));
  const [lt, setLt] = useState(start);
  const [sent, setSent] = useState(false);
  // TODO: POST to a form service (Formspree, Resend, etc.) and add spam protection
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <div style={{ background: 'var(--paper)', border: '1px solid rgba(23,64,42,.15)', padding: 48 }}>
      {sent ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--forest)', padding: '40px 0' }}>
          <span className="script" style={{ fontSize: 84, lineHeight: .9 }}>Thank you.</span>
          <p className="lead">Your inquiry about <strong style={{ color: 'var(--forest)' }}>{lessonTypes[lt]}</strong> is on its way. Frederique will be in touch to find a time and place.</p>
          <button onClick={() => setSent(false)} style={{ all: 'unset', cursor: 'pointer', fontWeight: 600, borderBottom: '2px solid var(--accent-soft)', alignSelf: 'flex-start' }}>Send another inquiry</button>
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em' }}>What are you interested in?</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{lessonTypes.map((t, i) => <button type="button" key={t} onClick={() => setLt(i)} style={{ cursor: 'pointer', padding: '10px 18px', borderRadius: 999, fontSize: 14, fontWeight: 500, border: '1px solid var(--forest)', background: i === lt ? 'var(--forest)' : 'transparent', color: i === lt ? 'var(--cream)' : 'var(--forest)' }}>{t}</button>)}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '28px 32px' }}>
            <label className="field">Name<input required name="name" placeholder="Your name" /></label>
            <label className="field">Email<input required type="email" name="email" placeholder="you@email.com" /></label>
            <label className="field">Phone <span style={{ fontWeight: 400, color: 'var(--muted)' }}>(optional)</span><input type="tel" name="phone" placeholder="(321) 555-0123" /></label>
            <label className="field">Experience<select name="experience"><option>New to golf</option><option>Recreational golfer</option><option>Competitive junior</option><option>Competitive adult</option></select></label>
          </div>
          <label className="field">Tell Frederique about your game<textarea name="message" rows={4} placeholder="Goals, experience, anything about how your body moves..." /></label>
          <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 13, color: 'var(--muted)' }}>Interested in: <strong style={{ color: 'var(--forest)' }}>{lessonTypes[lt]}</strong></span>
            <button type="submit" className="btn">Send inquiry</button>
          </div>
        </form>
      )}
    </div>
  );
}
