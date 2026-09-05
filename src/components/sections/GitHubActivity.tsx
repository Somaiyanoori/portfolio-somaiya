"use client";

import { motion } from "framer-motion";
import { Terminal, GitCommit, GitPullRequest, Star, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { SITE_DATA } from "@/lib/constants";

export function GitHubActivity() {
  const stats = [
    { label: "Repositories", value: "20+", icon: Code2, color: "text-[#FF2D78]" },
    { label: "Total Commits", value: "450+", icon: GitCommit, color: "text-[#FFD700]" },
    { label: "Pull Requests", value: "35+", icon: GitPullRequest, color: "text-[#FF6BA6]" },
    { label: "Code Quality", value: "A+", icon: Star, color: "text-[#FFE566]" },
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
          <div className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-[#FF2D78]">
            <GithubIcon className="h-4 w-4" />
            <span>frontend_engineering_activity</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">GitHub & Code Activity</h2>
          <p className="mx-auto max-w-xl text-sm text-gray-400 md:text-base">
            Frontend-focused engineering with strong API, testing, and backend fundamentals.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 text-center transition-colors hover:border-[#FF2D78]/30"
            >
              <stat.icon className={`mx-auto mb-3 h-6 w-6 ${stat.color}`} />
              <div className="mb-1 font-mono text-2xl font-extrabold text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 flex items-center gap-1.5 font-mono text-xs text-gray-400">
                <Terminal className="h-3.5 w-3.5 text-[#FF2D78]" />
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

          <div className="overflow-x-auto p-6 font-mono text-xs leading-relaxed text-gray-300 md:text-sm">
            <div className="flex gap-4">
              <div className="space-y-1 text-right text-gray-600 select-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              <div className="space-y-1">
                <div>
                  <span className="text-[#FF2D78]">export const</span>{" "}
                  <span className="text-[#FFD700]">somaiyaNoori</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">role</span>:{" "}
                  <span className="text-green-400">&quot;Frontend Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">core</span>: [
                  <span className="text-green-400">&quot;React 19&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Next.js 15&quot;</span>,{" "}
                  <span className="text-green-400">&quot;TypeScript&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">apiIntegration</span>: [
                  <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Express&quot;</span>,{" "}
                  <span className="text-green-400">&quot;PostgreSQL&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Prisma&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">qaTesting</span>: [
                  <span className="text-green-400">&quot;Vitest&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Playwright&quot;</span>,{" "}
                  <span className="text-green-400">&quot;Jest&quot;</span>],
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">aiWorkflows</span>:{" "}
                  <span className="text-[#FFD700]">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">cleanCode</span>:{" "}
                  <span className="text-[#FFD700]">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-pink-300">status</span>:{" "}
                  <span className="text-green-400">&quot;Ready for impact&quot;</span>,
                </div>
                <div>&#125;;</div>
                <div className="pt-2 text-gray-500">
                  <span className="animate-pulse text-[#FF2D78]">⚡</span> // Frontend-focused.
                  Backend-aware.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
