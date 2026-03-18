import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, ExternalLink } from "lucide-react";

const RAVDOC_URL = "https://jenkins-ravtech1.github.io/RavDocAI/marketing/ravdoc-ai-product-page";

export default function RavDocAi() {
  const [iframeError, setIframeError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "RavDoc AI — Intelligent Document Processing | RavTech";
    const meta = document.querySelector('meta[name="description"]') || document.createElement("meta");
    meta.name = "description";
    meta.content = "RavDoc AI delivers 98%+ Hebrew OCR accuracy, PII detection and redaction, Amendment 13 compliance, and structured JSON output — running on Israeli Nimbus infrastructure.";
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(meta);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#0a0a0a" }}>
      {/* Top bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        borderBottom: "1px solid rgba(245,158,11,0.2)",
        background: "#111",
        flexShrink: 0,
      }}>
        <Link
          to={createPageUrl("Services")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            fontSize: "13px",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#fff"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
        >
          <ArrowLeft size={14} />
          Back to Services
        </Link>

        <span style={{ color: "#F59E0B", fontWeight: 700, fontSize: "14px", letterSpacing: "0.05em" }}>
          RavDoc AI
        </span>

        <a
          href={RAVDOC_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            fontSize: "12px",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
        >
          Open in new tab
          <ExternalLink size={12} />
        </a>
      </div>

      {/* iframe area */}
      <div style={{ flex: 1, position: "relative" }}>
        {!loaded && !iframeError && (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            color: "rgba(255,255,255,0.4)",
            fontSize: "14px",
          }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%",
              border: "2px solid rgba(245,158,11,0.3)",
              borderTopColor: "#F59E0B",
              animation: "spin 0.8s linear infinite",
            }} />
            Loading RavDoc AI...
          </div>
        )}

        {iframeError ? (
          <div style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            padding: "24px",
          }}>
            <p style={{ fontSize: "15px", marginBottom: "4px" }}>Unable to load RavDoc AI in embedded view.</p>
            <a
              href={RAVDOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 20px",
                background: "#F59E0B",
                color: "#000",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              Open RavDoc AI <ExternalLink size={14} />
            </a>
          </div>
        ) : (
          <iframe
            src={RAVDOC_URL}
            title="RavDoc AI — Intelligent Document Processing"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: loaded ? "block" : "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s",
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setIframeError(true)}
          />
        )}
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
