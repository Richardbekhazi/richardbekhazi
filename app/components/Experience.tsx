"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import createGlobe from "cobe";
import { experience } from "../../lib/data";
import { MapPin, Briefcase } from "lucide-react";

/* Country fill coordinates: many small markers to simulate highlighting the whole country */
const COUNTRY_FILL: Record<string, [number, number][]> = {
  Lebanon: [
    [34.2, 35.8], [34.0, 36.0], [33.85, 35.86], [33.6, 35.6], [33.4, 35.5],
    [34.4, 36.1], [33.9, 35.5], [33.7, 35.9],
  ],
  Canada: [
    // Major cities spread
    [45.4, -75.7], [43.7, -79.4], [45.5, -73.6], [49.3, -123.1], [51.0, -114.1],
    [53.5, -113.5], [52.1, -106.7], [49.9, -97.1], [46.8, -71.2], [44.6, -63.6],
    [47.6, -52.7], [62.5, -114.4], [60.7, -135.1], [63.7, -68.5],
    // Fill coverage
    [56.0, -120.0], [54.0, -100.0], [48.0, -85.0], [50.0, -95.0],
    [58.0, -110.0], [55.0, -80.0], [46.0, -67.0], [52.0, -75.0],
    [60.0, -95.0], [65.0, -120.0], [70.0, -100.0], [57.0, -105.0],
    [50.0, -60.0], [55.0, -125.0], [48.0, -90.0], [68.0, -90.0],
    [72.0, -110.0], [52.0, -120.0], [47.0, -80.0], [58.0, -75.0],
    [53.0, -60.0], [60.0, -130.0], [64.0, -100.0], [44.0, -70.0],
  ],
  "South Africa": [
    [-33.9, 18.4], [-26.2, 28.0], [-29.9, 31.0], [-25.7, 28.2],
    [-33.0, 27.9], [-30.0, 25.0], [-28.0, 22.0], [-32.0, 22.0],
    [-27.0, 30.0], [-24.0, 29.0], [-31.0, 29.0], [-26.0, 24.0],
    [-29.0, 27.0], [-34.0, 20.0], [-25.0, 26.0], [-30.5, 23.0],
    [-27.5, 26.0], [-33.5, 25.5],
  ],
  "Saudi Arabia": [
    [24.7, 46.7], [21.5, 39.2], [26.4, 50.1], [28.0, 44.0],
    [20.0, 42.0], [18.0, 44.0], [22.0, 48.0], [25.0, 42.0],
    [30.0, 38.0], [23.0, 50.0], [27.0, 48.0], [19.0, 41.0],
    [24.0, 44.0], [26.0, 44.0], [17.5, 43.0], [29.0, 40.0],
    [21.0, 45.0], [23.5, 47.0], [25.0, 38.5], [20.5, 40.0],
  ],
  UAE: [
    [24.0, 54.0], [25.2, 55.3], [24.5, 54.5], [23.5, 53.5],
    [25.4, 55.5], [24.2, 55.8], [23.8, 53.0], [24.8, 56.0],
    [23.6, 54.8], [24.3, 53.2],
  ],
  Qatar: [
    [25.3, 51.2], [25.5, 51.3], [25.0, 51.1], [25.8, 51.4],
    [25.1, 51.5], [25.6, 51.0], [26.0, 51.2],
  ],
};

