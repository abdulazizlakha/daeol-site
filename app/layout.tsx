import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';
import Cursor from '@/components/Cursor';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'DAEOL | AEO & GEO Agency: AI Search Optimization', template: '%s | DAEOL' },
  description: 'Get found and cited in ChatGPT, Gemini, Perplexity and Google. DAEOL is an AEO, GEO and SEO agency serving the USA, Canada, UK and Australia. Free audit.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: 'DAEOL', url: SITE.url },
  twitter: { card: 'summary_large_image', site: SITE.twitter, creator: SITE.twitter },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};
export const viewport: Viewport = { themeColor: '#09318D', width: 'device-width', initialScale: 1 };

const ORG = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${SITE.url}/#org`, name: 'DAEOL', url: SITE.url, email: SITE.email, logo: `${SITE.url}/logo-dark.png`, description: SITE.description, areaServed: ['US', 'CA', 'GB', 'AU'] },
    { '@type': 'WebSite', '@id': `${SITE.url}/#site`, url: SITE.url, name: 'DAEOL', publisher: { '@id': `${SITE.url}/#org` } },
    { '@type': 'ProfessionalService', name: 'DAEOL', url: SITE.url, serviceType: ['Answer Engine Optimization', 'Generative Engine Optimization', 'Search Engine Optimization'], areaServed: ['United States', 'Canada', 'United Kingdom', 'Australia'] },
  ],
};

const BOOT = `document.documentElement.classList.add('js');setTimeout(function(){if(!window.__motionReady)document.documentElement.classList.add('motion-failed')},4500);`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,500..800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" />
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
        <JsonLd data={ORG} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Motion />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
