import Link from 'next/link';
import { bookingUrl } from '../lib/pricing';

export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="wrap navin">
        <Link className="brand" href="/" aria-label="Bare Skin Studio home">
          <span className="brandMark">BS</span>
          <span>Bare Skin Studio</span>
        </Link>
        <nav className="links" aria-label="Main navigation">
          <Link href="/pricing/">Pricing</Link>
          <Link href="/waxing-prep-aftercare/">Prep &amp; aftercare</Link>
          <Link href="/about-kristen/">Meet Kristen</Link>
          <Link href="/location/">Location</Link>
          <a className="btn navButton" href={bookingUrl}>Book now</a>
        </nav>
      </div>
    </header>
  );
}
