import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const steps = [
  { name: "Data Audit", text: "Map all data sources — ERP, WMS, CRM, spreadsheets. Identify gaps and duplication across your systems." },
  { name: "Unification Layer", text: "Build a unified data pipeline that connects all sources into a single source of truth accessible to AI models." },
  { name: "AI Model Integration", text: "Layer predictive models on the unified data — delay forecasting, demand prediction, anomaly detection." },
  { name: "Alerts & Dashboards", text: "Surface AI insights to the operations team via real-time dashboards and automated escalation alerts." },
  { name: "Iteration & Retraining", text: "Run for 30 days, measure prediction accuracy, retrain models with new operational data." },
];

export default function SupplyChainAutomation() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "How We Implement Supply Chain AI | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) { meta = document.createElement('meta'); meta.name = "description"; metaCreated = true; }
    meta.content = "Ravtech's 5-step methodology for integrating AI into manufacturing supply chains — from data audit to live deployment in 6–10 weeks.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="supply-chain-automation"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "supply-chain-automation");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Implement AI in Supply Chain Management",
      "description": "Ravtech's proven 5-step methodology for integrating AI into manufacturing supply chains.",
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
        <span>How We Implement Supply Chain AI</span>
      </nav>

      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">Ravtech's supply chain AI methodology: audit data sources, unify them, layer AI models, surface alerts. Full deployment in 6–10 weeks without replacing your ERP.</p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">How We Implement Supply Chain AI</h1>
      <p className="text-xl text-gray-600 mb-12">A process-first approach — connecting your existing systems, not replacing them.</p>

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
        <h3 className="text-xl font-bold mb-3">Ready to start your supply chain AI project?</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Talk to us <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
