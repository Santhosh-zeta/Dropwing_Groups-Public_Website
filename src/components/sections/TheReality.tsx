import { useSectionReveal } from "@/hooks/useSectionReveal";

const TheReality = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider" id="model">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="mb-6 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          The Reality
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Execution across enterprises remains fragmented, outsourced, and
            unaccountable.
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Organizations engage dozens of vendors, consultants, and
              contractors — each optimizing for their scope, none accountable
              for outcomes. Strategy documents multiply. Execution stalls.
            </p>
            <p>
              The gap between intent and result is not a capability problem. It
              is an ownership problem. Most organizations do not lack talent or
              technology. They lack a single entity willing to own the entire
              chain of execution and stand behind the result.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheReality;
