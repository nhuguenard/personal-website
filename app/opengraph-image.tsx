import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nick Huguenard | Principal Software Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          background:
            'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.45), transparent 32%), radial-gradient(circle at 80% 30%, rgba(168,85,247,0.35), transparent 30%), #0F172A',
          color: '#E2E8F0',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ fontSize: 34, color: '#22D3EE' }}>
          nickhuguenard.com
        </div>

        <div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            Nick Huguenard
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 38,
              color: '#C4B5FD',
            }}
          >
            Principal Software Engineer • Systems Architect
          </div>

          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: '#94A3B8',
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            C# • .NET • SQL • React • TypeScript • Architecture • Performance
          </div>
        </div>

        <div
          style={{
            height: 8,
            width: 240,
            borderRadius: 999,
            background: 'linear-gradient(135deg, #6366F1, #A855F7, #22D3EE)',
          }}
        />
      </div>
    ),
    size,
  );
}