
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Clock,
  Users,
  DollarSign,
  Award,
  Target,
} from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      number: "01",
      company: "AMDOCS",
      title:
        "The Secret of AMDOCS: How Juniors and a Strong Team Lead Deliver Strong Results and 30% Cost Savings",
      videoUrl: "https://www.youtube-nocookie.com/embed/9Jw6jOLt_JY",
      keyResults: [
        { icon: DollarSign, text: "30% Cost Savings", color: "text-green-600" },
        { icon: Award, text: "Strong Delivery", color: "text-blue-600" },
        {
          icon: Users,
          text: "Junior + Senior Team Model",
          color: "text-purple-600",
        },
      ],
      bgColor: "bg-blue-500",
    },
    {
      number: "02",
      company: "CONNACT",
      title:
        "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity with Haredi Employees",
      videoUrl: "https://www.youtube-nocookie.com/embed/4A5tLhZHr6Y",
      keyResults: [
        { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
        { icon: Clock, text: "Fast Recruitment", color: "text-orange-600" },
        {
          icon: TrendingUp,
          text: "30% Productivity Increase",
          color: "text-blue-600",
        },
        {
          icon: Users,
          text: "Haredi Workforce Integration",
          color: "text-purple-600",
        },
      ],
      bgColor: "bg-green-500",
    },
    {
      number: "03",
      company: "VENN",
      title:
        "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
      videoUrl: "https://www.youtube-nocookie.com/embed/jfbUpJE4AZ8",
      keyResults: [
        { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
        {
          icon: TrendingUp,
          text: "30% Productivity Increase",
          color: "text-blue-600",
        },
        {
          icon: Award,
          text: "Successful Partnership",
          color: "text-purple-600",
        },
      ],
      bgColor: "bg-purple-500",
    },
    {
      number: "04",
      company: "NICE",
      title:
        "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, and Employees Who Stay 5 Years",
      videoUrl: "https://www.youtube-nocookie.com/embed/hGYLaLXPpRA",
      keyResults: [
        {
          icon: Clock,
          text: "66% Faster Recruitment",
          color: "text-orange-600",
        },
        { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
        {
          icon: Users,
          text: "5-Year Employee Retention",
          color: "text-blue-600",
        },
        {
          icon: Target,
          text: "Long-term Partnership Success",
          color: "text-purple-600",
        },
      ],
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>
            Real Clients, Real Results
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover how we've helped leading companies achieve significant cost
            savings, faster recruitment, and increased productivity.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <Card
                key={index}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group"
              >
                <CardContent className="p-0">
                  {/* Case Number Badge */}
                  <div className="relative">
                    <div
                      className={`absolute top-4 left-4 ${caseStudy.bgColor} text-white font-bold text-sm px-4 py-2 rounded-full z-10`}
                    >
                      Case #{caseStudy.number}
                    </div>

                    {/* Video Embed */}
                    <div className="aspect-video bg-gray-900">
                      <iframe
                        src={caseStudy.videoUrl}
                        title={caseStudy.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Company Logo/Name */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${caseStudy.bgColor} rounded-lg flex items-center justify-center mr-3`}
                      >
                        <span className="text-white font-bold text-xl">
                          {caseStudy.company.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black">
                        {caseStudy.company}
                      </h3>
                    </div>

                    {/* Title */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {caseStudy.title}
                    </p>

                    {/* Key Results */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Key Results
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.keyResults.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3"
                            >
                              <Icon className={`w-5 h-5 ${result.color}`} />
                              <span className="text-sm font-medium text-gray-800">
                                {result.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800 group/btn"
                      onClick={() => {
                        window.open(caseStudy.videoUrl.replace("/embed/", "/watch?v="), "_blank");
                      }}
                    >
                      Watch Full Story
                      <svg
                        className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Proven Impact Across All Clients
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">
                  25-30%
                </div>
                <p className="text-gray-700">Average Cost Savings</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">66%</div>
                <p className="text-gray-700">Faster Recruitment</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">30%</div>
                <p className="text-gray-700">Productivity Increase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-gray-800 mb-8 leading-relaxed">
            Let's discuss how RavTech can help your company achieve significant
            cost savings and productivity improvements.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
