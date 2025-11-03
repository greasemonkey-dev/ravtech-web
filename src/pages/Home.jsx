
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
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/898ccb04f_1-2f906417.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/0aa06519c_2-2f906417.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/f02dc6943_3-2f906417.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/1e893c4ad_Group-4-copy-2-3.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/bff94e611_services-banner.png",
  ];

  const services = [
    {
      icon: Code,
      title: "End-to-End Projects",
      description: "Helping you realize your ideas every step of the way.",
    },
    {
      icon: Users,
      title: "R&D Extension",
      description: "Providing the team that extends your R&D capabilities.",
    },
    {
      icon: UserPlus,
      title: "Staff Augmentation",
      description:
        "Bridging the gap between your requirements and staffing constraints.",
    },
    {
      icon: MessageSquare,
      title: "Consulting",
      description: "Accompanying you across the complete project life cycle.",
    },
  ];

  const testimonials = [
    {
      title:
        "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, Employees Who Stay 5 Years",
      videoUrl: "https://www.youtube.com/embed/hGYLaLXPpRA",
      company: "NICE",
    },
    {
      title:
        "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
      videoUrl: "https://www.youtube.com/embed/jfbUpJE4AZ8",
      company: "Venn",
    },
    {
      title:
        "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity",
      videoUrl: "https://www.youtube.com/embed/4A5tLhZHr6Y",
      company: "CONNACT",
    },
    {
      title:
        "The Secret of AMDOCS: How Juniors and Strong Team Lead Deliver Strong Results and 30% Cost Savings",
      videoUrl: "https://www.youtube.com/embed/9Jw6jOLt_JY",
      company: "AMDOCS",
    },
  ];

  const solutions = [
    { icon: TestTube, title: "QA Automation" },
    { icon: Brain, title: "Machine and Deep Learning" },
    { icon: Smartphone, title: "Mobile Development" },
    { icon: Globe, title: "Web Development" },
    { icon: Cog, title: "DevOps" },
  ];

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
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/d5733920e_10.png",
  ];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(204, 231, 250, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-200/40 blur-3xl animate-float opacity-60" />
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#CCE7FA]/50 to-blue-100/40 blur-3xl animate-pulse opacity-50" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-100/30 to-blue-50/30 blur-3xl animate-bounce opacity-40" style={{ animationDuration: '10s' }} />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 py-20">
          {/* Main Heading with Enhanced Gradient */}
          <h1 className="relative mb-8 animate-fade-in">
            <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s' }}>
                  ACHIEVE WHAT
                </span>
                <span className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  ACHIEVE WHAT
                </span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                  YOU ENVISION
                </span>
                <span className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  YOU ENVISION
                </span>
              </span>
            </span>
          </h1>
          
          {/* Enhanced Subheading */}
          <div className="flex items-center justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#CCE7FA] to-[#CCE7FA]" />
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-clip-text text-transparent">
              END-TO-END PROJECTS
            </p>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#CCE7FA] to-[#CCE7FA]" />
          </div>
          
          {/* Description with Better Typography */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
            Transform your ideas into reality with our expert development teams.<br className="hidden sm:block" />
            <span className="text-gray-500">From concept to deployment, we deliver excellence.</span>
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16" style={{ animationDelay: '0.6s' }}>
            <Link to={createPageUrl("Contact")}>
              <Button
                className="group relative bg-black text-white hover:bg-gray-900 text-lg px-12 py-7 rounded-full transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-black/30 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-black text-gray-800 hover:bg-black hover:text-white text-lg px-12 py-7 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl"
              onClick={() => {
                document.querySelector('#services-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {[
              { value: '200+', label: 'Developers' },
              { value: '87+', label: 'Clients' },
              { value: '150+', label: 'Projects' },
              { value: '4.2Y', label: 'Avg Retention' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-100/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section id="carousel-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Scroller */}
      <section className="py-12 overflow-hidden bg-white border-y border-gray-100">
        <div className="relative">
          <BrandScroller
            logos={[
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-2.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-5.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-3.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-4.png",
              "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png",
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                >
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
                </Card>
              );
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
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-none shadow-lg overflow-hidden bg-white"
              >
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe
                      src={testimonial.videoUrl}
                      title={testimonial.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {testimonial.company}
                    </h3>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Solutions
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] transition-all duration-300 hover:shadow-lg cursor-pointer group bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-base font-semibold text-black">
                      {solution.title}
                    </h3>
                  </CardContent>
                </Card>
              );
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
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
            {customers.map((logoUrl, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full h-20 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logoUrl}
                  alt={`Customer ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
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
    </div>
  );
}
