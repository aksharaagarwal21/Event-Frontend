import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
  Terminal,
  ShieldQuestion,
  Cpu,
} from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Who is eligible to breach the system?",
      a: "Any student (Engineering, Arts, Science) with a hunger for Java, Full-Stack, or System Design is authorized to join.",
    },
    {
      q: "Is prior combat experience required?",
      a: "Negative. While basic programming knowledge helps, we will guide you from initialization to deployment.",
    },
    {
      q: "Will I be rewarded for my efforts?",
      a: "Affirmative. Verified certificates and exclusive digital assets will be granted to all survivors.",
    },
    {
      q: "What gear is mandatory for the mission?",
      a: "Deploy with your Laptop, Charger, and a Notebook for tactical data logging.",
    },
    {
      q: "Are there live combat simulations?",
      a: "Yes. Expect live coding battles, debugging challenges, and real-time deployment drills.",
    },
    {
      q: "What is the mission duration?",
      a: "The operation lasts a full day (08:00 - 16:30), including refueling breaks.",
    },
    {
      q: "Can I register as a solo operative?",
      a: "Yes. Individual registration is the standard protocol. Teams will be formed during specific modules.",
    },
    {
      q: "Is there a registration fee?",
      a: "Access to the Java Verse mainframe is free for all authorized students.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="relative py-24 bg-verse-void overflow-hidden flex flex-col items-center"
    >
      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-verse-card via-verse-void to-verse-void opacity-40 pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blood/50 to-transparent" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-toxic-dark opacity-20 animate-float pointer-events-none">
        <HelpCircle size={100} />
      </div>
      <div className="absolute bottom-20 right-10 text-blood opacity-10 animate-pulse-slow pointer-events-none">
        <ShieldQuestion size={120} />
      </div>

      <div className="relative z-10 max-w-4xl w-full px-6">
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-toxic-light/30 bg-toxic-dark/10 mb-6 backdrop-blur-md"
          >
            <div className="w-2 h-2 rounded-full bg-toxic-light animate-ping" />
            <span className="text-toxic-light font-mono text-xs tracking-widest uppercase">
              System Queries
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-horror text-white tracking-widest mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              FAQ
            </span>
            <span className="text-blood drop-shadow-[0_0_15px_rgba(177,44,62,0.8)]">
              _LOGS
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-toxic-light to-transparent mx-auto" />
        </div>

        {/* --- FAQ LIST --- */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group border transition-all duration-300 rounded-xl overflow-hidden ${
                openIndex === i
                  ? "bg-verse-card/40 border-toxic-light/50 shadow-[0_0_20px_rgba(54,152,106,0.1)]"
                  : "bg-verse-dark/60 border-white/5 hover:border-white/20"
              }`}
            >
              {/* QUESTION BUTTON */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left relative overflow-hidden"
              >
                {/* Hover Slide Effect */}
                <div className="absolute inset-0 bg-white/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                <div className="flex items-center gap-4 relative z-10">
                  <Terminal
                    size={18}
                    className={`transition-colors ${openIndex === i ? "text-toxic-light" : "text-gray-500"}`}
                  />
                  <span
                    className={`font-heading font-bold text-lg tracking-wide transition-colors ${openIndex === i ? "text-white" : "text-mist"}`}
                  >
                    {item.q}
                  </span>
                </div>

                <div
                  className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === i ? "bg-toxic-light text-black rotate-180" : "bg-white/5 text-gray-400"}`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* ANSWER PANEL */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 pl-14 relative">
                      {/* Decorative Line */}
                      <div className="absolute left-9 top-0 bottom-6 w-px bg-gradient-to-b from-toxic-light/50 to-transparent" />

                      <p className="text-gray-400 font-mono text-sm leading-relaxed">
                        <span className="text-toxic-light font-bold mr-2">
                          &gt;&gt;
                        </span>
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER DECORATION --- */}
        <div className="mt-16 flex justify-center opacity-30">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Cpu size={14} /> END_OF_FILE
          </div>
        </div>
      </div>
    </section>
  );
}
