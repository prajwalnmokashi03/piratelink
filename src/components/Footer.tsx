import { Github, ArrowUpRight, Download, Shield } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleMockClick = (label: string) => {
    alert(`${label} is not published yet. Use GitHub for current source, releases, and implementation status.`);
  };

  return (
    <footer id="footer" className="bg-[#070A14] border-t border-brand-card-border/80 text-neutral-400 py-14 md:py-16 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-10 md:pb-12 mb-10 md:mb-12">
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
              Pirate Link is an open-source, local-first communication platform for decentralized nearby messaging. The project prioritizes privacy, resilient local delivery, and clear platform boundaries.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[10px]">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("platform-status")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Platform Status
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Core Capabilities
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Current Limits
                  </button>
                </li>
              </ul>
            </div>

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
                    onClick={() => handleMockClick("Project notes")}
                    className="hover:text-white transition cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>Project Notes</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </li>
                <li>
                  <a
                    href="https://github.com/prajwalnmokashi03/piratelink/raw/main/public/piratelink.apk"
                    download="piratelink.apk"
                    className="hover:text-white transition cursor-pointer text-left flex items-center gap-1"
                  >
                    <span>Download Android APK</span>
                    <Download className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-mono font-bold text-white uppercase tracking-wider text-[10px]">
                Trust
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("security")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer text-left flex items-center gap-1"
                  >
                    <Shield className="h-3.5 w-3.5 text-brand-cyan" />
                    <span>Privacy Model</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleMockClick("Independent audit")}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Independent Audit
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("platform-status")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer text-left"
                  >
                    Planned Capabilities
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600">
          <div>
            &copy; {currentYear} Pirate Link Open-Source Project. Released under GPLv3 License.
          </div>
          <div className="flex items-center space-x-4">
            <span>Local-First Architecture</span>
            <span>|</span>
            <span className="text-brand-cyan">Encrypted DMs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
