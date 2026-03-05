import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function AiManufacturingHeCluster() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "שילוב AI בשרשרת האספקה | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "מדריך מלא לשילוב AI בשרשרת האספקה לייצור ישראלי — ללא החלפת מערכות קיימות.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="ai-manufacturing-he-cluster"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-manufacturing-he-cluster");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "שילוב AI בשרשרת האספקה",
      "description": "מדריך מלא לשילוב AI בשרשרת האספקה לייצור ישראלי — ללא החלפת מערכות קיימות.",
      "inLanguage": "he",
      "url": "https://ravtech.co.il/ai-manufacturing-he/cluster"
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
        <Link to="/ai-manufacturing-he" className="hover:text-black">AI לתעשייה</Link>
        <span className="mx-2">/</span>
        <span>שילוב AI בשרשרת האספקה</span>
      </nav>

      {/* TL;DR — RTL: border on right */}
      <div className="bg-blue-50 border-r-4 border-l-0 border-[#0373BA] p-4 mb-10 rounded-l">
        <p className="text-sm font-bold text-[#0373BA] mb-1">תקציר</p>
        <p className="text-sm text-gray-800">
          שילוב AI בשרשרת האספקה מאפשר לייצרנים ישראלים לצמצם עיכובים ב-30–40% מבלי להחליף את ה-ERP הקיים.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        שילוב AI בשרשרת האספקה
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        כיצד יצרנים ישראלים מיישמים AI בשרשרת האספקה — מניעת עיכובים, שיפור ניראות וצמצום עלויות תפעוליות.
      </p>

      {/* Content sections */}
      <div className="prose prose-lg max-w-none">
        <h2>זיהוי עיכובים בשרשרת האספקה בזמן אמת</h2>
        <p>
          מערכות AI מנתחות נתוני הזמנות, מלאי וספקים בזמן אמת — ומזהות חריגות ועיכובים פוטנציאליים לפני שהם משפיעים על הייצור. היכולת לזהות בעיה שעות ולא ימים לפני האירוע מאפשרת לצוות התפעול לפעול ולא להגיב.
        </p>

        <h2>אינטגרציה עם מערכות ERP קיימות</h2>
        <p>
          גישת Ravtech בונה שכבת AI על גבי ה-ERP הקיים — קוראת נתונים, מעשירה אותם ומחזירה המלצות לתוך הממשק המוכר לצוות. אין צורך להחליף מערכות, אין עלות הטמעה מחדש, ואין עקומת למידה ארגונית.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">מוכנים לשלב AI בשרשרת האספקה שלכם?</h3>
        <p className="text-gray-600 mb-6">נשמח להראות לכם כיצד זה עובד עם ה-ERP הספציפי שלכם.</p>
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
