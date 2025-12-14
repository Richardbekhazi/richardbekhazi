"use client";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-accent-blue selection:text-white">
      {/* This creates the premium background effect */}
      <div className="ambient-glow" />
      
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800/50">
        <p>&copy; {new Date().getFullYear()} Richard Bekhazi. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}