
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BrandScroller } from "../components/BrandScroller";
import {
  Code,
  Users,
  UserPlus,
  MessageSquare,
  TestTube,
  Brain,
  Smartphone,
  Globe,
  Cog,
  ArrowRight } from
"lucide-react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/1e893c4ad_Group-4-copy-2-3.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/bff94e611_services-banner.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/958171ad6_1-64a415cb.png"];


  const services = [
  {
    icon: Code,
    title: "End-to-End Projects",
    description: "Helping you realize your ideas every step of the way."
  },
  {
    icon: Users,
    title: "R&D Extension",
    description: "Providing the team that extends your R&D capabilities."
  },
  {
    icon: UserPlus,
    title: "Staff Augmentation",
    description:
    "Bridging the gap between your requirements and staffing constraints."
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Accompanying you across the complete project life cycle."
  }];


  const testimonials = [
  {
    title:
    "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, Employees Who Stay 5 Years",
    videoUrl: "https://www.youtube.com/embed/hGYLaLXPpRA",
    company: "NICE"
  },
  {
    title:
    "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
    videoUrl: "https://www.youtube.com/embed/jfbUpJE4AZ8",
    company: "Venn"
  },
  {
    title:
    "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity",
    videoUrl: "https://www.youtube.com/embed/4A5tLhZHr6Y",
    company: "CONNACT"
  },
  {
    title:
    "The Secret of AMDOCS: How Juniors and Strong Team Lead Deliver Strong Results and 30% Cost Savings",
    videoUrl: "https://www.youtube.com/embed/9Jw6jOLt_JY",
    company: "AMDOCS"
  }];


  const solutions = [
  { icon: TestTube, title: "QA Automation" },
  { icon: Brain, title: "Machine and Deep Learning" },
  { icon: Smartphone, title: "Mobile Development" },
  { icon: Globe, title: "Web Development" },
  { icon: Cog, title: "DevOps" }];


  const customers = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/e71eaf936_1.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/01c442b0e_2.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/88bed56a5_3.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/44b798fd9_4.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/c3e29b9d8_5.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/9aed3be95_6.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/03160abe8_7.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/c3f122cce_8.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/237b30c5a_9.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/d5733920e_10.png"];


  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const footer = document.querySelector("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-cursor {
            animation: blink 1s infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section - Compact & Visual */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-gray-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(204, 231, 250, 0.1) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
          <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/30 blur-3xl animate-pulse opacity-50" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-[5%] right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#CCE7FA]/40 to-blue-100/30 blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }} />
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Title + Quick Stats */}
          <div className="text-center mb-8">
            <h1 className="relative mb-4 animate-slide-up">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent blur-xl opacity-40 animate-pulse" style={{ animationDuration: '3s' }}>
                    ACHIEVE WHAT
                  </span>
                  <span className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    ACHIEVE WHAT
                  </span>
                </span>
                <br />
                <span className="relative inline-block mt-1">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent blur-xl opacity-40 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                    YOU ENVISION
                  </span>
                  <span className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    YOU ENVISION
                  </span>
                </span>
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#CCE7FA] to-[#CCE7FA]" />
              <p className="text-xl sm:text-2xl lg:text-3xl font-light tracking-wide bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
                END-TO-END PROJECTS<span className="text-slate-900 animate-cursor">_</span>
              </p>
              <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#CCE7FA] to-[#CCE7FA]" />
            </div>

            {/* Mini Stats - Inline */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {[
                { value: '200+', label: 'Developers' },
                { value: '87+', label: 'Clients' },
                { value: '150+', label: 'Projects' },
                { value: '4.2Y', label: 'Retention' }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link to={createPageUrl("Contact")}>
                <Button className="group relative bg-black text-white hover:bg-gray-900 text-base px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-black/30 overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-black text-gray-800 hover:bg-black hover:text-white text-base px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/80 shadow-md hover:shadow-lg"
                onClick={() => {
                  document.querySelector('#services-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                Explore Services
              </Button>
            </div>
          </div>

          {/* Image Carousel - Prominent Display */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}>
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
              
              {/* Carousel Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "bg-white w-10 h-3"
                        : "bg-white/60 hover:bg-white/80 w-3 h-3"
                    }`}
                  />
                ))}
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <p className="text-sm font-bold text-gray-900">Trusted by Industry Leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Scroller - Integrated Seamlessly */}
      <section className="py-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white border-y border-gray-100/50">
        <div className="relative">
          <div className="text-center mb-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Trusted By</p>
          </div>
          <BrandScroller
            logos={[
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png"
            ]} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Services
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">

                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Real Life Success Stories
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) =>
            <Card
              key={index}
              className="border-none shadow-lg overflow-hidden bg-white">

                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                    src={testimonial.videoUrl}
                    title={testimonial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full" />

                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {testimonial.company}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Solutions
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] transition-all duration-300 hover:shadow-lg cursor-pointer group bg-white">

                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-base font-semibold text-black">
                      {solution.title}
                    </h3>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Some of Our Customers
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {customers.map((logoUrl, index) =>
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">

                <img
                src={logoUrl}
                alt={`Customer ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy" />

              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Impact Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#CCE7FA]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
            As a social impact business, we are supported by{" "}
            <span className="font-semibold">IVN</span>, an impact investment
            organization leading the development of Israel's social business
            ecosystem
          </p>
        </div>
      </section>
    </div>);

}
