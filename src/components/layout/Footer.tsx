import { Mail, Heart } from "lucide-react";
import { SITE_DATA } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 relative border-t border-white/10 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="gradient-text font-mono text-lg font-bold">SOMAIYA NOORI</span>
          <p className="flex items-center gap-1.5 text-xs text-gray-400">
            Designed & Built with{" "}
            <Heart className="text-primary fill-primary h-3.5 w-3.5 animate-pulse" /> using Next.js
            & TypeScript © {currentYear}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:border-primary/40 rounded-xl p-2.5 text-gray-400 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:text-info hover:border-info/40 rounded-xl p-2.5 text-gray-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE_DATA.email}`}
            className="glass hover:text-primary hover:border-primary/40 rounded-xl p-2.5 text-gray-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
