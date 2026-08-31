import Link from 'next/link';
import { bookingUrl, membershipsUrl, packagesUrl } from '../lib/pricing';
import {
  cityRegionPostal,
  email,
  googleMapsUrl,
  hours,
  phoneDisplay,
  phoneHref,
  streetAddress,
} from '../lib/site';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footerGrid">
        <div>
          <Link className="brand footerBrand" href="/">
            <span className="brandMark">BS</span><span>Bare Skin Studio</span>
          </Link>
          <p>Private, professional Brazilian and full-body waxing in Wichita, Kansas.</p>
        </div>
        <div>
          <strong>Visit</strong>
          <a href={googleMapsUrl} target="_blank" rel="noreferrer">
            {streetAddress}<br />{cityRegionPostal}
          </a>
          <Link href="/location/">Hours, parking &amp; arrival</Link>
        </div>
        <div>
          <strong>Explore</strong>
          <Link href="/pricing/">Services &amp; pricing</Link>
          <a href={packagesUrl}>Packages</a>
          <a href={membershipsUrl}>Memberships</a>
          <Link href="/waxing-prep-aftercare/">Preparation &amp; aftercare</Link>
          <Link href="/about-kristen/">About Kristen</Link>
        </div>
        <div>
          <strong>Connect</strong>
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={bookingUrl}>Book online</a>
          <span className="footerHours">{hours[0].shortDay} {hours[0].display}</span>
          <span className="footerHours">{hours[1].shortDay} {hours[1].display}</span>
          <span className="footerHours">{hours[2].shortDay} {hours[2].display}</span>
          <span className="footerHours">{hours[3].shortDay} {hours[3].display}</span>
        </div>
      </div>
      <div className="wrap footerBottom">
        <span>© {new Date().getFullYear()} Bare Skin Studio</span>
        <span>Wichita, Kansas</span>
      </div>
    </footer>
  );
}
