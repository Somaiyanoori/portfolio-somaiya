import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Somaiya Noori | Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in React, Next.js, TypeScript, Node.js, PostgreSQL, and QA — building end-to-end web applications with strong testing practices.",
  keywords: [
    "Somaiya Noori",
    "Full-Stack Web Developer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "QA Specialist",
    "Herat Afghanistan",
    "Remote Full-Stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-foreground font-sans antialiased selection:bg-[#FF2D78] selection:text-white`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
