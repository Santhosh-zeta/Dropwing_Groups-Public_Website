import { useSectionReveal } from "@/hooks/useSectionReveal";

const EngagementGate = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider" id="contact">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
            Engagement
          </p>
          <h2 className="mb-8 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            This is not a sales process.
          </h2>
          <p className="mb-12 text-base leading-relaxed text-muted-foreground md:text-lg">
            Dropwing Groups engages selectively with organizations that require
            long-term operational partnership. If your challenge demands
            sustained execution, governance, and accountability — not advice —
            we should speak.
          </p>
          <a
            href="mailto:contact@dropwinggroups.com"
            className="group inline-flex items-center gap-3 border border-primary/40 px-8 py-4 text-xs font-medium tracking-[0.2em] text-foreground uppercase transition-colors duration-150 hover:border-primary hover:bg-primary/5"
          >
            Initiate Briefing
            <span className="inline-block text-primary transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementGate;
