import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, TrendingUp, Clock, Package } from "lucide-react";

export default function DegAlert() {
  useEffect(() => {
    // Title — restore on unmount
    const prevTitle = document.title;
    document.title = "DegAlert Case Study — AI Supply Chain Automation | Ravtech";

    // Meta description — find or create, always update
    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "How Ravtech built an AI supply chain system for DegAlert — 40% faster order handling, 3,847 orders tracked in real-time, hundreds of thousands ₪ saved annually.";
    if (metaCreated) document.head.appendChild(meta);

    // JSON-LD schema — remove existing before adding (dedup guard)
    const existingSchema = document.querySelector('script[data-page="degalert"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "degalert");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "DegAlert — AI Supply Chain Automation",
      "description": "How Ravtech implemented AI-powered supply chain automation for DegAlert, achieving 40% faster order handling.",
      "author": { "@type": "Organization", "name": "Ravtech" },
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
        <Link to="/ai-manufacturing" className="hover:text-black">AI Manufacturing</Link>
        <span className="mx-2">/</span>
        <span>DegAlert Case Study</span>
      </nav>

      {/* TL;DR — AEO block */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-gray-800 text-sm">
          Ravtech built an AI supply chain system for DegAlert that cut order handling time by 40%, tracked 3,847 orders in real-time, and saved hundreds of thousands of shekels annually.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">
        DegAlert — AI Supply Chain Automation
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        How a traditional Israeli manufacturer achieved 40% faster order handling with AI-powered operations.
      </p>

      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <TrendingUp aria-hidden="true" className="w-8 h-8 text-[#0373BA] mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">40%</div>
          <div className="text-sm text-gray-600">Faster order handling</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <Package aria-hidden="true" className="w-8 h-8 text-[#0373BA] mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">3,847</div>
          <div className="text-sm text-gray-600">Orders tracked in real-time</div>
        </div>
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <Clock aria-hidden="true" className="w-8 h-8 text-[#0373BA] mx-auto mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">₪100K+</div>
          <div className="text-sm text-gray-600">Saved annually</div>
        </div>
      </div>

      {/* Body */}
      <div className="prose prose-lg max-w-none">
        <h2>The Challenge</h2>
        <p>DegAlert, an Israeli manufacturing company, was managing thousands of orders manually across disconnected systems. Order status was invisible until shipment. Delays were discovered too late to fix.</p>

        <h2>The Ravtech Approach</h2>
        <p>We unified DegAlert's ERP, CRM, and logistics data into a single AI-powered operations layer — giving their team real-time visibility into every order, automated escalation alerts, and predictive delay detection.</p>

        <h2>The Result</h2>
        <p>Order handling time dropped 40%. 3,847 orders now flow through the system with full traceability. The operations team shifted from firefighting to proactive management.</p>
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Running a similar operation?</h3>
        <p className="text-gray-600 mb-6">We can show you what AI integration looks like for your specific industry and stack.</p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors"
        >
          Talk to us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
