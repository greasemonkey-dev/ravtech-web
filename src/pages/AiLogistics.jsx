import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Truck, Warehouse, MapPin, BarChart2 } from "lucide-react";

const clusters = [
  { title: "AI Route Optimization for Logistics Companies", url: "/ai-logistics/route-optimization-guide", icon: Truck },
  { title: "Warehouse Automation AI Guide", url: "/ai-logistics/warehouse-automation", icon: Warehouse },
  { title: "Real-Time Shipment Tracking with AI", url: "/ai-logistics/real-time-tracking", icon: MapPin },
  { title: "AI Demand Forecasting System", url: "/ai-logistics/demand-forecasting-methodology", icon: BarChart2 },
];

const faqs = [
  { q: "What is AI route optimization in logistics?", a: "AI route optimization analyzes live traffic, delivery windows, vehicle capacity, and historical data to compute the most efficient delivery routes automatically — reducing fuel costs and delivery time." },
  { q: "How does AI demand forecasting work?", a: "AI demand forecasting models analyze historical orders, seasonal patterns, and external signals to predict future demand, helping logistics teams pre-position inventory and plan capacity." },
  { q: "Can AI integrate with our existing WMS?", a: "Yes. Ravtech builds an AI layer on top of your existing Warehouse Management System — no replacement needed. The AI reads from and writes decisions back to your WMS." },
];

export default function AiLogistics() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "AI Integration in Logistics — The Ravtech Approach";

    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "How Ravtech implements AI in logistics: route optimization, demand forecasting, warehouse automation, and real-time tracking — proven with Israeli operators.";
    if (metaCreated) document.head.appendChild(meta);

    // Hreflang alternate for HE version
    const hreflangHe = document.createElement("link");
    hreflangHe.rel = "alternate";
    hreflangHe.hreflang = "he";
    hreflangHe.href = "https://ravtech.co.il/ai-logistics-he";
    document.head.appendChild(hreflangHe);

    // FAQPage schema
    const existingSchema = document.querySelector('script[data-page="ai-logistics"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "ai-logistics");
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
      if (metaCreated && document.head.contains(meta)) document.head.removeChild(meta);
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
          Ravtech integrates AI into logistics operations — route optimization, demand forecasting, and real-time shipment tracking. Proven with Israeli operators.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        AI Integration in Logistics — The Ravtech Approach
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        How Israeli logistics companies are using AI to cut costs, optimize routes, and eliminate manual tracking — without replacing existing systems.
      </p>
      <Link to="/case-studies/degalert" className="inline-flex items-center gap-2 text-[#0373BA] font-semibold hover:underline mb-12 block">
        See DegAlert case study — 40% faster order handling <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Cluster grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Logistics AI Guides</h2>
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
        <h3 className="text-xl font-bold mb-3">Ready to integrate AI into your logistics operations?</h3>
        <Link to={createPageUrl("Contact")} className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors">
          Talk to us <ArrowRight aria-hidden="true" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
