import { useState, useEffect } from "react";
import { Smartphone, Shield, Globe, MessageSquare } from "lucide-react";
import { HeadphoneSnail, PrajwalSnail, ElishSnail } from "./SnailAvatars";

export default function Screenshots() {
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
    <section id="screenshots" className="py-24 relative overflow-hidden border-t border-brand-card-border/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full inline-block">
            Decentralized Application Simulation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Cooperative Mesh Simulator
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Test custom signal ranges, active device handshakes, setting configurations, and multi-hop route propagation parameters live in real-time.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Feature column: Deep linking specifications from the screenshots */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            
            <div className="space-y-4 text-center lg:text-left">
              <span className="p-3 bg-brand-cyan/10 border border-brand-cyan/25 text-white rounded-xl inline-block shadow">
                <Smartphone className="h-6 w-6 text-brand-cyan" />
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                Physical Packet Simulation
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                Watch physical cryptographic frames travel through intermediate mesh nodes. Toggle direct pathways or cascade across three separate network hops seamlessly.
              </p>
            </div>

            {/* Specs matching Screenshot settings */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              
              <div className="flex items-start space-x-3 text-left bg-white/5 p-3.5 rounded-xl border border-white/5">
                <div className="mt-0.5 flex items-center justify-center p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-cyan font-mono text-xs">
                  TTL
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Default TTL Control</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Define your signal bounds. Packets will forward up to 3 hops before expiration to conserve node battery grids.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left bg-white/5 p-3.5 rounded-xl border border-white/5">
                <div className="mt-0.5 flex items-center justify-center p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-cyan">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Secure E2E Lock</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Individual conversation streams showcase a cyan secure pad-lock signifying real static ECDH/AES keys are working.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left bg-white/5 p-3.5 rounded-xl border border-white/5">
                <div className="mt-0.5 flex items-center justify-center p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-lg text-brand-cyan">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Gateway Sync System</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Enables mesh nodes to relay data back to downstream networks when they hit an internet-connected peer.</p>
                </div>
              </div>

            </div>

            {/* Quick action helper and stats */}
            <div className="bg-[#12192a] border border-brand-card-border/60 rounded-xl p-4 flex items-center justify-between text-xs max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center space-x-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-neutral-300">Local ID: RZ4E9I24 Verified</span>
              </div>
              <span className="font-mono text-brand-cyan text-[10px] uppercase bg-brand-cyan/10 border border-brand-cyan/25 px-2 py-0.5 rounded">
                Active Node
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Python CLI Mesh Simulator Wrapper */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="relative w-full max-w-xl font-sans">
              
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden bg-brand-card/90 border border-brand-card-border shadow-2xl backdrop-blur-md">
                
                {/* Widget Header */}
                <div className="bg-[#0e142e] px-4 py-3 border-b border-brand-card-border flex items-center justify-between select-none">
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
                  <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 relative z-20 bg-black/20 p-1.5 rounded border border-white/5 select-none">
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

                  {/* Mini Chat bubble thread result area mirroring Screenshot */}
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
                <div className="bg-[#0e142e] px-4 py-3.5 border-t border-brand-card-border flex items-center justify-between text-xs select-none">
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
                    className="bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white px-3.5 py-1.5 rounded-lg border border-brand-blue/30 hover:border-brand-blue font-medium transition duration-200 cursor-pointer disabled:opacity-50 animate-pulse"
                  >
                    {isRelaying ? "Transmitting..." : "Trigger Message Relay"}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
