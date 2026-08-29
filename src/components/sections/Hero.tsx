"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Download, Mail } from "lucide-react";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { SITE_DATA, HERO_STATS } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  const dynamicWords = [
    "Secure Full-Stack Systems",
    "Shift-Left QA Workflows",
    "Type-Safe Next.js Apps",
    "Automated Test Suites (172+)",
    "Production-Ready APIs",
  ];

  return (
    <section
      id="home"
      className="grid-pattern relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:px-8"
    >
      <div className="aurora-glow bg-primary -top-20 -left-20 h-96 w-96" />
      <div className="aurora-glow bg-info top-1/3 -right-20 h-96 w-96" />
      <div className="aurora-glow bg-accent bottom-0 left-1/3 h-80 w-80" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
            <span className="bg-primary relative inline-flex h-2.5 w-2.5 rounded-full" />
          </span>
          <span className="font-mono text-xs font-medium text-gray-300">
            Available for Full-Stack & Remote Roles
          </span>
          <Sparkles className="text-accent h-3.5 w-3.5 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-5 max-w-3xl text-sm text-gray-400 italic md:text-base"
        >
          “{SITE_DATA.headline}”
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-3 font-mono text-sm text-gray-400 md:text-base"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="gradient-text-rainbow">SOMAIYA</span>{" "}
          <span className="gradient-text">NOORI</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex min-h-[3.5rem] flex-wrap items-center justify-center gap-2 text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl"
        >
          <span>I engineer</span>
          <span className="gradient-text font-mono font-bold">
            <TypeWriter words={dynamicWords} />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base"
        >
          {SITE_DATA.subHeadline} Based in{" "}
          <span className="font-medium text-white">Herat, Afghanistan</span>. Specializing in{" "}
          <span className="text-primary font-medium">React 19</span>,{" "}
          <span className="text-info font-medium">Next.js</span>,{" "}
          <span className="text-accent font-medium">TypeScript</span>, Node.js, PostgreSQL, and
          automated QA.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="glass rounded-xl px-4 py-3">
              <div className="gradient-text text-xl font-bold">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-gradient-primary glow-pink flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Code className="h-4 w-4" />
            View My Work
          </a>

          <a
            href="/resume.pdf"
            download="Somaiya_Noori_FullStack_Developer_CV.pdf"
            className="glass text-accent border-accent/30 hover:border-accent/60 flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>

          <a
            href="#contact"
            className="glass flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>

          <a
            href={SITE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={SITE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass text-info flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass mt-4 rounded-full p-2 text-gray-400 transition-colors hover:text-white"
          aria-label="Scroll to About"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
