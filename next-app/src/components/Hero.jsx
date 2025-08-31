"use client";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMaterialdesign,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJest,
  SiPostman,
  SiJsonwebtokens,
  SiFirebase,
} from "react-icons/si";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "4+ Years of Experience building software applications.";

  const skills = [
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Material UI", icon: <SiMaterialdesign color="#0081CB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Nest.js", icon: <SiNestjs color="#E0234E" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "JWT", icon: <SiJsonwebtokens color="#000000" /> },
    { name: "AppCheck", icon: <SiFirebase color="#FFCA28" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "Jest", icon: <SiJest color="#C21325" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  ];

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 overflow-hidden px-4 py-12">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-2 bg-blue-900/30 rounded-full border border-blue-700/50 mb-6">
            <p className="text-blue-400 text-sm font-medium">
              Full-Stack Software Engineer
            </p>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hi, I am <span className="text-blue-400">Osuji Chioma Sarah</span>{" "}
            <span className="block text-xl md:text-2xl font-semibold text-gray-300 mt-3">
              with <span className="typing-effect">{displayText}</span>
              {currentIndex < fullText.length && (
                <span className="inline-block w-1 h-6 md:h-8 bg-blue-500 ml-1 animate-pulse"></span>
              )}
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I specialize in building{" "}
            <span className="font-semibold text-white">
              secure, scalable applications
            </span>{" "}
            and seamless API integrations, I create solutions that are both
            powerful and user-friendly.
          </p>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            My core stack includes{" "}
            <span className="font-semibold text-white">
              React, Next.js, and Node.js
            </span>
            , with a strong focus on creating efficient, maintainable code that
            delivers exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <a
              role="button"
              href="#projects"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              View My Projects
            </a>
            <a
              role="button"
              href="#contact"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm">
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center p-1">
              <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden border-4 border-gray-900">
                <img
                  src="https://i.ibb.co/LSf0LKp/PSX-20201104-184718.jpg"
                  alt="Osuji Chioma Sarah"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
              <FaReact className="text-2xl text-blue-400" />
            </div>

            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <SiNextdotjs className="text-2xl text-white" />
            </div>

            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30">
              <FaNodeJs className="text-xl text-green-400" />
            </div>

            <div className="absolute bottom-8 -left-6 w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
              <FaDatabase className="text-xl text-cyan-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-16 max-w-6xl order-3">
        <div className="mb-6 text-center">
          <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Technologies I Work With
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-20 pointer-events-none"></div>
          <Marquee pauseOnHover gradient={false} speed={40}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center mx-4 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/70 transition-all duration-300 group"
              >
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-lg font-medium text-gray-200 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Hero;
