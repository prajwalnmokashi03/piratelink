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
      answer: "Pirate Link uses 'cooperative multi-hop packet routing'. When you send a message to a distant peer, the packet cascades automatically through intermediate Pirate Link nodes nearby. Each node acts as a passive courier, storing the encrypted packet briefly and forwarding it onward until the designated recipient is within active local range.",
    },
    {
      question: "Will keeping Bluetooth scanning active drain my Android battery?",
      answer: "The app is engineered with Bluetooth Low Energy (BLE) passive advertisements and precise duty-cycling. It only activates high-frequency discovery cycles sporadically when sending message spikes. In passive listening/beacon mode, Pirate Link consumes less than 1.5% of battery power hourly.",
    },
    {
      question: "Can someone relaying my message intercept or read the conversation?",
      answer: "No. Every communication packet is fully encrypted at the source using highly robust AES-GCM symmetric block ciphers. Intermediate relays only parse routing metadata envelopes; they have zero visibility into content payloads.",
    },
    {
      question: "What is the physical range between individual peer devices?",
      answer: "Standard modern Bluetooth antennas cover between 60 to 100 meters under typical unobstructed conditions. Because the mesh is daisy-chained, adding more active nodes cascaded 80 meters apart spreads message relay limits over entire kilometers dynamically without cell towers.",
    },
    {
      question: "Do I need root access, cell plans, or SIM cards on my phone?",
      answer: "Absolutely not. Pirate Link functions on decommissioned burner phones, tablets, and any standard Android hardware (Oreo onwards) without cellular accounts, active subscriptions, or SIM cards. Only local Bluetooth hardware operations are needed.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-20 relative overflow-hidden bg-[#0e142e]/20 border-t border-brand-card-border/50">
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
            Everything you need to know about physical, local P2P networking capabilities and device integrations.
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
