import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Truck, Warehouse, MapPin, BarChart2 } from "lucide-react";

const clusters = [
  { title: "אופטימיזציה AI של מסלולים לחברות לוגיסטיקה", url: "/ai-logistics/route-optimization-guide", icon: Truck },
  { title: "מדריך אוטומציה של מחסנים עם AI", url: "/ai-logistics/warehouse-automation", icon: Warehouse },
  { title: "מעקב משלוחים בזמן אמת עם AI", url: "/ai-logistics/real-time-tracking", icon: MapPin },
  { title: "מערכת תחזיות ביקוש AI", url: "/ai-logistics/demand-forecasting-methodology", icon: BarChart2 },
];

export default function AiLogisticsHe() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI ללוגיסטיקה — הגישה של Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "כיצד Ravtech משלבת AI בלוגיסטיקה — אופטימיזציה של מסלולים, תחזיות ביקוש, אוטומציה של מחסנים ומעקב בזמן אמת. מוכח עם מפעילים ישראלים.";
    if (metaCreated) document.head.appendChild(meta);

    const hreflangEn = document.createElement("link");
    hreflangEn.rel = "alternate";
    hreflangEn.hreflang = "en";
    hreflangEn.href = "https://ravtech.co.il/ai-logistics";
    document.head.appendChild(hreflangEn);

    const existingSchema = document.querySelector('script[data-page="ai-logistics-he"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-logistics-he");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI ללוגיסטיקה — הגישה של Ravtech",
      "description": "כיצד Ravtech משלבת AI בלוגיסטיקה",
      "inLanguage": "he",
      "url": "https://ravtech.co.il/ai-logistics-he"
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (metaCreated && document.head.contains(meta)) document.head.removeChild(meta);
      if (document.head.contains(hreflangEn)) document.head.removeChild(hreflangEn);
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16" dir="rtl">
      {/* TL;DR — RTL: border on right */}
      <div className="bg-blue-50 border-r-4 border-l-0 border-[#0373BA] p-4 mb-10 rounded-l">
        <p className="text-sm font-bold text-[#0373BA] mb-1">תקציר</p>
        <p className="text-sm text-gray-800">
          Ravtech משלבת AI בפעילות לוגיסטית — אופטימיזציה של מסלולים, תחזיות ביקוש ומעקב משלוחים בזמן אמת. מוכח עם מפעילים ישראלים.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        AI ללוגיסטיקה — הגישה של Ravtech
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        כיצד חברות לוגיסטיקה ישראליות משתמשות ב-AI לצמצום עלויות, אופטימיזציה של מסלולים וביטול מעקב ידני.
      </p>
      <Link to="/case-studies/degalert" className="inline-flex items-center gap-2 text-[#0373BA] font-semibold hover:underline mb-12 block">
        <ArrowRight aria-hidden="true" className="w-4 h-4 rotate-180" /> ראו מקרה בוחן DegAlert — 40% מהיר יותר
      </Link>

      {/* Cluster grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">מדריכי AI ללוגיסטיקה</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {clusters.map((c) => (
          <Link key={c.url} to={c.url} className="border border-gray-200 rounded-xl p-6 hover:border-[#0373BA] hover:shadow-md transition-all group">
            <c.icon aria-hidden="true" className="w-6 h-6 text-[#0373BA] mb-3" />
            <h3 className="font-semibold text-gray-900 group-hover:text-[#0373BA] transition-colors">{c.title}</h3>
            <span className="text-sm text-gray-500 mt-2 inline-flex items-center gap-1">
              <ArrowRight aria-hidden="true" className="w-3 h-3 rotate-180" /> קראו את המדריך
            </span>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-3">מוכנים לשלב AI בפעילות הלוגיסטית שלכם?</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          <ArrowRight aria-hidden="true" className="w-4 h-4 rotate-180" /> דברו איתנו
        </Link>
      </div>
    </div>
  );
}
