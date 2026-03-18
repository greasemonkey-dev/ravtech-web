import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BarChart3, Truck, FileText, CheckCircle } from "lucide-react";

/* ─── design tokens ─────────────────────────────────────────── */
const CSS = `
  .rd-font { font-family: 'Rubik', 'Heebo', sans-serif; }

  .rd-hero {
    background-color: #070E1A;
    background-image:
      radial-gradient(circle at 20% 40%, rgba(3,115,186,0.18) 0%, transparent 55%),
      radial-gradient(circle at 80% 70%, rgba(0,212,255,0.08) 0%, transparent 45%),
      radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: auto, auto, 28px 28px;
  }

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

  @keyframes rd-fade-up {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .rd-fade-up { animation: rd-fade-up 0.6s ease both; }
  .rd-delay-1 { animation-delay: 0.1s; }
  .rd-delay-2 { animation-delay: 0.2s; }

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

  .rd-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(3,115,186,0.4), transparent);
  }

  .rd-faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }

  .rd-role-card-blue  { border-color: rgba(3,115,186,0.4);  background: rgba(3,115,186,0.06); }
  .rd-role-card-green { border-color: rgba(34,197,94,0.3);  background: rgba(34,197,94,0.05); }
  .rd-role-card-purple{ border-color: rgba(168,85,247,0.3); background: rgba(168,85,247,0.05); }
  .rd-role-icon-blue   { color: #00D4FF; }
  .rd-role-icon-green  { color: rgba(74,222,128,0.9); }
  .rd-role-icon-purple { color: rgba(192,132,252,0.9); }
  .rd-role-badge-blue   { background: rgba(3,115,186,0.2);  color: #00D4FF; }
  .rd-role-badge-green  { background: rgba(34,197,94,0.15); color: rgba(74,222,128,0.9); }
  .rd-role-badge-purple { background: rgba(168,85,247,0.15); color: rgba(192,132,252,0.9); }
`;

const faqs = [
  {
    q: "מה ההבדל בין הדשבורד של בעל העסק לדשבורד של המוקדן?",
    a: "דשבורד בעל העסק מציג תמונה פיננסית: עלות לפי ספק, מגמות 12 חודשים, ציוני ספקים וחריגות. דשבורד המוקדן מציג תמונה תפעולית בזמן אמת: מיקום כל משאית, סטטוס כל משלוח, מי מאחר ולמה."
  },
  {
    q: "האם הדשבורד עובד גם על סמארטפון?",
    a: "כן. RavData AI היא Progressive Web App (PWA) — עובדת בדפדפן הטלפון ללא התקנה. הנהגים, המוקדנים ובעלי העסק יכולים לגשת מכל מכשיר. הממשק מותאם מלא למסך קטן."
  },
  {
    q: "כמה זמן לוקח עד שהדשבורד מציג נתונים אמיתיים?",
    a: "לאחר חיבור האימייל ויבוא האקסל — הדשבורד חי עם נתונים היסטוריים תוך פחות מ-10 דקות. נתונים חדשים מאימייל נכנסים אוטומטית תוך דקות מקבלת המסמך."
  },
  {
    q: "האם ניתן להגדיר התראות מותאמות אישית?",
    a: "כן. ניתן להגדיר סף להתראה לפי ספק: 'הודע לי אם עלות משלוח עולה על ₪X' או 'הודע לי אם משאית עומדת יותר מ-Y דקות'. ההתראות נשלחות לאפליקציה ולאימייל."
  },
  {
    q: "האם הדשבורד של רואה החשבון מכיל את כל הנתונים לדוח מע\"מ?",
    a: "כן. הדשבורד של רואה החשבון כולל: סיכום מע\"מ לפי תקופה, רשימת חשבוניות עם פירוט ח.פ / ע.מ, סטטוס תשלום, ויצוא מיידי לחשבשבת (חשבשבת) ולקידום (Priority)."
  },
];

