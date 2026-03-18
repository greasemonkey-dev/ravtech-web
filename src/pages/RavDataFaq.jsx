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

  .rd-category-header {
    color: #00D4FF;
    border-bottom: 1px solid rgba(3,115,186,0.3);
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  .rd-faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
`;

const faqs = [
  {
    category: "כללי",
    items: [
      {
        q: "מה זה RavData AI ולמי היא מתאימה?",
        a: "RavData AI היא פלטפורמת ניהול נתוני לוגיסטיקה לחברות הובלה קטנות בישראל — עם 2 עד 20 משאיות. המערכת מחברת את האימייל והאקסל הקיים, קוראת תעודות משלוח וחשבוניות אוטומטית, ומחזירה דשבורד חי לבעל העסק, למוקדן ולרואה החשבון."
      },
      {
        q: "האם צריך להחליף תהליכים קיימים?",
        a: "לא. RavData AI מתחברת למה שכבר קיים: האימייל (Gmail / Outlook) והאקסל. לא מבקשים ממכם להחליף שום תהליך — אנחנו קוראים את הנתונים מהמקומות שבהם הם כבר נמצאים. הגדרה ראשונית: 7 דקות."
      },
      {
        q: "כמה עולה RavData AI?",
        a: "RavData AI מתחילה מ-₪490 לחודש לצי קטן. קיימות תוכניות לחברות עם יותר ספקים ויותר נפח מסמכים. כל התוכניות כוללות ניסיון חינם של 14 יום — ללא כרטיס אשראי."
      },
    ]
  },
  {
    category: "נתונים ואינטגרציה",
    items: [
      {
        q: "אילו סוגי קבצים RavData AI מעבדת?",
        a: "PDF, JPG, PNG (תמונות מסמארטפון או סריקה), Excel (.xlsx) ו-CSV. גם חשבוניות שמגיעות כקבצים מצורפים לאימייל מזוהות ומעובדות אוטומטית."
      },
      {
        q: "האם RavData AI תומכת בשפה העברית?",
        a: "כן — עברית היא שפת הבסיס של RavData AI. OCR, חילוץ שדות, דשבורד, התראות ודוחות — הכל בעברית. תומכת גם במסמכים מעורבים עברית-אנגלית."
      },
      {
        q: "מה עם אבטחת המידע?",
        a: "כל הנתונים מאוחסנים בישראל / איחוד האירופי. כל לקוח מבודד לחלוטין מהאחרים (multi-tenant עם Row Level Security). גישה דורשת אימות דו-שלבי. RavData AI עומדת בדרישות חוק הגנת הפרטיות הישראלי (פקודת הפרטיות, תיקון 2023)."
      },
    ]
  },
  {
    category: "חשבוניות ומע\"מ",
    items: [
      {
        q: "האם RavData AI מייצאת לחשבשבת ולקידום?",
        a: "כן. RavData AI מייצאת נתוני חשבוניות, פירוט מע\"מ ודוח תשלומים לפורמט המתאים לחשבשבת (חשבשבת) ולמערכת קידום (Priority). כולל עמ\"מ 17%, ח.פ / ע.מ של ספקים ותאריכים בפורמט DD/MM/YYYY."
      },
      {
        q: "כיצד RavData AI מטפלת בשינויי שיעור מע\"מ?",
        a: "שיעור המע\"מ מאוחסן בהגדרות הארגון ולא מקודד קשה במערכת. בכל שינוי שיעור מע\"מ (כמו עליית המע\"מ ל-18% בינואר 2025) — מעדכנים פעם אחת בהגדרות, וכל החשבוניות החדשות משתמשות בשיעור החדש."
      },
      {
        q: "מה קורה כשחשבונית לא תואמת לתעודת משלוח?",
        a: "RavData AI מייצרת התראה אוטומטית: 'חשבונית מספר X של ספק Y — לא נמצאה תעודת משלוח תואמת'. הסכום מסומן כ'בסיכון' ברואה החשבון ובבעל העסק — עד לאישור ידני. לא ניתן לאשר תשלום ללא סגירת ההתראה."
      },
    ]
  },
  {
    category: "מעקב משאיות",
    items: [
      {
        q: "האם RavData AI מספקת מעקב GPS אחרי משאיות?",
        a: "כן, בשני מסלולים: (1) אם כבר יש לכם מכשיר GPS מאיתוראן או פויינטר — RavData AI מתחברת ל-API שלהם ושולפת את המיקום אוטומטית. (2) למשאיות ללא GPS — הנהג פותח את הדשבורד הנייד בסמארטפון ו-RavData AI עוקבת דרך ה-GPS של הטלפון."
      },
      {
        q: "מה קורה כשמשאית נכנסת לנקודה עיוורת (מנהרה, אזור ללא קליטה)?",
        a: "למשאיות עם מכשיר GPS חומרתי (איתוראן / פויינטר) — הפתרון הוא של ספק החומרה ועובד בצורה מלאה. לנהגים שמשתמשים בסמארטפון — RavData AI שומרת את הפינגים מקומית ומעלה כשהקליטה חוזרת. הדשבורד מראה 'נראה לאחרונה לפני X דקות'."
      },
    ]
  },
];

export default function RavDataFaq() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "שאלות נפוצות: ניהול צי קטן בישראל | RavData AI";

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content = "כל השאלות על ניהול חברת הובלה קטנה עם AI — OCR תעודות משלוח, התאמת חשבוניות, מעקב GPS, ייצוא לחשבשבת / קידום, ואבטחת מידע.";
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate"; hreflangHe.hreflang = "he"; hreflangHe.href = "https://ravtech.co.il/faq/small-fleet-management-israel";
    document.head.appendChild(hreflangHe);

    const allFaqs = faqs.flatMap(cat => cat.items);
    const existingSchema = document.querySelector('script[data-page="ravdata-faq"]');
    if (existingSchema) existingSchema.remove();
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ravdata-faq");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(f => ({
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

  const totalQuestions = faqs.reduce((sum, cat) => sum + cat.items.length, 0);

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
            <span className="rd-accent">שאלות נפוצות</span>
          </nav>

          <div className="rd-fade-up mb-8 rounded-xl p-4 border border-[#0373BA]/40 bg-[#0373BA]/10">
            <p className="text-xs font-bold rd-accent mb-1 tracking-widest uppercase">תקציר</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              תשובות לכל השאלות הנפוצות על ניהול חברת הובלה עם RavData AI — מ-OCR ותעודות משלוח, דרך ייצוא לחשבשבת, ועד מעקב GPS אחרי משאיות ללא חומרה.
            </p>
          </div>

          <h1 className="rd-fade-up rd-delay-1 text-4xl md:text-5xl font-black mb-4 leading-tight">
            שאלות נפוצות —{" "}
            <span className="rd-accent">ניהול צי קטן בישראל</span>
          </h1>
          <p className="rd-fade-up rd-delay-2 text-lg rd-muted">
            {totalQuestions} שאלות ותשובות — על ניהול הובלות, חשבוניות, מעקב GPS, ואבטחת מידע.
          </p>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* FAQ by category */}
        <div className="space-y-16 pt-8">
          {faqs.map((cat, ci) => (
            <div key={ci}>
              <h2 className="text-xl font-bold rd-category-header">{cat.category}</h2>
              <div>
                {cat.items.map((f, fi) => (
                  <div key={fi} className="rd-faq-item py-6">
                    <h3 className="font-bold mb-2">{f.q}</h3>
                    <p className="text-sm rd-muted leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rd-divider mt-16 mb-16" />

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, rgba(3,115,186,0.25) 0%, rgba(0,180,255,0.15) 100%)", border: "1px solid rgba(3,115,186,0.4)" }}>
          <h2 className="text-2xl font-bold mb-2">יש שאלה שלא מצאתם כאן?</h2>
          <p className="mb-6 rd-muted">דברו איתנו — נשמח לענות ולהראות לכם דמו על הנתונים שלכם</p>
          <Link to="/Contact" className="rd-btn-primary inline-block text-white px-8 py-3 rounded-lg font-bold">
            צרו קשר
          </Link>
        </div>

        {/* Internal links */}
        <div className="rd-divider mb-8" />
        <h2 className="text-lg font-bold mb-4">עמודים קשורים</h2>
        <ul className="space-y-2">
          {[
            { to: "/ravdata", label: "RavData AI — עמוד ראשי" },
            { to: "/ravdata/invoice-reconciliation", label: "התאמת חשבוניות לתעודות משלוח" },
            { to: "/ravdata/delivery-note-ocr", label: "OCR תעודות משלוח" },
            { to: "/blog/logistics-management-software-israel-2026", label: "מדריך: תוכנת ניהול הובלות לחברות ישראליות 2026" },
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
