import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="group relative flex items-center transition-all duration-300 hover:scale-105"
      aria-label="Go to homepage"
    >
      {/* Main Logo */}
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight">
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            M
          </span>
          <span className="text-white">A</span>
        </h1>
        
        {/* Decorative Dot */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 animate-pulse" />
      </div>

      {/* Full Name on Hover (Optional) */}
      <div className="hidden sm:block overflow-hidden ml-2">
        <span className="block text-sm font-medium text-white/60 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
          Marilyn Oshinowo
        </span>
      </div>

      {/* Hover Effect Line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
    </Link>
  );
};

export default Logo;