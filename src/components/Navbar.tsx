import { useState, useEffect } from "react";
import { Menu, X, Radio, ArrowRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Security", href: "#security" },
    { name: "FAQs", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan opacity-40 blur-sm group-hover:opacity-75 transition duration-200"></div>
              <div className="relative p-2 bg-brand-bg rounded-lg border border-blue-500/30 flex items-center justify-center">
                <Radio className="h-5 w-5 text-brand-cyan animate-pulse" />
              </div>
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
                className="font-sans text-sm font-medium text-neutral-300 hover:text-white transition duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
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

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/30 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0B1020]/95 backdrop-blur-xl border-b border-blue-500/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-3 px-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-lg text-neutral-300 bg-white/5 hover:bg-white/10 text-sm font-medium transition duration-200"
                >
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("#download");
                  }}
                  className="flex items-center justify-center space-x-2 py-2.5 rounded-lg text-white bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 text-sm font-semibold transition duration-200 shadow-md shadow-brand-blue/10"
                >
                  <span>Download APK</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
