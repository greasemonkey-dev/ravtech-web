
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Globe,
  Cpu,
  TestTube,
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
  Server as ServerIcon,
  Gauge,
  FileCode,
  Settings,
  Eye,
  Network,
  TrendingUp,
  HardDrive,
  GitBranch,
} from "lucide-react";

export default function SolutionsPage() {
  const mobilePlatforms = [
    {
      icon: Smartphone,
      title: "Android",
      technologies: [
        "Native Android",
        "Client & Server Architecture",
        "GEO Mapping",
        "Mobility & Tracking",
        "Augmented Reality",
      ],
    },
    {
      icon: Smartphone,
      title: "iOS",
      technologies: [
        "Native iOS",
        "Client & Server Architecture",
        "GEO Mapping",
        "Mobility & Tracking",
        "Augmented Reality",
      ],
    },
  ];

  const webTechnologies = [
    {
      icon: Globe,
      title: "Front End",
      technologies: ["React", "Angular", "Vue", "HTML5", "CSS3"],
    },
    {
      icon: Server,
      title: "Server Side",
      technologies: ["Node.js", "Python", "Java", "Go"],
    },
    {
      icon: Database,
      title: "Database",
      technologies: ["SQL", "MongoDB", "PostgreSQL"],
    },
    {
      icon: Cloud,
      title: "Cloud",
      platforms: ["AWS", "GCP", "Azure"],
    },
  ];

  const iotCapabilities = [
    {
      icon: Wifi,
      title: "Sensor Connectivity",
      description: "Connect and manage IoT sensors",
    },
    {
      icon: Activity,
      title: "Signal Processing",
      description: "Process and analyze sensor signals",
    },
    {
      icon: Cpu,
      title: "Embedded Environment",
      description: "Embedded systems integration",
    },
    {
      icon: CloudCog,
      title: "Cloud Communication",
      description: "Network and cloud connectivity",
    },
  ];

  const qaTestingTypes = [
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Comprehensive mobile app testing",
    },
    {
      icon: Globe2,
      title: "Web",
      description: "Full web application testing",
    },
    {
      icon: ServerIcon,
      title: "Client-Server",
      description: "End-to-end architecture testing",
    },
    {
      icon: Gauge,
      title: "Load/Performance",
      description: "Performance and stress testing",
    },
  ];

  const devopsStages = [
    {
      icon: Code,
      title: "Code",
      description: "Version control and collaboration",
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Automated testing pipelines",
    },
    {
      icon: Cog,
      title: "Release",
      description: "Continuous deployment",
    },
    {
      icon: Eye,
      title: "Monitor",
      description: "Performance monitoring and alerts",
    },
  ];

  const mlCapabilities = [
    {
      icon: Network,
      title: "Pattern Recognition",
      description: "Advanced pattern detection algorithms",
    },
    {
      icon: HardDrive,
      title: "Big Data",
      description: "Hadoop and Elasticsearch",
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description: "RNN, CNN, and neural networks",
    },
    {
      icon: GitBranch,
      title: "Data Modeling",
      description: "Data organization and storage",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#D2EAFB' }}>
        {/* Decorative geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-15 rotate-45" style={{ background: 'linear-gradient(135deg, #0373BA 0%, transparent 100%)' }} />
        <div className="absolute bottom-20 left-20 w-40 h-40 opacity-10" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', backgroundColor: '#0373BA' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#0373BA' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#0373BA' }}>
            SOLUTIONS
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            We are solution architects that like to dive into the deep end,
            whether it is a small web development project or complex
            cross-platform cloud ideation.
          </p>
        </div>
      </section>

      {/* Mobile Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Smartphone className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Mobile Development
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            We build your mobile application using the latest technologies and
            languages. We enable user collaboration, tracking and routing,
            server-side simulations, statistical analysis and more. Some of the
            technologies we use include: native Android, native iOS, client &
            server architecture, GEO Mapping, Mobility & Tracking, augmented
            reality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We deploy the Perfecto Mobile testing platform to ensure your app
            will function smoothly on all Android flavors.{" "}
            <Link
              to={createPageUrl("Projects")}
              className="text-[#CCE7FA] hover:text-black font-semibold transition-colors"
            >
              Read the RavTech mobile project at Oriient.
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {mobilePlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-6">
                      {platform.title}
                    </h3>
                    <ul className="space-y-3">
                      {platform.technologies.map((tech, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-[#CCE7FA] rounded-full mr-3" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Globe className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Web Development
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Often, we conduct web development as part of a complete solution that
            includes web, mobile, and cloud components. We specialize in web
            front end, database, server side and cloud. Some of the technologies
            we use include:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webTechnologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white"
                >
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-4">
                      {tech.title}
                    </h3>
                    <ul className="space-y-2">
                      {(tech.technologies || tech.platforms).map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* IoT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Radio className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">IoT</h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            We use best practices, protocols and standards in developing for IoT
            solutions. We have conducted projects that include sensor
            connectivity, signal processing, embedded environment integration, and
            network and cloud communication. We are experienced in using IoT
            infrastructure, network, data management and device protocols.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* QA Automation */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <TestTube className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              QA Automation
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
            Our comprehensive service includes building an automation lab and a
            full testing system, running the testing and ensuring product
            functionality on every device. Our clear aim is to shorten release
            cycles and improve the final product.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            As a partner of Perfecto Mobile, we provide development and testing
            system maintenance for mobile, web, client-server, load/performance
            and more.{" "}
            <Link
              to={createPageUrl("Projects")}
              className="text-[#CCE7FA] hover:text-black font-semibold transition-colors"
            >
              Read the QA automation project at Check Point.
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qaTestingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* DevOps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Settings className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              DevOps
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            As part of full project deployment, we offer complete DevOps solutions
            such as installation, production upload, continuous integration,
            activation, resource monitoring and more. The technologies we deploy
            include Chef and Jenkins, major cloud services such as Azure, AWS and
            IBM, and Bash and Python scripting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devopsStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-[#CCE7FA] shadow-md hover:shadow-xl transition-all duration-300 group bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gray-100 group-hover:bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Machine and Deep Learning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Brain className="w-12 h-12 text-[#CCE7FA] mr-4" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black">
              Machine and Deep Learning
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#CCE7FA] mb-8" />

          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl">
            Our machine learning projects start with Big Data handling including
            data organization, storage, and modeling; working with technologies
            such as Hadoop and Elasticsearch. We then deploy pattern recognition,
            data mining and knowledge discovery, using various algorithms: from
            simple linear regression through Naive Bayes, decision trees and
            random forest, to deep neural networks such as RNN and CNN. We
            normally conduct implementation using deep learning frameworks such as
            Keras, TensorFlow, MXNet, Theano, Torch and Caffe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-[#CCE7FA] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#CCE7FA] to-[#E5F4FF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Let's Build Your Solution Together
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contact us to discuss your project requirements and technical needs
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
