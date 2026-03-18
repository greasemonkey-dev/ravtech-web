import { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Editorial() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Editorial Guidelines | Ravtech";

    let meta = document.querySelector('meta[name="description"]');
    let metaCreated = false;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      metaCreated = true;
    }
    meta.content =
      "How Ravtech creates, reviews, and maintains content on AI integration for Israeli manufacturing and logistics. Written by engineers with real project experience.";
    if (metaCreated) document.head.appendChild(meta);

    const existingSchema = document.querySelector('script[data-page="editorial"]');
    if (existingSchema) existingSchema.remove();

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.setAttribute("data-page", "editorial");
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Ravtech Editorial Guidelines",
      description:
        "How Ravtech creates, reviews, and maintains technical content on AI integration for Israeli manufacturing and logistics companies.",
      url: "https://ravtech.co.il/editorial",
      publisher: {
        "@type": "Organization",
        name: "Ravtech",
        url: "https://ravtech.co.il",
        logo: {
          "@type": "ImageObject",
          url: "https://ravtech.co.il/logo-schema.png",
        },
      },
      author: {
        "@type": "Organization",
        name: "Ravtech Engineering Team",
        url: "https://ravtech.co.il/About",
      },
      dateModified: "2026-03-18",
      inLanguage: "en",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://ravtech.co.il/" },
          { "@type": "ListItem", position: 2, name: "Editorial Guidelines", item: "https://ravtech.co.il/editorial" },
        ],
      },
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

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-[#0373BA] p-4 mb-10 rounded-r">
        <p className="text-sm font-bold text-[#0373BA] mb-1">TL;DR</p>
        <p className="text-sm text-gray-800">
          Ravtech content is written by the engineers who built the systems we describe. We only publish what we have direct
          project experience with. Technical claims are reviewed before publishing and updated when our experience or the
          industry changes.
        </p>
      </div>

      <h1 className="text-4xl font-bold mb-4 heading-custom">Editorial Guidelines</h1>
      <p className="text-xl text-gray-600 mb-2">
        How we create and maintain content at Ravtech
      </p>
      <p className="text-sm text-gray-400 mb-12">Last reviewed: March 2026</p>

      {/* Who writes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Who writes Ravtech content?</h2>
        <p className="text-gray-700 mb-4">
          All technical content on this site is written or directly reviewed by members of Ravtech's engineering and
          implementation team — the same people who scoped, built, and handed over the AI systems we describe.
        </p>
        <p className="text-gray-700 mb-4">
          Ravtech has been implementing AI and data systems for Israeli manufacturing and logistics companies since 2016.
          Our team has direct, hands-on experience with ERP integrations (SAP, Priority), warehouse management systems,
          route optimization pipelines, and predictive maintenance models across dozens of production environments in
          Israel.
        </p>
        <p className="text-gray-700">
          We do not publish generic AI content written by external copywriters or AI tools without review. If a page
          describes a process, it is because we have implemented that process in a real production environment.
        </p>
      </section>

      {/* How we verify */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How do we verify technical claims?</h2>
        <p className="text-gray-700 mb-4">
          Before any technical claim is published, it is reviewed by at least one engineer with direct experience in that
          area. Claims about performance metrics, implementation timelines, and cost outcomes are grounded in documented
          project data, not estimates or benchmarks from other companies.
        </p>
        <p className="text-gray-700 mb-4">
          Where we cite industry data, we link to the primary source. Where we draw on our own project experience, we
          say so explicitly. We do not present generalized industry statistics as Ravtech's own results.
        </p>
        <p className="text-gray-700">
          When we are uncertain about something, we say so rather than presenting speculation as fact.
        </p>
      </section>

      {/* Update policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How often is content updated?</h2>
        <p className="text-gray-700 mb-4">
          We update pages when one of three things happens: the technology changes materially, our project experience
          contradicts or adds to what was written, or a factual error is identified.
        </p>
        <p className="text-gray-700 mb-4">
          We do not update pages on a fixed schedule to appear fresh. A page written in 2024 that remains accurate in
          2026 stays unchanged. A page with a significant gap between what we wrote and what we now know gets updated
          promptly.
        </p>
        <p className="text-gray-700">
          Pages that describe fast-moving areas — such as AI model capabilities or specific vendor pricing — are reviewed
          more frequently and carry a "Last reviewed" date.
        </p>
      </section>

      {/* Scope of coverage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What topics does Ravtech cover?</h2>
        <p className="text-gray-700 mb-4">
          We write about what we know: AI integration in Israeli manufacturing and logistics. Specifically:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-2">
          <li>Data unification and ERP integration for factories and fleet operators</li>
          <li>Supply chain automation and demand forecasting</li>
          <li>Predictive maintenance and quality control AI</li>
          <li>Route optimization and real-time logistics tracking</li>
          <li>AI implementation methodology — what works and what does not in Israeli SMB environments</li>
        </ul>
        <p className="text-gray-700">
          We do not cover general AI trends, global enterprise case studies we were not involved in, or verticals outside
          our direct experience.
        </p>
      </section>

      {/* Corrections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to report an error or suggest a correction</h2>
        <p className="text-gray-700 mb-4">
          If you find a factual error, an outdated claim, or content that does not match your experience in the field,
          we want to know. We treat corrections as seriously as any other technical feedback.
        </p>
        <p className="text-gray-700">
          Contact us directly at{" "}
          <a
            href="mailto:info@ravtech.co.il"
            className="text-[#0373BA] hover:underline font-medium"
          >
            info@ravtech.co.il
          </a>{" "}
          with the page URL and the specific claim. We will review and respond within 5 business days.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-gray-200 my-12" />

      {/* About Ravtech credibility block */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Ravtech</h2>
        <p className="text-gray-700 mb-4">
          Ravtech is an AI and data engineering firm based in Petah Tikva, Israel. We have been implementing production
          AI systems for Israeli manufacturers and logistics operators since 2016 — before most enterprise software
          vendors added the word "AI" to their marketing materials.
        </p>
        <p className="text-gray-700">
          Our team of 200+ engineers has an average tenure of 4.2 years — unusually high for the Israeli tech sector.
          That continuity matters for this site: the engineers who wrote a given page are typically still here when it
          needs updating.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-8 p-8 bg-gray-50 rounded-xl text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Have a technical question?</h3>
        <p className="text-gray-600 mb-6">
          If our content raised a question about your specific setup, the engineers who wrote it are the ones who will
          answer.
        </p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-[#0373BA] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#025a94] transition-colors"
        >
          Talk to the team
        </Link>
      </div>
    </div>
  );
}
