import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText, Code2, Rocket, Wrench,
  Users, Lightbulb, GitBranch, TrendingUp, ClipboardList,
  Smartphone, Globe, Cpu, TestTube, Cog, Brain, Code, Server,
  Database, Cloud, Wifi, Activity, Radio, CloudCog, Globe2,
  Gauge, Settings, Eye, Network, HardDrive, DollarSign, Clock,
  Award, Target, ArrowRight, Bot, FileSearch, Layers, Zap
} from "lucide-react";

/* ─── Dark section design tokens (matches RavDataHome aesthetic) ─── */
const AI_CSS = `
  .ai-font { font-family: 'Rubik', 'Heebo', sans-serif; }

  .ai-bg {
    background-color: #070E1A;
    background-image:
      radial-gradient(circle at 15% 50%, rgba(3,115,186,0.18) 0%, transparent 55%),
      radial-gradient(circle at 85% 30%, rgba(0,212,255,0.08) 0%, transparent 45%),
      radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: auto, auto, 28px 28px;
  }

  .ai-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(3,115,186,0.25);
    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
  .ai-card:hover {
    border-color: rgba(3,115,186,0.6);
    transform: translateY(-3px);
    box-shadow: 0 0 28px rgba(3,115,186,0.18);
  }

  .ai-card-amber {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(245,158,11,0.25);
    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
  .ai-card-amber:hover {
    border-color: rgba(245,158,11,0.6);
    transform: translateY(-3px);
    box-shadow: 0 0 28px rgba(245,158,11,0.15);
  }

  .ai-btn {
    background: linear-gradient(135deg, #0373BA 0%, #00B4FF 100%);
    box-shadow: 0 4px 24px rgba(3,115,186,0.4);
    transition: box-shadow 0.3s, transform 0.2s;
    color: white;
    font-weight: 700;
    border-radius: 8px;
    padding: 10px 24px;
    display: inline-block;
    text-decoration: none;
  }
  .ai-btn:hover {
    box-shadow: 0 6px 32px rgba(3,115,186,0.65);
    transform: translateY(-1px);
  }

  .ai-btn-amber {
    background: linear-gradient(135deg, #B45309 0%, #F59E0B 100%);
    box-shadow: 0 4px 24px rgba(245,158,11,0.35);
    transition: box-shadow 0.3s, transform 0.2s;
    color: white;
    font-weight: 700;
    border-radius: 8px;
    padding: 10px 24px;
    display: inline-block;
    text-decoration: none;
  }
  .ai-btn-amber:hover {
    box-shadow: 0 6px 32px rgba(245,158,11,0.55);
    transform: translateY(-1px);
  }

  .ai-divider {
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(3,115,186,0.4), transparent);
  }

  .ai-pill {
    background: rgba(3,115,186,0.15);
    border: 1px solid rgba(3,115,186,0.3);
    color: #00D4FF;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    display: inline-block;
    letter-spacing: 0.05em;
  }

  .ai-pill-amber {
    background: rgba(245,158,11,0.12);
    border: 1px solid rgba(245,158,11,0.3);
    color: #FCD34D;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    display: inline-block;
    letter-spacing: 0.05em;
  }

  @keyframes ai-fade-up {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ai-fade-up { animation: ai-fade-up 0.6s ease both; }
  .ai-delay-1 { animation-delay: 0.15s; }
  .ai-delay-2 { animation-delay: 0.3s; }

  .ai-fade-in-top {
    background: linear-gradient(to bottom, #f9fafb 0%, #070E1A 100%);
    height: 48px;
    margin-bottom: -1px;
  }
  .ai-fade-out-bottom {
    background: linear-gradient(to bottom, #070E1A 0%, #ffffff 100%);
    height: 48px;
    margin-top: -1px;
  }
`;

