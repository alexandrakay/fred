import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const cream = '#f5f1e8', forest = '#17402a', muted = '#3a4a40', blush = '#f2c0ca';

// Satori needs TTF/OTF; Google Fonts serves TTF to clients that don't advertise woff2 support
async function googleFont(family: string, weight = 400) {
  const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@${weight}`)).text();
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error('No TTF for ' + family);
  return (await fetch(url)).arrayBuffer();
}

async function fonts() {
  try {
    const [serif, script, sans] = await Promise.all([googleFont('Cormorant Garamond', 500), googleFont('Pinyon Script'), googleFont('Hanken Grotesk', 500)]);
    return [
      { name: 'Serif', data: serif, weight: 500 as const },
      { name: 'Script', data: script, weight: 400 as const },
      { name: 'Sans', data: sans, weight: 500 as const },
    ];
  } catch {
    return undefined; // fall back to the default font rather than failing the build
  }
}

// Shared social card: logo top-left, headline with the script phrase on a blush underline, service area at the bottom
export async function ogCard({ title, script, kicker }: { title: string; script: string; kicker: string }) {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: cream, fontFamily: 'Sans' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', color: forest }}>
            <span style={{ fontFamily: 'Script', fontSize: 56, lineHeight: 1 }}>Frederique</span>
            <span style={{ fontFamily: 'Serif', fontSize: 16, letterSpacing: 7, marginTop: 2 }}>BRUELL GOLF</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', color: forest }}>
            <span style={{ fontFamily: 'Serif', fontSize: 76, lineHeight: 1.02, letterSpacing: -1.5, maxWidth: 860 }}>{title}</span>
            <span style={{ display: 'flex', marginTop: 4 }}>
              <span style={{ fontFamily: 'Script', fontSize: 96, lineHeight: 1.15, padding: '0 8px', backgroundImage: `linear-gradient(transparent 70%, ${blush} 70%, ${blush} 84%, transparent 84%)` }}>{script}</span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, color: muted }}>
            <span style={{ width: 10, height: 10, borderRadius: 10, background: blush }} />
            {kicker}
          </div>
        </div>
        <div style={{ width: 22, background: forest }} />
      </div>
    ),
    { ...ogSize, fonts: await fonts() },
  );
}
