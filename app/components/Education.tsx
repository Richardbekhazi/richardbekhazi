"use client";
import { motion } from "framer-motion";
import { education, awards } from "../../lib/data";

export const Education = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-playfair font-bold mb-12 text-slate-100">Education</h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pl-6 border-l border-slate-800"
              >
                <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                <p className="text-blue-400 font-medium mt-1">{edu.school}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-slate-500 text-sm font-mono">{edu.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-playfair font-bold mb-12 text-slate-100">Honors</h2>
          <div className="grid gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 glass-card rounded-lg"
              >
                <h3 className="font-bold text-slate-200">{award.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};