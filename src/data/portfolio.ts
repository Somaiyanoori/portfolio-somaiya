import { Database, Globe, Layout, Server, Shield, TestTube } from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend Core",
    icon: Layout,
    items: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Responsive UI",
      "RTL/LTR (English, Dari)",
    ],
  },
  {
    category: "API Integration",
    icon: Server,
    items: ["REST APIs", "Node.js", "Express.js", "Next.js API Routes", "Supabase", "Firebase"],
  },
  {
    category: "Databases (Fundamentals)",
    icon: Database,
    items: ["PostgreSQL", "Prisma ORM", "Firestore", "Redis"],
  },
  {
    category: "Security-Aware Frontend",
    icon: Shield,
    items: ["JWT", "HttpOnly Cookies", "RBAC", "Zod Validation", "Clerk / OAuth"],
  },
  {
    category: "Testing & QA",
    icon: TestTube,
    items: ["Vitest", "Jest", "Playwright", "React Testing Library", "API Testing", "Manual QA"],
  },
  {
    category: "Tooling & Deployment",
    icon: Globe,
    items: ["Git / GitHub", "GitHub Actions CI/CD", "Docker", "Postman", "Vercel", "Render"],
  },
];

export const PRINCIPLES = [
  {
    title: "Clean & Type-Safe UI",
    description:
      "Component-driven, self-documenting code with strict TypeScript and Zod validation.",
  },
  {
    title: "Performance-First",
    description: "Fast rendering, code-splitting, image optimization, and lean bundles by default.",
  },
  {
    title: "API-Integrated Frontend",
    description:
      "Predictable state, resilient data fetching, and safe auth patterns with real backends.",
  },
  {
    title: "Accessible UX/UI",
    description: "Mobile-first, keyboard-friendly interfaces with RTL/LTR localization support.",
  },
];

export const PROJECTS = [
  {
    title: "KaarYab Afghanistan",
    tagline: "Frontend for a centralized opportunity platform & interactive CV builder",
    type: "Live Production / Open Source",
    description:
      "Full-stack Next.js platform aggregating opportunity categories with multi-criteria filtering, deadline countdowns, and an in-app multi-template CV generator exporting print-ready PDFs.",
    challenge:
      "Employment, scholarship, and skill-building opportunities in Afghanistan are fragmented. Users need a fast, trusted interface and a solid CV builder.",
    solution:
      "Designed a clean React UI with strong data fetching, filters, bookmarks, profiles, and CV builder. Integrated Supabase for auth and RLS-secured data.",
    highlights: [
      "Component-driven UI with Tailwind and Framer Motion",
      "Type-safe forms and validation with Zod",
      "Automated tests: 172 (84 Unit, 70 Component, 18 E2E) — 100% pass rate",
      "RTL/LTR localization for Dari and English",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Clerk", "Vitest", "Playwright"],
    github: "https://github.com/Somaiyanoori",
    live: "https://github.com/Somaiyanoori",
    featured: true,
  },
  {
    title: "E-Government Citizen Services Portal",
    tagline: "Frontend for a multi-role governance platform with secure API integration",
    type: "Production Architecture System",
    description:
      "Multi-role digital governance system for Citizens, Officers, Department Heads, and Admins with real-time updates and audit trails.",
    challenge:
      "Paper-based citizen services are slow, lack transparency, and need clear role separation in the UI.",
    solution:
      "Built role-aware React interfaces integrated with JWT/RBAC APIs, real-time Socket.io status updates, and Dockerized backend services.",
    highlights: [
      "Role-based UI (Citizen / Officer / Admin) with route protection",
      "JWT + HttpOnly cookies handling from the frontend",
      "Real-time updates via Socket.io",
      "Docker Compose + PostgreSQL + Redis backend integration",
    ],
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Docker",
    ],
    github: "https://github.com/Somaiyanoori",
    live: "https://github.com/Somaiyanoori",
    featured: true,
  },
  {
    title: "Taply — Design Feedback Platform",
    tagline: "Backend APIs for uploads and coordinate-based visual feedback",
    type: "Backend System",
    description:
      "Backend APIs for design uploads and visual feedback with Firebase Auth, Firestore, Cloudinary, Zod validation, and rate limiting.",
    challenge:
      "Design review workflows need precise, secure feedback on uploaded assets with clear API contracts.",
    solution:
      "Built typed API routes with auth, media processing, schema validation, and abuse protection.",
    highlights: [
      "Firebase Auth + Firestore integration",
      "Cloudinary image storage pipeline",
      "Zod server-side validation",
      "API rate limiting and test coverage with Jest",
    ],
    tech: ["Next.js 15 API", "Firebase", "Cloudinary", "Zod", "Jest", "Vercel"],
    github: "https://github.com/Somaiyanoori",
    live: "https://github.com/Somaiyanoori",
    featured: false,
  },
  {
    title: "Product Store — Multi-State Architecture",
    tagline: "Architecture study: React Query vs Redux Toolkit vs Context API",
    type: "Technical Demo",
    description:
      "Demonstrates separation of concerns: React Query for server-state caching, Redux Toolkit for complex cart mutations, and Context API for global UI preferences.",
    challenge: "Teams often mix server state and client state, causing complexity and bugs.",
    solution: "Clear architecture demo showing the right state tool for each concern.",
    highlights: [
      "React Query for server-state caching",
      "Redux Toolkit for cart mutations",
      "Context + useReducer for UI preferences",
      "Clean separation of concerns in React",
    ],
    tech: ["React", "Redux Toolkit", "TanStack Query", "Context API", "Tailwind CSS"],
    github: "https://github.com/Somaiyanoori",
    live: "https://github.com/Somaiyanoori",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "QA Tester",
    company: "Code to Inspire (CTI)",
    employment: "Full-time · Remote",
    date: "Nov 2025 – Feb 2026",
    description: [
      "Tested new features, functionalities, and integrations for an online educational platform.",
      "Created and executed test cases based on project requirements and development milestones.",
      "Identified and documented bugs with clear reproduction steps and detailed reports.",
      "Performed usability and UI testing and reported visual and functional issues.",
      "Reviewed implemented components and fixed UI/component issues when needed.",
      "Collaborated with developers to verify fixes and ensure features met expected requirements.",
      "Prepared QA reports and supported debugging throughout the development process.",
    ],
  },
  {
    role: "Software Development Training",
    company: "Code to Inspire (CTI)",
    employment: "Training Program",
    date: "2025 – 2026",
    description: [
      "Completed full-stack training with A+ grades in Frontend, React, Next.js, and Backend.",
      "Built modern web applications using React, Next.js, TypeScript, Node.js, and PostgreSQL.",
      "Practiced REST APIs, authentication, testing workflows, and cloud deployment fundamentals.",
    ],
  },
];

export const ACHIEVEMENTS = [
  "Frontend Development Track — A+",
  "React Development Track — A+",
  "Next.js Development Track — A+",
  "Backend Development Track — A+",
  "English Language Certification — A+",
];
