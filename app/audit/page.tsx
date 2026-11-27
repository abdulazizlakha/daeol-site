import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import AuditForm from '@/components/AuditForm';

export const metadata: Metadata = {
  title: 'Get a Free AI Visibility Audit',
  description: 'Free audit: website review, AI citation check across selected prompts, competitor visibility and prioritized next steps.',
  alternates: { canonical: '/audit' },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  return (
    <>
      <PageHero crumb="Free Audit" title="Find out how AI sees your brand." lede="Tell us about your site. We review it, check selected prompts across AI tools, compare competitors and send prioritized next steps." />
      <section className="section">
        <div className="wrap two" style={{ alignItems: 'start' }}>
          <div className="card" data-fade><AuditForm plan={plan} /></div>
          <div>
            <h2 className="h3" data-split style={{ marginBottom: 18 }}>What you get</h2>
            <ul className="checks" data-fade>
              <li>Website audit: technical, content and structure basics</li>
              <li>AI citation check across selected prompts</li>
              <li>Initial competitor visibility review</li>
              <li>Prioritized opportunities and next steps</li>
            </ul>
            <p className="note" data-fade>Free, with no obligation. We don’t guarantee mentions in any AI tool.</p>
          </div>
        </div>
      </section>
    </>
  );
}
