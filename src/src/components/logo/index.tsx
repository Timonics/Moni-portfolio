import React from "react";
import { Link } from "react-router";

const Logo: React.FC = () => {
  return (
    <Link
      to={"/"}
      className="font-black flex items-center w-19 shadow-2x shadow-black/50 px-2 text-indigo-400 text-6xl"
    >
      <h1 className="-tracking-[17.5px]">MA</h1>
    </Link>
  );
};

export default Logo;
