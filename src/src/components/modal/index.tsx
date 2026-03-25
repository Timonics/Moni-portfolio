import React from "react";
import { Link } from "react-router";
import { ArrowRight, Mail } from "lucide-react";

interface ModalProps {
  name: string;
  button1Name: string;
  button1: string;
  button2Name: string;
  button2: string;
}

const Modal: React.FC<ModalProps> = ({
  name,
  button1Name,
  button1,
  button2Name,
  button2,
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 p-8 md:p-12 text-center">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {name}
        </h3>
        <p className="text-white/60 mb-8 max-w-md mx-auto">
          Let's transform your data into actionable insights and drive business
          growth together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={`/${button1}`}
            className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
            <span className="relative flex items-center gap-2">
              {button1Name}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to={`/${button2}`}
            className="px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            {button2Name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
