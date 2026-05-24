import { useState, useEffect } from "react";
import { ArrowRight, Github, Cpu, Workflow, Smartphone, Shield, HelpCircle, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AndroidEmulator from "./AndroidEmulator";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [isEmulatorOpen, setIsEmulatorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Automatically trace which section is in view
      const sections = ["features", "how-it-works", "hero", "security", "faq", "download"];
      let currentSection = "";
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveTab(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", icon: Cpu },
    { name: "How It Works", href: "#how-it-works", icon: Workflow },
    { name: "Emulator", href: "#hero", icon: Smartphone },
    { name: "Security", href: "#security", icon: Shield },
    { name: "FAQs", href: "#faq", icon: HelpCircle },
  ];

  const mobileNavLinksLeft = [
    { name: "Features", href: "#features", icon: Cpu },
    { name: "Emulator", href: "#hero", icon: Smartphone },
  ];

  const mobileNavLinksRight = [
    { name: "Security", href: "#security", icon: Shield },
    { name: "FAQs", href: "#faq", icon: HelpCircle },
  ];

  const handleLinkClick = (href: string) => {
    if (href === "#hero") {
      setIsEmulatorOpen(true);
      return;
    }
    setActiveTab(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Header / Desktop Navbar */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1020]/80 backdrop-blur-xl border-b border-blue-500/10 py-3 shadow-lg shadow-black/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveTab("");
              }}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan opacity-40 blur-sm group-hover:opacity-75 transition duration-200"></div>
                <img
                  src="/logo.png"
                  alt="Pirate Link Logo"
                  referrerPolicy="no-referrer"
                  className="relative h-10 w-10 rounded-lg object-contain border border-blue-500/20 shadow-md shadow-brand-blue/10"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent group-hover:to-brand-cyan transition duration-200">
                Pirate Link
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`font-sans text-sm font-medium transition duration-200 relative group ${
                    activeTab === link.href ? "text-brand-cyan" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-cyan transition-all duration-300 ${
                    activeTab === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              ))}
            </nav>

            {/* Action buttons (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/prajwalnmokashi03/piratelink"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium bg-[#131B35]/50 hover:bg-[#131B35] rounded-lg border border-white/5"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("#download");
                }}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] hover:text-white focus:outline-none focus:ring-1 focus:ring-blue-500/20"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0B1020] rounded-md group-hover:bg-opacity-0 flex items-center space-x-1.5">
                  <span>Download APK</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Brand logo for mobile header */}
            <img
              src="/logo.png"
              alt="Pirate Link Logo"
              referrerPolicy="no-referrer"
              className="md:hidden h-8 w-8 rounded-lg object-contain border border-[#22D3EE]/20 shadow-md shadow-brand-cyan/5"
            />

          </div>
        </div>
      </header>

      {/* Floating Bottom Bar Dock (Mobile Screens Only) */}
      <div className="md:hidden fixed bottom-5 left-4 right-4 z-50">
        <div className="relative">
          {/* Cyan/Blue glow gradient aura framing */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-cyan/25 blur-lg opacity-80 pointer-events-none"></div>
          
          <div className="relative bg-[#0d142ecc]/90 border border-white/10 backdrop-blur-xl rounded-2xl px-2 py-2 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.7)] select-none">
            {mobileNavLinksLeft.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 relative transition duration-200 outline-none tap-highlight-transparent cursor-pointer"
                  style={{ minWidth: "48px", minHeight: "48px" }}
                >
                  <div className="relative flex items-center justify-center">
                    <Icon className={`h-[19px] w-[19px] transition-transform duration-300 ${
                      isActive ? "text-brand-cyan scale-110" : "text-neutral-400 group-hover:text-white"
                    }`} />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5 rounded-full bg-brand-cyan ring-2 ring-brand-cyan/20" />
                    )}
                  </div>
                  <span className={`text-[8.5px] font-mono font-medium tracking-wide mt-1 uppercase transition-colors duration-200 ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}>
                    {link.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}

            {/* Premium accentuated Download tab button positioned in the center */}
            <button
              onClick={() => handleLinkClick("#download")}
              className={`relative flex items-center justify-center flex-col py-1 px-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === "#download"
                  ? "bg-gradient-to-r from-brand-blue to-brand-cyan shadow-md shadow-brand-blue/20 text-white"
                  : "bg-brand-blue/15 border border-brand-blue/20 hover:bg-brand-blue/30 text-brand-cyan"
              }`}
              style={{ minWidth: "54px", minHeight: "48px" }}
            >
              <Download className={`h-[18px] w-[18px] ${activeTab === "#download" ? "text-white" : "text-brand-cyan animate-bounce"}`} />
              <span className={`text-[8px] font-mono tracking-wider font-semibold uppercase mt-1 ${activeTab === "#download" ? "text-white" : "text-brand-cyan"}`}>
                Download
              </span>
            </button>

            {mobileNavLinksRight.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.href;
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="flex-1 flex flex-col items-center justify-center py-1.5 px-1 relative transition duration-200 outline-none tap-highlight-transparent cursor-pointer"
                  style={{ minWidth: "48px", minHeight: "48px" }}
                >
                  <div className="relative flex items-center justify-center">
                    <Icon className={`h-[19px] w-[19px] transition-transform duration-300 ${
                      isActive ? "text-brand-cyan scale-110" : "text-neutral-400 group-hover:text-white"
                    }`} />
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5 rounded-full bg-brand-cyan ring-2 ring-brand-cyan/20" />
                    )}
                  </div>
                  <span className={`text-[8.5px] font-mono font-medium tracking-wide mt-1 uppercase transition-colors duration-200 ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}>
                    {link.name.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Android Emulator Modal Overlay */}
      <AnimatePresence>
        {isEmulatorOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEmulatorOpen(false)}
              className="absolute inset-0 bg-[#070b19]/90 backdrop-blur-xl"
            />
            
            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-md bg-black/40 border border-white/10 rounded-3xl p-3 flex flex-col items-center select-none shadow-[0_24px_64px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button Header */}
              <div className="w-full flex items-center justify-between pb-2 px-1">
                <div className="flex items-center space-x-2">
                  <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                  <span className="text-[10px] font-mono font-medium tracking-wider text-brand-cyan/90 uppercase">
                    P2P MESH INTERACTIVE EMULATOR
                  </span>
                </div>
                <button
                  onClick={() => setIsEmulatorOpen(false)}
                  className="p-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Emulator Mounting Segment */}
              <div className="w-full flex justify-center py-1 overflow-visible">
                <AndroidEmulator />
              </div>

              {/* Small helper info footer */}
              <p className="text-[9px] font-mono text-neutral-500 mt-2 text-center select-none">
                Tap anywhere on the simulated device to test handshakes.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
