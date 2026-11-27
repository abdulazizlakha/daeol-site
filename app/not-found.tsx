import Link from 'next/link';
import PageHero from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero crumb="404" title="That page isn’t the answer." lede="The page you asked for does not exist or has moved." />
      <section className="section"><div className="wrap"><Link href="/" className="btn">Back home</Link></div></section>
    </>
  );
}
