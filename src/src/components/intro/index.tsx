import React from "react";
import profileBackgroundImg from "../../../assets/profile/moni-profile2.jpg";
import Nav from "../nav";

const IntroPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 w-full z-10">
        <Nav />
      </div>
      <img
        src={profileBackgroundImg}
        alt="background image"
        className="absolute h-screen w-full object-cover opacity-40 xl:object-[50%_30%]"
      />
      <div className="max-w-7xl mx-auto z-10 p-4 flex flex-col items-center justify-center gap-4">
        <h2 className="text-center leading-10 md:leading-15">
          <span className="text-5xl md:text-7xl lg:text-8xl font-thin">
            Hi,
          </span>{" "}
          I'm <br />
          <span className="text-4xl md:text-4xl lg:text-5xl font-semibold bg-clip-text text-transparent from-indigo-500 to-purple-800 bg-linear-to-br">
            Marilyn Oshinowo
          </span>
        </h2>
        <hr className="w-[90%] md:w-full border-gray-800" />
        <h5 className="text-3xl md:text-4xl text-center">Data Analyst</h5>
      </div>
      <div className="px-12 text-lg max-md:hidden md:text-xl py-4 shadow-xl shadow-indigo-300 rounded-full font-semibold outfit z-10 mt-2 backdrop-blur-3xl bg-white lg:mt-6">
        Explore Projects
      </div>
    </div>
  );
};

export default IntroPage;
