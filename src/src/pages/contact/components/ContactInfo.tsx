import { Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "ayobamimarilyn@gmail.com",
      link: "mailto:ayobamimarilyn@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 708 696 1293",
      link: "tel:+2347086961293",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Information Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/50">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Contact Information
          </h2>
          <p className="text-white/50">
            Here are the different ways you can reach me
          </p>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="flex items-start gap-4 group">
                <div className={`p-3 rounded-xl bg-linear-to-r ${method.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white mb-2">{method.title}</p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="inline-block px-4 py-2 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="inline-block px-4 py-2 bg-white/10 rounded-lg text-white/80">
                      {method.value}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Social Media Card */}
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-indigo-500/50">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Connect With Me
          </h2>
          <p className="text-white/50">
            Follow me on social media and professional networks
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/marilyn-oshinowo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-blue-500 to-cyan-500" />
            <span className="relative flex items-center gap-2">
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </span>
          </a>
          
          {/* Add more social links as needed */}
          {/* 
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-linear-to-r from-gray-700 to-gray-900" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-gray-600 to-gray-800" />
            <span className="relative flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </span>
          </a>
          */}
        </div>
      </div>

      {/* Quick Response Card */}
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Quick Response</h3>
          </div>
          
          <p className="text-white/70 leading-relaxed mb-4">
            I typically respond to messages within 24 hours. For urgent matters, 
            feel free to reach out via phone or connect with me on LinkedIn.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <span>Looking forward to connecting with you!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;