export default function Orbit({ items }: { items: string[] }) {
  return (
    <div className="relative mx-auto size-[340px] md:size-[440px]" aria-label="Platforms we optimize for">
      <div className="absolute inset-[18%] rounded-full border border-dashed border-cream/25" /><div className="absolute inset-0 rounded-full border border-cream/15" />
      <div className="absolute inset-[34%] grid place-items-center rounded-full bg-coral font-display text-lg tracking-[.25em] text-navy shadow-[0_0_80px_rgba(255,107,91,.5)]">AI</div>
      <div className="orb absolute inset-0">{items.map((n, i) => (
        <div key={n} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${(360 / items.length) * i}deg) translateX(var(--r)) rotate(${-(360 / items.length) * i}deg)` }}>
          <span className="orb-i -ml-12 -mt-4 block w-24 rounded-full border border-cream/30 bg-navy2/80 py-1.5 text-center text-xs backdrop-blur">{n}</span></div>))}</div>
    </div>);
}
