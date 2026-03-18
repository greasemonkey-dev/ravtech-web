import { useEffect } from "react";
import { Link } from "react-router-dom";
import { XCircle, CheckCircle } from "lucide-react";

/* ─── design tokens (same as RavDataHome) ───────────────────── */
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
  .rd-delay-3 { animation-delay: 0.3s; }

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

  .rd-alert-amber {
    background: rgba(251,191,36,0.08);
    border: 1px solid rgba(251,191,36,0.25);
  }
  .rd-step-circle {
    background: linear-gradient(135deg, #0373BA 0%, #00B4FF 100%);
    box-shadow: 0 0 16px rgba(3,115,186,0.4);
  }
  .rd-faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
`;

const steps = [
  { step: "01", title: "ספק שולח חשבונית למייל", desc: "RavData AI מזהה את המייל אוטומטית, חולצת את פרטי החשבונית עם AI — מספר, תאריך, סכום, ע.מ. של הספק." },
  { step: "02", title: "AI מחפשת תעודות משלוח תואמות", desc: "המערכת מסרקת את כל תעודות המשלוח הפתוחות לאותו ספק בחלון של 7 ימים לפני מועד החשבונית." },
  { step: "03", title: "התאמה אוטומטית או התראה", desc: "אם נמצאה תעודה — ההתאמה נרשמת אוטומטית. אם לא נמצאה — מתריעים לרואה החשבון: חשבונית ללא כיסוי." },
  { step: "04", title: "חריגות מסומנות לבדיקה", desc: "פערים בסכום (מעל 5%), תאריכים חשודים, ספקים עם דפוס חריגות — כל אלה עולים אוטומטית לתור הבדיקה." },
];

const faqs = [
  {
    q: "כיצד RavData AI מתאימה חשבונית לתעודת משלוח?",
    a: "RavData AI משתמשת ב-AI לחילוץ שם הספק, מספר תעודה ותאריך מהחשבונית, ואז מחפשת תעודות משלוח פתוחות מאותו ספק בטווח של 7 ימים. ההתאמה היא אוטומטית בביטחון גבוה, ומסומנת לאישור אנושי בביטחון נמוך."
  },
  {
    q: "מה קורה כשחשבונית לא נמצאת לה תעודת משלוח?",
    a: "המערכת מייצרת התראה אוטומטית לרואה החשבון ולבעל העסק: 'חשבונית מספר X של ספק Y — לא נמצאה תעודת משלוח תואמת'. הסכום מסומן כ'בסיכון' עד לאישור ידני."
  },
  {
    q: "האם RavData AI עובדת עם חשבשבת וקידום?",
    a: "כן. RavData AI מייצאת נתוני חשבוניות וסיכומי מע\"מ לפורמט המתאים לחשבשבת (חשבשבת) ולקידום (Priority) — כולל ציון ח.פ / ע.מ, שיעור מע\"מ ופירוט עסקאות."
  },
  {
    q: "כמה זמן לוקח להגדיר את ההתאמה?",
    a: "חיבור האימייל (Gmail / Outlook) לוקח כ-2 דקות. ייבוא האקסל הקיים לוקח עוד 5 דקות. מרגע ההגדרה — כל חשבונית חדשה שמגיעה למייל מטופלת אוטומטית."
  },
];

export default function RavDataReconciliation() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "התאמת חשבוניות לתעודות משלוח אוטומטית | RavData AI";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "RavData AI מתאימה חשבוניות הובלה לתעודות משלוח אוטומטית עם AI — מזהה חריגות תשלום, מתריעה על חשבוניות ללא כיסוי ומייצאת לחשבשבת / קידום.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/ravdata/invoice-reconciliation";
    document.head.appendChild(hreflangHe);

    const existingSchema = document.querySelector('script[data-page="ravdata-reconciliation"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-reconciliation");
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
        "@type": "HowTo",
        "name": "כיצד RavData AI מתאימה חשבוניות לתעודות משלוח",
        "inLanguage": "he",
        "step": steps.map(s => ({
          "@type": "HowToStep",
          "name": s.title,
          "text": s.desc
        }))
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
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm rd-muted mb-8">
            <Link to="/" className="hover:text-white transition-colors">בית</Link>
            <span className="mx-2">/</span>
            <Link to="/ravdata" className="hover:text-white transition-colors">RavData AI</Link>
            <span className="mx-2">/</span>
            <span className="rd-accent">התאמת חשבוניות</span>
          </nav>

          {/* TL;DR */}
          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              RavData AI מזהה חשבוניות הובלה שמגיעות לאימייל, מתאימה אותן לתעודות המשלוח הקיימות, ומתריעה על פערים — לפני שמשלמים. ללא הגדרה מחדש של תהליכים.
            </p>
          </div>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            התאמת חשבוניות לתעודות משלוח —{" "}
            <span className="rd-accent">אוטומטי עם AI</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted max-w-2xl leading-relaxed">
            כמה פעמים שילמתם חשבונית שלא הייתה לה תעודת משלוח? RavData AI מוודאת שכל שקל שאתם משלמים מגובה במשלוח שבאמת הגיע.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="rd-card rounded-xl p-5 text-center" style={{ borderColor: "rgba(239,68,68,0.3)" }}>
            <XCircle className="w-8 h-8 mx-auto mb-3" style={{ color: "rgba(239,68,68,0.7)" }} />
            <div className="font-bold text-sm mb-2">ללא RavData AI</div>
            <div className="text-xs rd-muted leading-relaxed">חשבונית מגיעה → רואה חשבון מאשר → משלמים → אולי מגלים טעות בהמשך</div>
          </div>
          <div className="flex items-center justify-center text-3xl rd-muted">←</div>
          <div className="rd-card rounded-xl p-5 text-center" style={{ borderColor: "rgba(34,197,94,0.3)" }}>
            <CheckCircle className="w-8 h-8 mx-auto mb-3" style={{ color: "rgba(34,197,94,0.7)" }} />
            <div className="font-bold text-sm mb-2">עם RavData AI</div>
            <div className="text-xs rd-muted leading-relaxed">חשבונית מגיעה → AI מתאימה לתעודה → חריגה? → התראה לפני תשלום</div>
          </div>
        </div>

        <div className="rd-divider mb-16" />

        {/* How it works */}
        <h2 className="text-2xl font-bold mb-8">כיצד עובד תהליך ההתאמה האוטומטי?</h2>
        <div className="space-y-5 mb-16">
          {steps.map((s, i) => (
            <div key={s.step} className="flex gap-4 items-start">
              <div className="rd-step-circle w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 text-white">
                {s.step}
              </div>
              <div className="rd-card flex-1 rounded-xl p-4">
                <div className="font-bold mb-1">{s.title}</div>
                <div className="text-sm rd-muted leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Alert types */}
        <h2 className="text-2xl font-bold mb-8">אילו חריגות RavData AI מזהה?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { icon: "🔴", title: "חשבונית ללא תעודת משלוח", desc: "ספק חייב אתכם על משלוח שאין לו תיעוד — RavData AI מסמנת לפני תשלום" },
            { icon: "🟡", title: "פער בסכום", desc: "החשבונית גבוהה ב-12% מהממוצע של אותו ספק? — התראה אוטומטית" },
            { icon: "🟡", title: "תאריך חשוד", desc: "חשבונית שתאריכה חורג מ-30 יום אחורה — דורשת אימות" },
            { icon: "🔴", title: "חשבונית כפולה", desc: "אותו מספר חשבונית הוגש פעמיים — נתפס אוטומטית" },
          ].map((item, i) => (
            <div key={i} className="rd-card rounded-xl p-5">
              <div className="text-2xl mb-3">{item.icon}</div>
              <div className="font-bold mb-1">{item.title}</div>
              <div className="text-sm rd-muted">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על התאמת חשבוניות</h2>
        <div className="space-y-0 mb-16">
          {faqs.map((f, i) => (
            <div key={i} className="rd-faq-item py-6">
              <h3 className="font-bold mb-2">{f.q}</h3>
              <p className="text-sm rd-muted leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, rgba(3,115,186,0.25) 0%, rgba(0,180,255,0.15) 100%)", border: "1px solid rgba(3,115,186,0.4)" }}>
          <h2 className="text-2xl font-bold mb-2">רוצים לראות את זה עובד על הנתונים שלכם?</h2>
          <p className="mb-6 rd-muted">דמו חינם — מגדירים יחד, ורואים חריגה אמיתית בנתונים שלכם</p>
          <Link to="/Contact" className="rd-btn-primary inline-block text-white px-8 py-3 rounded-lg font-bold">
            קבע דמו חינם
          </Link>
        </div>

        {/* Internal links */}
        <div className="rd-divider mb-8" />
        <h2 className="text-lg font-bold mb-4">יכולות נוספות של RavData AI</h2>
        <ul className="space-y-2">
          {[
            { to: "/ravdata/delivery-note-ocr", label: "קריאת תעודות משלוח אוטומטית עם OCR" },
            { to: "/ravdata/provider-management", label: "ניהול ספקי הובלה במקום אחד" },
            { to: "/ravdata/logistics-dashboard", label: "דשבורד לוגיסטי בזמן אמת" },
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
