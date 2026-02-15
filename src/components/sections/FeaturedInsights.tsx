import { useState, useEffect, useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight3 from "@/assets/insight-3.jpg";
import insight4 from "@/assets/insight-4.jpg";
import insight5 from "@/assets/insight-5.jpg";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface InsightCard {
  category: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  readTime: string;
}

const featuredInsights: InsightCard[] = [
  {
    category: "Perspective",
    title: "Building self-governing operational ecosystems",
    description: "How autonomous governance frameworks are replacing traditional oversight models in high-scale enterprises.",
    image: insight1,
    slug: "building-self-governing-operational-ecosystems",
    date: "Feb 14, 2026",
    readTime: "8 min"
  },
  {
    category: "Research Report",
    title: "Pulse of Change: What's top of mind for today's leaders",
    description: "After two years of rapid AI acceleration, global executives enter 2026 with unmistakable confidence.",
    image: insight2,
    slug: "pulse-of-change",
    date: "Feb 12, 2026",
    readTime: "12 min"
  },
  {
    category: "Research Report",
    title: "Rewriting platform strategy for institutional-grade systems",
    description: "Legacy modernization is failing. Here is the blueprint for rebuilding core transaction layers.",
    image: insight3,
    slug: "rewriting-platform-strategy",
    date: "Feb 10, 2026",
    readTime: "10 min"
  },
  {
    category: "Case Study",
    title: "Accelerating operational continuity through structured knowledge transfer",
    description: "Preventing institutional knowledge loss during rapid workforce transitions through codified execution playbooks.",
    image: insight5,
    slug: "operational-continuity",
    date: "Feb 3, 2026",
    readTime: "9 min"
  },
];

const InteractiveCard = ({ card }: { card: InsightCard }) => (
  <Link
    to={`/insights/${card.slug}`}
    className="group relative flex h-[380px] lg:h-[380px] flex-col overflow-hidden bg-structural text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex-shrink-0 w-full"
  >
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover opacity-50 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-structural via-structural/90 to-structural/40" />
    </div>

    {/* Content Container */}
    <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-7">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span className="inline-block text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
          {card.category}
        </span>
        <div className="hidden lg:flex items-center gap-2 text-[9px] text-muted-foreground uppercase tracking-wider">
          <span>{card.date}</span>
          <span>•</span>
          <span>{card.readTime}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-2">
        <h3 className="mb-3 text-lg lg:text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-primary">
          {card.title}
        </h3>

        {/* Description - Always visible on mobile, expands on hover for desktop */}
        <p className="text-sm leading-relaxed text-gray-300 mb-3 line-clamp-2 lg:line-clamp-none lg:max-h-0 lg:opacity-0 lg:overflow-hidden lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:max-h-32 lg:group-hover:opacity-100">
          {card.description}
        </p>

        {/* Metadata - Mobile Only */}
        <div className="flex lg:hidden items-center gap-2 text-[9px] text-muted-foreground uppercase tracking-wider mb-3">
          <span>{card.date}</span>
          <span>•</span>
          <span>{card.readTime}</span>
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-primary uppercase transition-all duration-300 group-hover:gap-3">
          <span>Read More</span>
          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>

    {/* Decorative Border */}
    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-primary to-primary/50 scale-x-0 transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />
  </Link>
);

const FeaturedInsights = () => {
  const { ref, isVisible } = useSectionReveal();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredInsights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      setIsAutoPlaying(false);
      if (swipeDistance > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % featuredInsights.length);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + featuredInsights.length) % featuredInsights.length);
      }
      // Resume auto-play after 10 seconds
      setTimeout(() => setIsAutoPlaying(true), 10000);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredInsights.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredInsights.length) % featuredInsights.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="section-divider bg-background">
      <div
        ref={ref}
        className={`section-reveal mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-24 lg:px-20 lg:py-28 ${isVisible ? "is-visible" : ""
          }`}
      >
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="mb-3 text-[10px] font-medium tracking-[0.25em] text-muted-foreground uppercase">
              Featured Insights
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Intelligence from the field.
            </h2>
          </div>
          <Link
            to="/what-we-think"
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-primary uppercase hover:text-foreground transition-colors group"
          >
            View All Insights
            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredInsights.map((card) => (
                <InteractiveCard key={card.slug} card={card} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Previous insight"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground hover:bg-primary hover:text-white transition-all duration-300"
            aria-label="Next insight"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredInsights.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to insight ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-6 grid-cols-4">
          {featuredInsights.map((card) => (
            <InteractiveCard key={card.slug} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;
