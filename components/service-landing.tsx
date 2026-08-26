import Link from 'next/link';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import type { ServicePage } from '../lib/service-pages';
import { bookingUrl } from '../lib/pricing';

export default function ServiceLanding({ service }: { service: ServicePage }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.serviceType,
    description: service.metaDescription,
    areaServed: { '@type': 'City', name: 'Wichita' },
    provider: {
      '@type': 'BeautySalon',
      name: 'Bare Skin Studio',
      url: 'https://bareskinstudioict.com',
      telephone: '+1-620-202-1624',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11124 E 28th St N, Suite 109',
        addressLocality: 'Wichita',
        addressRegion: 'KS',
        postalCode: '67226',
        addressCountry: 'US',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="nav">
        <div className="wrap navin">
          <Link className="brand" href="/"><span className="brandMark">BS</span><span>Bare Skin Studio</span></Link>
          <nav className="links" aria-label="Service page navigation">
            <Link href="/#services">Pricing</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#faq">FAQ</Link>
            <a className="btn navButton" href={bookingUrl}>Book now</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="serviceHero">
          <div className="wrap">
            <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{service.cardTitle}</span></div>
            <div className="serviceHeroGrid">
              <div>
                <div className="eyebrow">{service.eyebrow}</div>
                <h1>{service.heading}</h1>
                <p>{service.lead}</p>
                <div className="actions">
                  <a className="btn" href={bookingUrl}>Book this service <ArrowRight size={17} /></a>
                  <Link className="btn alt" href="/#services">View pricing</Link>
                </div>
              </div>
              <aside className="serviceHeroAside">
                <strong>At a glance</strong>
                <ul>{service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap serviceContentGrid">
            <div>
              <div className="eyebrow">A better waxing experience</div>
              <h2>Comfort-first care in East Wichita.</h2>
            </div>
            <div>
              <p className="lead">{service.lead}</p>
              <p>{service.body}</p>
              <div className="serviceBenefits">
                {service.benefits.map((benefit) => (
                  <article className="serviceBenefit" key={benefit.title}>
                    <strong><Check size={16} /> {benefit.title}</strong>
                    <span>{benefit.description}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="wrap faqGrid">
            <div>
              <div className="eyebrow">Before you book</div>
              <h2>Questions about<br /><em>{service.serviceType.toLowerCase()}?</em></h2>
            </div>
            <div>
              {service.faqs.map((faq) => (
                <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <MapPin size={24} />
            <h2>Book with confidence<br /><em>in Wichita.</em></h2>
            <p>11124 E 28th St N, Suite 109 • Wichita, KS 67226</p>
            <div className="actions centeredActions">
              <a className="btn" href={bookingUrl}>See available appointments <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footerBottom"><span>© {new Date().getFullYear()} Bare Skin Studio</span><Link href="/">Return to homepage</Link></div>
      </footer>
    </>
  );
}
