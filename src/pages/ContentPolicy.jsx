import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContentPolicyPage() {
  useEffect(() => {
    document.title = "Content Policy | RavTech";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "RavTech's content policy — what we publish, how often we update it, and our review process for accuracy and relevance.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://ravtech.co.il/ContentPolicy",
      name: "Content Policy — RavTech",
      description: "RavTech's editorial standards, content update frequency, and review process.",
      url: "https://ravtech.co.il/ContentPolicy",
      publisher: { "@id": "https://ravtech.co.il/#organization" },
      dateModified: "2025-03-09",
    };
    let el = document.getElementById("schema-content-policy");
    if (!el) { el = document.createElement("script"); el.id = "schema-content-policy"; el.type = "application/ld+json"; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);

    return () => {
      document.title = "RavTech | Software Development & Social Impact";
      document.getElementById("schema-content-policy")?.remove();
    };
  }, []);

  const sections = [
    {
      title: "What We Publish",
      items: [
        {
          heading: "Services & Solutions",
          text: "Descriptions of RavTech's software development services, technical capabilities, and engagement models. Content is written by our internal team and reflects real delivery experience.",
        },
        {
          heading: "Industry Insights & Case Studies",
          text: "Practical guides, methodology explanations, and case studies based on projects we have delivered. All statistics and client references are verified before publication.",
        },
        {
          heading: "Company & Team",
          text: "Information about RavTech's leadership, values, social impact mission, and partnerships. Biographies are approved by the individuals named.",
        },
        {
          heading: "Careers",
          text: "Open positions reflect live roles. Job descriptions are provided by team leads and reviewed by HR before going live.",
        },
      ],
    },
    {
      title: "Update Frequency",
      items: [
        {
          heading: "Service pages",
          text: "Reviewed quarterly or whenever our service offering changes materially.",
        },
        {
          heading: "Case studies & industry guides",
          text: "Reviewed every six months to ensure statistics, technology references, and methodology remain current.",
        },
        {
          heading: "Team & About page",
          text: "Updated within 30 days of any leadership or team change.",
        },
        {
          heading: "Careers",
          text: "Synced with our internal HR system — positions are opened and closed in real time.",
        },
      ],
    },
    {
      title: "Review Process",
      items: [
        {
          heading: "Author",
          text: "All content is written or commissioned by RavTech staff with direct knowledge of the subject matter.",
        },
        {
          heading: "Technical review",
          text: "Technical content (methodology, architecture, AI solutions) is reviewed by a senior engineer or the VP R&D before publication.",
        },
        {
          heading: "Final approval",
          text: "The CEO or a designated editor approves any new page or significant update before it goes live.",
        },
        {
          heading: "Corrections",
          text: "Factual errors are corrected within 48 hours of being identified. Material corrections include a note at the top of the page with the correction date.",
        },
      ],
    },
    {
      title: "Accuracy & Transparency",
      items: [
        {
          heading: "No sponsored content",
          text: "RavTech does not publish paid or sponsored articles. All content represents our independent expertise and experience.",
        },
        {
          heading: "External data",
          text: "When we cite third-party statistics or research, we link to the original source.",
        },
        {
          heading: "AI-assisted writing",
          text: "Some content drafts are prepared with AI writing tools. All AI-assisted content is reviewed, edited, and approved by a human team member before publication.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="relative min-h-[400px] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#D2EAFB" }}
      >
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0373BA 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #0373BA 0%, transparent 70%)" }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: "Montserrat, sans-serif", color: "#0373BA" }}>
            CONTENT POLICY
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            What we publish, how often we update it, and how we ensure accuracy.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last reviewed: March 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section) => (
            <Card key={section.title} className="border-none shadow-xl bg-white">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl font-bold text-black mb-8">{section.title}</h2>
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.heading}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.heading}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Contact */}
          <Card className="border-none shadow-xl" style={{ backgroundColor: "#D2EAFB" }}>
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#0373BA" }}>Questions about our content?</h2>
              <p className="text-gray-700 mb-4">
                If you spot an error or want to flag inaccurate information, please contact us.
              </p>
              <a
                href="mailto:contact@ravtech.co.il"
                className="inline-block font-semibold text-white px-8 py-3 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0373BA" }}
              >
                contact@ravtech.co.il
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
