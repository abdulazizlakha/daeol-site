import Link from 'next/link';
import Magnetic from './Magnetic';
import Arrow from './Arrow';

export default function CTA() {
  return (
    <section className="cta">
      <div className="wrap">
        <h2 className="h1" data-split>Find out how AI sees your brand today.</h2>
        <p data-fade>Free audit: website review, AI citation check across selected prompts, competitor visibility and prioritized next steps.</p>
        <div data-fade><Magnetic><Link href="/audit" className="btn">Get your free audit <Arrow /></Link></Magnetic></div>
      </div>
    </section>
  );
}
