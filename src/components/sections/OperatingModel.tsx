import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OperatingModel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      id="operating-model"
      className="section-divider bg-background py-24 md:py-32 lg:py-40 overflow-hidden text-foreground"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            style={{ y }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-primary"></div>
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                The Operating Model
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]">
              Embedded. <br className="hidden md:block" />
              Accountable. <br className="hidden md:block" />
              <span className="font-bold text-white">Continuous.</span>
            </h2>
          </motion.div>

          <motion.p
            style={{ y }}
            className="max-w-sm text-muted-foreground text-lg leading-relaxed md:text-right"
          >
            We do not advise from the outside. We operate from the inside, integrating with your governance to guarantee outcomes.
          </motion.p>
        </div>

        {/* The Grid System */}
        <div className="border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border">

            {/* Column 01 */}
            <ModelColumn
              number="01"
              title="Embedded Operations"
              description="We operate inside your organization, not beside it. Our teams integrate deeply with your governance, reporting, and decision structures."
              delay={0.1}
            />

            {/* Column 02 */}
            <ModelColumn
              number="02"
              title="Outcome Ownership"
              description="We do not bill for effort. We are accountable for results. Every engagement is structured around measurable, enforced outcomes."
              delay={0.2}
            />

            {/* Column 03 */}
            <ModelColumn
              number="03"
              title="Continuous Governance"
              description="Oversight is not periodic. Governance is built into every operational layer — risk, compliance, and performance reviewed continuously."
              delay={0.3}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

interface ModelColumnProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

const ModelColumn = ({ number, title, description, delay }: ModelColumnProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 md:p-10 lg:p-12 hover:bg-white/[0.02] transition-colors duration-500"
    >
      {/* Hover highlighting for border (optional, subtle) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left lg:hidden" />
      <div className="absolute top-0 left-0 h-full w-[1px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top hidden lg:block" />

      <div className="flex flex-col h-full justify-between gap-12">
        <div>
          <span className="block font-mono text-sm text-primary/60 mb-4">{number}</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            {description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span>Read More</span>
            <ArrowRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default OperatingModel;

