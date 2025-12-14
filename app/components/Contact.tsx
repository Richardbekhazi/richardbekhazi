"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../../lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-playfair font-bold mb-6 text-slate-900"
        >
          Ready to Scale?
        </motion.h2>
        <p className="text-slate-600 mb-8 text-lg">
          I am currently open to discussing Technical Program Management and Platform Strategy roles.
        </p>
        
        <div className="flex flex-col gap-4 items-center">
          <a 
            href={`mailto:${siteConfig.email}`}
            className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors border-b-2 border-blue-900/20 hover:border-blue-700"
          >
            {siteConfig.email}
          </a>
          
          <p className="text-slate-400 mt-4 text-sm">
            Based in {siteConfig.location} • Global Remote Ready
          </p>
        </div>
      </div>
    </section>
  );
};