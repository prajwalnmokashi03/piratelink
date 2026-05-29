import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "How does the message travel if my target peer is far away?",
      answer: "Pirate Link can use nearby participating devices as local relays. Delivery depends on peer density, Bluetooth conditions, device movement, and whether a route exists through nearby Android devices.",
    },
    {
      question: "Will keeping Bluetooth scanning active drain my Android battery?",
      answer: "Pirate Link is designed around Bluetooth Low Energy and practical discovery cycles. Actual battery usage varies by Android device, permissions, OS behavior, and how often the app is actively discovering or relaying messages.",
    },
    {
      question: "Can someone relaying my message intercept or read the conversation?",
      answer: "Message content is encrypted before relay. Intermediate peers are used to help move messages locally, not to read the conversation.",
    },
    {
      question: "What is the physical range between individual peer devices?",
      answer: "Bluetooth range depends heavily on hardware, walls, interference, and line of sight. Multi-hop relay can extend local reach when enough nearby peers are available, but Pirate Link does not promise unlimited or global offline distance.",
    },
    {
      question: "Do I need root access, cell plans, or SIM cards on my phone?",
      answer: "No root access, cell plan, or SIM card is required for local Android mesh messaging. You still need compatible Android hardware, Bluetooth permissions, and nearby peers running Pirate Link.",
    },
    {
      question: "Does the desktop app join the Android Bluetooth mesh today?",
      answer: "Not yet. The desktop runtime and UI exist, but desktop communication currently works over TCP/UDP on the same LAN or Wi-Fi network. Android-to-desktop mesh interoperability is still in progress.",
    },
    {
      question: "Does Pirate Link include an internet gateway or cloud relay?",
      answer: "No. Internet gateways, cloud relay, WAN routing, internet fallback, and cross-network synchronization are planned future capabilities, not current product features.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 md:py-20 scroll-mt-20 relative overflow-hidden bg-[#0e142e]/20 border-t border-brand-card-border/50">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Common Inquiries
          </h2>
          <p className="font-sans text-neutral-400 text-sm leading-relaxed max-w-xl mx-auto">
            Practical answers about local P2P messaging, platform status, and current capability boundaries.
          </p>
        </div>

        {/* Accordions list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-brand-card/30 border border-brand-card-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-blue/30"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 sm:p-6 flex items-center justify-between space-x-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="h-5 w-5 text-brand-cyan flex-shrink-0" />
                    <span className="font-display font-medium text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className="p-1.5 bg-white/5 border border-white/5 rounded-lg text-neutral-400">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
