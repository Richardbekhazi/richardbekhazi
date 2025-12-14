"use client";
import { motion } from "framer-motion";
import { experience } from "../../lib/data";

export const Experience = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair font-bold mb-16 text-slate-900"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-16 border-l-2 border-slate-100 pl-8 md:pl-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-white border-4 border-slate-900" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{job.role}</h3>
                <span className="text-slate-500 font-medium font-mono text-sm">{job.period}</span>
              </div>
              
              <h4 className="text-lg text-blue-800 font-medium mb-4">{job.company}</h4>
              <p className="text-slate-600 mb-6 italic">{job.description}</p>
              
              <ul className="space-y-3">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex items-start text-slate-700">
                    <span className="mr-3 text-blue-500 mt-1.5">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};