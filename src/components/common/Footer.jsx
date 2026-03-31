import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Linkedin,
  Globe,
  Terminal,
  Shield,
  Cpu,
  Zap,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const footerNavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Java Verse" },
    { href: "#guest", label: "Keynote Entity" },
    { href: "#timeline", label: "Execution Log" },
    { href: "#faq", label: "System FAQs" },
  ];

  const partnersList = [
    { href: "https://www.geeksforgeeks.org/", name: "GeeksforGeeks" },
    { href: "https://unstop.com/", name: "Unstop" },
    { href: "https://www.coca-colacompany.com/", name: "CocaCola" },
    { href: "https://www.bk.com/", name: "Burger King" },
  ];

  const speakers = [
    {
      name: "Comming Soon..",
      title: "Comming Soon..",
    },
    // Add more if needed
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/gfgsrmist/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/company/gfgsrmist/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      href: "https://gfgsrm-website.vercel.app",
      icon: Globe,
      label: "Website",
      color: "hover:text-toxic-light",
    },
  ];

  return (
    <footer className="relative w-full pt-20 pb-10 bg-verse-void overflow-hidden">
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-verse-dark via-verse-void to-verse-void opacity-80 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* --- MAIN HOLOGRAPHIC PANEL --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#080a0b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Glowing Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blood via-toxic-light to-ocean-cyan opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-left">
            {/* COLUMN 1: BRANDING */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-4">
                <Terminal
                  className="text-toxic-light animate-pulse"
                  size={20}
                />
                <span className="text-xs font-mono text-toxic-light tracking-widest uppercase">
                  System Online
                </span>
              </div>

              <h3 className="text-4xl font-horror text-white mb-4 tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                JAVA <span className="text-blood">VERSE</span>
              </h3>

              <p className="font-mono text-sm text-gray-400 mb-6 leading-relaxed">
                The flagship coding warfare at SRMIST. <br />
                <span className="text-gray-600">Init. Deploy. Conquer.</span>
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/10 ${link.color} group/icon`}
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* COLUMN 2: NAVIGATION */}
            <div className="flex flex-col items-start pl-0 lg:pl-8">
              <h4 className="flex items-center gap-2 font-heading font-bold text-white tracking-widest uppercase mb-6">
                <Cpu size={16} className="text-toxic-light" /> Navigation
              </h4>
              <ul className="space-y-3 w-full">
                {footerNavLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-mono"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-toxic-light group-hover:scale-150 transition-all" />
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-toxic-light group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: ENTITIES (Speakers) */}
            <div className="flex flex-col items-start">
              <h4 className="flex items-center gap-2 font-heading font-bold text-white tracking-widest uppercase mb-6">
                <Shield size={16} className="text-blood" /> Entities
              </h4>
              <div className="space-y-4 w-full">
                {speakers.map((speaker) => (
                  <div
                    key={speaker.name}
                    className="group p-3 rounded-lg bg-white/5 border border-white/5 hover:border-blood/30 transition-all duration-300"
                  >
                    <h5 className="font-bold text-gray-200 text-sm group-hover:text-blood transition-colors">
                      {speaker.name}
                    </h5>
                    <p className="text-xs text-gray-500 font-mono mt-1 group-hover:text-gray-400">
                      {speaker.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* COLUMN 4: ALLIANCES (Partners) */}
            <div className="flex flex-col items-start lg:items-end">
              <h4 className="flex items-center gap-2 font-heading font-bold text-white tracking-widest uppercase mb-6 lg:text-right">
                <Zap size={16} className="text-gold" /> Alliances
              </h4>
              <ul className="space-y-3 lg:text-right w-full">
                {partnersList.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-start lg:justify-end"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-gold transition-colors duration-300"
                    >
                      {item.name}
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* --- COPYRIGHT FOOTER --- */}
          <div className="relative z-10 mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600 font-mono">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-gray-400">
                GeeksForGeeks Campus Body SRMIST
              </span>
              . System Secure.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600 font-mono">
              <span className="hover:text-toxic-light cursor-pointer transition-colors">
                Privacy Protocol
              </span>
              <span className="w-1 h-1 bg-gray-800 rounded-full" />
              <span className="hover:text-blood cursor-pointer transition-colors">
                Terms of Engagement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
