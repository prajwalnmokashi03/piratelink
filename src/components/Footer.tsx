import { Github, ArrowUpRight, Shield } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleMockClick = (label: string) => {
    alert(`This is a landing page demonstration for Pirate Link. Clicking '${label}' will route to live assets in production environments.`);
  };

  return (
    <footer id="footer" className="bg-[#070A14] border-t border-brand-card-border/80 text-neutral-400 py-16 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12 mb-12">
          
          {/* Column 1: App Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <img
                src={logo}
                alt="Pirate Link Logo"
                referrerPolicy="no-referrer"
                className="h-8 w-8 rounded-lg object-contain border border-[#22D3EE]/20 shadow-md shadow-brand-cyan/5"
              />
              <span className="font-display font-bold text-base text-white tracking-wide">
                Pirate Link
              </span>
            </div>
            
            <p className="text-neutral-500 max-w-sm leading-relaxed font-light">
              Pioneering self-governing local mesh routing frameworks on mobile architectures. Built without dependencies on modern satellite grids, cell carriers, or state-run internet access points, we believe offline messaging is a public utility.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6">
            
            {/* Column 2: Specs */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[10px]">
                System
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleMockClick("Local Peer Protocols")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Local Peer Protocols
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Mesh Topologies")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Mesh Topologies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Cipher Handbooks")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Cipher Handbooks
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[10px]">
                Project
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/prajwalnmokashi03/piratelink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition flex items-center gap-1.5"
                  >
                    <span>View GitHub Repository</span>
                    <Github className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Whitepaper PDF")}
                    className="hover:text-white transition cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>Whitepaper</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("API & SDK Guide")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Developer Guides
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal / Privacy */}
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[10px]">
                Security
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleMockClick("Privacy Policy")}
                    className="hover:text-white transition cursor-pointer text-left flex items-center gap-1"
                  >
                    <Shield className="h-3.5 w-3.5 text-brand-cyan" />
                    <span>Privacy Policy</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Cryptographic Audits")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Cryptographic Audit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Warrant Canary")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Warrant Canary
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600">
          <div>
            &copy; {currentYear} Pirate Link Open-Source Project. Released under GPLv3 License.
          </div>
          <div className="flex items-center space-x-4">
            <span>Serverless Architecture</span>
            <span>•</span>
            <span className="text-brand-cyan">AES-256 Protocol Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
