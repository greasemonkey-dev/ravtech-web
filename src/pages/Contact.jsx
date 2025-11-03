
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Send,
  Building,
  Clock,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const offices = [
    {
      name: "Bnei Brak Office",
      address: "Concord Tower, 21 Bar Kochva Street, Bnei-Brak, Israel",
      icon: Building,
    },
    {
      name: "Jerusalem Office",
      address: "RAD Tower, 16 Hartom Street, Jerusalem, Israel",
      icon: Building,
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+972 3 800 3000"],
      action: "tel:+97238003000",
    },
    {
      icon: Phone,
      title: "Fax",
      details: ["+972 79 5729710"],
      action: null,
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@ravtech.co.il"],
      action: "mailto:contact@ravtech.co.il",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF] -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8">
            Get in Touch
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

      {/* Contact Methods */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {method.title}
                    </h3>
                    {method.details.map((detail, idx) => (
                      <div key={idx}>
                        {method.action ? (
                          <a
                            href={method.action}
                            className="text-gray-700 hover:text-[#CCE7FA] transition-colors text-lg"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="text-gray-700 text-lg">{detail}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info - FIXED SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-black mb-6">Send Us a Message</h2>
              <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

              <Card className="border-none shadow-xl bg-white flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
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
                        placeholder="John Doe"
                      />
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
                        placeholder="john@company.com"
                      />
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
                        placeholder="+972 50 123 4567"
                      />
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
                        placeholder="Your Company Name"
                      />
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
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info */}
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold text-black mb-6">Visit Our Offices</h2>
              <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

              <div className="space-y-6 flex-1 flex flex-col justify-between">
                {offices.map((office, index) => {
                  const Icon = office.icon;
                  return (
                    <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-[#CCE7FA] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <Icon className="w-6 h-6 text-black" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-black mb-2">{office.name}</h3>
                            <p className="text-gray-700 flex items-start">
                              <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                              {office.address}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}

                <Card className="border-none shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-[#CCE7FA] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-3">Business Hours</h3>
                        <div className="space-y-2 text-gray-700">
                          <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                          <p>Friday: 9:00 AM - 2:00 PM</p>
                          <p>Saturday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#CCE7FA] rounded-lg flex items-center justify-center hover:bg-[#B8D9F0] transition-colors">
                        <Facebook className="w-6 h-6 text-black" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#CCE7FA] rounded-lg flex items-center justify-center hover:bg-[#B8D9F0] transition-colors">
                        <Linkedin className="w-6 h-6 text-black" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Find Us on the Map
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bnei Brak Map */}
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.2958743843673!2d34.83447!3d32.08389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA1JzAyLjAiTiAzNMKwNTAnMDQuMSJF!5e0!3m2!1sen!2sil!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Bnei Brak Office Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Bnei Brak Office
                  </h3>
                  <p className="text-gray-700">
                    Concord Tower, 21 Bar Kochva Street
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Jerusalem Map */}
            <Card className="border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.123456789!2d35.21234!3d31.78901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ3JzIwLjQiTiAzNcKwMTInNDQuNCJF!5e0!3m2!1sen!2sil!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Jerusalem Office Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Jerusalem Office
                  </h3>
                  <p className="text-gray-700">RAD Tower, 16 Hartom Street</p>
                </div>
              </CardContent>
            </Card>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+97238003000">
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
            </a>
            <a href="mailto:contact@ravtech.co.il">
              <Button
                variant="outline"
                className="text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-black hover:bg-black hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
