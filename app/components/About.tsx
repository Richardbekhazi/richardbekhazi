"use client";
import { motion } from "framer-motion";
import { about } from "../../lib/data";

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl" 
        >
          {/* Changed text color to blue-400 for visibility */}
          <h2 className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-6">
            {about.heading}
          </h2>
          {/* Changed text color to slate-200 */}
          <div className="text-lg md:text-xl leading-relaxed text-slate-200 font-medium whitespace-pre-line">
            {about.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};