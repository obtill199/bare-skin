import Link from 'next/link';
import { ArrowRight, Check, MapPin, ShieldAlert } from 'lucide-react';
import type { ServicePage } from '../lib/service-pages';
import { getServicePage } from '../lib/service-pages';
import { bookingUrl } from '../lib/pricing';
import { businessId, siteUrl } from '../lib/site';
import SiteFooter from './site-footer';
import SiteHeader from './site-header';

export default function ServiceLanding({ service }: { service: ServicePage }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.serviceType,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}/`,
    areaServed: { '@type': 'City', name: 'Wichita' },
    provider: { '@type': 'BeautySalon', '@id': businessId, name: 'Bare Skin Studio', url: siteUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: service.cardTitle, item: `${siteUrl}/services/${service.slug}/` },
    ],
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

  const relatedServices = service.relatedSlugs
    .map((slug) => getServicePage(slug))
    .filter((item): item is ServicePage => Boolean(item));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SiteHeader />
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
                  <Link className="btn alt" href="/pricing/">View pricing</Link>
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
              <h2>{service.contentHeading}</h2>
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

        <section className="section serviceGuideSection">
          <div className="wrap guideColumns">
            <article className="guidePanel">
              <div className="eyebrow">How to prepare</div>
              <h2>Before your appointment.</h2>
              <div className="guideSteps">
                {service.preparation.map((step) => <div className="guideStep" key={step}><Check size={18} /><p>{step}</p></div>)}
              </div>
            </article>
            <article className="guidePanel guidePanelTint">
              <div className="eyebrow">Simple aftercare</div>
              <h2>After your appointment.</h2>
              <div className="guideSteps">
                {service.aftercare.map((step) => <div className="guideStep" key={step}><Check size={18} /><p>{step}</p></div>)}
              </div>
            </article>
          </div>
          {service.safetyNote && <div className="wrap inlineSafety"><ShieldAlert size={22} /><p><strong>Skin-safety note:</strong> {service.safetyNote}</p></div>}
          <div className="wrap guideMoreLink"><Link className="inlineLink" href="/waxing-prep-aftercare/">Read the complete preparation and aftercare guide <ArrowRight size={16} /></Link></div>
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

        <section className="section relatedSection">
          <div className="wrap">
            <div className="sectionHeading"><div className="eyebrow">Continue exploring</div><h2>Related Wichita waxing guides.</h2></div>
            <div className="serviceLinks relatedLinks">
              {relatedServices.map((item) => <Link className="serviceLinkCard" href={`/services/${item.slug}/`} key={item.slug}><span>{item.shortLabel}</span><h3>{item.cardTitle}</h3><p>{item.cardDescription}</p><span className="textLink">Explore service <ArrowRight size={15} /></span></Link>)}
              <Link className="serviceLinkCard" href="/location/"><span>Plan your visit</span><h3>Location &amp; Hours</h3><p>Find Suite 109, check regular hours, and get arrival information.</p><span className="textLink">Plan your visit <ArrowRight size={15} /></span></Link>
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
      <SiteFooter />
    </>
  );
}
