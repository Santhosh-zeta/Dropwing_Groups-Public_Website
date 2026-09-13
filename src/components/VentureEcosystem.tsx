import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Paintbrush, Layers, Cpu, TrendingUp } from "lucide-react";

const ventures = [
  {
    id: "design-studio",
    name: "Design Studio",
    fullName: "Dropwing Design Studio",
    category: "Creative & Branding",
    desc: "Logo design, social media creatives, banners, visiting cards & brand identity.",
    href: "/ventures/design-studio",
    icon: <Paintbrush className="w-4 h-4" />,
    accentColor: "#a855f7",
    accentBg: "bg-purple-500/10",
    accentText: "text-purple-400",
  },
  {
    id: "fenixa",
    name: "Fenixa Solutions",
    fullName: "Fenixa Solutions",
    category: "Software & Technology",
    desc: "Web development, apps, product development, DevOps & cybersecurity services.",
    href: "/ventures/fenixa",
    icon: <Layers className="w-4 h-4" />,
    accentColor: "#3b82f6",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-400",
  },
  {
    id: "persynix",
    name: "Persynix",
    fullName: "Persynix",
    category: "AI & Automation",
    desc: "n8n, Make, Zapier automation. AI, machine learning & intelligent workflows.",
    href: "/ventures/persynix",
    icon: <Cpu className="w-4 h-4" />,
    accentColor: "#10b981",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-400",
  },
  {
    id: "grovia",
    name: "Grovia",
    fullName: "Grovia",
    category: "Digital Marketing",
    desc: "Social media management, Google Ads, SEO, video scripts & full marketing.",
    href: "/ventures/grovia",
    icon: <TrendingUp className="w-4 h-4" />,
    accentColor: "#f97316",
    accentBg: "bg-orange-500/10",
    accentText: "text-orange-400",
  },
];

interface VentureEcosystemProps {
  currentVenture?: string;
}

const VentureEcosystem = ({ currentVenture }: VentureEcosystemProps) => {
  const filtered = ventures.filter((v) => v.name !== currentVenture && v.fullName !== currentVenture);

  return (
    <section className="py-24 border-t border-white/5 bg-black/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-muted-foreground/60 uppercase">
            The Dropwing Ecosystem
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mt-3">
            Explore our other studios.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((venture, i) => (
            <motion.div
              key={venture.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={venture.href}
                className="group flex flex-col p-6 bg-white/[0.03] border border-white/8 hover:border-white/15 rounded-lg transition-all duration-300 hover:bg-white/[0.05] h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-md ${venture.accentBg} ${venture.accentText}`}>
                    {venture.icon}
                  </span>
                  <ArrowUpRight className={`w-4 h-4 ${venture.accentText} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0`} />
                </div>
                <h4 className={`font-bold text-white mb-1 group-hover:${venture.accentText} transition-colors`}>
                  {venture.name}
                </h4>
                <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-3">
                  {venture.category}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed flex-1">{venture.desc}</p>
                <div
                  className="h-0.5 w-0 group-hover:w-full mt-4 transition-all duration-500 ease-out rounded-full"
                  style={{ background: venture.accentColor }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VentureEcosystem;
