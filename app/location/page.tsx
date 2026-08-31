import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import { bookingUrl } from '../../lib/pricing';
import { cityRegionPostal, closedDays, googleMapsUrl, hours, phoneDisplay, phoneHref, streetAddress } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Bare Skin Studio Location & Hours | Wichita, KS',
  description: 'Find Bare Skin Studio inside Utopia N. Greenwich at 11124 E 28th St N, Suite 109 in Wichita. View hours, parking and arrival information.',
  alternates: { canonical: '/location/' },
  openGraph: { title: 'Bare Skin Studio Location & Hours', description: 'Find Suite 109, regular studio hours, parking and arrival information.', url: '/location/', type: 'website' },
  twitter: { card: 'summary', title: 'Bare Skin Studio Location & Hours', description: 'East Wichita location, hours and arrival information.' },
};

export default function LocationPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="serviceHero compactHero">
          <div className="wrap">
            <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Location</span></div>
            <div className="eyebrow">Bare Skin Studio • East Wichita</div>
            <h1>Easy to find. Private once you arrive.</h1>
            <p>Bare Skin Studio is located inside Utopia N. Greenwich, Suite 109, near East 28th Street North and Greenwich Road.</p>
            <div className="actions"><a className="btn" href={googleMapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowRight size={17} /></a><a className="btn alt" href={phoneHref}>Call {phoneDisplay}</a></div>
          </div>
        </section>

        <section className="section">
          <div className="wrap locationGrid">
            <article className="locationCard"><MapPin size={24} /><div className="eyebrow">Address</div><h2>Visit the studio.</h2><p><strong>{streetAddress}</strong><br />{cityRegionPostal}<br />Inside Utopia N. Greenwich</p><p>Use the on-site parking lot, enter Utopia, and look for Suite 109. Appointments are booked in advance.</p><a className="inlineLink" href={googleMapsUrl} target="_blank" rel="noreferrer">Open Google Maps <ArrowRight size={16} /></a></article>
            <article className="locationCard"><Clock3 size={24} /><div className="eyebrow">Regular hours</div><h2>By appointment.</h2><dl className="hoursList">{hours.map((item) => <div key={item.day}><dt>{item.day}</dt><dd>{item.display}</dd></div>)}</dl><p>Closed {closedDays}. Online availability may vary, so use the live booking calendar before traveling.</p></article>
            <article className="locationCard"><Phone size={24} /><div className="eyebrow">Questions before arrival?</div><h2>Contact Kristen.</h2><p>If you need help choosing a service, have a skin-safety question, or need arrival assistance, contact the studio before your appointment.</p><a className="inlineLink" href={phoneHref}>{phoneDisplay} <ArrowRight size={16} /></a><a className="btn locationBookButton" href={bookingUrl}>View appointments</a></article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
