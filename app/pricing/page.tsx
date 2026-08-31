import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import { bookingUrl, fullPricing, packagesUrl, prepaidOffers } from '../../lib/pricing';

export const metadata: Metadata = {
  title: 'Waxing Prices in Wichita, KS',
  description: 'View current Bare Skin Studio pricing for Brazilian, bikini, underarm, brow, facial and body waxing in Wichita, Kansas.',
  alternates: { canonical: '/pricing/' },
  openGraph: { title: 'Waxing Prices in Wichita, KS', description: 'Current Bare Skin Studio Brazilian, body and facial waxing prices.', url: '/pricing/', type: 'website' },
  twitter: { card: 'summary', title: 'Waxing Prices in Wichita, KS', description: 'Current Bare Skin Studio Brazilian, body and facial waxing prices.' },
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="serviceHero compactHero">
          <div className="wrap">
            <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Pricing</span></div>
            <div className="eyebrow">Bare Skin Studio service menu</div>
            <h1>Waxing prices in Wichita.</h1>
            <p>Transparent pricing for the studio&apos;s most-requested appointments. The live booking calendar is the final source for availability and checkout details.</p>
            <div className="actions"><a className="btn" href={bookingUrl}>Book a service <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="section pricingSection">
          <div className="wrap">
            <div className="pricingMenu fullPriceMenu" aria-label="Bare Skin Studio services and prices">
              {fullPricing.map((service) => (
                <article className="priceRow" key={service.name}>
                  <div className="priceRowCopy">
                    <div className="priceRowTitle"><h2>{service.name}</h2>{service.badge && <span className="miniBadge">{service.badge}</span>}</div>
                    <p>{service.description}</p>
                  </div>
                  <div className="priceRowMeta"><strong>{service.price}</strong>{service.duration && <span>Approx. {service.duration}</span>}</div>
                </article>
              ))}
            </div>

            <div className="packagePanel">
              <div><div className="eyebrow">Prepaid package</div><h2>{prepaidOffers[0].name}</h2><p>{prepaidOffers[0].description}</p></div>
              <div className="packagePrice"><strong>{prepaidOffers[0].price}</strong><a className="btn" href={packagesUrl}>View package <ArrowRight size={17} /></a></div>
            </div>

            <p className="priceDisclaimer">Prices shown are the studio&apos;s current published prices and may change. Confirm the final price, eligibility, duration, and cancellation terms during online booking.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
