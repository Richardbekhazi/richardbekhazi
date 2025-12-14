"use client";
import { motion } from "framer-motion";
import { experience } from  "../../lib/data";

export const Experience = () => {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-playfair font-bold mb-20 text-slate-100 border-b border-slate-800 pb-8"
        >
          Professional Trajectory
        </motion.h2>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 md:pl-12 relative">
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950 hidden md:block group-hover:scale-150 transition-transform duration-300" />

                <div className="text-sm font-mono text-slate-500 uppercase tracking-wider pt-2">
                  {job.period}
                </div>

                <div className="glass-card p-8 rounded-2xl hover:bg-white/[0.03] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-100">{job.role}</h3>
                    <h4 className="text-blue-400 font-medium mt-1 md:mt-0">{job.company}</h4>
                  </div>
                  
                  <p className="text-slate-300 mb-6 italic font-light text-lg">"{job.description}"</p>
                  
                  <ul className="space-y-3">
                    {job.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                        <span className="mr-3 text-blue-500/50 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};