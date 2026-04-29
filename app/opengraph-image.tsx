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
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          overflow: 'hidden',
          background: '#0F172A',
          color: '#E2E8F0',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        {/* Background gradients */}
        <div
          style={{
            position: 'absolute',
            width: 560,
            height: 560,
            left: -140,
            top: -180,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(99,102,241,0.52) 0%, rgba(99,102,241,0.16) 38%, transparent 72%)',
            filter: 'blur(12px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: 520,
            height: 520,
            right: -120,
            top: 40,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(168,85,247,0.42) 0%, rgba(168,85,247,0.12) 42%, transparent 74%)',
            filter: 'blur(18px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: 420,
            height: 420,
            right: 160,
            bottom: -250,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(34,211,238,0.32) 0%, rgba(34,211,238,0.08) 42%, transparent 76%)',
            filter: 'blur(18px)',
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(circle at center, black 0%, black 46%, transparent 78%)',
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            color: '#67E8F9',
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              background: 'linear-gradient(135deg, #6366F1, #A855F7, #22D3EE)',
            }}
          />
          nickhuguenard.com
        </div>

        {/* Main content */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '10px 18px',
              borderRadius: 999,
              border: '1px solid rgba(226,232,240,0.16)',
              background: 'rgba(15,23,42,0.56)',
              color: '#C4B5FD',
              fontSize: 24,
              marginBottom: 28,
            }}
          >
            Principal Software Engineer
          </div>

          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: '-0.065em',
              lineHeight: 0.96,
              maxWidth: 920,
            }}
          >
            Nick Huguenard
          </div>

          <div
            style={{
              marginTop: 24,
              fontSize: 38,
              color: '#CBD5E1',
              letterSpacing: '-0.035em',
            }}
          >
            Systems Architect • Full-Stack Engineer
          </div>

          <div
            style={{
              marginTop: 34,
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
            }}
          >
            {['C#', '.NET', 'SQL', 'React', 'TypeScript', 'Performance'].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 999,
                    background: 'rgba(226,232,240,0.08)',
                    border: '1px solid rgba(226,232,240,0.13)',
                    color: '#E2E8F0',
                    fontSize: 22,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'relative',
            width: 300,
            height: 8,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #6366F1, #A855F7, #22D3EE)',
            boxShadow: '0 0 36px rgba(168,85,247,0.42)',
          }}
        />
      </div>
    ),
    size
  );
}