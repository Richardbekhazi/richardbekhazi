"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hero, stats } from "../../lib/data";
import { ArrowRight, Download } from "lucide-react";

const useTypingEffect = (words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = isDeleting
      ? deletingSpeed
      : text === currentWord
      ? pauseDuration
      : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(isDeleting ? currentWord.slice(0, text.length - 1) : currentWord.slice(0, text.length + 1));
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
};

export const Hero = () => {
  const typedText = useTypingEffect(hero.typingWords);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8 max-w-5xl"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-medium tracking-widest uppercase text-blue-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {hero.badge}
        </div>

        {/* Headline with Typing Effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-[1.05] tracking-tight">
          <span className="text-slate-100">{hero.heading}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            {hero.headingHighlight}
          </span>
        </h1>

        {/* Typed Subtitle */}
        <div className="h-10 flex items-center">
          <span className="text-xl md:text-2xl text-blue-400 font-mono font-medium">
            {typedText}
            <span className="animate-blink">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          {hero.subheading}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative">{hero.primaryCta}</span>
            <ArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Richard%20Bekhazi%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-card text-slate-200 font-medium rounded-lg hover:bg-white/5 transition-all hover:border-white/20"
          >
            <Download size={18} />
            {hero.secondaryCta}
          </a>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
      >
        {stats.map((stat, index) => (
          <div key={index} className="group">
            <div className="text-3xl md:text-4xl font-bold text-slate-100 font-playfair group-hover:text-blue-400 transition-colors">
              {stat.value}
            </div>
            <div className="text-sm text-slate-500 mt-1 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};