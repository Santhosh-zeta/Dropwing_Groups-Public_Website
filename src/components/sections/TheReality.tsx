import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RealityCardProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const RealityCard = ({ number, title, description, delay }: RealityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative border-l border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors md:p-8"
    >
      <div className="mb-4 flex flex-col gap-4">
        <span className="font-mono text-xs text-primary/60 tracking-wider">
          {number}
        </span>
        <h3 className="text-lg font-medium text-foreground tracking-tight">{title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground/80 md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

const TheReality = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="reality"
      className="section-divider relative overflow-hidden bg-background py-16 md:py-24 lg:py-32"
    >
      {/* Structural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24 items-start">

          {/* Left Column: The Problem Statement */}
          <motion.div
            style={{ y }}
            className="flex flex-col justify-center relative lg:sticky lg:top-32"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-8 bg-primary/40"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-primary/80 uppercase">
                The Reality
              </span>
            </div>

            <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-7xl">
              Execution is <br />
              <span className="text-muted-foreground line-through decoration-red-500 decoration-2 mr-3">unified</span>
              <span className="font-bold text-white">fragmented.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl max-w-lg">
              Strategy documents multiply. Deadlines slip. The gap between intent and result is not a lack of capability—it is a lack of <span className="text-foreground font-medium">unified ownership</span>.
              <br /><br />
              <span className="text-primary font-medium">We exist to close this gap.</span>
            </p>
          </motion.div>

          {/* Right Column: Evidence / Breakdown */}
          <div className="space-y-px bg-white/5 border border-white/5">
            <RealityCard
              number="01"
              title="The Vendor Maze"
              description="Organizations engage dozens of vendors and consultants. Each optimizes for their specific scope, but no one is accountable for the integrated outcome."
              delay={0.1}
            />

            <RealityCard
              number="02"
              title="The Alignment Void"
              description="When everyone owns a 'piece' of the project, no one owns the result. This structural flaw makes delay and budget overruns the industry standard."
              delay={0.2}
            />

            <RealityCard
              number="03"
              title="The Knowledge Leak"
              description="Critical IP and operational context vanish when vendor contracts end. You built the capability, but you don't own the brain."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheReality;