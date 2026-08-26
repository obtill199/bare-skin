import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bare Skin Studio | Waxing in Wichita, KS',
  description: 'Bare Skin Studio is a Wichita waxing studio specializing in full-body hair removal with a comfortable, confidence-first experience.',
  metadataBase: new URL('https://bareskinstudioict.com'),
  openGraph: {
    title: 'Bare Skin Studio | Wichita Waxing Studio',
    description: 'Smooth skin. Zero awkwardness. Professional full-body waxing in Wichita, Kansas.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
