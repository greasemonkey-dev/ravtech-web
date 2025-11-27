import React from "react";

const DEFAULT_LOGOS = [
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png"
];

const Scroller = ({ logos = DEFAULT_LOGOS, reverse = false }) => {
  const repeated = Array(5).fill(logos).flat();

  return (
    <div style={{ position: "relative", overflow: "hidden", width: "100%" }}>
      {/* 🔹 מגדירים את האנימציות כאן */}
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
          width: "200%",
          animation: `${reverse ? "marqueeReverse" : "marquee"} 60s linear infinite`,
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))"
        }}
      >
        {repeated.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            style={{
              width: "80px",
              height: "40px",
              objectFit: "contain",
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
