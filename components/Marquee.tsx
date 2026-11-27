export default function Marquee({ items, tone }: { items: string[]; tone?: 'coral' }) {
  const row = [...items, ...items];
  return (
    <div className={`marquee${tone ? ' coralbg' : ''}`} aria-hidden="true">
      <div className="track">{row.map((t, i) => <span key={i}>{t}</span>)}{row.map((t, i) => <span key={'b' + i}>{t}</span>)}</div>
    </div>
  );
}
