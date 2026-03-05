import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Cog, Database, AlertTriangle, CheckSquare } from "lucide-react";

const clusters = [
  { title: "AI Supply Chain for Small Factories in Israel", url: "/ai-manufacturing/supply-chain-israel", icon: Database },
  { title: "ERP AI Integration Guide for Manufacturers", url: "/ai-manufacturing/erp-ai-integration", icon: Cog },
  { title: "Predictive Maintenance AI for Factories", url: "/ai-manufacturing/predictive-maintenance", icon: AlertTriangle },
  { title: "AI Quality Control for Manufacturing", url: "/ai-manufacturing/quality-control-ai", icon: CheckSquare },
];

const faqs = [
  { q: "What is AI integration in manufacturing?", a: "AI integration in manufacturing connects your existing ERP, CRM, and production systems to AI models that automate decisions, predict failures, and surface insights — without replacing your current software." },
  { q: "How long does AI integration take for a factory?", a: "A focused AI integration for one process (e.g. supply chain or quality control) typically takes 6–12 weeks from data audit to live deployment." },
  { q: "Does AI integration require replacing our ERP?", a: "No. Ravtech's approach unifies data across your existing systems. Your ERP stays in place — AI sits on top as an intelligence layer." },
];

export default function AiManufacturing() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Integration in Manufacturing — The Ravtech Approach";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "How Ravtech implements AI in manufacturing: supply chain automation, ERP integration, predictive maintenance, and quality control — with proven results from Israeli factories.";
    if (metaCreated) document.head.appendChild(meta);

    // Hreflang alternate for HE version
    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate";
    hreflangHe.hreflang = "he";
    hreflangHe.href = "https://ravtech.co.il/ai-manufacturing-he";
    document.head.appendChild(hreflangHe);

    // FAQPage schema
    const existingSchema = document.querySelector('script[data-page="ai-manufacturing"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-manufacturing");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
    document.head.appendChild(schema);

    return () => {
      document.title = prevTitle;
      if (document.head.contains(hreflangHe)) document.head.removeChild(hreflangHe);
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">
          Ravtech integrates AI into manufacturing operations — connecting ERP, supply chain, and production data to reduce delays, prevent failures, and automate quality control. Proven with Israeli manufacturers.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        AI Integration in Manufacturing — The Ravtech Approach
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        How Israeli manufacturers are using AI to cut operational costs and eliminate supply chain delays — without replacing existing systems.
      </p>
      <Link to="/case-studies/degalert" className="inline-flex items-center gap-2 text-[#0373BA] font-semibold hover:underline mb-12 block">
        See DegAlert case study — 40% faster order handling <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Cluster grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing AI Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {clusters.map((c) => (
          <Link key={c.url} to={c.url} className="border border-gray-200 rounded-xl p-6 hover:border-[#0373BA] hover:shadow-md transition-all group">
            <c.icon aria-hidden="true" className="w-6 h-6 text-[#0373BA] mb-3" />
            <h3 className="font-semibold text-gray-900 group-hover:text-[#0373BA] transition-colors">{c.title}</h3>
            <span className="text-sm text-gray-500 mt-2 inline-flex items-center gap-1">Read guide <ArrowRight aria-hidden="true" className="w-3 h-3" /></span>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6 mb-16">
        {faqs.map((f) => (
          <div key={f.q} className="border-b border-gray-200 pb-6">
            <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
            <p className="text-gray-600 text-sm">{f.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-3">Ready to integrate AI into your factory?</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Talk to us <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
