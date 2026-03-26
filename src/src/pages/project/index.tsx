import React, { useEffect, useState } from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { Filter, Sparkles, ChevronDown } from "lucide-react";

// Import your project images
import adidasDashboardImg from "../../../assets/projects/adidas.png";
import supportDashboardImg from "../../../assets/projects/shipm.png";
import hrDashboardImg from "../../../assets/projects/hr.png";
import projectManagementImg from "../../../assets/projects/project-mana.png";
import ProjectCard from "../../components/project-card";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  features: string[];
}

const ProjectsPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState<number>(6);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Adidas Sales Dashboard",
      description:
        "Interactive sales performance dashboard to analyze Adidas product revenue, profit, and sale distribution across regions and product categories. The dashboard provides insight into top performing locations, product line and monthly sales trend for data driven decision making.",
      image: adidasDashboardImg,
      technologies: ["Power BI", "DAX", "Excel"],
      category: "dashboard",
      metrics: [
        { label: "Revenue Analyzed", value: "$500M+" },
        { label: "Products Tracked", value: "50+" },
        { label: "Regions", value: "10+" },
      ],
      features: [
        "Revenue & Profit Analysis",
        "Regional Performance Tracking",
        "Product Category Insights",
        "Monthly Sales Trends",
      ],
    },
    {
      id: 2,
      title: "Shipments Performance Dashboard",
      description:
        "Logistics performance dashboard to track shipment route, revenue categories and delivery status. The analysis highlights on-time deliveries rates, shipment delay and regional performance to optimize operational efficiency.",
      image: supportDashboardImg,
      technologies: ["Power BI", "SQL", "Excel"],
      category: "dashboard",
      metrics: [
        { label: "On-Time Delivery", value: "94%" },
        { label: "Shipments Tracked", value: "10K+" },
        { label: "Regions Covered", value: "8" },
      ],
      features: [
        "Delivery Status Tracking",
        "Route Optimization Insights",
        "Regional Performance Metrics",
        "Delay Analysis",
      ],
    },
    {
      id: 3,
      title: "HR Analytics Dashboard",
      description:
        "Interactive dashboard designed to analyze employee attrition trends and workforce demographics. Highlights key metrics such as total employee, average income, average age, average years, number of attrition and attrition rate. Also highlights reasons for employee resignation and common complaints.",
      image: hrDashboardImg,
      technologies: ["Power BI", "Python", "SQL"],
      category: "dashboard",
      metrics: [
        { label: "Attrition Rate", value: "16%" },
        { label: "Employees Analyzed", value: "1,500+" },
        { label: "Departments", value: "5" },
      ],
      features: [
        "Attrition Trend Analysis",
        "Workforce Demographics",
        "Resignation Reasons",
        "Retention Strategies",
      ],
    },
    {
      id: 4,
      title: "Project Management Dashboard",
      description:
        "Comprehensive overview of project performance and financial outcome. Offers insights into progress, efficiency and overall business impact while helping stakeholders monitor performance across regions and teams—pointing strategic decision making.",
      image: projectManagementImg,
      technologies: ["Power BI", "Excel", "SQL"],
      category: "dashboard",
      metrics: [
        { label: "Projects Tracked", value: "25+" },
        { label: "Completion Rate", value: "92%" },
        { label: "Budget Variance", value: "+8%" },
      ],
      features: [
        "Project Progress Tracking",
        "Financial Performance",
        "Regional Performance",
        "Team Efficiency Metrics",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "dashboard", name: "Dashboards" },
    { id: "analysis", name: "Data Analysis" },
    { id: "visualization", name: "Visualizations" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const loadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 pt-6">
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

      {/* Main Content */}
      <div className="pt-20 lg:pt-24 pb-16 lg:pb-20">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-12 px-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">My Work</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white">
            Project{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              Gallery
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Explore my portfolio of data analytics projects, interactive
            dashboards, and visualizations that drive business insights
          </p>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-4 mb-12 animate-fade-in-up animation-delay-200">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
              <Filter className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/60">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center mt-12 animate-fade-in-up">
              <button
                onClick={loadMore}
                className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-indigo-500 to-purple-500" />
                <span className="relative flex items-center gap-2">
                  Load More Projects
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
