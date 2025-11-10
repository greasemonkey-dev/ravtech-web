
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Handshake,
  Check,
  Phone,
  Mail,
  MapPin } from
"lucide-react";

export default function AccelerateStartupsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon to schedule a consultation call.");
    setFormData({ fullName: "", mobile: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
  {
    icon: Users,
    value: "4x",
    title: "Fast and Professional Development Power"
  },
  {
    icon: Calendar,
    value: "21 Days",
    title: "To deploy a professional development team"
  },
  {
    icon: DollarSign,
    value: "$23,000",
    title: "Annual savings in development costs"
  }];


  const processSteps = [
  {
    number: "1",
    stage: "Stage A",
    description:
    "Initial meeting with Business Development Manager and expectation alignment"
  },
  {
    number: "2",
    stage: "Stage B",
    description:
    "In-depth technology meeting with VP R&D and tech stack review"
  },
  {
    number: "3",
    stage: "Stage C",
    description:
    "Full program presentation and success criteria definition with RavTech CEO"
  }];


  const benefits = [
  {
    icon: TrendingUp,
    title: "Real Investment",
    description:
    "We get under the hood with you - subsidizing development costs and deploying a professional team within 21 days"
  },
  {
    icon: Award,
    title: "Proven Expertise",
    description:
    "Rich experience working with companies like NICE and Wix, with an employee retention rate of 4.2 years"
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description:
    "Building a long-term relationship based on deep understanding of your business needs"
  }];


  const testimonials = [
  {
    title:
    "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, Employees Who Stay 5 Years",
    videoUrl: "https://www.youtube.com/embed/hGYLaLXPpRA"
  },
  {
    title:
    "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
    videoUrl: "https://www.youtube.com/embed/jfbUpJE4AZ8"
  },
  {
    title:
    "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity",
    videoUrl: "https://www.youtube.com/embed/4A5tLhZHr6Y"
  },
  {
    title:
    "The Secret of AMDOCS: How Juniors and Strong Team Lead Deliver Strong Results and 30% Cost Savings",
    videoUrl: "https://www.youtube.com/embed/9Jw6jOLt_JY"
  }];


  const faqs = [
  {
    question: "What are the threshold conditions for joining the program?",
    answer:
    "In the initial meeting we will examine your fit for the program according to the following parameters:\n\n• The fundraising stage the company is in and financial stability\n• A detailed business plan where you present development goals against the business plan and demonstrate significant growth potential according to the development power you will receive\n• Suitable technological content for the development power you will receive"
  },
  {
    question: "What percentage of funding?",
    answer:
    "The funding percentages are approximately 70% in the first half year and between 20%-15% in the following half year"
  },
  {
    question: "What is the team composition?",
    answer:
    "The development power assigned to you is an experienced team leader (HO) and four developers"
  },
  {
    question: "Is this in exchange for equity?",
    answer:
    "No, we don't enter as partners, we partially fund the initial development cost to take you to the next business step"
  },
  {
    question: "What percentage of employment for the team leader?",
    answer: "The team leader + their team work full-time"
  },
  {
    question: "Is this an hourly or global model?",
    answer: "The team's work model is global"
  },
  {
    question: "Where do the employees sit?",
    answer:
    "There is maximum flexibility and the prevailing approach is hybrid - meaning, part of the week in your offices, and part from RavTech offices"
  },
  {
    question: "Is this only development? And in what areas?",
    answer:
    "The acceleration program focuses on R&D development only. Technological matching is made according to customer requirements"
  },
  {
    question: "Who is the funding body?",
    answer:
    "The funding is based on RavTech's collaboration with the Innovation Authority and other government bodies"
  },
  {
    question: "What are the relevant development areas?",
    answer:
    "Most developers at RavTech are FullStack. However, there is an option to direct to more specific development content in Frontend, Integration, Data Engineering areas"
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>
            Accelerate your Startup!
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-800 mb-8 font-medium">
            An acceleration program that will help you meet your next business
            goals!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            This program is designed for early-stage startup companies that have
            raised Seed/Pre-Seed funding and are deep in the 'short blanket'
            stage, where additional software development power can make the
            difference with the next customer or investor. The program focuses on
            companies that can demonstrate significant growth potential and rely
            on software as a key component of their product.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">

            Schedule a Consultation Call
          </Button>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            The program includes deploying a software development team tailored to
            your company's technology stack within 21 days from acceptance into
            the program, saving you exhausting Talent Acquisition efforts during
            the critical stages your company is in.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The program saves tens of thousands of shekels per month and provides
            the development team at minimal subsidized cost for 12 months, after
            which it will continue to provide development services according to
            the business needs and development of the company.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            What do you get in the acceleration program?
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 flex flex-col">

                  <CardContent className="p-8 text-center flex flex-col flex-1">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-4">
                      {feature.value}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex-1">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Acceptance Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Program Acceptance Process
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

         <div className="relative">
  {/* Timeline line */}
  <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#CCE7FA] -translate-y-1/2 -z-10" />

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end md:items-stretch">
    {processSteps.map((step, index) =>
              <div key={index} className="relative flex flex-col justify-end">
        <Card className="border-2 border-[#CCE7FA] shadow-lg bg-white h-full flex flex-col justify-between">
          <CardContent className="p-8 text-center flex flex-col justify-between h-full">
            <div>
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {step.stage}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
              )}
  </div>
          </div>

        </div>
          <div className="text-center mt-12">
            <Button
            onClick={scrollToContact}
            className="bg-[#CCE7FA] text-black hover:bg-[#B8D9F0] text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105">

              Schedule a Consultation Call
            </Button>
          </div>
      </section>

      {/* Why RavTech */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Why RavTech?
          </h2>
          <div className="bg-[#0373BA] mb-8 mx-auto w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed text-center mb-16 max-w-4xl mx-auto">
            The program includes deploying a software development team tailored to
            your company's technology stack within 21 days from acceptance into
            the program, saving you exhausting Talent Acquisition efforts during
            the critical stages your company is in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">

                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Our Goal */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-8">
            Our Goal
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To build a portfolio of successful companies that grow together with
            us. We believe that through investing in the right clients and
            providing real value, we can deepen our ability to provide maximum
            solutions to the development challenges of Israeli startups. Thanks to
            the support of the Innovation Authority, we can offer the most
            comprehensive solution in the market - a combination of significant
            financial investment together with proven technological expertise.
          </p>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Clients Speak
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
                    <p className="text-sm text-gray-700">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Frequently Asked Questions
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) =>
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">

                <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-gray-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed whitespace-pre-line pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact-section"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">

        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            For More Information and to Schedule a Consultation Call:
          </h2>
          <div className="w-24 h-1 bg-[#0373BA] mx-auto mb-16" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="flex flex-col">
              <Card className="border-none shadow-lg bg-white flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-[#0373BA] mt-1 lucide lucide-map-pin w-5 h-5 flex-shrink-0" />
                      <p className="text-gray-700">Bar Kochva 21, Bnei Brak</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#0373BA] flex-shrink-0" />
                      <a
                        href="tel:058-7625162"
                        className="text-gray-700 hover:text-black">
                        058-7625162
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#0373BA] flex-shrink-0" />
                      <a
                        href="mailto:etid@ravtech.co.il"
                        className="text-gray-700 hover:text-black">
                        etid@ravtech.co.il
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="flex flex-col">
              <Card className="border-none shadow-lg bg-white flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name *"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent" />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile *"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent" />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent" />
                    </div>
                    <div className="flex-1">
                      <textarea
                        name="message"
                        placeholder="Message Content"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full h-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent resize-none" />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg rounded-lg">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700">RavTech 2025</p>
          </div>
        </div>
      </section>
    </div>
  );
}
