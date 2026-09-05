"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, CheckCircle2, ShieldCheck } from "lucide-react";
import { PRINCIPLES } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Frontend Engineering with a{" "}
            <span className="gradient-text">&quot;Quality-First&quot; Mindset</span>
          </h2>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#FF2D78] to-[#FFD700]" />
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 p-8"
          >
            <p className="mb-4 leading-relaxed text-gray-300">
              Based in <span className="font-medium text-white">Herat, Afghanistan</span>, I build
              modern web applications with <span className="font-medium text-white">React</span>,{" "}
              <span className="font-medium text-white">Next.js</span>,{" "}
              <span className="font-medium text-white">TypeScript</span>, and{" "}
              <span className="font-medium text-white">Tailwind</span>.
            </p>

            <p className="mb-4 leading-relaxed text-gray-300">
              Having worked in both Software Development and Quality Assurance at{" "}
              <span className="font-medium text-white">CTI</span>, I bridge beautiful UI engineering
              with system reliability.
            </p>

            <p className="leading-relaxed text-gray-300">
              Because I understand backend environments{" "}
              <span className="font-medium text-white">(Node.js, PostgreSQL)</span>, I write
              frontend code that consumes APIs efficiently, handles state predictably, and manages
              security thoughtfully.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="rounded-xl bg-[#FFD700]/15 p-3 text-[#FFD700]">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    AI-Enhanced Development <Sparkles className="h-4 w-4 text-[#FFD700]" />
                  </h3>
                  <p className="text-sm text-gray-400">Faster delivery, higher quality</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                I use AI tools (ChatGPT, Copilot, Claude) for debugging, documentation, test ideas,
                and faster iteration — always with human review, clean architecture, and strong test
                coverage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass flex items-start gap-4 rounded-2xl p-6"
            >
              <div className="rounded-xl bg-[#FF2D78]/15 p-3 text-[#FF2D78]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Quality Philosophy</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Clean UI, accessible experiences, and API-safe frontend architecture — from day
                  one, not as an afterthought.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-5 transition-colors hover:border-[#FF2D78]/30"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#FF2D78]" />
                <div>
                  <h4 className="mb-1 font-semibold text-white">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
