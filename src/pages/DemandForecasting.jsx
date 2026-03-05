import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const steps = [
  { name: "Historical Data Collection", text: "Extract 2–3 years of order history from your ERP or WMS. Clean and normalize: remove anomalies, fill gaps, align SKU naming." },
  { name: "Signal Identification", text: "Identify external signals that correlate with your demand — seasonality, promotions, market events, competitor activity." },
  { name: "Model Selection & Training", text: "Select the right forecasting model (ARIMA, XGBoost, or neural network depending on data volume). Train and validate with holdout data." },
  { name: "Integration with Procurement", text: "Connect forecast output to your procurement workflow. Automate reorder triggers when predicted demand exceeds current stock." },
  { name: "Accuracy Monitoring", text: "Track forecast accuracy (MAPE) weekly. Retrain the model when accuracy drops below threshold or when demand patterns shift." },
];

export default function DemandForecasting() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "How to Build a Demand Forecasting System | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) { meta = document.createElement('meta'); meta.name = "description"; metaCreated = true; }
    meta.content = "Ravtech's methodology for building AI demand forecasting systems in logistics — reducing stockouts and overstock with predictive models.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="demand-forecasting"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "demand-forecasting");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Build an AI Demand Forecasting System",
      "description": "Ravtech's proven 5-step methodology for building AI demand forecasting systems in logistics.",
      "step": steps.map(s => ({ "@type": "HowToStep", "name": s.name, "text": s.text }))
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to="/ai-logistics" className="hover:text-black">AI Logistics</Link>
        <span className="mx-2">/</span>
        <span>How to Build a Demand Forecasting System</span>
      </nav>

      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">Ravtech builds demand forecasting models that analyze your historical orders, seasonal patterns, and external signals to predict future demand — helping you pre-position inventory and reduce stockouts by 30–50%.</p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">How to Build a Demand Forecasting System</h1>
      <p className="text-xl text-gray-600 mb-12">Replacing gut-feel inventory decisions with AI-powered demand predictions.</p>

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
        <h3 className="text-xl font-bold mb-3">Build your demand forecasting system</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Build your demand forecasting system <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
