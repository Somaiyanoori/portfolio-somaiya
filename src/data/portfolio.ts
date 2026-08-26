import { Code, Database, Globe, Layout, Server, Shield, Sparkles, TestTube } from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Zustand"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "Next.js API", "REST APIs"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "Prisma", "Supabase", "Firebase", "Redis"],
  },
  {
    category: "Auth & Security",
    icon: Shield,
    items: ["JWT", "Clerk", "Firebase Auth", "RBAC", "bcrypt"],
  },
  {
    category: "Testing & QA",
    icon: TestTube,
    items: ["Vitest", "Playwright", "Jest", "API Testing", "E2E Testing"],
  },
  {
    category: "Tools & DevOps",
    icon: Globe,
    items: ["Git/GitHub", "Docker", "Vercel", "GitHub Actions", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "E-Government Citizen Portal",
    description:
      "Full-stack government portal with JWT/RBAC, CRUD workflows, audit logging, real-time notifications, localization, and responsive UI.",
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "KaarYab Afghanistan Live",
    description:
      "Opportunity platform with authentication, search/filtering, bookmarks, profiles, CV building, and automated testing.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Clerk"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Taply Backend APIs",
    description:
      "Backend APIs for design uploads and visual feedback with Firebase Auth, Firestore, Cloudinary, validation, and rate limiting.",
    tech: ["Next.js 15 API", "Firebase", "Cloudinary", "Zod", "Jest"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Goal Tracker",
    description:
      "Productivity application for creating and tracking goals with responsive UI, forms, state management, and backend integration.",
    tech: ["React", "TypeScript", "Node.js"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "QA & Web Development",
    company: "CTI (Remote, Herat)",
    date: "Nov 2025 – Feb 2026",
    description:
      "Performed functional, regression, API, manual, and basic E2E testing. Documented defects, supported debugging, and verified fixes.",
  },
  {
    role: "Web Development Training",
    company: "CTI",
    date: "2025 – 2026",
    description:
      "Intensive training in modern web technologies. Achieved A+ in Frontend, React, Next.js, and Backend modules.",
  },
];
