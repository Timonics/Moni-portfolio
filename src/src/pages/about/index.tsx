import React from "react";
import Nav from "../../components/nav";

import aboutImg from "../../../assets/profile/moni-profile1.jpg";
import Modal from "../../components/modal";
import Footer from "../../components/footer";

const AboutPage: React.FC = () => {
  return (
    <div className="space-y-15 lg:space-y-20">
      <Nav />
      <div className="flex flex-col items-center lg:flex-row max-w-5xl mx-auto p-2 gap-10 lg:gap-14 w-full">
        <div className="h-[400px] max-w-xl w-full lg:w-1/2 mx-auto p-4 relative">
          <div className="absolute w-[95%] h-full bg-indigo-500/50 blur-2xl translate-x-6 -translate-y-6"></div>
          <div className="absolute w-[85%] h-[95%] bg-indigo-600  translate-x-4 -translate-y-4"></div>
          <div className="absolute w-[85%] h-[95%] shadow-2xl shadow-black/50">
            <img
              src={aboutImg}
              alt="about-img"
              className="object-cover object-center lg:object-[50%_75%] h-full w-full "
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 max-w-2xl">
          <h3 className="text-6xl md:text-7xl font-thin">
            About{" "}
            <span className="text-indigo-800 text-7xl md:text-8xl">Me</span>
          </h3>
          <p className="text-xl md:text-2xl outfit">
            I am a data analyst who specializes in turning raw data into clear
            and actionable insights. With a strong foundation in{" "}
            <span className="font-bold">Microsoft Excel</span>,{" "}
            <span className="font-bold">Power BI</span>,{" "}
            <span className="font-bold">SQL</span> and{" "}
            <span className="font-bold">Python</span>. I help in making better
            decisions by finding trends, Solving problems and presenting data in
            a clear way.
          </p>
        </div>
      </div>
      <hr className="border border-gray-300 max-w-5xl w-[90%] md:w-[70%] mx-auto" />
      <Modal
        name="Let's Work Together"
        button1Name="View Projects"
        button1="my-projects"
        button2Name="Contact"
        button2="contact-me"
      />
      <hr className="border border-gray-300 max-w-5xl w-[90%] md:w-[70%] mx-auto" />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
