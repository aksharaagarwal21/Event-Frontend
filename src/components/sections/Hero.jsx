import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import {
  Terminal,
  Play,
  Cpu,
  Code2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

// Import your poster
import PosterImg from "../../assets/poster.webp";

// Updated Registration Link
const REGISTRATION_URL =
  "https://unstop.com/o/HxJma1b?lb=ppzxy8T5&utm_medium=Share&utm_source=mrinapau6940&utm_campaign=Workshops";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]); // Parallax text

  // --- MOUSE SPOTLIGHT & 3D TILT LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth 3D tilt
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    // Calculate rotation based on center of screen
    const rotateXValue = ((y - height / 2) / height) * 20; // Max 20deg tilt
    const rotateYValue = ((x - width / 2) / width) * -20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-verse-void overflow-hidden flex flex-col items-center pt-24 pb-20 px-4"
    >
      {/* --- ATMOSPHERE LAYERS --- */}

      {/* 1. Grainy Noise Overlay (Horror Vibe) */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Mouse Spotlight (Flashlight Effect) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(54, 152, 106, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* 3. Deep Pulse Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blood/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-toxic-dark/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center gap-16">
        {/* === SECTION 1: HEADER & CTA === */}
        <motion.div
          style={{ y: yText }}
          className="text-center flex flex-col items-center"
        >
          {/* Main Title - Glitch Effect */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-7xl md:text-9xl font-horror text-white relative z-10 tracking-widest leading-none mb-4 group cursor-default"
          >
            <span className="absolute inset-0 text-blood opacity-70 blur-sm animate-pulse">
              JAVA VERSE
            </span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-mist to-gray-600 group-hover:text-blood transition-colors duration-300">
              JAVA VERSE
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 text-toxic-light font-mono tracking-[0.3em] text-sm md:text-lg uppercase mb-8"
          >
            <Code2 size={16} />
            <span>Code</span>
            <span className="text-blood">•</span>
            <span>Create</span>
            <span className="text-blood">•</span>
            <span>Conquer</span>
            <Code2 size={16} />
          </motion.div>

          {/* GFG Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-2xl mx-auto space-y-4 mb-10"
          >
            <p className="text-blood font-bold tracking-widest text-xs uppercase animate-pulse">
              GFG Campus Body SRMIST PRESENTS
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
              The Ultimate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-toxic-light to-ocean-cyan">
                Coding Experience
              </span>
            </h2>
            <p className="text-mist-dim text-lg">
              Join us for an immersive journey into the dark arts of Java
              programming.
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          {/* REGISTER BUTTON */}
          <motion.a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-block px-8 py-4 bg-blood hover:bg-red-700 text-white font-heading font-bold tracking-[0.2em] text-lg uppercase rounded-none clip-path-polygon overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(177,44,62,0.5)] hover:shadow-[0_0_40px_rgba(177,44,62,0.8)]"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <span className="relative z-10 flex items-center gap-3">
              Register Now
              <ExternalLink
                size={20}
                className="group-hover:rotate-45 transition-transform"
              />
            </span>

            {/* Hover Glitch Line */}
            <div className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:animate-shine" />
          </motion.a>
        </motion.div>

        {/* === SECTION 2: SPLIT LAYOUT (CODE vs POSTER) === */}
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center perspective-1000">
          {/* --- LEFT: CODE EDITOR (Responsive) --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="relative w-full"
          >
            {/* Glowing Wireframe behind editor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-toxic-dark to-verse-void rounded-xl blur-md opacity-50" />

            <div className="relative bg-verse-dark/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-blood/80" />
                  <div className="w-3 h-3 rounded-full bg-gold/80" />
                  <div className="w-3 h-3 rounded-full bg-toxic-light/80" />
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                  <ShieldAlert size={12} className="text-blood animate-pulse" />{" "}
                  SYSTEM_OVERRIDE.java
                </div>
              </div>

              {/* Editor Body */}
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed h-[350px] overflow-hidden relative">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

                <TypewriterEffect />
              </div>

              {/* Editor Footer */}
              <div className="px-4 py-2 bg-black/50 border-t border-white/5 flex justify-between text-xs font-mono text-toxic-sage">
                <span>Ln 666, Col 1</span>
                <span>UTF-8</span>
                <span className="text-toxic-light flex items-center gap-1">
                  <div className="w-2 h-2 bg-toxic-light rounded-full animate-pulse" />{" "}
                  ONLINE
                </span>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: 3D POSTER BOX --- */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] md:w-[380px] aspect-[3/4] group cursor-pointer">
              {/* Back Glow */}
              <div className="absolute inset-0 bg-blood/30 blur-[60px] rounded-full group-hover:bg-toxic-light/30 transition-colors duration-700" />

              {/* 3D Content Container */}
              <div className="relative z-10 w-full h-full rounded-lg bg-verse-card border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transform transition-transform duration-200 group-hover:scale-105">
                {/* The Poster Image */}
                <img
                  src={PosterImg}
                  alt="Java Verse Poster"
                  className="w-full h-full object-cover filter contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-700"
                />

                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Floating "Live" Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 z-20 bg-verse-dark/90 backdrop-blur-md border border-toxic-light/30 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4"
              >
                <div className="bg-toxic-dark/20 p-3 rounded-full border border-toxic-light/20">
                  <Play className="w-6 h-6 text-toxic-light fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-toxic-sage uppercase tracking-widest font-bold">
                    Incoming Transmission
                  </p>
                  <p className="text-white font-heading font-bold">
                    JOIN THE VERSE
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: TYPEWRITER CODE EFFECT ---
const TypewriterEffect = () => {
  const [text, setText] = useState("");
  const fullText = `public class JavaVerse {
  
  public static void main(String[] args) {
    
    // Initializing Horror Protocol...
    System.out.println("Welcome, User.");
    
    String event = "JAVA VERSE 2026";
    String location = "TP1 404/405";
    
    if (user.isReady()) {
       fear.setLevel("MAXIMUM");
       skills.deploy();
    }
  }
}`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40); // Typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="text-mist whitespace-pre-wrap">
      <span
        dangerouslySetInnerHTML={{
          __html: text
            .replace(
              /public|class|static|void|if/g,
              '<span class="text-toxic-light font-bold">$&</span>',
            )
            .replace(
              /String|System|out|println/g,
              '<span class="text-ocean-cyan">$&</span>',
            )
            .replace(/"(.*?)"/g, '<span class="text-blood">"$1"</span>')
            .replace(/\/\/.*/g, '<span class="text-gray-500 italic">$&</span>'),
        }}
      />
      <span className="inline-block w-2.5 h-5 bg-toxic-light ml-1 animate-pulse align-middle" />
    </pre>
  );
};

export default Hero;
