import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Send
} from
  "lucide-react";
import { LinkedInIcon } from "../components/LinkedInIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://hook.eu2.make.com/50pb6dj7h20tfxc3sgx5wh5h2u1ehwek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "Contact Us",
          ...formData
        })
      });
      alert("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>Let's Get in Touch

          </h1>
          <p className="text-2xl text-gray-800 leading-relaxed mb-6">
            Let's discuss how we can help you achieve your development goals
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Whether you need a development team, want to discuss a project, or
            are interested in joining our team, we're here to help.
          </p>
        </div>
      </section>


      {/* Contact Form & Map */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="flex flex-col h-full">
              <h2 className="text-4xl font-bold text-black mb-4">Let's Start a Conversation</h2>
              <p className="text-lg text-gray-600 mb-6">Share your project details and we'll get back to you within 24 hours</p>
              <div className="bg-[#0373BA] mb-8 w-24 h-1" />

              <Card className="border-none shadow-xl bg-white flex-1">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                        placeholder="John Doe" />

                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                        placeholder="john@company.com" />

                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                        placeholder="+972 50 123 4567" />

                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                        placeholder="Your Company Name" />

                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent resize-none"
                        placeholder="Tell us about your project or inquiry..." />

                    </div>

                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Location & Map */}
            <div className="flex flex-col h-full">
              <h2 className="text-4xl font-bold text-black mb-4">Visit Our HQ Office</h2>
              <p className="text-lg text-gray-600 mb-6">We'd love to meet you in person</p>
              <div className="bg-[#0373BA] mb-8 w-24 h-1" />

              <div className="flex flex-col gap-6 flex-1">
                <Card className="border-none shadow-xl overflow-hidden bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-[#CCE7FA] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">Bnei Brak Office</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Concord Tower<br />
                          21 Bar Kochva Street<br />
                          Bnei-Brak, Israel
                        </p>
                      </div>
                    </div>

                    
                  </CardContent>
                </Card>

                {/* Map */}
                <Card className="border-none shadow-xl overflow-hidden flex-1">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full min-h-[300px] bg-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4370.383879499366!2d34.82153009067694!3d32.09316046482205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4a2be38f9bc7%3A0x6371f868074cc281!2sBar%20Kochva%20St%2021%2C%20Bnei%20Brak!5e1!3m2!1sen!2sil!4v1763022280080!5m2!1sen!2sil"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="משרד בר כוכבא 21 בני ברק"
                      />
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Our team is ready to help you achieve your development goals. Let's
            build something amazing together.
          </p>
          <a href="mailto:contact@ravtech.co.il">
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </a>
        </div>
      </section>
    </div>);

}