import { useState } from "react";
import { Download, Smartphone, Clipboard, ClipboardCheck, ArrowUpRight, Cpu, CheckCircle } from "lucide-react";

export default function Downloads() {
  const [copied, setCopied] = useState(false);
  const hashDigest = "b845dfdae732cf39cebd51ab1be3e4a9e598db4bc10ea1fed4e77cb070fc6cf9";

  const handleCopyHash = () => {
    navigator.clipboard.writeText(hashDigest);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const specs = [
    { name: "Current Version", value: "v1.4.2 (Production Build)" },
    { name: "File Size", value: "12.8 MB (Lightweight APK)" },
    { name: "Compatibility", value: "Android 8.0 (Oreo) and above" },
    { name: "Architectures", value: "arm64-v8a, armeabi-v7a, x86_64" },
    { name: "Required Hardware", value: "Bluetooth 4.2+ (LE Supported)" },
  ];

  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background soft glowing orb */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
            Get the Application
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Deploy Pirate Link on your device.
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Download the secure standalone APK directly. Follow local sideload installation guidelines to activate decentralized mesh messaging in minutes.
          </p>
        </div>

        {/* Content Block Detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Download APK Box */}
          <div className="md:col-span-6 bg-brand-card/30 border border-brand-card-border p-8 rounded-2xl flex flex-col justify-between items-center text-center relative overflow-hidden shadow-xl hover:border-brand-blue/20 transition duration-300">
            
            {/* Ambient visual overlay decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full pointer-events-none" />
            
            <div className="space-y-4 w-full flex flex-col items-center">
              <div className="p-4 bg-brand-cyan/10 border border-brand-cyan/20 rounded-2xl text-brand-cyan animate-pulse">
                <Smartphone className="h-8 w-8 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">Direct Android Installation</h3>
                <p className="text-xs text-neutral-400 mt-1">Sideload compatible with standard Android OS distributions.</p>
              </div>
            </div>

            {/* Click to trigger direct file simulation */}
            <div className="w-full space-y-3 pt-8 pb-3 relative z-10">
              <a
                href="/piratelink.apk"
                download="piratelink.apk"
                className="w-full flex items-center justify-center space-x-2.5 bg-gradient-to-r from-brand-blue to-brand-cyan hover:brightness-110 active:scale-95 text-white font-semibold py-4 px-6 rounded-xl transition duration-150 shadow-md shadow-brand-blue/15 cursor-pointer"
              >
                <Download className="h-5 w-5" />
                <span>Download standalone APK</span>
              </a>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl hover:bg-white/5 border border-white/5 text-neutral-300 hover:text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition duration-150 cursor-pointer"
              >
                <span>Compile from Source on GitHub</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

          {/* Technical release stats table columns */}
          <div className="md:col-span-6 bg-[#090D1A]/95 p-8 rounded-2xl border border-brand-card-border flex flex-col justify-between shadow-xl">
            <div className="space-y-5">
              <h3 className="text-xs font-mono font-bold uppercase text-brand-cyan tracking-wider pb-3 border-b border-white/5">
                Technical Specifications
              </h3>
              
              <div className="space-y-4 font-sans text-xs">
                {specs.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                    <span className="text-neutral-400 font-light">{item.name}</span>
                    <span className="text-white font-medium font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SHA-256 Checksum Container */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-neutral-400 font-bold tracking-wider uppercase">
                  SHA-256 Checksum hash
                </span>
                {copied ? (
                  <span className="text-[9px] text-green-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" /> Copied Code!
                  </span>
                ) : (
                  <span className="text-[10px] text-neutral-500 font-mono select-none">SHA256SECURE</span>
                )}
              </div>
              
              {/* Display Hash box */}
              <div className="flex items-stretch bg-black/60 rounded-xl border border-white/5 overflow-hidden">
                <div className="flex-1 p-3 font-mono text-[9px] text-[#06B6D4] select-all truncate">
                  {hashDigest}
                </div>
                <button
                  onClick={handleCopyHash}
                  className="px-3 border-l border-white/5 bg-[#131B35]/20 hover:bg-[#131B35]/50 text-neutral-400 hover:text-white transition duration-150 flex items-center justify-center cursor-pointer"
                  title="Copy SHA-256 checksum hash"
                  aria-label="Copy SHA-256 hash"
                >
                  {copied ? <ClipboardCheck className="h-3.5 w-3.5 text-green-400" /> : <Clipboard className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
