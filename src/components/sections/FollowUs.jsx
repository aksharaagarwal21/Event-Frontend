import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Confetti from "react-confetti";
import { Share2, Globe, Radio } from "lucide-react";

// --- 1. CUSTOM HOOK FOR WINDOW SIZE ---
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { width: size[0], height: size[1] };
};

// --- 2. CUSTOM BRAND ICONS (SVG) ---
const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

// --- 3. SUB-COMPONENT: 3D CARD ---
const SocialCard = ({ link, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative cursor-pointer h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div
        className={`group relative h-full flex flex-col items-center p-8 bg-verse-dark/60 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${link.glowClass}`}
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Hover Gradient Overlay */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Icon Floating */}
        <div
          className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors"
          style={{ transform: "translateZ(40px)" }}
        >
          <link.icon
            className={`w-10 h-10 ${link.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_currentColor]`}
          />
        </div>

        {/* Text Content */}
        <div className="text-center" style={{ transform: "translateZ(30px)" }}>
          <h3
            className={`text-2xl font-heading font-bold text-white mb-3 group-hover:${link.textColor} transition-colors`}
          >
            {link.name}
          </h3>
          <p className="text-sm text-gray-400 font-mono leading-relaxed group-hover:text-mist transition-colors">
            {link.description}
          </p>
        </div>

        {/* Tech Decor */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Share2 size={16} className={`text-white/50 ${link.textColor}`} />
        </div>
      </div>
    </motion.div>
  );
};

// --- 4. MAIN COMPONENT ---
const FollowUs = () => {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLinkClick = (href) => {
    setShowConfetti(true);
    setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
    }, 3500);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const communityLinks = [
    {
      name: "WhatsApp",
      description:
        "Secure comms channel. Join for instant tactical updates and classified intel.",
      href: "https://chat.whatsapp.com/KSoruvUIXWxGLSdlMNxkeQ?mode=gi_t",
      icon: WhatsAppIcon,
      iconColor: "text-toxic-light",
      textColor: "text-toxic-light",
      gradient: "from-toxic-light/20 to-transparent",
      glowClass: "group-hover:shadow-[0_0_40px_rgba(54,152,106,0.3)]",
    },
    {
      name: "Instagram",
      description:
        "Visual logs. Surveillance footage, event highlights, and behind-the-scenes data.",
      href: "https://www.instagram.com/gfgsrmist/",
      icon: InstagramIcon,
      iconColor: "text-blood",
      textColor: "text-blood",
      gradient: "from-blood/20 to-transparent",
      glowClass: "group-hover:shadow-[0_0_40px_rgba(177,44,62,0.3)]",
    },
    {
      name: "LinkedIn",
      description:
        "Professional network. Connect for career protocols and networking algorithms.",
      href: "https://www.linkedin.com/company/gfgsrmist/",
      icon: LinkedInIcon,
      iconColor: "text-ocean-cyan",
      textColor: "text-ocean-cyan",
      gradient: "from-ocean-cyan/20 to-transparent",
      glowClass: "group-hover:shadow-[0_0_40px_rgba(19,115,148,0.3)]",
    },
  ];

  return (
    <section
      id="community"
      className="relative bg-verse-void py-32 px-4 overflow-hidden perspective-1000"
    >
      {/* --- CONFETTI LAYER (Java-Verse Colors) --- */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            colors={["#B12C3E", "#36986A", "#E9AE34", "#ffffff"]} // Blood, Toxic, Gold, White
            gravity={0.15}
          />
        </div>
      )}

      {/* --- BACKGROUND ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-20" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-verse-void to-transparent z-10" />

      <div className="container mx-auto relative z-20">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 mb-6"
          >
            <Radio size={14} className="text-gold animate-pulse" />
            <span className="text-gold font-mono text-xs tracking-widest uppercase">
              Signal Intercepted
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-horror text-white tracking-widest mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            JOIN THE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-toxic-light to-ocean-cyan">
              COMMUNITY
            </span>
          </h2>

          <p className="text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Establish a direct link with the mainframe. Follow our channels for
            encrypted updates,{" "}
            <span className="text-white">exclusive loot drops</span>, and
            operational intel.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {communityLinks.map((link) => (
            <SocialCard
              key={link.name}
              link={link}
              onClick={() => handleLinkClick(link.href)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
