import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import { PiMicrosoftExcelLogoDuotone, PiPowerBold } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import Footer from "../../components/footer";
import { CheckCircle2, Code2 } from "lucide-react";

const ToolsPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toolsArr = [
    {
      icon: PiMicrosoftExcelLogoDuotone,
      name: "Microsoft Excel",
      description: "Advanced formulas, PivotTables, and data modeling",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: GrMysql,
      name: "MySQL",
      description: "Complex queries, optimization, and database design",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: PiPowerBold,
      name: "Power BI",
      description: "Interactive dashboards and DAX calculations",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: FaPython,
      name: "Python",
      description: "Data analysis, automation, and machine learning",
      color: "from-indigo-500 to-purple-600"
    },
  ];

  const skillsList = [
    "Advanced SQL & Query Optimization",
    "Predictive Modeling & Statistical Analysis",
    "Data Pipeline Development (ETL/ELT)",
    "Business Intelligence Strategy",
    "Cloud Data Tools",
    "Data Visualization & Storytelling",
    "A/B Testing & Experimentation",
    "Dashboard Development & KPI Tracking"
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pt-6">
      {/* Navigation */}
      <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <Nav />
      </div>

      {/* Main Content */}
      <div className="pt-20 lg:pt-24 space-y-16 lg:space-y-24">
        {/* Tools Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6 mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-sm font-medium text-white/90">MY TOOLS</span>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
              Tools I{" "}
              <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Wield
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-200">
            {toolsArr.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative text-center space-y-3">
                    <div className={`inline-flex p-3 rounded-xl bg-linear-to-r ${tool.color}`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{tool.name}</h4>
                      <p className="text-xs text-white/60 mt-1">{tool.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        {/* Technical Skills Section */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-6 mb-12 animate-fade-in-up animation-delay-400">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white/90">TECHNICAL SKILLS</span>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
              My{" "}
              <span className="bg-linear-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent font-bold">
                Expertise
              </span>
            </h3>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 animate-fade-in-up animation-delay-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillsList.map((skill, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ToolsPage;