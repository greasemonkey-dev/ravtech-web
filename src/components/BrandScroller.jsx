import React from "react";

const DEFAULT_LOGOS = [
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/68c7526ab_QUALITEST_logo.png"
];

const Scroller = ({ logos = DEFAULT_LOGOS, reverse = false }) => {
  // Repeat logos enough times to fill screen (4x), then double for seamless loop
  const baseSet = [...logos, ...logos, ...logos, ...logos];
  const repeated = [...baseSet, ...baseSet];

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "3rem",
          width: "max-content",
          animation: `${reverse ? "marqueeReverse" : "marquee"} 80s linear infinite`,
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        {repeated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Brand Logo"
            style={{
              height: "40px",
              width: "auto",
              maxWidth: "150px",
              objectFit: "contain",
              flexShrink: 0,
              filter: "grayscale(100%) contrast(90%) opacity(90%)"
            }}
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export const BrandScroller = ({ logos }) => <Scroller logos={logos} />;
export const BrandScrollerReverse = ({ logos }) => (
  <Scroller logos={logos} reverse />
);