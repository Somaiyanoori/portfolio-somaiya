"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, ACHIEVEMENTS } from "@/data/portfolio";
import { GraduationCap, Briefcase, Trophy } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Experience & Achievements
          </h2>
        </motion.div>

        <div className="relative mb-14 ml-3 space-y-12 border-l border-white/10 md:ml-6">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="bg-primary border-background absolute top-1 -left-[9px] h-4 w-4 rounded-full border-2 shadow-[0_0_15px_rgba(255,45,120,0.8)]" />
              <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                    {idx === 0 ? (
                      <Briefcase className="text-accent h-5 w-5" />
                    ) : (
                      <GraduationCap className="text-info h-5 w-5" />
                    )}
                    {exp.role}
                  </h3>
                  <span className="text-primary bg-primary/10 w-fit rounded-full px-3 py-1 font-mono text-sm">
                    {exp.date}
                  </span>
                </div>
                <h4 className="mb-4 text-lg font-medium text-gray-300">{exp.company}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
            <Trophy className="text-accent h-5 w-5" />
            CTI Performance Summary
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/5 bg-black/30 px-4 py-3 text-sm text-gray-300"
              >
                🏆 {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