const caseStudies = [
  {
    number: "01",
    company: "AMDOCS",
    title: "The Secret of AMDOCS: How Juniors and a Strong Team Lead Deliver Strong Results and 30% Cost Savings",
    videoUrl: "https://www.youtube-nocookie.com/embed/9Jw6jOLt_JY",
    keyResults: [
      { icon: DollarSign, text: "30% Cost Savings", color: "text-green-600" },
      { icon: Award, text: "Strong Delivery", color: "text-blue-600" },
      { icon: Users, text: "Junior + Senior Team Model", color: "text-purple-600" },
    ],
    bgColor: "bg-blue-500",
  },
  {
    number: "02",
    company: "CONNACT",
    title: "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity with Haredi Employees",
    videoUrl: "https://www.youtube-nocookie.com/embed/4A5tLhZHr6Y",
    keyResults: [
      { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
      { icon: Clock, text: "Fast Recruitment", color: "text-orange-600" },
      { icon: TrendingUp, text: "30% Productivity Increase", color: "text-blue-600" },
      { icon: Users, text: "Haredi Workforce Integration", color: "text-purple-600" },
    ],
    bgColor: "bg-green-500",
  },
  {
    number: "03",
    company: "VENN",
    title: "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
    videoUrl: "https://www.youtube-nocookie.com/embed/jfbUpJE4AZ8",
    keyResults: [
      { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
      { icon: TrendingUp, text: "30% Productivity Increase", color: "text-blue-600" },
      { icon: Award, text: "Successful Partnership", color: "text-purple-600" },
    ],
    bgColor: "bg-purple-500",
  },
  {
    number: "04",
    company: "NICE",
    title: "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, and Employees Who Stay 5 Years",
    videoUrl: "https://www.youtube-nocookie.com/embed/hGYLaLXPpRA",
    keyResults: [
      { icon: Clock, text: "66% Faster Recruitment", color: "text-orange-600" },
      { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
      { icon: Users, text: "5-Year Employee Retention", color: "text-blue-600" },
      { icon: Target, text: "Long-term Partnership Success", color: "text-purple-600" },
    ],
    bgColor: "bg-red-500",
  },
];

export default function ServicesPage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-white">
      <style>{AI_CSS}</style>

      {/* ── Hero ── */}
      <section
        className="relative min-h-[500px] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#D2EAFB" }}
      >
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0373BA 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #0373BA 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #0373BA 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#0373BA" }}
          >
            SERVICES & AI SOLUTIONS
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            End-to-end software delivery, R&D extension, and AI-powered products — built to work like your inside team.
          </p>
        </div>
      </section>

      {/* ── Core Delivery ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-3">How We Work With You</h2>
          <div className="bg-[#0373BA] mb-10 w-24 h-1" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "End-to-End Projects",
                desc: "Full lifecycle — specs, development, deployment, and maintenance. We manage it all using Kanban methodology.",
              },
              {
                icon: Layers,
                title: "R&D Extension",
                desc: "Your in-house team, extended. We build and manage your development team, significantly shortening time-to-market.",
              },
              {
                icon: Users,
                title: "Staff Augmentation",
                desc: "Single expert developer or a complete team — bridging your IT needs for short-term projects or long-term goals.",
              },
              {
                icon: Lightbulb,
                title: "Consulting",
                desc: "New tech adoption, methodology changes, scale-up planning, and requirement specification from specs to production.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Matrix ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-3">Technical Capabilities</h2>
          <div className="bg-[#0373BA] mb-4 w-24 h-1" />
          <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
            Solution architects across mobile, web, IoT, QA, DevOps, and AI — from small web projects to complex cross-platform cloud deployments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone, title: "Mobile",
                items: ["Native Android", "Native iOS", "GEO Mapping", "Mobility & Tracking", "Augmented Reality"],
              },
              {
                icon: Globe, title: "Web",
                items: ["React / Angular / Vue", "Node.js / Python / Go", "PostgreSQL / MongoDB", "AWS / GCP / Azure"],
              },
              {
                icon: Radio, title: "IoT",
                items: ["Sensor Connectivity", "Signal Processing", "Embedded Systems", "Cloud Communication"],
              },
              {
                icon: TestTube, title: "QA Automation",
                items: ["Mobile & Web Testing", "Client-Server Testing", "Load / Performance", "Perfecto Mobile Platform"],
              },
              {
                icon: Settings, title: "DevOps",
                items: ["CI/CD Pipelines", "Chef & Jenkins", "Azure / AWS / IBM", "Bash & Python Scripting"],
              },
              {
                icon: Brain, title: "Machine & Deep Learning",
                items: ["Pattern Recognition", "RNN / CNN Networks", "TensorFlow / Keras", "Big Data (Hadoop, ES)"],
              },
            ].map(({ icon: Icon, title, items }, i) => (
              <Card key={i} className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0">
                      <Icon className="w-5 h-5 text-[#0373BA]" />
                    </div>
                    <h3 className="text-lg font-bold text-black">{title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0373BA] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gradient bridge into dark ── */}
      <div className="ai-fade-in-top" />

      {/* ── AI Implementation ── */}
      <section className="ai-bg py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="ai-pill mb-4">AI IMPLEMENTATION</div>
            <h2 className="ai-font text-4xl sm:text-5xl font-black text-white mb-4 ai-fade-up">
              The AI Stack Powering{" "}
              <span style={{ color: "#00D4FF" }}>Israeli Industry</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto ai-fade-up ai-delay-1" style={{ color: "rgba(255,255,255,0.55)" }}>
              We built two AI products for the Israeli market — and the same stack is available as a custom implementation for your industry.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* RavData AI */}
            <div className="ai-card rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="ai-pill mb-3">LIVE PRODUCT</div>
                  <h3 className="ai-font text-2xl font-black text-white">RavData AI</h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    AI Logistics Intelligence
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(0,212,255,0.12)", border: "1px solid rgba(0,212,255,0.25)" }}
                >
                  <Layers className="w-6 h-6" style={{ color: "#00D4FF" }} />
                </div>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                AI-powered data intelligence for Israeli logistics SMBs. OCR ingestion of Hebrew invoices and delivery notes, automatic reconciliation, provider scoring, GPS tracking, and role-based dashboards — all connected to your existing email and Excel.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Hebrew OCR — PDF, photo, Excel",
                  "Invoice ↔ delivery note reconciliation",
                  "Provider performance scoring",
                  "Real-time GPS + dispatcher dashboard",
                  "Export to חשבשבת / Priority",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#00D4FF" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/ravdata" className="ai-btn">Explore RavData AI →</Link>
            </div>

            {/* RavDoc AI */}
            <div className="ai-card-amber rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="ai-pill-amber mb-3" dir="rtl" lang="he">מוצר ישראלי</div>
                  <h3 className="ai-font text-2xl font-black text-white">RavDoc AI</h3>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                    AI Document Processing
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <FileSearch className="w-6 h-6" style={{ color: "#F59E0B" }} />
                </div>
              </div>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Document intelligence for Israeli government and enterprise. 98%+ Hebrew OCR accuracy, automatic PII detection and redaction, Amendment 13 compliance, and structured JSON output — running on Israeli Nimbus infrastructure.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "98%+ OCR accuracy — Hebrew, Arabic, English",
                  "PII detection & redaction (Amendment 13)",
                  "Structured JSON field extraction",
                  "50× faster than manual processing",
                  "Nimbus-hosted — data stays in Israel",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#F59E0B" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/ravdoc-ai" className="ai-btn-amber">
                Explore RavDoc AI →
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="ai-divider mb-12" />

          {/* Capability pillars */}
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
              THE SAME STACK — AVAILABLE FOR YOUR INDUSTRY
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Bot, label: "LLM Integration" },
                { icon: Database, label: "RAG & Data Pipelines" },
                { icon: Globe2, label: "Hebrew NLP" },
                { icon: Zap, label: "AI Agents" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#00D4FF" }} />
                  <span className="text-sm font-semibold text-white">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark section CTA */}
          <div className="text-center">
            <Link to={createPageUrl("Contact")} className="ai-btn">
              Discuss Your AI Implementation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gradient bridge out of dark ── */}
      <div className="ai-fade-out-bottom" />

      {/* ── Case Studies banner ── */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Hear It from Our Clients</h2>
          <p className="text-xl text-gray-800">
            Discover how we've helped leading companies achieve significant cost savings, faster recruitment, and increased productivity.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((cs, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`absolute top-4 left-4 ${cs.bgColor} text-white font-bold text-sm px-4 py-2 rounded-full z-10`}>
                      Case #{cs.number}
                    </div>
                    <div className="aspect-video bg-gray-900">
                      <iframe
                        src={cs.videoUrl}
                        title={cs.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${cs.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-xl">{cs.company.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black">{cs.company}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{cs.title}</p>
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cs.keyResults.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div key={idx} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                              <Icon className={`w-5 h-5 ${result.color}`} />
                              <span className="text-sm font-medium text-gray-800">{result.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800"
                      onClick={() => window.open(cs.videoUrl.replace("/embed/", "/watch?v="), "_blank")}
                    >
                      Watch Full Story
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Metrics ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">Proven Impact Across All Clients</h2>
          <div className="w-24 h-1 bg-[#0373BA] mx-auto mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, value: "25–30%", label: "Average Cost Savings", bg: "bg-green-100", color: "text-green-600" },
              { icon: Clock, value: "66%", label: "Faster Recruitment", bg: "bg-orange-100", color: "text-orange-600" },
              { icon: TrendingUp, value: "30%", label: "Productivity Increase", bg: "bg-blue-100", color: "text-blue-600" },
            ].map(({ icon: Icon, value, label, bg, color }, i) => (
              <Card key={i} className="border-none shadow-lg bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-8 h-8 ${color}`} />
                  </div>
                  <div className="text-4xl font-bold text-black mb-2">{value}</div>
                  <p className="text-gray-700">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Ready to Get Started?</h2>
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
    </div>
  );
}
