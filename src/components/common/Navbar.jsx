import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Terminal } from "lucide-react";

// Import logos
import GfgLogo from "../../assets/gfg-logo.webp";
import GfgTextLogo from "../../assets/geeksforgeeks.webp";

// Updated Registration Link
const REGISTRATION_URL =
  "https://unstop.com/o/HxJma1b?lb=ppzxy8T5&utm_medium=Share&utm_source=mrinapau6940&utm_campaign=Workshops";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger collapse slightly earlier for better responsiveness
      setIsScrolled(window.scrollY > 30);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjusted breakpoint for tablet safety
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial checks
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#guest", label: "Guest" },
    { href: "#timeline", label: "Timeline" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#community", label: "Community" },

    { href: "#faq", label: "FAQ" },
  ];

  // --- ANIMATION VARIANTS ---
  const navContainerVariants = {
    expanded: {
      width: "100%",
      maxWidth: "64rem", // max-w-5xl
      padding: "0.75rem 1.5rem",
      borderRadius: "9999px",
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    collapsed: {
      width: "fit-content",
      padding: "0.5rem 0.75rem",
      borderRadius: "2rem",
      borderColor: "rgba(177, 44, 62, 0.4)", // Blood Red border when collapsed
    },
  };

  const linkContainerVariants = {
    hidden: { width: 0, opacity: 0, scale: 0.8 },
    visible: {
      width: "auto",
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center pointer-events-none">
      <motion.div
        layout
        initial="expanded"
        animate={isScrolled || isMobile ? "collapsed" : "expanded"}
        variants={navContainerVariants}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="pointer-events-auto bg-verse-dark/80 backdrop-blur-xl border shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden relative"
      >
        {/* Glowing Background Pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-blood/10 via-transparent to-toxic-light/10 opacity-50 pointer-events-none" />

        <div className="flex items-center justify-between relative z-10 gap-4">
          {/* --- LOGO SECTION --- */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-toxic-light blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" />
              <img
                src={GfgLogo}
                alt="GFG Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10"
              />
            </div>

            <AnimatePresence>
              {!isScrolled && !isMobile && (
                <motion.div
                  initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                  animate={{ width: "auto", opacity: 1, marginLeft: "0.75rem" }}
                  exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                  className="overflow-hidden flex items-center border-l border-white/10 pl-3"
                >
                  <span className="font-horror text-xl md:text-2xl tracking-widest text-white group-hover:text-toxic-light transition-colors">
                    JAVA<span className="text-blood">VERSE</span>
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </a>

          {/* --- DESKTOP NAVIGATION LINKS --- */}
          <AnimatePresence>
            {!isScrolled && !isMobile && (
              <motion.div
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex items-center gap-1"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Hover Glitch Effect */}
                    <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
                    <span className="absolute bottom-0 left-2 right-2 h-px bg-toxic-light scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- ACTION BUTTONS (Right Side) --- */}
          <div className="flex items-center gap-2">
            {/* Register Button - Desktop */}
            {!isMobile && (
              <motion.a
                layout
                href={REGISTRATION_URL}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blood to-red-900 text-white font-heading font-bold text-xs md:text-sm tracking-widest uppercase px-6 py-2.5 rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(177,44,62,0.4)] hover:shadow-[0_0_25px_rgba(177,44,62,0.6)] transition-all group"
              >
                <span>Initialize</span>
                <ExternalLink
                  size={14}
                  className="group-hover:rotate-45 transition-transform"
                />
              </motion.a>
            )}

            {/* Mobile Menu Toggle */}
            {isMobile && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white hover:text-toxic-light transition-colors bg-white/5 rounded-full border border-white/10"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute top-24 left-4 right-4 bg-verse-dark/95 backdrop-blur-2xl border border-toxic-light/30 rounded-2xl p-6 shadow-2xl pointer-events-auto flex flex-col gap-2 overflow-hidden z-40"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-toxic-light/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-4 text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">
              <Terminal size={12} /> System Navigation
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
              >
                <span className="font-heading font-bold text-lg text-white group-hover:text-toxic-light transition-colors">
                  {link.label}
                </span>
                <span className="text-gray-600 group-hover:text-white transition-colors">
                  &gt;
                </span>
              </motion.a>
            ))}

            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              href={REGISTRATION_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 bg-blood text-white text-center font-heading font-bold text-lg tracking-widest uppercase py-4 rounded-xl shadow-lg shadow-blood/20 active:scale-95 transition-transform"
            >
              Initialize Registration
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
