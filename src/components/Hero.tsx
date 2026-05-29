import { Download, Github } from "lucide-react";
import { motion } from "motion/react";
import AndroidEmulator from "./AndroidEmulator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88svh] md:min-h-screen pt-28 pb-12 md:pt-40 md:pb-20 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 self-center lg:self-start bg-[#131B35]/80 border border-brand-cyan/20 px-3.5 py-1.5 rounded-full backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-xs font-semibold text-neutral-300 tracking-wide font-mono uppercase">
                Android Local Mesh Available
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Local-first mesh messaging.
              <span className="block mt-2 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-cyan bg-clip-text text-transparent animate-glow">
                Built for nearby peers.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Pirate Link is an open-source decentralized communication app for nearby Android devices.
              Send encrypted DMs through local peers so groups can stay connected without relying on
              internet infrastructure.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="https://github.com/prajwalnmokashi03/piratelink/raw/main/public/piratelink.apk"
                download="piratelink.apk"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 active:scale-95 text-white font-semibold py-4 px-8 rounded-xl transition duration-150 shadow-lg shadow-brand-blue/20"
              >
                <Download className="h-5 w-5" />
                <span>Download APK For Android</span>
              </a>
              <a
                href="https://github.com/prajwalnmokashi03/piratelink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl font-medium border border-white/5 hover:border-white/10 transition duration-200 active:scale-95"
              >
                <Github className="h-5 w-5 text-neutral-300" />
                <span className="text-neutral-200">View Source Code</span>
              </a>
            </motion.div>

            {/* Quick Stats / Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0 text-left border-t border-white/5"
            >
              <div>
                <p className="font-display text-2xl font-bold text-white">Local</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide">Nearby Mesh</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brand-cyan">E2E</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide font-light">Encrypted DMs</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brand-blue">Open</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide">Source Code</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Android Emulator Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="absolute -inset-1 rounded-[42px] bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 blur-xl opacity-80 pointer-events-none"></div>
            <AndroidEmulator />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
