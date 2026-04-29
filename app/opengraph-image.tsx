import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Nick Huguenard | Principal Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          backgroundColor: '#0F172A',
          backgroundImage:
            'radial-gradient(circle at 15% 10%, #3730A3 0, transparent 32%), radial-gradient(circle at 85% 20%, #7E22CE 0, transparent 30%), radial-gradient(circle at 80% 90%, #0891B2 0, transparent 28%)',
          color: '#E2E8F0',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6366F1, #A855F7, #22D3EE)',
            }}
          />
          <div style={{ fontSize: '30px', color: '#67E8F9' }}>
            nickhuguenard.com
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '10px 18px',
              borderRadius: '999px',
              backgroundColor: 'rgba(168,85,247,0.22)',
              color: '#DDD6FE',
              fontSize: '24px',
              marginBottom: '28px',
            }}
          >
            Principal Software Engineer
          </div>

          <div
            style={{
              fontSize: '88px',
              fontWeight: 800,
              letterSpacing: '-4px',
              lineHeight: 1,
            }}
          >
            Nick Huguenard
          </div>

          <div
            style={{
              marginTop: '24px',
              fontSize: '38px',
              color: '#CBD5E1',
            }}
          >
            Systems Architect • Full-Stack Engineer
          </div>

          <div
            style={{
              marginTop: '34px',
              display: 'flex',
              gap: '14px',
            }}
          >
            {['C#', '.NET', 'SQL', 'React', 'TypeScript', 'Performance'].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    padding: '10px 16px',
                    borderRadius: '999px',
                    backgroundColor: 'rgba(226,232,240,0.10)',
                    color: '#E2E8F0',
                    fontSize: '22px',
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div
          style={{
            width: '300px',
            height: '8px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #6366F1, #A855F7, #22D3EE)',
          }}
        />
      </div>
    ),
    size,
  );
}