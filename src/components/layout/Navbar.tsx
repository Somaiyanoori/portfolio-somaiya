"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import { NAV_ITEMS, SITE_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-40 px-4 transition-all duration-300 md:px-8",
          isScrolled ? "py-3" : "py-6"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="glass group flex items-center gap-2 rounded-xl px-3 py-2 transition-colors hover:border-primary/40"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary font-mono text-sm font-bold text-white shadow-md">
              SN
            </div>
            <span className="font-mono text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-primary">
              somaiya.dev
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="glass hidden items-center gap-1 rounded-full px-3 py-1.5 shadow-lg md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs font-medium transition-all duration-200",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary to-info"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="glow-pink hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let's Talk</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="glass rounded-xl p-2.5 text-gray-300 hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setMobileOpen(false);
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-gradient-primary px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
