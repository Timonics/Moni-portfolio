import React from "react";
import Logo from "../logo";
import { Menu } from "lucide-react";
import { NavLink, useLocation } from "react-router";

const Nav: React.FC = () => {
  const location =useLocation()
  const pathName = location.pathname
  return (
    <div className={`flex items-center justify-between  z-10 w-full ${pathName !== "/" ? "shadow-xl px-4": "pr-4"}`}>
      <div className="p-2">
        <Logo />
      </div>
      <div className="flex items-center gap-4 font-bold right-4 p-2 md:hidden">
        <div className="px-8 text-lg bg-white md:text-xl py-4 shadow-xl shadow-pink-200 rounded-full z-10 backdrop-blur-3xl">
          My Projects
        </div>
        <Menu />
      </div>
      <div className="max-md:hidden flex gap-8 items-center p-2">
        {[
          { name: "Home", link: "/" },
          { name: "About Me", link: "/about" },
          { name: "Tools & Skills", link: "/tools-and-skills" },
          { name: "Contact", link: "/contact-me" },
          { name: "My Projects", link: "/my-projects" },
        ].map((nav, index) => (
          <NavLink
            to={nav.link}
            className={({ isActive }) =>
              `${
                index == 4
                  ? "border-b-4 text-lg px-2 border-indigo-600"
                  : "outfit transition duration-300 ease-in-out hover:scale-125"
              } ${isActive ? "scale-125 font-semibold text-indigo-600" : ""}`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Nav;
