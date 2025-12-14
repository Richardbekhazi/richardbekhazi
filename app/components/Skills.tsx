"use client";
import { motion } from "framer-motion";
import { skills } from "../../lib/data";

export const Skills = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-playfair font-bold mb-4">Core Competencies</h2>
          <p className="text-slate-400 max-w-2xl">
            A hybrid skillset combining executive management capabilities with deep engineering expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-6 text-blue-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
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