"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Download } from "lucide-react";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { SITE_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Hero() {
  const dynamicWords = [
    "Full-Stack Web Applications",
    "High-Performance REST APIs",
    "Scalable Next.js & React Systems",
    "PostgreSQL & Prisma Databases",
    "AI-Augmented Workflows",
  ];

  return (
    <section
      id="home"
      className="grid-pattern relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 pb-16 md:px-8"
    >
      {/* Background Auroras */}
      <div className="aurora-glow bg-primary -top-20 -left-20 h-96 w-96" />
      <div className="aurora-glow bg-info top-1/3 -right-20 h-96 w-96" />
      <div className="aurora-glow bg-accent bottom-0 left-1/3 h-80 w-80" />

      {/* Floating Code Badges */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20 select-none">
        <div className="text-primary animate-float absolute top-28 left-[10%] font-mono text-xs">
          const developer = &#123; name: "Somaiya Noori" &#125;;
        </div>
        <div
          className="text-info animate-float absolute top-1/2 right-[8%] font-mono text-xs"
          style={{ animationDelay: "2s" }}
        >
          &lt;React19 /&gt; + &lt;Next.js15 /&gt;
        </div>
        <div
          className="text-accent animate-float absolute bottom-28 left-[15%] font-mono text-xs"
          style={{ animationDelay: "4s" }}
        >
          prisma.$connect() // PostgreSQL Ready
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass hover:border-primary/30 mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2 transition-colors"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-primary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
          </span>
          <span className="font-mono text-xs font-medium text-gray-300">
            Available for Full-Stack & Frontend Roles
          </span>
          <Sparkles className="text-accent h-3.5 w-3.5 animate-pulse" />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 font-mono text-sm text-gray-400 md:text-base"
        >
          👋 Hello World, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="gradient-text-rainbow">SOMAIYA</span>{" "}
          <span className="gradient-text">NOORI</span>
        </motion.h1>

        {/* Dynamic Typewriter Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6 flex min-h-[3.5rem] flex-wrap items-center justify-center gap-2 text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl"
        >
          <span>I engineer</span>
          <span className="gradient-text font-mono font-bold">
            <TypeWriter words={dynamicWords} />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base"
        >
          Full-Stack Web Developer based in{" "}
          <span className="font-medium text-white">Herat, Afghanistan</span>. Specialized in modern
          web ecosystems with <span className="text-primary font-medium">React 19</span>,{" "}
          <span className="text-info font-medium">Next.js 15</span>,{" "}
          <span className="text-accent font-medium">TypeScript</span>, and Node.js. Leveraging
          AI-assisted engineering for lightning-fast, production-ready delivery.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-gradient-primary glow-pink flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            <Code className="h-4 w-4" />
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="glass text-accent border-accent/30 hover:border-accent/60 flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download CV
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

        {/* Fast Tech Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-gray-400"
        >
          <span className="glass rounded-md px-3 py-1">TypeScript Strict</span>
          <span className="glass rounded-md px-3 py-1">PostgreSQL + Prisma</span>
          <span className="glass rounded-md px-3 py-1">Docker & CI/CD</span>
          <span className="glass rounded-md px-3 py-1">Vitest & Playwright</span>
          <span className="glass text-accent rounded-md px-3 py-1 font-semibold">
            AI-Driven Dev
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="glass mt-14 rounded-full p-2 text-gray-400 transition-colors hover:text-white"
          aria-label="Scroll to About"
        >
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
