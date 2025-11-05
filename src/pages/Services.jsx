import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Code2,
  Rocket,
  Wrench,
  Users,
  Package,
  TestTube,
  UsersRound,
  User,
  Lightbulb,
  GitBranch,
  TrendingUp,
  ClipboardList,
  ArrowRight,
  Smartphone,
  Globe,
  Cpu,
  Cog,
  Brain,
  Code,
  Server,
  Database,
  Cloud,
  Wifi,
  Activity,
  Radio,
  CloudCog,
  MonitorSmartphone,
  Globe2,
  Gauge,
  Settings,
  Eye,
  Network,
  HardDrive,
  DollarSign,
  Clock,
  Award,
  Target } from
"lucide-react";

export default function ServicesPage() {
  const endToEndSteps = [
  {
    icon: FileText,
    title: "Specs & Design",
    description: "Requirements gathering and system design"
  },
  {
    icon: Code2,
    title: "Development",
    description: "Full-stack development with modern technologies"
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Deployment and production launch"
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Ongoing support and updates"
  }];


  const rdCapabilities = [
  {
    icon: Lightbulb,
    title: "Feature",
    description: "Develop new features for your product"
  },
  {
    icon: Package,
    title: "Product",
    description: "Build complete product solutions"
  },
  {
    icon: TestTube,
    title: "QA Automation",
    description: "Automated testing frameworks"
  },
  {
    icon: UsersRound,
    title: "R&D Team",
    description: "Complete development teams"
  }];


  const staffOptions = [
  {
    icon: User,
    title: "Single Developer",
    description: "Expert developer for specific skill needs"
  },
  {
    icon: Users,
    title: "Whole Team",
    description: "Complete team for comprehensive project needs"
  }];


  const consultingAreas = [
  {
    icon: Lightbulb,
    title: "New Technologies",
    description: "Explore and adopt cutting-edge technologies"
  },
  {
    icon: GitBranch,
    title: "New Methodologies",
    description: "Implement agile and modern development practices"
  },
  {
    icon: TrendingUp,
    title: "Scale Up",
    description: "Grow your development capabilities"
  },
  {
    icon: ClipboardList,
    title: "Requirement Specification",
    description: "Define and document project requirements"
  }];


  const mobilePlatforms = [
  {
    icon: Smartphone,
    title: "Android",
    technologies: [
    "Native Android",
    "Client & Server Architecture",
    "GEO Mapping",
    "Mobility & Tracking",
    "Augmented Reality"]

  },
  {
    icon: Smartphone,
    title: "iOS",
    technologies: [
    "Native iOS",
    "Client & Server Architecture",
    "GEO Mapping",
    "Mobility & Tracking",
    "Augmented Reality"]

  }];


  const webTechnologies = [
  {
    icon: Globe,
    title: "Front End",
    technologies: ["React", "Angular", "Vue", "HTML5", "CSS3"]
  },
  {
    icon: Server,
    title: "Server Side",
    technologies: ["Node.js", "Python", "Java", "Go"]
  },
  {
    icon: Database,
    title: "Database",
    technologies: ["SQL", "MongoDB", "PostgreSQL"]
  },
  {
    icon: Cloud,
    title: "Cloud",
    platforms: ["AWS", "GCP", "Azure"]
  }];


  const iotCapabilities = [
  {
    icon: Wifi,
    title: "Sensor Connectivity",
    description: "Connect and manage IoT sensors"
  },
  {
    icon: Activity,
    title: "Signal Processing",
    description: "Process and analyze sensor signals"
  },
  {
    icon: Cpu,
    title: "Embedded Environment",
    description: "Embedded systems integration"
  },
  {
    icon: CloudCog,
    title: "Cloud Communication",
    description: "Network and cloud connectivity"
  }];


  const qaTestingTypes = [
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Comprehensive mobile app testing"
  },
  {
    icon: Globe2,
    title: "Web",
    description: "Full web application testing"
  },
  {
    icon: Server,
    title: "Client-Server",
    description: "End-to-end architecture testing"
  },
  {
    icon: Gauge,
    title: "Load/Performance",
    description: "Performance and stress testing"
  }];


  const devopsStages = [
  {
    icon: Code,
    title: "Code",
    description: "Version control and collaboration"
  },
  {
    icon: TestTube,
    title: "Test",
    description: "Automated testing pipelines"
  },
  {
    icon: Cog,
    title: "Release",
    description: "Continuous deployment"
  },
  {
    icon: Eye,
    title: "Monitor",
    description: "Performance monitoring and alerts"
  }];


  const mlCapabilities = [
  {
    icon: Network,
    title: "Pattern Recognition",
    description: "Advanced pattern detection algorithms"
  },
  {
    icon: HardDrive,
    title: "Big Data",
    description: "Hadoop and Elasticsearch"
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description: "RNN, CNN, and neural networks"
  },
  {
    icon: GitBranch,
    title: "Data Modeling",
    description: "Data organization and storage"
  }];


  const caseStudies = [
  {
    number: "01",
    company: "AMDOCS",
    title: "The Secret of AMDOCS: How Juniors and a Strong Team Lead Deliver Strong Results and 30% Cost Savings",
    videoUrl: "https://www.youtube.com/embed/9Jw6jOLt_JY",
    keyResults: [
    { icon: DollarSign, text: "30% Cost Savings", color: "text-green-600" },
    { icon: Award, text: "Strong Delivery", color: "text-blue-600" },
    { icon: Users, text: "Junior + Senior Team Model", color: "text-purple-600" }],

    bgColor: "bg-blue-500"
  },
  {
    number: "02",
    company: "CONNACT",
    title: "The Secret of CONNACT: 25% Cost Savings, Fast Recruitment, and 30% More Productivity with Haredi Employees",
    videoUrl: "https://www.youtube.com/embed/4A5tLhZHr6Y",
    keyResults: [
    { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
    { icon: Clock, text: "Fast Recruitment", color: "text-orange-600" },
    { icon: TrendingUp, text: "30% Productivity Increase", color: "text-blue-600" },
    { icon: Users, text: "Haredi Workforce Integration", color: "text-purple-600" }],

    bgColor: "bg-green-500"
  },
  {
    number: "03",
    company: "VENN",
    title: "Venn's Secret to Success: With RavTech We Achieved 25% Cost Savings and 30% More Productivity",
    videoUrl: "https://www.youtube.com/embed/jfbUpJE4AZ8",
    keyResults: [
    { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
    { icon: TrendingUp, text: "30% Productivity Increase", color: "text-blue-600" },
    { icon: Award, text: "Successful Partnership", color: "text-purple-600" }],

    bgColor: "bg-purple-500"
  },
  {
    number: "04",
    company: "NICE",
    title: "The Secret of NICE: 66% Faster Recruitment, 25% Cost Savings, and Employees Who Stay 5 Years",
    videoUrl: "https://www.youtube.com/embed/hGYLaLXPpRA",
    keyResults: [
    { icon: Clock, text: "66% Faster Recruitment", color: "text-orange-600" },
    { icon: DollarSign, text: "25% Cost Savings", color: "text-green-600" },
    { icon: Users, text: "5-Year Employee Retention", color: "text-blue-600" },
    { icon: Target, text: "Long-term Partnership Success", color: "text-purple-600" }],

    bgColor: "bg-red-500"
  }];


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #0373BA 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>
            SERVICES & SOLUTIONS
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            As a service provider, we work to exceed your expectations and deliver exceptional results, operating and delivering exactly as your inside team.
          </p>
        </div>
      </section>

      {/* End-to-End Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            End-to-end Projects
          </h2>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We manage end-to-end projects of all sizes. Working with you on the management and developer levels, we accompany you throughout the whole lifecycle of your project. We share our expertise in creating product roadmaps, implementation, and integration, relying on the Kanban methodology in all project phases.{" "}
            <Link to={createPageUrl("Projects")} className="text-[#0373BA] font-semibold hover:text-black transition-colors">
              Read about the Oriient end-to-end project.
            </Link>
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {endToEndSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 relative">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                        <Icon className="w-10 h-10 text-black" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      {index < endToEndSteps.length - 1 &&
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gray-200 -translate-y-1/2">
                          <ArrowRight className="w-5 h-5 text-gray-400 absolute -top-2 right-0" />
                        </div>
                      }
                    </CardContent>
                  </Card>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* R&D Extension */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            R&D Extension
          </h2>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Our team acts as your in-house team, extending your R&D capabilities whether it is a new product or setting up QA automation. Building the development team and managing it, we deploy our unique RavTech platform that enables you to hit the ground running, significantly shortening development duration and time-to-market.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rdCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Staff Augmentation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Staff Augmentation
          </h2>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Bridging the gap between your evolving IT/development needs and staffing requirements — whether it's for a short-term project or to meet your long-term goals – we provide your IT and development department with expert personnel to support your project and your team.{" "}
            <Link to={createPageUrl("Projects")} className="text-[#0373BA] font-semibold hover:text-black transition-colors">
              Read about the Check Point staff augmentation project.
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {staffOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-8">
                      <Icon className="w-12 h-12 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-4">{option.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Consulting
          </h2>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We empower startups to realize their ideas, mid-sized companies to scale up and instill new methodologies, and established corporations to venture into technologies outside their core business (such as continuous integration, QA automation and mobile development). Our experts assess the resources required, determine the best course of action and help in every step of the way, from specifications to execution to production.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Solutions Divider */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our Technical Solutions
          </h2>
          <p className="text-xl text-gray-800">
            We are solution architects that like to dive into the deep end, whether it is a small web development project or complex cross-platform cloud ideation.
          </p>
        </div>
      </section>

      {/* Mobile Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Smartphone className="text-[#0373BA] mr-4 lucide lucide-smartphone w-12 h-12" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">Mobile Development</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            We build your mobile application using the latest technologies and languages. We enable user collaboration, tracking and routing, server-side simulations, statistical analysis and more. Some of the technologies we use include: native Android, native iOS, client & server architecture, GEO Mapping, Mobility & Tracking, augmented reality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We deploy the Perfecto Mobile testing platform to ensure your app will function smoothly on all Android flavors.{" "}
            <Link to={createPageUrl("Projects")} className="text-[#0373BA] hover:text-black font-semibold transition-colors">
              Read the RavTech mobile project at Oriient.
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {mobilePlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card key={index} className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-[#0373BA]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-6">{platform.title}</h3>
                    <ul className="space-y-3">
                      {platform.technologies.map((tech, idx) =>
                      <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-[#CCE7FA] rounded-full mr-3" />
                          {tech}
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Globe className="w-12 h-12 text-[#0373BA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">Web Development</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Often, we conduct web development as part of a complete solution that includes web, mobile, and cloud components. We specialize in web front end, database, server side and cloud. Some of the technologies we use include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">{tech.title}</h3>
                    <ul className="space-y-2">
                      {(tech.technologies || tech.platforms).map((item, idx) =>
                      <li key={idx} className="text-gray-600 text-sm">• {item}</li>
                      )}
                    </ul>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* IoT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Radio className="w-12 h-12 text-[#0373BA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">IoT</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We use best practices, protocols and standards in developing for IoT solutions. We have conducted projects that include sensor connectivity, signal processing, embedded environment integration, and network and cloud communication. We are experienced in using IoT infrastructure, network, data management and device protocols.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* QA Automation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <TestTube className="w-12 h-12 text-[#0373BA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">QA Automation</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Our comprehensive service includes building an automation lab and a full testing system, running the testing and ensuring product functionality on every device. Our clear aim is to shorten release cycles and improve the final product.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            As a partner of Perfecto Mobile, we provide development and testing system maintenance for mobile, web, client-server, load/performance and more.{" "}
            <Link to={createPageUrl("Projects")} className="text-[#0373BA] hover:text-black font-semibold transition-colors">
              Read the QA automation project at Check Point.
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qaTestingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{type.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* DevOps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Settings className="w-12 h-12 text-[#0373BA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">DevOps</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            As part of full project deployment, we offer complete DevOps solutions such as installation, production upload, continuous integration, activation, resource monitoring and more. The technologies we deploy include Chef and Jenkins, major cloud services such as Azure, AWS and IBM, and Bash and Python scripting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devopsStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{stage.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{stage.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Machine and Deep Learning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Brain className="w-12 h-12 text-[#0373BA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">Machine and Deep Learning</h2>
          </div>
          <div className="bg-[#0373BA] mb-8 w-24 h-1" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Our machine learning projects start with Big Data handling including data organization, storage, and modeling; working with technologies such as Hadoop and Elasticsearch. We then deploy pattern recognition, data mining and knowledge discovery, using various algorithms: from simple linear regression through Naive Bayes, decision trees and random forest, to deep neural networks such as RNN and CNN. We normally conduct implementation using deep learning frameworks such as Keras, TensorFlow, MXNet, Theano, Torch and Caffe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">{capability.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>);

            })}
          </div>
        </div>
      </section>

      {/* Case Studies Divider */}
      <section id="case-studies" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Real Clients, Real Results
          </h2>
          <p className="text-xl text-gray-800">
            Discover how we've helped leading companies achieve significant cost savings, faster recruitment, and increased productivity.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) =>
            <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className={`absolute top-4 left-4 ${caseStudy.bgColor} text-white font-bold text-sm px-4 py-2 rounded-full z-10`}>
                      Case #{caseStudy.number}
                    </div>
                    <div className="aspect-video bg-gray-900">
                      <iframe
                      src={caseStudy.videoUrl}
                      title={caseStudy.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full" />

                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${caseStudy.bgColor} rounded-lg flex items-center justify-center mr-3`}>
                        <span className="text-white font-bold text-xl">{caseStudy.company.charAt(0)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black">{caseStudy.company}</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{caseStudy.title}</p>
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.keyResults.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3">
                              <Icon className={`w-5 h-5 ${result.color}`} />
                              <span className="text-sm font-medium text-gray-800">{result.text}</span>
                            </div>);

                      })}
                      </div>
                    </div>
                    <Button
                    className="w-full bg-black text-white hover:bg-gray-800 group/btn"
                    onClick={() => {
                      window.open(caseStudy.videoUrl.replace("/embed/", "/watch?v="), "_blank");
                    }}>

                      Watch Full Story
                      <svg className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black mb-4">
            Proven Impact Across All Clients
          </h2>
          <div className="w-24 h-1 bg-[#CCE7FA] mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">25-30%</div>
                <p className="text-gray-700">Average Cost Savings</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">66%</div>
                <p className="text-gray-700">Faster Recruitment</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-black mb-2">30%</div>
                <p className="text-gray-700">Productivity Increase</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
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
    </div>);

}