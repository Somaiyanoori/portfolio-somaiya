"use client";

import { motion } from "framer-motion";
import { Terminal, GitCommit, GitPullRequest, Star, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { SITE_DATA } from "@/lib/constants";

export function GitHubActivity() {
  const stats = [
    { label: "Repositories", value: "20+", icon: Code2, color: "text-primary" },
    { label: "Total Commits", value: "450+", icon: GitCommit, color: "text-accent" },
    { label: "Pull Requests", value: "35+", icon: GitPullRequest, color: "text-info" },
    { label: "Code Quality", value: "A+", icon: Star, color: "text-yellow-400" },
  ];

  return (
    <section className="relative z-10 bg-black/40 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="glass text-primary mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs">
            <GithubIcon className="h-4 w-4" />
            <span>open_source_contributions</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">GitHub & Code Activity</h2>
          <p className="mx-auto max-w-xl text-sm text-gray-400 md:text-base">
            Continuous learning, active version control, and clean standard code practices.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass hover:border-primary/30 rounded-2xl p-6 text-center transition-colors"
            >
              <stat.icon className={`mx-auto mb-3 h-6 w-6 ${stat.color}`} />
              <div className="mb-1 font-mono text-2xl font-extrabold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Live Code Window (VS Code Style) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          {/* Editor Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-gray-400">
                <Terminal className="text-info h-3.5 w-3.5" />
                developer.config.ts
              </span>
            </div>
            <a
              href={SITE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-gray-400 transition-colors hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>@Somaiyanoori</span>
            </a>
          </div>

          {/* Editor Code */}
          <div className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-gray-300 md:text-sm">
            <div className="flex gap-4">
              <div className="space-y-1 text-right text-gray-600 select-none">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
              </div>
              <div className="space-y-1">
                <div>
                  <span className="text-primary">export const</span>{" "}
                  <span className="text-accent">somaiyaNoori</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-info">role</span>:{" "}
                  <span className="text-green-400">"Full-Stack Web Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-info">frontend</span>: [
                  <span className="text-green-400">"React 19"</span>,{" "}
                  <span className="text-green-400">"Next.js 15"</span>,{" "}
                  <span className="text-green-400">"TypeScript"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-info">backend</span>: [
                  <span className="text-green-400">"Node.js"</span>,{" "}
                  <span className="text-green-400">"Express"</span>,{" "}
                  <span className="text-green-400">"PostgreSQL"</span>,{" "}
                  <span className="text-green-400">"Prisma"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-info">qaTesting</span>: [
                  <span className="text-green-400">"Vitest"</span>,{" "}
                  <span className="text-green-400">"Playwright"</span>,{" "}
                  <span className="text-green-400">"Jest"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-info">aiWorkflows</span>:{" "}
                  <span className="text-yellow-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-info">cleanCode</span>:{" "}
                  <span className="text-yellow-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-info">status</span>:{" "}
                  <span className="text-green-400">"Ready for impact"</span>,
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-gray-500">
                  <span className="text-primary animate-pulse">⚡</span> // Always building, always
                  optimizing.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
