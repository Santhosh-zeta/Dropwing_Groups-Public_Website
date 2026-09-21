import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import HeroBackgroundV2 from "./HeroBackgroundV2";
import logoImage from "@/assets/DG_Logo_Dark (1).png";

const capabilities = ["Digital infrastructure", "Synthetic intelligence", "Brand systems"];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 } };

  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-structural text-structural-foreground lg:min-h-screen">
      <div className="absolute inset-0 lg:hidden"><HeroBackground /></div>
      <div className="absolute inset-0 hidden lg:block"><HeroBackgroundV2 /></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,11,.92)_0%,rgba(5,7,11,.62)_50%,rgba(5,7,11,.2)_100%)]" />

      <div className="site-container relative z-10 flex min-h-[760px] items-center pt-24 lg:min-h-screen">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)]">
          <div className="max-w-4xl">
            <motion.p {...rise} transition={{ duration: .6 }} className="eyebrow mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-primary" /> Operational sovereignty
            </motion.p>
            <h1 className="max-w-3xl text-[clamp(3.25rem,8vw,7.25rem)] font-bold leading-[.87] tracking-[-.075em] text-white">
              <motion.span {...rise} transition={{ duration: .7, delay: .08 }} className="block text-white/45 [-webkit-text-stroke:1px_rgba(255,255,255,.62)]">Execution</motion.span>
              <motion.span {...rise} transition={{ duration: .7, delay: .16 }} className="block">is ownership.</motion.span>
            </h1>
            <motion.p {...rise} transition={{ duration: .7, delay: .25 }} className="mt-8 max-w-2xl border-l-2 border-primary/70 pl-5 text-lg leading-relaxed text-white/75 md:text-xl">
              We build, operate, and scale the systems organizations depend on—from core infrastructure and governed intelligence to the brand systems that keep growth coherent.
            </motion.p>
            <motion.div {...rise} transition={{ duration: .7, delay: .35 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-12 items-center justify-center gap-3 bg-primary px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-primary-foreground transition-colors hover:bg-primary/85">
                Discuss your challenge <ArrowRight className="size-4" />
              </Link>
              <Link to="/what-we-do" className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/20 bg-black/15 px-6 py-3 text-xs font-bold uppercase tracking-[.16em] text-white transition-colors hover:border-white/50 hover:bg-white/10">
                Explore what we do
              </Link>
            </motion.div>
            <ul className="mt-8 grid border-y border-white/10 lg:hidden">
              {capabilities.map((capability, index) => <li key={capability} className="flex items-center gap-3 border-b border-white/10 py-3 last:border-b-0 text-xs font-semibold uppercase tracking-[.12em] text-white/75"><span className="font-mono text-primary">0{index + 1}</span>{capability}</li>)}
            </ul>
          </div>

          <motion.aside {...rise} transition={{ duration: .8, delay: .35 }} className="hidden justify-self-end border border-white/10 bg-black/25 p-6 backdrop-blur-sm lg:block">
            <img src={logoImage} alt="Dropwing Groups" className="mb-10 h-16 w-auto opacity-90" />
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-white/45">What we build</p>
            <ul className="space-y-4">
              {capabilities.map((capability, index) => <li key={capability} className="flex items-center gap-4 border-t border-white/10 pt-4 text-sm text-white/80"><span className="font-mono text-xs text-primary">0{index + 1}</span>{capability}</li>)}
            </ul>
            <p className="mt-10 max-w-xs text-sm leading-relaxed text-white/50">One accountable operating partner across the systems that matter.</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
