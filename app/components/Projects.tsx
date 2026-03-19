"use client";
import { motion } from "framer-motion";
import { projects } from "../../lib/data";
import { ExternalLink } from "lucide-react";

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", tag: "bg-blue-500/10 text-blue-300" },
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", tag: "bg-indigo-500/10 text-indigo-300" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", tag: "bg-emerald-500/10 text-emerald-300" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", tag: "bg-amber-500/10 text-amber-300" },
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-slate-100">
            Featured Work
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Systems I&apos;ve architected, deployed, and led, from concept through production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorMap[project.color] || colorMap.blue;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group glass-card rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 border ${colors.border} hover:border-opacity-50 hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-xs font-medium ${colors.text} opacity-70`}>
                    {project.org}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${colors.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
