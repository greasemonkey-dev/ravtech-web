import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const steps = [
  { name: "ERP Audit", text: "Review your ERP data model, identify which data is clean enough for AI input, and flag gaps that need enrichment." },
  { name: "API / ETL Layer", text: "Build a secure data extraction layer that reads from your ERP in real-time or near-real-time via APIs or scheduled ETL jobs." },
  { name: "Data Enrichment", text: "Normalize, deduplicate, and enrich ERP data with external signals (logistics, market demand, weather) relevant to your operations." },
  { name: "AI Model Layer", text: "Deploy AI models that consume enriched ERP data — predicting demand, flagging anomalies, and generating automated recommendations." },
  { name: "Feedback Loop", text: "Track model predictions against actual outcomes. Retrain quarterly. The ERP remains the system of record — AI augments it." },
];

export default function ErpMethodology() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "How to Integrate AI with ERP Systems | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) { meta = document.createElement('meta'); meta.name = "description"; metaCreated = true; }
    meta.content = "Step-by-step guide to integrating AI with ERP systems in manufacturing — without replacing your existing ERP. Ravtech's proven methodology.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="erp-methodology"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "erp-methodology");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Integrate AI with ERP Systems in Manufacturing",
      "description": "Ravtech's proven 5-step methodology for integrating AI with ERP systems in manufacturing.",
      "step": steps.map(s => ({ "@type": "HowToStep", "name": s.name, "text": s.text }))
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
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to="/ai-manufacturing" className="hover:text-black">AI Manufacturing</Link>
        <span className="mx-2">/</span>
        <span>How to Integrate AI with ERP Systems</span>
      </nav>

      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">Ravtech adds AI on top of your existing ERP — no replacement needed. The integration reads from your ERP, enriches data with AI, and writes decisions back. Typical timeline: 8–12 weeks.</p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">How to Integrate AI with ERP Systems</h1>
      <p className="text-xl text-gray-600 mb-12">Keeping your ERP in place while adding an AI intelligence layer on top.</p>

      <div className="space-y-8 my-12">
        {steps.map((step, i) => (
          <div key={step.name} className="flex gap-6">
            <div className="w-8 h-8 rounded-full bg-[#0373BA] text-white flex items-center justify-center font-bold flex-shrink-0 mt-1" aria-hidden="true">{i + 1}</div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{step.name}</h3>
              <p className="text-gray-600 text-sm">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 bg-gray-50 rounded-xl text-center mt-16">
        <h3 className="text-xl font-bold mb-3">Ready to integrate your ERP with AI?</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Start your ERP AI integration <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
