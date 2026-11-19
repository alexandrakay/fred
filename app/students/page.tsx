import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import Placeholder from '@/components/Placeholder';
import StoryGrid from './StoryGrid';
import StoryButton from '@/components/StoryButton';

export const metadata = { title: 'Student Success | Frederique Bruell Golf' };

export default function Students() {
  const facts = [['Starting point', 'To be confirmed with Zooey and her family'], ['Approach', 'Development, preparation, and confidence'], ['Outcome', "A place on Viera High School's top team"]];
  return (
    <>
      <PageHero eyebrow="Student Success" title="Results beyond" script="the scorecard." intro="Team spots and tournament results, plus confidence, friendships, and golfers who kept playing when they thought they might have to stop." />
      <section className="wrap split rev" style={{ marginTop: 96, alignItems: 'center' }}>
        <Reveal><Placeholder label="PHOTO · ZOOEY IN VIERA HIGH SCHOOL TEAM GEAR" style={{ aspectRatio: '4/3' }} /></Reveal>
        <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--forest)' }}>
          <span className="eyebrow" style={{ fontSize: 11, letterSpacing: '.3em' }}>Featured · Competitive junior · Draft</span>
          <h2 className="h2" style={{ fontSize: 'clamp(36px,3.6vw,54px)' }}>Zooey earns a spot on Viera High's top team</h2>
          <div style={{ borderTop: '1px solid var(--line)' }}>{facts.map(([k, v]) => <div key={k} style={{ display: 'grid', gridTemplateColumns: '110px minmax(0,1fr)', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--line)', fontSize: 15 }}><span style={{ fontWeight: 600 }}>{k}</span><span style={{ color: 'var(--muted)' }}>{v}</span></div>)}</div>
          <StoryButton index={0} className="link" style={{ alignSelf: 'flex-start' }}>Read the full story <span className="accent-ink">→</span></StoryButton>
        </Reveal>
      </section>
      <section style={{ margin: '140px var(--pad) 0', background: 'var(--forest)', color: 'var(--cream)', padding: '88px 56px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span className="eyebrow" style={{ color: 'var(--accent-soft)' }}>Adapted instruction · Draft quote</span>
        <Reveal as="p" className="serif" style={{ margin: 0, fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(34px,4vw,60px)', lineHeight: 1.1, maxWidth: 1100 }}>“With MS, I couldn't feel the moves other coaches described. I nearly quit. Frederique kept trying new ways to explain a move until one finally worked for my body.”</Reveal>
        <span style={{ fontSize: 15, opacity: .85 }}>Adult student · Brevard County</span>
      </section>
      <StoryGrid />
    </>
  );
}
