"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Technical Arsenal</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            A comprehensive overview of my tech stack, featuring the latest and most standard
            technologies in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background Glow on hover */}
              <div className="from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-info/10 group-hover:to-accent/10 absolute -inset-1 bg-gradient-to-r blur-xl transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="group-hover:text-primary rounded-lg bg-white/5 p-2.5 text-white transition-colors">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="hover:border-primary/40 cursor-default rounded-md border border-white/5 bg-black/40 px-3 py-1.5 text-xs font-medium text-gray-300 transition-colors hover:text-white"
                    >
                      {item}
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
