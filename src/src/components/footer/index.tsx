import React from "react";
import { Heart, Mail, Linkedin, Github, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-16 lg:mt-24">
      {/* Gradient Divider */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:ayobamimarilyn@gmail.com"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/marilyn-oshinowo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/40 text-sm flex items-center justify-center gap-1 flex-wrap">
              &copy; {currentYear} Marilyn Oshinowo.
              <span className="hidden sm:inline mx-1">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-400 animate-pulse" /> for data-driven insights
              </span>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            <span className="text-sm">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;