"use client";
import Image from "next/image";
import { projectItems } from "./project-items";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-6">
            Peep my projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="sm:hidden">
          {projectItems.map((project, index) => (
            <div
              key={index}
              className="sticky top-24 mb-10"
              style={{ zIndex: index + 1 }}
            >
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-h-[340px] bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
              >
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={500}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col justify-center min-h-[100px]">
                  <p className="text-white font-semibold text-lg mb-1">
                    {project.title}
                  </p>
                  <p className="text-cyan-300 text-sm">View live project →</p>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* ── Larger screens ─────────────────────────────────── */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectItems.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-950/30 hover:border-cyan-700/40"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <p className="text-white font-semibold text-sm md:text-base group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
