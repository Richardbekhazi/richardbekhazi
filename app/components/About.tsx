"use client";
import { motion } from "framer-motion";
import { about } from "../../lib/data";

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">
            {about.heading}
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-slate-800 font-medium whitespace-pre-line">
            {about.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};