import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubActivity />
      <Experience />
      <Contact />
    </div>
  );
}
