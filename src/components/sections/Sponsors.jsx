import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CupSoda, Pizza, Code, Award, Zap, ShieldCheck } from "lucide-react";

// --- LOGO IMPORTS ---
// (Ensure these images exist in src/assets/ or the fallback icons will show)
import CocaColaLogo from "../../assets/cocacola.webp";
import BurgerKingLogo from "../../assets/burgerking.webp";
import UnstopLogo from "../../assets/Unstop.webp";
import GFGLogo from "../../assets/GFG.webp";

const Sponsors = () => {
  const sponsors = [
    {
      id: "coke",
      category: "Energy Module",
      title: "CocaCola",
      description:
        "Unleash your inner coder! Providing the ultimate liquid coolant to keep your CPU (Brain) running at max clock speeds.",
      logo: CocaColaLogo,
      icon: CupSoda,
      color: "text-blood",
      border: "group-hover:border-blood",
      glow: "group-hover:shadow-[0_0_30px_rgba(177,44,62,0.6)]",
      bgGradient: "from-blood/20 to-transparent",
    },
    {
      id: "bk",
      category: "Rations Supply",
      title: "Burger King",
      description:
        "Fuel for the battle. High-calorie combat rations (Burgers/Pizza) to maintain biological integrity during the hackathon.",
      logo: BurgerKingLogo,
      icon: Pizza,
      color: "text-gold",
      border: "group-hover:border-gold",
      glow: "group-hover:shadow-[0_0_30px_rgba(233,174,52,0.6)]",
      bgGradient: "from-gold/20 to-transparent",
    },
    {
      id: "unstop",
      category: "Battle Arena",
      title: "Unstop",
      description:
        "The official hosting mainframe. A seamless platform where code warriors face off in competitive algorithmic warfare.",
      logo: UnstopLogo,
      icon: Code,
      color: "text-ocean-cyan",
      border: "group-hover:border-ocean-cyan",
      glow: "group-hover:shadow-[0_0_30px_rgba(19,115,148,0.6)]",
      bgGradient: "from-ocean-cyan/20 to-transparent",
    },
    {
      id: "gfg",
      category: "Intel Partner",
      title: "GeeksforGeeks",
      description:
        "Community Intelligence. Powering quizzes, contests, and mentorship. Unlocking exclusive loot and merchandise crates.",
      logo: GFGLogo,
      icon: Award,
      color: "text-toxic-light",
      border: "group-hover:border-toxic-light",
      glow: "group-hover:shadow-[0_0_30px_rgba(54,152,106,0.6)]",
      bgGradient: "from-toxic-light/20 to-transparent",
    },
  ];

  return (
    <section
      id="sponsors"
      className="relative py-32 bg-verse-void overflow-hidden"
    >
      {/* --- ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(20,43,32,0.4),_transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-md"
          >
            <ShieldCheck size={14} className="text-mist animate-pulse" />
            <span className="text-mist font-mono text-xs tracking-widest uppercase">
              System Backers
            </span>
          </motion.div>

          {/* force new line */}
          <h2 className="block text-5xl md:text-7xl font-horror text-white tracking-widest mb-6 relative group cursor-default">
            <span className="relative z-10">
              STRATEGIC{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blood to-toxic-light">
                ALLIANCES
              </span>
            </span>
            <span className="absolute inset-0 blur-md text-blood opacity-50 animate-pulse">
              STRATEGIC ALLIANCES
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
        </div>

        {/* --- 3D CARD GRID --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {sponsors.map((sponsor, index) => (
            <TiltCard key={sponsor.id} sponsor={sponsor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SUB-COMPONENT: 3D TILT CARD ---
const TiltCard = ({ sponsor, index }) => {
  const ref = useRef(null);

  // Mouse Position State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Spring Physics for Rotation
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseXPct = (e.clientX - rect.left) / width - 0.5;
    const mouseYPct = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPct);
    y.set(mouseYPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
    >
      <div
        className={`group relative h-full flex flex-col items-center p-6 rounded-2xl bg-verse-dark/60 backdrop-blur-md border border-white/10 transition-all duration-300 ${sponsor.border} ${sponsor.glow} hover:bg-verse-card/80`}
        style={{ transform: "translateZ(20px)" }} // Push card forward slightly
      >
        {/* Hover Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${sponsor.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
        />

        {/* --- LOGO CONTAINER (Floating) --- */}
        <div
          className="relative w-full h-32 mb-6 flex items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors"
          style={{ transform: "translateZ(40px)" }} // Parallax Depth
        >
          {/* Logo Image */}
          <img
            src={sponsor.logo}
            alt={`${sponsor.title} Logo`}
            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-2xl"
            onError={(e) => {
              e.currentTarget.style.display = "none"; // Hide broken image
              e.currentTarget.nextSibling.style.display = "block"; // Show fallback icon
            }}
          />
          {/* Fallback Icon (Hidden by default) */}
          <div className="hidden">
            <sponsor.icon size={48} className={sponsor.color} />
          </div>

          {/* Tech Corners */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20" />
        </div>

        {/* --- TEXT CONTENT --- */}
        <div
          className="text-center relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          <h4
            className={`text-xs font-mono uppercase tracking-[0.2em] mb-2 ${sponsor.color} font-bold`}
          >
            {sponsor.category}
          </h4>

          <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:scale-105 transition-transform">
            {sponsor.title}
          </h3>

          <div className="w-12 h-px bg-white/20 mx-auto mb-4 group-hover:w-24 transition-all duration-500" />

          <p className="text-sm text-gray-400 font-mono leading-relaxed">
            {sponsor.description}
          </p>
        </div>

        {/* --- GLITCH DECORATION --- */}
        <Zap
          size={16}
          className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${sponsor.color} animate-pulse`}
        />
      </div>
    </motion.div>
  );
};

export default Sponsors;
