import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const phases = [
  { name: "Phase 1 — Data Audit", text: "Map all existing data sources. Assess data quality, identify gaps, and document the integration points needed." },
  { name: "Phase 2 — Unification Layer", text: "Build a unified data pipeline connecting ERP, CRM, WMS, and any other operational systems into a single accessible layer." },
  { name: "Phase 3 — AI Deployment", text: "Layer AI models on the unified data. Start with one high-value use case. Measure and prove ROI before expanding." },
  { name: "Phase 4 — Continuous Improvement", text: "Monitor model performance. Retrain on new data. Expand to additional use cases based on demonstrated results." },
];

export default function AiIntegrationFramework() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Ravtech AI Integration Framework | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "The Ravtech AI Integration Framework — a structured approach to unifying data and deploying AI in manufacturing and logistics operations.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="ai-integration-framework"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-integration-framework");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Ravtech AI Integration Framework",
      "description": "The Ravtech AI Integration Framework — a structured approach to unifying data and deploying AI in manufacturing and logistics operations.",
      "url": "https://ravtech.co.il/ai-integration-framework"
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
      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">
          The Ravtech Framework has 4 phases: Data Audit → Unification Layer → AI Deployment → Continuous Improvement. It works with any ERP, WMS, or CRM without requiring replacement.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        Ravtech AI Integration Framework
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A structured 4-phase approach to deploying AI in manufacturing and logistics — designed to work with your existing systems, not replace them.
      </p>

      {/* Framework phases */}
      <div className="space-y-8 my-12">
        {phases.map((phase, i) => (
          <div key={phase.name} className="flex gap-6">
            <div
              className="w-8 h-8 rounded-full bg-[#0373BA] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1"
              aria-hidden="true"
            >
              {i + 1}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{phase.name}</h3>
              <p className="text-gray-600 text-sm">{phase.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to start your AI integration?</h3>
        <p className="text-gray-600 mb-6">We can walk you through how the framework applies to your specific systems and industry.</p>
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
