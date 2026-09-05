"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { SITE_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative z-10 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Let&apos;s Build <span className="gradient-text">Quality Software</span> Together.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400 md:text-base">
            I am open to Frontend Developer roles, Remote positions, and Technical Collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass space-y-6 rounded-2xl p-8">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                <span>Contact Information</span>
                <Sparkles className="h-5 w-5 text-[#FFD700]" />
              </h3>

              <p className="text-sm leading-relaxed text-gray-400">{SITE_DATA.availability}</p>

              <div className="space-y-4 text-sm text-gray-300">
                {/* Email */}
                <a
                  href={`mailto:${SITE_DATA.email}`}
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                >
                  <div className="rounded-xl bg-[#FF2D78]/20 p-3 text-[#FF2D78] transition-transform group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <div className="font-medium text-white">{SITE_DATA.email}</div>
                  </div>
                </a>

                {/* Phone */}
                {SITE_DATA.phone && (
                  <a
                    href={`tel:${SITE_DATA.phone}`}
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5"
                  >
                    <div className="rounded-xl bg-[#FFD700]/20 p-3 text-[#FFD700] transition-transform group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Phone</div>
                      <div className="font-medium text-white">{SITE_DATA.phone}</div>
                    </div>
                  </a>
                )}

                {/* Location */}
                <div className="flex items-center gap-4 rounded-xl p-3">
                  <div className="rounded-xl bg-[#FF6BA6]/20 p-3 text-[#FF6BA6]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Location</div>
                    <div className="font-medium text-white">
                      {SITE_DATA.location} (Available for Remote Work Worldwide)
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 border-t border-white/10 pt-4">
                <a
                  href={SITE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-3 text-white transition-colors hover:bg-white/10"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href={SITE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-3 text-[#FFD700] transition-colors hover:bg-white/10"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${SITE_DATA.email}`}
                  className="glass rounded-xl p-3 text-[#FF2D78] transition-colors hover:bg-white/10"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-mono text-xs text-gray-300">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-[#FF2D78] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs text-gray-300">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-[#FF2D78] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs text-gray-300">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about a role, project, or collaboration..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 transition-colors focus:border-[#FF2D78] focus:outline-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-xs text-green-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Message sent successfully! I will reply soon.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="glow-pink flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF2D78] to-[#FFD700] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
