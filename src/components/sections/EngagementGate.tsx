import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Lock } from "lucide-react";

const EngagementGate = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isHovered, setIsHovered] = useState(false);

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className="section-divider bg-background py-20 md:py-32 lg:py-40 relative overflow-hidden flex flex-col items-center justify-center min-h-[50vh]"
    >
      {/* Ambient Void Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-structural/20 via-background to-background" />

      <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">

        <motion.div style={{ y }}>
          <div className="mb-8 flex items-center justify-center gap-2 text-muted-foreground/60">
            <Lock className="h-3 w-3" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
            Execution <br />
            <span className="text-primary">begins here.</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-16">

            Partnership requires board-level commitment.
          </p>

          {/* The "Terminal" Button */}
          <a
            href="mailto:contact@dropwinggroups.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden bg-structural border border-white/10 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]"
          >
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            {/* Background Fill on Hover */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center gap-4">
              <Terminal className={`h-5 w-5 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`font-mono text-sm tracking-[0.2em] font-bold uppercase transition-colors duration-300 ${isHovered ? 'text-white' : 'text-foreground'}`}>
                Initiate Briefing
              </span>
              <ArrowRight className={`h-5 w-5 transition-all duration-300 ${isHovered ? 'text-primary translate-x-1' : 'text-muted-foreground'}`} />
            </div>
          </a>

          {/* Status Output */}
          <div className="mt-8 h-6">
            <AnimatePresence mode="wait">
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-[10px] font-mono text-primary tracking-widest uppercase"
                >
                  Awaiting Protocol Handshake...
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EngagementGate;

