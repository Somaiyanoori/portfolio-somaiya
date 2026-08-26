"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, CheckCircle2 } from "lucide-react";

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
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            <span className="text-white">System.</span>
            <span className="gradient-text">About()</span>
          </h2>
          <div className="bg-gradient-primary h-1 w-20 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/5 bg-black/40 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-2 font-mono text-xs text-gray-500">somaiya@portfolio:~</span>
            </div>
            <div className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-gray-300">
              <p className="mb-2">
                <span className="text-primary">const</span>{" "}
                <span className="text-white">developer</span> = &#123;
              </p>
              <p className="mb-1 ml-4">
                name: <span className="text-accent">"Somaiya Noori"</span>,
              </p>
              <p className="mb-1 ml-4">
                location: <span className="text-accent">"Herat, Afghanistan"</span>,
              </p>
              <p className="mb-1 ml-4">
                role: <span className="text-accent">"Full-Stack Web Developer"</span>,
              </p>
              <p className="mb-1 ml-4">
                languages: [<span className="text-accent">"English (A+)"</span>,{" "}
                <span className="text-accent">"Persian (Native)"</span>],
              </p>
              <p className="mb-1 ml-4">
                passion:{" "}
                <span className="text-accent">"Building modern, fast, and optimized web apps"</span>
                ,
              </p>
              <p className="mb-2 ml-4">
                problemSolver: <span className="text-info">true</span>,
              </p>
              <p className="mb-4">&#125;;</p>

              <p className="mb-2">
                <span className="text-gray-500">// My Mission</span>
              </p>
              <p className="text-white">
                developer.<span className="text-info">execute</span>()
              </p>
              <p className="mt-2 text-gray-400">
                &gt; Initiating full-stack deployment...
                <br />
                &gt; Delivering clean code, standard architecture, and REST APIs.
                <br />
                &gt; Ensuring 100% QA & Automated Testing passes.
              </p>
            </div>
          </motion.div>

          {/* Right Side: AI & Strengths */}
          <div className="space-y-6">
            {/* AI Experience Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass group relative overflow-hidden rounded-2xl p-6"
            >
              <div className="from-primary/10 to-info/10 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-info/20 text-info rounded-xl p-3">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                    AI-Enhanced Development <Sparkles className="text-accent h-4 w-4" />
                  </h3>
                  <p className="text-sm text-gray-400">Working Smarter & Faster</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-300">
                I actively utilize AI tools (like ChatGPT & Copilot) in my daily workflow to
                optimize code, accelerate debugging, and write comprehensive API documentation. This
                allows me to deliver high-quality products faster than traditional methods.
              </p>
            </motion.div>

            {/* Core Strengths Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                "Problem Solving",
                "Advanced Debugging",
                "Team Collaboration",
                "API Documentation",
                "Responsive Design",
                "Automated QA Testing",
              ].map((strength, i) => (
                <div
                  key={i}
                  className="glass hover:border-primary/30 flex items-center gap-3 rounded-xl px-4 py-3 transition-colors"
                >
                  <CheckCircle2 className="text-primary h-4 w-4 shrink-0" />
                  <span className="text-xs font-medium text-gray-200 sm:text-sm">{strength}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
