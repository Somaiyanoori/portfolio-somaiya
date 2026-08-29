"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-black/20 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Featured Case Studies</h2>
          <p className="max-w-2xl text-gray-400">
            Real engineering work with challenges, solutions, and measurable quality outcomes.
          </p>
          <div className="bg-gradient-rainbow mt-4 h-1 w-20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group glass-card hover:border-primary/30 relative overflow-hidden rounded-2xl transition-colors"
            >
              <div className="relative z-10 p-7 md:p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary/20 text-primary shrink-0 rounded-xl p-3">
                      <FolderGit2 className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="text-accent mb-1 font-mono text-xs">{project.type}</div>
                      <h3 className="group-hover:text-primary text-xl font-bold text-white transition-colors md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">{project.tagline}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-white"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent text-gray-400 transition-colors"
                      aria-label="Live"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>

                <div className="mb-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-white/5 bg-black/30 p-4">
                    <div className="text-primary mb-2 text-xs font-semibold">The Challenge</div>
                    <p className="text-xs leading-relaxed text-gray-400">{project.challenge}</p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/30 p-4">
                    <div className="text-info mb-2 text-xs font-semibold">The Solution</div>
                    <p className="text-xs leading-relaxed text-gray-400">{project.solution}</p>
                  </div>
                </div>

                <ul className="mb-5 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-gray-300">
                      <span className="text-accent">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-info/90 bg-info/10 rounded-md px-2.5 py-1 font-mono text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
