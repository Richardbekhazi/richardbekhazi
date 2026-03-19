"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../lib/data";
import { Linkedin, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-slate-100">
            Let&apos;s Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"> Together.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto">
            I&apos;m always interested in meaningful work with great teams. Let&apos;s see if there&apos;s a fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="glass-card rounded-2xl p-12 text-center">
                <CheckCircle size={48} className="mx-auto text-emerald-400 mb-4" />
                <h3 className="text-2xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <input type="hidden" name="access_key" value="6c86435b-6ad6-48c7-b284-bc10773324bb" />
                <input type="hidden" name="subject" value="New message from richardbekhazi.com" />
                <input type="hidden" name="from_name" value="Portfolio Contact Form" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Tell me about the role or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right side — links & info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Or reach out directly</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <span className="text-sm">linkedin.com/in/richardbekhazi</span>
                </a>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <MapPin size={18} />
                  </div>
                  <span className="text-sm">{siteConfig.location} • Global Remote Ready</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-slate-100 mb-3">What I bring to the table</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▹</span>8+ years leading engineering across 4 countries</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▹</span>AI/ML systems deployed in regulated environments</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▹</span>Fluent in English, French & Arabic</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">▹</span>Available remote or Ottawa-based</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};