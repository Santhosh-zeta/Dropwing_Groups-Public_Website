import { useSectionReveal } from "@/hooks/useSectionReveal";

const capabilities = [
  {
    title: "Strategy Execution",
    detail: "Translating institutional strategy into operational reality with clear milestones, ownership, and measurable progress.",
  },
  {
    title: "Technology Systems",
    detail: "Architecture, implementation, and integration of technology platforms that serve operational objectives — not the reverse.",
  },
  {
    title: "Operational Infrastructure",
    detail: "Process engineering, supply chain orchestration, and organizational design built for scale and continuity.",
  },
  {
    title: "Governance & Compliance",
    detail: "Regulatory alignment, risk frameworks, and audit-ready systems embedded into daily operations.",
  },
  {
    title: "Venture Architecture",
    detail: "Structuring, launching, and scaling new ventures within enterprise ecosystems with full operational accountability.",
  },
];

const Capabilities = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider" id="capabilities">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Integrated Capabilities
        </p>
        <h2 className="mb-16 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
          End-to-end execution across every operational dimension.
        </h2>
        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`grid items-start gap-6 py-8 md:grid-cols-3 md:gap-12 ${
                i > 0 ? "border-t border-border" : ""
              }`}
            >
              <h3 className="text-base font-semibold text-foreground md:text-lg">
                {cap.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                {cap.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