const roles = [
  {
    role: "בעל העסק",
    icon: BarChart3,
    cardClass: "rd-role-card-blue",
    iconClass: "rd-role-icon-blue",
    badgeClass: "rd-role-badge-blue",
    widgets: [
      "סה\"כ הוצאות החודש + שינוי לעומת חודש קודם",
      "דירוג ספקים לפי עלות, עמידה בזמנים וציון כולל",
      "גרף מגמות עלות — 12 חודשים אחורה",
      "התראות על חריגות מחיר וספקים בעיתיים",
      "שאילתות בעברית: 'איזה ספק הכי יקר החודש?'",
    ]
  },
  {
    role: "מוקדן",
    icon: Truck,
    cardClass: "rd-role-card-green",
    iconClass: "rd-role-icon-green",
    badgeClass: "rd-role-badge-green",
    widgets: [
      "מפה חיה — מיקום כל משאית בזמן אמת",
      "טבלת משלוחים: מי יצא, מי הגיע, מי מאחר",
      "התראה אוטומטית על עיכוב מעל הסף שהוגדר",
      "לוח מחר: כמה משלוחים מתוכננים ולמי",
      "סטטוס נהגים: כמה שעות ביצוע, כמה נותרו",
    ]
  },
  {
    role: "רואה חשבון",
    icon: FileText,
    cardClass: "rd-role-card-purple",
    iconClass: "rd-role-icon-purple",
    badgeClass: "rd-role-badge-purple",
    widgets: [
      "סטטוס התאמה: כמה חשבוניות תואמות / לא תואמות",
      "סכום כולל 'בסיכון' — חשבוניות ללא תעודה",
      "סיכום מע\"מ לתקופה — מוכן לדוח",
      "תשלומים פתוחים ותשלומים באיחור",
      "יצוא חד-לחיצה לחשבשבת ולקידום",
    ]
  },
];

