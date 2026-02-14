import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-structural text-structural-foreground">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 lg:px-20 pt-20">
        <div className="flex flex-col items-start justify-center min-h-[60vh]">

          {/* Label / Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-[1px] w-12 bg-primary/60"></span>
            <span className="text-xs font-bold tracking-[0.3em] text-primary/80 uppercase">
              Operational Sovereignty
            </span>
          </motion.div>

          {/* Massive Kinetic Typography */}
          <h1 className="relative font-bold leading-[0.9] tracking-tighter text-white">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-[12vw] md:text-[8vw] xl:text-[7vw] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]"
              >
                EXECUTION
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="flex items-center gap-4 text-[12vw] md:text-[8vw] xl:text-[7vw] text-white"
              >
                <span>IS</span>
                <span className="h-[2px] w-[1em] bg-primary block mt-4"></span>
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="text-[12vw] md:text-[8vw] xl:text-[7vw] text-white"
              >
                OWNERSHIP
              </motion.div>
            </div>
          </h1>

          {/* Subtext and CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 max-w-xl"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-10 bg-black/20 backdrop-blur-sm p-6 border-l-2 border-primary/40">
              The era of advisory is over. Dropwing Groups builds, runs, and governs
              institutional grade operating models. We don't just recommend the path.
              <span className="text-white font-semibold"> We walk it with you.</span>
            </p>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-primary/10 border border-primary/40 backdrop-blur-sm hover:bg-primary/20 hover:border-primary transition-all duration-300"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase">
                Initiate Engagement
              </span>
              <span className="text-primary group-hover:translate-x-1 transition-transform text-lg">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
