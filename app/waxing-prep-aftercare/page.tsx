import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, ShieldAlert } from 'lucide-react';
import SiteFooter from '../../components/site-footer';
import SiteHeader from '../../components/site-header';
import { bookingUrl } from '../../lib/pricing';

export const metadata: Metadata = {
  title: 'Waxing Preparation & Aftercare Guide | Wichita',
  description: 'Prepare for your Brazilian or body wax and learn simple aftercare from Bare Skin Studio in Wichita. Includes hair length, exfoliation and skin-safety guidance.',
  alternates: { canonical: '/waxing-prep-aftercare/' },
  openGraph: { title: 'Waxing Preparation & Aftercare Guide', description: 'Prepare for a Brazilian or body wax and care for freshly waxed skin.', url: '/waxing-prep-aftercare/', type: 'article' },
  twitter: { card: 'summary', title: 'Waxing Preparation & Aftercare Guide', description: 'Preparation and aftercare from Bare Skin Studio in Wichita.' },
};

const beforeSteps = [
  ['Let hair grow', 'Aim for about one-quarter inch of growth—roughly the length of a grain of rice. Avoid shaving for approximately two weeks when possible.'],
  ['Exfoliate gently', 'Lightly exfoliate one or two days before your appointment. Skip harsh scrubs or aggressive exfoliation immediately before waxing.'],
  ['Arrive with clean skin', 'Avoid heavy lotions, oils, and fragranced products on the area being waxed.'],
  ['Choose comfortable clothing', 'Loose, breathable clothing can reduce friction after body or Brazilian waxing.'],
];

const afterSteps = [
  ['Keep the area calm', 'For the period Kristen recommends, avoid heavy sweating, hot tubs, pools, saunas, and unnecessary friction.'],
  ['Use gentle products', 'Skip fragranced products and strong active ingredients on freshly waxed skin.'],
  ['Wait before exfoliating', "Allow the skin to settle, then resume gentle exfoliation according to Kristen's aftercare guidance."],
  ['Stay consistent', 'Most Brazilian maintenance clients return every four to six weeks instead of shaving between visits.'],
];

export default function PrepAftercarePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="serviceHero compactHero">
          <div className="wrap">
            <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>Preparation &amp; aftercare</span></div>
            <div className="eyebrow">Before and after your appointment</div>
            <h1>Waxing prep without the guesswork.</h1>
            <p>Simple preparation helps Kristen work efficiently, while thoughtful aftercare helps freshly waxed skin stay comfortable.</p>
            <div className="actions"><a className="btn" href={bookingUrl}>Book your appointment <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="section">
          <div className="wrap guideColumns">
            <article className="guidePanel">
              <div className="eyebrow">Before your wax</div><h2>Come prepared.</h2>
              <div className="guideSteps">{beforeSteps.map(([title, description]) => <div className="guideStep" key={title}><Check size={18} /><div><strong>{title}</strong><p>{description}</p></div></div>)}</div>
            </article>
            <article className="guidePanel guidePanelTint">
              <div className="eyebrow">After your wax</div><h2>Keep skin comfortable.</h2>
              <div className="guideSteps">{afterSteps.map(([title, description]) => <div className="guideStep" key={title}><Check size={18} /><div><strong>{title}</strong><p>{description}</p></div></div>)}</div>
            </article>
          </div>
        </section>

        <section className="section safetySection">
          <div className="wrap safetyPanel">
            <ShieldAlert size={28} />
            <div><div className="eyebrow">Skin-safety check</div><h2>Tell Kristen before facial waxing.</h2><p>Share any retinoid or retinol use, isotretinoin/Accutane history, exfoliating acids, prescription skin products, recent peels, laser treatments, sunburn, broken skin, or other sensitivity before the service. Facial waxing may need to be postponed or replaced with tweezing. If you are unsure whether waxing is appropriate, contact the studio before booking.</p></div>
          </div>
        </section>

        <section className="cta"><div className="wrap"><div className="eyebrow">First appointment?</div><h2>You can ask questions.<br /><em>That is the point.</em></h2><p>Kristen will explain the service and aftercare based on the area being waxed.</p><div className="actions centeredActions"><Link className="btn alt" href="/services/first-brazilian-wax-wichita/">Read the first Brazilian guide</Link><a className="btn" href={bookingUrl}>Book online <ArrowRight size={17} /></a></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
