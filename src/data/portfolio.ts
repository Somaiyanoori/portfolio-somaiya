import { Database, Globe, Layout, Server, Shield, TestTube } from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend Mastery",
    icon: Layout,
    items: [
      "React 19",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "i18next (RTL/LTR)",
    ],
  },
  {
    category: "Backend & Infrastructure",
    icon: Server,
    items: ["Node.js", "Express.js", "Next.js API Routes", "REST APIs", "Socket.io", "Cloudinary"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["PostgreSQL", "Prisma ORM", "Supabase", "Firebase", "Redis"],
  },
  {
    category: "Security by Design",
    icon: Shield,
    items: [
      "JWT + Refresh Tokens",
      "HttpOnly Cookies",
      "RBAC",
      "RLS",
      "bcrypt",
      "Rate Limiting",
      "Helmet",
      "Clerk / OAuth",
    ],
  },
  {
    category: "Testing & QA",
    icon: TestTube,
    items: [
      "Vitest",
      "Jest",
      "Playwright",
      "React Testing Library",
      "Supertest",
      "API Testing",
      "Manual QA",
    ],
  },
  {
    category: "DevOps & Tooling",
    icon: Globe,
    items: [
      "Git / GitHub",
      "GitHub Actions CI/CD",
      "Docker",
      "Docker Compose",
      "Postman",
      "Swagger/OpenAPI",
      "Vercel",
      "Render",
    ],
  },
];

export const PRINCIPLES = [
  {
    title: "Clean & Type-Safe",
    description: "Self-documenting code using strict TypeScript and Zod validation schemas.",
  },
  {
    title: "Security by Design",
    description:
      "Row Level Security, JWT refresh token rotation, bcrypt hashing, and rate limiting.",
  },
  {
    title: "Comprehensive QA",
    description: "Unit, Component, API, and E2E automated testing integrated into CI/CD pipelines.",
  },
  {
    title: "Accessible UX/UI",
    description: "Mobile-first, performant interfaces with full RTL/LTR localization support.",
  },
];

export const PROJECTS = [
  {
    title: "KaarYab Afghanistan",
    tagline: "Centralized Opportunity Platform & Interactive CV Builder for Afghan Youth",
    type: "Live Production / Open Source",
    description:
      "Full-stack Next.js platform aggregating 7 opportunity categories with multi-criteria filtering, live deadline countdowns, real-time analytics, and an in-app multi-template CV generator with print-ready PDF export.",
    challenge:
      "Employment, scholarship, and skill-building opportunities in Afghanistan are fragmented. Candidates lack one trusted place to discover verified listings and build professional CVs.",
    solution:
      "Built a secure opportunity platform with auth, search/filter, bookmarks, profiles, CV builder, Supabase RLS, and automated quality gates.",
    highlights: [
      "172 automated tests (84 Unit, 70 Component, 18 Playwright E2E) — 100% pass rate",
      "Supabase Row Level Security so users only modify their own data",
      "GitHub Actions CI for lint, type-check, and tests before Vercel deploy",
      "RTL/LTR localization for Dari and English",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Clerk",
      "Vitest",
      "Playwright",
      "Vercel",
    ],
    github: "https://github.com/Somaiyanoori/kaaryab-afghanistan",
    live: "https://kaaryab-afghanistan-seven.vercel.app/",
    featured: true,
  },
  {
    title: "E-Government Citizen Services Portal",
    tagline: "Enterprise Digital Governance for Municipal Request Processing",
    type: "Production Architecture System",
    description:
      "Multi-role digital governance system for Citizens, Officers, Department Heads, and Admins with real-time request tracking, audit logs, and digital submission workflows.",
    challenge:
      "Paper-based citizen services are slow, lack transparency, and have weak role isolation between citizens and administrators.",
    solution:
      "Engineered a secure multi-role portal with JWT auth, RBAC, Redis caching, Socket.io updates, Dockerized services, and OpenAPI docs.",
    highlights: [
      "JWT + HttpOnly cookies, refresh token rotation, RBAC, rate limiting",
      "Socket.io real-time status updates on citizen dashboards",
      "Docker Compose with PostgreSQL, Redis, and Express services",
      "Swagger/OpenAPI docs and production deployment checklist",
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
    github: "https://github.com/Somaiyanoori/egov_portal",
    live: "https://github.com/Somaiyanoori",
    featured: true,
  },
  {
    title: "Taply — Design Feedback Platform",
    tagline: "Visual feedback APIs with secure uploads and validation",
    type: "Backend System",
    description:
      "Backend APIs for design uploads and coordinate-based visual feedback with Firebase Auth, Firestore, Cloudinary, Zod validation, and rate limiting.",
    challenge:
      "Design review workflows need precise feedback on uploaded assets with secure auth and validated API contracts.",
    solution:
      "Built typed API routes with auth, media processing, schema validation, and abuse protection.",
    highlights: [
      "Firebase Auth + Firestore integration",
      "Cloudinary image storage pipeline",
      "Zod server-side validation",
      "API rate limiting and test coverage with Jest",
    ],
    tech: ["Next.js 15 API", "Firebase", "Cloudinary", "Zod", "Jest", "Vercel"],
    github: "https://github.com/Mlue-Code/-Taply",
    live: "https://taply-rust.vercel.app//",
    featured: false,
  },
  {
    title: "Product Store — Multi-State Architecture",
    tagline: "Architectural study: React Query vs Redux Toolkit vs Context API",
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
    github: "https://github.com/Somaiyanoori/product-store",
    live: "https://project-zyti2.vercel.app/",
    featured: false,
  },
];

export const EXPERIENCE = [
  {
    role: "Quality Assurance & Web Developer",
    company: "Code To Inspire (CTI) — Remote, Herat",
    date: "Nov 2025 – Feb 2026",
    description:
      "Reduced production regression bugs by 30% through automated, manual, and functional testing. Led bug reporting/documentation across teams. Executed 50+ manual test cases and validated API contracts with Postman and Vitest. Bridged feature development and quality engineering.",
  },
  {
    role: "Software Development Training",
    company: "Code To Inspire (CTI)",
    date: "2024 – 2026",
    description:
      "Straight A+ across Frontend, React, Next.js, and Backend tracks. Built modern full-stack apps with testing, Docker, and production-minded architecture.",
  },
];

export const ACHIEVEMENTS = [
  "Frontend Development Track — A+",
  "React Development Track — A+",
  "Next.js Development Track — A+",
  "Backend Development Track — A+",
  "English Language Certification — A+",
];
