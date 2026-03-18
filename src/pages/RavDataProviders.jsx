import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

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

  .rd-table-header {
    background: rgba(3,115,186,0.12);
    border-bottom: 1px solid rgba(3,115,186,0.2);
  }
  .rd-table-row {
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .rd-table-row:last-child {
    border-bottom: none;
  }
`;

const faqs = [
  {
    q: "כיצד RavData AI מנרמלת שמות ספקים שונים?",
    a: "RavData AI משתמשת בחיפוש טקסטואלי מטושטש (pg_trgm) לזיהוי וריאציות של אותו ספק — לדוגמה 'משה הובלות', 'MOSHE TRANSPORT' ו'משה הובלות בע\"מ' מזוהים כאותו ספק. ניתן גם לאשר או לדחות מיזוגים ידנית."
  },
  {
    q: "מהו ציון הספק (Provider Score) ואיך הוא מחושב?",
    a: "ציון הספק הוא מדד משוקלל 0–100 המחושב לפי: אחוז אספקה בזמן, מהירות הגשת תעודות משלוח, עקביות מחירים לעומת ממוצע, ומספר חריגות בחשבוניות ב-30 הימים האחרונים."
  },
  {
    q: "האם ניתן להוסיף ספק ידנית?",
    a: "כן. מלבד זיהוי אוטומטי מתוך מסמכים, ניתן להוסיף ספק ידנית עם כל הפרטים — ח.פ, איש קשר, אימייל ותנאי תשלום. הספק ישולב מיד בכל הדוחות."
  },
  {
    q: "כמה ספקים ניתן לנהל ב-RavData AI?",
    a: "אין הגבלה על מספר הספקים. RavData AI מתאימה לחברות הובלה עם 2–50 ספקים פעילים. ככל שיש יותר נתונים, כך הציון והמגמות מדויקים יותר."
  },
];

const providers = [
  { name: "משה הובלות", cost: "₪234,000", onTime: "94%", score: 4.8, scoreColor: "rgba(34,197,94,0.9)" },
  { name: "כרמל לוגיסטיקה", cost: "₪198,000", onTime: "87%", score: 4.2, scoreColor: "#00D4FF" },
  { name: "דן הובלות", cost: "₪156,000", onTime: "71%", score: 3.1, scoreColor: "rgba(251,191,36,0.9)" },
];

export default function RavDataProviders() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ניהול ספקי הובלה במקום אחד | RavData AI";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "RavData AI מרכזת את כל ספקי ההובלה שלכם — עם ציון ביצועים, מגמות עלות, והתראות על חריגות. ניהול ספקים חכם לחברות לוגיסטיקה קטנות בישראל.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/ravdata/provider-management";
    document.head.appendChild(hreflangHe);

    const existingSchema = document.querySelector('script[data-page="ravdata-providers"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-providers");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
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
            <span className="rd-accent">ניהול ספקים</span>
          </nav>

          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              RavData AI מרכזת את כל ספקי ההובלה — מנרמלת שמות, מחשבת ציון ביצועים לכל ספק ומתריעה כשספק מתייקר, מתעכב, או מגיש חשבוניות לא תקינות.
            </p>
          </div>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            ניהול ספקי הובלה —{" "}
            <span className="rd-accent">כל הספקים, לוח אחד</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted max-w-2xl leading-relaxed">
            4 ספקים, 3 אקסלים, ושום תמונה ברורה? RavData AI מרכזת הכל — ומראה מי מהספקים שלכם באמת שווה את הכסף.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* Provider score table */}
        <h2 className="text-2xl font-bold mb-6 pt-8">ציון ביצועים לכל ספק — מחושב אוטומטית</h2>
        <div className="rounded-2xl overflow-hidden mb-16" style={{ border: "1px solid rgba(3,115,186,0.25)" }}>
          <div className="rd-table-header grid grid-cols-5 gap-2 px-6 py-3 text-xs rd-muted font-bold uppercase tracking-wider">
            <span className="col-span-2">ספק</span>
            <span>עלות חודשית</span>
            <span>בזמן</span>
            <span>ציון</span>
          </div>
          {providers.map((p, i) => (
            <div key={i} className="rd-table-row grid grid-cols-5 gap-2 px-6 py-4 items-center" style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)" }}>
              <span className="col-span-2 font-medium">{p.name}</span>
              <span className="rd-muted font-mono text-sm">{p.cost}</span>
              <span className="rd-muted text-sm">{p.onTime}</span>
              <span className="font-bold flex items-center gap-1" style={{ color: p.scoreColor }}>
                <Star className="w-3 h-3" fill="currentColor" /> {p.score}
              </span>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* Feature cards */}
        <h2 className="text-2xl font-bold mb-6">מה כוללת מודול ניהול הספקים?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {[
            { icon: CheckCircle, title: "זיהוי אוטומטי של ספקים חדשים", desc: "כל ספק שמופיע לראשונה במסמך מזוהה, מנורמל ונוסף לרשימה — אפילו אם שמו כתוב אחרת" },
            { icon: TrendingUp, title: "מגמות עלות לאורך זמן", desc: "גרף עלות ל-12 חודשים לכל ספק — מזהה עלייה הדרגתית שקשה לראות באקסל" },
            { icon: AlertTriangle, title: "התראות על חריגות", desc: "ספק התייקר ב-15% החודש? לא הגיש תעודות בזמן? RavData AI מתריעה אוטומטית" },
            { icon: Star, title: "ציון ספק (0–5)", desc: "ממוצע משוקלל: עמידה בזמנים, תיעוד, עקביות מחירים — מתעדכן מדי יום" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rd-card rounded-xl p-5">
              <Icon className="w-5 h-5 mb-3" style={{ color: "#00D4FF" }} />
              <div className="font-bold mb-1">{title}</div>
              <div className="text-sm rd-muted">{desc}</div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-16" />

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8">שאלות נפוצות על ניהול ספקים</h2>
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
          <h2 className="text-2xl font-bold mb-2">גלו מה הספקים שלכם באמת עולים</h2>
          <p className="mb-6 rd-muted">דמו חינם — מייבאים את הנתונים שלכם ורואים את הדירוג מיד</p>
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
            { to: "/ravdata/invoice-reconciliation", label: "התאמת חשבוניות לתעודות משלוח" },
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
