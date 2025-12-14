"use client";
import { motion } from "framer-motion";
import { skills } from "../../lib/data";

export const Skills = () => {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Subtle background highlight for this section */}
      <div className="absolute inset-0 bg-blue-900/5 -skew-y-3 transform origin-top-left z-[-1]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold mb-6 text-slate-100">Core Competencies</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-slate-100">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-400 text-sm pb-2 border-b border-white/5 last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};