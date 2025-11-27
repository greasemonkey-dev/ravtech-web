import React from "react";

const DEFAULT_LOGOS = [
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
  "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/aed64a88b_QUALITEST_logo-6.png"
];

const SafeLogo = ({ src, index, style }) => {
  const [imgSrc, setImgSrc] = React.useState(src);

  React.useEffect(() => {
    // Fix for Supabase image with wrong Content-Type header
    if (src.includes("supabase.co") && src.includes("QUALITEST")) {
      fetch(src)
        .then(res => res.blob())
        .then(blob => {
          // Force the blob to be treated as an image if it's octet-stream
          const imageBlob = blob.type === 'application/octet-stream' 
            ? new Blob([blob], { type: 'image/png' }) 
            : blob;
          const url = URL.createObjectURL(imageBlob);
          setImgSrc(url);
        })
        .catch(err => console.error("Failed to load logo:", err));
    }
  }, [src]);

  return (
    <img
      key={index}
      src={imgSrc}
      alt={`logo-${index}`}
      style={style}
      loading="lazy"
      draggable={false}
    />
  );
};

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
          <SafeLogo
            key={i}
            index={i}
            src={src}
            style={{
              width: "80px",
              height: "40px",
              objectFit: "contain",
              filter: "grayscale(100%) contrast(90%) opacity(90%)"
            }}
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