import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, GitMerge, Users, BarChart3, ArrowLeft, CheckCircle } from "lucide-react";

/* ─── design tokens ─────────────────────────────────────────── */
const CSS = `
  .rd-font { font-family: 'Rubik', 'Heebo', sans-serif; }

  /* dot-grid hero background */
  .rd-hero {
    background-color: #070E1A;
    background-image:
      radial-gradient(circle at 20% 40%, rgba(3,115,186,0.18) 0%, transparent 55%),
      radial-gradient(circle at 80% 70%, rgba(0,212,255,0.08) 0%, transparent 45%),
      radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: auto, auto, 28px 28px;
  }

  /* animated gradient border on cards */
  .rd-card {
    position: relative;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(3,115,186,0.25);
    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
  .rd-card:hover {
    border-color: rgba(3,115,186,0.7);
    transform: translateY(-3px);
    box-shadow: 0 0 28px rgba(3,115,186,0.18);
  }

  /* counter animation */
  @keyframes rd-fade-up {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .rd-fade-up { animation: rd-fade-up 0.6s ease both; }
  .rd-delay-1 { animation-delay: 0.1s; }
  .rd-delay-2 { animation-delay: 0.2s; }
  .rd-delay-3 { animation-delay: 0.3s; }
  .rd-delay-4 { animation-delay: 0.4s; }

  /* scan-line on dashboard mock */
  @keyframes rd-scan {
    0%   { transform: translateY(-100%); opacity: 0.6; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  .rd-scan::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent 48%, rgba(3,115,186,0.08) 50%, transparent 52%);
    animation: rd-scan 3.5s linear infinite;
    pointer-events: none;
  }

  /* electric button */
  .rd-btn-primary {
    background: linear-gradient(135deg, #0373BA 0%, #00B4FF 100%);
    box-shadow: 0 4px 24px rgba(3,115,186,0.4);
    transition: box-shadow 0.3s, transform 0.2s;
  }
  .rd-btn-primary:hover {
    box-shadow: 0 6px 32px rgba(3,115,186,0.65);
    transform: translateY(-1px);
  }

  .rd-accent { color: #00D4FF; }
  .rd-muted  { color: rgba(255,255,255,0.45); }

  /* section divider */
  .rd-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(3,115,186,0.4), transparent);
  }
`;

