import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { LinkedInIcon } from "@/components/LinkedInIcon";
import CookieConsent from "@/components/CookieConsent";
import FormMessage from "@/components/FormMessage";

const navigationItems = [
    { title: "Accelerate Startups", url: createPageUrl("AccelerateStartups") },
    { title: "Services", url: createPageUrl("Services") },
    { title: "Industries", url: null, children: [
        { title: "AI Manufacturing", url: "/ai-manufacturing" },
        { title: "AI Logistics", url: "/ai-logistics" },
    ]},
    { title: "Projects", url: createPageUrl("Projects") },
    { title: "Careers", url: createPageUrl("Careers") },
    { title: "About", url: createPageUrl("About") },
    { title: "Contact Us", url: createPageUrl("Contact") },
];

export default function Layout({ children }) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [formMessage, setFormMessage] = useState({ show: false, success: false, text: "" });

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

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

    // Add UserWay accessibility widget
    useEffect(() => {
        // Set configuration before loading the script
        window.UserWayWidgetApp = {
            position: 5, // bottom-center position
        };

        const script = document.createElement("script");
        script.src = "https://cdn.userway.org/widget.js";
        script.setAttribute("data-account", "5oBc94PtYh");
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);


        // Add Google Site Verification
        useEffect(() => {
            const meta = document.createElement("meta");
            meta.name = "google-site-verification";
            meta.content = "k1VwoRrOyYTpKLWQ2E1MvDvAOKl2umNngDgFH_WvqDc";
            document.head.appendChild(meta);

        return () => {
            if (document.head.contains(meta)) {
                document.head.removeChild(meta);
            }
        };
        }, []);

        // Add Google Analytics
        useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-LRWXG6XWC3";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LRWXG6XWC3');

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
        }, []);

    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ravtech",
            "url": "https://ravtech.co.il",
            "logo": {
                "@type": "ImageObject",
                "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/44f4fb0d2_logo.png",
                "width": 200,
                "height": 60
            },
            "description": "AI integration and data unification for manufacturing and logistics companies in Israel",
            "areaServed": "IL",
            "knowsLanguage": ["he", "en"],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "21 Bar Kochva Street, Concord Tower",
                "addressLocality": "Bnei Brak",
                "addressCountry": "IL"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@ravtech.co.il",
                "contactType": "customer service",
                "availableLanguage": ["Hebrew", "English"]
            },
            "sameAs": [
                "https://www.linkedin.com/company/ravtech"
            ]
        }) }} />
        <div className="min-h-screen bg-white">
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
          
          .heading-custom {
            font-family: 'Montserrat', sans-serif;
            color: #0373BA;
          }
        `}
            </style>

            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 hover:shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link to={createPageUrl("Home")} className="flex items-center">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/44f4fb0d2_logo.png"
                                alt="RavTech Logo"
                                className="h-10 transition-transform duration-300 hover:scale-110"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigationItems.map((item) =>
                              item.children ? (
                                <div key={item.title} className="relative group">
                                  <button className="text-base font-semibold tracking-wide text-gray-700 hover:text-gray-900 flex items-center gap-1 transition-all duration-300">
                                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">{item.title}</span>
                                    <svg aria-hidden="true" className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                  </button>
                                  <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    {item.children.map(child => (
                                      <Link key={child.title} to={child.url} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#0373BA] transition-colors first:rounded-t-lg last:rounded-b-lg">
                                        {child.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  key={item.title}
                                  to={item.url}
                                  className={`text-base font-semibold tracking-wide relative group transition-all duration-300 ${location.pathname === item.url
                                      ? "text-black"
                                      : "text-gray-700 hover:text-gray-900"
                                    }`}
                                >
                                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 inline-block">
                                    {item.title}
                                  </span>
                                  <span
                                    className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-900 rounded-full transition-all duration-300 group-hover:w-full ${location.pathname === item.url ? "w-full" : ""
                                      }`}
                                  />
                                </Link>
                              )
                            )}
                        </nav>

                        {/* Social Icons - Desktop */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <a
                                href="https://www.linkedin.com/company/ravtech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0A66C2] hover:opacity-80 transition-opacity duration-300"
                            >
                                <LinkedInIcon className="w-9 h-9 transition-transform duration-300 hover:scale-110" />
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
                                    {navigationItems.map((item) =>
                                      item.children ? (
                                        <React.Fragment key={item.title}>
                                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-2">Industries</span>
                                          {item.children.map(child => (
                                            <Link
                                              key={child.title}
                                              to={child.url}
                                              onClick={() => setIsOpen(false)}
                                              className="text-lg font-medium text-gray-700 hover:text-gray-900 pl-4 border-l-2 border-[#0373BA] transition-all duration-300"
                                            >
                                              {child.title}
                                            </Link>
                                          ))}
                                        </React.Fragment>
                                      ) : (
                                        <Link
                                          key={item.title}
                                          to={item.url}
                                          onClick={() => setIsOpen(false)}
                                          className={`text-lg font-medium transition-all duration-300 ${location.pathname === item.url
                                              ? "text-black"
                                              : "text-gray-700 hover:text-gray-900"
                                            }`}
                                        >
                                          {item.title}
                                        </Link>
                                      )
                                    )}
                                    <div className="flex items-center space-x-4 pt-8 border-t border-gray-200">
                                        <a
                                            href="https://www.linkedin.com/company/ravtech"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#0A66C2] hover:opacity-80 transition-opacity duration-300"
                                        >
                                            <LinkedInIcon className="w-6 h-6" />
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 heading-custom">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                
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
                                        to={createPageUrl("Projects")}
                                        className="text-gray-600 hover:text-black transition-colors"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={createPageUrl("AccelerateStartups")}
                                        className="text-gray-600 hover:text-black transition-colors"
                                    >
                                        Accelerate Startups
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 heading-custom">
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

                        {/* Industry Solutions */}
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 heading-custom">
                            Industry Solutions
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link to="/ai-manufacturing" className="text-gray-600 hover:text-black transition-colors">
                                AI Manufacturing
                              </Link>
                            </li>
                            <li>
                              <Link to="/ai-logistics" className="text-gray-600 hover:text-black transition-colors">
                                AI Logistics
                              </Link>
                            </li>
                            <li>
                              <Link to="/case-studies/degalert" className="text-gray-600 hover:text-black transition-colors">
                                DegAlert Case Study
                              </Link>
                            </li>
                            <li>
                              <Link to="/faq/ai-manufacturing-logistics" className="text-gray-600 hover:text-black transition-colors">
                                AI Manufacturing FAQ
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 heading-custom">
                                Contact
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p>
                                    Concord Tower<br />
                                    21 Bar Kochva Street<br />
                                    Bnei-Brak, Israel
                                </p>
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
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 heading-custom">
                                Quick Contact
                            </h3>
                            <form className="space-y-3" onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                try {
                                    await fetch("https://hook.eu1.make.com/wgwrrp5zb9b56hhv5j5daxuas8fha38y", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                            source: "Footer",
                                            name: formData.get("name"),
                                            email: formData.get("email"),
                                            message: formData.get("message")
                                        })
                                    });
                                    setFormMessage({ show: true, success: true, text: "Thank you! Your message has been sent successfully." });
                                    e.target.reset();
                                } catch {
                                    setFormMessage({ show: true, success: false, text: "Oops! Something went wrong. Please try again." });
                                }
                            }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#CCE7FA] focus:border-transparent"
                                />
                                <textarea
                                    name="message"
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

                    {/* Copyright & Social Media - All on Left Side */}
                    <div className="pt-8 border-t border-gray-200">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6">
                            <p className="text-sm text-gray-600 text-center md:text-left">
                                © 2025 RavTech. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.linkedin.com/company/ravtech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0A66C2] hover:opacity-80 transition-opacity duration-300"
                                >
                                    <LinkedInIcon className="w-5 h-5" />
                                </a>
                                <Link
                                    to={createPageUrl("TermsOfUse")}
                                    className="text-sm text-gray-600 hover:text-black transition-colors"
                                >
                                    Terms of Use & Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Cookie Consent */}
            <CookieConsent />

            {/* Form Success/Error Message Modal */}
            <FormMessage
                show={formMessage.show}
                success={formMessage.success}
                text={formMessage.text}
                onClose={() => setFormMessage({ show: false, success: false, text: "" })}
            />
        </div>
        </>
    );
}