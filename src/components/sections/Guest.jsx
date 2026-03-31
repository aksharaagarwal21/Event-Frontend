import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { User, Terminal, Activity, Cpu, Radio } from "lucide-react";

// Placeholder - Replace with your actual speaker image
const SpeakerImage =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop";

const Guest = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Mouse Follow Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const speaker = {
    name: "comming soon",
    role: "comming soon",
    status: "OFFLINE",
    bio: "Subject identified as a visionary in Distributed Systems. \n> Accessing records... \n> 15+ years of architectural dominance. \n> Protocol: Integrating AI with Enterprise Java. \n> Mission: Deployed.",
  };

  return (
    <section
      ref={ref}
      id="guest"
      className="relative min-h-screen py-32 bg-verse-void overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 z-0">
        {/* Gritty Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 mix-blend-overlay"></div>

        {/* Floating "Horror" Words Background */}
        <div className="absolute top-10 left-10 opacity-5 select-none pointer-events-none">
          <h1 className="text-[15rem] font-horror text-blood leading-none">
            THE
          </h1>
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 select-none pointer-events-none text-right">
          <h1 className="text-[15rem] font-horror text-toxic-dark leading-none">
            VOICE
          </h1>
        </div>

        {/* Mouse Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(54, 152, 106, 0.15),
                transparent 80%
              )
            `,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4">
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-toxic-light/30 bg-toxic-dark/10 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-toxic-light opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-toxic-light"></span>
            </span>
            <span className="text-toxic-light font-mono text-xs tracking-widest uppercase">
              Signal Detected
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-horror text-mist tracking-wider mb-2">
            <span className="text-green-800 bg-clip-text bg-gradient-to-b from-mist to-gray-600">
              KEYNOTE
            </span>{" "}
            <span className="text-blood drop-shadow-[0_0_15px_rgba(177,44,62,0.8)]">
              ENTITY
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-blood to-transparent" />
        </div>

        {/* --- The "Card" (Glass Interface) --- */}
        <motion.div
          style={{ y }}
          className="group relative w-full bg-verse-dark/60 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Glowing Border Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blood via-transparent to-toxic-light opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="flex flex-col lg:flex-row relative z-10">
            {/* LEFT: Image Area */}
            <div className="lg:w-2/5 relative h-[500px] lg:h-auto overflow-hidden">
              {/* Image Filter: Grayscale initially, Color on hover */}
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />

              {/* Tech Overlay Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none" />

              {/* Name Badge Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-verse-void to-transparent p-8">
                <h3 className="font-blood text-4xl md:text-5xl text-white tracking-wide drop-shadow-md">
                  {/* {speaker.name} */} comming soon
                </h3>
                <p className="font-mono text-toxic-light text-sm mt-2 flex items-center gap-2">
                  {/* <Cpu size={14} /> {speaker.role} */} comming soon
                </p>
              </div>
            </div>

            {/* RIGHT: Terminal/Info Area */}
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center border-l border-white/5 bg-verse-dark/40">
              {/* Header Stats */}
              <div className="flex justify-between items-start mb-8 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blood/10 rounded-lg border border-blood/20">
                    <User className="text-blood w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-mist-dim font-mono uppercase tracking-widest">
                      Clearance Level
                    </p>
                    <p className="text-mist font-bold">ALPHA-ONE</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-mist-dim font-mono uppercase tracking-widest flex items-center justify-end gap-2">
                    Status{" "}
                    <Activity className="w-3 h-3 text-toxic-light animate-pulse" />
                  </p>
                  <p className="text-toxic-light font-bold tracking-wider">
                    {speaker.status}
                  </p>
                </div>
              </div>

              {/* Typing Effect Bio */}
              <div className="mb-8 font-mono text-lg text-mist/80 leading-relaxed min-h-[160px]">
                <TypewriterText text={speaker.bio} />
              </div>

              {/* Action Area */}
              <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 py-4 bg-blood/90 hover:bg-blood text-white font-heading font-bold tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(177,44,62,0.6)] flex items-center justify-center gap-2 group/btn relative overflow-hidden">
                  <span className="relative z-10">Initiate Protocol</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                </button>

                <button className="flex-1 py-4 border border-toxic-light/30 hover:border-toxic-light text-toxic-light font-heading font-bold tracking-widest uppercase transition-all hover:bg-toxic-light/10 flex items-center justify-center gap-2">
                  <Radio className="w-4 h-4" /> Connect Feed
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub-Component: Typing Effect ---
const TypewriterText = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {text.split("\n").map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.8 }} // Staggered delay for "typing" feel
          className="mb-2"
        >
          {line}
        </motion.p>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-toxic-light ml-1 align-middle"
      />
    </motion.div>
  );
};

export default Guest;
