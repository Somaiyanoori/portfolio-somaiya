import { Database, Globe, Layout, Server, Shield, TestTube } from "lucide-react";

export const SKILLS = [
  {
    category: "Frontend",
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
    category: "Backend & APIs",
    icon: Server,
    items: [
      "Node.js",
      "Express.js",
      "Next.js API Routes",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "Zod Validation",
      "Rate Limiting",
    ],
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    items: ["PostgreSQL", "Prisma ORM", "Supabase", "Firebase / Firestore", "Redis", "Cloudinary"],
  },
  {
    category: "Auth & Security",
    icon: Shield,
    items: [
      "JWT",
      "HttpOnly Cookies",
      "RBAC",
      "Clerk / OAuth",
      "Input Validation",
      "Secure API Design",
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
      "API Testing",
      "Manual QA",
      "Defect Reporting",
    ],
  },
  {
    category: "Tooling & Deployment",
    icon: Globe,
    items: [
      "Git / GitHub",
      "GitHub Actions CI/CD",
      "Docker",
      "Postman",
      "Swagger/OpenAPI",
      "Vercel",
      "Render",
    ],
  },
];

export const PRINCIPLES = [
  {
    title: "End-to-End Ownership",
    description:
      "I design UI, APIs, data models, and validation together so features ship as complete systems — not disconnected parts.",
  },
  {
    title: "Type-Safe by Default",
    description:
      "Strict TypeScript and Zod on both client and server for predictable contracts and fewer production bugs.",
  },
  {
    title: "API & Database Aware UI",
    description:
      "Frontend that respects auth, caching, error states, and real backend constraints from day one.",
  },
  {
    title: "Quality-First Delivery",
    description:
      "Unit, component, API, and E2E tests plus clear defect verification before every release.",
  },
];

export const PROJECTS = [
  {
    title: "KaarYab Afghanistan",
    tagline: "Full-stack opportunity platform with auth, filtering, profiles & CV builder",
    type: "Live Production / Open Source",
    description:
      "Full-stack Next.js platform aggregating opportunity categories with multi-criteria filtering, deadline countdowns, and an in-app multi-template CV generator exporting print-ready PDFs.",
    challenge:
      "Employment, scholarship, and skill-building opportunities in Afghanistan are fragmented. Users need a fast, trusted product with real auth, data, and a working CV builder.",
    solution:
      "Built the full product surface: React/Next.js UI, Supabase auth + RLS data layer, type-safe forms, bookmarks/profiles, and CV builder workflows — all covered by automated tests.",
    highlights: [
      "Full-stack Next.js with Supabase auth & RLS data layer",
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
    tagline: "Full-stack multi-role governance system with secure APIs & audit trails",
    type: "Production Architecture System",
    description:
      "Multi-role digital governance system for Citizens, Officers, Department Heads, and Admins with real-time updates and audit trails.",
    challenge:
      "Paper-based citizen services are slow, lack transparency, and require clear role separation across UI, APIs, and data.",
    solution:
      "Implemented role-aware UI plus JWT/RBAC APIs, Prisma/PostgreSQL data models, Socket.io real-time updates, Redis-backed services, and Dockerized deployment.",
    highlights: [
      "Role-based UI + backend (Citizen / Officer / Admin) with route protection",
      "JWT + HttpOnly cookies auth flow across client and server",
      "Real-time updates via Socket.io",
      "Docker Compose + PostgreSQL + Redis full-stack architecture",
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
    tagline: "Backend APIs for uploads, auth, validation & visual feedback",
    type: "Backend System",
    description:
      "Backend APIs for design uploads and visual feedback with Firebase Auth, Firestore, Cloudinary, Zod validation, and rate limiting.",
    challenge:
      "Design review workflows need precise, secure feedback on uploaded assets with clear API contracts and abuse protection.",
    solution:
      "Built typed API routes with auth, media processing, schema validation, and rate limiting — plus automated API tests.",
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
    challenge:
      "Teams often mix server state and client state, causing complexity and bugs that hurt maintainability.",
    solution:
      "A clear architecture demo showing the right state tool for each concern in real full-stack apps.",
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
      "Designed and executed manual, integration, API, and E2E test cases for web application features.",
      "Identified and documented defects with clear reproduction steps and detailed reports.",
      "Performed usability and UI testing across frontend and backend flows.",
      "Reviewed implemented components and helped fix UI/API issues when needed.",
      "Collaborated with developers to verify fixes and ensure features met requirements.",
      "Prepared QA reports and supported debugging throughout the release process.",
    ],
  },
  {
    role: "Full-Stack Software Development Training",
    company: "Code to Inspire (CTI)",
    employment: "Training Program",
    date: "2025 – 2026",
    description: [
      "Completed full-stack training with A+ grades in Frontend, React, Next.js, and Backend.",
      "Built modern web applications using React, Next.js, TypeScript, Node.js, Express, and PostgreSQL.",
      "Practiced REST APIs, authentication, database modeling, testing workflows, and cloud deployment.",
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
