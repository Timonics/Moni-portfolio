import React, { useState } from "react";
import { ExternalLink, BarChart3, TrendingUp, Users, Clock, ChevronRight } from "lucide-react";
import type { Project } from "../../pages/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getMetricIcon = (label: string) => {
    if (label.includes("Revenue") || label.includes("Sales")) return TrendingUp;
    if (label.includes("Attrition") || label.includes("Employee")) return Users;
    if (label.includes("Delivery") || label.includes("On-Time")) return Clock;
    return BarChart3;
  };

  return (
    <div 
      className="group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-indigo-500/50 hover:transform hover:scale-[1.02]">
        {/* Image Section */}
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Overlay Actions */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <ExternalLink className="w-4 h-4 text-white" />
              </button>
              {/* <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                <Github className="w-4 h-4 text-white" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-white/70 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Metrics Section */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 pt-2">
              {project.metrics.map((metric, idx) => {
                const Icon = getMetricIcon(metric.label);
                return (
                  <div key={idx} className="text-center p-2 rounded-lg bg-white/5 border border-white/10">
                    <Icon className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-white">{metric.value}</div>
                    <div className="text-xs text-white/50">{metric.label}</div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Features List */}
          <div className="pt-2">
            <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1 text-xs text-white/60">
                  <ChevronRight className="w-3 h-3 text-indigo-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Border on Hover */}
        <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
          isHovered ? "border-indigo-500/50" : ""
        }`} />
      </div>
    </div>
  );
};

export default ProjectCard;