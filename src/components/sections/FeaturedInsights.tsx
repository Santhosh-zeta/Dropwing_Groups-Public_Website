import { useSectionReveal } from "@/hooks/useSectionReveal";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
import insight4 from "@/assets/insight-4.jpg";
import insight5 from "@/assets/insight-5.jpg";
import insight6 from "@/assets/insight-6.jpg";

interface InsightCard {
  category: string;
  title: string;
  image: string;
  span?: boolean;
}

const insightsRow1: InsightCard[] = [
  {
    category: "Perspective",
    title: "Building self-governing operational ecosystems",
    image: insight1,
  },
  {
    category: "Research Report",
    title: "The execution gap: What boards overlook in transformation programs",
    image: insight2,
  },
  {
    category: "Research Report",
    title: "Rewriting platform strategy for institutional-grade systems",
    image: insight3,
  },
  {
    category: "Research Report",
    title: "Governance trends across regulated industries for 2026",
    image: insight4,
  },
];

const insightsRow2: InsightCard[] = [
  {
    category: "Perspective",
    title: "The ownership dividend: Why embedded execution outperforms advisory",
    image: insight2,
  },
  {
    category: "Research Report",
    title: "Accelerating operational continuity through structured knowledge transfer",
    image: insight5,
    span: true,
  },
  {
    category: "Announcement",
    title: "Dropwing Groups recognized for excellence in enterprise execution frameworks",
    image: insight6,
  },
];

const Card = ({ card }: { card: InsightCard }) => (
  <article className="group relative flex flex-col overflow-hidden bg-secondary">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />
    </div>
    <div className="flex flex-1 flex-col p-5 md:p-6">
      <span className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
        {card.category}
      </span>
      <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">
        {card.title}
      </h3>
    </div>
  </article>
);

const FeaturedInsights = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${
          isVisible ? "is-visible" : ""
        }`}
      >
        <p className="mb-10 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
          Featured Insights
        </p>

        {/* Row 1 — 4 equal cards */}
        <div className="mb-px grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {insightsRow1.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>

        {/* Row 2 — 3 cards, middle one spans wider */}
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {insightsRow2.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
