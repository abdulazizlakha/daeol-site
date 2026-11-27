import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { POSTS } from '@/lib/posts';
import { SITE } from '@/lib/site';

export function generateStaticParams() { return POSTS.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.title, description: p.description, alternates: { canonical: `/blog/${p.slug}` }, openGraph: { type: 'article', publishedTime: p.date, title: p.title, description: p.description } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.description, datePublished: p.date, author: { '@type': 'Organization', name: 'DAEOL' }, publisher: { '@type': 'Organization', name: 'DAEOL', url: SITE.url }, mainEntityOfPage: `${SITE.url}/blog/${p.slug}` }} />
      <PageHero crumb="Blog" title={p.title} lede={p.description} />
      <section className="section"><article className="article">{p.body.map((t, i) => <p key={i} data-fade>{t}</p>)}</article></section>
      <CTA />
    </>
  );
}
