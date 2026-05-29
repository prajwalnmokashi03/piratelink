import { CheckCircle, Clock, MonitorSmartphone } from "lucide-react";
import { motion } from "motion/react";

const statuses = [
  {
    name: "Android",
    state: "Available",
    detail:
      "Bluetooth/Nearby-based local mesh messaging with multi-hop relay and encrypted direct messages.",
    icon: CheckCircle,
    tone: "text-emerald-400",
  },
  {
    name: "Desktop",
    state: "Active Development / LAN Runtime",
    detail:
      "Desktop runtime and UI exist today. Desktop communication currently uses TCP/UDP on the same LAN or Wi-Fi network.",
    icon: MonitorSmartphone,
    tone: "text-brand-cyan",
  },
  {
    name: "Internet Gateway",
    state: "Planned Future Capability",
    detail:
      "Internet bridging, cloud relay, WAN routing, and cross-network sync are not part of the current release.",
    icon: Clock,
    tone: "text-amber-300",
  },
];

export default function PlatformStatus() {
  return (
    <section id="platform-status" className="py-14 md:py-20 scroll-mt-20 relative overflow-hidden border-b border-brand-card-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 space-y-4">
          <p className="text-xs font-semibold text-brand-cyan tracking-widest uppercase font-mono">
            Platform Status
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Clear about what works today.
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed">
            Pirate Link is growing across platforms, with Android mesh messaging available now and desktop networking evolving from a LAN-first runtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {statuses.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="bg-brand-card/30 border border-brand-card-border rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.tone}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{item.name}</h3>
                    <p className={`text-xs font-mono font-semibold uppercase tracking-wide ${item.tone}`}>
                      {item.state}
                    </p>
                  </div>
                </div>
                <p className="font-sans text-sm text-neutral-400 leading-relaxed font-light">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500 leading-relaxed max-w-3xl mx-auto">
          Desktop does not currently join the Android Bluetooth mesh directly. Heterogeneous Android and desktop interoperability is in progress.
        </p>
      </div>
    </section>
  );
}
