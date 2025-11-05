
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Code2,
  Rocket,
  Wrench,
  Users,
  Package,
  TestTube,
  UsersRound,
  User,
  Lightbulb,
  GitBranch,
  TrendingUp,
  ClipboardList,
  ArrowRight } from
"lucide-react";

export default function ServicesPage() {
  const endToEndSteps = [
  {
    icon: FileText,
    title: "Specs & Design",
    description: "Requirements gathering and system design"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Full-stack development with modern technologies"
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Deployment and production launch"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Ongoing support and updates"
  }];


  const rdCapabilities = [
  {
    icon: Lightbulb,
    title: "Feature",
    description: "Develop new features for your product"
  },
  {
    icon: Package,
    title: "Product",
    description: "Build complete product solutions"
  },
  {
    icon: TestTube,
    title: "QA Automation",
    description: "Automated testing frameworks"
  },
  {
    icon: UsersRound,
    title: "R&D Team",
    description: "Complete development teams"
  }];


  const staffOptions = [
  {
    icon: User,
    title: "Single Developer",
    description: "Expert developer for specific skill needs"
  },
  {
    icon: Users,
    title: "Whole Team",
    description: "Complete team for comprehensive project needs"
  }];


  const consultingAreas = [
  {
    icon: Lightbulb,
    title: "New Technologies",
    description: "Explore and adopt cutting-edge technologies"
  },
  {
    icon: GitBranch,
    title: "New Methodologies",
    description: "Implement agile and modern development practices"
  },
  {
    icon: TrendingUp,
    title: "Scale Up",
    description: "Grow your development capabilities"
  },
  {
    icon: ClipboardList,
    title: "Requirement Specification",
    description: "Define and document project requirements"
  }];


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
            SERVICES
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            As a service provider, we work to exceed your expectations and
            deliver exceptional results, operating and delivering exactly as your
            inside team.
          </p>
        </div>
      </section>

      {/* End-to-End Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            End-to-end Projects
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We manage end-to-end projects of all sizes. Working with you on the
            management and developer levels, we accompany you throughout the whole
            lifecycle of your project. We share our expertise in creating product
            roadmaps, implementation, and integration, relying on the Kanban
            methodology in all project phases.{" "}
            <Link
              to={createPageUrl("Projects")} className="text-[#0373BA] font-semibold hover:text-black transition-colors">Read about the Oriient end-to-end project.



            </Link>
          </p>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {endToEndSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative">

                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                        <Icon className="w-10 h-10 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                      {index < endToEndSteps.length - 1 &&
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gray-200 -translate-y-1/2">
                          <ArrowRight className="w-5 h-5 text-gray-400 absolute -top-2 right-0" />
                        </div>
                      }
                    </CardContent>
                  </Card>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* R&D Extension */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            R&D Extension
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Our team acts as your in-house team, extending your R&D capabilities
            whether it is a new product or setting up QA automation. Building the
            development team and managing it, we deploy our unique RavTech
            platform that enables you to hit the ground running, significantly
            shortening development duration and time-to-market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rdCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">

                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Staff Augmentation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Staff Augmentation
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Bridging the gap between your evolving IT/development needs and
            staffing requirements — whether it's for a short-term project or to
            meet your long-term goals – we provide your IT and development
            department with expert personnel to support your project and your
            team.{" "}
            <Link
              to={createPageUrl("Projects")} className="text-[#0373BA] font-semibold hover:text-black transition-colors">Read about the Check Point staff augmentation project.



            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {staffOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Icon className="w-12 h-12 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-4">
                      {option.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Consulting
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We empower startups to realize their ideas, mid-sized companies to
            scale up and instill new methodologies, and established corporations
            to venture into technologies outside their core business (such as
            continuous integration, QA automation and mobile development). Our
            experts assess the resources required, determine the best course of
            action and help in every step of the way, from specifications to
            execution to production.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">

                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Let's discuss how we can help you achieve your development goals
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}