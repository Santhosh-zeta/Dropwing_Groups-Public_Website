import { useState } from "react";
import { Pause, Play } from "lucide-react";

const Hero = () => {
  const [motionPaused, setMotionPaused] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background motion */}
      <div
        className={`hero-bg-motion absolute inset-0 ${motionPaused ? "paused" : ""}`}
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="120%" height="120%" fill="url(#hero-grid)" x="-10%" y="-10%" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl pt-32 pb-20 md:pt-40 md:pb-32">
          <h1 className="mb-8 text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            EXECUTI
            <span className="inline-block text-primary transition-transform duration-[2000ms]">
              &gt;
            </span>
            N IS
            <br />
            OWNERSHIP
          </h1>
          <p className="mb-12 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Dropwing Groups operates as a permanent extension of enterprise
            organizations. We don't advise. We execute. We own outcomes.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border border-primary/40 px-8 py-4 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors duration-150 hover:border-primary hover:bg-primary/5"
          >
            Initiate Briefing
            <span className="inline-block text-primary transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Pause/Play control — desktop only */}
      <button
        onClick={() => setMotionPaused(!motionPaused)}
        className="absolute right-6 bottom-6 hidden items-center gap-2 text-muted-foreground transition-colors duration-150 hover:text-foreground md:flex"
        aria-label={motionPaused ? "Play background motion" : "Pause background motion"}
      >
        {motionPaused ? <Play size={14} /> : <Pause size={14} />}
        <span className="text-[10px] tracking-[0.15em] uppercase">
          {motionPaused ? "Play" : "Pause"}
        </span>
      </button>
    </section>
  );
};

export default Hero;
