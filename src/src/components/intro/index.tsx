import React, { useEffect, useState } from "react";
import profileBackgroundImg from "../../../assets/profile/moni-profile2.jpg";
import Nav from "../nav";
import { Link } from "react-router";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const IntroPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation - Now with dynamic background */}
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Nav />
      </div>

      {/* Background with overlay gradient */}
      <div className="absolute inset-0">
        <img
          src={profileBackgroundImg}
          alt="background"
          className="h-full w-full object-cover xl:object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-transparent via-transparent to-gray-900/70" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Content - Added padding-top to account for fixed nav */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto text-center space-y-6 md:space-y-10">
          {/* Small badge - Hidden on very small screens if needed */}
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg animate-fade-in-up">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
            <span className="text-xs md:text-sm font-medium text-white/90">
              Welcome to my portfolio
            </span>
          </div>

          {/* Main heading */}
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

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
            <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-indigo-400" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-400" />
            <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-indigo-400" />
          </div>

          {/* Role */}
          <div className="animate-fade-in-up animation-delay-600">
            <h5 className="text-3xl md:text-4xl lg:text-5xl font-medium bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Data Analyst
            </h5>
            <p className="text-white/60 text-sm md:text-base mt-2 md:mt-3 max-w-xs md:max-w-md mx-auto px-4">
              Turning complex data into actionable insights
            </p>
          </div>

          {/* CTA Buttons - Stack on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-8 animate-fade-in-up animation-delay-800">
            <Link
              to="/my-projects"
              className="group relative px-6 sm:px-8 py-3 md:py-4 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
              <span className="relative flex items-center justify-center gap-2 text-base md:text-lg">
                Explore My Work
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/contact-me"
              className="px-6 sm:px-8 py-3 md:py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 text-base md:text-lg w-full sm:w-auto text-center"
            >
              Get In Touch
            </Link>
          </div>

          {/* Stats section - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 animate-fade-in-up animation-delay-1000">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "4+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator - Hidden on mobile if preferred */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group focus:outline-none max-sm:hidden"
          aria-label="Scroll down"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-white/60 transition-colors">
            <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-white/70 group-hover:text-white/90 transition-colors" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
