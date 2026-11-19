'use client';
import { useEffect, useState } from 'react';

const accents = [
  { id: 'blush', name: 'Blush', c: '#f2c0ca' },
  { id: 'butter', name: 'Butter', c: '#f6e3a1' },
  { id: 'sky', name: 'Sky', c: '#c9dff0' },
  { id: 'sage', name: 'Sage', c: '#d3e3c4' },
  { id: 'peach', name: 'Peach', c: '#f6d0b8' },
];

export default function AccentSwitch() {
  const [cur, setCur] = useState('blush');
  useEffect(() => { const s = localStorage.getItem('fb-accent'); if (s) setCur(s); }, []);
  useEffect(() => { document.documentElement.dataset.accent = cur; localStorage.setItem('fb-accent', cur); }, [cur]);
  return (
    <div className="accent-switch" role="group" aria-label="Accent color">
      <span>Accent</span>
      {accents.map(a => <button key={a.id} title={a.name} aria-label={a.name} aria-pressed={cur === a.id} style={{ background: a.c }} onClick={() => setCur(a.id)} />)}
    </div>
  );
}
