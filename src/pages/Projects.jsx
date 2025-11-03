
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Shield, Navigation } from "lucide-react";

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: "maoz",
      name: "MAOZ",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600",
      description:
        "MAOZ identifies and trains promising and committed leaders, made up of diverse employment sectors and populations, in order to build an active network of change makers.",
      tags: ["Social Impact", "Leadership Development"],
      bgColor: "bg-blue-500",
    },
    {
      id: "checkpoint",
      name: "Check Point",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600",
      description:
        "Check Point is the largest security vendor globally, providing industry-leading cyber security solutions to enterprises worldwide.",
      tags: ["Cybersecurity", "Enterprise", "QA Automation"],
      bgColor: "bg-red-500",
    },
    {
      id: "oriient",
      name: "Oriient",
      icon: Navigation,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      description:
        "Oriient provides real-time location awareness services for easy and accurate navigation of large indoor environments.",
      tags: ["IoT", "Mobile", "Indoor Navigation"],
      bgColor: "bg-green-500",
    },
  ];

  const additionalClients = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/e71eaf936_1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/01c442b0e_2.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/88bed56a5_3.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/44b798fd9_4.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/c3e29b9d8_5.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/9aed3be95_6.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/03160abe8_7.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/c3f122cce_8.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/237b30c5a_9.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/d5733920e_10.png",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8">
            OUR PROJECTS
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            See examples of the projects we implement in a wide range of
            verticals and requirements, from startups through mid-sized companies
            to global corporations.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.id}
                  className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-white group"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 ${project.bgColor} rounded-full flex items-center justify-center mb-2`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-[#CCE7FA] text-black hover:bg-[#B8D9F0]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <Link to={createPageUrl("CaseStudies")}>
                      <Button
                        variant="outline"
                        className="w-full group/btn hover:bg-black hover:text-white transition-all duration-300"
                      >
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Clients */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            More Clients We've Worked With
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {additionalClients.map((logoUrl, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white w-full h-32 flex items-center justify-center"
              >
                <CardContent className="p-6 flex items-center justify-center w-full h-full">
                  <img
                    src={logoUrl}
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-16">
            Our Track Record
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#CCE7FA] mb-2">34</div>
              <p className="text-lg text-gray-700">Continuing Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#CCE7FA] mb-2">44</div>
              <p className="text-lg text-gray-700">Augmentation Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#CCE7FA] mb-2">75</div>
              <p className="text-lg text-gray-700">End-to-End Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#CCE7FA] mb-2">87</div>
              <p className="text-lg text-gray-700">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl bg-white">
            <CardContent className="p-12">
              <div className="text-6xl text-[#CCE7FA] mb-6">"</div>
              <blockquote className="text-2xl text-gray-800 leading-relaxed mb-8 italic">
                The Ravtech team displayed a very high level of professionalism,
                including the ability to ramp up a working product in a very
                short time and a deep knowledge of many technologies.
              </blockquote>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-black">DG</span>
                </div>
                <div>
                  <p className="font-semibold text-black text-lg">Dan Goren</p>
                  <p className="text-gray-600">CEO, IMblox</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us
              </Button>
            </Link>
            <Link to={createPageUrl("CaseStudies")}>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-black hover:bg-black hover:text-white"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