export default function RavDataDashboard() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "דשבורד לוגיסטי בזמן אמת | RavData AI — בעל עסק, מוקדן, רואה חשבון";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "RavData AI מספקת דשבורד לוגיסטי בזמן אמת לכל תפקיד — בעל עסק רואה עלויות וספקים, מוקדן רואה מיקום משאיות, רואה חשבון רואה חשבוניות ומע\"מ.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/ravdata/logistics-dashboard";
    document.head.appendChild(hreflangHe);

    const existingSchema = document.querySelector('script[data-page="ravdata-dashboard"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-dashboard");
    schema.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "דשבורד לוגיסטי בזמן אמת | RavData AI",
        "description": "דשבורד לניהול הובלות עם תצוגות מותאמות לבעל עסק, מוקדן ורואה חשבון",
        "inLanguage": "he",
        "url": "https://ravtech.co.il/ravdata/logistics-dashboard",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "בית", "item": "https://ravtech.co.il" },
            { "@type": "ListItem", "position": 2, "name": "RavData AI", "item": "https://ravtech.co.il/ravdata" },
            { "@type": "ListItem", "position": 3, "name": "דשבורד", "item": "https://ravtech.co.il/ravdata/logistics-dashboard" }
          ]
        }
      }
    ]);
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      [hreflangHe, schema].forEach(el => el.parentNode?.removeChild(el));
    };
  }, []);

  return (
    <div className="rd-font" style={{ backgroundColor: "#070E1A", minHeight: "100vh", color: "white" }} dir="rtl">
      <style>{CSS}</style>

      {/* ── Hero ── */}
      <div className="rd-hero py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm rd-muted mb-8">
            <Link to="/" className="hover:text-white transition-colors">בית</Link>
            <span className="mx-2">/</span>
            <Link to="/ravdata" className="hover:text-white transition-colors">RavData AI</Link>
            <span className="mx-2">/</span>
            <span className="rd-accent">דשבורד</span>
          </nav>

          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              RavData AI מספקת שלושה דשבורדים בזמן אמת — בעל עסק רואה עלויות וספקים, מוקדן רואה מיקום משאיות ועיכובים, רואה חשבון רואה חשבוניות ומע"מ. כולם עובדים על אותם נתונים, כל אחד רואה את שלו.
            </p>
          </div>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            דשבורד לוגיסטי בזמן אמת —{" "}
            <span className="rd-accent">3 תפקידים, תמונה אחת</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted max-w-2xl leading-relaxed">
            כל תפקיד בחברת ההובלה שלכם צריך מידע אחר, בזמן אחר. RavData AI נותנת לכל אחד בדיוק מה שהוא צריך — מאותה מקור אמת אחד.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* Role cards */}
        <h2 className="text-2xl font-bold mb-8 pt-8">מה כל תפקיד רואה בדשבורד שלו?</h2>
        <div className="space-y-6 mb-16">
          {roles.map(({ role, icon: Icon, cardClass, iconClass, badgeClass, widgets }) => (
            <div key={role} className={`${cardClass} rounded-2xl p-6 border`}>
              <div className="flex items-center gap-3 mb-5">
                <Icon className={`w-6 h-6 ${iconClass}`} />
                <span className={`font-bold text-sm px-3 py-1 rounded-full ${badgeClass}`}>{role}</span>
              </div>
              <ul className="space-y-2">
                {widgets.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <CheckCircle className={`w-4 h-4 ${iconClass} mt-0.5 shrink-0`} />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Live map section */}
        <h2 className="text-2xl font-bold mb-4">מעקב משאיות בזמן אמת — ישירות בדשבורד המוקדן</h2>
        <p className="rd-muted mb-6 leading-relaxed text-sm">
          המפה החיה מציגה את כל המשאיות בו-זמנית — עם מיקום, מהירות וסטטוס. מסמנת אוטומטית עצירות חריגות ומשאיות שאיבדו קשר.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { icon: "🟢", status: "בדרך", desc: "המשאית בתנועה, ETA מחושב" },
            { icon: "🟡", status: "עצירה", desc: "עומדת מעל הסף — התראה נשלחת" },
            { icon: "🔴", status: "אין קשר", desc: "נראתה לאחרונה X דקות — מיקום אחרון מוצג" },
          ].map((s, i) => (
            <div key={i} className="rd-card rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-bold mb-1">{s.status}</div>
              <div className="text-xs rd-muted">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Data sources */}
        <h2 className="text-2xl font-bold mb-4">מאיפה מגיעים הנתונים לדשבורד?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {[
            { src: "📧 אימייל", desc: "Gmail / Outlook — חשבוניות ואישורים" },
            { src: "📊 Excel", desc: "ייבוא חד-פעמי + עדכון שוטף" },
            { src: "📡 GPS", desc: "Ituran / Pointer API + PWA נהגים" },
            { src: "📄 סריקות", desc: "PDF ותמונות דרך OCR" },
          ].map((s, i) => (
            <div key={i} className="rd-card rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">{s.src}</div>
              <div className="text-xs rd-muted">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Alerts */}
        <h2 className="text-2xl font-bold mb-6">אילו התראות RavData AI שולחת אוטומטית?</h2>
        <div className="space-y-3 mb-16">
          {[
            { sev: "🔴 קריטי", msg: "חשבונית ₪12,400 מספק X — לא נמצאה תעודת משלוח תואמת", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
            { sev: "🟡 אזהרה", msg: "ספק Y — עלות החודש גבוהה ב-23% מהממוצע של 30 הימים האחרונים", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)" },
            { sev: "🟡 אזהרה", msg: "משאית 42-881 עומדת 18 דקות — מעל סף ההתראה המוגדר", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)" },
            { sev: "🔵 מידע", msg: "הופקה חשבונית כפולה ממספר ספק Z — מספר חשבונית 2024-0891 כבר קיים", bg: "rgba(3,115,186,0.08)", border: "rgba(3,115,186,0.2)" },
            { sev: "🔴 קריטי", msg: "רישיון נהיגה של דוד אלון פג בעוד 14 יום", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)" },
          ].map((a, i) => (
            <div key={i} className="rounded-lg px-4 py-3 text-sm flex gap-3" style={{ background: a.bg, border: `1px solid ${a.border}` }}>
              <span className="shrink-0">{a.sev}</span>
              <span style={{ color: "rgba(255,255,255,0.75)" }}>{a.msg}</span>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על הדשבורד</h2>
        <div className="mb-16">
          {faqs.map((f, i) => (
            <div key={i} className="rd-faq-item py-6">
              <h3 className="font-bold mb-2">{f.q}</h3>
              <p className="text-sm rd-muted leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, rgba(3,115,186,0.25) 0%, rgba(0,180,255,0.15) 100%)", border: "1px solid rgba(3,115,186,0.4)" }}>
          <h2 className="text-2xl font-bold mb-2">ראו את הדשבורד חי על הנתונים שלכם</h2>
          <p className="mb-6 rd-muted">בדמו אנחנו מייבאים נתון אמיתי שלכם ומראים את כל שלושת הדשבורדים</p>
          <Link to="/Contact" className="rd-btn-primary inline-block text-white px-8 py-3 rounded-lg font-bold">
            קבע דמו חינם
          </Link>
        </div>

        {/* Internal links */}
        <div className="rd-divider mb-8" />
        <h2 className="text-lg font-bold mb-4">יכולות נוספות של RavData AI</h2>
        <ul className="space-y-2">
          {[
            { to: "/ravdata/delivery-note-ocr", label: "קריאת תעודות משלוח אוטומטית" },
            { to: "/ravdata/invoice-reconciliation", label: "התאמת חשבוניות לתעודות משלוח" },
            { to: "/ravdata/provider-management", label: "ניהול ספקי הובלה" },
            { to: "/faq/small-fleet-management-israel", label: "שאלות נפוצות: ניהול צי קטן בישראל" },
          ].map(link => (
            <li key={link.to}>
              <Link to={link.to} className="text-sm rd-accent hover:underline">← {link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
