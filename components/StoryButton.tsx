'use client';
import { useState } from 'react';
import Dialog from './Dialog';
import { stories } from '@/lib/content';

export function StoryView({ story }: { story: (typeof stories)[number] }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', gap: 18, color: 'var(--forest)' }}>
      <div className="ph" style={{ aspectRatio: '16/9' }}>Approved photo goes here</div>
      <span className="tag" style={{ alignSelf: 'flex-start' }}>{story.cat}</span>
      <h2 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>{story.title}</h2>
      {story.body.map(p => <p key={p} style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'var(--muted)' }}>{p}</p>)}
      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{story.status}</span>
    </article>
  );
}

export default function StoryButton({ index, className, style, children }: { index: number; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={'unbutton ' + (className ?? '')} style={style} onClick={() => setOpen(true)}>{children}</button>
      <Dialog open={open} onClose={() => setOpen(false)} label={stories[index].title}><StoryView story={stories[index]} /></Dialog>
    </>
  );
}
