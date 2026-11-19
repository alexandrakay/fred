import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import { principles } from '@/lib/content';

export const metadata = pageMeta({ title: 'About Frederique Bruell', description: "Former Elon University Division I captain and 2008 Women's Ohio State Amateur Champion, now coaching golfers in Melbourne, FL.", path: '/about' });

// Draft timeline: dates and wording to confirm with Frederique
const career = [
  { when: 'Elon University', what: 'Division I collegiate golf, and captain of the women\'s team.' },
  { when: '2008', what: 'Won the Women\'s Ohio State Amateur Championship.' },
  { when: '8 years', what: 'Competed as a professional golfer.' },
  { when: 'Coaching', what: 'Private and group instruction for juniors, adults, competitors, and women at every level.' },
  { when: 'Today', what: 'Continued training and development with Sean Foley. Relationship details to confirm.' },
];

export default function About() {
  return (
    <>
      <section className="wrap split" style={{ paddingTop: 40 }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingBottom: 12 }}>
          <span className="eyebrow">About Frederique</span>
          <h1 className="h1">A competitor who coaches <span className="script hl hl-script">the person.</span></h1>
          <p className="lead">Frederique Bruell played Division I golf, won a state amateur title, and spent eight years competing professionally. Now she teaches golfers across Brevard and Seminole Counties, starting every lesson with how you move and what you want from the game.</p>
        </Reveal>
        <Reveal delay={120}><Placeholder label="PORTRAIT · FREDERIQUE" style={{ height: 'min(76vh,720px)' }} /></Reveal>
      </section>

      <section className="wrap section label-col">
        <span className="eyebrow" style={{ paddingTop: 6 }}>Career</span>
        <ol className="timeline">
          {career.map((c, i) => (
            <Reveal as="li" key={c.when} delay={i * 80}>
              <span className="serif when">{c.when}</span>
              <span className="what">{c.what}</span>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="wrap section label-col">
        <span className="eyebrow" style={{ paddingTop: 14 }}>How she teaches</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <Reveal as="p" className="statement">Some golfers can't feel the move a coach describes. Frederique keeps looking for the cue that works for <em>your</em> body, and keeps the swing sustainable for years of golf.</Reveal>
          <Reveal delay={120} className="auto-grid">
            {principles.map(p => <div key={p.title}><h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--forest)' }}>{p.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--muted)' }}>{p.body}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ margin: '160px var(--pad) 0' }}>
        <div className="cta-band">
          <h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: 'clamp(44px,5vw,76px)', lineHeight: 1 }}>Start with a <span className="script" style={{ color: 'var(--accent-soft)', fontSize: '1.2em' }}>conversation.</span></h2>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}><Link href="/book" className="btn light">Book a Lesson</Link><Link href="/coaching" style={{ fontWeight: 600 }}>See coaching programs</Link></div>
        </div>
      </section>
    </>
  );
}
