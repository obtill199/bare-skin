import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bareskinstudioict.com'),
  title: {
    default: 'Bare Skin Studio | Brazilian & Full-Body Waxing in Wichita, KS',
    template: '%s | Bare Skin Studio Wichita',
  },
  description: 'Private, professional Brazilian and full-body waxing in Wichita, Kansas. Book comfortable, confidence-first waxing with Kristen at Bare Skin Studio.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Bare Skin Studio | Wichita Waxing Specialist',
    description: 'Expert Brazilian and full-body waxing in a private East Wichita studio.',
    url: 'https://bareskinstudioict.com',
    siteName: 'Bare Skin Studio',
    type: 'website',
    locale: 'en_US',
    images: [{
      url: '/kristen-hutchison.jpeg',
      width: 1000,
      height: 1000,
      alt: 'Kristen Hutchison of Bare Skin Studio in Wichita, Kansas',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bare Skin Studio | Wichita Waxing Specialist',
    description: 'Private, professional Brazilian and full-body waxing in Wichita, Kansas.',
    images: ['/kristen-hutchison.jpeg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
