import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import aboutImg from "../../../assets/profile/moni-profile1.jpg";
import Modal from "../../components/modal";
import Footer from "../../components/footer";
import { Award, BarChart3, Database, TrendingUp, Users, Code2 } from "lucide-react";

const AboutPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "Microsoft Excel", icon: BarChart3, color: "from-green-500 to-emerald-600" },
    { name: "Power BI", icon: TrendingUp, color: "from-yellow-500 to-orange-600" },
    { name: "SQL", icon: Database, color: "from-blue-500 to-cyan-600" },
    { name: "Python", icon: Code2, color: "from-indigo-500 to-purple-600" },
  ];

  const achievements = [
    { value: "50+", label: "Projects Completed", icon: Award },
    { value: "95%", label: "Client Satisfaction", icon: Users },
    { value: "30+", label: "Happy Clients", icon: Users },
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
        {/* Hero Section */}
        <div className="flex flex-col items-center lg:flex-row max-w-6xl mx-auto gap-8 lg:gap-16 px-4">
          {/* Image Section with Enhanced Effects */}
          <div className="relative w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            {/* Animated Background Effects */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
            
            {/* Main Image Frame */}
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 via-transparent to-transparent z-10" />
                <img
                  src={aboutImg}
                  alt="Marilyn Oshinowo - Data Analyst"
                  className="object-cover object-center lg:object-[50%_75%] w-full h-[400px] lg:h-[500px] transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 lg:w-1/2 animate-fade-in-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-sm font-medium text-white/90">Get to know me</span>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                About{" "}
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                  Me
                </span>
              </h3>
            </div>
            
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed">
              I am a data analyst who specializes in turning raw data into clear
              and actionable insights. With a strong foundation in data analytics,
              I help businesses make better decisions by finding trends, solving
              problems, and presenting data in a clear, compelling way.
            </p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
                  >
                    <div className={`p-1.5 rounded-lg bg-linear-to-r ${skill.color} bg-opacity-20`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        {/* Achievements Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{achievement.value}</div>
                      <div className="text-sm text-white/60">{achievement.label}</div>
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

        {/* CTA Modal Section */}
        <div className="max-w-5xl mx-auto px-4">
          <Modal
            name="Let's Work Together"
            button1Name="View Projects"
            button1="my-projects"
            button2Name="Contact"
            button2="contact-me"
          />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;