
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
  ArrowRight
} from "lucide-react";

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/1e893c4ad_Group-4-copy-2-3.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/bff94e611_services-banner.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/958171ad6_1-64a415cb.png"
  ];

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
    }
  ];

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
    }
  ];

  const solutions = [
    { icon: TestTube, title: "QA Automation" },
    { icon: Brain, title: "Machine and Deep Learning" },
    { icon: Smartphone, title: "Mobile Development" },
    { icon: Globe, title: "Web Development" },
    { icon: Cog, title: "DevOps" }
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
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/d5733920e_10.png"
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
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#CCE7FA] rounded-full opacity-20 blur-3xl animate-float" />
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-[#E5F4FF] rounded-full opacity-30 blur-3xl" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#CCE7FA] to-transparent rounded-full opacity-10 blur-2xl" style={{ animationDelay: '4s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:space-y-8 animate-fadeInUp">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
                  <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    ACHIEVE
                  </span>
                  <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    WHAT YOU
                  </span>
                  <span className="block bg-gradient-to-r from-[#0373BA] to-[#0A66C2] bg-clip-text text-transparent">
                    ENVISION
                  </span>
                </h1>
              </div>
              
              {/* Subheading with animated underline */}
              <div className="space-y-3">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-700 tracking-wide">
                  END-TO-END PROJECTS<span className="animate-cursor text-[#0373BA]">_</span>
                </p>
                <div className="relative h-1 w-64 bg-gradient-to-r from-[#CCE7FA] via-[#0373BA] to-transparent rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your ideas into reality with our expert development team. We deliver cutting-edge solutions that drive growth and innovation.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to={createPageUrl("Contact")}>
                  <Button className="group bg-gradient-to-r from-black to-gray-900 text-white hover:from-gray-900 hover:to-black text-lg px-10 py-7 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-xl">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to={createPageUrl("Services")}>
                  <Button variant="outline" className="text-lg px-10 py-7 rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-6">
                {[
                  { value: '200+', label: 'Developers' },
                  { value: '87+', label: 'Clients' },
                  { value: '150+', label: 'Projects' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-[#0373BA] to-[#0A66C2] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image Carousel with Enhanced Design */}
            <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#CCE7FA] to-[#0373BA] rounded-3xl opacity-60 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0373BA] to-[#0A66C2] rounded-3xl opacity-40 blur-xl" />
              
              {/* Main carousel container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-2">
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-inner">
                  <div className="relative aspect-video">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Dashboard ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Dots with improved design */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 backdrop-blur-md rounded-full px-4 py-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImageIndex
                            ? "bg-white w-8 h-3"
                            : "bg-white/60 hover:bg-white/80 w-3 h-3"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#0373BA] to-[#0A66C2] text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-sm font-bold">Trusted Partner</div>
                <div className="text-xs opacity-90">Since 2013</div>
              </div>
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
            "https://ravtech.co.il/wp-content/uploads/2025/03/logo-1.png"]
            } />

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
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

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
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

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
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

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
