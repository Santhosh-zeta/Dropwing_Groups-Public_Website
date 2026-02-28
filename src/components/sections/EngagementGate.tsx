import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const EngagementGate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="pt-16 md:pt-20 pb-20 md:pb-28 bg-black relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5"
    >
      {/* Deep Exit Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 via-black to-black pointer-events-none" />

      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">

        <motion.div style={{ y }}>
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-violet-500/50" />
            <span className="text-[10px] font-mono text-violet-400 tracking-[0.3em] uppercase">
              Engagement Threshold
            </span>
            <div className="h-px w-12 bg-violet-500/50" />
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
            Execution is <br />
            <span className="text-muted-foreground">Ownership.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
            The era of advisory-only consulting is over. We build, operate, and govern the systems that define modern institutional power.
          </p>

          <Link
            to="/contact"
            className="group relative inline-flex flex-col items-center gap-8 focus:outline-none"
          >
            <div className="flex items-center gap-4 text-3xl md:text-4xl font-extralight text-white group-hover:text-violet-300 transition-colors duration-500">
              <span className="border-b border-transparent group-hover:border-violet-500/30 pb-2 transition-all duration-500">Initiate Engagement</span>
              <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-40 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
            </div>

            {/* High-tech pulsing line */}
            <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent relative overflow-hidden transition-all duration-500 group-hover:via-violet-500/80 group-hover:scale-150" />

            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.4em] group-hover:text-gray-400 transition-colors">
              Bridge the gap between strategy and reality
            </p>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default EngagementGate;

