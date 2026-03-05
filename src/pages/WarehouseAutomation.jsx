import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function WarehouseAutomation() {
  useEffect(() => {
    // Title — restore on unmount
    const prevTitle = document.title;
    document.title = "Warehouse Automation AI Guide | Ravtech";

    // Meta description — find or create, always update
    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "How AI warehouse automation works — inventory optimization, pick path efficiency, and demand-driven slotting without replacing your WMS.";
    if (metaCreated) document.head.appendChild(meta);

    // JSON-LD schema — remove existing before adding (dedup guard)
    const existingSchema = document.querySelector('script[data-page="warehouse-automation"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "warehouse-automation");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Warehouse Automation AI Guide",
      "description": "How AI warehouse automation works — inventory optimization, pick path efficiency, and demand-driven slotting without replacing your WMS.",
      "url": "https://ravtech.co.il/ai-logistics/warehouse-automation",
      "publisher": { "@type": "Organization", "name": "Ravtech", "url": "https://ravtech.co.il" }
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (metaCreated && document.head.contains(meta)) document.head.removeChild(meta);
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to={createPageUrl("Home")} className="hover:text-black">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/ai-logistics" className="hover:text-black">AI Logistics</Link>
        <span className="mx-2">/</span>
        <span>Warehouse Automation AI Guide</span>
      </nav>

      {/* TL;DR — AEO block */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-gray-800 text-sm">
          AI warehouse automation optimizes inventory placement, pick paths, and replenishment triggers — layering intelligence on top of your existing WMS to reduce pick time and carrying costs.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        Warehouse Automation AI Guide
      </h1>

      {/* Section 1 */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">What AI Adds to Your Existing WMS</h2>
      <p className="text-gray-600 mb-6">
        [Content from Ravtech content team — this section will be updated with full guide content.]
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Key Warehouse Automation Use Cases</h2>
      <p className="text-gray-600 mb-6">
        [Content from Ravtech content team — this section will be updated with full guide content.]
      </p>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to automate your warehouse operations?</h3>
        <p className="text-gray-600 mb-6">We can show you what AI integration looks like for your specific industry and stack.</p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors"
        >
          Talk to us <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
