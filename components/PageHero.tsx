import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, script, intro }: { eyebrow: string; title: string; script: string; intro: string }) {
  return (
    <section className="wrap split rev" style={{ paddingTop: 40 }}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h1">{title} <span className="script hl hl-script">{script}</span></h1>
      </Reveal>
      <Reveal delay={120}><p className="lead" style={{ marginBottom: 10 }}>{intro}</p></Reveal>
    </section>
  );
}
