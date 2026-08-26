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
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Featured Projects</h2>
          <div className="bg-gradient-rainbow h-1 w-20 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card hover:border-primary/30 relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors"
            >
              <div className="relative z-10 flex h-full flex-col p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div className="bg-gradient-primary/20 text-primary rounded-xl p-3">
                    <FolderGit2 className="h-8 w-8" />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-white"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent text-gray-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="group-hover:text-primary mb-3 text-xl font-bold text-white transition-colors md:text-2xl">
                  {project.title}
                </h3>

                <p className="mb-8 flex-grow text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
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
