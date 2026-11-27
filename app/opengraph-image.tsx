import { ImageResponse } from 'next/og';

export const alt = 'DAEOL: Be the answer. Be the choice.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#fff', color: '#09318D' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 48, fontWeight: 800 }}>
          <div style={{ width: 22, height: 22, borderRadius: 22, background: '#FF6B5B' }} />DAEOL
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 120, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
          <span style={{ color: '#FF6B5B' }}>Be the answer.</span>
          <span>Be the choice.</span>
        </div>
        <div style={{ fontSize: 30, color: '#4A5677' }}>AEO, GEO and SEO agency · USA, Canada, UK, Australia</div>
      </div>
    ),
    size,
  );
}
