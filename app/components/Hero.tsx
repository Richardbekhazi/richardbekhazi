"use client";
import { motion } from "framer-motion";
import { hero } from "../../lib/data";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // sophisticated bezier curve
        className="space-y-8 max-w-5xl"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium tracking-widest uppercase text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {hero.badge}
        </div>
        
        {/* Massive Headline with Gradient Text */}
        <h1 className="text-5xl md:text-8xl font-playfair font-bold leading-[1.1] tracking-tight">
          <span className="text-slate-100">Technical Program</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Leadership & Strategy
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-light">
          {hero.subheading}
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href="#contact"
            className="group relative px-8 py-4 bg-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative">{hero.primaryCta}</span>
          </a>
          <a
            href="/Richard_Bekhazi_Resume_2024.pdf" 
            target="_blank"
            className="px-8 py-4 glass-card text-slate-200 font-medium rounded-lg hover:bg-white/5 transition-all hover:border-white/20"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </motion.div>
    </section>
  );
};