"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGraduationCap,
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { certificates } from "./certificates";
import { skills } from "./skills";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const fullText =
    "I am Osuji Chioma Sarah with 4+ Years of Experience building software applications.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const prevCertificate = () => {
    setCurrentCertIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1,
    );
  };

  const nextCertificate = () => {
    setCurrentCertIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 overflow-hidden px-4 py-12">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9IiM1NTU1NTUiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+PC9zdmc+')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6 justify-center lg:justify-start">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 rounded-full border border-blue-700/50">
                <p className="text-blue-400 text-sm font-medium whitespace-nowrap">
                  Full-Stack Software Engineer & QA Tester
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 rounded-full border border-blue-700/30">
                <FaGraduationCap className="text-blue-300 flex-shrink-0" />
                <p className="text-blue-400 text-sm font-medium whitespace-nowrap">
                  B.Tech. Maritime Management Technology
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl text-white mb-4">
            Welcome!{" "}
            <span className="block text-lg font-semibold text-gray-300 mt-3">
              <span className="typing-effect">{displayText}</span>
              {currentIndex < fullText.length && (
                <span className="inline-block w-1 h-6 md:h-8 bg-blue-500 ml-1 animate-pulse"></span>
              )}
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I specialize in building{" "}
            <span className="font-semibold text-white">
              secure, scalable applications
            </span>{" "}
            and seamless API integrations, creating solutions that are both
            powerful and user-friendly.
          </p>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            My core stack includes{" "}
            <span className="font-semibold text-white">
              React, Next.js, Node.js, and Nest.js{" "}
            </span>
            with a strong focus on creating efficient, maintainable code that
            delivers exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
            <a
              role="button"
              href="#projects"
              className="px-6 py-3 bg-cyan-900/20 rounded-full border border-cyan-700/30 text-cyan-300 font-medium transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              View My Projects
            </a>
            <a
              role="button"
              href="#contact"
              className="px-6 py-3 bg-cyan-900/20 rounded-full border border-cyan-700/30 text-cyan-300 font-medium transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Contact Me
            </a>
            <button
              onClick={() => {
                const certSection = document.getElementById(
                  "certificate-section",
                );
                if (certSection) {
                  certSection.classList.toggle("hidden");
                }
              }}
              className="px-6 py-3 bg-cyan-900/20 rounded-full border border-cyan-700/30 text-cyan-300 font-medium transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaCertificate className="text-cyan-400" />
              View Certificates
            </button>
          </div>

          {/* Certificate Carousel */}
          <div id="certificate-section" className="mb-6 hidden">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                {/* Certificate Image with Hover Overlay */}
                <div className="border-2 border-cyan-700/30 rounded-lg p-1 bg-gray-800/50 relative group">
                  <a
                    href={certificates[currentCertIndex].src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <Image
                      src={certificates[currentCertIndex].src}
                      alt={certificates[currentCertIndex].alt}
                      width={400}
                      height={250}
                      className="rounded-lg shadow-md transition-transform duration-300 w-full h-auto"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center cursor-pointer">
                      <div className="text-center">
                        <FaCertificate className="text-4xl text-cyan-400 mx-auto mb-2" />
                        <p className="text-white text-sm font-medium">
                          Click to view full size
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Opens in new tab
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Navigation Arrows */}
                {certificates.length > 1 && (
                  <>
                    <button
                      onClick={prevCertificate}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Previous certificate"
                    >
                      <FaChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextCertificate}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                      aria-label="Next certificate"
                    >
                      <FaChevronRight className="w-4 h-4" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-4 gap-2">
                      {certificates.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentCertIndex(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentCertIndex
                              ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-400"
                              : "w-2 bg-gray-600 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to certificate ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Certificate Title */}
                <p className="text-gray-300 text-sm mt-3 text-center">
                  {certificates[currentCertIndex].title}
                </p>
                <p className="text-gray-500 text-xs text-center">
                  {certificates[currentCertIndex].institution}
                </p>
              </div>
            </div>
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
                <Image
                  src="https://i.ibb.co/LSf0LKp/PSX-20201104-184718.jpg"
                  alt="Osuji Chioma Sarah"
                  width={300}
                  height={200}
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
            Technologies & Skills
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 z-20 pointer-events-none"></div>
          <Marquee pauseOnHover gradient={false} speed={40}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center mx-4 px-4 py-3 bg-blue-900/30 rounded-full border border-blue-700/50 hover:bg-blue-700/30 transition-all duration-300 group"
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
