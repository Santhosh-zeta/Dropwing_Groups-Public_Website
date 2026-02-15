import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Governance / Systematic Trust Word Bank
const GOVERNANCE_NOISE = [
  "Compliance", "Audit", "Traceability", "Sovereignty", "Risk Control",
  "Zero Trust", "Immutable", "Ledger", "Validation", "Verification",
  "Protocol", "Standardization", "Encryption", "Continuity", "Resilience",
  "Failover", "Redundancy", "Identity", "Access", "Permission",
  "Constraint", "Policy", "Enforcement", "Monitor", "Telemetry",
  "Observability", "Governance", "Scale", "Structure", "Foundation"
];

// Noise Component (Governance Theme)
const GovernanceNoise = ({ opacity }: { opacity: any }) => {
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none flex flex-wrap content-center justify-center gap-x-16 gap-y-12 p-8 mix-blend-overlay"
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className="text-xs md:text-sm font-mono text-muted-foreground whitespace-nowrap"
          style={{
            transform: `rotate(${Math.random() * 90 - 45}deg)`, // More angular/structured rotation
            opacity: Math.random() * 0.3 + 0.05
          }}
        >
          {GOVERNANCE_NOISE[i % GOVERNANCE_NOISE.length]}
        </span>
      ))}
    </motion.div>
  );
};

// Structural Grid Component
const StructuralGrid = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 0.15, 0]);

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity, scale }}
    >
      <svg className="w-full h-full" width="100%" height="100%">
        <defs>
          <pattern id="governance-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              className="text-white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#governance-grid)" />
      </svg>
    </motion.div>
  );
};

const GovernanceScale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Content Animations
  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

  // Background Opacity
  const noiseOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0.6, 0.1]);

  return (
    <section
      id="governance"
      className="section-divider relative py-16 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-structural"
      ref={containerRef}
    >
      {/* 1. Background Layers */}
      <GovernanceNoise opacity={noiseOpacity} />
      <StructuralGrid scrollYProgress={scrollYProgress} />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80 pointer-events-none" />

      {/* 2. Main Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-6xl px-4 md:px-12 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Header Badge */}
        <div className="mb-8 md:mb-12 flex items-center justify-center gap-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-primary"
          />
          <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
            Systematic Trust
          </span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-primary"
          />
        </div>

        {/* Main Statement */}
        <div className="space-y-8 md:space-y-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white">
            <span className="block mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Trust is not
            </span>
            <span className="block text-white/20 blur-0 md:blur-[2px] transition-all duration-700 md:hover:text-white md:hover:blur-0">
              just a promise.
            </span>
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-px mx-auto bg-gradient-to-b from-transparent via-primary/50 to-transparent h-12 md:h-20"
          />

          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white">
            <span className="block mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Trust is
            </span>
            <span className="block text-primary drop-shadow-2xl">
              Systematic.
            </span>
          </h2>
        </div>

        {/* Secondary Content - "The Manifest" as text list */}
        <div className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-8 md:pt-16">
          {/* Item 1 */}
          <div className="text-left group">
            <h3 className="text-lg font-mono text-white mb-2 group-hover:text-primary transition-colors">
              [01] Sovereignty
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You retain full rights to all code, models, and data. No black boxes. No vendor lock-in.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-left group">
            <h3 className="text-lg font-mono text-white mb-2 group-hover:text-primary transition-colors">
              [02] Control
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Compliance is not a checkbox. It is an active protocol embedded in every deployment pipeline.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-left group">
            <h3 className="text-lg font-mono text-white mb-2 group-hover:text-primary transition-colors">
              [03] Scale
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We build capacity, then transfer it. Our goal is to make our own presence obsolete.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default GovernanceScale;
