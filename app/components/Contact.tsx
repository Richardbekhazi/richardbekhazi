"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../../lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-slate-100"
        >
          Ready to Scale?
        </motion.h2>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
          I am currently open to discussing Technical Program Management and Platform Strategy roles.
        </p>
        
        <div className="flex flex-col gap-6 items-center">
          <a 
            href={`mailto:${siteConfig.email}`}
            className="text-2xl md:text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-blue-500/30 hover:border-blue-400 pb-1"
          >
            {siteConfig.email}
          </a>
          
          <p className="text-slate-500 mt-4 text-sm uppercase tracking-widest">
            Based in {siteConfig.location} • Global Remote Ready
          </p>
        </div>
      </div>
    </section>
  );
};