import React, { useState } from "react";
import elvoh from "../../assets/images/elvoh.jpg";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import {
  SiBootstrap,
  SiDocker,
  SiFigma,
  SiGit,
  SiKubernetes,
  SiNotion,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiVisualstudio,
} from "react-icons/si";

const infoData = [
  {
    icon: <AiOutlineUser size={20} />,
    text: "Elvis Rono",
  },
  {
    icon: <FaPhone size={20} />,
    text: "+254 708 691 113",
  },
  {
    icon: <FaBriefcase size={20} />,
    text: "Nairobi, Kenya",
  },
  {
    icon: <FaEnvelope size={20} />,
    text: "elvisrono90@gmail.com",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Moringa School",
        qualification: "Software Engeneering",
        years: "2021-2023",
      },
      {
        university: "MKU",
        qualification: "Information Technology",
        years: "2019-2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "freelance",
        role: "Software Engeneer",
        years: "2023 - Present",
      },
      {
        company: "Tech Alpha",
        role: "Web DEveloper Intern",
        years: "2024-2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        category: "Frontend",
        frontend: "HTML, CSS, Javascript, React, Angular, TailwindCSS",
      },
      {
        category: "Backend",
        backend: "Python, Ruby, Ruby on Rails",
      },
      {
        category: "Other",
        others: "IT support",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        icon: <SiVisualstudio />,
        name: "Visual Studio Code",
      },
      {
        icon: <SiFigma />,
        name: "Figma",
      },
      {
        icon: <SiNotion />,
        name: "Notion",
      },
      {
        icon: <SiGit />,
        name: "Git",
      },
      {
        icon: <SiDocker />,
        name: "Docker",
      },
      {
        icon: <SiKubernetes />,
        name: "Kubernetes",
      },
      {
        icon: <SiReact />,
        name: "React",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
      {
        icon: <SiBootstrap />,
        name: "Bootstrap",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
    ],
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <section id="about" className="xl:h-[860px] pb-12 xl:py-6">
      <div className="container mx-auto">
        <h2 className="text-headingColor text-center mb-20 font-[800] text-[2.4rem]">
          About Me
        </h2>
        <div className="flex flex-col gap-1 xl:flex-row">
          <div className="flex-1 order-2 md:order-1 md:mr-20 md:mb-0 mb-8 rounded-full">
            <img className="mx-auto xl:mx-0" src={elvoh} alt="" />
          </div>

          <div className="flex-1 order mb-10 sm:mb-0 md:order-2">
            <div className="w-full text-center grid grid-cols-3 max-w-[520px] border border-gray-200 shadow-sm rounded-full">
              <div
                className={`col-span-1 rounded-full py-3 cursor-pointer ${
                  activeTab === "personal"
                    ? "ffont-bold bg-teal-500 transition duration-300 ease-in-out"
                    : "text-black font-bold"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                Personal info
              </div>
              <div
                className={`col-span-1 rounded-full py-3 cursor-pointer ${
                  activeTab === "qualifications"
                    ? " font-bold bg-teal-500 transition duration-3000 ease-in-out"
                    : "text-black font-bold"
                }`}
                onClick={() => setActiveTab("qualifications")}
              >
                Qualifications
              </div>
              <div
                className={`col-span-1 rounded-full py-3 cursor-pointer ${
                  activeTab === "skills"
                    ? " font-bold bg-teal-500 transition duration-3000 ease-in-out"
                    : "text-black font-bold"
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </div>
            </div>

            <div className="text-lg md:pl-10 pl-0 mt-12 xl:mt-8">
              <div>
                {activeTab === "personal" && (
                    <div>
                        <h3>Unmatched Service for over 2 years</h3>
                        <p>I specialize in building, creating and developing user friendly websites</p>
                        <div>
                            {infoData.map((item,index) =>(
                                <div key={index}>
                                    <div>{item.icon}</div>
                                    <div>{item.text}</div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div>Language Skill</div>
                            <div></div>
                            <div>English and Kiswahili</div>
                        </div>
                    </div>
                
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
