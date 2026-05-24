import { useState, useRef, useEffect, FormEvent } from "react";
import { 
  Send, 
  Radio, 
  ArrowLeft, 
  Settings as SettingsIcon, 
  Globe, 
  Lock, 
  Shield, 
  ChevronRight, 
  MessageSquare
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

export default function AndroidEmulator() {
  const [isSetUp, setIsSetUp] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<"headphones" | "prajwal" | "elish">("headphones");
  const [username, setUsername] = useState("Prajwal");
  const [activeTab, setActiveTab] = useState<"dm" | "local" | "map" | "settings" | "debug">("local");
  
  // Settings Screen toggles
  const [gatewaySync, setGatewaySync] = useState(true);
  const [showNodeId, setShowNodeId] = useState(false);
  const [messageSize, setMessageSize] = useState(14);
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
    <div className="relative w-[310px] sm:w-[335px] h-[610px] bg-[#030712] rounded-[42px] border-[10px] border-neutral-800 shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      
      {/* Camera Notch Container */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-5 bg-neutral-800 rounded-full z-40 flex items-center justify-between px-3 select-none pointer-events-none">
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <span className="text-[8px] font-mono text-neutral-400 tracking-wide">3:05 PM</span>
        <span className="w-2 h-0.5 bg-black/40 rounded-full"></span>
      </div>

      {/* Simulated Device Status bar */}
      <div className="bg-[#090D1A] pt-8 px-5 pb-1.5 flex items-center justify-between text-[8px] font-mono font-medium text-neutral-500 relative z-30 select-none">
        <div className="flex items-center space-x-1 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-full">
          <Radio className="h-2.5 w-2.5 text-blue-400 animate-pulse" />
          <span className="text-blue-400 font-semibold uppercase text-[7px]">2 devices</span>
        </div>
        <div className="flex items-center space-x-1 text-neutral-400">
          <span>Vo LTE</span>
          <span>5G</span>
          <span className="text-emerald-400">30%</span>
        </div>
      </div>

      {/* EMULATOR SCREEN DISPLAY */}
      <div className="flex-1 bg-[#090D1A] flex flex-col justify-between relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* SCREEN 1: GET STARTED / SIGN UP SCREEN */}
          {!isSetUp ? (
            <motion.div
              key="setup-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4.5 flex flex-col justify-between"
            >
              {/* Logo header */}
              <div className="text-center pt-1.5 space-y-1 flex flex-col items-center">
                <div className="relative flex items-center justify-center w-11 h-11 rounded-full border border-cyan-500/30 bg-cyan-950/20 animate-pulse">
                  <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center">
                    <span className="text-cyan-400 font-display font-extrabold text-lg">P</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-white tracking-tight">PirateLink</h3>
                <p className="text-[10px] font-sans text-neutral-400">Decentralized mesh messaging</p>
              </div>

              {/* Avatar Selector Board */}
              <div className="flex flex-col items-center space-y-2">
                <div 
                  onClick={handleCycleAvatar}
                  className="relative h-24 w-24 rounded-full border-2 border-dashed border-cyan-500/60 p-0.5 bg-cyan-950/20 flex items-center justify-center group cursor-pointer hover:border-cyan-400 transition"
                >
                  {getActiveSnailAvatar(selectedAvatar, 90)}
                  
                  {/* Pulsing ring indicator */}
                  <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse pointer-events-none"></div>
                </div>
                
                <button 
                  onClick={handleCycleAvatar}
                  className="text-[#06B6D4] text-[10px] font-sans tracking-tight font-medium hover:brightness-110 active:scale-95 transition"
                >
                  Tap to choose avatar
                </button>
              </div>

              {/* Input fields */}
              <div className="space-y-3">
                <div className="space-y-1 text-center">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    maxLength={16}
                    placeholder="Choose a username"
                    className="w-full bg-black/60 text-white border border-[#22D3EE]/20 hover:border-[#22D3EE]/40 text-[11px] py-2.5 px-3 rounded-lg text-center focus:outline-none focus:border-cyan-400 font-sans transition placeholder-neutral-600 shadow"
                  />
                  <span className="text-[8px] font-mono text-neutral-500">3-16 characters</span>
                </div>

                {/* Let's Go Activation button */}
                <button
                  onClick={() => {
                    if (username.trim().length >= 3) {
                      setIsSetUp(true);
                    }
                  }}
                  disabled={username.trim().length < 3}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:brightness-110 active:scale-95 text-white font-display font-bold text-[11px] py-3 rounded-lg cursor-pointer transition shadow-lg shadow-cyan-500/10 disabled:opacity-40"
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
                <div className="bg-[#11162d]/95 p-2.5 border-b border-brand-card-border/60 flex items-center justify-between select-none shadow">
                  
                  {activeTab === "local" && (
                    <>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-display font-bold text-xs text-white tracking-tight flex items-center gap-1">
                          <div className="relative flex items-center justify-center w-4 h-4 rounded-full border border-cyan-400 bg-cyan-950/20 text-[8px] text-cyan-400 font-display font-extrabold pr-0.5">P</div>
                          PirateLink
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[8px] font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 select-none">
                          <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></span>
                          1 peer
                        </span>
                        <button onClick={() => setActiveTab("settings")} className="text-neutral-400 hover:text-white transition">
                          <SettingsIcon className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </>
                  )}

                  {activeTab === "dm" && (
                    <>
                      <div className="flex items-center space-x-1.5">
                        <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white mr-0.5">
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <div className="relative w-5 h-5 rounded-full overflow-hidden bg-purple-900 border border-white/10 flex items-center justify-center">
                          <ElishSnail size={20} />
                        </div>
                        <div className="text-left">
                          <h4 className="text-[10px] font-bold text-white leading-none">elish</h4>
                          <span className="text-[7.5px] text-neutral-400 font-sans tracking-wide">Direct Message</span>
                        </div>
                      </div>
                      <Lock className="h-3 w-3 text-cyan-400" />
                    </>
                  )}

                  {activeTab === "map" && (
                    <>
                      <div className="flex items-center space-x-1.5">
                        <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white">
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <span className="font-display font-bold text-[10px] text-white uppercase tracking-wider">Mesh Network</span>
                      </div>
                      <span className="text-[8px] font-mono text-emerald-400">ACTIVE</span>
                    </>
                  )}

                  {activeTab === "settings" && (
                    <>
                      <div className="flex items-center space-x-1.5">
                        <button onClick={() => setActiveTab("local")} className="text-neutral-400 hover:text-white">
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <span className="font-display font-bold text-[10px] text-white tracking-wider">Settings</span>
                      </div>
                      <span className="text-[7px] font-mono text-neutral-500">ID: RZ4E9</span>
                    </>
                  )}

                  {activeTab === "debug" && (
                    <>
                      <div className="flex items-center space-x-1.5">
                        <button onClick={() => setActiveTab("settings")} className="text-neutral-400 hover:text-white">
                          <ArrowLeft className="h-3.5 w-3.5" />
                        </button>
                        <span className="font-display font-bold text-[10px] text-white tracking-wider">Debug Panel</span>
                      </div>
                      <span className="text-[7px] stroke-cyan bg-cyan-400/10 text-cyan-400 px-1 py-0.5 rounded font-mono">1.4_v</span>
                    </>
                  )}

                </div>

                {/* SCREEN BODY SCROLL CHANNELS */}
                <div className="flex-1 overflow-y-auto p-3 flex flex-col bg-[#070b16]">
                  
                  {/* 1. LOCAL CHAT CHANNEL VIEW */}
                  {activeTab === "local" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex-1 space-y-2.5 py-1">
                        <div className="text-center my-0.5 select-none">
                          <span className="text-[8px] font-mono text-neutral-500 bg-white/5 px-2 py-0.5 rounded-full">
                            Connected: elish
                          </span>
                        </div>

                        {localMessages.map((msg) => {
                          const isUser = msg.sender === "user";
                          return (
                            <div key={msg.id} className={`flex items-start gap-1.5 max-w-[85%] ${isUser ? "self-end justify-end ml-auto" : "self-start justify-start"}`}>
                              {!isUser && getActiveSnailAvatar(msg.avatar, 18)}
                              <div className="flex flex-col">
                                {!isUser && <span className="text-[7.5px] font-sans text-neutral-500 ml-1 mb-0.5">{username === "elish" ? "Prajwal" : "elish"}</span>}
                                <div className={`p-2 rounded-xl text-[11px] font-sans leading-snug shadow-sm ${
                                  isUser 
                                    ? "bg-brand-blue text-white rounded-tr-none text-right" 
                                    : "bg-[#181F3B] text-neutral-100 rounded-tl-none border border-white/5"
                                }`}>
                                  <p style={{ fontSize: `${messageSize}px` }} className="font-sans font-normal">{msg.text}</p>
                                </div>
                                <span className="text-[7px] font-mono opacity-50 px-1 mt-0.5 block text-right text-neutral-400">
                                  {msg.time} {isUser && (msg.status === "delivered" ? "✓✓" : "•")}
                                </span>
                              </div>
                              {isUser && getActiveSnailAvatar(msg.avatar, 18)}
                            </div>
                          );
                        })}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Input panel directly inside chat tab */}
                      <form onSubmit={handleSendMessage} className="mt-1 flex items-center gap-1">
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="Type a message..."
                          className="flex-1 bg-black/60 border border-white/5 rounded-full px-3 py-1.5 text-[10px] text-white focus:outline-none focus:border-cyan-400"
                        />
                        <button type="submit" disabled={!inputText.trim()} className="h-7 w-7 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 disabled:opacity-40 select-none cursor-pointer">
                          <Send className="h-3 w-3" />
                        </button>
                      </form>
                    </div>
                  )}

                  {/* 2. SECURE DM VIEW CHANNELS */}
                  {activeTab === "dm" && (
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex-1 space-y-2.5 py-1">
                        <div className="text-center my-0.5 select-none flex flex-col items-center justify-center">
                          <span className="text-[7.5px] font-mono text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-0.5">
                            <Lock className="h-2 w-2" /> Encrypted DH Channel
                          </span>
                        </div>

                        {dmMessages.map((msg) => {
                          const isUser = msg.sender === "user";
                          return (
                            <div key={msg.id} className={`flex items-start gap-1.5 max-w-[85%] ${isUser ? "self-end justify-end ml-auto" : "self-start justify-start"}`}>
                              {!isUser && getActiveSnailAvatar(msg.avatar, 18)}
                              <div className="flex flex-col">
                                {!isUser && <span className="text-[7.5px] font-sans text-neutral-500 ml-1 mb-0.5">elish</span>}
                                <div className={`p-2 rounded-xl text-[11px] font-sans leading-snug shadow-sm ${
                                  isUser 
                                    ? "bg-brand-blue text-white rounded-tr-none text-right" 
                                    : "bg-[#181F3B] text-neutral-100 rounded-tl-none border border-white/5"
                                }`}>
                                  <p style={{ fontSize: `${messageSize}px` }} className="font-sans font-normal">{msg.text}</p>
                                </div>
                                <span className="text-[7px] font-mono opacity-50 px-1 mt-0.5 block text-right text-emerald-400">
                                  {msg.time} {isUser && "✓✓"}
                                </span>
                              </div>
                              {isUser && getActiveSnailAvatar(msg.avatar, 18)}
                            </div>
                          );
                        })}
                        <div ref={messagesEndRef} />
                      </div>

                      <form onSubmit={handleSendMessage} className="mt-1 flex items-center gap-1">
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="Type a message..."
                          className="flex-1 bg-black/60 border border-white/5 rounded-full px-3 py-1.5 text-[10px] text-white focus:outline-none focus:border-cyan-400"
                        />
                        <button type="submit" disabled={!inputText.trim()} className="h-7 w-7 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:brightness-110 active:scale-95 disabled:opacity-40 select-none cursor-pointer">
                          <Send className="h-3 w-3" />
                        </button>
                      </form>
                    </div>
                  )}

                  {/* 3. MESH NETWORK VIEW MAP */}
                  {activeTab === "map" && (
                    <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-4">
                      <div className="relative w-full h-32 flex items-center justify-center">
                        {/* Diagonal network SVG lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <line x1="33%" y1="50%" x2="67%" y2="50%" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 3"/>
                        </svg>

                        {/* Snail Node 1: Prajwal */}
                        <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full border border-cyan-400 p-0.5 bg-[#090D1A] flex items-center justify-center animate-pulse shadow-md">
                            {getActiveSnailAvatar(selectedAvatar, 38)}
                          </div>
                          <span className="text-[8px] font-sans text-white font-semibold mt-1">{username}</span>
                        </div>

                        {/* Snail Node 2: elish */}
                        <div className="absolute right-[20%] top-[50%] translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                          <div className="h-12 w-12 rounded-full border border-purple-500 p-0.5 bg-[#090D1A] flex items-center justify-center shadow-md">
                            {getActiveSnailAvatar("elish", 38)}
                          </div>
                          <span className="text-[8px] font-sans text-neutral-300 font-semibold mt-1">elish</span>
                        </div>
                      </div>

                      <div className="text-center max-w-[180px] space-y-1">
                        <span className="text-[7.5px] font-mono font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded-full border border-cyan-400/20">
                          COOPERATIVE VECTOR MATCH
                        </span>
                        <p className="text-[8px] text-neutral-400 leading-normal">
                          Routing offline mesh tokens across {username} & elish handshakes beautifully.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 4. SETTINGS VIEW */}
                  {activeTab === "settings" && (
                    <div className="flex-1 space-y-3.5 text-left py-1">
                      {/* Snail Profile representation header */}
                      <div className="flex flex-col items-center py-1 text-center">
                        <div className="w-11 h-11 rounded-full bg-[#181F3B] border border-white/10 flex items-center justify-center p-0.5">
                          {getActiveSnailAvatar(selectedAvatar, 38)}
                        </div>
                        <h3 className="font-sans font-bold text-xs text-white mt-1">{username}</h3>
                        <span className="font-mono text-[7px] text-neutral-500">Node ID: RZ4E9I24</span>
                      </div>

                      {/* CHAT EXPERIENCE SECTION */}
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono font-bold tracking-widest text-cyan-400 pl-0.5">
                          CHAT EXPERIENCE
                        </span>
                        <div className="bg-[#11162d]/90 rounded-lg overflow-hidden divide-y divide-white/5 border border-white/5 text-[10px] font-sans">
                          
                          {/* Font Size Selector representation */}
                          <div className="p-2 flex items-center justify-between hover:bg-white/5 transition cursor-pointer" onClick={() => setMessageSize((prev) => (prev === 14 ? 12 : 14))}>
                            <div>
                              <p className="font-semibold text-white">Message Text Size</p>
                              <span className="text-[8px] text-neutral-400">{messageSize} sp</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-neutral-500" />
                          </div>

                          <div className="p-2 flex items-center justify-between hover:bg-white/5 transition cursor-pointer select-none">
                            <div>
                              <p className="font-semibold text-red-400">Clear Chat History</p>
                              <span className="text-[8px] text-red-500/60">Delete all messages</span>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* NETWORK & P2P SECTION */}
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono font-bold tracking-widest text-[#00ebc7] pl-0.5 uppercase">
                          Network & P2P
                        </span>
                        <div className="bg-[#11162d]/90 rounded-lg overflow-hidden divide-y divide-white/5 border border-white/5 text-[10px] font-sans">
                          
                          <div className="p-2 flex items-center justify-between hover:bg-white/5 transition cursor-pointer" onClick={() => setCurrentTTL((prev) => (prev === 3 ? 5 : 3))}>
                            <div>
                              <p className="font-semibold text-white">Default TTL</p>
                              <span className="text-[8px] text-neutral-400">Current limit: {currentTTL} hops</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-neutral-500" />
                          </div>

                          <div className="p-2 flex items-center justify-between hover:bg-white/5 transition-colors select-none">
                            <div>
                              <p className="font-semibold text-white">Show Node ID</p>
                              <span className="text-[8px] text-neutral-400">Display unique identifier</span>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setShowNodeId(!showNodeId)}
                              className={`h-3.5 w-6 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${showNodeId ? "bg-cyan-500 justify-end" : "bg-neutral-700 justify-start"}`}
                            >
                              <span className="h-2.5 w-2.5 rounded-full bg-white shadow"></span>
                            </button>
                          </div>

                          <div className="p-2 flex items-center justify-between hover:bg-white/5 transition-colors select-none">
                            <div>
                              <p className="font-semibold text-white">Enable Gateway Sync</p>
                              <span className="text-[8px] text-neutral-400">Background synchronization</span>
                            </div>
                            <button 
                              type="button"
                              onClick={() => setGatewaySync(!gatewaySync)}
                              className={`h-3.5 w-6 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${gatewaySync ? "bg-purple-500 justify-end" : "bg-neutral-700 justify-start"}`}
                            >
                              <span className="h-2.5 w-2.5 rounded-full bg-white shadow"></span>
                            </button>
                          </div>

                        </div>
                      </div>

                      {/* DEVELOPER TOOLS SECTION */}
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono font-bold tracking-widest text-neutral-500 pl-0.5 uppercase">
                          Developer Tools
                        </span>
                        <div className="bg-[#11162d]/90 rounded-lg overflow-hidden border border-white/5 text-[10px] font-sans">
                          <div 
                            onClick={() => setActiveTab("debug")}
                            className="p-2 flex items-center justify-between hover:bg-white/5 transition cursor-pointer text-left"
                          >
                            <div>
                              <p className="font-semibold text-white">Debug Panel</p>
                              <span className="text-[8px] text-neutral-400">Diagnostic tools</span>
                            </div>
                            <ChevronRight className="h-3 w-3 text-neutral-400" />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* 5. DEBUG PANEL VIEW */}
                  {activeTab === "debug" && (
                    <div className="flex-1 text-left space-y-3 py-1 text-[9.5px]">
                      
                      <div className="space-y-1">
                        <span className="text-[8px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-0.5">Debug Info</span>
                        <div className="bg-[#11162d]/85 rounded-lg border border-white/5 p-2.5 space-y-1.5 text-neutral-300 font-sans">
                          <div className="flex justify-between"><span className="text-neutral-400 font-light">Node ID</span><span className="font-mono text-cyan-400">RZ4E9I24</span></div>
                          <div className="flex justify-between"><span className="text-neutral-400 font-light">Username</span><span>{username}</span></div>
                          <div className="flex justify-between"><span className="text-neutral-400 font-light">Default TTL</span><span>{currentTTL} hops</span></div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[8px] font-mono tracking-wider font-bold text-neutral-400 uppercase pl-0.5">Nearby Readiness</span>
                        <div className="bg-[#11162d]/85 rounded-lg border border-white/5 p-2.5 space-y-1.5 text-neutral-300 font-sans">
                          <div className="flex justify-between">
                            <span className="text-neutral-400 font-light">Bluetooth</span>
                            <span className="font-mono font-bold text-cyan-400 flex items-center gap-0.5">ON</span>
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
                          <div className="border-t border-white/5 mt-1.5 pt-1.5 flex justify-between">
                            <span className="text-neutral-400 font-semibold">Nearby Ready</span>
                            <span className="font-mono font-extrabold text-[#06B6D4]">YES</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

              </div>

              {/* TABS BAR */}
              <div className="bg-[#11162d] border-t border-brand-card-border/60 py-2 px-2.5 flex items-center justify-around relative z-30 select-none">
                
                <button 
                  onClick={() => setActiveTab("dm")} 
                  className={`flex flex-col items-center gap-0.5 cursor-pointer transition select-none ${activeTab === "dm" ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span className="text-[8px] font-sans font-medium">DM</span>
                </button>

                <button 
                  onClick={() => setActiveTab("local")} 
                  className={`flex flex-col items-center gap-0.5 cursor-pointer transition select-none ${activeTab === "local" ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span className="text-[8px] font-sans font-medium">Local</span>
                </button>

                <button 
                  onClick={() => setActiveTab("settings")} 
                  className={`flex flex-col items-center gap-0.5 cursor-pointer transition select-none ${["settings", "debug"].includes(activeTab) ? "text-cyan-400" : "text-neutral-400 hover:text-white"}`}
                >
                  <div className="w-4 h-4 rounded-full overflow-hidden bg-[#1f2937] border border-white/10 flex items-center justify-center p-0.5">
                    {getActiveSnailAvatar(selectedAvatar, 12)}
                  </div>
                  <span className="text-[8px] font-sans font-medium">Profile</span>
                </button>

              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Simulated Navigation pill at the base */}
      <div className="bg-[#090D1A] pb-1.5 pt-0.5 flex items-center justify-center relative z-40 select-none pointer-events-none">
        <div className="w-16 h-0.5 bg-neutral-600 rounded-full" />
      </div>

    </div>
  );
}
