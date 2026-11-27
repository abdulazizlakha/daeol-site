import Link from 'next/link';

export default function PageHero({ title, lede, crumb }: { title: string; lede: string; crumb: string }) {
  return (
    <section className="phero">
      <div className="wrap">
        <p className="crumb" data-fade><Link href="/">DAEOL</Link> / {crumb}</p>
        <h1 className="h1" data-split>{title}</h1>
        <p className="lede" data-fade data-delay="0.3">{lede}</p>
      </div>
    </section>
  );
}
