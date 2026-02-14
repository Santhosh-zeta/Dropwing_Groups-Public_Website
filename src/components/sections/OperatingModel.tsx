import { useSectionReveal } from "@/hooks/useSectionReveal";

const pillars = [
  {
    number: "01",
    title: "Embedded Operations",
    description:
      "We operate inside your organization, not beside it. Our teams integrate with your governance, reporting, and decision structures.",
  },
  {
    number: "02",
    title: "Outcome Ownership",
    description:
      "Every engagement is structured around measurable outcomes. We do not bill for effort. We are accountable for results.",
  },
  {
    number: "03",
    title: "Continuous Governance",
    description:
      "Oversight is not periodic. Governance is built into every operational layer — risk, compliance, and performance reviewed continuously.",
  },
];

const OperatingModel = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Operating Model
        </p>
        <h2 className="mb-16 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
          Ownership is not a value statement. It is the operating model.
        </h2>
        <div className="grid gap-px bg-border lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-background p-8 md:p-12"
            >
              <span className="mb-4 block text-xs font-medium tracking-[0.2em] text-primary">
                {pillar.number}
              </span>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingModel;
