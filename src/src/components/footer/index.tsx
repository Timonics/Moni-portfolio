import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full mb-2 px-2">
      <h6
        className={`text-center text-xl bg-black text-indigo-600 p-2`}
      >
        &copy; {new Date().getFullYear()} Marilyn Oshinowo. All rights reserved.
      </h6>
    </div>
  );
};

export default Footer;
