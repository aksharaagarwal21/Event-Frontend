import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Clock,
  Code,
  Coffee,
  Zap,
  Flag,
  Terminal,
  Cpu,
  Database,
} from "lucide-react";

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const events = [
    {
      time: "08:30 AM",
      title: "SYSTEM INITIALIZATION",
      desc: "Registration & Kit Distribution. Secure your entry credentials.",
      icon: Terminal,
      color: "text-toxic-light",
      glow: "shadow-toxic-light/50",
      border: "border-toxic-light/30",
    },
    {
      time: "09:30 AM",
      title: "KEYNOTE: THE ORIGIN",
      desc: "Speaker Session 1. Deep dive into the Java Ecosystem architecture.",
      icon: Zap,
      color: "text-blood",
      glow: "shadow-blood/50",
      border: "border-blood/30",
    },
    {
      time: "12:30 PM",
      title: "SYSTEM REFUEL",
      desc: "Lunch Break. Recharge your biological energy units.",
      icon: Coffee,
      color: "text-gold",
      glow: "shadow-gold/50",
      border: "border-gold/30",
    },
    {
      time: "01:30 PM",
      title: "PROTOCOL: CHAOS",
      desc: "Fun Activity. Engage in logical warfare and mini-games.",
      icon: Code,
      color: "text-ocean-cyan",
      glow: "shadow-ocean-cyan/50",
      border: "border-ocean-cyan/30",
    },
    {
      time: "02:30 PM",
      title: "ADVANCED WARFARE",
      desc: "Speaker Session 2. Mastering Full Stack Deployment patterns.",
      icon: Database,
      color: "text-blood",
      glow: "shadow-blood/50",
      border: "border-blood/30",
    },
    {
      time: "04:30 PM",
      title: "MISSION COMPLETE",
      desc: "Wrap Up & Certification. Claim your digital assets.",
      icon: Flag,
      color: "text-toxic-light",
      glow: "shadow-toxic-light/50",
      border: "border-toxic-light/30",
    },
  ];

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative min-h-screen py-24 bg-verse-void overflow-hidden flex flex-col items-center"
    >
      {/* --- ATMOSPHERE BACKGROUND --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-verse-dark via-verse-void to-verse-void opacity-60 pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

      {/* --- HEADER --- */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md"
        >
          <Cpu size={14} className="text-mist animate-spin-slow" />
          <span className="text-mist font-mono text-xs tracking-widest uppercase">
            Execution Log
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-horror text-white tracking-widest mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
            TIME
          </span>
          <span className="text-blood drop-shadow-[0_0_15px_rgba(177,44,62,0.8)]">
            LINE
          </span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-toxic-light to-transparent mx-auto" />
        <p className="mt-4 text-toxic-sage font-mono text-sm tracking-[0.3em] uppercase">
          Operation Date: 11 FEB 2026
        </p>
      </div>

      {/* --- TIMELINE CONTAINER --- */}
      <div className="relative max-w-5xl w-full px-4 md:px-0">
        {/* CENTER LASER LINE (Desktop) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div
            style={{ height }}
            className="w-full bg-gradient-to-b from-toxic-light via-blood to-toxic-light shadow-[0_0_20px_#36986A]"
          />
        </div>

        {/* EVENTS LIST */}
        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {events.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineItem
                key={index}
                event={event}
                isLeft={isLeft}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: TIMELINE CARD ---
const TimelineItem = ({ event, isLeft, index }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center w-full ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* 1. EMPTY SPACE (for layout balance) */}
      <div className="hidden md:block md:w-1/2" />

      {/* 2. CENTER NODE (The "Gem") */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`w-4 h-4 rounded-full border-2 ${event.border} bg-verse-void shadow-[0_0_15px_currentColor] ${event.color} z-10 relative`}
        >
          <div
            className={`absolute inset-0 rounded-full animate-ping opacity-75 ${event.color} bg-current`}
          />
        </motion.div>
      </div>

      {/* 3. CONTENT CARD */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? 50 : -50,
          rotateY: isLeft ? -15 : 15,
        }}
        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${
          isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <div
          className={`group relative p-6 bg-verse-dark/80 backdrop-blur-sm border ${event.border} rounded-xl overflow-hidden hover:bg-verse-card/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
        >
          {/* Glow Effect on Hover */}
          <div
            className={`absolute -inset-1 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${isLeft ? "from-transparent to-white" : "from-white to-transparent"}`}
          />

          {/* Time Badge */}
          <div
            className={`inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-md bg-black/50 border border-white/5 ${isLeft ? "md:flex-row-reverse" : ""}`}
          >
            <Clock size={14} className={event.color} />
            <span
              className={`font-mono text-xs ${event.color} tracking-widest`}
            >
              {event.time}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`text-xl md:text-2xl font-bold font-heading text-white mb-2 group-hover:${event.color} transition-colors`}
          >
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-400 font-mono leading-relaxed">
            {event.desc}
          </p>

          {/* Icon Watermark (Background) */}
          <event.icon
            className={`absolute -bottom-4 -right-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 ${event.color}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