function shortAngleDist(from: number, to: number) {
  const max = Math.PI * 2;
  const da = ((to - from) % max + max) % max;
  return da > Math.PI ? da - max : da;
}

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const focusRef = useRef({ lat: 28, lng: 44 });
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const dragDelta = useRef({ x: 0, y: 0 });
  const dragCooldown = useRef(0);
  const [focusIndex, setFocusIndex] = useState(0);
  const [maxRevealed, setMaxRevealed] = useState(0);
  const [globeVisible, setGlobeVisible] = useState(false);

  // Chronological order (earliest first) for storytelling
  const timeline = useMemo(() => [...experience].reverse(), []);

  const handleCardInView = useCallback((index: number) => {
    setFocusIndex(index);
    setMaxRevealed((prev) => Math.max(prev, index));
  }, []);

  // Update focus coordinates when active card changes
  useEffect(() => {
    const locs = timeline[focusIndex]?.locations;
    if (locs?.length) {
      const lat = locs.reduce((s: number, l: { lat: number }) => s + l.lat, 0) / locs.length;
      const lng = locs.reduce((s: number, l: { lng: number }) => s + l.lng, 0) / locs.length;
      focusRef.current = { lat, lng };
    }
  }, [focusIndex, timeline]);

  // Progressive markers: accumulate countries as user scrolls
  const markers = useMemo(() => {
    const seen = new Set<string>();
    const result: { location: [number, number]; size: number }[] = [];
    for (let i = 0; i <= maxRevealed; i++) {
      for (const loc of timeline[i]?.locations || []) {
        if (!seen.has(loc.name)) {
          seen.add(loc.name);
          const fill = COUNTRY_FILL[loc.name];
          if (fill) {
            for (const pt of fill) {
              result.push({ location: pt, size: 0.04 });
            }
          }
        }
      }
    }
    return result;
  }, [maxRevealed, timeline]);

  // Progressive country names for tags
  const countries = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (let i = 0; i <= maxRevealed; i++) {
      for (const loc of timeline[i]?.locations || []) {
        if (!seen.has(loc.name)) {
          seen.add(loc.name);
          result.push(loc.name);
        }
      }
    }
    return result;
  }, [maxRevealed, timeline]);

  // Lazy-load globe when section approaches viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGlobeVisible(true); },
      { rootMargin: "200px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Globe rendering with cobe
  const markerKey = markers.map((m) => m.location.join(",")).join("|");

  useEffect(() => {
    if (!globeVisible || !canvasRef.current) return;
    let width = canvasRef.current.offsetWidth;
    let animationId: number;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width: width * 2,
      height: width * 2,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1,
      diffuse: 3,
      mapSamples: 40000,
      mapBrightness: 6,
      baseColor: [0.12, 0.14, 0.25],
      markerColor: [0.4, 0.6, 1.0],
      glowColor: [0.08, 0.08, 0.25],
      markers,
    });

    const animate = () => {
      const isDragging = pointerStart.current !== null;
      const inCooldown = Date.now() < dragCooldown.current;

      if (isDragging) {
        // Apply drag deltas directly
        phiRef.current += dragDelta.current.x;
        thetaRef.current -= dragDelta.current.y;
        // Clamp theta to avoid flipping upside down
        thetaRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, thetaRef.current));
        dragDelta.current = { x: 0, y: 0 };
      } else if (!inCooldown) {
        // Auto-rotate toward focused country
        const targetPhi = -focusRef.current.lng * (Math.PI / 180);
        const targetTheta = focusRef.current.lat * (Math.PI / 180) * 0.6;
        phiRef.current += shortAngleDist(phiRef.current, targetPhi) * 0.025;
        thetaRef.current += (targetTheta - thetaRef.current) * 0.025;
        phiRef.current += 0.002;
      } else {
        // In cooldown: just slow idle rotation
        phiRef.current += 0.002;
      }

      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width: width * 2,
        height: width * 2,
      });

      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [markerKey, globeVisible]);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-100 mb-4">
            Global Journey
          </h2>
          <p className="text-slate-400 text-lg">
            From Beirut to Ottawa, building systems across 4 countries and 3 continents.
          </p>
        </motion.div>

        {/* Globe + Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: Globe (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="w-full aspect-square bg-slate-950 rounded-full cursor-grab active:cursor-grabbing"
                style={{ contain: "layout paint size" }}
                onPointerDown={(e) => {
                  pointerStart.current = { x: e.clientX, y: e.clientY };
                  canvasRef.current!.style.cursor = "grabbing";
                }}
                onPointerUp={() => {
                  pointerStart.current = null;
                  dragCooldown.current = Date.now() + 2000;
                  if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerOut={() => {
                  if (pointerStart.current) {
                    pointerStart.current = null;
                    dragCooldown.current = Date.now() + 2000;
                  }
                  if (canvasRef.current) canvasRef.current.style.cursor = "grab";
                }}
                onPointerMove={(e) => {
                  if (pointerStart.current) {
                    dragDelta.current = {
                      x: (e.clientX - pointerStart.current.x) * 0.005,
                      y: (e.clientY - pointerStart.current.y) * 0.005,
                    };
                    pointerStart.current = { x: e.clientX, y: e.clientY };
                  }
                }}
              />
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Progressive country tags */}
            <div className="flex flex-wrap gap-2 justify-center min-h-[2rem]">
              <AnimatePresence>
                {countries.map((name) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    <MapPin className="w-3 h-3" />
                    {name}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>

            <p className="text-center text-sm text-slate-500">
              {countries.length} {countries.length === 1 ? "country" : "countries"} explored
            </p>
          </div>

          {/* Right: Scrollable Timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((job, index) => (
                <TimelineCard
                  key={index}
                  job={job}
                  index={index}
                  isActive={index === focusIndex}
                  isLatest={index === timeline.length - 1}
                  onInView={handleCardInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Timeline Card ─── */

interface TimelineCardProps {
  job: (typeof experience)[number];
  index: number;
  isActive: boolean;
  isLatest: boolean;
  onInView: (index: number) => void;
}

function TimelineCard({ job, index, isActive, isLatest, onInView }: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onInView(index); },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, onInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5 }}
      className="relative lg:pl-14"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-3 top-10 w-5 h-5 rounded-full border-2 transition-all duration-500 hidden lg:flex items-center justify-center ${
          isActive
            ? "bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/50 scale-110"
            : "bg-slate-900 border-slate-700"
        }`}
      >
        {isActive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
      </div>

      <div
        className={`rounded-2xl p-8 transition-all duration-500 border backdrop-blur-sm ${
          isActive
            ? "bg-white/[0.04] border-blue-500/30 shadow-xl shadow-blue-500/5"
            : "bg-white/[0.02] border-white/[0.04] opacity-60 hover:opacity-80"
        }`}
      >
        {/* Period + badge */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span
            className={`text-xs font-mono px-3 py-1 rounded-full ${
              isActive
                ? "text-blue-300 bg-blue-500/15 border border-blue-500/30"
                : "text-slate-500 bg-slate-800/50"
            }`}
          >
            {job.period}
          </span>
          {isLatest && (
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Most Recent
            </span>
          )}
        </div>

        {/* Role & Company */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1">{job.role}</h3>
        <h4 className="text-blue-400 font-medium mb-4 flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {job.company}
        </h4>

        {/* Description */}
        <p className="text-slate-300 mb-5 italic font-light text-lg leading-relaxed">
          &ldquo;{job.description}&rdquo;
        </p>

        {/* Highlights */}
        <ul className="space-y-2">
          {job.highlights.map((item, i) => (
            <li
              key={i}
              className={`flex items-start text-sm leading-relaxed transition-colors duration-300 ${
                isActive ? "text-slate-300" : "text-slate-500"
              }`}
            >
              <span className={`mr-3 mt-1 transition-colors duration-300 ${
                isActive ? "text-blue-400" : "text-slate-700"
              }`}>▹</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Location pins */}
        {job.locations && (
          <div className="flex flex-wrap gap-3 mt-5 pt-4 border-t border-slate-800/50">
            {job.locations.map((loc: { name: string }, i: number) => (
              <span key={i} className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {loc.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}