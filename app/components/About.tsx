"use client";
import { motion } from "framer-motion";
import { about, siteConfig } from "../../lib/data";

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-start"
        >
          {/* Left accent */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-playfair font-bold shadow-lg shadow-blue-500/20">
              R
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-blue-500/50 to-transparent" />
          </div>

          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-100 mb-8">
              {about.heading}
            </h2>
            <div className="text-lg leading-relaxed text-slate-300 whitespace-pre-line">
              {about.content}
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>📍 {siteConfig.location}</span>
              <span>🌐 English · Arabic · French</span>
              <span>🧠 Mensa International</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};