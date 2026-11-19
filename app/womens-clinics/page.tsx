import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import Reveal from '@/components/Reveal';
import Placeholder from '@/components/Placeholder';
import ClinicList from './ClinicList';

export const metadata = pageMeta({ title: "Women's Golf Clinics", description: "Women's golf clinics in Melbourne, FL for every skill level. Improve your game, meet other women who play, and build confidence.", path: '/womens-clinics' });

const expect = [
  { t: 'Every skill level', b: 'Beginners and experienced players welcome in every clinic.' },
  { t: 'Encouraging coaching', b: 'Approachable instruction adapted to each player.' },
  { t: 'Real friendships', b: 'Meet other women to practice and play with.' },
  { t: 'Confidence off the course', b: 'Feel ready for networking and corporate golf events.' },
];

export default function Clinics() {
  return (
    <>
      <section className="wrap split" style={{ paddingTop: 40 }}>
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingBottom: 12 }}>
          <span className="tag" style={{ alignSelf: 'flex-start' }}>Women's Golf &amp; Clinics</span>
          <h1 className="h1">Better golf, among <span className="script hl-script">friends.</span></h1>
          <p className="lead">Clinics for women of every age and skill level, from first swing to club championship. Improve your game, meet other women who play, and gain the confidence to say yes to golf wherever it comes up.</p>
          <a href="#upcoming" className="btn" style={{ alignSelf: 'flex-start' }}>See upcoming clinics</a>
        </Reveal>
        <Reveal delay={120}><Placeholder label="PHOTO · WOMEN'S CLINIC ON THE PRACTICE GREEN" style={{ height: 'min(72vh,680px)' }} /></Reveal>
      </section>
      <section className="wrap section label-col">
        <span className="eyebrow" style={{ paddingTop: 14 }}>What to expect</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
          <Reveal as="p" className="statement" style={{ fontSize: 'clamp(34px,3.6vw,54px)' }}>No experience required, and no intimidation. Just good instruction, good company, and a <em>better game.</em></Reveal>
          <Reveal delay={120} className="auto-grid">{expect.map(e => <div key={e.t}><h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 600, color: 'var(--forest)' }}>{e.t}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--muted)' }}>{e.b}</p></div>)}</Reveal>
        </div>
      </section>
      <ClinicList />
      <section className="wrap section" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 40 }}>
        {['confidence', 'friendships made'].map((t, i) => <Reveal key={t} delay={i * 120} style={{ display: 'flex', flexDirection: 'column', gap: 18, borderTop: '1px solid var(--forest)', paddingTop: 28, color: 'var(--forest)' }}><p className="serif" style={{ margin: 0, fontWeight: 500, fontStyle: 'italic', fontSize: 32, lineHeight: 1.15 }}>Clinic testimonial about {t} goes here once approved.</p><span style={{ fontSize: 14, color: 'var(--muted)' }}>Clinic participant · placeholder</span></Reveal>)}
      </section>
      <section style={{ margin: '140px var(--pad) 0', background: 'var(--forest)', color: 'var(--cream)', padding: '72px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 560 }}><h2 className="serif" style={{ margin: 0, fontWeight: 500, fontSize: 'clamp(36px,3.6vw,54px)', lineHeight: 1.05 }}>Planning a group or company outing?</h2><p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, opacity: .85 }}>Private clinics can be arranged for friends, teams, and workplaces.</p></div>
        <Link href={'/book?type=' + encodeURIComponent("Women's Clinics")} className="btn accent">Ask about a private clinic</Link>
      </section>
    </>
  );
}
