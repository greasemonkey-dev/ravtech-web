import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const steps = [
  { name: "Route & Constraint Mapping", text: "Document all delivery zones, time windows, vehicle capacities, and customer constraints your current routes must satisfy." },
  { name: "Data Integration", text: "Connect your TMS and order management system to the AI layer. Ingest historical route data and outcomes for model training." },
  { name: "Model Training", text: "Train the optimization model on your historical data. Validate against known routes before going live." },
  { name: "Live Deployment", text: "Switch the AI to live mode. It generates optimized routes each morning based on that day's orders and live traffic conditions." },
  { name: "Continuous Improvement", text: "Track actual vs. predicted fuel usage and delivery times. Retrain monthly with new operational data." },
];

export default function RouteOptimization() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "How We Implement Route Optimization AI | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) { meta = document.createElement('meta'); meta.name = "description"; metaCreated = true; }
    meta.content = "Ravtech's methodology for implementing AI route optimization in logistics — reducing fuel costs and delivery time without replacing your TMS.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="route-optimization"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "route-optimization");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Implement AI Route Optimization in Logistics",
      "description": "Ravtech's proven 5-step methodology for implementing AI route optimization in logistics.",
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
        <Link to="/ai-logistics" className="hover:text-black">AI Logistics</Link>
        <span className="mx-2">/</span>
        <span>How We Implement Route Optimization AI</span>
      </nav>

      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">Ravtech layers AI route optimization on top of your existing TMS. The AI analyzes live traffic, delivery constraints, and historical patterns to compute optimal routes automatically. Typical ROI: 15–25% fuel reduction.</p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">How We Implement Route Optimization AI</h1>
      <p className="text-xl text-gray-600 mb-12">Cutting fuel costs and delivery times using AI — without replacing your Transport Management System.</p>

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
        <h3 className="text-xl font-bold mb-3">Start your route optimization project</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Start your route optimization project <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
