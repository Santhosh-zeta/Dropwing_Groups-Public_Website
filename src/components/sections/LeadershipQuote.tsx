import { useSectionReveal } from "@/hooks/useSectionReveal";
import leaderPortrait from "@/assets/leader-santhosh.png";

const LeadershipQuote = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${isVisible ? "is-visible" : ""
          }`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] max-w-sm overflow-hidden">
            <img
              src={leaderPortrait}
              alt="Santhosh V - Managing Director"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl lg:text-3xl">
              "Organizations will continue to accumulate capability, but unless
              execution is owned — structurally, contractually, operationally —
              outcomes will remain aspirational."
            </blockquote>
            <cite className="not-italic">
              <span className="block text-sm font-semibold text-foreground">
                Santhosh V
              </span>
              <span className="text-xs tracking-wide text-muted-foreground">
                Managing Director, Dropwing Groups
              </span>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuote;
