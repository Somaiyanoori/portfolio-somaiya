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
  title: "Somaiya Noori | Frontend Developer",
  description:
    "Frontend Developer specializing in React 19, Next.js, TypeScript, and high-performance UI — with strong Node.js/PostgreSQL fundamentals and QA experience.",
  keywords: [
    "Somaiya Noori",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "UI Engineer",
    "QA Tester",
    "Herat Afghanistan",
    "Remote Frontend",
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
