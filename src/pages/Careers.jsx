
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  TrendingUp,
  Users,
  Briefcase,
  Mail,
  MapPin,
  Clock,
  Code,
  Target } from
"lucide-react";

export default function CareersPage() {
  const benefits = [
  {
    icon: Heart,
    title: "Make a Difference",
    description:
    "Be part of a social impact business that bridges talented individuals with the tech industry"
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
    "Work with cutting-edge technologies and diverse projects across multiple industries"
  },
  {
    icon: Users,
    title: "Great Team Environment",
    description:
    "Join a supportive team that values professionalism, collaboration, and mutual respect"
  },
  {
    icon: Briefcase,
    title: "Career Advancement",
    description:
    "Clear paths for professional development and leadership opportunities"
  }];


  const jobOpenings = [
  {
    id: "senior-team-lead",
    title: "Senior Team Lead – Software Development",
    location: "Bnei Brak / Jerusalem",
    type: "Full-time",
    department: "Engineering",
    overview:
    "Join our dynamic and innovative team, where we are committed to delivering cutting-edge SaaS solutions. We are looking for a highly experienced Senior Team Lead with a strong background in leadership, software development, and team management.",
    about:
    "As a Senior Team Lead, you will be responsible for overseeing the development and delivery of complex web systems. You will lead, mentor, and scale a team of 15+ engineers, drive technical excellence, and collaborate with product and business stakeholders to align technology with company objectives.",
    responsibilities: [
    "Leading and managing a team of 15+ developers, fostering a culture of innovation, collaboration, and accountability",
    "Owning the full development cycle of projects, ensuring timely and high-quality delivery",
    "Mentoring and coaching engineers, helping them grow and excel in their roles",
    "Working closely with product owners and stakeholders to define project goals, scope, and delivery timelines",
    "Driving technical excellence, contributing to development using Angular/React, Node.js/Go/Java, and more",
    "Optimizing and automating CI/CD pipelines to streamline development, testing, and deployment processes",
    "Designing scalable architectures on GCP or AWS and ensuring system reliability",
    "Identifying risks and proactively implementing mitigation strategies to keep projects on track",
    "Managing Agile workflows using Jira, ensuring efficiency and clarity in project execution"],

    requirements: [
    "6+ years of experience in leading software development teams in fast-paced environments",
    "Strong managerial and leadership skills—proven ability to mentor, inspire, and build high-performing teams",
    "Hands-on expertise in Angular/React, Node.js, Go, Java, SQL, PHP, Linux, and Cloud technologies",
    "Deep understanding of CI/CD best practices and tools (Jenkins, GitHub, GitLab CI/CD, etc.)",
    "Experience working with GCP or AWS or Azure cloud-native services",
    "Solid knowledge of SQL/NoSQL or similar relational databases",
    "Familiarity with message queues (e.g. RabbitMQ, Kafka) for distributed systems",
    "Excellent communication skills, with the ability to engage both technical and non-technical stakeholders",
    "Experience in Agile/Scrum environments and project management tools like Jira"],

    bonus: [
    "Formal leadership training or certifications (PMP, Scrum Master, etc.)",
    "Experience in developing and launching SaaS solutions",
    "Knowledge of Docker, Kubernetes, and container orchestration"],

    applyUrl: "https://app.civi.co.il/promo/id=714897&src=11365"
  },
  {
    id: "senior-developer",
    title: "Senior Developer",
    location: "Bnei Brak / Jerusalem",
    type: "Full-time",
    department: "Engineering",
    overview:
    "We are looking for professional Senior developers to join us! An opportunity to take part in a company with the meaningful mission of advancing junior developers from the Haredi world, join a team of developers, work with new technologies and advanced development, and take the team one step forward professionally.",
    requirements: [
    "Over 5 years of development experience",
    "At least 3 years of Front-end development experience with React/Angular",
    "At least 3 years of Backend development experience with Node.js/Go/Python",
    "Experience working in Cloud environment with GCP/AWS",
    "Experience in Linux environment and with SQL databases",
    "Experience working with advanced technologies"],

    applyEmail: "ravtech+j1001+s11365@app.civi.co.il"
  },
  {
    id: "frontend-architect",
    title: "Frontend Architect",
    location: "Bnei Brak / Jerusalem",
    type: "Full-time",
    department: "Engineering",
    overview:
    "RavTech is seeking a talented and experienced Frontend Architect to join our dynamic team. As a leading software development company specializing in complex web and mobile B2B solutions, we pride ourselves on delivering top-notch services to our clients.",
    responsibilities: [
    "Design and implement scalable, robust, and user-friendly frontend architectures for web and mobile applications",
    "Evaluate and select appropriate frontend technologies and frameworks to meet project requirements and enhance development efficiency",
    "Work closely with cross-functional teams, including backend developers, UI/UX designers, and product managers, to ensure seamless integration and alignment with project goals",
    "Establish and enforce coding standards, best practices, and performance optimization techniques to maintain high-quality codebases",
    "Provide guidance and mentorship to frontend developers, fostering a culture of continuous learning and improvement"],

    requirements: [
    "Proven experience as a Frontend Architect or in a similar senior frontend development role",
    "In-depth knowledge of modern frontend technologies and frameworks (e.g., React, Angular, Vue.js), HTML5, CSS3, JavaScript, and TypeScript",
    "Strong understanding of web performance optimization techniques and tools",
    "Excellent problem-solving skills and the ability to think strategically about technology and business needs",
    "Strong communication and interpersonal skills, with the ability to articulate complex technical concepts to non-technical stakeholders"],

    applyUrl: "https://app.civi.co.il/promo/id=626717&src=11365"
  },
  {
    id: "fullstack-team-lead",
    title: "Full Stack Team Lead – Jerusalem Office",
    location: "Jerusalem",
    type: "Full-time",
    department: "Engineering",
    overview:
    "We're looking for a Full Stack Team Lead to join our Jerusalem office and guide a talented team of developers from the Orthodox (Haredi) community—individuals who are at the exciting early stages of their tech careers. This is a unique role combining hands-on development (50%) with technical leadership and mentoring.",
    responsibilities: [
    "Lead and mentor a team of junior developers throughout the full development lifecycle",
    "Drive project planning, code reviews, and architectural decisions",
    "Collaborate with stakeholders to ensure smooth and successful sprint execution",
    "Play a key role in the professional and personal growth of your team"],

    requirements: [
    "Proven experience in Angular and backend development",
    "3+ years of experience managing a development team of 6 or more",
    "3+ years of experience in web development",
    "Hands-on Scrum Master experience and a track record of leading sprints",
    "Familiarity with development processes and system architecture – a big plus",
    "Knowledge of PHP – nice to have"],

    applyEmail: "ravtech+j1002+s11365@app.civi.co.il"
  },
  {
    id: "senior-fullstack-team-lead",
    title: "Senior Full Stack Team Lead",
    location: "Bnei Brak / Jerusalem",
    type: "Full-time",
    department: "Engineering",
    overview:
    "RavTech is recruiting Full Stack Team Lead superstars to build development teams! An opportunity to build a team from scratch of 4-5 junior developers from the Haredi world and take them one step forward professionally. The work includes using advanced technologies and significant development processes.",
    requirements: [
    "10 years of development experience",
    "3 years as Team Lead or Tech Lead",
    "Experience in architecture, Code Review, and design",
    "Experience in Front-end development with React/Angular",
    "Experience in Backend development with Node.js/Go/Python",
    "Experience working in Cloud environment with GCP/AWS",
    "Experience in Linux environment and with SQL databases",
    "Experience in CI/CD processes"],

    applyEmail: "ravtech+j1002+s11365@app.civi.co.il"
  },
  {
    id: "junior-devops",
    title: "Junior DevOps",
    location: "Bnei Brak",
    type: "Full-time",
    department: "DevOps",
    overview:
    "We are looking for a Junior DevOps for a leading global company in cloud and data analysis solutions - work at RavTech offices and two days at the company's offices in Ra'anana. Work with advanced technologies such as AWS, Jenkins, Python, with emphasis on working in cloud environments and automation solutions.",
    requirements: [
    "Knowledge and understanding in Cloud environments - required",
    "Familiarity with Jenkins - required",
    "Coding abilities - required",
    "Work with IaC tools (such as CloudFormation/CDK) - required",
    "Familiarity with CI/CD processes - advantage",
    "Knowledge of monitoring tools such as Grafana/Prometheus - advantage",
    "Understanding of working with Docker/Kubernetes - advantage"],

    applyEmail: "ravtech+j1000+s11365@app.civi.co.il"
  }];


  const scrollToContact = () => {
    const footer = document.querySelector("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        {/* Decorative circles */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>CAREERS

          </h1>
          <p className="text-2xl text-gray-800 leading-relaxed mb-6">We’re committed to supporting every team member as a person and a professional, creating an environment where excellence and purpose meet.



          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Open Positions
          </h2>
          <div className="w-24 h-1 bg-[#0373BA] mb-12" />

          <Accordion type="single" collapsible className="space-y-4">
            {jobOpenings.map((job, index) =>
            <AccordionItem
              key={job.id}
              value={job.id}
              className="border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">

                <AccordionTrigger className="px-6 py-6 hover:no-underline">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left pr-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                        variant="secondary"
                        className="bg-[#CCE7FA] text-black">

                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="w-3 h-3 mr-1" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline">
                          <Code className="w-3 h-3 mr-1" />
                          {job.department}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6 pt-4">
                    {/* Overview */}
                    {job.overview &&
                  <div>
                        <h4 className="text-lg font-semibold text-black mb-3">
                          About The Role
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {job.overview}
                        </p>
                      </div>
                  }

                    {/* About */}
                    {job.about &&
                  <div>
                        <p className="text-gray-700 leading-relaxed">
                          {job.about}
                        </p>
                      </div>
                  }

                    {/* Responsibilities */}
                    {job.responsibilities &&
                  <div>
                        <h4 className="text-lg font-semibold text-black mb-3">
                          What You'll Be Doing
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, idx) =>
                      <li
                        key={idx}
                        className="flex items-start text-gray-700">

                              <Target className="w-4 h-4 text-[#CCE7FA] mr-3 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                      )}
                        </ul>
                      </div>
                  }

                    {/* Requirements */}
                    {job.requirements &&
                  <div>
                        <h4 className="text-lg font-semibold text-black mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) =>
                      <li
                        key={idx}
                        className="flex items-start text-gray-700">

                              <div className="w-2 h-2 bg-[#CCE7FA] rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                      )}
                        </ul>
                      </div>
                  }

                    {/* Bonus Points */}
                    {job.bonus &&
                  <div>
                        <h4 className="text-lg font-semibold text-black mb-3">
                          Bonus Points
                        </h4>
                        <ul className="space-y-2">
                          {job.bonus.map((item, idx) =>
                      <li
                        key={idx}
                        className="flex items-start text-gray-700">

                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                      )}
                        </ul>
                      </div>
                  }

                    {/* Apply Button */}
                    <div className="pt-4">
                      {job.applyUrl ?
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer">

                          <Button className="w-full md:w-auto bg-black text-white hover:bg-gray-800">
                            Apply for this Position
                          </Button>
                        </a> :

                    <a href={`mailto:${job.applyEmail}`}>
                          <Button className="w-full md:w-auto bg-black text-white hover:bg-gray-800">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Your CV
                          </Button>
                        </a>
                    }
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      {/* Why Work at RavTech */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Why Join RavTech?
          </h2>
          <div className="w-24 h-1 bg-[#0373BA] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">We’re Always Looking for Great People - Tell Us About You

          </h2>
          <p className="text-xl text-gray-800 mb-8">
            We're always looking for talented individuals. Send us your CV and
            let's talk about opportunities.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">

            <Mail className="w-5 h-5 mr-2" />
            Send Your CV
          </Button>
        </div>
      </section>
    </div>);

}