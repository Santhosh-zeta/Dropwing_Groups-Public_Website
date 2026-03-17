import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import LeadershipQuote from "@/components/sections/LeadershipQuote";

const subNavItems = [
  "Overview",
  "Commitments",
  "Organization",
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
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const SCROLL_OFFSET = 125; // main navbar (~68px) + subnav (~52px) + 5px breathing room

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
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

/* ── Brand Reveal Video ── */
import brandRevealVideo from "@/assets/Cinematic_Brand_Reveal_Dropwing_Groups.mp4";

const BrandReveal = () => (
  <section className="w-full bg-black py-0">
    <div className="relative w-full aspect-video md:h-[80vh] md:aspect-auto overflow-hidden group">
      <video
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={brandRevealVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      <div className="absolute bottom-12 left-6 md:left-20">
        <p className="text-white/60 text-xs font-mono uppercase tracking-widest mb-2">The Silent Engine</p>
        <h3 className="text-white text-2xl md:text-4xl font-light tracking-tight">System Identity</h3>
      </div>
    </div>
  </section>
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



import { Linkedin } from "lucide-react";
import santhoshImg from "@/assets/Leadership-photos/Santhosh.jpg";
import johanImg from "@/assets/Leadership-photos/johan.jpg";
import yakssendraImg from "@/assets/Leadership-photos/yakssendra.jpg";
import ashwinImg from "@/assets/Leadership-photos/Ashwin-kumaran.jpg";
import dakshaImg from "@/assets/Leadership-photos/Daksha.jpg";
import dhanasekaranImg from "@/assets/Leadership-photos/Dhanasekaran.jpg";
// import melvinImg from "@/assets/Leadership-photos/Melvin.jpg";
import yazhiniImg from "@/assets/Leadership-photos/yazhini.jpeg";
import shaanImg from "@/assets/Leadership-photos/shaanjpeg.jpeg";


/* ── Leadership ── */
const leaders = [
  { name: "Santhosh V", role: "Co-founder and Managing Director of Dropwing Groups", linkedin: "https://www.linkedin.com/in/santhosh---v", image: santhoshImg, imagePosition: "object-[center_10%]" },
  { name: "Johan J Anil", role: "Board Member & CEO of Dropwing Design Studio", linkedin: "https://www.linkedin.com/in/johan-j-anil/", image: johanImg },
  { name: "Yakssendra Kishorekumar", role: "Board Member & Chief Editing Officer", linkedin: "https://www.linkedin.com/in/yakssendra-kishorekumar-4a4507323/", image: yakssendraImg },
  { name: "Yazhini Phalanivel", role: "Board Member & CEO of Grovia", linkedin: "https://www.linkedin.com/in/yazhini-phalanivel-2403b433a/", image: yazhiniImg },
  { name: "Ashwin Kumaran", role: "CEO of WebForge", linkedin: "https://www.linkedin.com/in/ashwin-kumaran-92b6b831b/", image: ashwinImg },
  { name: "Daksha Bordekar", role: "CEO of PerSyniX", linkedin: "https://www.linkedin.com/in/daksha-bordekar-630a46303/", image: dakshaImg },
  { name: "Mohd Shaan", role: "CTO of WebForge", linkedin: "https://www.linkedin.com/in/mohd-shaan-9785a631b/", image: shaanImg },
  { name: "Dhanasekaran Srinivasan", role: "Advisor and CSO of Dropwing Groups", linkedin: "https://www.linkedin.com/in/dhanasekaran-srinivasan/", image: dhanasekaranImg },
  // { name: "Melvin", role: "Advisor", linkedin: "https://www.linkedin.com/in/melvin-cyberops/", image: melvinImg },
];

const Leadership = () => (
  <Section id="leadership">
    <p className="mb-4 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
      Leadership
    </p>
    <h3 className="mb-12 max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground md:text-3xl">
      Accountable leadership.
    </h3>
    <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((l) => (
        <div
          key={l.name}
          className="bg-background hover:bg-white/[0.02] transition-colors duration-500 p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden min-h-[300px]"
        >
          {/* Background Ambient Glow on Hover */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-y-1/2 translate-x-1/4 z-0" />

          {/* Card Content (Foreground) */}
          <div className="flex flex-col justify-between flex-1 w-[60%] sm:w-[55%] z-20 relative">
            <div>
              <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{l.name}</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed drop-shadow-md pb-4">{l.role}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-border/50">
              <a
                href={l.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase drop-shadow-md"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Connect</span>
              </a>
            </div>
          </div>

          {/* Floor-Anchored Portrait Placeholder (Background) */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[85%] md:h-[95%] pointer-events-none z-10 origin-bottom flex items-end justify-end">
            {/* Color Overlay */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

            {/* Left fade so the image fades smoothly into the card's dark background */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            <img
              src={l.image}
              alt={l.name}
              className={`w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform-gpu origin-bottom ${l.imagePosition || 'object-bottom'}`}
            />
          </div>
        </div>
      ))}
    </div>
  </Section>
);

/* ── Page ── */
const WhoWeAre = () => {
  return (
    <main>
      {/* Page header — Rich typographic hero */}
      <div className="relative bg-structural text-structural-foreground pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden border-b border-white/5">
        {/* Subtle animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        {/* Violet glow accent */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Left: Headline */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest">The Institution</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-8"
              >
                Who We<br />
                <span className="text-white/40">Are.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-white/60 max-w-lg leading-relaxed border-l-2 border-primary/30 pl-5"
              >
                Execution ownership is central to how we operate. We embed, deliver, and transfer — permanently.
              </motion.p>
            </div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-6 lg:items-end"
            >
              <div className="flex flex-wrap gap-8 lg:justify-end">
                {[
                  { val: "2024", label: "Est." },
                  { val: "Chennai", label: "HQ" },
                  { val: "5+", label: "Ventures" },
                  { val: "3", label: "Capabilities" },
                ].map(stat => (
                  <div key={stat.label} className="text-center lg:text-right">
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <SubNav />
      <Overview />
      <BrandReveal />
      <Commitments />
      <Organization />
      <LeadershipQuote />
      <Leadership />
    </main>
  );
};

export default WhoWeAre;
