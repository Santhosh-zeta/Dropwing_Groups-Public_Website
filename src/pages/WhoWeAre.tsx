import { useState, useEffect, useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import LeadershipQuote from "@/components/sections/LeadershipQuote";

const subNavItems = [
  "Overview",
  "Commitments",
  "Organization",
  "Locations",
  "Awards",
  "Leadership",
];

const SubNav = () => {
  const [active, setActive] = useState("overview");
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([e]) => setStuck(!e.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = subNavItems.map((s) => s.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 140) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={sentinelRef} className="h-0" />
      <nav
        className={`sticky top-[68px] z-40 transition-colors duration-300 ${stuck
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
          }`}
      >
        <div className="mx-auto max-w-[1400px] overflow-x-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center gap-8 py-4 min-w-max">
            {subNavItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative pb-1 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-150 ${isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-transform duration-200 origin-left w-full ${isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

/* ── Section wrapper ── */
const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useSectionReveal();
  return (
    <section
      id={id}
      ref={ref}
      className={`section-reveal ${isVisible ? "is-visible" : ""} section-divider ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        {children}
      </div>
    </section>
  );
};

/* ── Overview ── */
const Overview = () => (
  <Section id="overview" className="border-t-0">
    <p className="mb-6 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Who We Are
    </p>
    <h2 className="mb-10 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-6xl">
      Execution ownership is central to how we operate.
    </h2>
    <div className="grid gap-12 md:grid-cols-2">
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        Dropwing Groups exists to close the gap between institutional intent and
        delivered outcomes. We do not advise organizations on what to do. We
        embed within their operating structures and take direct ownership of
        execution — from strategy realization to sustained systems delivery.
      </p>
      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
        Our clients are enterprise organizations, government bodies, and
        sovereign institutions that require accountability beyond traditional
        consulting. Every engagement is structured around governance,
        continuity, and measurable outcome transfer — not billable hours.
      </p>
    </div>
  </Section>
);

/* ── Commitments ── */
const commitments = [
  {
    title: "Code of Business Ethics",
    description:
      "All Dropwing ventures operate under a unified ethical framework that governs conduct, decision-making, and stakeholder accountability across every jurisdiction.",
  },
  {
    title: "Execution-Led Innovation",
    description:
      "Innovation is pursued only when it serves a defined execution objective. Research and development are governed by delivery timelines, not speculative roadmaps.",
  },
  {
    title: "Sustainability",
    description:
      "Operational sustainability is embedded into venture design — from resource allocation to long-term environmental impact assessment across all portfolio entities.",
  },
  {
    title: "Inclusion & Diversity",
    description:
      "Workforce composition reflects the institutions we serve. Diversity is treated as an operational standard, measured and reported at the holding-company level.",
  },
  {
    title: "Responsible AI",
    description:
      "Artificial intelligence is deployed under strict governance protocols. Every AI system is subject to human oversight, bias auditing, and outcome accountability.",
  },
  {
    title: "Transparent Workforce Reporting",
    description:
      "Workforce metrics — including composition, retention, and accountability structures — are reported with the same rigor applied to financial disclosures.",
  },
  {
    title: "Corporate Citizenship",
    description:
      "Dropwing Groups operates as a long-term participant in every market it enters. Civic responsibility is a condition of operation, not an addendum.",
  },
];

const Commitments = () => (
  <Section id="commitments">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Commitments
    </p>
    <h3 className="mb-12 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Non-negotiable operating standards.
    </h3>
    <div className="divide-y divide-border">
      {commitments.map((c) => (
        <div
          key={c.title}
          className="group grid gap-4 py-7 md:grid-cols-[280px_1fr] md:gap-12"
        >
          <h4 className="text-sm font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors duration-150">
            {c.title}
          </h4>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {c.description}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

/* ── Organization ── */
const Organization = () => (
  <Section id="organization">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Organization
    </p>
    <h3 className="mb-12 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Structured for accountability, not agility theatre.
    </h3>
    <div className="grid gap-12 md:grid-cols-3">
      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Holding Company Model
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Dropwing Groups operates as a holding entity governing multiple
          specialized ventures. Each venture maintains operational independence
          under centralized governance, risk management, and reporting
          structures.
        </p>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Venture Isolation
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Every venture is structurally isolated — separate leadership,
          dedicated resources, and ring-fenced accountability. Cross-venture
          dependencies are governed by formal protocols, not informal
          coordination.
        </p>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-semibold text-foreground">
          Ownership Boundaries
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Accountability is defined at the contract level. Ownership boundaries
          determine who is responsible for delivery, escalation, and outcome
          reporting — eliminating ambiguity in multi-stakeholder environments.
        </p>
      </div>
    </div>
  </Section>
);

/* ── Locations ── */
const regions = [
  {
    region: "North America",
    cities: ["New York", "Washington, D.C.", "Toronto"],
  },
  {
    region: "Europe",
    cities: ["London", "Berlin", "Zurich"],
  },
  {
    region: "Middle East & Africa",
    cities: ["Dubai", "Riyadh", "Nairobi"],
  },
  {
    region: "Asia-Pacific",
    cities: ["Singapore", "Sydney", "Tokyo"],
  },
];

const Locations = () => (
  <Section id="locations">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Locations
    </p>
    <h3 className="mb-4 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Operationally present, not just represented.
    </h3>
    <p className="mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
      Dropwing Groups maintains operational presence across key institutional
      markets. Each location supports direct execution capacity — not advisory
      outposts.
    </p>
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
      {regions.map((r) => (
        <div key={r.region}>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
            {r.region}
          </h4>
          <ul className="space-y-2">
            {r.cities.map((city) => (
              <li
                key={city}
                className="text-sm text-muted-foreground"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

/* ── Awards ── */
const awards = [
  { year: "2025", body: "Global Governance Institute", recognition: "Excellence in Institutional Execution" },
  { year: "2024", body: "Enterprise Strategy Forum", recognition: "Best-in-Class Operational Continuity" },
  { year: "2024", body: "World Economic Council", recognition: "Responsible AI Deployment Award" },
  { year: "2023", body: "International Standards Board", recognition: "Governance Framework of the Year" },
  { year: "2023", body: "Digital Infrastructure Alliance", recognition: "Sustained Systems Delivery Recognition" },
];

const Awards = () => (
  <Section id="awards">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Awards
    </p>
    <h3 className="mb-12 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Independent recognition of delivered value.
    </h3>
    <div className="divide-y divide-border">
      {awards.map((a, i) => (
        <div
          key={i}
          className="grid gap-2 py-5 md:grid-cols-[80px_1fr_1fr] md:gap-8"
        >
          <span className="text-sm font-semibold text-foreground">
            {a.year}
          </span>
          <span className="text-sm text-muted-foreground">{a.body}</span>
          <span className="text-sm text-foreground">{a.recognition}</span>
        </div>
      ))}
    </div>
  </Section>
);

/* ── Leadership ── */
const leaders = [
  { name: "R. Kessler", role: "Chief Executive Officer", region: "Global" },
  { name: "S. Narayanan", role: "Chief Operating Officer", region: "Asia-Pacific" },
  { name: "M. Hoffmann", role: "Chief Governance Officer", region: "Europe" },
  { name: "A. Diouf", role: "Chief Strategy Officer", region: "Middle East & Africa" },
  { name: "J. Whitmore", role: "Chief Technology Officer", region: "North America" },
  { name: "L. Tanaka", role: "General Counsel", region: "Global" },
];

const Leadership = () => (
  <Section id="leadership">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Leadership
    </p>
    <h3 className="mb-12 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Accountable leadership.
    </h3>
    <div className="grid gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
      {leaders.map((l) => (
        <div
          key={l.name}
          className="bg-background p-6 md:p-8"
        >
          <h4 className="text-sm font-semibold text-foreground">{l.name}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{l.role}</p>
          <p className="mt-3 text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
            {l.region}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

/* ── Page ── */
const WhoWeAre = () => {
  return (
    <main>
      {/* Page header */}
      <div className="bg-structural text-structural-foreground pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Who We Are
          </h1>
        </div>
      </div>
      <SubNav />
      <Overview />
      <Commitments />
      <Organization />
      <Locations />
      <Awards />
      <LeadershipQuote />
      <Leadership />
    </main>
  );
};

export default WhoWeAre;
