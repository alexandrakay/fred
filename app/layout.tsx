import type { Metadata } from 'next';
import { Pinyon_Script, Cormorant_Garamond, Hanken_Grotesk, Geist_Mono, Barlow_Condensed, Newsreader, Bodoni_Moda, Allura, Instrument_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccentSwitch from '@/components/AccentSwitch';
import MockNote from '@/components/MockNote';
import './globals.css';

const script = Pinyon_Script({ weight: '400', subsets: ['latin'], variable: '--font-script' });
const serif = Cormorant_Garamond({ weight: ['500', '600'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-serif' });
const sans = Hanken_Grotesk({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-sans' });
const mono = Geist_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono' });
const condensed = Barlow_Condensed({ weight: ['500', '600', '700'], subsets: ['latin'], variable: '--font-condensed' });
const news = Newsreader({ style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-news' });
const bodoni = Bodoni_Moda({ style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-bodoni' });
const allura = Allura({ weight: '400', subsets: ['latin'], variable: '--font-allura' });
const inst = Instrument_Sans({ subsets: ['latin'], variable: '--font-inst' });

export const metadata: Metadata = {
  title: 'Frederique Bruell Golf | Golf Lessons in Melbourne, FL',
  description: 'Individualized golf instruction in Melbourne, Brevard County, and Seminole County. Private lessons, competitive junior and adult coaching, and women\'s clinics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [script, serif, sans, mono, condensed, news, bodoni, allura, inst].map(f => f.variable).join(' ');
  return (
    <html lang="en" className={fonts} data-accent="blush">
      <body>
        <MockNote />
        <Header />
        <main>{children}</main>
        <Footer />
        <AccentSwitch />
      </body>
    </html>
  );
}
