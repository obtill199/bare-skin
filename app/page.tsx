import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import ReviewCarousel from '../components/review-carousel';
import { bookingUrl, memberships, signaturePricing } from '../lib/pricing';
import { servicePages } from '../lib/service-pages';

const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Bare+Skin+Studio+11124+E+28th+St+N+Wichita+KS+67226';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Bare Skin Studio',
  image: 'https://bareskinstudioict.com/kristen-hutchison.jpeg',
  url: 'https://bareskinstudioict.com',
  telephone: '+1-620-202-1624',
  email: 'bareskinstudio109@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11124 E 28th St N, Suite 109',
    addressLocality: 'Wichita',
    addressRegion: 'KS',
    postalCode: '67226',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'City', name: 'Wichita' },
  sameAs: [
    'https://www.instagram.com/bareskinstudioict',
    'https://www.facebook.com/estheticswithkristen/',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '14:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:30', closes: '14:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:30', closes: '14:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:30', closes: '12:00' },
  ],
};

export default function Home() {
  const everydayServices = signaturePricing.slice(0, 2);
  const valueServices = signaturePricing.slice(2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <header className="nav">
        <div className="wrap navin">
          <Link className="brand" href="/" aria-label="Bare Skin Studio home">
            <span className="brandMark">BS</span>
            <span>Bare Skin Studio</span>
          </Link>
          <nav className="links" aria-label="Main navigation">
            <a href="#services">Pricing</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">Meet Kristen</a>
            <a href="#faq">FAQ</a>
            <a className="btn navButton" href={bookingUrl}>Book now</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <div className="eyebrow">Wichita&apos;s private waxing studio</div>
              <h1>Expert waxing.<br /><em>Easy confidence.</em></h1>
              <p>
                Smooth, professional full-body waxing with Kristen—designed to feel private,
                comfortable, and refreshingly judgment-free.
              </p>
              <div className="heroProof" aria-label="Studio highlights">
                <span><Star size={16} fill="currentColor" /> 5.0-rated care</span>
                <span><ShieldCheck size={17} /> Private studio</span>
              </div>
              <div className="actions">
                <a className="btn" href={bookingUrl}>Book your wax <ArrowRight size={17} /></a>
                <a className="btn alt" href="#services">Explore pricing</a>
              </div>
            </div>

            <div className="heroPortrait">
              <Image
                src="/kristen-hutchison.jpeg"
                alt="Kristen Hutchison, waxing specialist at Bare Skin Studio in Wichita"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 46vw"
              />
              <div className="portraitCard">
                <span className="scriptLabel">Meet your wax specialist</span>
                <strong>Kristen Hutchison</strong>
                <span>Full-body waxing • Wichita, KS</span>
              </div>
              <div className="logoTile">
                <Image src="/bare-skin-studio-logo.jpeg" alt="Bare Skin Studio logo" width={140} height={175} />
              </div>
            </div>
          </div>
        </section>

        <section className="trust" aria-label="Studio information">
          <div className="wrap trustrow">
            <span><MapPin size={17} /> East Wichita</span>
            <span><Sparkles size={17} /> Full-body waxing specialist</span>
            <span><Clock3 size={17} /> Easy online booking</span>
            <span><ShieldCheck size={17} /> Appointment-only privacy</span>
          </div>
        </section>

        <section className="section pricingSection" id="services">
          <div className="wrap">
            <div className="sectionHeading splitHeading">
              <div>
                <div className="eyebrow">Signature pricing</div>
                <h2>Clear pricing.<br /><em>No awkward surprises.</em></h2>
              </div>
              <p>
                Start with the studio&apos;s most-requested services, then build a routine that
                works for you. Every appointment is private and booked through GlossGenius.
              </p>
            </div>

            <div className="pricingFeatureGrid">
              {everydayServices.map((service, index) => (
                <article className={`priceFeature ${index === 1 ? 'priceFeaturePrimary' : ''}`} key={service.name}>
                  <div>
                    {service.badge && <span className="offerBadge">{service.badge}</span>}
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="priceStack">
                    <span className="price">{service.price}</span>
                    {service.duration && <span className="duration">Approx. {service.duration}</span>}
                  </div>
                  <a className="textLink" href={bookingUrl}>Reserve this service <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>

            <div className="pricingMenu" aria-label="Bundles and finishing services">
              {valueServices.map((service) => (
                <article className="priceRow" key={service.name}>
                  <div className="priceRowCopy">
                    <div className="priceRowTitle">
                      <h3>{service.name}</h3>
                      {service.badge && <span className="miniBadge">{service.badge}</span>}
                    </div>
                    <p>{service.description}</p>
                  </div>
                  <div className="priceRowMeta">
                    <strong>{service.price}</strong>
                    {service.duration && <span>{service.duration}</span>}
                  </div>
                </article>
              ))}
            </div>

            <div className="pricingFooter">
              <p>Looking for another area? Browse the complete face and body waxing menu.</p>
              <a className="btn" href={bookingUrl}>View all services <ArrowRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="section reviewsSection" id="reviews">
          <div className="wrap">
            <div className="reviewsHeader">
              <div>
                <div className="eyebrow lightEyebrow">Five-star client care</div>
                <h2>Comfort is the<br /><em>real luxury.</em></h2>
              </div>
              <div className="ratingLockup">
                <div className="stars" aria-label="Five stars">★★★★★</div>
                <strong>5.0</strong>
                <span>Clients mention comfort, cleanliness, and Kristen&apos;s easygoing care.</span>
              </div>
            </div>
            <ReviewCarousel />
            <a className="reviewSource" href={googleMapsUrl} target="_blank" rel="noreferrer">
              Find Bare Skin Studio on Google <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section className="section aboutSection" id="about">
          <div className="wrap aboutGrid">
            <div className="aboutMonogram" aria-hidden="true">
              <span>Private.</span>
              <span>Professional.</span>
              <span>Personal.</span>
            </div>
            <div className="aboutCopy">
              <div className="eyebrow">The Bare Skin experience</div>
              <h2>Your appointment should feel as good as the result.</h2>
              <p className="lead">
                Kristen built Bare Skin Studio around the part of waxing that matters most:
                making people feel at ease.
              </p>
              <p>
                Expect clear communication, efficient appointments, thoughtful service, and a
                clean private space in East Wichita. First visit or fiftieth, you&apos;ll always know
                what to expect.
              </p>
              <a className="inlineLink" href="https://www.instagram.com/bareskinstudioict" target="_blank" rel="noreferrer">
                Follow the studio on Instagram <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="section processSection">
          <div className="wrap processGrid">
            <div>
              <div className="eyebrow">New to waxing?</div>
              <h2>Your first visit,<br /><em>made simple.</em></h2>
              <p className="sectionIntro">
                No guessing, no pressure. Choose your service, book online, and Kristen will guide
                you through the rest.
              </p>
              <Link className="inlineLink" href="/services/first-brazilian-wax-wichita/">
                Read the first-time guide <ArrowRight size={16} />
              </Link>
            </div>
            <ol className="steps">
              <li><span>01</span><div><strong>Choose your service.</strong><p>Find the right appointment or start with the first-time Brazilian option.</p></div></li>
              <li><span>02</span><div><strong>Book online.</strong><p>Select a time through Bare Skin Studio&apos;s secure GlossGenius calendar.</p></div></li>
              <li><span>03</span><div><strong>Arrive comfortable.</strong><p>Your appointment is private, straightforward, and judgment-free.</p></div></li>
              <li><span>04</span><div><strong>Stay smooth.</strong><p>Rebook every four to six weeks for the most consistent results.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section membershipSection" id="membership">
          <div className="wrap">
            <div className="sectionHeading centerHeading">
              <div className="eyebrow lightEyebrow">Maintenance plans</div>
              <h2>Make smooth skin<br /><em>your routine.</em></h2>
              <p>Monthly plans and prepaid visits add value without adding complexity.</p>
            </div>
            <div className="membershipGrid">
              {memberships.map((plan, index) => (
                <article className={`membershipCard ${index === 0 ? 'membershipFeatured' : ''}`} key={plan.name}>
                  <span className="planNumber">0{index + 1}</span>
                  <div className="offerBadge light">{plan.badge}</div>
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}</div>
                  <p>{plan.description}</p>
                  <a className="btn lightButton" href={bookingUrl}>Choose {plan.name}</a>
                </article>
              ))}
            </div>
            <p className="terms">
              Memberships renew monthly until canceled. One included service may be redeemed per
              billing cycle and does not roll over. Prepaid packs are non-transferable. Contact
              Bare Skin Studio before purchase with eligibility or redemption questions.
            </p>
          </div>
        </section>

        <section className="section localSeoSection">
          <div className="wrap">
            <div className="sectionHeading splitHeading">
              <div>
                <div className="eyebrow">Wichita waxing services</div>
                <h2>Find the right<br /><em>service for you.</em></h2>
              </div>
              <p>Helpful local guides answer the questions clients ask most before booking.</p>
            </div>
            <div className="serviceLinks">
              {servicePages.slice(0, 3).map((service) => (
                <Link className="serviceLinkCard" href={`/services/${service.slug}/`} key={service.slug}>
                  <span>{service.shortLabel}</span>
                  <h3>{service.cardTitle}</h3>
                  <p>{service.cardDescription}</p>
                  <span className="textLink">Explore service <ArrowRight size={15} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap faqGrid">
            <div>
              <div className="eyebrow">Waxing FAQ</div>
              <h2>Good questions.<br /><em>Straight answers.</em></h2>
            </div>
            <div>
              <details>
                <summary>How often should I get a Brazilian wax?</summary>
                <p>For the most consistent maintenance results, Bare Skin Studio recommends roughly every four to six weeks.</p>
              </details>
              <details>
                <summary>Where is Bare Skin Studio located?</summary>
                <p>11124 E 28th St N, Wichita, KS 67226, inside Utopia N. Greenwich, Suite 109.</p>
              </details>
              <details>
                <summary>What is the cancellation policy?</summary>
                <p>At least 12 hours&apos; notice is required. Cancellations within 12 hours may be charged 75%, while no-shows may be charged 100%. Confirm the current policy while booking.</p>
              </details>
              <details>
                <summary>Can I book online?</summary>
                <p>Yes. Choose a service and an available appointment directly through Bare Skin Studio&apos;s GlossGenius page.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="wrap">
            <div className="eyebrow">Ready when you are</div>
            <h2>Your next smooth-skin day<br /><em>starts here.</em></h2>
            <p>Private full-body waxing in East Wichita with easy online booking.</p>
            <div className="actions centeredActions">
              <a className="btn" href={bookingUrl}>Book Bare Skin Studio <ArrowRight size={17} /></a>
              <a className="btn alt" href="tel:+16202021624">Call (620) 202-1624</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footerGrid">
          <div>
            <div className="brand footerBrand"><span className="brandMark">BS</span><span>Bare Skin Studio</span></div>
            <p>Private, professional full-body waxing in Wichita, Kansas.</p>
          </div>
          <div>
            <strong>Visit</strong>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer">11124 E 28th St N<br />Suite 109, Wichita, KS 67226</a>
          </div>
          <div>
            <strong>Connect</strong>
            <a href="tel:+16202021624">(620) 202-1624</a>
            <a href="mailto:bareskinstudio109@gmail.com">bareskinstudio109@gmail.com</a>
            <a href={bookingUrl}>Book online</a>
          </div>
        </div>
        <div className="wrap footerBottom">
          <span>© {new Date().getFullYear()} Bare Skin Studio</span>
          <span>Wichita, Kansas</span>
        </div>
      </footer>
    </>
  );
}
