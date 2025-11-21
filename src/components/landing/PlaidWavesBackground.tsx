'use client';

import type { CSSProperties } from 'react';

const WAVES = [
  // Horizontal flowing waves - more organic and dense
  { id: 1, path: 'M-200 100 Q 100 80 300 100 T 700 100 T 1100 100 T 1500 100', duration: '25s', delay: '0s', opacity: 0.4 },
  { id: 2, path: 'M-200 130 Q 120 110 340 130 T 740 130 T 1140 130 T 1540 130', duration: '28s', delay: '-2s', opacity: 0.35 },
  { id: 3, path: 'M-200 160 Q 90 145 280 160 T 680 160 T 1080 160 T 1480 160', duration: '22s', delay: '-5s', opacity: 0.45 },
  { id: 4, path: 'M-200 190 Q 130 170 360 190 T 760 190 T 1160 190 T 1560 190', duration: '30s', delay: '-1s', opacity: 0.3 },
  { id: 5, path: 'M-200 220 Q 110 200 320 220 T 720 220 T 1120 220 T 1520 220', duration: '26s', delay: '-7s', opacity: 0.4 },
  { id: 6, path: 'M-200 250 Q 140 225 380 250 T 780 250 T 1180 250 T 1580 250', duration: '24s', delay: '-3s', opacity: 0.35 },
  { id: 7, path: 'M-200 280 Q 100 260 300 280 T 700 280 T 1100 280 T 1500 280', duration: '29s', delay: '-6s', opacity: 0.45 },
  { id: 8, path: 'M-200 310 Q 125 290 350 310 T 750 310 T 1150 310 T 1550 310', duration: '23s', delay: '-4s', opacity: 0.3 },
  { id: 9, path: 'M-200 340 Q 95 320 290 340 T 690 340 T 1090 340 T 1490 340', duration: '27s', delay: '-8s', opacity: 0.4 },
  { id: 10, path: 'M-200 370 Q 135 350 370 370 T 770 370 T 1170 370 T 1570 370', duration: '25s', delay: '-2s', opacity: 0.35 },
  { id: 11, path: 'M-200 400 Q 105 380 310 400 T 710 400 T 1110 400 T 1510 400', duration: '31s', delay: '-5s', opacity: 0.45 },
  { id: 12, path: 'M-200 430 Q 145 410 390 430 T 790 430 T 1190 430 T 1590 430', duration: '26s', delay: '-1s', opacity: 0.3 },
  { id: 13, path: 'M-200 460 Q 115 440 330 460 T 730 460 T 1130 460 T 1530 460', duration: '28s', delay: '-7s', opacity: 0.4 },
  { id: 14, path: 'M-200 490 Q 125 470 350 490 T 750 490 T 1150 490 T 1550 490', duration: '24s', delay: '-3s', opacity: 0.35 },
  { id: 15, path: 'M-200 520 Q 100 500 300 520 T 700 520 T 1100 520 T 1500 520', duration: '30s', delay: '-6s', opacity: 0.45 },

  // Vertical/diagonal flowing waves for depth
  { id: 16, path: 'M150 -50 Q 170 100 150 250 T 150 550 T 150 850', duration: '32s', delay: '-2s', opacity: 0.25 },
  { id: 17, path: 'M250 -50 Q 270 120 250 290 T 250 590 T 250 890', duration: '28s', delay: '-5s', opacity: 0.3 },
  { id: 18, path: 'M350 -50 Q 370 110 350 270 T 350 570 T 350 870', duration: '35s', delay: '-1s', opacity: 0.25 },
  { id: 19, path: 'M450 -50 Q 470 130 450 310 T 450 610 T 450 910', duration: '29s', delay: '-7s', opacity: 0.3 },
  { id: 20, path: 'M550 -50 Q 570 105 550 260 T 550 560 T 550 860', duration: '33s', delay: '-3s', opacity: 0.25 },
  { id: 21, path: 'M650 -50 Q 670 125 650 300 T 650 600 T 650 900', duration: '27s', delay: '-6s', opacity: 0.3 },
  { id: 22, path: 'M750 -50 Q 770 115 750 280 T 750 580 T 750 880', duration: '31s', delay: '-4s', opacity: 0.25 },
  { id: 23, path: 'M850 -50 Q 870 135 850 320 T 850 620 T 850 920', duration: '26s', delay: '-8s', opacity: 0.3 },
  { id: 24, path: 'M950 -50 Q 970 108 950 265 T 950 565 T 950 865', duration: '34s', delay: '-2s', opacity: 0.25 },
  { id: 25, path: 'M1050 -50 Q 1070 128 1050 305 T 1050 605 T 1050 905', duration: '28s', delay: '-5s', opacity: 0.3 },

  // Diagonal waves for movement
  { id: 26, path: 'M-50 50 Q 200 100 450 150 T 950 250 T 1450 350', duration: '40s', delay: '-3s', opacity: 0.2 },
  { id: 27, path: 'M-50 150 Q 220 200 490 250 T 990 350 T 1490 450', duration: '38s', delay: '-7s', opacity: 0.25 },
  { id: 28, path: 'M-50 250 Q 180 300 430 350 T 930 450 T 1430 550', duration: '42s', delay: '-1s', opacity: 0.2 },
  { id: 29, path: 'M1400 50 Q 1150 100 900 150 T 400 250 T -100 350', duration: '39s', delay: '-5s', opacity: 0.25 },
  { id: 30, path: 'M1400 200 Q 1170 250 940 300 T 440 400 T -60 500', duration: '41s', delay: '-2s', opacity: 0.2 },
];

