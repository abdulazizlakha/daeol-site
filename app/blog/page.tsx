import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { POSTS } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog: AI Search, AEO and GEO',
  description: 'Plain-English guides on answer engine optimization, generative engine optimization and AI visibility.',
  alternates: { canonical: '/blog' },
};

export default function Page() {
  return (
    <>
      <PageHero crumb="Blog" title="Notes on AI search." lede="Plain-English guides on AEO, GEO and getting named in AI answers." />
      <section className="section">
        <div className="wrap posts">
          {POSTS.map((p, i) => (
            <Link href={`/blog/${p.slug}`} className="post" key={p.slug} data-fade data-delay={i * 0.08}>
              <span className="muted">{new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })} · {p.read}</span>
              <h2 className="h3">{p.title}</h2>
              <p className="muted">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
