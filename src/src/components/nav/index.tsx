import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Logo from "../logo";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";

const Nav: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileNavIsOpen(false);
  }, [pathName]);

  useEffect(() => {
    if (mobileNavIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavIsOpen]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Tools & Skills", link: "/tools-and-skills" },
    { name: "Contact", link: "/contact-me" },
    { name: "My Projects", link: "/my-projects" },
  ];

  const MobileMenu = () => {
    if (!mobileNavIsOpen) return null;
    
    return ReactDOM.createPortal(
      <div 
        className="fixed inset-0"
        style={{ 
          zIndex: 9999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setMobileNavIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl transition-transform duration-300 ease-out ${
            mobileNavIsOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Logo />
            <button
              onClick={() => setMobileNavIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="flex flex-col p-6 gap-3 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
            {navLinks.map((nav) => (
              <NavLink
                key={nav.link}
                to={nav.link}
                onClick={() => setMobileNavIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl transition-all duration-300 text-lg font-medium ${
                    isActive
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
            <p className="text-white/40 text-sm text-center">
              Let's connect and create something amazing
            </p>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          pathName !== "/" && isScrolled
            ? "bg-black backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between w-full px-4 py-2">
          <div className="p-1 md:p-2">
            <Logo />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Link
              to={"/my-projects"}
              className="px-4 py-2 text-sm bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Projects
            </Link>
            <button
              onClick={() => setMobileNavIsOpen(true)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navLinks.map((nav, _) => (
              <NavLink
                key={nav.link}
                to={nav.link}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-white/90 hover:text-white transition-all duration-300 font-medium ${
                    isActive ? "text-white font-semibold" : ""
                  } ${
                    nav.name === "My Projects"
                      ? "bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-full hover:scale-105 shadow-md"
                      : "hover:scale-110"
                  }`
                }
              >
                {nav.name}
                {nav.name !== "My Projects" && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <MobileMenu />
    </>
  );
};

export default Nav;