'use client';
import { useState } from 'react';
import Dialog, { VideoPlaceholder } from './Dialog';

export default function VideoButton({ title, className, style, children }: { title: string; className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={'unbutton ' + (className ?? '')} style={style} onClick={() => setOpen(true)} aria-label={'Play: ' + title}>{children}</button>
      <Dialog wide open={open} onClose={() => setOpen(false)} label={title}><VideoPlaceholder title={title} /></Dialog>
    </>
  );
}
