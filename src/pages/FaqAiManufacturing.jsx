import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight } from "lucide-react";

const faqs = [
  { q: "How long does AI integration take for a manufacturing company?", a: "A focused AI integration targeting one process (supply chain, quality control, or predictive maintenance) typically takes 6–12 weeks from initial data audit to live deployment." },
  { q: "Do I need to replace my ERP to use AI?", a: "No. Ravtech builds an AI layer on top of your existing ERP — reading data from it, enriching it with AI insights, and writing decisions back. Your ERP remains the system of record." },
  { q: "What data does AI need to work in a factory?", a: "AI needs structured operational data: order history, production schedules, equipment sensor readings, quality inspection records, and logistics data. Most factories already have this in their ERP and WMS." },
  { q: "How much does AI integration cost for a mid-size manufacturer?", a: "A typical focused AI integration project (one use case) ranges from ₪150K–₪400K depending on data complexity and scope. ROI is typically achieved within 12–18 months." },
  { q: "What AI use cases have the fastest ROI in manufacturing?", a: "Supply chain delay prediction, predictive maintenance, and demand forecasting consistently show the fastest ROI — often within 6–9 months of deployment." },
  { q: "Can Ravtech work with our existing IT team?", a: "Yes. We work alongside your IT team, not instead of them. We handle AI model development and integration while your team maintains operational systems." },
];

export default function FaqAiManufacturing() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Manufacturing & Logistics FAQ | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "Answers to the most common questions about AI integration in manufacturing and logistics — from implementation timeline to ERP compatibility and ROI.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="faq-ai-manufacturing-logistics"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "faq-ai-manufacturing-logistics");
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
      if (document.head.contains(schema)) document.head.removeChild(schema);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
        <Link to="/ai-manufacturing" className="hover:text-black">AI Manufacturing</Link>
        <span className="mx-2">/</span>
        <span>FAQ</span>
      </nav>

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">
          Common questions about AI integration in manufacturing and logistics answered — from how long it takes (6–12 weeks) to whether you need to replace your ERP (you don't).
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        AI Manufacturing &amp; Logistics FAQ
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Answers to the most common questions we hear from manufacturers and logistics companies considering AI integration.
      </p>

      {/* FAQ list */}
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
        <h3 className="text-xl font-bold text-gray-900 mb-3">Have a question not answered here?</h3>
        <p className="text-gray-600 mb-6">We are happy to discuss your specific situation and answer any questions about AI integration for your operation.</p>
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
