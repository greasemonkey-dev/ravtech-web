import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function AiLogisticsHeCluster() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "אופטימיזציה AI ללוגיסטיקה | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "מדריך לאופטימיזציה של מסלולים ולוגיסטיקה חכמה עם AI עבור חברות ישראליות.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="ai-logistics-he-cluster"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-logistics-he-cluster");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "אופטימיזציה AI ללוגיסטיקה",
      "description": "מדריך לאופטימיזציה של מסלולים ולוגיסטיקה חכמה עם AI עבור חברות ישראליות.",
      "inLanguage": "he",
      "url": "https://ravtech.co.il/ai-logistics-he/cluster"
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to="/ai-logistics-he" className="hover:text-black">AI ללוגיסטיקה</Link>
        <span className="mx-2">/</span>
        <span>אופטימיזציה AI ללוגיסטיקה</span>
      </nav>

      {/* TL;DR — RTL: border on right */}
      <div className="bg-blue-50 border-r-4 border-l-0 border-[#0373BA] p-4 mb-10 rounded-l">
        <p className="text-sm font-bold text-[#0373BA] mb-1">תקציר</p>
        <p className="text-sm text-gray-800">
          אופטימיזציה AI של מסלולים מאפשרת לחברות לוגיסטיקה לחסוך 15–25% בעלויות דלק ולשפר עמידה בלוחות זמנים.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        אופטימיזציה AI ללוגיסטיקה
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        כיצד חברות לוגיסטיקה ישראליות מיישמות AI לאופטימיזציה של מסלולים, ניהול צי וצמצום עלויות תפעוליות.
      </p>

      {/* Content sections */}
      <div className="prose prose-lg max-w-none">
        <h2>אופטימיזציה דינמית של מסלולי משלוח</h2>
        <p>
          מודלי AI מנתחים תנאי תנועה, חלונות זמן של לקוחות, קיבולת רכב ועלויות דלק בזמן אמת — ומייצרים מסלולים אופטימליים שמפחיתים ק"מ, זמן נסיעה ועלות לאספקה. חברות לוגיסטיקה שמיישמות אופטימיזציה כזו רואות חיסכון ממוצע של 15–25% בהוצאות הדלק.
        </p>

        <h2>שיפור עמידה בלוחות זמנים עם תחזיות AI</h2>
        <p>
          תחזיות AI מבוססות נתוני עבר, תנאי מזג אוויר ועומסי תנועה עוזרות למנהלי לוגיסטיקה לצפות עיכובים ולנהל ציפיות לקוחות בזמן אמת. הוספת שכבת AI על מערכת ניהול הצי הקיימת אינה דורשת החלפה — היא מוסיפה ראייה קדימה לתוך הכלי שהצוות כבר משתמש בו.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">רוצים לייעל את מסלולי המשלוח שלכם עם AI?</h3>
        <p className="text-gray-600 mb-6">נשמח להראות לכם כיצד אופטימיזציה AI עובדת עם הצי והמערכות הקיימות שלכם.</p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors"
        >
          <ArrowRight aria-hidden="true" className="w-4 h-4 rotate-180" /> דברו איתנו
        </Link>
      </div>
    </div>
  );
}
