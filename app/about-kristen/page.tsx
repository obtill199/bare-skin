import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import { bookingUrl } from '../../lib/pricing';
import { businessId, instagramUrl, ownerName, siteUrl } from '../../lib/site';

export const metadata: Metadata = {
  title: 'About Kristen Hutchison | Wichita Wax Specialist',
  description: 'Meet Kristen Hutchison, the waxing specialist behind Bare Skin Studio in East Wichita. Learn what to expect from her private, comfort-first studio.',
  alternates: { canonical: '/about-kristen/' },
  openGraph: {
    title: 'About Kristen Hutchison | Wichita Wax Specialist',
    description: 'Meet the waxing specialist behind Bare Skin Studio in East Wichita.',
    url: '/about-kristen/',
    type: 'profile',
    images: [{ url: '/kristen-hutchison.webp', width: 1000, height: 1000, alt: 'Kristen Hutchison at Bare Skin Studio' }],
  },
  twitter: { card: 'summary_large_image', title: 'Meet Kristen | Bare Skin Studio', description: 'Private, comfort-first waxing in East Wichita.', images: ['/kristen-hutchison.webp'] },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/about-kristen/#kristen`,
  name: ownerName,
  jobTitle: 'Waxing Specialist',
  image: `${siteUrl}/kristen-hutchison.webp`,
  worksFor: { '@id': businessId },
  sameAs: [instagramUrl],
};

export default function AboutKristenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <SiteHeader />
      <main>
        <section className="serviceHero">
          <div className="wrap">
            <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>About Kristen</span></div>
            <div className="serviceHeroGrid aboutPageHero">
              <div>
                <div className="eyebrow">Meet your Wichita wax specialist</div>
                <h1>Professional care that feels personal.</h1>
                <p>Kristen created Bare Skin Studio to make waxing feel private, straightforward, and genuinely comfortable.</p>
                <div className="actions">
                  <a className="btn" href={bookingUrl}>Book with Kristen <ArrowRight size={17} /></a>
                  <Link className="btn alt" href="/waxing-prep-aftercare/">Prepare for your visit</Link>
                </div>
              </div>
              <div className="aboutPagePortrait">
                <Image src="/kristen-hutchison.webp" alt="Kristen Hutchison at Bare Skin Studio in Wichita" fill priority sizes="(max-width: 960px) 100vw, 38vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap serviceContentGrid">
            <div>
              <div className="eyebrow">The Bare Skin approach</div>
              <h2>Comfort is part of the service.</h2>
            </div>
            <div>
              <p className="lead">A waxing appointment should never leave you guessing about what happens next.</p>
              <p>Kristen keeps each appointment one-on-one and communicates clearly throughout the service. Her goal is a clean, efficient result without making first-time questions or normal nerves feel awkward.</p>
              <p>Clients regularly mention the studio&apos;s cleanliness, relaxed atmosphere, and Kristen&apos;s ability to put them at ease. That same approach carries from Brazilian and body waxing to brows and other facial services.</p>
              <div className="serviceBenefits">
                <article className="serviceBenefit"><strong><ShieldCheck size={16} /> Private appointments</strong><span>One-on-one care inside a dedicated East Wichita studio.</span></article>
                <article className="serviceBenefit"><strong><Sparkles size={16} /> Clear expectations</strong><span>Preparation, service, and aftercare guidance without guesswork.</span></article>
                <article className="serviceBenefit"><strong><ShieldCheck size={16} /> Judgment-free care</strong><span>Questions and first-time nerves are always welcome.</span></article>
                <article className="serviceBenefit"><strong><Sparkles size={16} /> Efficient routine</strong><span>Appointments designed to respect your time and maintenance schedule.</span></article>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <div className="eyebrow">Ready when you are</div>
            <h2>Meet Kristen at<br /><em>Bare Skin Studio.</em></h2>
            <p>Private waxing appointments in East Wichita with secure online booking.</p>
            <div className="actions centeredActions"><a className="btn" href={bookingUrl}>See available appointments <ArrowRight size={17} /></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
