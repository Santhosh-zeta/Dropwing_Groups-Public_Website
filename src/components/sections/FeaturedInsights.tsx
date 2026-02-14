import { useSectionReveal } from "@/hooks/useSectionReveal";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
import insight4 from "@/assets/insight-4.jpg";
import insight5 from "@/assets/insight-5.jpg";
import insight6 from "@/assets/insight-6.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface InsightCard {
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  span?: boolean;
}

const insightsRow1: InsightCard[] = [
  {
    category: "Perspective",
    title: "Building self-governing operational ecosystems",
    description: "How autonomous governance frameworks are replacing traditional oversight models in high-scale enterprises.",
    image: insight1,
    slug: "building-self-governing-operational-ecosystems"
  },
  {
    category: "Research Report",
    title: "Pulse of Change: What's top of mind for today's leaders",
    description: "After two years of rapid AI acceleration, global executives enter 2026 with unmistakable confidence. But beneath the optimism, data shows a series of gaps standing in the way of scale and value.",
    image: insight2,
    slug: "pulse-of-change"
  },
  {
    category: "Research Report",
    title: "Rewriting platform strategy for institutional-grade systems",
    description: "Legacy modernization is failing. Here is the blueprint for rebuilding core transaction layers without operational downtime.",
    image: insight3,
    slug: "rewriting-platform-strategy"
  },
  {
    category: "Research Report",
    title: "Governance trends across regulated industries for 2026",
    description: "A comparative analysis of regulatory shifts in finance, healthcare, and energy sectors across global markets.",
    image: insight4,
    slug: "governance-trends-2026"
  },
];

const insightsRow2: InsightCard[] = [
  {
    category: "Perspective",
    title: "The ownership dividend: Why embedded execution outperforms advisory",
    description: "Organizations that shift from 'consulted' to 'owned' execution models see a 40% increase in strategic realization rates.",
    image: insight2,
    slug: "ownership-dividend"
  },
  {
    category: "Research Report",
    title: "Accelerating operational continuity through structured knowledge transfer",
    description: "Preventing institutional knowledge loss during rapid workforce transitions through codified execution playbooks.",
    image: insight5,
    slug: "operational-continuity",
    span: true,
  },
  {
    category: "Announcement",
    title: "Dropwing Groups recognized for excellence in enterprise execution frameworks",
    description: "Global Governance Institute awards Dropwing top honors for its contribution to sovereign consistency protocols.",
    image: insight6,
    slug: "excellence-in-execution"
  },
];

const InteractiveCard = ({ card }: { card: InsightCard }) => (
  <Link to={`/insights/${card.slug}`} className="group relative flex h-[420px] flex-col overflow-hidden bg-structural text-white block">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-40"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-structural via-structural/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
      {/* Header - Always visible but shifts up slightly on hover */}
      <div className="mb-auto translate-y-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
        <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
          {card.category}
        </span>
      </div>

      {/* Main Content Area - Slides up on hover */}
      <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
        <h3 className="mb-4 text-xl font-bold leading-tight text-white md:text-2xl lg:text-3xl">
          {card.title}
        </h3>

        {/* Hidden Description - Reveals on Hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              {card.description}
            </p>

            <span className="mt-6 inline-flex items-center text-xs font-bold tracking-[0.15em] text-primary uppercase hover:text-white transition-colors">
              Expand <ArrowRight className="ml-2 h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative Border Bottom */}
    <div className="absolute bottom-0 left-0 h-1 w-full bg-primary scale-x-0 transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
  </Link>
);

const FeaturedInsights = () => {
  const { ref, isVisible } = useSectionReveal();

  return (
    <section className="section-divider bg-background">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40 ${isVisible ? "is-visible" : ""
          }`}
      >
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-4 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase">
              Featured Insights
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Intelligence from the field.
            </h2>
          </div>
          <a href="/what-we-think" className="hidden text-xs font-bold tracking-[0.15em] text-primary uppercase hover:text-foreground md:block transition-colors">
            View All Insights
          </a>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {insightsRow1.map((card, idx) => (
            <div key={card.title} className={idx === 1 || idx === 2 ? "lg:col-span-2" : ""}>
              {/* 
                  Adjusting grid for variety: 
                  Row 1: 1x1, 2x1 (Pulse of Change), 2x1 (Platform), 1x1 
                  Wait, standard grid is better for the card effect. Let's stick to simple grid but allow spans if needed.
               */}
              <InteractiveCard card={card} />
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insightsRow2.map((card) => (
            <div key={card.title} className={card.span ? "lg:col-span-2" : ""}>
              <InteractiveCard card={card} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="/what-we-think" className="text-xs font-bold tracking-[0.15em] text-primary uppercase hover:text-foreground transition-colors">
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
