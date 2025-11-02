import React from "react";
import { useLocation, Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";

export default function TeamMemberDetailPage() {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const memberId = urlParams.get("id");

  const teamMembers = {
    "benny-levin": {
      name: "Benny Levin",
      role: "Active Chairman",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/e117972f4_BennyLevin.jpg",
      bio: "Benny Levin co-founded NICE Systems, where he served as President, Director, Chairman and CEO. Benny also served as Chairman of the Board of dbMotion. Since retiring from most of his business activities, Benny dedicates himself to a wide array of social and philanthropic activities. He serves as Vice Chairman of IVN, and as Active Chairman of Ben Yakir and Kedma youth villages. Benny served in the IDF Intelligence Corps, retiring with the rank of Lieutenant Colonel. He has a bachelor's and master's degrees in Electrical Engineering from the Technion.",
      achievements: [
        "Co-founder of NICE Systems",
        "Former President, Director, Chairman and CEO of NICE",
        "Chairman of the Board of dbMotion",
        "Vice Chairman of IVN",
        "Active Chairman of Ben Yakir and Kedma youth villages"
      ],
      education: [
        "Master's degree in Electrical Engineering - Technion",
        "Bachelor's degree in Electrical Engineering - Technion"
      ],
      military: "IDF Intelligence Corps - Lieutenant Colonel"
    },
    "shmil-levy": {
      name: "Shmil Levy",
      role: "Board Member",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/e5dca31e4_Sequoia-Shmil_Levy-1-300x300.jpg",
      bio: "Co-Founder, and Managing Partner of Sequoia Capital Israel venture capital fund 2001-today. Before his role at Sequoia Capital, Shmil held various important positions as a high-tech entrepreneur, including VP R&D of Lannet from 1992-1996 and CEO of Lannet from 1996-1998 and serving as President of division of Lucent Worldwide for Communications Systems from 1998-2000. Beyond his business activities, since 2018, Mr. Levy has been donating his time and fortune to social investments activities in the domain of incorporating ultra-Orthodox Jews in High Tech. As part of it Mr. Levy is active board member of Ravtech and JBH and co-founded Kodcode- and 'Mego' program that deals with training and placement of ultra-Orthodox men in the Israeli high-tech sector. Mr. Shmil Levy holds a degree in Computer Engineering from Ben Gurion University.",
      achievements: [
        "Co-Founder & Managing Partner of Sequoia Capital Israel (2001-present)",
        "VP R&D of Lannet (1992-1996)",
        "CEO of Lannet (1996-1998)",
        "President of Lucent Worldwide Communications Systems Division (1998-2000)",
        "Co-founded Kodcode and Mego programs"
      ],
      education: [
        "Degree in Computer Engineering - Ben Gurion University"
      ],
      focus: "Social investments in incorporating ultra-Orthodox Jews in High Tech"
    },
    "idan-nimni": {
      name: "Idan Nimni",
      role: "CEO",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/141f00e37_Idan_Nimni.jpg",
      bio: "With over 20 years of experience in Cybersecurity, Idan has taken various leading positions in both Professional Services and Product Management in deep technology companies. Idan is a dynamic leader with a proven track record of team building, business execution and innovation. Holds a B.Sc in Management Engineering, and MBA from Tel Aviv University.",
      achievements: [
        "20+ years in Cybersecurity",
        "Leading positions in Professional Services",
        "Leading positions in Product Management",
        "Proven track record in team building and innovation"
      ],
      education: [
        "MBA - Tel Aviv University",
        "B.Sc in Management Engineering"
      ],
      expertise: "Cybersecurity, Team Building, Business Execution"
    },
    "michael-shurman": {
      name: "Michael Shurman",
      role: "CTO",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/87a29782d_Michael_Shurman.png",
      bio: "For the last 25 years Michael has served as an executive in Hi-Tech companies. Before joining Ravtech, Michael was a CTO in Israeli R&D center of Huawei Technologies, Michael was a Founder, CTO & Executive VP of R&D & VP of Product management of Allot Communications Ltd. (Nasdaq: ALLT). Michael holds B.Sc. Computer Science & Statistics, Hebrew University, Jerusalem and MA in Philosophy from Tel Aviv University.",
      achievements: [
        "25+ years as Hi-Tech executive",
        "CTO at Huawei Technologies Israeli R&D center",
        "Founder, CTO & Executive VP of R&D at Allot Communications (NASDAQ: ALLT)",
        "VP of Product Management at Allot Communications"
      ],
      education: [
        "MA in Philosophy - Tel Aviv University",
        "B.Sc. Computer Science & Statistics - Hebrew University, Jerusalem"
      ],
      expertise: "Technology Leadership, R&D Management, Product Strategy"
    },
    "israel-kobler": {
      name: "Israel Kobler",
      role: "VP R&D",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/18b1b3a4b_Israel_Kobler.png",
      bio: "With 10 years of experience in software product/services development, architecture & management, Israel is a senior manager in the company who oversees and leads all R&D and innovation areas. In addition, he is responsible for overseeing the delivery of services carried out by development teams across the company, recruiting new employees to the development team (programmers, designers, etc.), creating schedules and deadlines, approve budgets regarding development, and in general he responsible for implementing the company's development processes and methodologies.",
      achievements: [
        "10+ years in software development & architecture",
        "Oversees all R&D and innovation areas",
        "Manages development teams company-wide",
        "Leads recruitment and talent development",
        "Implements development processes and methodologies"
      ],
      expertise: "Software Architecture, R&D Management, Team Leadership, Process Implementation"
    },
    "yariv-levanon": {
      name: "Yariv Levanon",
      role: "VP Sales & Business Development",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/5e3a5e902_Yariv-Levanon-LinkedIn-Pic-300x300.jpg",
      bio: "With over 20 years of International Hi-Tech experience in Telecommunications, Consulting, Security & Finance Yariv successfully Led Global Business Ventures ($$m) Established Key Strategic Joint Partnerships as well as Founded Business Centers for Excellence & Digital Innovation. Yariv holds an M.B.A. from The University of Manchester in the field of Business Management & Marketing.",
      achievements: [
        "20+ years International Hi-Tech experience",
        "Led Global Business Ventures worth millions",
        "Established Key Strategic Partnerships",
        "Founded Business Centers for Excellence",
        "Founded Digital Innovation centers"
      ],
      education: [
        "M.B.A. in Business Management & Marketing - University of Manchester"
      ],
      expertise: "Business Development, Strategic Partnerships, Telecommunications, Security, Finance"
    },
    "chani-smoler": {
      name: "Chani Smoler",
      role: "CFO",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69033bb7c3427caaeea09a3b/7011c474d_chani_smoler.jpg",
      bio: "Chani is a licensed CPA and holds a BA in Accounting and Information Systems from the Jerusalem College of Technology. Chani is in charge of all Financial aspects of the company and holds a unique role serving as a special advisor to the board of directors. Prior to working at Ravtech, Chani worked for over 5 years as the finance manager at Gvahim, a subsidiary of the Rashi Foundation, and 6 years at Wexler Kodntz'ik Enoch Co. CPA office.",
      achievements: [
        "Licensed CPA",
        "Special advisor to board of directors",
        "Finance Manager at Gvahim (5+ years)",
        "6 years at Wexler Kodntz'ik Enoch Co. CPA office"
      ],
      education: [
        "BA in Accounting and Information Systems - Jerusalem College of Technology"
      ],
      expertise: "Financial Management, Strategic Advisory, CPA, Board Advisory"
    }
  };

  const member = teamMembers[memberId];

  if (!member) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Member Not Found</h1>
          <Link to={createPageUrl("About")}>
            <Button className="bg-black text-white hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("About")}>
            <Button variant="ghost" className="mb-8 hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#CCE7FA] rounded-full blur-3xl opacity-40 -z-10" />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-black mb-3">
                  {member.name}
                </h1>
                <p className="text-2xl text-[#CCE7FA] font-semibold">
                  {member.role}
                </p>
              </div>

              <div className="h-1 w-24 bg-[#CCE7FA]" />

              <p className="text-lg text-gray-700 leading-relaxed">
                {member.bio}
              </p>

              <div className="flex gap-4 pt-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 hover:border-black">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements */}
            {member.achievements && (
              <Card className="border-none shadow-xl bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black mb-6">
                    Key Achievements
                  </h2>
                  <ul className="space-y-4">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-[#CCE7FA] rounded-full mt-2 mr-4 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Education & Expertise */}
            <div className="space-y-8">
              {member.education && (
                <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-black mb-6">
                      Education
                    </h2>
                    <ul className="space-y-4">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#CCE7FA] rounded-full mt-2 mr-4 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {member.expertise && (
                <Card className="border-none shadow-xl bg-gradient-to-br from-cyan-50 to-white">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-black mb-4">
                      Expertise
                    </h2>
                    <p className="text-gray-700 text-lg">{member.expertise}</p>
                  </CardContent>
                </Card>
              )}

              {member.military && (
                <Card className="border-none shadow-xl bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-black mb-4">
                      Military Service
                    </h2>
                    <p className="text-gray-700 text-lg">{member.military}</p>
                  </CardContent>
                </Card>
              )}

              {member.focus && (
                <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-black mb-4">
                      Current Focus
                    </h2>
                    <p className="text-gray-700 text-lg">{member.focus}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Join our team or partner with us on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Careers")}>
              <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg">
                View Careers
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-2 border-black hover:bg-black hover:text-white text-lg px-8 py-6 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}