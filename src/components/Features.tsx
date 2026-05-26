import { MessageSquareOff, Layers, ShieldCheck, UserX, HardDrive, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const features = [
    {
      id: "offline",
      title: "Offline Messaging",
      description:
        "Send private text and voice messages directly across ranges without cellular signals, Wi-Fi, or global internet cables.",
      icon: MessageSquareOff,
      color: "from-blue-500/20 to-cyan-500/5",
      iconColor: "text-brand-cyan",
    },
    {
      id: "mesh",
      title: "Bluetooth Mesh Relay",
      description:
        "Every active peer safely and automatically relays messages to downstream contacts, multiplying the total chat range exponentially.",
      icon: Layers,
      color: "from-indigo-500/20 to-blue-500/5",
      iconColor: "text-brand-blue",
    },
    {
      id: "encryption",
      title: "Symmetric Encryption",
      description:
        "Messages are encrypted using AES-GCM symmetric encryption before transmission.",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/5",
      iconColor: "text-emerald-400",
    },
    {
      id: "no-accounts",
      title: "No Accounts Required",
      description:
        "Skip the signup. No phone number, email registration, or central profile syncing occurs. Just download, set a local handle, and chat.",
      icon: UserX,
      color: "from-purple-500/20 to-pink-500/5",
      iconColor: "text-purple-400",
    },
    {
      id: "local-first",
      title: "Local-First Architecture",
      description:
        "All data resides on your physical drive and key storage. No clouds to leak information, no centralized records to compromise.",
      icon: HardDrive,
      color: "from-orange-500/20 to-red-500/5",
      iconColor: "text-orange-400",
    },
    {
      id: "discovery",
      title: "Fast Peer Discovery",
      description:
        "Automatically register nearby active transmitters in seconds. Dynamically update connection vectors as devices move.",
      icon: Zap,
      color: "from-amber-500/20 to-yellow-500/5",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 scroll-mt-20 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono"
          >
            Core Technology
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Robust offline mechanics. No central fail points.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            Most applications break when the internet goes out. Pirate Link uses offline physical peer discovery protocols to establish connection channels anywhere.
          </motion.p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            const isHovered = hoveredCard === feat.id;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(feat.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative rounded-2xl group overflow-hidden bg-brand-card/30 border border-brand-card-border hover:border-brand-blue/30 p-8 flex flex-col justify-between h-[280px] hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300"
              >
                {/* Active hover corner glow gradient */}
                <div
                  className={`absolute -right-20 -top-20 w-44 h-44 rounded-full bg-gradient-to-tr ${feat.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card Top: Premium Icon Spot */}
                <div className="space-y-4 relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className={`inline-flex p-3 rounded-xl bg-white/5 border border-white/10 ${feat.iconColor}`}>
                    <IconComponent className="h-6 w-6 stroke-[1.75]" />
                  </div>
                  
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                </div>

                {/* Card Bottom: Clear explanation */}
                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed font-light relative z-10 mt-3">
                  {feat.description}
                </p>

                {/* Subtle light accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
