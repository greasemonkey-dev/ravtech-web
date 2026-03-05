import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

export default function AiUseCasesIsrael() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Top AI Use Cases in Israeli Manufacturing 2026 | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "The most impactful AI use cases being deployed by Israeli manufacturers in 2026 — from supply chain to quality control and predictive maintenance.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="ai-use-cases-israel-2026"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-use-cases-israel-2026");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top AI Use Cases in Israeli Manufacturing 2026",
      "description": "The most impactful AI use cases being deployed by Israeli manufacturers in 2026 — from supply chain to quality control and predictive maintenance.",
      "author": { "@type": "Organization", "name": "Ravtech" },
      "publisher": { "@type": "Organization", "name": "Ravtech", "url": "https://ravtech.co.il" },
      "inLanguage": "en"
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to="/ai-manufacturing" className="hover:text-black">AI Manufacturing</Link>
        <span className="mx-2">/</span>
        <span>Top AI Use Cases in Israeli Manufacturing 2026</span>
      </nav>

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">
          Israeli manufacturers in 2026 are deploying AI across supply chain automation, predictive maintenance, quality control, and ERP integration — achieving 30–50% efficiency gains in targeted processes.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        Top AI Use Cases in Israeli Manufacturing 2026
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        A practical look at where Israeli manufacturers are deploying AI today — and the results they are achieving.
      </p>

      {/* Content sections */}
      <div className="prose prose-lg max-w-none">
        <h2>1. Supply Chain AI</h2>
        <p>
          Supply chain AI is the highest-priority deployment for Israeli manufacturers in 2026. By connecting ERP order data, supplier lead times, and logistics feeds into a unified AI model, manufacturers gain real-time visibility into potential delays — often 48–72 hours before they materialize. Factories implementing supply chain AI report 30–40% reductions in unplanned delays and significant improvements in on-time delivery rates.
        </p>

        <h2>2. Predictive Maintenance</h2>
        <p>
          Predictive maintenance AI analyzes sensor data from production equipment to identify failure patterns before breakdowns occur. Israeli manufacturers using predictive maintenance report 20–35% reductions in unplanned downtime and lower maintenance costs compared to scheduled preventive maintenance approaches. The key advantage is that AI-driven maintenance is triggered by actual equipment condition, not by calendar intervals.
        </p>

        <h2>3. Quality Control AI</h2>
        <p>
          AI-powered quality control uses computer vision and statistical process control to detect defects earlier in the production process — reducing rework costs and preventing defective products from reaching customers. Israeli factories deploying quality control AI are achieving defect detection rates that exceed manual inspection by 40–60%, while reducing the labor burden on QC teams.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Which AI use case fits your operation?</h3>
        <p className="text-gray-600 mb-6">We can assess your current data and recommend the highest-ROI starting point for AI deployment.</p>
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
