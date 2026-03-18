import { useEffect } from "react";
import { Link } from "react-router-dom";

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

  .rd-stat-card {
    background: rgba(3,115,186,0.08);
    border: 1px solid rgba(3,115,186,0.2);
    text-align: center;
  }

  .rd-table th {
    background: rgba(3,115,186,0.12);
    border-bottom: 1px solid rgba(3,115,186,0.2);
    padding: 12px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 700;
    color: rgba(255,255,255,0.7);
  }
  .rd-table th:first-child { text-align: right; }
  .rd-table td {
    padding: 12px;
    text-align: center;
    font-size: 0.875rem;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.65);
  }
  .rd-table td:first-child { text-align: right; }
  .rd-table tr:nth-child(even) td { background: rgba(255,255,255,0.015); }
  .rd-table .rd-accent-cell { color: #00D4FF; font-weight: 700; }

  .rd-step-circle {
    background: linear-gradient(135deg, #0373BA 0%, #00B4FF 100%);
    box-shadow: 0 0 16px rgba(3,115,186,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
  }
`;

const comparisonData = [
  { feature: "ממשק בעברית", ravdata: "✅ מלא", generic: "❌ / חלקי", paper: "—" },
  { feature: "OCR תעודות משלוח", ravdata: "✅ אוטומטי", generic: "❌", paper: "❌ ידני" },
  { feature: "התאמת חשבוניות", ravdata: "✅ AI", generic: "⚠️ ידני", paper: "❌" },
  { feature: "ייצוא לחשבשבת / קידום", ravdata: "✅", generic: "⚠️ תלוי מוצר", paper: "❌" },
  { feature: "מעקב GPS", ravdata: "✅ Ituran + PWA", generic: "✅ נפרד", paper: "❌" },
  { feature: "דשבורד לפי תפקיד", ravdata: "✅ 3 תפקידים", generic: "⚠️ אחיד", paper: "❌" },
  { feature: "זמן הגדרה", ravdata: "7 דקות", generic: "שבועות", paper: "—" },
  { feature: "מחיר חודשי", ravdata: "מ-₪490", generic: "₪800–3,000+", paper: "₪0 (אך עלות זמן)" },
];

export default function RavDataBlog() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "תוכנת ניהול הובלות לחברות קטנות בישראל 2026 — מדריך מקיף";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "מדריך מקיף לבחירת תוכנת ניהול הובלות לחברות לוגיסטיקה קטנות בישראל 2026 — השוואת פתרונות, קריטריונים לבחירה, ומה RavData AI עושה אחרת.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/blog/logistics-management-software-israel-2026";
    document.head.appendChild(hreflangHe);

    const existingSchema = document.querySelector('script[data-page="ravdata-blog"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-blog");
    schema.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "תוכנת ניהול הובלות לחברות קטנות בישראל 2026 — מדריך מקיף",
        "description": "מדריך לבחירת תוכנת ניהול הובלות לחברות לוגיסטיקה קטנות בישראל 2026",
        "inLanguage": "he",
        "datePublished": "2026-03-16",
        "dateModified": "2026-03-16",
        "author": { "@type": "Organization", "name": "RavTech", "url": "https://ravtech.co.il" },
        "publisher": { "@type": "Organization", "name": "RavTech", "logo": { "@type": "ImageObject", "url": "https://ravtech.co.il/logo-schema.png" } },
        "url": "https://ravtech.co.il/blog/logistics-management-software-israel-2026",
        "mainEntityOfPage": "https://ravtech.co.il/blog/logistics-management-software-israel-2026"
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "מהי תוכנת ניהול הובלות לחברות קטנות?",
            "acceptedAnswer": { "@type": "Answer", "text": "תוכנת ניהול הובלות לחברות קטנות היא מערכת דיגיטלית המרכזת את ניהול המשאיות, הנהגים, הספקים, תעודות המשלוח והחשבוניות — ומחליפה את ניהול האקסל והוואטסאפ בדשבורד חי ואוטומטי." }
          },
          {
            "@type": "Question",
            "name": "כמה עולה תוכנה לניהול הובלות בישראל?",
            "acceptedAnswer": { "@type": "Answer", "text": "תוכנות ניהול הובלות בישראל נעות בין ₪490 לחודש לפתרונות בסיסיים לחברות קטנות, ועד ₪3,000+ לחודש למערכות ERP מלאות לצי גדול. RavData AI מתחילה מ-₪490 לחודש ומיועדת לחברות עם 2–20 משאיות." }
          },
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
            <span className="rd-accent">מדריך 2026</span>
          </nav>

          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              חברות הובלה קטנות בישראל (2–20 משאיות) זקוקות לתוכנה שמבינה עברית, מתאימה חשבוניות לתעודות משלוח, ומתחברת לחשבשבת / קידום — ללא חודשי הטמעה. RavData AI מתחילה מ-₪490 לחודש עם הגדרה של 7 דקות.
            </p>
          </div>

          <p className="text-xs rd-muted mb-4 tracking-widest">עודכן: מרץ 2026 | RavTech</p>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            תוכנת ניהול הובלות —{" "}
            <span className="rd-accent">מדריך מקיף לישראל 2026</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted max-w-2xl leading-relaxed">
            אם אתם מנהלים חברת הובלה עם 2–20 משאיות ועדיין עובדים עם אקסל ווואטסאפ — המדריך הזה הוא בשבילכם.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* What is */}
        <h2 className="text-2xl font-bold mb-4 pt-8">מהי תוכנת ניהול הובלות לחברות קטנות?</h2>
        <p className="rd-muted mb-10 leading-relaxed text-sm">
          תוכנת ניהול הובלות לחברות קטנות היא מערכת דיגיטלית המרכזת את ניהול המשאיות, הנהגים, הספקים, תעודות המשלוח והחשבוניות. היא מחליפה את ניהול האקסל והוואטסאפ בדשבורד חי שמאפשר לבעל העסק, למוקדן ולרואה החשבון לראות כל אחד את הנתונים הרלוונטיים לו.
        </p>

        <div className="rd-divider mb-10" />

        {/* Key criteria */}
        <h2 className="text-2xl font-bold mb-6">5 קריטריונים לבחירת תוכנת הובלות לצי קטן</h2>
        <ol className="space-y-4 mb-14">
          {[
            { title: "ממשק בעברית ותמיכה מקומית", desc: "תוכנה שלא עובדת בעברית בצורה מלאה תוצאה: שגיאות הזנה, תסכול ונטישה. בדקו שהממשק, הדוחות וההתראות — הכל בעברית." },
            { title: "קריאת תעודות משלוח אוטומטית", desc: "ללא OCR בעברית — תמשיכו להקליד ידנית. חפשו מערכת שמסוגלת לקרוא PDF, תמונות וסריקות ולחלץ שדות בעברית ובאנגלית." },
            { title: "התאמת חשבוניות לתעודות משלוח", desc: "זוהי הפונקציה עם ה-ROI הגבוה ביותר — מונעת תשלום כפול ותשלום על שירותים שלא סופקו. מערכת ללא התאמה אוטומטית היא מחסנית ידנית." },
            { title: "ייצוא לחשבשבת ולקידום", desc: "רוב חברות ההובלה הקטנות בישראל עובדות עם חשבשבת (חשבשבת) או קידום (Priority). וודאו שהתוכנה מייצאת בפורמט התואם — כולל מע\"מ ופירוט ח.פ." },
            { title: "הגדרה מהירה — ללא חודשי הטמעה", desc: "מערכות ERP גדולות דורשות 3–6 חודשי הטמעה. לצי קטן זה מותרות. חפשו מערכת שמתחברת לאימייל ולאקסל הקיים ויוצאת לאוויר תוך ימים." },
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <div className="rd-step-circle w-8 h-8 rounded-full text-sm">{i + 1}</div>
              <div className="rd-card flex-1 rounded-xl p-4">
                <div className="font-bold mb-1">{item.title}</div>
                <div className="text-sm rd-muted">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>

        <div className="rd-divider mb-14" />

        {/* Comparison table */}
        <h2 className="text-2xl font-bold mb-6">השוואה: RavData AI לעומת פתרונות אחרים</h2>
        <div className="overflow-x-auto mb-14 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(3,115,186,0.25)" }}>
          <table className="w-full rd-table">
            <thead>
              <tr>
                <th>יכולת</th>
                <th className="rd-accent" style={{ color: "#00D4FF" }}>RavData AI</th>
                <th>תוכנות גנריות</th>
                <th>נייר / אקסל</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td className="rd-accent-cell">{row.ravdata}</td>
                  <td>{row.generic}</td>
                  <td>{row.paper}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rd-divider mb-14" />

        {/* Stats */}
        <h2 className="text-2xl font-bold mb-6">עובדות ומספרים על שוק הלוגיסטיקה הישראלי</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { stat: "4,000+", label: "חברות הובלה פעילות בישראל" },
            { stat: "75%", label: "מנהלות נתונים באקסל ו/או נייר" },
            { stat: "₪23,000", label: "חיסכון ממוצע בגילוי חריגות ב-2 חודשים ראשונים" },
            { stat: "7 דקות", label: "זמן הגדרת RavData AI" },
          ].map((s, i) => (
            <div key={i} className="rd-stat-card rounded-xl p-4">
              <div className="text-2xl font-bold rd-accent mb-1">{s.stat}</div>
              <div className="text-xs rd-muted">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rd-divider mb-14" />

        {/* FAQ */}
        <h2 className="text-2xl font-bold mb-8">שאלות נפוצות</h2>
        <div className="mb-14">
          {[
            { q: "מהי תוכנת ניהול הובלות לחברות קטנות?", a: "תוכנת ניהול הובלות לחברות קטנות היא מערכת דיגיטלית המרכזת את ניהול המשאיות, הנהגים, הספקים, תעודות המשלוח והחשבוניות — ומחליפה את ניהול האקסל והוואטסאפ בדשבורד חי ואוטומטי." },
            { q: "כמה עולה תוכנה לניהול הובלות בישראל?", a: "תוכנות ניהול הובלות בישראל נעות בין ₪490 לחודש (RavData AI לצי קטן) ועד ₪3,000+ לחודש למערכות ERP מלאות לצי גדול." },
            { q: "האם אפשר לנהל הובלות ללא תוכנה ייעודית?", a: "אפשרי — אך עלות ההזדמנות גבוהה: חשבוניות לא מתואמות, עיכובים שלא מתועדים, ואי-ידיעה מה כל ספק עולה באמת. חברות הובלה ישראליות מפסידות בממוצע ₪10,000–30,000 בשנה על חריגות שלא מזוהות." },
          ].map((f, i) => (
            <div key={i} className="rd-faq-item py-6">
              <h3 className="font-bold mb-2">{f.q}</h3>
              <p className="text-sm rd-muted leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, rgba(3,115,186,0.25) 0%, rgba(0,180,255,0.15) 100%)", border: "1px solid rgba(3,115,186,0.4)" }}>
          <h2 className="text-2xl font-bold mb-2">מוכנים לראות איך זה נראה על הנתונים שלכם?</h2>
          <p className="mb-6 rd-muted">דמו חינם, 14 יום ניסיון, ללא כרטיס אשראי</p>
          <Link to="/Contact" className="rd-btn-primary inline-block text-white px-8 py-3 rounded-lg font-bold">
            קבע דמו חינם
          </Link>
        </div>

        {/* Internal links */}
        <div className="rd-divider mb-8" />
        <h2 className="text-lg font-bold mb-4">קריאה נוספת</h2>
        <ul className="space-y-2">
          {[
            { to: "/ravdata", label: "RavData AI — עמוד ראשי" },
            { to: "/ravdata/invoice-reconciliation", label: "כיצד עובדת התאמת חשבוניות אוטומטית" },
            { to: "/faq/small-fleet-management-israel", label: "שאלות נפוצות: ניהול צי קטן בישראל" },
            { to: "/ai-logistics-he", label: "AI ללוגיסטיקה — הגישה של Ravtech" },
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
