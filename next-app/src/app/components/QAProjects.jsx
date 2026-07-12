"use client";
import { FaBug, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdOutlineFactCheck } from "react-icons/md";
import { qaProjectItems, qaProjects } from "./qa-project-items";

const QAProjects = () => {
  return (
    <section
      id="qa"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #1a0a2e 0%, #0d0a1a 20%, #0a0f1a 60%, #0a0a12 100%)",
      }}
    >
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-900/20 rounded-full border border-cyan-700/30 mb-5">
            <MdOutlineFactCheck className="text-cyan-400 text-sm" />
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">
              QA & Testing
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-200 via-cyan-300 to-blue-400 bg-clip-text text-transparent pb-4">
            I break things so you don't have to.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Manual and automated QA projects — test planning, exploratory
            testing, defect reporting, and E2E automation applied to real
            applications.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qaProjectItems.map((project) => (
            <div
              key={project.name}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-700/40 hover:shadow-2xl hover:shadow-cyan-950/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.screenshot}
                  alt={project.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-semibold text-sm">
                    {project.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {project.url.replace("https://", "")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-5 gap-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="flex-1 text-center py-2 bg-white/[0.04] rounded-xl border border-white/10"
                    >
                      <p className="text-white font-bold text-lg leading-none">
                        {s.value}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2.5 p-3 bg-yellow-400/20 border border-yellow-500/20 rounded-xl">
                  <FaBug className="text-yellow-400 text-xs mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-xs leading-relaxed">
                    <span className="text-yellow-300 font-medium">
                      Notable find:{" "}
                    </span>
                    {project.highlight}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-blue-900/20 rounded-full border border-blue-800/20 text-blue-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-1">
                  <p className="text-gray-500 text-xs mb-2 uppercase tracking-widest">
                    View by testing type
                  </p>
                  <div className="flex flex-col gap-2">
                    {project.testing.map((t) => (
                      <a
                        key={t.label}
                        href={t.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between px-4 py-2 bg-white/[0.03] rounded-full border text-xs font-medium transition-all duration-200 ${t.color}`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{t.icon}</span>
                          {t.label}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaGithub className="text-sm" /> View Repo →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-full text-gray-400 hover:text-white text-xs font-medium transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-xs" /> View App Tested
                </a>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QAProjects;
