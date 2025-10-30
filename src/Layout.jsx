import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { title: "Accelerate Startups", url: createPageUrl("AccelerateStartups") },
  { title: "Services", url: createPageUrl("Services") },
  { title: "Solutions", url: createPageUrl("Solutions") },
  { title: "Projects", url: createPageUrl("Projects") },
  { title: "Case Studies", url: createPageUrl("CaseStudies") },
  { title: "Careers", url: createPageUrl("Careers") },
  { title: "About", url: createPageUrl("About") },
  { title: "Contact Us", url: createPageUrl("Contact") },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Add favicon to document head
  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "https://ravtech.co.il/wp-content/uploads/2017/12/favicon.ico";
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/x-icon";
      link.href = "https://ravtech.co.il/wp-content/uploads/2017/12/favicon.ico";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/034b0b1d4_logo.png" 
                alt="RavTech Logo" 
                className="h-10"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`text-sm font-medium transition-all duration-200 hover:text-[#CCE7FA] relative group ${
                    location.pathname === item.url ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item.title}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CCE7FA] transition-all duration-200 group-hover:w-full ${
                    location.pathname === item.url ? "w-full" : ""
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.title}
                      to={item.url}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === item.url
                          ? "text-black"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="flex items-center space-x-4 pt-8 border-t">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={createPageUrl("Home")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Services")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Solutions")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Projects")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={createPageUrl("Careers")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("About")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={createPageUrl("Contact")}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  Concord Tower<br />
                  21 Bar Kochva Street<br />
                  Bnei-Brak, Israel
                </p>
                <p>
                  RAD Tower<br />
                  16 Hartom Street<br />
                  Jerusalem, Israel
                </p>
                <p>T. +972 3 800 3000</p>
                <p>F. +972 79 5729710</p>
                <p>
                  <a
                    href="mailto:contact@ravtech.co.il"
                    className="hover:text-black transition-colors"
                  >
                    contact@ravtech.co.il
                  </a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">
                Quick Contact
              </h3>
              <form className="space-y-3" onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! Thank you for your message.");
                e.target.reset();
              }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                />
                <textarea
                  placeholder="Message"
                  required
                  rows="3"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#CCE7FA] text-black hover:bg-[#B8D9F0] transition-colors"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                © 2025 RavTech. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#CCE7FA] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}