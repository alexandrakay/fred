'use client';
import Link from 'next/link';
import { useState } from 'react';
import { clinics } from '@/lib/content';

export default function ClinicList() {
  const [f, setF] = useState('All');
  const list = clinics.filter(c => f === 'All' || c.level === f);
  return (
    <section id="upcoming" className="wrap section" style={{ scrollMarginTop: 110 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 20, flexWrap: 'wrap', marginBottom: 24 }}>
        <h2 className="h2">Upcoming clinics</h2>
        <div style={{ display: 'flex', gap: 6 }}>{['All', 'Beginner', 'All levels'].map(x => <button key={x} className="pill" aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}</div>
      </div>
      <div className="rows">
        {list.map(e => (
          <div key={e.title} style={{ display: 'grid', gridTemplateColumns: '110px minmax(0,1.4fr) minmax(0,1fr) auto', gap: 24, alignItems: 'center', padding: '26px 0', borderBottom: '1px solid var(--line)', color: 'var(--forest)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}><span className="serif" style={{ fontWeight: 500, fontSize: 48, lineHeight: .9 }}>{e.d}</span><span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em' }}>{e.m}</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span className="serif" style={{ fontWeight: 500, fontSize: 30, lineHeight: 1.05 }}>{e.title}</span><span style={{ fontSize: 14, color: 'var(--muted)' }}>{e.time} · Location TBC</span></div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><span className="tag" style={{ padding: '5px 12px' }}>{e.level}</span><span style={{ border: '1px solid rgba(23,64,42,.3)', borderRadius: 999, padding: '5px 12px', fontSize: 12 }}>{e.spots}</span></div>
            <Link href={'/book?type=' + encodeURIComponent("Women's Clinics")} style={{ border: '1px solid var(--forest)', padding: '12px 20px', borderRadius: 999, fontWeight: 600, fontSize: 14 }}>Register</Link>
          </div>
        ))}
      </div>
      <p style={{ margin: '18px 0 0', fontSize: 13, color: 'var(--muted)' }}>Sample events. Dates, pricing, and locations will come from Frederique's schedule.</p>
    </section>
  );
}
