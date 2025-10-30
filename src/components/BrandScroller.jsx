import React from "react";

// Image-based brand scroller. Logos are forced to grayscale (black & white).
const DEFAULT_LOGOS = [
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png"
];

const Scroller = ({ logos = DEFAULT_LOGOS, reverse = false }) => {
  // repeat the logos to create a continuous scroll feel
  const repeated = Array(5).fill(logos).flat();

  return (
    <div
      className="group flex overflow-hidden py-2 flex-row max-w-full"
      style={{
        '--gap': '3rem',
        '--duration': '5s',
        maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
      }}
    >
      {repeated.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`flex shrink-0 items-center justify-center px-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{ gap: 'var(--gap)' }}
        >
          <img
            src={src}
            alt={`logo-${i}`}
            className="w-28 h-12 object-contain filter grayscale contrast-90 opacity-90"
            loading="lazy"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export const BrandScroller = ({ logos }) => <Scroller logos={logos} />;

export const BrandScrollerReverse = ({ logos }) => (
  <Scroller logos={logos} reverse />
);