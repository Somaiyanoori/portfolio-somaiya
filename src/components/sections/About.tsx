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
            Engineering with a <span className="gradient-text">&quot;Shift-Left&quot; Mindset</span>
          </h2>
          <div className="bg-gradient-primary h-1 w-20 rounded-full" />
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl border border-white/10 p-8"
          >
            <p className="mb-4 leading-relaxed text-gray-300">
              I believe the cost of fixing a bug increases tenfold at every stage of the software
              lifecycle. That is why I don&apos;t just write code that works — I write code that I
              can <span className="font-semibold text-white">prove</span> works.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              Based in <span className="font-medium text-white">Herat, Afghanistan</span>, I build
              modern full-stack applications with React, Next.js, Node.js, and PostgreSQL. Having
              worked in both Software Development and Quality Assurance at{" "}
              <span className="font-medium text-white">CTI</span>, I bridge feature engineering and
              system reliability.
            </p>
            <p className="leading-relaxed text-gray-300">
              Whether implementing Row Level Security (RLS), writing Playwright E2E suites, or
              crafting accessible RTL interfaces, I prioritize maintainability, performance, and
              user trust.
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
                <div className="bg-info/20 text-info rounded-xl p-3">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    AI-Enhanced Development <Sparkles className="text-accent h-4 w-4" />
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
              <div className="bg-primary/20 text-primary rounded-xl p-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">Quality Philosophy</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Security, testing, and performance are not final steps — they are part of the
                  architecture from day one.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass hover:border-primary/30 rounded-2xl p-5 transition-colors"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
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
