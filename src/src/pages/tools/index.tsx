import React from "react";
import Nav from "../../components/nav";
import { PiMicrosoftExcelLogoDuotone, PiPowerBold } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";

const ToolsPage: React.FC = () => {
  const toolsArr = [
    {
      icon: PiMicrosoftExcelLogoDuotone,
      name: "Microsoft Excel",
    },
    {
      icon: GrMysql,
      name: "MySQL",
    },
    {
      icon: PiPowerBold,
      name: "Power BI",
    },
    {
      icon: FaPython,
      name: "Python",
    },
  ];

  return (
    <div className="space-y-15 lg:space-y-20">
      <Nav />
      <div className="flex flex-col items-center max-w-5xl mx-auto p-2 gap-15 lg:gap-20 w-full">
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="px-4 py-1 outfit rounded-full text-sm border-4 border-indigo-500 text-indigo-600 bg-indigo-300 font-bold w-fit">
            MY TOOLS
          </div>
          <h3 className="text-5xl mt-6 underline underline-offset-4">Tools i wield</h3>
          <div className="w-full py-4 flex gap-4 items-center justify-center flex-wrap">
            {toolsArr.map((tool) => {
              const Icon = tool.icon;
              return (
                <div className="flex flex-col items-center justify-center bg-linear-to-br from-gray-800 to-gray-950 text-gray-300 w-[250px] py-4 rounded-xl gap-2">
                  <Icon className="" size={48}/>
                  <p className="text-xl outfit">{tool.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center">
           <div className="px-4 py-1 outfit rounded-full text-sm border-4 border-fuchsia-500 text-fuchsia-600 bg-fuchsia-300 font-bold w-fit">
            TECHNICAL SKILLS
          </div> 
          <div className="bg-black w-full p-4 rounded-xl flex flex-col">
            <div className="bg-white/5 relative p-4 max-w-xl mx-auto w-full">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;
