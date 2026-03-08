import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, TrendingUp, Clock, Package, AlertTriangle, Eye, Bell } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DegAlert — AI Supply Chain Automation",
  "description": "How Ravtech implemented AI-powered supply chain automation for DegAlert, achieving 40% faster order handling.",
  "author": { "@type": "Organization", "name": "Ravtech" },
  "publisher": { "@type": "Organization", "name": "Ravtech", "url": "https://ravtech.co.il" }
};

export default function DegAlert() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "DegAlert Case Study — AI Supply Chain Automation | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      metaCreated = true;
    }
    meta.content = "How Ravtech built an AI supply chain system for DegAlert — 40% faster order handling, 3,847 orders tracked in real-time, hundreds of thousands ₪ saved annually.";
    if (metaCreated) document.head.appendChild(meta);

    return () => {
      document.title = prevTitle;
      if (metaCreated && document.head.contains(meta)) document.head.removeChild(meta);
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
          <Link to={createPageUrl("Home")} className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/ai-manufacturing" className="hover:text-black">AI Manufacturing</Link>
          <span className="mx-2">/</span>
          <span>DegAlert Case Study</span>
        </nav>

        {/* TL;DR */}
        <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
          <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
          <p className="text-gray-800 text-sm">
            Ravtech unified DegAlert's ERP, CRM, and logistics into a single AI operations layer — cutting order handling time by 40%, tracking 3,847 orders in real-time across 3 systems, and saving ₪100K+ annually.
          </p>
        </div>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4 heading-custom">
          DegAlert — AI Supply Chain Automation
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          How a traditional Israeli manufacturer went from blind order management to real-time AI operations — in one integration.
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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

        {/* ── THE CHALLENGE ── */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            DegAlert manages high-volume B2B manufacturing orders across a complex supply chain. Their ERP tracked production, their CRM handled customer communications, and a separate logistics platform managed shipments — but none of these systems talked to each other. Operations managers spent hours each day making phone calls and sending emails just to answer the question: <em>where is this order right now?</em>
          </p>

          {/* Pain-point callout */}
          <blockquote className="border-l-4 border-orange-400 bg-orange-50 rounded-r-lg px-6 py-4 mb-6">
            <p className="text-orange-900 font-medium italic text-lg leading-snug">
              "By the time a delay was visible, it was already a crisis."
            </p>
          </blockquote>

          {/* Pain-point bullets */}
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 space-y-3">
            <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-4">Before Ravtech</p>
            {[
              "No single source of truth — ERP, CRM, and logistics lived in three separate silos",
              "Order status was invisible until the moment of physical shipment",
              "Every escalation was manual: someone had to notice, investigate, and chase",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE RAVTECH APPROACH ── */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Ravtech Approach</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Rather than replacing DegAlert's existing systems, we built an AI operations layer on top of them — connecting ERP, CRM, and logistics data into a unified view, then adding intelligence to surface risks before they become problems.
          </p>

          {/* Architecture flow */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6 text-center">Integration Architecture</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              {/* Sources */}
              <div className="flex flex-col gap-2">
                {["ERP", "CRM", "Logistics"].map((src) => (
                  <div key={src} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 text-center w-28">
                    {src}
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="hidden md:flex flex-col items-center justify-center gap-1 px-2">
                <div className="w-12 h-0.5 bg-gray-300 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-400 rotate-45" />
                </div>
              </div>
              <div className="md:hidden text-gray-400 text-xl">↓</div>

              {/* AI Layer */}
              <div className="bg-[#0373BA] text-white rounded-xl px-6 py-5 text-center min-w-[160px]">
                <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mb-1">AI Layer</p>
                <p className="text-sm font-bold">Operations Hub</p>
                <p className="text-xs opacity-70 mt-1">Risk scoring · Alerts · Tracing</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex flex-col items-center justify-center gap-1 px-2">
                <div className="w-12 h-0.5 bg-gray-300 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-400 rotate-45" />
                </div>
              </div>
              <div className="md:hidden text-gray-400 text-xl">↓</div>

              {/* Dashboard */}
              <div className="bg-white border-2 border-[#0373BA] rounded-xl px-6 py-5 text-center min-w-[160px]">
                <p className="text-xs font-semibold text-[#0373BA] uppercase tracking-wide mb-1">Output</p>
                <p className="text-sm font-bold text-gray-900">Live Dashboard</p>
                <p className="text-xs text-gray-500 mt-1">Per-order visibility</p>
              </div>
            </div>
          </div>

          {/* Capability cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Eye,
                title: "Real-time visibility",
                body: "Every order, every status, one screen — no more cross-system lookups.",
              },
              {
                icon: TrendingUp,
                title: "Predictive delay detection",
                body: "AI flags delay risk before shipment, giving the team time to act.",
              },
              {
                icon: Bell,
                title: "Automated escalation",
                body: "The right person is notified automatically — no manual chasing required.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-gray-200 rounded-xl p-5 bg-white">
                <Icon className="w-5 h-5 text-[#0373BA] mb-3" />
                <p className="font-semibold text-gray-900 mb-1 text-sm">{title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE RESULT ── */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Result</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Within weeks of go-live, DegAlert's operations team had a fundamentally different relationship with their supply chain. Problems that previously surfaced as customer complaints were now caught and resolved internally — before anyone outside the building knew there was an issue.
          </p>

          {/* Pull-quote */}
          <blockquote className="border-l-4 border-[#0373BA] bg-blue-50 rounded-r-lg px-6 py-4 mb-10">
            <p className="text-[#0373BA] font-medium italic text-lg leading-snug">
              "We stopped firefighting. Now we see problems before our customers do."
            </p>
            <footer className="text-sm text-gray-500 mt-2">— DegAlert Operations Team</footer>
          </blockquote>

          {/* Outcome list */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 space-y-3">
            <p className="text-sm font-semibold text-[#0373BA] uppercase tracking-wide mb-4">After Ravtech</p>
            {[
              "Order handling time dropped 40% — freed up the equivalent of a full-time operations role",
              "3,847 orders now flow through the system with end-to-end traceability",
              "₪100K+ saved annually in manual coordination costs and delay penalties",
              "The ops team shifted from reactive firefighting to proactive supply chain management",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-[#0373BA] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-gray-50 rounded-xl text-center">
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
    </>
  );
}
