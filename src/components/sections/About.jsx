import React, { useState, useEffect, useRef, memo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Terminal,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Shield,
  Radio,
  Activity,
} from "lucide-react";

// --- 1. CONFIGURATION ---
// Target: February 11, 2026, 08:00:00 AM IST
const TARGET_DATE = new Date("February 11, 2026 08:00:00 GMT+0530").getTime();

// --- 2. SUB-COMPONENT: COUNTDOWN TIMER ---
const TimeSegment = memo(({ value, label, colorClass }) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4 bg-verse-dark/80 backdrop-blur-md rounded-xl border border-white/10 relative group overflow-hidden min-w-[80px] sm:min-w-[100px]">
      {/* Glitch Overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 ${colorClass} transition-opacity duration-300`}
      />

      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`text-3xl sm:text-5xl font-horror tracking-wider ${colorClass} drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]`}
      >
        {value}
      </motion.div>
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] mt-2 text-gray-500 group-hover:text-mist transition-colors">
        {label}
      </span>
    </div>
  );
});

TimeSegment.displayName = "TimeSegment";

const CountdownTimer = () => {
  const [time, setTime] = useState(TARGET_DATE - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;
      setTime(distance);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (time <= 0) {
    return (
      <div className="text-3xl font-horror text-toxic-light animate-pulse tracking-widest border border-toxic-light/50 px-8 py-4 rounded-xl bg-toxic-dark/20 backdrop-blur">
        SYSTEM BREACH: EVENT LIVE
      </div>
    );
  }

  const totalSeconds = Math.floor(time / 1000);
  const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((totalSeconds % (3600 * 24)) / 3600),
  ).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0",
  );
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, "0");

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8 relative z-20">
      <TimeSegment value={days} label="Days" colorClass="text-blood" />
      <TimeSegment value={hours} label="Hours" colorClass="text-mist" />
      <TimeSegment value={minutes} label="Mins" colorClass="text-mist" />
      <TimeSegment value={seconds} label="Secs" colorClass="text-toxic-light" />
    </div>
  );
};

// --- 3. MAIN COMPONENT: ABOUT SECTION ---
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen py-24 bg-verse-void overflow-hidden flex flex-col items-center justify-center"
    >
      {/* --- ATMOSPHERE --- */}
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,43,32,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,43,32,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Fog/Smoke Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-verse-void via-transparent to-verse-void z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        {/* --- SECTION HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-blood/10 border border-blood/30 text-blood text-xs font-mono tracking-widest uppercase">
            <Shield size={12} className="animate-pulse" /> Secure Connection
            Established
          </div>

          {/* force new line */}
          <h2 className="block text-5xl md:text-8xl font-horror text-white tracking-widest relative">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
              ABOUT
            </span>
            <span className="absolute inset-0 text-blood opacity-40 blur-sm animate-pulse">
              ABOUT
            </span>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-blood to-transparent" />
          </h2>

          <p className="mt-6 text-toxic-sage font-mono text-sm tracking-[0.3em] uppercase">
            Protocol: Java Full Stack Initialization
          </p>
        </motion.div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: HOLOGRAPHIC DATA TERMINAL */}
          <motion.div style={{ y }} className="relative order-2 lg:order-1">
            {/* Terminal Window */}
            <div className="relative bg-[#080a0b]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(54,152,106,0.1)] group">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1112] border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blood/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gold/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-toxic-light/60 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-gray-500 flex items-center gap-2">
                  <Terminal size={10} /> MISSION_BRIEF.log
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-8 font-mono text-sm leading-relaxed text-gray-400">
                <p className="mb-4">
                  <span className="text-toxic-light">root@java-verse:~$</span>{" "}
                  <span className="text-white typing-effect">
                    cat workshop_details.txt
                  </span>
                </p>
                <p className="mb-6 border-l-2 border-white/10 pl-4">
                  <span className="text-blood font-bold">&gt; OBJECTIVE:</span>{" "}
                  Introduce participants to{" "}
                  <span className="text-white font-bold bg-white/5 px-1">
                    Full-Stack Development via Java
                  </span>
                  .
                  <br />
                  <br />
                  <span className="text-blood font-bold">
                    &gt; EMPHASIS:
                  </span>{" "}
                  Practical implementation & algorithmic problem solving.
                  <br />
                  <br />
                  <span className="text-blood font-bold">
                    &gt; OUTCOME:
                  </span>{" "}
                  Mastery of Backend Architecture, Frontend Integration, and
                  Deployment protocols suitable for{" "}
                  <span className="text-toxic-light">
                    Internships & Placements
                  </span>
                  .
                </p>

                {/* Visualizer Bar */}
                <div className="mt-8 flex gap-1 h-8 items-end opacity-50">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [10, Math.random() * 30, 10] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                      className="w-1 bg-toxic-light"
                    />
                  ))}
                </div>
              </div>

              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-toxic-light/30 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blood/30 rounded-br-xl" />
            </div>
          </motion.div>

          {/* RIGHT: COUNTDOWN & DETAILS HUD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-start"
          >
            {/* The Countdown */}
            <div className="mb-12 w-full text-center lg:text-left">
              <h3 className="text-xl font-heading font-bold text-white mb-2 flex items-center justify-center lg:justify-start gap-2">
                <Clock size={20} className="text-toxic-light" /> T-MINUS TO
                LAUNCH
              </h3>
              <CountdownTimer />
            </div>

            {/* Event Coordinates HUD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Venue Card */}
              <div className="group bg-verse-card border border-white/5 p-6 rounded-lg hover:border-toxic-light/50 transition-colors duration-300 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-toxic-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <MapPin className="w-8 h-8 text-toxic-light mx-auto mb-3" />
                <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1">
                  Sector
                </p>
                <p className="text-xl font-bold text-white font-heading">
                  TP1 404/405
                </p>
              </div>

              {/* Date Card */}
              <div className="group bg-verse-card border border-white/5 p-6 rounded-lg hover:border-blood/50 transition-colors duration-300 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-blood transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Calendar className="w-8 h-8 text-blood mx-auto mb-3" />
                <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1">
                  Date Cycle
                </p>
                <p className="text-xl font-bold text-white font-heading">
                  11 FEB '26
                </p>
              </div>

              {/* Time Card */}
              <div className="group bg-verse-card border border-white/5 p-6 rounded-lg hover:border-gold/50 transition-colors duration-300 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <Activity className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-[10px] uppercase text-gray-500 tracking-widest mb-1">
                  Start Time
                </p>
                <p className="text-xl font-bold text-white font-heading">
                  08:00 AM
                </p>
              </div>
            </div>

            {/* Contact Comm Link */}
            <div className="mt-12 w-full border-t border-white/10 pt-8">
              <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
                <Radio size={12} className="animate-ping" /> Establish Comms
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <a
                  href="tel:8491012458"
                  className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="bg-verse-dark p-3 rounded-full border border-white/10 group-hover:border-toxic-light/50 transition-colors">
                    <Phone
                      size={20}
                      className="text-gray-400 group-hover:text-toxic-light"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-mono mb-1">
                      POC: Neelanjana Mandal
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-toxic-light transition-colors">
                      84910 12458
                    </p>
                  </div>
                </a>

                <a
                  href="tel:9263230197"
                  className="flex items-center gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="bg-verse-dark p-3 rounded-full border border-white/10 group-hover:border-blood/50 transition-colors">
                    <Phone
                      size={20}
                      className="text-gray-400 group-hover:text-blood"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-mono mb-1">
                      POC: Raj Mehta
                    </p>
                    <p className="text-lg font-bold text-white group-hover:text-blood transition-colors">
                      92632 30197
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
