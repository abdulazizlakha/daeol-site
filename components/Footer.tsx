import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <div className="logo"><img src="/logo-light.png" alt="DAEOL" width={190} height={38} /></div>
            <p style={{ marginTop: 16, maxWidth: '42ch' }}>{SITE.description}</p>
          </div>
          <div><h4>Explore</h4><ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}<li><Link href="/audit">Free Audit</Link></li></ul></div>
          <div><h4>Contact</h4><ul><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li></ul></div>
        </div>
        <div className="big" aria-hidden="true">DAEOL</div>
        <small>© {new Date().getFullYear()} DAEOL. DAEOL does not claim partnerships with or endorsements from Google, OpenAI, Perplexity, or Microsoft.</small>
      </div>
    </footer>
  );
}
