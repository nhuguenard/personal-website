'use client';
import SvgIcon from '@mui/material/SvgIcon';

const Logo: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} >
      <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradA" x1="96" y1="416" x2="416" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0EA5E9" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="512" height="512" rx="96" fill="#0B1220" />
        <rect x="72" y="72" width="368" height="368" rx="72" stroke="#1E293B" strokeWidth="8" />

        <g filter="url(#softGlow)">
          <path d="M146 372V160" stroke="url(#gradA)" strokeWidth="18" strokeLinecap="round" />
          <path d="M366 352V140" stroke="url(#gradA)" strokeWidth="18" strokeLinecap="round" />

          <path d="M146 304L220 198L292 278L366 172" stroke="url(#gradA)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M146 372L220 266L292 346L366 240" stroke="url(#gradA)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />

          <rect x="114" y="386" width="14" height="18" rx="4" fill="#38BDF8" opacity="0.85" />
          <rect x="146" y="392" width="14" height="12" rx="4" fill="#38BDF8" opacity="0.55" />
          <rect x="178" y="380" width="14" height="24" rx="4" fill="#38BDF8" opacity="0.75" />
          <rect x="210" y="388" width="14" height="16" rx="4" fill="#38BDF8" opacity="0.5" />
          <rect x="242" y="372" width="14" height="32" rx="4" fill="#38BDF8" opacity="0.8" />
          <rect x="274" y="382" width="14" height="22" rx="4" fill="#38BDF8" opacity="0.55" />
          <rect x="306" y="364" width="14" height="40" rx="4" fill="#38BDF8" opacity="0.8" />
          <rect x="338" y="374" width="14" height="30" rx="4" fill="#38BDF8" opacity="0.6" />
          <rect x="370" y="356" width="14" height="48" rx="4" fill="#38BDF8" opacity="0.85" />

          <circle cx="146" cy="304" r="16" fill="#2563EB" />
          <circle cx="220" cy="198" r="16" fill="#3B82F6" />
          <circle cx="292" cy="278" r="14" fill="#60A5FA" />
          <circle cx="366" cy="172" r="16" fill="#0EA5E9" />
          <circle cx="146" cy="372" r="16" fill="#1D4ED8" />
          <circle cx="220" cy="266" r="16" fill="#60A5FA" />
          <circle cx="292" cy="346" r="14" fill="#93C5FD" />
          <circle cx="366" cy="240" r="16" fill="#7DD3FC" />
        </g>
      </svg>

    </SvgIcon>
  )
};

export default Logo;