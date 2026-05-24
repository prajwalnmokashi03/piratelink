import { ShieldAlert, Server, EyeOff, KeyRound, Lock, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Security() {
  const [activeTab, setActiveTab] = useState<"keys" | "relay">("keys");

  return (
    <section id="security" className="py-24 relative overflow-hidden bg-brand-bg">
      {/* Background Visual Gradient */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Row 1: Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
              Military-Grade Cryptology
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sovereign architecture. No backdoor keyholes.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Traditional messaging services require trusting external servers with metadata, registration vectors, and key escrow. Pirate Link eliminates target hubs entirely, putting you in direct command of your private crypto keys.
            </p>
          </div>
        </div>

        {/* Row 2: 4 Key Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <Server className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">0% Central Servers</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                No single target server database exists to hack, compromise, subpoena, or shut down.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white font-semibold">Strict E2E Crypto</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Messages are locked securely on your device, and only readable by the designated client ID.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Metadata Pruned</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Packet routes are entirely volatile. Relays do not capture timestamps, hardware descriptions, or identity maps.
              </p>
            </div>
          </div>

          <div className="bg-[#131B35]/20 border border-white/5 rounded-2xl p-6 space-y-4 flex flex-col justify-between hover:border-brand-blue/30 transition-all duration-300">
            <div className="space-y-3">
              <div className="p-3 bg-brand-blue/10 border border-brand-blue/20 rounded-xl inline-block text-brand-cyan">
                <KeyRound className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">No Identity Escrow</h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Public and private key pairs are assembled locally using Curve-25519, verified over proximity handshakes.
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
                Local Key Exchange Method
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Self-Sovereign Identity Protection
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed font-light">
                Pirate Link utilizes modern cryptographic primitives. It generates localized peer fingerprints when you scan physically. No global registrar holds the list of who is talking to whom, keeping communications decentralized at every tier.
              </p>
              
              <div className="space-y-2">
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">1</span>
                  Zero-Knowledge Proof dynamic handshakes
                </p>
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">2</span>
                  Curve25519 & AES-256 cipher blocks
                </p>
                <p className="flex items-center text-xs text-neutral-300 font-sans">
                  <span className="h-5 w-5 bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center rounded-md mr-2 text-brand-cyan text-[10px] font-semibold">3</span>
                  Episodic session keys recycled regularly
                </p>
              </div>
            </div>

            {/* Cryptographic Node Visual */}
            <div className="lg:col-span-7 bg-[#050814]/85 border border-[#1b2546] rounded-xl p-5 sm:p-6 font-mono text-xs text-[#a0a8c6] relative overflow-hidden flex flex-col gap-4">
              <div className="absolute top-2 right-2 flex items-center bg-white/5 border border-white/5 rounded-md px-2 py-1 text-[9px] text-[#06B6D4] font-semibold tracking-wider">
                CRYPTOGRAPHY LAYER ACTIVE
              </div>

              <div className="border-b border-white/5 pb-3 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-neutral-400">Curve-25519 Key Exchange Visualizer</span>
              </div>

              {/* Secure Handshake Simulation Visual Block */}
              <div className="grid grid-cols-2 gap-4 my-2 text-center text-[10px]">
                <div className="bg-[#0e142e]/80 border border-white/5 p-4 rounded-lg relative">
                  <span className="absolute top-1.5 left-2 text-[8px] tracking-wide text-neutral-500 uppercase">My Device</span>
                  <div className="text-white font-bold my-1">PUBLIC KEY (dh_pubA)</div>
                  <div className="text-[9px] text-neutral-500 overflow-hidden line-clamp-1 bg-black/40 py-1 px-1.5 rounded font-mono select-all">
                    0x8e82bd017caefc26de490a...
                  </div>
                </div>

                <div className="bg-[#0e142e]/80 border border-white/5 p-4 rounded-lg relative">
                  <span className="absolute top-1.5 left-2 text-[8px] tracking-wide text-neutral-500 uppercase">Alice's Device</span>
                  <div className="text-white font-bold my-1">PUBLIC KEY (dh_pubB)</div>
                  <div className="text-[9px] text-neutral-500 overflow-hidden line-clamp-1 bg-black/40 py-1 px-1.5 rounded font-mono select-all">
                    0x42fbcceeaa19bcdead6182...
                  </div>
                </div>
              </div>

              <div className="bg-[#0e142e]/40 p-4 rounded-lg border border-[#06B6D4]/10 space-y-1.5">
                <div className="flex items-center space-x-2 text-brand-cyan font-semibold text-[10px]">
                  <Check className="h-3 w-3" />
                  <span>SHARED SECRET GENERATED SUCCESSFULLY</span>
                </div>
                <p className="text-[10px] text-neutral-400 leading-relaxed">
                  Both devices combine the parameters to calculate the local symmetric session key <code className="text-white">K_sym</code>. Intermediary nodes relaying the packet cannot derive this key.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
