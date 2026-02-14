import { useSectionReveal } from "@/hooks/useSectionReveal";

const GovernanceScale = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider" id="governance">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Governance & Scale
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Trust is built through systems, not promises.
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Every Dropwing engagement operates within a governance framework
              designed for institutional oversight. Reporting structures,
              escalation protocols, risk controls, and compliance checkpoints
              are established before execution begins.
            </p>
            <p>
              Continuity is structural. Our operational model ensures that
              knowledge, accountability, and momentum are never dependent on
              individuals. Organizations retain full ownership of all
              intellectual property, data, and operational assets.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {[
            { metric: "100%", label: "IP ownership retained by clients" },
            { metric: "Continuous", label: "Governance & compliance reporting" },
            { metric: "Structured", label: "Knowledge transfer at every phase" },
          ].map((item) => (
            <div key={item.label} className="bg-background p-8">
              <span className="mb-2 block text-2xl font-bold text-foreground md:text-3xl">
                {item.metric}
              </span>
              <span className="text-xs tracking-[0.1em] text-muted-foreground uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernanceScale;
