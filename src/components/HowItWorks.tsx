import { useState } from "react";
import { Search, Radio, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Discover Nearby Devices",
      subtitle: "Local Bluetooth discovery",
      description:
        "Pirate Link looks for nearby Android peers running the app and builds a local view of who can participate in the mesh.",
      icon: Search,
      terminalLines: [
        "Starting nearby discovery...",
        "Looking for Pirate Link peers...",
        "Peer found: elish",
        "Local connection ready",
      ],
    },
    {
      id: 2,
      title: "Relay Messages Across Peers",
      subtitle: "Cooperative local delivery",
      description:
        "When a recipient is not directly nearby, participating peers can help carry the encrypted message across local hops.",
      icon: Radio,
      terminalLines: [
        "Encrypted message queued",
        "Recipient not in direct range",
        "Nearby relay available",
        "Forwarding through local peer",
        "Relay complete"
      ],
    },
    {
      id: 3,
      title: "Deliver Messages Without Internet",
      subtitle: "Local encrypted delivery",
      description:
        "Once the message reaches the recipient's device, it is decrypted locally. Delivery depends on nearby peer availability and local range.",
      icon: CheckCircle,
      terminalLines: [
        "Recipient reached: elish",
        "Decrypting on device",
        "Message opened locally",
        "Delivery status updated",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-14 md:py-20 scroll-mt-20 relative bg-[#0e142e]/30 border-t border-b border-brand-card-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Nearby delivery in 3 steps.
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Pirate Link keeps the experience simple: find nearby peers, pass encrypted messages through the local mesh, and deliver without central message servers.
          </p>
        </div>

        {/* 3 Step Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Actions: Vertical Steps Selector */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st) => {
              const IconComp = st.icon;
              const isCurrent = activeStep === st.id;

              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStep(st.id)}
                  className={`w-full text-left p-6 sm:p-8 rounded-2xl transition-all duration-300 border flex items-start space-x-4 cursor-pointer relative group overflow-hidden ${
                    isCurrent
                      ? "bg-brand-card border-brand-blue/30 shadow-lg shadow-brand-blue/10"
                      : "bg-[#131B35]/20 border-white/5 hover:border-white/10"
                  }`}
                >
                  {/* Neon Left Indicator Strip */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-blue to-brand-cyan transition-transform duration-300 ${
                      isCurrent ? "scale-y-100" : "scale-y-0"
                    }`}
                  />

                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl border transition-colors duration-300 ${
                      isCurrent
                        ? "bg-brand-blue/10 border-brand-blue text-brand-cyan"
                        : "bg-white/5 border-white/5 text-neutral-400 group-hover:text-white"
                    }`}
                  >
                    <IconComp className="h-6 w-6" />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#3B82F6] font-semibold bg-brand-blue/10 px-2 py-0.5 rounded-md">
                        STEP 0{st.id}
                      </span>
                    </div>
                    <h3 className={`font-display text-lg font-bold transition-colors ${isCurrent ? "text-white" : "text-neutral-300 group-hover:text-white"}`}>
                      {st.title}
                    </h3>
                    <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                      {st.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Action: Interactive Simulated Output Screen */}
          <div className="lg:col-span-7 h-full">
            <div className="lg:sticky lg:top-28 bg-[#090D1A] rounded-2xl border border-brand-card-border p-5 sm:p-6 shadow-2xl overflow-hidden relative min-h-[360px] md:min-h-[420px] flex flex-col justify-between">
              
              {/* Fake Chrome / Window frame and visual tabs */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/60" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <span className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">
                      device_relay_shell.sh — Step 0{activeStep}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-2.5 py-0.5 rounded-full">
                    Local Mesh
                  </span>
                </div>

                {/* Simulated Step UI Preview Detail */}
                <div className="py-6 space-y-4">
                  <h4 className="font-display text-xl font-bold text-white">
                    {steps[activeStep - 1].title}
                  </h4>
                  <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                    {steps[activeStep - 1].description}
                  </p>
                </div>
              </div>

              {/* Terminal Logs Block */}
              <div className="mt-4 bg-black/40 rounded-xl border border-white/5 p-4 sm:p-5 font-mono text-xs text-neutral-300 space-y-2 select-all relative overflow-hidden">
                <div className="absolute top-2 right-2 text-[9px] font-semibold text-neutral-500 tracking-wider">
                  SIMULATED STATUS
                </div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1.5"
                  >
                    {steps[activeStep - 1].terminalLines.map((line, idx) => (
                      <p key={idx} className="leading-relaxed">
                        <span className="text-brand-cyan mr-1.5">&gt;</span>
                        {line}
                      </p>
                    ))}
                    <p className="text-brand-blue animate-pulse-slow">
                      <span className="text-brand-cyan mr-1.5">&gt;</span>
                      Listening for nearby mesh events...
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
