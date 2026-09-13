import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  Instagram,
  Megaphone,
  CreditCard,
  LayoutPanelTop,
  BookOpen,
  RefreshCw,
  Check,
  Menu,
  X,
  Linkedin,
  Facebook,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  icon: React.ReactNode;
  name: string;
  description: string;
  tags: string[];
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ClientType {
  name: string;
  detail: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: Service[] = [
  {
    icon: <Palette size={28} />,
    name: "Logo & Brand Identity",
    description:
      "A complete visual identity built from the ground up — logo, color system, typography, and brand guidelines.",
    tags: ["Logo Design", "Brand Guide", "Color System", "Typography"],
  },
  {
    icon: <Instagram size={28} />,
    name: "Social Media Creatives",
    description:
      "Posts, stories, reel covers, and LinkedIn banners designed to stop the scroll and build consistent presence.",
    tags: ["Feed Posts", "Stories", "Reel Covers", "LinkedIn Banners"],
  },
  {
    icon: <Megaphone size={28} />,
    name: "Social Media Ad Creatives",
    description:
      "High-converting ad creatives for Meta, Google Display, and promotional campaigns that drive real results.",
    tags: ["Meta Ads", "Google Display", "Promo Banners", "A/B Variants"],
  },
  {
    icon: <CreditCard size={28} />,
    name: "Business & Visiting Card Design",
    description:
      "Print-ready, professionally crafted cards that leave the right impression every single time.",
    tags: ["Visiting Cards", "Business Cards", "Print Ready", "Both Sides"],
  },
  {
    icon: <LayoutPanelTop size={28} />,
    name: "Banner & Poster Design",
    description:
      "Event banners, hoardings, exhibition displays, and promotional posters that command attention.",
    tags: ["Event Banners", "Hoardings", "Posters", "Exhibition Displays"],
  },
  {
    icon: <BookOpen size={28} />,
    name: "Marketing Collateral",
    description:
      "Brochures, flyers, catalogues, and pitch decks that communicate your value with polish and clarity.",
    tags: ["Brochures", "Flyers", "Catalogues", "Pitch Decks"],
  },
  {
    icon: <RefreshCw size={28} />,
    name: "Brand Refresh & Redesign",
    description:
      "Already have a brand but need to modernize? We evolve your identity without losing what makes you recognizable.",
    tags: ["Logo Refresh", "Brand Audit", "Visual Update", "Style Guide"],
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Brief",
    description:
      "We start with a detailed discovery conversation — your industry, audience, competitors, and vision. No generic questionnaires.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Our designers craft initial concepts tailored to your brief. You receive options with clear rationale, not mystery.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We iterate based on your feedback until every detail feels right. Revisions are focused and efficient.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Final files in every format you'll ever need — print, digital, and everything in between. Organized and ready to use.",
  },
];

const clientTypes: ClientType[] = [
  {
    name: "Startups & Founders",
    detail: "Build a brand that earns trust from day one.",
  },
  {
    name: "Growing Businesses",
    detail: "Look as professional as the big players.",
  },
  {
    name: "E-commerce Brands",
    detail: "Visuals that convert browsers into buyers.",
  },
  {
    name: "Agencies",
    detail: "White-label design execution at scale.",
  },
  {
    name: "Professionals & Solopreneurs",
    detail: "Personal brand that opens doors.",
  },
  {
    name: "Enterprises",
    detail: "Consistent brand execution across all touchpoints.",
  },
];

const benefits = [
  "Designs that work across digital and print",
  "Built around your brand, not a template",
  "Fast turnaround without compromising quality",
  "Every file format you'll ever need",
  "One dedicated design team, not a freelancer lottery",
  "Revisions until it's right — no nickel-and-diming",
];

// ─── Particle field (CSS-only, no canvas) ─────────────────────────────────────

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 8,
  opacity: Math.random() * 0.4 + 0.1,
}));