type ColorVariant = 'green' | 'teal' | 'purple';

interface PlaidWavesBackgroundProps {
  variant?: ColorVariant;
  children?: React.ReactNode;
}

const COLORS = {
  green: {
    bg: 'from-[#2d5a4f] via-[#1a3d35] to-[#0d2820]',
    centerGlow: 'rgba(180,240,200,0.2)',
    topLight: 'rgba(200,255,220,0.15)',
    gradientId: 'waveStrokeGreen',
    stops: [
      { offset: '0%', color: 'rgba(150,240,180,0.8)' },
      { offset: '50%', color: 'rgba(100,220,160,0.6)' },
      { offset: '100%', color: 'rgba(80,200,140,0.4)' },
    ],
  },
  teal: {
    bg: 'from-[#2d4a5a] via-[#1a3544] to-[#0d2028]',
    centerGlow: 'rgba(180,220,240,0.25)',
    topLight: 'rgba(200,230,255,0.2)',
    gradientId: 'waveStrokeTeal',
    stops: [
      { offset: '0%', color: 'rgba(150,200,240,0.8)' },
      { offset: '50%', color: 'rgba(100,180,220,0.6)' },
      { offset: '100%', color: 'rgba(80,160,200,0.4)' },
    ],
  },
  purple: {
    bg: 'from-[#4a2d5a] via-[#351a44] to-[#200d28]',
    centerGlow: 'rgba(220,180,240,0.25)',
    topLight: 'rgba(230,200,255,0.2)',
    gradientId: 'waveStrokePurple',
    stops: [
      { offset: '0%', color: 'rgba(200,150,240,0.8)' },
      { offset: '50%', color: 'rgba(180,100,220,0.6)' },
      { offset: '100%', color: 'rgba(160,80,200,0.4)' },
    ],
  },
};

export function PlaidWavesBackground({ variant = 'green', children }: PlaidWavesBackgroundProps) {
  const colors = COLORS[variant];

  return (
    <div className="relative isolate overflow-hidden rounded-[48px] bg-transparent aspect-[16/9] min-h-[400px]">
      {/* Base background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg}`} />

      {/* Center glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${colors.centerGlow} 0%, transparent 50%)`,
        }}
      />

      {/* Top light effect */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background: `radial-gradient(ellipse at top, ${colors.topLight} 0%, transparent 60%)`,
        }}
      />

      {/* Waves container */}
      <div className="absolute inset-0 z-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 1280 600"
          role="presentation"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id={colors.gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {colors.stops.map((stop, i) => (
                <stop key={i} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
            <filter id="waveGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {WAVES.map((wave) => (
            <path
              key={wave.id}
              d={wave.path}
              className="wave-path"
              style={
                {
                  '--wave-duration': wave.duration,
                  '--wave-delay': wave.delay,
                  '--wave-opacity': wave.opacity,
                  '--gradient-id': `url(#${colors.gradientId})`,
                } as CSSProperties
              }
            />
          ))}
        </svg>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content layer */}
      {children && (
        <div className="relative z-20 h-full w-full flex items-center justify-center p-8">
          {children}
        </div>
      )}

      <style jsx>{`
        .wave-path {
          fill: none;
          stroke: var(--gradient-id);
          stroke-width: 0.6;
          opacity: var(--wave-opacity);
          filter: url(#waveGlow);
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: wave-flow var(--wave-duration) ease-in-out infinite;
          animation-delay: var(--wave-delay);
          transform-origin: center;
          will-change: transform;
        }

        @keyframes wave-flow {
          0%, 100% {
            transform: translateX(0) translateY(0) scale(1);
          }
          25% {
            transform: translateX(-1.5%) translateY(2%) scale(1.008);
          }
          50% {
            transform: translateX(0) translateY(-1.5%) scale(0.995);
          }
          75% {
            transform: translateX(1.5%) translateY(1%) scale(1.005);
          }
        }

        @media (max-width: 768px) {
          .wave-path {
            stroke-width: 0.5;
            opacity: calc(var(--wave-opacity) * 0.7);
          }
        }
      `}</style>
    </div>
  );
}

