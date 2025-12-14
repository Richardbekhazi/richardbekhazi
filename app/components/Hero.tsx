"use client";
import { motion } from "framer-motion";
import { hero, siteConfig } from "../../lib/data";

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 max-w-4xl"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium tracking-wide text-blue-900 bg-blue-50 rounded-full border border-blue-100">
          {hero.badge}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight text-slate-900">
          {hero.heading}
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
          {hero.subheading}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
          >
            {hero.primaryCta}
          </a>
          <a
            href="/Richard_Bekhazi_Resume_2024.pdf" 
            target="_blank"
            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-lg hover:bg-slate-50 transition-colors"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </motion.div>
    </section>
  );
};