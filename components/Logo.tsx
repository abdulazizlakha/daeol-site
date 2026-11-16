export default function Logo({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="26 12 344 76" role="img" aria-label="DAEOL" className={`${className} w-auto`}>
      <title>DAEOL</title>
      <g fill="none" strokeWidth="7" strokeLinejoin="miter">
        <path d="M34 20H52A30 30 0 0 1 52 80H34Z" stroke="currentColor" />
        <path d="M224 20H190V80H224M190 50H218" stroke="#FF6B5B" />
        <circle cx="279" cy="50" r="30" stroke="#FF6B5B" />
        <path d="M336 20V80H366" stroke="currentColor" />
        <g transform="translate(4 0)" stroke="none">
          <path d="M99.2 83.5L126 16.5H134L160.8 83.5H152.8L130 26.5L107.2 83.5Z" fill="currentColor" />
          <circle cx="130" cy="64" r="6.5" fill="#FF6B5B" />
        </g>
      </g>
    </svg>
  );
}
