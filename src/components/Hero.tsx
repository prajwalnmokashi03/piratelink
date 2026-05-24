import { Download, Github, ShieldAlert, Cpu, Radio, ChevronRight, MessageSquare, Shield, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { PrajwalSnail, ElishSnail, HeadphoneSnail } from "./SnailAvatars";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"direct" | "mesh">("direct");
  const [relayStep, setRelayStep] = useState(0);
  const [isRelaying, setIsRelaying] = useState(false);
  const [simulatedChat, setSimulatedChat] = useState<{ sender: string; text: string; time: string }[]>([]);

  // Auto animation for the peer-to-peer visual
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRelaying) {
      interval = setInterval(() => {
        setRelayStep((prev) => {
          const maxSteps = activeTab === "direct" ? 1 : 2;
          if (prev >= maxSteps) {
            setIsRelaying(false);
            // Append message results to chat terminal inside simulator
            if (activeTab === "direct") {
              setSimulatedChat([
                { sender: "Prajwal", text: "helo", time: "2:28 pm" },
                { sender: "elish", text: "hey", time: "2:28 pm" }
              ]);
            } else {
              setSimulatedChat([
                { sender: "Prajwal", text: "hi", time: "2:28 pm" },
                { sender: "elish", text: "hlo", time: "2:28 pm" }
              ]);
            }
            return 0;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isRelaying, activeTab]);

  const startRelaySimulation = () => {
    setSimulatedChat([]);
    setRelayStep(0);
    setIsRelaying(true);
  };

  // Define screen nodes based on active interactive tab
  const devices = activeTab === "direct" 
    ? [
        { id: 1, name: "Prajwal", x: "25%", y: "50%", kind: "prajwal", role: "Transmitter" },
        { id: 2, name: "elish", x: "75%", y: "50%", kind: "elish", role: "Receiver" },
      ]
    : [
        { id: 1, name: "Prajwal", x: "20%", y: "50%", kind: "prajwal", role: "Origin (Hop 0)" },
        { id: 3, name: "Snail Relay", x: "50%", y: "50%", kind: "mascot", role: "Relay (Hop 1)" },
        { id: 2, name: "elish", x: "80%", y: "50%", kind: "elish", role: "Target (Hop 2)" },
      ];

  const getSnailAvatar = (kind: string, size = 52) => {
    if (kind === "prajwal") return <PrajwalSnail size={size} />;
    if (kind === "elish") return <ElishSnail size={size} />;
    return <HeadphoneSnail size={size} className="animate-bounce" />;
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
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
                Offline P2P Mesh v1.4 Available
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Offline Communication.
              <span className="block mt-2 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-cyan bg-clip-text text-transparent animate-glow">
                Reimagined.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-neutral-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Pirate Link connects you without cell reception, internet Access, or account logins. 
              By linking nearby devices via secure, low-energy Bluetooth mesh grids, every 
              phone becomes an autonomous transmitter and message relay.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#download"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 active:scale-95 text-white font-medium px-8 py-4 rounded-xl transition duration-200 shadow-lg shadow-brand-blue/20 cursor-pointer"
              >
                <Download className="h-5 w-5" />
                <span>Download APK For Android</span>
              </a>
              <a
                href="https://github.com"
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
                <p className="font-display text-2xl font-bold text-white">0kb</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide">Data Charges</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brand-cyan">AES-256</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide font-light">E2E Encrypted</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-brand-blue">Open</p>
                <p className="text-xs text-neutral-400 font-sans tracking-wide">Source P2P</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Device Mesh Simulation Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden bg-brand-card/90 border border-brand-card-border shadow-2xl backdrop-blur-md">
              
              {/* Widget Header */}
              <div className="bg-[#0e142e] px-4 py-3 border-b border-brand-card-border flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono pl-2">mesh_simulator.py</span>
                </div>
                <div className="flex bg-white/5 p-0.5 rounded-md text-xs">
                  <button
                    onClick={() => {
                      setActiveTab("direct");
                      setSimulatedChat([]);
                      setRelayStep(0);
                    }}
                    className={`px-2.5 py-1 rounded-sm font-medium transition cursor-pointer ${
                      activeTab === "direct" ? "bg-brand-blue text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Direct Connect
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("mesh");
                      setSimulatedChat([]);
                      setRelayStep(0);
                    }}
                    className={`px-2.5 py-1 rounded-sm font-medium transition cursor-pointer ${
                      activeTab === "mesh" ? "bg-brand-blue text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Multi-Hop Mesh
                  </button>
                </div>
              </div>

              {/* Simulation Canvas Area */}
              <div className="relative h-80 bg-[#0B1020]/95 flex flex-col justify-between overflow-hidden p-4">
                
                {/* Background Grid Lines for Technical Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                {/* Top Simulation Stats info */}
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-20 bg-black/20 p-1.5 rounded border border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
                    <span className="text-cyan-400 font-semibold uppercase">BLE P2P Connected</span>
                  </div>
                  <span>1 Peer | RSSI: -64dBm</span>
                </div>

                {/* Connection lines visual indicator based on step */}
                <div className="relative flex-1 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    {activeTab === "direct" ? (
                      /* Direct connection line */
                      <line
                        x1="25%"
                        y1="50%"
                        x2="75%"
                        y2="50%"
                        stroke={isRelaying ? "#06B6D4" : "rgba(6, 182, 212, 0.4)"}
                        strokeWidth={isRelaying ? "3" : "2"}
                        strokeDasharray={isRelaying ? "6,4" : "0"}
                        className="transition-all duration-300"
                      />
                    ) : (
                      <>
                        {/* Hop 0 to Hop 1 */}
                        <line
                          x1="20%"
                          y1="50%"
                          x2="50%"
                          y2="50%"
                          stroke={relayStep >= 1 ? "#06B6D4" : "rgba(6, 182, 212, 0.2)"}
                          strokeWidth={relayStep >= 1 ? "3" : "1.5"}
                          strokeDasharray={relayStep === 1 ? "6,4" : "0"}
                          className="transition-all duration-300"
                        />
                        {/* Hop 1 to Hop 2 */}
                        <line
                          x1="50%"
                          y1="50%"
                          x2="80%"
                          y2="50%"
                          stroke={relayStep >= 2 ? "#A855F7" : "rgba(168, 85, 247, 0.2)"}
                          strokeWidth={relayStep >= 2 ? "3" : "1.5"}
                          strokeDasharray={relayStep === 2 ? "6,4" : "0"}
                          className="transition-all duration-300"
                        />
                      </>
                    )}
                  </svg>

                  {/* Mock Snail Devices */}
                  {devices.map((device) => {
                    const isOrigin = device.id === 1;
                    const isTarget = device.id === 2;
                    const isMiddle = device.id === 3;
                    
                    const isNodeActive = 
                      (isOrigin && relayStep === 0) ||
                      (isMiddle && relayStep === 1) ||
                      (isTarget && relayStep === 2);

                    return (
                      <div
                        key={device.id}
                        style={{ left: device.x, top: device.y }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-10"
                      >
                        <div
                          className={`p-1.5 rounded-full border bg-[#0d142d] transition-all duration-300 flex items-center justify-center ${
                            isNodeActive || isRelaying
                              ? "border-[#22D3EE] scale-110 shadow-lg shadow-cyan-500/20 ring-4 ring-cyan-500/10"
                              : "border-brand-card-border hover:border-neutral-500"
                          }`}
                        >
                          <div className="relative">
                            {getSnailAvatar(device.kind, 56)}
                            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border border-[#0d142d] flex items-center justify-center text-[7px] text-white font-bold font-mono">
                              {device.id === 1 ? "P" : device.id === 2 ? "E" : "R"}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-neutral-200 mt-1 whitespace-nowrap bg-[#0B1020]/90 px-2 py-0.5 rounded-full border border-white/5 shadow-sm">
                          {device.name}
                        </span>
                        <span className="text-[8px] font-mono text-[#06B6D4] opacity-80 mt-0.5 whitespace-nowrap">
                          {device.role}
                        </span>
                      </div>
                    );
                  })}

                  {/* Animated BLE Wave ripple circle around source */}
                  <div className="absolute left-[25%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-cyan-400/20 animate-ping pointer-events-none z-0"></div>

                  {/* Simulated Floating Chat Packet Bubble */}
                  {isRelaying && (
                    <div
                      style={{
                        left:
                          activeTab === "direct"
                            ? (relayStep === 0 ? "40%" : "65%")
                            : (relayStep === 0 ? "35%" : relayStep === 1 ? "50%" : "68%"),
                        top: "32%",
                      }}
                      className="absolute bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-[9px] font-semibold px-2.5 py-1 rounded-full shadow-lg shadow-brand-blue/30 transition-all duration-700 -translate-x-1/2 -translate-y-1/2 z-20 border border-white/10 flex items-center gap-1.5"
                    >
                      <MessageSquare className="h-2.5 w-2.5 animate-pulse" />
                      <span>{activeTab === "direct" ? "🔑 helo" : "🔒 AES payload"} ({relayStep} hop)</span>
                    </div>
                  )}
                </div>

                {/* Mini Chat bubble thread result area mirroring Screenshot 4/6 */}
                <div className="min-h-[50px] bg-black/40 border-t border-white/5 rounded-lg p-2 flex flex-col justify-end space-y-1 relative z-20">
                  {simulatedChat.length === 0 ? (
                    <div className="text-center text-[9px] font-sans text-neutral-500 py-1">
                      💡 Click &apos;Trigger Message Relay&apos; below to send packet handshakes
                    </div>
                  ) : (
                    simulatedChat.map((chat, i) => {
                      const isPraj = chat.sender === "Prajwal";
                      return (
                        <div key={i} className={`flex items-start gap-1 text-[10px] ${isPraj ? "justify-end" : "justify-start"}`}>
                          {!isPraj && getSnailAvatar("elish", 18)}
                          <div className={`px-2 py-1 rounded-lg leading-snug max-w-[80%] ${
                            isPraj 
                              ? "bg-brand-blue/90 text-white rounded-tr-none text-right" 
                              : "bg-[#161D3A]/90 text-neutral-200 rounded-tl-none"
                          }`}>
                            <p className="font-sans font-light">{chat.text}</p>
                            <span className="text-[7.5px] opacity-60 font-mono block mt-0.5 text-right">{chat.time} {isPraj && "✓✓"}</span>
                          </div>
                          {isPraj && getSnailAvatar("prajwal", 18)}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="bg-[#0e142e] px-4 py-3.5 border-t border-brand-card-border flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <div className={`h-2.5 w-2.5 rounded-full ${isRelaying ? "bg-green-500 animate-pulse" : "bg-neutral-600"}`}></div>
                  <span className="font-mono text-[10px] font-light">
                    {isRelaying
                      ? `Transmitting BLE packets...`
                      : `Inactive | Ready to sync`}
                  </span>
                </div>
                <button
                  onClick={startRelaySimulation}
                  disabled={isRelaying}
                  className="bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white px-3.5 py-1.5 rounded-lg border border-brand-blue/30 hover:border-brand-blue font-medium transition duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isRelaying ? "Transmitting..." : "Trigger Message Relay"}
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
