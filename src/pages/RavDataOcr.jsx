import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Camera, FileCheck, AlertCircle, CheckCircle } from "lucide-react";

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

  .rd-step-circle {
    background: linear-gradient(135deg, #0373BA 0%, #00B4FF 100%);
    box-shadow: 0 0 16px rgba(3,115,186,0.4);
  }
  .rd-faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .rd-field-tag {
    background: rgba(3,115,186,0.12);
    border: 1px solid rgba(3,115,186,0.2);
    color: rgba(255,255,255,0.7);
  }
`;

const faqs = [
  {
    q: "האם OCR של RavData AI עובד עם עברית?",
    a: "כן. RavData AI משתמשת ב-Google Cloud Document AI — המנוע עם הדיוק הגבוה ביותר לעברית. תומך בתעודות משלוח מעורבות עברית-אנגלית, בכתב יד מודפס, ובתמונות שצולמו בסמארטפון בתאורה רגילה."
  },
  {
    q: "מה קורה כשה-OCR לא בטוח בשדה מסוים?",
    a: "כל שדה מקבל ציון ביטחון (0–100%). שדות מתחת ל-80% ביטחון מודגשים בצהוב בממשק הסקירה. הנתון לא נשמר אוטומטית עד לאישור ידני — כך אף נתון כספי לא נכנס למערכת ללא אחריות."
  },
  {
    q: "אילו פורמטים של תעודת משלוח נתמכים?",
    a: "PDF, JPG, PNG — צילום ממצלמת הטלפון, סריקה, או קובץ מהמחשב. גם Excel / CSV מיובאים ישירות. אין צורך בתבנית אחידה — ה-AI מזהה שדות מכל פורמט."
  },
  {
    q: "כמה זמן לוקח לעבד תעודת משלוח?",
    a: "עיבוד ממוצע: 15–30 שניות לתעודה. בזמן שהמסמך מעובד, הממשק מראה סטטוס בזמן אמת — ומתריע כשהתוצאה מוכנה לסקירה."
  },
  {
    q: "האם אפשר לייבא תעודות משלוח ישנות?",
    a: "כן. בתהליך ההגדרה הראשוני מייבאים את האקסל הקיים עם ההיסטוריה. מרגע ההגדרה, תעודות חדשות שמגיעות לאימייל מעובדות אוטומטית."
  },
];

export default function RavDataOcr() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "קריאת תעודות משלוח אוטומטית עם AI | RavData AI OCR";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "RavData AI קוראת תעודות משלוח (PDF, תמונה, אקסל) עם OCR בעברית — חולצת שדות אוטומטית, מדגישה נתונים לא ברורים, ומזינה ישירות למחסן הנתונים.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/ravdata/delivery-note-ocr";
    document.head.appendChild(hreflangHe);

    const existingSchema = document.querySelector('script[data-page="ravdata-ocr"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-ocr");
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
        "name": "כיצד RavData AI קוראת תעודת משלוח אוטומטית",
        "inLanguage": "he",
        "step": [
          { "@type": "HowToStep", "name": "העלאה", "text": "מצלמים או מעלים את תעודת המשלוח (PDF / JPG / PNG)" },
          { "@type": "HowToStep", "name": "OCR ועיבוד", "text": "Google Cloud Document AI קורא את הטקסט — כולל עברית מעורבת" },
          { "@type": "HowToStep", "name": "חילוץ שדות", "text": "Claude AI חולץ שדות מובנים: מספר תעודה, תאריך, ספק, כתובות, משקל" },
          { "@type": "HowToStep", "name": "ציון ביטחון", "text": "כל שדה מקבל ציון ביטחון — שדות מתחת ל-80% מסומנים לאישור" },
          { "@type": "HowToStep", "name": "שמירה אוטומטית", "text": "שדות עם ביטחון גבוה נשמרים אוטומטית — שדות נמוכים דורשים אישור" }
        ]
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
            <span className="rd-accent">OCR תעודות משלוח</span>
          </nav>

          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              RavData AI קוראת תעודות משלוח בעברית מכל פורמט — PDF, תמונה, Excel — חולצת שדות אוטומטית, מדגישה נתונים לא ברורים בצהוב, ומזינה ישירות למערכת. ללא הקלדה ידנית.
            </p>
          </div>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            קריאת תעודות משלוח —{" "}
            <span className="rd-accent">OCR בעברית עם AI</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted max-w-2xl leading-relaxed">
            כל תעודת משלוח שמגיעה — בין אם PDF, צילום טלפון או אקסל — הופכת תוך שניות לנתון מסודר במערכת. ללא הקלדה ידנית, ללא טעויות העתקה.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* How it works */}
        <h2 className="text-2xl font-bold mb-8 pt-8">כיצד עובד תהליך ה-OCR?</h2>
        <div className="space-y-4 mb-16">
          {[
            { icon: Camera, step: "①", title: "צלמו או העלו", desc: "מצלמת הטלפון, סריקה, PDF מהאימייל, Excel — הכל נכנס" },
            { icon: FileCheck, step: "②", title: "OCR בעברית", desc: "Google Cloud Document AI קורא את הטקסט — כולל שדות מעורבים עברית-אנגלית" },
            { icon: AlertCircle, step: "③", title: "AI חולץ ומדרג", desc: "Claude AI מזהה שדות: מספר תעודה, תאריך, ספק, כתובות, משקל. כל שדה מקבל ציון ביטחון 0–100%" },
            { icon: CheckCircle, step: "④", title: "ביטחון גבוה → שמור. נמוך → צהוב", desc: "שדות מעל 80% ביטחון נשמרים אוטומטית. שדות מתחת — מודגשים בצהוב לאישורך. אף נתון כספי לא עובר ללא אחריות." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="flex gap-4 items-start">
              <div className="rd-step-circle w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white">
                {step}
              </div>
              <div className="rd-card flex-1 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 rd-accent" style={{ color: "#00D4FF" }} />
                  <span className="font-bold">{title}</span>
                </div>
                <p className="text-sm rd-muted leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Supported fields */}
        <h2 className="text-2xl font-bold mb-6">אילו שדות RavData AI חולצת מתעודת משלוח?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {[
            "מספר תעודה", "תאריך תעודה", "שם ספק", "ח.פ / ע.מ ספק",
            "כתובת מוצא", "כתובת יעד", "תיאור מטען", "משקל (ק\"ג)",
            "כמות", "שם נהג", "לוחית רישוי", "חתימת קבלה"
          ].map((field, i) => (
            <div key={i} className="rd-field-tag rounded-lg px-3 py-2 text-sm text-center">
              {field}
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Confidence tiers */}
        <h2 className="text-2xl font-bold mb-6">מה המשמעות של ציון הביטחון?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="rd-card rounded-xl p-5 text-center" style={{ borderColor: "rgba(34,197,94,0.3)" }}>
            <div className="font-bold text-lg mb-1" style={{ color: "rgba(34,197,94,0.9)" }}>80%+</div>
            <div className="text-sm font-bold mb-2">🟢 נשמר אוטומטית</div>
            <div className="text-xs rd-muted">ה-AI בטוח. הנתון נכנס למערכת ללא התערבות</div>
          </div>
          <div className="rd-card rounded-xl p-5 text-center" style={{ borderColor: "rgba(251,191,36,0.3)" }}>
            <div className="font-bold text-lg mb-1" style={{ color: "rgba(251,191,36,0.9)" }}>60–80%</div>
            <div className="text-sm font-bold mb-2">🟡 דורש אישורך</div>
            <div className="text-xs rd-muted">השדה מודגש בצהוב — בדקו ואשרו לפני שמירה</div>
          </div>
          <div className="rd-card rounded-xl p-5 text-center" style={{ borderColor: "rgba(239,68,68,0.3)" }}>
            <div className="font-bold text-lg mb-1" style={{ color: "rgba(239,68,68,0.9)" }}>מתחת ל-60%</div>
            <div className="text-sm font-bold mb-2">🔴 הכנסה ידנית</div>
            <div className="text-xs rd-muted">ה-AI לא בטוח — השדה ריק, ממתין להקלדה</div>
          </div>
        </div>

        <div className="rd-divider mb-16" />

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על OCR לתעודות משלוח</h2>
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
          <h2 className="text-2xl font-bold mb-2">ראו OCR עובד על תעודה שלכם</h2>
          <p className="mb-6 rd-muted">מביאים תעודת משלוח אמיתית לדמו — ורואים את כל השדות מחולצים תוך 30 שניות</p>
          <Link to="/Contact" className="rd-btn-primary inline-block text-white px-8 py-3 rounded-lg font-bold">
            קבע דמו חינם
          </Link>
        </div>

        {/* Internal links */}
        <div className="rd-divider mb-8" />
        <h2 className="text-lg font-bold mb-4">יכולות נוספות של RavData AI</h2>
        <ul className="space-y-2">
          {[
            { to: "/ravdata/invoice-reconciliation", label: "התאמת חשבוניות לתעודות משלוח אוטומטית" },
            { to: "/ravdata/provider-management", label: "ניהול ספקי הובלה במקום אחד" },
            { to: "/ravdata/logistics-dashboard", label: "דשבורד לוגיסטי בזמן אמת" },
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
