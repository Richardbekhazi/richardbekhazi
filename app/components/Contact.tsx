"use client";
import { motion } from "framer-motion";
import { siteConfig } from "../../lib/data";
import { Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-slate-100">
            Let&apos;s Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> Together.</span>
          </h2>
          <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-lg mx-auto">
            Open to Technical Program Management, Platform Strategy, and AI Engineering Leadership roles — remote or Ottawa-based.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
            >
              <Mail size={20} />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 glass-card text-slate-200 font-medium rounded-xl hover:bg-white/5 transition-all hover:border-white/20"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>

          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={14} />
            <span>{siteConfig.location} • Global Remote Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};