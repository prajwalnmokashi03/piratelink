import { useState, useRef, useEffect, FormEvent } from "react";
import { 
  Send, 
  CheckCheck, 
  Smartphone, 
  WifiOff, 
  Users, 
  Sparkles, 
  MessageSquare, 
  Info, 
  Radio, 
  ArrowLeft, 
  Settings as SettingsIcon, 
  Globe, 
  Lock, 
  Shield, 
  ChevronRight, 
  Volume2, 
  Check, 
  Sliders 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HeadphoneSnail, PrajwalSnail, ElishSnail } from "./SnailAvatars";

interface Message {
  id: number;
  text: string;
  sender: "user" | "peer";
  time: string;
  status: "sending" | "relayed" | "delivered";
  hops: number;
  avatar: "prajwal" | "elish" | "headphones";
}

export default function Screenshots() {
  // Mobile emulator states mirroring actual app screenshots
  const [isSetUp, setIsSetUp] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<"headphones" | "prajwal" | "elish">("headphones");
  const [username, setUsername] = useState("Prajwal");
  const [activeTab, setActiveTab] = useState<"dm" | "local" | "map" | "settings" | "debug">("local");
  
  // Settings Screen toggles (Screenshot 2)
  const [gatewaySync, setGatewaySync] = useState(true);
  const [showNodeId, setShowNodeId] = useState(false);
  const [messageSize, setMessageSize] = useState(16);
  const [currentTTL, setCurrentTTL] = useState(3);

  // Chat memory
  const [localMessages, setLocalMessages] = useState<Message[]>([
    {
      id: 1,
      text: "helo",
      sender: "user",
      time: "2:28 pm",
      status: "delivered",
      hops: 1,
      avatar: "prajwal"
    },
    {
      id: 2,
      text: "hey",
      sender: "peer",
      time: "2:28 pm",
      status: "delivered",
      hops: 1,
      avatar: "elish"
    }
  ]);

  const [dmMessages, setDmMessages] = useState<Message[]>([
    {
      id: 3,
      text: "hi",
      sender: "user",
      time: "2:28 pm",
      status: "delivered",
      hops: 1,
      avatar: "prajwal"
    },
    {
      id: 4,
      text: "hlo",
      sender: "peer",
      time: "2:28 pm",
      status: "delivered",
      hops: 2,
      avatar: "elish"
    }
  ]);

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll messages to bottom safely
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages, dmMessages, activeTab]);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const currentTimeString = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMessageId = Date.now();

    const newMsg: Message = {
      id: newMessageId,
      text: inputText,
      sender: "user",
      time: currentTimeString,
      status: "sending",
      hops: 1,
      avatar: selectedAvatar
    };

    if (activeTab === "local") {
      setLocalMessages((prev) => [...prev, newMsg]);
      setInputText("");

      // Simulate mesh forwarding animation stages
      setTimeout(() => {
        setLocalMessages((prev) =>
          prev.map((m) => (m.id === newMessageId ? { ...m, status: "relayed" } : m))
        );
      }, 700);

      setTimeout(() => {
        setLocalMessages((prev) =>
          prev.map((m) => (m.id === newMessageId ? { ...m, status: "delivered", hops: currentTTL } : m))
        );
      }, 1500);

      // Snail reply simulator
      setTimeout(() => {
        setLocalMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "Offline packet relay matched. I am online!",
            sender: "peer",
            time: currentTimeString,
            status: "delivered",
            hops: 2,
            avatar: "elish"
          }
        ]);
      }, 3000);
    } else if (activeTab === "dm") {
      setDmMessages((prev) => [...prev, newMsg]);
      setInputText("");

      setTimeout(() => {
        setDmMessages((prev) =>
          prev.map((m) => (m.id === newMessageId ? { ...m, status: "delivered", hops: 1 } : m))
        );
      }, 800);

      // DM reply simulator
      setTimeout(() => {
        setDmMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text: "🔒 Message decrypted. BLE channel clear.",
            sender: "peer",
            time: currentTimeString,
            status: "delivered",
            hops: 1,
            avatar: "elish"
          }
        ]);
      }, 2500);
    }
  };

  // Cycle avatars inside setup screen
  const handleCycleAvatar = () => {
    if (selectedAvatar === "headphones") setSelectedAvatar("prajwal");
    else if (selectedAvatar === "prajwal") setSelectedAvatar("elish");
    else setSelectedAvatar("headphones");
  };

  const getActiveSnailAvatar = (kind: "headphones" | "prajwal" | "elish", size = 110) => {
    if (kind === "prajwal") return <PrajwalSnail size={size} />;
    if (kind === "elish") return <ElishSnail size={size} />;
    return <HeadphoneSnail size={size} />;
  };

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden bg-[#070b19] border-t border-brand-card-border/40">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full inline-block">
            Decentralized Application Simulation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Interactive Android Emulator
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Test the live user configuration flow, encrypted chat rooms, settings toggles, and mesh map structures right inside our high-fidelity virtual device frame.
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
                Faithful Visual Recreation
              </h3>
              <p className="font-sans text-neutral-400 text-sm leading-relaxed">
                Experience the exact responsive structure of Pirate Link. Our emulator is styled identically to legacy Android builds shown in actual device screenshots.
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

          {/* Right Column: High-Fidelity App Emulator Frame mimicking screenshots */}
          <div className="lg:col-span-7 flex justify-center">
            
            <div className="relative w-[320px] sm:w-[350px] h-[670px] bg-[#030712] rounded-[48px] border-[12px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Camera Notch Container */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-40 h-6 bg-neutral-800 rounded-full z-40 flex items-center justify-between px-4 select-none pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                <span className="text-[9px] font-mono text-neutral-400 tracking-wide">3:05 PM</span>
                <span className="w-2.5 h-1 bg-black/40 rounded-full"></span>
              </div>

              {/* Simulated Device Status bar from Screenshot 1 */}
              <div className="bg-[#090D1A] pt-10 px-6 pb-2.5 flex items-center justify-between text-[10px] font-mono font-medium text-neutral-400 relative z-30 select-none">
                <div className="flex items-center space-x-1.5 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                  <Radio className="h-3 w-3 text-blue-400 animate-pulse" />
                  <span className="text-blue-400 font-semibold uppercase text-[8px]">2 devices</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>Vo LTE</span>
                  <span>5G</span>
                  <span className="text-emerald-400">30%</span>
                </div>
              </div>

              {/* EMULATOR SCREEN DISPLAY */}
              <div className="flex-1 bg-[#090D1A] flex flex-col justify-between relative overflow-hidden">
                <AnimatePresence mode="wait">
                  
                  {/* SCREEN 1: GET STARTED / SIGN UP SCREEN (Mirroring Screenshot 1) */}
                  {!isSetUp ? (
                    <motion.div
                      key="setup-screen"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 p-5 flex flex-col justify-between"
                    >
                      {/* Logo header */}
                      <div className="text-center pt-2 space-y-1.5 flex flex-col items-center">
                        <div className="relative flex items-center justify-center w-14 h-14 rounded-full border border-cyan-500/30 bg-cyan-950/20 animate-pulse">
                          <div className="w-10 h-10 rounded-full border border-cyan-400/40 flex items-center justify-center">
                            <span className="text-cyan-400 font-display font-extrabold text-xl">P</span>
                          </div>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white tracking-tight">PirateLink</h3>
                        <p className="text-[11px] font-sans text-neutral-400">Decentralized mesh messaging</p>
                      </div>

                      {/* Avatar Selector Board */}
                      <div className="flex flex-col items-center space-y-3">
                        <div 
                          onClick={handleCycleAvatar}
                          className="relative h-28 w-28 rounded-full border-2 border-dashed border-cyan-500/60 p-1 bg-cyan-950/20 flex items-center justify-center group cursor-pointer hover:border-cyan-400 transition"
                        >
                          {getActiveSnailAvatar(selectedAvatar)}
                          
                          {/* Pulsing ring indicator */}
                          <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse pointer-events-none"></div>
                        </div>
                        
                        <button 
                          onClick={handleCycleAvatar}
                          className="text-[#06B6D4] text-xs font-sans tracking-tight font-medium hover:brightness-110 active:scale-95 transition"
                        >
                          Tap to choose avatar
                        </button>
                      </div>

                      {/* Input fields */}
                      <div className="space-y-4">
                        <div className="space-y-1 text-center">
                          <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            maxLength={16}
                            placeholder="Choose a username"
                            className="w-full bg-black/60 text-white border border-[#22D3EE]/20 hover:border-[#22D3EE]/40 text-xs py-3 px-4 rounded-xl text-center focus:outline-none focus:border-cyan-400 font-sans transition placeholder-neutral-600 shadow"
                          />
                          <span className="text-[9px] font-mono text-neutral-500">3-16 characters</span>
                        </div>

                        {/* Let's Go Activation button */}
                        <button
                          onClick={() => {
                            if (username.trim().length >= 3) {
                              setIsSetUp(true);
                            }
                          }}
                          disabled={username.trim().length < 3}
                          className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-display font-bold text-xs py-3.5 rounded-xl cursor-pointer transition shadow-lg shadow-cyan-500/10 disabled:opacity-40"
                        >
                          Let&apos;s Go
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    
                    /* APPLICATION INNER VIEWS */
                    <motion.div
                      key="inner-app"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col justify-between"
                    >
                      
                      {/* INNER VIEW TABS */}
                      <div className="flex-1 flex flex-col justify-between overflow-hidden">
                        
                        {/* SCREEN HEADER: DYNAMIC BASED ON TABS */}
                        <div className="bg-[#11162d]/95 p-3.5 border-b border-brand-card-border/60 flex items-center justify-between select-none shadow">
                          
                          {activeTab === "local" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <span className="font-display font-bold text-sm text-white tracking-tight flex items-center gap-1.5">
                                  <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-cyan-400 bg-cyan-950/20 text-[9px] text-cyan-400 font-display font-extrabold pr-0.5">P</div>
                                  PirateLink
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-[9px] font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full flex items-center gap-1 select-none">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                                  1 peer
                                </span>
                                <button onClick={() => setActiveTab("settings")} className="text-neutral-400 hover:text-white transition">
                                  <SettingsIcon className="h-4.5 w-4.5" />
                                </button>
                              </div>
                            </>
                          )}

                          {activeTab === "dm" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white mr-1">
                                  <ArrowLeft className="h-4 w-4" />
                                </button>
                                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-purple-900 border border-white/10 flex items-center justify-center">
                                  <ElishSnail size={24} />
                                </div>
                                <div className="text-left">
                                  <h4 className="text-xs font-bold text-white leading-none">elish</h4>
                                  <span className="text-[8px] text-neutral-400 font-sans tracking-wide">Direct Message</span>
                                </div>
                              </div>
                              <Lock className="h-3.5 w-3.5 text-cyan-400" />
                            </>
                          )}

                          {activeTab === "map" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white">
                                  <ArrowLeft className="h-4 w-4" />
                                </button>
                                <span className="font-display font-bold text-xs text-white uppercase tracking-wider">Mesh Network</span>
                              </div>
                              <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
                            </>
                          )}

                          {activeTab === "settings" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white">
                                  <ArrowLeft className="h-4 w-4" />
                                </button>
                                <span className="font-display font-bold text-xs text-white tracking-wider">Settings</span>
                              </div>
                              <span className="text-[8px] font-mono text-neutral-500">ID: RZ4E9</span>
                            </>
                          )}

                          {activeTab === "debug" && (
                            <>
                              <div className="flex items-center space-x-2">
                                <button onClick={() => setActiveTab("settings")} className="text-neutral-400 hover:text-white">
                                  <ArrowLeft className="h-4 w-4" />
                                </button>
                                <span className="font-display font-bold text-xs text-white tracking-wider">Debug Panel</span>
                              </div>
                              <span className="text-[8px] stroke-cyan bg-cyan-400/10 text-cyan-400 px-1 py-0.5 rounded font-mono">1.4_v</span>
                            </>
                          )}

                        </div>

                        {/* SCREEN BODY SCROLL CHANNELS */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col bg-[#070b16]">
                          
                          {/* 1. LOCAL CHAT CHANNEL VIEW (Mirroring Screenshot 4) */}
                          {activeTab === "local" && (
                            <div className="flex-1 flex flex-col justify-between">
                              <div className="flex-1 space-y-3.5 py-2">
                                <div className="text-center my-1 select-none">
                                  <span className="text-[9px] font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full">
                                    Connected: elish
                                  </span>
                                </div>

                                {localMessages.map((msg) => {
                                  const isUser = msg.sender === "user";
                                  return (
                                    <div key={msg.id} className={`flex items-start gap-2 max-w-[85%] ${isUser ? "self-end justify-end ml-auto" : "self-start justify-start"}`}>
                                      {!isUser && getActiveSnailAvatar(msg.avatar, 24)}
                                      <div className="flex flex-col">
                                        {!isUser && <span className="text-[8.5px] font-sans text-neutral-400 ml-1.5">{username === "elish" ? "Prajwal" : "elish"}</span>}
                                        <div className={`p-2.5 rounded-2xl text-xs font-sans leading-snug shadow-md ${
                                          isUser 
                                            ? "bg-brand-blue text-white rounded-tr-none text-right" 
                                            : "bg-[#181F3B] text-neutral-100 rounded-tl-none border border-white/5"
                                        }`}>
                                          <p style={{ fontSize: `${messageSize}px` }} className="font-sans font-normal">{msg.text}</p>
                                        </div>
                                        <span className="text-[8px] font-mono opacity-50 px-1 mt-0.5 mt-1 block text-right text-neutral-400">
                                          {msg.time} {isUser && (msg.status === "delivered" ? "✓✓" : "•")}
                                        </span>
                                      </div>
                                      {isUser && getActiveSnailAvatar(msg.avatar, 24)}
                                    </div>
                                  );
                                })}
                                <div ref={messagesEndRef} />
                              </div>

                              {/* Input panel directly inside chat tab */}
                              <form onSubmit={handleSendMessage} className="mt-2 flex items-center gap-1.5">
                                <input
                                  type="text"
                                  value={inputText}
                                  onChange={(e) => setInputText(e.target.value)}
                                  placeholder="Type a message..."
                                  className="flex-1 bg-black/60 border border-white/5 rounded-full px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                                />
                                <button type="submit" disabled={!inputText.trim()} className="h-10 w-10 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 disabled:opacity-40 select-none cursor-pointer">
                                  <Send className="h-4 w-4" />
                                </button>
                              </form>
                            </div>
                          )}

                          {/* 2. SECURE DM VIEW CHANNELS (Mirroring Screenshot 6) */}
                          {activeTab === "dm" && (
                            <div className="flex-1 flex flex-col justify-between">
                              <div className="flex-1 space-y-3.5 py-2">
                                <div className="text-center my-1 select-none flex flex-col items-center justify-center">
                                  <span className="text-[8px] font-mono text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                                    <Lock className="h-2 w-2" /> Encrypted DH Channel
                                  </span>
                                </div>

                                {dmMessages.map((msg) => {
                                  const isUser = msg.sender === "user";
                                  return (
                                    <div key={msg.id} className={`flex items-start gap-2 max-w-[85%] ${isUser ? "self-end justify-end ml-auto" : "self-start justify-start"}`}>
                                      {!isUser && getActiveSnailAvatar(msg.avatar, 24)}
                                      <div className="flex flex-col">
                                        {!isUser && <span className="text-[8.5px] font-sans text-neutral-400 ml-1.5">elish</span>}
                                        <div className={`p-2.5 rounded-2xl text-xs font-sans leading-snug shadow-md ${
                                          isUser 
                                            ? "bg-brand-blue text-white rounded-tr-none text-right" 
                                            : "bg-[#181F3B] text-neutral-100 rounded-tl-none border border-white/5"
                                        }`}>
                                          <p style={{ fontSize: `${messageSize}px` }} className="font-sans font-normal">{msg.text}</p>
                                        </div>
                                        <span className="text-[8px] font-mono opacity-50 px-1 mt-0.5 mt-1 block text-right text-emerald-400">
                                          {msg.time} {isUser && "✓✓"}
                                        </span>
                                      </div>
                                      {isUser && getActiveSnailAvatar(msg.avatar, 24)}
                                    </div>
                                  );
                                })}
                                <div ref={messagesEndRef} />
                              </div>

                              <form onSubmit={handleSendMessage} className="mt-2 flex items-center gap-1.5">
                                <input
                                  type="text"
                                  value={inputText}
                                  onChange={(e) => setInputText(e.target.value)}
                                  placeholder="Type a message..."
                                  className="flex-1 bg-black/60 border border-white/5 rounded-full px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                                />
                                <button type="submit" disabled={!inputText.trim()} className="h-10 w-10 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 disabled:opacity-40 select-none cursor-pointer">
                                  <Send className="h-4 w-4" />
                                </button>
                              </form>
                            </div>
                          )}

                          {/* 3. MESH NETWORK VIEW MAP (Mirroring Screenshot 5 Node Graph) */}
                          {activeTab === "map" && (
                            <div className="flex-1 flex flex-col items-center justify-center space-y-12 py-10">
                              <div className="relative w-full h-48 flex items-center justify-center">
                                {/* Diagonal network SVG lines */}
                                <svg className="absolute inset-0 w-full h-full">
                                  <line x1="33%" y1="50%" x2="67%" y2="50%" stroke="#3B82F6" strokeWidth="2.5" />
                                </svg>

                                {/* Snail Node 1: Prajwal */}
                                <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                  <div className="h-16 w-16 rounded-full border-2 border-cyan-400 p-0.5 bg-[#090D1A] flex items-center justify-center animate-pulse">
                                    {getActiveSnailAvatar(selectedAvatar, 52)}
                                  </div>
                                  <span className="text-[10px] font-sans text-white font-semibold mt-1.5">{username}</span>
                                </div>

                                {/* Snail Node 2: elish */}
                                <div className="absolute right-[20%] top-[50%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                  <div className="h-16 w-16 rounded-full border-2 border-purple-500 p-0.5 bg-[#090D1A] flex items-center justify-center">
                                    {getActiveSnailAvatar("elish", 52)}
                                  </div>
                                  <span className="text-[10px] font-sans text-neutral-300 font-semibold mt-1.5">elish</span>
                                </div>
                              </div>

                              <div className="text-center max-w-[210px] space-y-1">
                                <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                                  COOPERATIVE VECTOR MATCH
                                </span>
                                <p className="text-[10px] text-neutral-400 leading-normal">
                                  Currently routing peer telemetry across 2 mesh devices securely.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* 4. SETTINGS VIEW (Mirroring Screenshot 2) */}
                          {activeTab === "settings" && (
                            <div className="flex-1 space-y-5 text-left py-2">
                              {/* Snail Profile representation header */}
                              <div className="flex flex-col items-center py-2 text-center">
                                <div className="w-14 h-14 rounded-full bg-[#181F3B] border border-white/10 flex items-center justify-center p-1">
                                  {getActiveSnailAvatar(selectedAvatar, 48)}
                                </div>
                                <h3 className="font-sans font-bold text-sm text-white mt-1.5">{username}</h3>
                                <span className="font-mono text-[8px] text-neutral-400">Node ID: RZ4E9I24</span>
                              </div>

                              {/* CHAT EXPERIENCE SECTION */}
                              <div className="space-y-2">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-400 pl-1">
                                  CHAT EXPERIENCE
                                </span>
                                <div className="bg-[#11162d]/90 rounded-xl overflow-hidden divide-y divide-white/5 border border-white/5 text-[11px] font-sans">
                                  
                                  {/* Font Size Selector representation */}
                                  <div className="p-3 flex items-center justify-between hover:bg-white/5 transition cursor-pointer" onClick={() => setMessageSize((prev) => (prev === 16 ? 14 : 16))}>
                                    <div>
                                      <p className="font-semibold text-white">Message Text Size</p>
                                      <span className="text-[9px] text-neutral-400">{messageSize} sp</span>
                                    </div>
                                    <ChevronRight className="h-3.5 w-3.5 text-neutral-500" />
                                  </div>

                                  <div className="p-3 flex items-center justify-between hover:bg-white/5 transition cursor-pointer select-none">
                                    <div>
                                      <p className="font-semibold text-red-400">Clear Chat History</p>
                                      <span className="text-[9px] text-red-400/60">Delete all messages</span>
                                    </div>
                                  </div>

                                </div>
                              </div>

                              {/* NETWORK & P2P SECTION */}
                              <div className="space-y-2">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-[#00ebc7] pl-1 uppercase">
                                  Network & P2P
                                </span>
                                <div className="bg-[#11162d]/90 rounded-xl overflow-hidden divide-y divide-white/5 border border-white/5 text-[11px] font-sans">
                                  
                                  <div className="p-3 flex items-center justify-between hover:bg-white/5 transition cursor-pointer" onClick={() => setCurrentTTL((prev) => (prev === 3 ? 5 : 3))}>
                                    <div>
                                      <p className="font-semibold text-white">Default TTL</p>
                                      <span className="text-[9px] text-neutral-400">Current limit: {currentTTL} hops</span>
                                    </div>
                                    <ChevronRight className="h-3.5 w-3.5 text-neutral-500" />
                                  </div>

                                  <div className="p-3 flex items-center justify-between hover:bg-white/5 transition-colors select-none">
                                    <div>
                                      <p className="font-semibold text-white">Show Node ID</p>
                                      <span className="text-[9px] text-neutral-400">Display unique identifier</span>
                                    </div>
                                    <button 
                                      type="button"
                                      onClick={() => setShowNodeId(!showNodeId)}
                                      className={`h-4.5 w-8 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${showNodeId ? "bg-cyan-500 justify-end" : "bg-neutral-700 justify-start"}`}
                                    >
                                      <span className="h-3.5 w-3.5 rounded-full bg-white shadow"></span>
                                    </button>
                                  </div>

                                  <div className="p-3 flex items-center justify-between hover:bg-white/5 transition-colors select-none">
                                    <div>
                                      <p className="font-semibold text-white">Enable Gateway Sync</p>
                                      <span className="text-[9px] text-neutral-400">Background synchronization</span>
                                    </div>
                                    <button 
                                      type="button"
                                      onClick={() => setGatewaySync(!gatewaySync)}
                                      className={`h-4.5 w-8 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${gatewaySync ? "bg-purple-500 justify-end" : "bg-neutral-700 justify-start"}`}
                                    >
                                      <span className="h-3.5 w-3.5 rounded-full bg-white shadow"></span>
                                    </button>
                                  </div>

                                </div>
                              </div>

                              {/* DEVELOPER TOOLS SECTION */}
                              <div className="space-y-2">
                                <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 pl-1 uppercase">
                                  Developer Tools
                                </span>
                                <div className="bg-[#11162d]/90 rounded-xl overflow-hidden border border-white/5 text-[11px] font-sans">
                                  <div 
                                    onClick={() => setActiveTab("debug")}
                                    className="p-3 flex items-center justify-between hover:bg-white/5 transition cursor-pointer text-left"
                                  >
                                    <div>
                                      <p className="font-semibold text-white">Debug Panel</p>
                                      <span className="text-[9px] text-neutral-400">Diagnostic tools</span>
                                    </div>
                                    <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                                  </div>
                                </div>
                              </div>

                            </div>
                          )}

                          {/* 5. DEBUG PANEL VIEW (Mirroring Screenshot 3 Diagnostics) */}
                          {activeTab === "debug" && (
                            <div className="flex-1 text-left space-y-4 py-2 text-[10.5px]">
                              
                              <div className="space-y-2">
                                <span className="text-[9px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-1">Debug Info</span>
                                <div className="bg-[#11162d]/85 rounded-xl border border-white/5 p-3.5 space-y-2 text-neutral-300 font-sans">
                                  <div className="flex justify-between"><span className="text-neutral-400 font-light">Node ID</span><span className="font-mono text-cyan-400">RZ4E9I24</span></div>
                                  <div className="flex justify-between"><span className="text-neutral-400 font-light">Username</span><span>{username}</span></div>
                                  <div className="flex justify-between"><span className="text-neutral-400 font-light">Default TTL</span><span>{currentTTL} hops</span></div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <span className="text-[9px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-1">Nearby Readiness</span>
                                <div className="bg-[#11162d]/85 rounded-xl border border-white/5 p-3.5 space-y-2 text-neutral-300 font-sans">
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Bluetooth</span>
                                    <span className="font-mono font-bold text-cyan-400 flex items-center gap-1">ON</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Wi-Fi</span>
                                    <span className="font-mono font-bold text-cyan-400">ON</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Location Services</span>
                                    <span className="font-mono font-bold text-cyan-400">ON</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Permissions</span>
                                    <span className="font-mono font-bold text-cyan-400">GRANTED</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Battery Optimization</span>
                                    <span className="font-mono font-bold text-white">ENABLED</span>
                                  </div>
                                  <div className="border-t border-white/5 mt-2 pt-2 flex justify-between">
                                    <span className="text-neutral-400 font-semibold">Nearby Ready</span>
                                    <span className="font-mono font-extrabold text-[#06B6D4]">YES</span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <span className="text-[9px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-1">Peers & Database</span>
                                <div className="bg-[#11162d]/85 rounded-xl border border-white/5 p-3.5 space-y-2 text-neutral-300 font-sans">
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Connected Peers</span>
                                    <span className="font-mono font-bold text-emerald-400">1 Active</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Stored Messages</span>
                                    <span className="font-mono font-bold">4</span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <span className="text-[9px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-1">Network Metrics</span>
                                <div className="bg-[#11162d]/85 rounded-xl border border-white/5 p-3.5 space-y-1 text-neutral-300 font-sans">
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400 font-light">Average Latency</span>
                                    <span className="font-mono">0ms</span>
                                  </div>
                                </div>
                              </div>

                            </div>
                          )}

                        </div>

                      </div>

                      {/* TABS BAR (Faithful reproduction of bottom bar in Screenshot 4) */}
                      <div className="bg-[#11162d] border-t border-brand-card-border/60 py-2.5 px-3 flex items-center justify-around relative z-30 select-none">
                        
                        <button 
                          onClick={() => setActiveTab("dm")} 
                          className={`flex flex-col items-center gap-1 cursor-pointer transition select-none ${activeTab === "dm" ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                        >
                          <MessageSquare className="h-4.5 w-4.5" />
                          <span className="text-[9px] font-sans font-medium">DM</span>
                        </button>

                        <button 
                          onClick={() => setActiveTab("local")} 
                          className={`flex flex-col items-center gap-1 cursor-pointer transition select-none ${activeTab === "local" ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                        >
                          <Globe className="h-4.5 w-4.5" />
                          <span className="text-[9px] font-sans font-medium">Local</span>
                        </button>

                        <button 
                          onClick={() => setActiveTab("settings")} 
                          className={`flex flex-col items-center gap-1 cursor-pointer transition select-none ${["settings", "debug"].includes(activeTab) ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                        >
                          <div className="w-5 h-5 rounded-full overflow-hidden bg-[#1f2937] border border-white/10 flex items-center justify-center p-0.5">
                            {getActiveSnailAvatar(selectedAvatar, 14)}
                          </div>
                          <span className="text-[9px] font-sans font-medium">Profile</span>
                        </button>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Simulated Navigation pill at the base */}
              <div className="bg-[#090D1A] pb-2 pt-1 flex items-center justify-center relative z-40 select-none pointer-events-none">
                <div className="w-24 h-1 g-neutral-600 rounded-full" />
              </div>

            </div>

          </div>

        </div>

        {/* Dynamic Photo/Screen Grid mimicking real uploaded screenshot files */}
        <div id="gallery-showcase" className="border-t border-brand-card-border/60 pt-20">
          <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#06B6D4] bg-[#06B6D4]/10 border border-[#06B6D4]/20 px-2.5 py-1 rounded-full font-bold animate-pulse">
                App Gallery
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Visual Device Showcase
              </h3>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mt-1 max-w-xl">
                See exactly how Pirate Link renders on standard Android configurations. Click into specific tabs inside the active emulator above to inspect the corresponding live screen.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Screenshot Card 1: Setup Snail */}
            <div className="bg-[#0e142e]/40 border border-brand-card-border rounded-2xl p-5 hover:border-[#102a45] transition-all duration-300 flex flex-col justify-between">
              <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-[9/16] border border-white/5 flex flex-col justify-between p-5 group select-none">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-500">
                  <span>SCREEN_LOGIN_SETUP</span>
                  <span className="text-cyan-400">PIRATELINK</span>
                </div>
                
                {/* Visual rendering of setup screen */}
                <div className="flex-1 flex flex-col justify-between py-6">
                  {/* Logo header */}
                  <div className="text-center space-y-1.5 flex flex-col items-center">
                    <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-cyan-500/30 bg-cyan-950/20">
                      <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center">
                        <span className="text-cyan-400 font-display font-extrabold text-sm">P</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-sm text-white tracking-tight">PirateLink</h3>
                    <p className="text-[9px] font-sans text-neutral-400">Decentralized mesh messaging</p>
                  </div>

                  {/* Avatar Selector Board */}
                  <div className="flex flex-col items-center">
                    <div className="relative h-20 w-20 rounded-full border border-dashed border-cyan-500/60 p-1 bg-cyan-950/20 flex items-center justify-center">
                      <HeadphoneSnail size={76} />
                    </div>
                  </div>

                  {/* Input and Button representation */}
                  <div className="space-y-2">
                    <div className="w-full bg-black/50 border border-[#22D3EE]/20 text-[10px] py-2 px-3 rounded-lg text-center text-white/90 font-sans shadow-sm">
                      Prajwal
                    </div>
                    <div className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-display font-medium text-[9.5px] py-2.5 rounded-lg text-center tracking-wide uppercase transition hover:brightness-115">
                      Let&apos;s Go
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-sans text-neutral-400 leading-normal border-t border-white/5 pt-2">
                  <strong className="text-white">1. Get Started (Avatar Welcome)</strong>
                  <p className="text-[10px] text-neutral-500">Cycle through adorable headphone snail icons to represent your node</p>
                </div>
              </div>
              <h4 className="font-display font-semibold text-white mt-4 text-xs sm:text-sm">
                Avatar Welcome Setup
              </h4>
              <p className="font-sans text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                Clean and low-resource start page that automatically registers user nodes onto the active mesh frequency.
              </p>
            </div>

            {/* Screenshot Card 2: Settings Stream */}
            <div className="bg-[#0e142e]/40 border border-brand-card-border rounded-2xl p-5 hover:border-[#102a45] transition-all duration-300 flex flex-col justify-between">
              <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-[9/16] border border-white/5 flex flex-col justify-between p-5 group select-none">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-500">
                  <span>SCREEN_SETTINGS</span>
                  <span className="text-purple-400 font-bold">P2P_MESH</span>
                </div>

                {/* Snail Settings Panel rendering */}
                <div className="py-2 flex-1 flex flex-col justify-between my-4">
                  {/* Avatar section of Settings screen */}
                  <div className="flex flex-col items-center py-1">
                    <div className="w-11 h-11 rounded-full bg-[#181F3B] border border-white/10 flex items-center justify-center p-0.5">
                      <PrajwalSnail size={38} />
                    </div>
                    <h3 className="font-sans font-bold text-xs text-white mt-1">Prajwal</h3>
                    <span className="font-mono text-[8px] text-neutral-500">Node ID: RZ4E9I24</span>
                  </div>

                  {/* Options Settings */}
                  <div className="space-y-2 text-left">
                    <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-400 pl-1 uppercase block">
                      Chat & Network Configuration
                    </span>
                    <div className="bg-[#11162d]/90 rounded-lg border border-white/5 text-[9px] font-sans divide-y divide-white/5">
                      <div className="p-2 flex items-center justify-between text-neutral-200">
                        <span>Message Text Size</span>
                        <span className="text-neutral-500 font-mono">16 sp</span>
                      </div>
                      <div className="p-2 flex items-center justify-between text-neutral-200">
                        <span>Default TTL Limit</span>
                        <span className="text-neutral-500 font-mono">3 hops</span>
                      </div>
                      <div className="p-2 flex items-center justify-between text-[#a855f7] font-semibold">
                        <span>Background Gateway Sync</span>
                        <span>ON</span>
                      </div>
                    </div>
                  </div>

                  {/* Pseudo Bottom Bar representation */}
                  <div className="flex justify-around items-center border-t border-white/5 pt-2 text-neutral-500 text-[9px] font-medium tracking-wide">
                    <span>Chat Messages</span>
                    <span className="text-cyan-400 transition font-bold border-b border-cyan-400/30">Profile Settings</span>
                  </div>
                </div>

                <div className="text-[11px] font-sans text-neutral-400 leading-normal border-t border-white/5 pt-2">
                  <strong className="text-white">2. Low Energy P2P Settings</strong>
                  <p className="text-[10px] text-neutral-500">Configure background gateway sync, unique addresses, & custom text sizing</p>
                </div>
              </div>
              <h4 className="font-display font-semibold text-white mt-4 text-xs sm:text-sm">
                Adaptive Node Options
              </h4>
              <p className="font-sans text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                Tweak default network limits to configure packet hops and synchronization behaviors perfectly.
              </p>
            </div>

            {/* Screenshot Card 3: Peer Node Map */}
            <div className="bg-[#0e142e]/40 border border-[#22d3ee]/20 hover:border-[#22d3ee]/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between">
              <div className="relative rounded-xl overflow-hidden bg-black/60 aspect-[9/16] border border-white/5 flex flex-col justify-between p-5 group select-none">
                <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] font-mono text-neutral-500">
                  <span>SCREEN_MESH_MAP</span>
                  <span className="text-emerald-400">COOPERATIVE</span>
                </div>

                {/* Snail Map Node Vector representation drawing */}
                <div className="py-2 flex-1 flex flex-col justify-between my-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-1 select-none">
                    <span className="font-display font-bold text-[8.5px] text-white uppercase tracking-wider">Mesh Topology</span>
                    <span className="text-[7.5px] font-mono text-emerald-400 tracking-wider">● ACTIVE</span>
                  </div>

                  {/* Map representation with snail nodes */}
                  <div className="relative w-full h-24 flex items-center justify-center my-3">
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="4 2" />
                    </svg>
                    <div className="absolute left-[30%] -translate-x-1/2 flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full border-2 border-cyan-400 p-0.5 bg-[#090D1A] flex items-center justify-center shadow-lg">
                        <PrajwalSnail size={32} />
                      </div>
                      <span className="text-[7.5px] text-white font-medium mt-1">Prajwal</span>
                    </div>
                    <div className="absolute right-[30%] translate-x-1/2 flex flex-col items-center">
                      <div className="h-10 w-10 rounded-full border-2 border-purple-500 p-0.5 bg-[#090D1A] flex items-center justify-center shadow-lg">
                        <ElishSnail size={32} />
                      </div>
                      <span className="text-[7.5px] text-neutral-300 font-medium mt-1">elish</span>
                    </div>
                  </div>

                  {/* Hop overlay indicator board */}
                  <div className="border border-emerald-500/25 rounded-lg p-2 bg-emerald-500/5 text-center w-full">
                    <span className="text-[8px] font-bold text-emerald-400 block tracking-wider uppercase">COOPERATIVE HOP ACTIVE</span>
                    <span className="text-[7px] text-neutral-500 block leading-snug">Encrypted point-to-point mesh grid spanning active devices</span>
                  </div>
                </div>

                <div className="text-[11px] font-sans text-neutral-400 leading-normal border-t border-white/5 pt-2">
                  <strong className="text-white">3. Cooperative Vector Mesh</strong>
                  <p className="text-[10px] text-neutral-500">Autonomous dynamic mesh mapping tracing active paths</p>
                </div>
              </div>
              <h4 className="font-display font-semibold text-white mt-4 text-xs sm:text-sm">
                Snail Vector Topology Map
              </h4>
              <p className="font-sans text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                Visually track nearby peer snails and check their direct handshake lines and connection latency live.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
