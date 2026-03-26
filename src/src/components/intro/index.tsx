import React, { useEffect, useState, useRef } from "react";
import profileBackgroundImg from "../../../assets/profile/moni-profile2.jpg";
import Nav from "../nav";
import { Link } from "react-router";
import {
  ArrowRight,
  Sparkles,
  ChevronDown,
  User,
  Wrench,
  Mail,
  FolderGit2,
  BarChart3,
  Database,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import Footer from "../footer";

const IntroPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Fix: Properly type the refs with HTMLDivElement (not nullable)
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fix: Accept RefObject<HTMLDivElement> as parameter type
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const sections = [
  //   { name: "About", ref: aboutRef, icon: User },
  //   { name: "Skills", ref: skillsRef, icon: Wrench },
  //   { name: "Projects", ref: projectsRef, icon: FolderGit2 },
  //   { name: "Contact", ref: contactRef, icon: Mail },
  // ];

  const stats = [
    { value: "2+", label: "Years Experience", icon: Award },
    { value: "4+", label: "Projects Completed", icon: FolderGit2 },
    { value: "100%", label: "Client Satisfaction", icon: TrendingUp },
  ];

  const skills = [
    {
      name: "Excel",
      icon: BarChart3,
      level: "Advanced",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Power BI",
      icon: TrendingUp,
      level: "Advanced",
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "SQL",
      icon: Database,
      level: "Advanced",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Python",
      icon: BarChart3,
      level: "Intermediate",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const featuredProjects = [
    {
      title: "Adidas Sales Dashboard",
      description:
        "Interactive sales performance dashboard analyzing revenue, profit, and distribution across regions.",
      tech: ["Power BI", "DAX"],
      link: "/my-projects",
    },
    {
      title: "HR Analytics Dashboard",
      description:
        "Employee attrition analysis with workforce demographics and retention insights.",
      tech: ["Power BI", "Python"],
      link: "/my-projects",
    },
    {
      title: "Support Performance Dashboard",
      description:
        "Logistics performance tracking for delivery optimization and regional analysis.",
      tech: ["Power BI", "SQL"],
      link: "/my-projects",
    },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Nav />
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={profileBackgroundImg}
            alt="background"
            className="h-full w-full object-cover xl:object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-linear-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900/70" />
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Hero Content */}
        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-10">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg animate-fade-in-up">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span className="text-xs md:text-sm font-medium text-white/90">
                Data Analytics Portfolio
              </span>
            </div>

            <div className="space-y-3 md:space-y-4 animate-fade-in-up animation-delay-200">
              <h2 className="text-center leading-tight">
                <span className="text-6xl md:text-7xl lg:text-9xl font-light text-white drop-shadow-2xl block">
                  Hi,
                </span>
                <span className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mt-2 md:mt-4 block">
                  I'm
                </span>
                <div className="relative inline-block mt-1 md:mt-2">
                  <span className="text-4xl md:text-5xl lg:text-7xl font-bold bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    Marilyn Oshinowo
                  </span>
                  <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transform scale-x-0 animate-expand-width" />
                </div>
              </h2>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
              <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-indigo-400" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-400" />
              <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-indigo-400" />
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <h5 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Data Analyst
              </h5>
              <p className="text-white/60 text-sm md:text-base mt-2 md:mt-3 max-w-xs md:max-w-md mx-auto px-4">
                Turning complex data into actionable insights that drive
                business growth
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-8 animate-fade-in-up animation-delay-800">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="group relative px-6 sm:px-8 py-3 md:py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
                <span className="relative flex items-center justify-center gap-2 text-base md:text-lg">
                  View My Work
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-6 sm:px-8 py-3 md:py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 text-base md:text-lg w-full sm:w-auto text-center"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/70 transition-colors"
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div
        ref={aboutRef}
        className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <User className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-white/90">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Get to know{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                me
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <p className="text-white/80 text-lg leading-relaxed">
                I am a data analyst who specializes in turning raw data into
                clear and actionable insights. With a strong foundation in data
                analytics, I help businesses make better decisions by finding
                trends, solving problems, and presenting data in a clear,
                compelling way.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
              >
                Learn more about me
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative animate-fade-in-up animation-delay-400">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur-2xl opacity-50" />
              <img
                src={profileBackgroundImg}
                alt="Marilyn Oshinowo"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px] object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        ref={skillsRef}
        className="relative bg-linear-to-br from-gray-800 via-gray-900 to-gray-800 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Wrench className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">
                My Arsenal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              Tools I{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Wield
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up animation-delay-200">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-linear-to-r ${skill.color} mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-white/60">{skill.level}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in-up animation-delay-400">
            <Link
              to="/tools-and-skills"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
            >
              View all skills
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsRef}
        className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <FolderGit2 className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium text-white/90">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">
              My{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Projects
              </span>
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Explore some of my recent data analytics projects and dashboards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 text-sm group/link"
                >
                  View Project
                  <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in-up">
            <Link
              to="/my-projects"
              className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
              <span className="relative">View All Projects</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        ref={contactRef}
        className="relative bg-linear-to-br from-gray-800 via-gray-900 to-gray-800 py-20 lg:py-32"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-white/90">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Let's{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Connect
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact-me"
                className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
                <span className="relative">Send a Message</span>
              </Link>
              <Link
                to="/my-projects"
                className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={footerRef}
        className="relative bg-purple-900 py-y lg:py-5"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
