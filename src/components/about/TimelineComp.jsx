import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const timelineData = [
  {
    role: "Information System 3 Tutor",
    company: "Rhodes University ",
    companyLink: "https://www.ru.ac.za/ ",
    contract: "Full-time ",
    date: "2024 June - 2024 Nov",
  },

  {
    role: "Full-stack Developer",
    company: "Sedisego ",
    companyLink: "https://www.sedisegointeriors.co.za/ ",
    contract: "Freelance ",
    date: "2024 Apr - 2024 Jun",
  },
  {
    role: "Back-end Engineer",
    company: "Lyft Back-End Engineering Virtual Internship ",
    companyLink:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Lyft/xSw9echtixLAoPdsH_Lyft_6fqRCFBX24CnhHPst_1719957820023_completion_certificate.pdf ",
    contract: "Full-time ",
    date: "2023 July - 2023 July",
  },

  {
    role: "Computer Science Tutor",
    company: "Rhodes University ",
    companyLink: "https://www.ru.ac.za/ ",
    contract: "Full-time ",
    date: "2023 June - 2023 Nov",
  },
];

const TimelineComp = () => {
  return (
    <div className="relative text-left">
      <div className=" border-l-2 border-gray-300 absolute h-full left-4"></div>
      {timelineData.map((item, index) => (
        <div key={index} className="mb-8 flex items-center">
          <div className="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center text-white] font-bold ">
            <GoDotFill />
          </div>
          <div className="ml-8 space-y-2 ">
            <div className="text-md font-semibold"> {item.role} </div>
            <div className="flex flex-row gap-2">
              <a
                href={item.companyLink}
                target="_blank"
                className="text-md underline cursor-pointer"
                rel="noreferrer"
              >
                {" "}
                {item.company}
              </a>
              ·<div className="text-md"> {item.contract}</div>
            </div>
            <div className="text-sm"> {item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineComp;
