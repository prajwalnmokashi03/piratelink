import { ShieldAlert, Server, EyeOff, KeyRound, Lock, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Security() {
  const [activeTab, setActiveTab] = useState<"keys" | "relay">("keys");

  return (
    <section id="security" className="py-14 md:py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background Visual Gradient */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row 1: Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-14 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
              Privacy & Trust
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Private by design, local by default.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Pirate Link minimizes reliance on central infrastructure for local messaging. Conversations are encrypted before they move through nearby peers, and the project is open source for inspection.
            </p>
          </div>
        </div>

        {/* Row 2: 4 Key Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10 md:mb-14">
          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">No Central Message Hub</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Local mesh messages are not routed through a cloud message server.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white font-semibold">AES-GCM Encryption</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Direct messages are encrypted before transmission over the local mesh.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Local-First State</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Pirate Link is designed to reduce central records by keeping communication local-first.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <KeyRound className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Open Source</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                The repository is public so the implementation and product direction can be reviewed.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Interactive Security Detail Simulator */}
        <div className="relative rounded-2xl overflow-hidden bg-brand-card/30 border border-brand-card-border p-6 sm:p-10 shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Simulation text explain */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-cyan bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-3 py-1 rounded-full font-bold">
                Encryption Model
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Message Encryption
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                Pirate Link encrypts message content before it leaves the device. Relay peers help with delivery, not with reading the conversation.
              </p>
              
              <div className="space-y-2">
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">1</span>
                  Encrypted direct messages
                </p>
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">2</span>
                  Local mesh delivery
                </p>
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">3</span>
                  Public source code on GitHub
                </p>
              </div>
            </div>

            {/* Cryptographic Node Visual */}
            <div className="lg:col-span-7 bg-[#050814]/85 border border-[#1b2546] rounded-xl p-5 sm:p-6 font-mono text-xs text-[#a0a8c6] relative overflow-hidden flex flex-col gap-4">
              <div className="absolute top-2 right-2 flex items-center bg-white/5 border border-white/5 rounded-md px-2 py-1 text-[9px] text-[#06B6D4] font-semibold tracking-wider">
                ENCRYPTION LAYER ACTIVE
              </div>

              <div className="border-b border-white/5 pb-3 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-neutral-400">Message Encryption Visualizer</span>
              </div>

              {/* Secure Encryption Simulation Visual Block */}
              <div className="grid grid-cols-2 gap-4 my-2 text-center text-[10px]">
                <div className="bg-[#0e142e]/80 border border-white/5 p-4 rounded-lg relative">
                  <span className="absolute top-1.5 left-2 text-[8px] tracking-wide text-neutral-500 uppercase">My Device</span>
                  <div className="text-white font-bold my-1">Plain message</div>
                  <div className="text-[9px] text-neutral-500 overflow-hidden line-clamp-1 bg-black/40 py-1 px-1.5 rounded font-mono select-all">
                    "Meeting at coordinates..."
                  </div>
                </div>

                <div className="bg-[#0e142e]/80 border border-white/5 p-4 rounded-lg relative">
                  <span className="absolute top-1.5 left-2 text-[8px] tracking-wide text-neutral-500 uppercase">Mesh Transmission</span>
                  <div className="text-white font-bold my-1">Encrypted in transit</div>
                  <div className="text-[9px] text-neutral-500 overflow-hidden line-clamp-1 bg-black/40 py-1 px-1.5 rounded font-mono select-all">
                    0x42fbcceeaa19bcdead6182...
                  </div>
                </div>
              </div>

              <div className="bg-[#0e142e]/40 p-4 rounded-lg border border-[#06B6D4]/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-brand-cyan font-semibold text-[10px]">
                  <Check className="h-3 w-3" />
                  <span>MESSAGE ENCRYPTED BEFORE RELAY</span>
                </div>
                <p className="text-[10px] text-neutral-400 leading-relaxed">
                  Message content is protected before local mesh relay. Intermediate peers are used for delivery, not conversation access.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
