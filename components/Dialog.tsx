'use client';
import { useEffect, useRef } from 'react';

// Native <dialog> gives focus trapping and Escape-to-close for free; we only add the open/close animation
export default function Dialog({ open, onClose, label, children, wide = false }: { open: boolean; onClose: () => void; label: string; children: React.ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current; if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className={'dialog' + (wide ? ' wide' : '')}
      aria-label={label}
      onClose={onClose}
      onClick={e => { if (e.target === ref.current) onClose(); }}
    >
      <div className="dialog-body">
        <button className="dialog-close" onClick={onClose}><span className="sr-only">Close</span><span aria-hidden="true">×</span></button>
        {children}
      </div>
    </dialog>
  );
}

export function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div className="ph dark" style={{ aspectRatio: '16/9', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 14 }}>
        <span className="play pulse">▶</span>
        <span>Video from Frederique's lessons goes here</span>
      </div>
      <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.1, color: 'var(--forest)' }}>{title}</h2>
    </div>
  );
}
