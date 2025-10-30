import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Award,
  Target,
  TrendingUp,
  Globe,
  Code,
  Handshake,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Social Impact",
      description:
        "We bridge talented individuals from underrepresented communities with the tech industry, creating opportunities and driving social change.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver exceptional quality in every project, combining technical expertise with business understanding to exceed client expectations.",
    },
    {
      icon: Users,
      title: "People First",
      description:
        "Our employees are our greatest asset. We invest in their growth, well-being, and professional development.",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "We build long-term relationships with our clients, acting as true partners in their success and growth.",
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Talented Employees" },
    { icon: Globe, value: "87+", label: "Satisfied Clients" },
    { icon: Code, value: "150+", label: "Successful Projects" },
    { icon: TrendingUp, value: "4.2", label: "Years Average Retention" },
  ];

  const milestones = [
    {
      year: "2013",
      title: "Founded",
      description: "RavTech was established with a vision to bridge technology and social impact",
    },
    {
      year: "2015",
      title: "First Major Client",
      description: "Partnered with Check Point for QA automation services",
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Opened Jerusalem office and expanded team to 100+ developers",
    },
    {
      year: "2020",
      title: "Innovation Authority Support",
      description: "Launched startup acceleration program with Innovation Authority funding",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Achieved partnerships with NICE, Wix, and other industry leaders",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF] -z-10" />
        <div
          className="absolute inset-0 opacity-10 -z-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8">
            About RavTech
          </h1>
          <p className="text-2xl text-gray-800 leading-relaxed mb-6">
            Where Technology Meets Social Impact
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            RavTech is a leading software development company that combines
            technical excellence with social responsibility. We deliver
            world-class development services while empowering talented
            individuals from the Haredi community to build successful tech
            careers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                RavTech was founded with a dual mission: to provide exceptional
                software development services to leading companies worldwide,
                while creating meaningful employment opportunities for talented
                individuals from underrepresented communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be a trusted partner for industry leaders
                like NICE, Wix, Check Point, and AMDOCS, while maintaining our
                commitment to social impact. Our teams deliver cutting-edge
                solutions across mobile development, web development, QA
                automation, DevOps, and machine learning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a social impact business, we are supported by IVN, an impact
                investment organization leading the development of Israel's
                social business ecosystem. This support enables us to continue
                growing our impact while maintaining the highest technical
                standards.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
                alt="RavTech Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Values
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-16">
            RavTech by the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Journey
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#CCE7FA] -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-black rounded-full -translate-x-1/2 z-10 border-4 border-white" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <Card className="border-none shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-[#CCE7FA] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-16 h-16 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Our Mission
            </h2>
          </div>

          <Card className="border-none shadow-2xl bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
            <CardContent className="p-12">
              <p className="text-2xl text-gray-800 leading-relaxed text-center mb-6">
                To deliver world-class software development services while
                creating meaningful career opportunities for talented individuals
                from the Haredi community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                We believe that diversity strengthens teams and drives
                innovation. By combining technical excellence with social impact,
                we're building a more inclusive tech industry while helping our
                clients achieve their business goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Social Impact
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a social impact business, RavTech is committed to creating
                employment opportunities for talented individuals from the Haredi
                (Ultra-Orthodox) community in Israel. We provide comprehensive
                training, mentorship, and career development programs that enable
                our team members to excel in the tech industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our impact goes beyond employment. We're building a model that
                proves diverse teams can deliver exceptional results. With an
                average employee retention rate of 4.2 years and consistent
                client satisfaction, we're demonstrating that social
                responsibility and business success go hand in hand.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Supported by IVN (Israel Venture Network), an impact investment
                organization, we continue to expand our reach and deepen our
                impact on both the tech industry and Israeli society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Whether you're looking for a development partner or want to join our
            team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Work With Us
              </Button>
            </Link>
            <Link to={createPageUrl("Careers")}>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-black hover:bg-black hover:text-white"
              >
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}