const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {PARTICLES.map((p) => (
      <span
        key={p.id}
        style={{
          position: "absolute",
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: "50%",
          background: `rgba(168, 85, 247, ${p.opacity})`,
          animation: `float ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
          boxShadow: `0 0 ${p.size * 3}px rgba(168, 85, 247, ${p.opacity * 0.8})`,
        }}
      />
    ))}
    <style>{`
      @keyframes float {
        0%   { transform: translate(0, 0) scale(1); }
        33%  { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.2); }
        66%  { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(0.8); }
        100% { transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.1); }
      }
    `}</style>
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(8, 6, 15, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.12)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span
            className="font-bold tracking-widest text-sm uppercase"
            style={{ color: "#a855f7", letterSpacing: "0.2em" }}
          >
            Design Studio
          </span>
          <span className="text-xs text-gray-500 tracking-wide mt-0.5">
            by Dropwing Groups
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.label}
              onClick={() => scrollTo(l.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm px-5 py-2.5 rounded-lg font-medium transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #9333ea, #a855f7)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(168,85,247,0.3)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.boxShadow =
                "0 0 30px rgba(168,85,247,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.boxShadow =
                "0 0 20px rgba(168,85,247,0.3)")
            }
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(8,6,15,0.97)", borderTop: "1px solid rgba(168,85,247,0.12)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-gray-300 hover:text-white py-2 transition-colors text-base"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="mt-2 py-3 rounded-lg font-medium text-white text-center"
                style={{ background: "linear-gradient(135deg, #9333ea, #a855f7)" }}
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ background: "#08060f" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(147,51,234,0.12) 0%, transparent 70%)",
        }}
      />

      <ParticleField />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border text-xs tracking-widest uppercase font-medium"
          style={{
            borderColor: "rgba(168,85,247,0.3)",
            background: "rgba(168,85,247,0.08)",
            color: "#a855f7",
          }}
        >
          <Sparkles size={12} />
          Dropwing Design Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-bold text-white leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
        >
          We design brands
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7, #c084fc, #e879f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            people remember.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
        >
          From your logo and brand identity to every social media post, banner, and
          business card — we make your business look exactly as good as it is.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:design@dropwinggroups.com"
            className="px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 text-base"
            style={{
              background: "linear-gradient(135deg, #9333ea, #a855f7)",
              boxShadow: "0 0 30px rgba(168,85,247,0.35)",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.boxShadow = "0 0 50px rgba(168,85,247,0.6)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.boxShadow = "0 0 30px rgba(168,85,247,0.35)")
            }
          >
            Start a Project
          </a>
          <button
            onClick={scrollToServices}
            className="px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 text-base"
            style={{
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(168,85,247,0.8)";
              el.style.background = "rgba(168,85,247,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(168,85,247,0.4)";
              el.style.background = "transparent";
            }}
          >
            View Services
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(168,85,247,0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: "10px" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── Services ─────────────────────────────────────────────────────────────────

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: hovered
          ? "1px solid rgba(168,85,247,0.5)"
          : "1px solid rgba(255,255,255,0.07)",
        boxShadow: hovered
          ? "0 0 30px rgba(168,85,247,0.12), inset 0 0 30px rgba(168,85,247,0.04)"
          : "none",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(168,85,247,0.12)",
          color: "#a855f7",
          border: "1px solid rgba(168,85,247,0.2)",
        }}
      >
        {service.icon}
      </div>
      <div>
        <h3 className="font-semibold text-white text-lg mb-2 leading-snug">
          {service.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md"
            style={{
              background: "rgba(168,85,247,0.1)",
              color: "#c084fc",
              border: "1px solid rgba(168,85,247,0.15)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => (
  <section
    id="services"
    className="py-24 md:py-32 px-6"
    style={{ background: "#0a0710" }}
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#a855f7" }}
        >
          What We Design
        </p>
        <h2
          className="font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          Everything your brand needs.
        </h2>
        <p className="text-gray-400 leading-relaxed">
          Seven design disciplines. One studio. From first impression to every
          touchpoint — we cover the full visual picture.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, i) => (
          <ServiceCard key={service.name} service={service} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── Why Design Studio ────────────────────────────────────────────────────────

const WhySection = () => (
  <section className="py-24 md:py-32 px-6" style={{ background: "#08060f" }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-medium tracking-widest uppercase mb-6"
            style={{ color: "#a855f7" }}
          >
            Why Design Studio
          </p>
          <h2
            className="font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Great design is the difference between being seen and being ignored.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Every day your audience sees hundreds of brands. Most blur together. The
            ones that stick have one thing in common: deliberate, consistent, professional
            design across every single touchpoint.
          </p>
          <p className="text-gray-400 leading-relaxed">
            At Dropwing Design Studio, we don't just make things look pretty. We build
            visual systems that communicate who you are, earn trust instantly, and grow
            with your business.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { icon: <Zap size={20} />, label: "Fast delivery" },
              { icon: <Shield size={20} />, label: "Brand-first thinking" },
              { icon: <Clock size={20} />, label: "On-time, every time" },
              { icon: <Sparkles size={20} />, label: "Premium quality" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(168,85,247,0.12)", color: "#a855f7" }}
                >
                  {item.icon}
                </div>
                <span className="text-sm text-gray-300 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — benefits checklist */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(168,85,247,0.15)",
          }}
        >
          <h3 className="font-semibold text-white text-lg mb-7">
            What you get when you work with us
          </h3>
          <ul className="flex flex-col gap-5">
            {benefits.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(168,85,247,0.2)", color: "#a855f7" }}
                >
                  <Check size={11} />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Process ──────────────────────────────────────────────────────────────────

const ProcessSection = () => (
  <section
    id="process"
    className="py-24 md:py-32 px-6"
    style={{ background: "#0a0710" }}
  >
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#a855f7" }}
        >
          How It Works
        </p>
        <h2
          className="font-bold text-white leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          From brief to final files in days, not weeks.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          A clear, transparent process so you always know where things stand.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(168,85,247,0.12)",
            }}
          >
            <div
              className="text-5xl font-bold mb-4 leading-none"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.4), rgba(168,85,247,0.1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {step.number}
            </div>
            <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Who We Design For ────────────────────────────────────────────────────────

const ClientTypesSection = () => (
  <section className="py-24 md:py-32 px-6" style={{ background: "#08060f" }}>
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "#a855f7" }}
        >
          Who We Work With
        </p>
        <h2
          className="font-bold text-white leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
        >
          We design for all kinds of ambition.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {clientTypes.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="rounded-2xl p-6 flex flex-col gap-2 transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(168,85,247,0.1)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.35)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(168,85,247,0.1)")
            }
          >
            <div
              className="w-2 h-2 rounded-full mb-1"
              style={{ background: "#a855f7" }}
            />
            <h3 className="text-white font-semibold text-base">{client.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{client.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CTA Section ──────────────────────────────────────────────────────────────

const CTASection = () => (
  <section
    id="contact"
    className="py-24 md:py-32 px-6 relative overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #12071f 0%, #1a0a2e 50%, #0f0520 100%)",
    }}
  >
    {/* Decorative glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(147,51,234,0.18) 0%, transparent 70%)",
      }}
    />

    <div className="max-w-3xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-xs font-medium tracking-widest uppercase mb-6"
          style={{ color: "#c084fc" }}
        >
          Let's Build Something
        </p>
        <h2
          className="font-bold text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
        >
          Ready to transform your brand?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto">
          Tell us about your project and we'll get back to you within 24 hours. No
          lengthy intake forms — just a real conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:design@dropwinggroups.com"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #9333ea, #a855f7)",
              boxShadow: "0 0 40px rgba(168,85,247,0.4)",
              fontSize: "1rem",
            }}
          >
            design@dropwinggroups.com
            <ExternalLink size={15} />
          </a>
          <a
            href="https://wa.me/919363900110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200"
            style={{
              border: "1px solid rgba(168,85,247,0.4)",
              color: "#c084fc",
              background: "transparent",
              fontSize: "1rem",
            }}
          >
            WhatsApp: +91 93639 00110
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          Based in Chennai, India · Available worldwide
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const Footer = () => {
  const serviceLinks = [
    "Logo & Brand Identity",
    "Social Media Creatives",
    "Social Media Ad Creatives",
    "Business & Visiting Card Design",
    "Banner & Poster Design",
    "Marketing Collateral",
    "Brand Refresh & Redesign",
  ];

  const scrollToServices = () =>
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="px-6 pt-16 pb-10"
      style={{
        background: "#050309",
        borderTop: "1px solid rgba(168,85,247,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div
                className="font-bold tracking-widest text-sm uppercase mb-1"
                style={{ color: "#a855f7", letterSpacing: "0.2em" }}
              >
                Design Studio
              </div>
              <div className="text-xs text-gray-600">by Dropwing Groups</div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Brands that get noticed.
              <br />
              We design visual identities that earn attention and build trust.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://instagram.com", icon: <Instagram size={17} />, label: "Instagram" },
                { href: "https://linkedin.com", icon: <Linkedin size={17} />, label: "LinkedIn" },
                { href: "https://facebook.com", icon: <Facebook size={17} />, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.15)",
                    color: "#9ca3af",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(168,85,247,0.2)";
                    el.style.color = "#a855f7";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(168,85,247,0.08)";
                    el.style.color = "#9ca3af";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={scrollToServices}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:design@dropwinggroups.com"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors break-all"
                >
                  design@dropwinggroups.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919363900110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  +91 93639 00110
                </a>
              </li>
              <li className="text-gray-500 text-sm">Chennai, Tamil Nadu, India</li>
            </ul>
          </div>

          {/* Parent */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
              Dropwing Groups
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Design Studio is one of four companies under Dropwing Groups — a
              multi-vertical organization built for modern business.
            </p>
            <a
              href="https://dropwinggroups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: "#a855f7" }}
            >
              dropwinggroups.com
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span>© 2024 Dropwing Design Studio. All rights reserved.</span>
          <span>
            Part of{" "}
            <a
              href="https://dropwinggroups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Dropwing Groups
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

// ─── Root component ───────────────────────────────────────────────────────────

const DesignStudioSite = () => {
  return (
    <div style={{ background: "#08060f", color: "#fff", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <ClientTypesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DesignStudioSite;
