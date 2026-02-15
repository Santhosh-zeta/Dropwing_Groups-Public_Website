import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated Data with more "technical" feel
const capabilities = [
  {
    id: "01",
    title: "Strategy Execution",
    detail: "Translating institutional strategy into operational reality. We build the bridges between boardroom intent and frontline action.",
  },
  {
    id: "02",
    title: "Technology Systems",
    detail: "Architecture, implementation, and integration. We ensure technology serves the operation, not the other way around.",
  },
  {
    id: "03",
    title: "Operational Infrastructure",
    detail: "Process engineering and supply chain orchestration. We design for scale, resilience, and continuity.",
  },
  {
    id: "04",
    title: "Governance & Compliance",
    detail: "Regulatory alignment and risk frameworks. We embed audit-ready systems directly into daily workflows.",
  },
  {
    id: "05",
    title: "Venture Architecture",
    detail: "Structuring and launching new ventures. We provide the operational backbone for innovation and scale.",
  },
];

const Capabilities = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="capabilities" className="section-divider bg-background py-24 md:py-32 lg:py-40 relative">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Sticky Header */}
          <div className="relative">
            <motion.div
              style={{ y }}
              className="lg:sticky lg:top-32"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-6 bg-primary"></div>
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                  Integrated Capabilities
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-foreground mb-8">
                End-to-end <br />
                <span className="font-bold text-white">Execution.</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                We do not offer isolated services. We provide a comprehensive operational platform designed to close the gap between strategy and result.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Interactive List */}
          <div className="flex flex-col">
            {capabilities.map((cap, i) => (
              <CapabilityRow key={cap.id} capability={cap} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

interface CapabilityRowProps {
  capability: {
    id: string;
    title: string;
    detail: string;
  };
  index: number;
}

const CapabilityRow = ({ capability, index }: CapabilityRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border-t border-white/10 py-12 transition-colors duration-500 hover:bg-white/[0.02]"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-baseline">
        <span className="font-mono text-sm text-primary/60">{capability.id}</span>

        <div className="flex-1">
          <h3 className="text-2xl font-medium text-foreground mb-3 flex items-center gap-4 group-hover:text-primary transition-colors duration-300">
            {capability.title}
            <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-lg group-hover:text-muted-foreground/80 transition-colors duration-300">
            {capability.detail}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Capabilities;

