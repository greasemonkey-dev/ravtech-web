
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Award,
  Target,
  TrendingUp,
  Globe,
  Code,
  Handshake } from
"lucide-react";

export default function AboutPage() {
  const values = [
  {
    icon: Heart,
    title: "Social Impact",
    description:
    "We bridge talented individuals from underrepresented communities with the tech industry, creating opportunities and driving social change."
  },
  {
    icon: Award,
    title: "Excellence",
    description:
    "We deliver exceptional quality in every project, combining technical expertise with business understanding to exceed client expectations."
  },
  {
    icon: Users,
    title: "People First",
    description:
    "Our employees are our greatest asset. We invest in their growth, well-being, and professional development."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
    "We build long-term relationships with our clients, acting as true partners in their success and growth."
  }];


  const stats = [
  { icon: Users, value: "200+", label: "Talented Employees" },
  { icon: Globe, value: "87+", label: "Clients" },
  { icon: Code, value: "150+", label: "Successful Projects" },
  { icon: TrendingUp, value: "4.2", label: "Years Average Retention" }];


  const milestones = [
  {
    year: "2013",
    title: "Founded",
    description: "RavTech was established with a vision to bridge technology and social impact"
  },
  {
    year: "2015",
    title: "First Major Client",
    description: "Partnered with Check Point for QA automation services"
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Opened Jerusalem office and expanded team to 100+ developers"
  },
  {
    year: "2020",
    title: "Innovation Authority Support",
    description: "Launched startup acceleration program with Innovation Authority funding"
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Achieved partnerships with NICE, Wix, and other industry leaders"
  }];


  const teamMembers = [
    {
    name: "Shmulik Moskowitz",
    role: "CEO",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/8e3cb3a5b_shmulik-moskowitz.png",
    bio: "Shmulik Moskowitz is the CEO of RavTech, bringing over 15 years of leadership experience across global technology and service organisations. Before joining RavTech, Shmulik served as SVP Sales for Israel and Eastern Europe at Qualitest, where he led large cross-regional teams, developed new markets and business units, and drove end-to-end delivery of quality engineering and digital solutions for enterprise clients. With an MBA in Information Systems and Technology Development & Marketing and an MCPD in Computer Programming, Shmulik combines deep technological understanding with strategic business vision. His expertise spans sales growth, delivery excellence, customer relationship management, and innovation leadership."
  },
  {
    name: "Shai Liberman",
    role: "Chairman of the Board",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/5bfd81f06_Shai_Liberman.jpg",
    bio: "Shai Liberman is the Chairman of the Board at RavTech, bringing over 20 years of executive leadership in the global IT services industry. As Managing Director at Qualitest, Shai leads operations across Israel, Eastern Europe, Switzerland, and Portugal- overseeing more than 2,000 employees and major global accounts. With deep expertise in strategic growth, market expansion, M&A, and organisational leadership, Shai combines business vision with a people-first approach to drive sustainable growth and innovation."
  },
  {
    name: "Benny Levin",
    role: "Board Member",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/4b197311f_Benny_Levin_new.png",
    bio: "Benny Levin co-founded NICE Systems, where he served as President, Director, Chairman and CEO. Benny also served as Chairman of the Board of dbMotion. Since retiring from most of his business activities, Benny dedicates himself to a wide array of social and philanthropic activities. He serves as Vice Chairman of IVN, and as Active Chairman of Ben Yakir and Kedma youth villages. Benny served in the IDF Intelligence Corps, retiring with the rank of Lieutenant Colonel. He has a bachelor's and master's degrees in Electrical Engineering from the Technion."
  },
  {
    name: "Shmil Levy",
    role: "Board Member",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/4f3eab6e4_Shmil_Levy.png",
    bio: "Co-Founder, and Managing Partner of Sequoia Capital Israel venture capital fund 2001-today. Before his role at Sequoia Capital, Shmil held various important positions as a high-tech entrepreneur, including VP R&D of Lannet from 1992-1996 and CEO of Lannet from 1996-1998 and serving as President of division of Lucent Worldwide for Communications Systems from 1998-2000. Beyond his business activities, since 2018, Mr. Levy has been donating his time and fortune to social investments activities in the domain of incorporating ultra-Orthodox Jews in High Tech. As part of it Mr. Levy is active board member of Ravtech and JBH and co-founded Kodcode- and 'Mego' program that deals with training and placement of ultra-Orthodox men in the Israeli high-tech sector. Mr. Shmil Levy holds a degree in Computer Engineering from Ben Gurion University."
  },
  
  {
    name: "Israel Kobler",
    role: "VP R&D",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/b79502e1b_Israel_Kobler_new.png",
    bio: "With 10 years of experience in software product/services development, architecture & management, Israel is a senior manager in the company who oversees and leads all R&D and innovation areas. In addition, he is responsible for overseeing the delivery of services carried out by development teams across the company, recruiting new employees to the development team (programmers, designers, etc.), creating schedules and deadlines, approve budgets regarding development, and in general he responsible for implementing the company's development processes and methodologies."
  },
  
  {
    name: "Chani Smoler",
    role: "CFO",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/fe7a00a60_Chani_Smoler.jpg",
    bio: "Chani is a licensed CPA and holds a BA in Accounting and Information Systems from the Jerusalem College of Technology. Chani is in charge of all Financial aspects of the company and holds a unique role serving as a special advisor to the board of directors. Prior to working at Ravtech, Chani worked for over 5 years as the finance manager at Gvahim, a subsidiary of the Rashi Foundation, and 6 years at Wexler Kodntz'ik Enoch Co. CPA office."
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
            About RavTech
          </h1>
          <p className="text-2xl text-gray-800 leading-relaxed mb-6">
            Where Technology Meets Social Impact
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            RavTech is a leading software development company that combines
            technical excellence with social responsibility. We deliver
            world-class development services while empowering talented
            individuals from the Haredi community to build successful tech
            careers.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Our Story
          </h2>
          <div className="bg-[#0373BA] mb-12 w-24 h-1" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                RavTech was founded with a dual mission: to provide exceptional
                software development services to leading companies worldwide,
                while creating meaningful employment opportunities for talented
                individuals from underrepresented communities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to be a trusted partner for industry leaders
                like NICE, Wix, Check Point, and AMDOCS, while maintaining our
                commitment to social impact. Our teams deliver cutting-edge
                solutions across mobile development, web development, QA
                automation, DevOps, and machine learning.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a social impact business, we are supported by IVN, an impact
                investment organization leading the development of Israel's
                social business ecosystem. This support enables us to continue
                growing our impact while maintaining the highest technical
                standards.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600"
                alt="RavTech Team"
                className="w-full h-full object-cover" />

            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Values
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-16">
            RavTech by the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 bg-white">

                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="text-5xl font-bold text-black mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-700">{stat.label}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Journey
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#CCE7FA] -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) =>
              <div
                key={index}
                className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`
                }>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-black rounded-full -translate-x-1/2 z-10 border-4 border-white" />

                  {/* Content */}
                  <div
                  className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`
                  }>

                    <Card className="border-none shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="text-[#0373BA] mb-2 text-3xl font-bold">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Team
          </h2>
          <div className="bg-[#0373BA] mb-16 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) =>
            <Card
              key={index}
              className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden">

                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#0373BA] mb-4 text-lg font-semibold">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-6">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Target className="text-[#0373BA] mr-4 lucide lucide-target w-16 h-16" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Our Mission
            </h2>
          </div>

          <Card className="border-none shadow-2xl bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
            <CardContent className="p-12">
              <p className="text-2xl text-gray-800 leading-relaxed text-center mb-6">
                To deliver world-class software development services while
                creating meaningful career opportunities for talented individuals
                from the Haredi community.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                We believe that diversity strengthens teams and drives
                innovation. By combining technical excellence with social impact,
                we're building a more inclusive tech industry while helping our
                clients achieve their business goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Our Social Impact
          </h2>
          <div className="bg-[#0373BA] mb-12 mx-auto w-24 h-1" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600"
                alt="Team collaboration"
                className="w-full h-full object-cover" />

            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a social impact business, RavTech is committed to creating
                employment opportunities for talented individuals from the Haredi
                (Ultra-Orthodox) community in Israel. We provide comprehensive
                training, mentorship, and career development programs that enable
                our team members to excel in the tech industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our impact goes beyond employment. We're building a model that
                proves diverse teams can deliver exceptional results. With an
                average employee retention rate of 4.2 years and consistent
                client satisfaction, we're demonstrating that social
                responsibility and business success go hand in hand.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Supported by IVN (Israel Venture Network), an impact investment
                organization, we continue to expand our reach and deepen our
                impact on both the tech industry and Israeli society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Whether you're looking for a development partner or want to join our
            team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Work With Us
              </Button>
            </Link>
            <Link to={createPageUrl("Careers")}>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-black hover:bg-black hover:text-white">

                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