/* ─── Dashboard UI mock ─────────────────────────────────────── */
function DashboardMock() {
  return (
    <div className="rd-scan relative rounded-2xl overflow-hidden border border-[#0373BA]/30 shadow-2xl shadow-[#0373BA]/10 bg-[#0A1628]" dir="rtl">
      {/* topbar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#060D1A]">
        <span className="w-3 h-3 rounded-full bg-red-500/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="text-xs text-white/30 mr-3 font-mono">ravdata.co.il/dashboard</span>
      </div>

      {/* tab bar */}
      <div className="flex gap-1 px-4 pt-3 border-b border-white/5">
        {["בעל העסק", "מוקדן", "רואה חשבון"].map((t, i) => (
          <div key={t} className={`text-xs px-3 py-1.5 rounded-t-md font-medium ${i === 0
            ? "bg-[#0373BA]/20 text-[#00D4FF] border-b-2 border-[#0373BA]"
            : "text-white/30"}`}>
            {t}
          </div>
        ))}
      </div>

      {/* content */}
      <div className="p-4 space-y-3">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "הוצאות החודש", val: "₪847,230", delta: "▲ 12%", up: false },
            { label: "ספקים פעילים", val: "7", delta: "●", up: true },
            { label: "חשבוניות פתוחות", val: "4", delta: "⚠ בסיכון", up: false },
          ].map((k) => (
            <div key={k.label} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5">
              <div className="text-[10px] text-white/40 mb-1">{k.label}</div>
              <div className="text-sm font-bold text-white font-mono">{k.val}</div>
              <div className={`text-[10px] mt-0.5 ${k.up ? "text-green-400" : "text-amber-400"}`}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* provider table */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 px-3 py-1.5 text-[10px] text-white/30 border-b border-white/[0.05]">
            <span className="col-span-2">ספק</span><span>עלות</span><span>ציון</span>
          </div>
          {[
            ["משה הובלות", "₪234k", "⭐ 4.8", "text-green-400"],
            ["כרמל לוגיסטיקה", "₪198k", "⭐ 4.2", "text-blue-400"],
            ["דן הובלות", "₪156k", "⚠ 3.1", "text-amber-400"],
          ].map(([name, cost, score, cls]) => (
            <div key={name} className="grid grid-cols-4 px-3 py-2 text-xs border-b border-white/[0.04] last:border-0">
              <span className="col-span-2 text-white/70">{name}</span>
              <span className="text-white/50 font-mono">{cost}</span>
              <span className={cls + " font-medium"}>{score}</span>
            </div>
          ))}
        </div>

        {/* alert strip */}
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-400/25 rounded-lg px-3 py-2">
          <span className="text-amber-400 text-xs">⚠</span>
          <span className="text-xs text-amber-300/80">חשבונית ₪12,400 — לא נמצאה תעודת משלוח תואמת</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Animated stat counter ────────────────────────────────── */
function StatCounter({ to, prefix = "", suffix = "", duration = 1200 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setVal(Math.round(p * to));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{prefix}{val.toLocaleString("he-IL")}{suffix}</span>;
}

/* ─── Interactive Demo ──────────────────────────────────────── */
const DEMO_EXAMPLES = [
  {
    id: "invoice",
    label: "חשבונית מס",
    emoji: "📄",
    result: {
      type: "חשבונית מס",
      fields: [
        { label: "ספק", value: "כרמל לוגיסטיקה בע״מ" },
        { label: "מספר חשבונית", value: "INV-2024-8821" },
        { label: "תאריך הנפקה", value: "15/01/2024" },
        { label: "סכום לפני מע״מ", value: "₪12,400" },
        { label: "מע״מ (17%)", value: "₪2,108" },
        { label: "סה״כ לתשלום", value: "₪14,508" },
      ],
      status: "match",
      statusLabel: "תואמת תעודת משלוח ✓",
    },
  },
  {
    id: "bituach",
    label: "תביעת ביטוח לאומי",
    emoji: "📋",
    result: {
      type: "תביעת ביטוח לאומי",
      fields: [
        { label: "שם מלא", value: "יוסי כהן" },
        { label: "מספר תביעה", value: "BL-2024-44521" },
        { label: "תאריך הגשה", value: "22/01/2024" },
        { label: "סוג תביעה", value: "נפגעי עבודה" },
        { label: "מעסיק", value: "משה הובלות בע״מ" },
        { label: "סטטוס", value: "בטיפול" },
      ],
      status: "pending",
      statusLabel: "מזוהה — ממתין לאישור",
    },
  },
  {
    id: "form101",
    label: "טופס 101",
    emoji: "📋",
    result: {
      type: "טופס 101",
      fields: [
        { label: "שם עובד", value: "דנה לוי" },
        { label: "מספר עובד", value: "EMP-2024-007" },
        { label: "שנת מס", value: "2024" },
        { label: "מעסיק", value: "משה הובלות בע״מ" },
        { label: "ניקוד", value: "2.25" },
        { label: "מצב משפחתי", value: "נשוי/אה + 2 ילדים" },
      ],
      status: "match",
      statusLabel: "נקלט בהצלחה ✓",
    },
  },
  {
    id: "teudat",
    label: "תעודת זהות",
    emoji: "🪪",
    result: {
      type: "תעודת זהות",
      fields: [
        { label: "שם פרטי", value: "אבי" },
        { label: "שם משפחה", value: "ישראלי" },
        { label: "מספר זהות", value: "***-***-***" },
        { label: "תאריך לידה", value: "*/*/1985" },
        { label: "תוקף", value: "2029" },
        { label: "מין", value: "זכר" },
      ],
      status: "match",
      statusLabel: "זוהה בהצלחה ✓",
    },
  },
];

function InteractiveDemo() {
  const [active, setActive] = useState(null);
  const [dragging, setDragging] = useState(false);

  return (
    <section className="bg-[#060C18] py-24" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rd-divider mb-16" />

        {/* header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs text-amber-400 font-medium tracking-wide">הדגמה אינטראקטיבית</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">נסה את המערכת עכשיו</h2>
          <p className="text-white/45">העלה מסמך או בחר מתוך הדוגמאות וראה כיצד המערכת מזהה ומחלצת נתונים</p>
        </div>

        {/* two-panel layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* left: results panel */}
          <div className="bg-[#0A1628] border border-white/[0.08] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full transition-colors ${active ? "bg-green-400 animate-pulse" : "bg-white/20"}`} />
                <span className="text-xs text-white/40">מוכן</span>
              </div>
              <span className="text-xs text-white/50">תוצאות עיבוד 📊</span>
            </div>
            <div className="p-5 min-h-[320px] flex flex-col">
              {!active ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
                  <span className="text-5xl opacity-20">📄</span>
                  <p className="text-white/25 text-sm">העלה מסמך או בחר דוגמה כדי לראות תוצאות</p>
                </div>
              ) : (
                <div className="space-y-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#00D4FF]">סוג: {active.result.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      active.result.status === "match"
                        ? "bg-green-500/15 text-green-400"
                        : "bg-amber-500/15 text-amber-400"
                    }`}>
                      {active.result.statusLabel}
                    </span>
                  </div>
                  {active.result.fields.map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-xs text-white/35">{label}</span>
                      <span className="text-xs text-white/80 font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* right: upload + examples */}
          <div className="flex flex-col gap-4">
            {/* drop zone */}
            <div
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                dragging
                  ? "border-[#0373BA] bg-[#0373BA]/10"
                  : "border-white/[0.12] hover:border-white/25 bg-[#0A1628]"
              }`}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0373BA]/15 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📤</span>
              </div>
              <p className="text-white/70 font-semibold mb-1">גרור מסמך לכאן</p>
              <p className="text-white/30 text-sm mb-4">או לחץ לבחירת קובץ</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {["TIFF", "PNG", "JPG", "PDF"].map((f) => (
                  <span key={f} className="bg-white/[0.06] border border-white/[0.10] text-white/50 text-xs px-3 py-1 rounded-lg font-mono">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* example buttons */}
            <div>
              <p className="text-xs text-white/30 text-right mb-3">:או נסה עם מסמכים לדוגמה</p>
              <div className="grid grid-cols-2 gap-2">
                {DEMO_EXAMPLES.map((ex) => (
                  <button
                    key={ex.id}
                    onClick={() => setActive(ex)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm transition-all text-right ${
                      active?.id === ex.id
                        ? "border-[#0373BA] bg-[#0373BA]/15 text-white"
                        : "border-white/[0.10] bg-white/[0.03] text-white/55 hover:border-white/25 hover:text-white/80"
                    }`}
                  >
                    <span>{ex.emoji}</span>
                    <span>{ex.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Main page ─────────────────────────────────────────────── */
const clusters = [
  { title: "קריאת תעודות משלוח", desc: "OCR בעברית — PDF, תמונה, Excel", url: "/ravdata/delivery-note-ocr", icon: FileText },
  { title: "התאמת חשבוניות", desc: "AI מזהה פערי תשלום לפני שמשלמים", url: "/ravdata/invoice-reconciliation", icon: GitMerge },
  { title: "ניהול ספקים", desc: "ציון ביצועים לכל ספק — מחושב אוטומטית", url: "/ravdata/provider-management", icon: Users },
  { title: "דשבורד לוגיסטי", desc: "3 תפקידים, תמונה אחת, בזמן אמת", url: "/ravdata/logistics-dashboard", icon: BarChart3 },
];

export default function RavDataHome() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "RavData AI | תוכנה לניהול הובלות לחברות קטנות — AI לוגיסטיקה ישראל";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "RavData AI מחברת את האימייל והאקסל שלך ומחזירה תמונה ברורה על כל ספק, כל משלוח וכל שקל — בזמן אמת. תוכנת ניהול הובלות לחברות קטנות בישראל.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/ravdata";
    const hreflangEn = document.createElement("link");
    hreflangEn.rel = "alternate"; hreflangEn.hreflang = "en"; hreflangEn.href = "https://ravtech.co.il/ravdata-en";
    document.head.appendChild(hreflangHe);
    document.head.appendChild(hreflangEn);

    const existingSchema = document.querySelector('script[data-page="ravdata-home"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-home");
    schema.text = JSON.stringify([
      { "@context": "https://schema.org", "@type": "SoftwareApplication", "name": "RavData AI", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "description": "פלטפורמת ניהול נתוני הובלה לחברות לוגיסטיקה קטנות בישראל", "inLanguage": "he", "url": "https://ravtech.co.il/ravdata", "offers": { "@type": "Offer", "priceCurrency": "ILS", "price": "490" }, "provider": { "@type": "Organization", "name": "RavTech", "url": "https://ravtech.co.il" } },
      { "@context": "https://schema.org", "@type": "WebPage", "name": "RavData AI — תוכנה לניהול הובלות", "inLanguage": "he", "url": "https://ravtech.co.il/ravdata", "breadcrumb": { "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "בית", "item": "https://ravtech.co.il" }, { "@type": "ListItem", "position": 2, "name": "RavData AI", "item": "https://ravtech.co.il/ravdata" }] } }
    ]);
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      [hreflangHe, hreflangEn, schema].forEach(el => el.parentNode?.removeChild(el));
    };
  }, []);

  return (
    <div className="rd-font">
      <style>{CSS}</style>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="rd-hero flex items-center" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* left: copy */}
            <div>
              {/* badge */}
              <div className="rd-fade-up inline-flex items-center gap-2 bg-[#0373BA]/15 border border-[#0373BA]/30 rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                <span className="text-xs text-[#00D4FF] font-medium tracking-wide">פלטפורמת AI לניהול הובלות · ישראל</span>
              </div>

              <h1 className="rd-fade-up rd-delay-1 text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                הנתונים שלך
                <br />
                <span className="rd-accent">כבר שם.</span>
                <br />
                <span className="text-white/60 text-4xl lg:text-5xl font-bold">עכשיו תן להם</span>
                <br />
                לעבוד.
              </h1>

              <p className="rd-fade-up rd-delay-2 text-lg text-white/55 leading-relaxed mb-10 max-w-xl">
                חברות הובלה ישראליות עם 2–20 משאיות מנהלות את העסק דרך וואטסאפ ואקסל. RavData AI מתחברת למה שכבר קיים — ומחזירה תמונה ברורה על כל ספק, כל משלוח וכל שקל.
              </p>

              {/* onboarding steps */}
              <div className="rd-fade-up rd-delay-3 flex flex-col gap-3 mb-10">
                {[
                  { n: "①", t: "חבר Gmail / Outlook", s: "2 דקות" },
                  { n: "②", t: "העלה את האקסל הקיים", s: "5 דקות" },
                  { n: "③", t: "הדשבורד חי עם נתונים היסטוריים", s: "מיידי" },
                ].map(({ n, t, s }) => (
                  <div key={n} className="flex items-center gap-3">
                    <span className="text-[#00D4FF] font-mono text-lg w-6 shrink-0">{n}</span>
                    <span className="text-white/80 text-sm">{t}</span>
                    <span className="text-white/30 text-xs mr-auto">{s}</span>
                  </div>
                ))}
              </div>

              <div className="rd-fade-up rd-delay-4 flex gap-4 flex-wrap">
                <Link to="/Contact" className="rd-btn-primary text-white font-bold px-8 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm">
                  קבל דמו חינם <ArrowLeft className="w-4 h-4" />
                </Link>
                <Link to="/ravdata/logistics-dashboard" className="border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all px-6 py-3.5 rounded-xl text-sm font-medium">
                  ראה איך זה עובד
                </Link>
              </div>
            </div>

            {/* right: dashboard mock */}
            <div className="rd-fade-up rd-delay-2 lg:block">
              <DashboardMock />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="bg-[#070E1A] border-y border-white/[0.06]" dir="rtl">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { to: 7, suffix: " דק׳", label: "זמן הגדרה" },
            { to: 4000, suffix: "+", label: "חברות הובלה בישראל" },
            { to: 100, suffix: "%", label: "חשבוניות מנוטרות" },
            { to: 23000, prefix: "₪", label: "חיסכון ממוצע בחודשיים" },
          ].map(({ to, prefix, suffix, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-black text-white rd-font">
                <StatCounter to={to} prefix={prefix} suffix={suffix} />
              </div>
              <div className="text-sm text-white/35 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAIN ──────────────────────────────────────────────── */}
      <section className="bg-[#060C18] py-24" dir="rtl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/[0.07]" />
            <span className="text-xs text-white/30 uppercase tracking-widest font-mono">הכאב הנוכחי</span>
            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">
            מה גורם לבעלי חברות הובלה<br />
            <span className="rd-accent">כאב ראש כל יום?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💸", pain: "חשבוניות שלא תואמות תעודות משלוח", sub: "משלמים בלי לדעת שמשלמים יותר מדי" },
              { icon: "📊", pain: "4 ספקים, 3 אקסלים, אפס תמונה ברורה", sub: "כל ספק בפורמט שונה. אין השוואה אמיתית" },
              { icon: "📱", pain: "הנהג שלח הודעה — הלקוח כבר מתקשר", sub: "אין מעקב. אין ETAs. אין שקט" },
              { icon: "🧾", pain: "הנהלת חשבונות מבקשת נתונים", sub: "מתחילים לחפש בווטסאפ ובאקסלים ישנים" },
            ].map(({ icon, pain, sub }) => (
              <div key={pain} className="rd-card rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{icon}</span>
                <div>
                  <div className="font-bold text-white/85 mb-1">{pain}</div>
                  <div className="text-sm text-white/40">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────── */}
      <section className="bg-[#070E1A] py-24" dir="rtl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rd-divider mb-16" />
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
            יכולות RavData AI
          </h2>
          <p className="text-white/40 text-center mb-14">לחץ על כל יכולת לפרטים נוספים</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {clusters.map(({ title, desc, url, icon: Icon }) => (
              <Link key={url} to={url}
                className="rd-card rounded-2xl p-6 flex gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-[#0373BA]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0373BA]/35 transition-colors">
                  <Icon className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white mb-1 group-hover:text-[#00D4FF] transition-colors">{title}</div>
                  <div className="text-sm text-white/40">{desc}</div>
                </div>
                <ArrowLeft className="w-4 h-4 text-white/20 group-hover:text-[#00D4FF] transition-all group-hover:-translate-x-1 mt-1 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE DEMO ──────────────────────────────────── */}
      <InteractiveDemo />

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section className="bg-[#060C18] py-24" dir="rtl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rd-divider mb-16" />
          <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-14">
            מי RavData AI מתאימה לו?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: "בעל העסק", emoji: "👔", desc: "רוצה לדעת מה כל ספק עולה באמת — ולהפסיק לגלות את זה מהנהלת חשבונות" },
              { role: "מוקדן", emoji: "🖥️", desc: "רוצה לראות סטטוס משלוח בלי לצלצל לנהג כל 10 דקות" },
              { role: "רואה חשבון", emoji: "📋", desc: "רוצה נתוני מע\"מ מסודרים ויצוא ישיר לחשבשבת / קידום — ללא הקלדה ידנית" },
            ].map(({ role, emoji, desc }) => (
              <div key={role} className="rd-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{emoji}</div>
                <div className="font-bold text-white text-lg mb-3">{role}</div>
                <div className="text-sm text-white/45 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────────── */}
      <section className="bg-[#070E1A] py-24" dir="rtl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rd-divider mb-16" />
          <h2 className="text-2xl font-black text-white text-center mb-10">
            מה אמרו לקוחות ראשונים
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { quote: "חסכנו ₪23,000 בחודשיים הראשונים רק מגילוי חשבוניות כפולות.", name: "מנכ\"ל חברת הובלות", loc: "גוש דן" },
              { quote: "סוף סוף יש לי תמונה ברורה מה כל ספק עולה לי באמת.", name: "בעל צי 8 משאיות", loc: "חיפה" },
            ].map(({ quote, name, loc }) => (
              <div key={name} className="rd-card rounded-2xl p-6">
                <div className="text-[#00D4FF] text-4xl font-serif leading-none mb-3 opacity-60">"</div>
                <p className="text-white/75 leading-relaxed mb-4">{quote}</p>
                <div className="text-sm text-white/35">— {name}, {loc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="rd-hero py-24" dir="rtl">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            תן לנתונים שלך<br />
            <span className="rd-accent">לעבוד בשבילך</span>
          </h2>
          <p className="text-white/45 mb-10 text-lg">
            דמו חינם · הגדרה תוך 7 דקות · ללא כרטיס אשראי
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/Contact" className="rd-btn-primary text-white font-bold px-10 py-4 rounded-xl inline-flex items-center gap-2">
              קבע פגישת דמו <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link to="/faq/small-fleet-management-israel" className="border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all px-8 py-4 rounded-xl text-sm font-medium">
              שאלות נפוצות
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS (AEO) ──────────────────────────────── */}
      <section className="bg-[#040A14] py-10" dir="rtl">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {[
              ["/ravdata/delivery-note-ocr", "OCR תעודות משלוח"],
              ["/ravdata/invoice-reconciliation", "התאמת חשבוניות"],
              ["/ravdata/provider-management", "ניהול ספקים"],
              ["/ravdata/logistics-dashboard", "דשבורד לוגיסטי"],
              ["/faq/small-fleet-management-israel", "שאלות נפוצות"],
              ["/blog/logistics-management-software-israel-2026", "מדריך 2026"],
              ["/ai-logistics-he", "AI ללוגיסטיקה"],
            ].map(([to, label]) => (
              <Link key={to} to={to} className="text-sm text-white/25 hover:text-[#00D4FF] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
