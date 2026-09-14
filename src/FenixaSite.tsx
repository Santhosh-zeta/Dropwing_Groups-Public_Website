import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Smartphone,
  Layers,
  Cloud,
  Shield,
  Zap,
  TrendingUp,
  Activity,
  ShoppingCart,
  Server,
  Truck,
  BookOpen,
  Search,
  GitBranch,
  Code2,
  CheckCircle2,
  Rocket,
  Eye,
  Lock,
  Users,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
} from 'lucide-react';

// ── Design tokens ──────────────────────────────────────────────────────────────
const C = {
  bg: '#050814',
  bgCard: 'rgba(255,255,255,0.03)',
  bgCardHover: 'rgba(59,130,246,0.06)',
  border: 'rgba(255,255,255,0.07)',
  borderBlue: 'rgba(59,130,246,0.35)',
  text: '#e2eaf7',
  textSub: '#7a90b0',
  accent: '#3b82f6',
  accentDeep: '#2563eb',
  accentDim: 'rgba(59,130,246,0.15)',
};

const F = {
  display: "'Syne', sans-serif",
  body: "'IBM Plex Sans', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

// ── Global styles (injected once) ─────────────────────────────────────────────
const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #050814; }
  ::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.35); border-radius: 2px; }

  /* Scan-line grid overlay on hero */
  @keyframes scanH {
    from { background-position: 0 0; }
    to   { background-position: 0 80px; }
  }
  @keyframes chevronFloat {
    0%, 100% { transform: translateY(0); opacity: 0.5; }
    50%       { transform: translateY(7px); opacity: 1; }
  }
  @keyframes barPulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }

  .fx-scanlines {
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent, transparent 78px,
        rgba(59,130,246,0.035) 78px, rgba(59,130,246,0.035) 80px
      ),
      repeating-linear-gradient(
        90deg,
        transparent, transparent 118px,
        rgba(59,130,246,0.02) 118px, rgba(59,130,246,0.02) 120px
      );
    animation: scanH 12s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .fx-scanlines { animation: none; }
  }

  .fx-chevron { animation: chevronFloat 2.2s ease-in-out infinite; }

  /* Nav link underline */
  .fx-nav-link {
    position: relative;
    color: rgba(226,234,247,0.65);
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s;
    padding-bottom: 2px;
  }
  .fx-nav-link::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 1px;
    background: #3b82f6;
    transform: scaleX(0);
    transition: transform 0.22s cubic-bezier(0.22,1,0.36,1);
    transform-origin: left;
  }
  .fx-nav-link:hover { color: #e2eaf7; }
  .fx-nav-link:hover::after { transform: scaleX(1); }

  /* Service card hover */
  .fx-service-card {
    transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;
  }
  .fx-service-card:hover {
    border-color: rgba(59,130,246,0.38) !important;
    box-shadow: 0 0 36px rgba(59,130,246,0.1), 0 0 0 1px rgba(59,130,246,0.12);
    background: rgba(59,130,246,0.05) !important;
  }

  /* Process step connector */
  .fx-process-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.08) 100%);
    margin-top: 22px;
    margin-inline: 8px;
  }

  /* Principle card top border */
  .fx-principle-card {
    border-top: 2px solid #3b82f6;
    transition: box-shadow 0.25s, background 0.25s;
  }
  .fx-principle-card:hover {
    box-shadow: 0 0 28px rgba(59,130,246,0.1);
    background: rgba(59,130,246,0.05) !important;
  }

  /* Tech pill */
  .fx-pill {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 3px;
    background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.22);
    color: #93c5fd;
    letter-spacing: 0.03em;
    white-space: nowrap;
    display: inline-block;
  }

  /* Eyebrow */
  .fx-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #3b82f6;
  }
`;

// ── Motion variants ────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const } },
};

const VP = { once: true, margin: '-80px' } as const;

// ── Data ───────────────────────────────────────────────────────────────────────
type ServiceData = { Icon: LucideIcon; title: string; desc: string; tags: string[] };
type IndustryData = { Icon: LucideIcon; name: string; desc: string };
type ProcessStep  = { num: string; Icon: LucideIcon; title: string; desc: string };
type PrincipleData = { Icon: LucideIcon; title: string; desc: string };

const SERVICES: ServiceData[] = [
  {
    Icon: Globe,
    title: 'Web Development',
    desc: 'We build fast, production-grade websites and web applications — from marketing sites to complex dashboards and SaaS portals. Our stack is chosen for longevity, not trends.',
    tags: ['React', 'Next.js', 'Laravel', 'Node.js', 'TypeScript'],
  },
  {
    Icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Native-quality mobile apps for iOS and Android, built cross-platform where it makes sense. Offline support, push notifications, and App Store deployment handled end-to-end.',
    tags: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo'],
  },
  {
    Icon: Layers,
    title: 'Product Development',
    desc: 'From MVP definition to full product launch — we own architecture, design system, development, and go-live. A single team that carries the product from idea to production.',
    tags: ['MVP', 'Architecture', 'UI/UX', 'Agile', 'Launch'],
  },
  {
    Icon: Cloud,
    title: 'DevOps & Cloud',
    desc: 'Infrastructure that scales without surprises. We design, provision, and operate cloud environments on AWS, GCP, and Azure — with CI/CD pipelines, monitoring, and cost controls built in.',
    tags: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    Icon: Shield,
    title: 'Cybersecurity',
    desc: 'Security as an engineering discipline, not an afterthought. We perform penetration testing, VAPT, and secure code reviews — and help teams build compliance-ready systems from day one.',
    tags: ['VAPT', 'Pen Testing', 'OWASP', 'ISO 27001', 'Compliance'],
  },
  {
    Icon: Zap,
    title: 'API & Integrations',
    desc: 'REST and GraphQL APIs designed for clarity and durability. Payment gateways, CRMs, ERPs, logistics providers, communication platforms — we\'ve wired them all into production systems.',
    tags: ['REST', 'GraphQL', 'Webhooks', 'OAuth', 'Stripe', 'Twilio'],
  },
];

const TECH_CATEGORIES = [
  { label: 'Frontend',  items: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend',   items: ['Node.js', 'Python', 'Laravel', 'Go', 'FastAPI'] },
  { label: 'Mobile',    items: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin'] },
  { label: 'Cloud',     items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform'] },
  { label: 'Database',  items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase'] },
  { label: 'Security',  items: ['OWASP Top 10', 'ISO 27001', 'VAPT', 'Pen Testing', 'SOC 2'] },
];

const INDUSTRIES: IndustryData[] = [
  { Icon: TrendingUp,    name: 'Fintech',     desc: 'Lending platforms, payment infrastructure, wallets, and trading dashboards built to regulatory standards.' },
  { Icon: Activity,      name: 'Healthcare',  desc: 'Clinic management, telemedicine, EHR integrations, and HIPAA-aligned data handling.' },
  { Icon: ShoppingCart,  name: 'E-commerce',  desc: 'Storefronts, inventory systems, multi-vendor marketplaces, and headless commerce architectures.' },
  { Icon: Server,        name: 'SaaS',        desc: 'Multi-tenant B2B products — authentication, billing, usage metering, and admin tooling included.' },
  { Icon: Truck,         name: 'Logistics',   desc: 'Fleet tracking, route optimization, warehouse management, and carrier API integrations.' },
  { Icon: BookOpen,      name: 'Education',   desc: 'LMS platforms, adaptive assessment engines, live session tools, and student analytics.' },
];

const PROCESS_STEPS: ProcessStep[] = [
  { num: '01', Icon: Search,       title: 'Discovery',   desc: 'We map your problem space, existing constraints, and success criteria before a line of code is written.' },
  { num: '02', Icon: GitBranch,    title: 'Architecture', desc: 'System design, technology selection, data models, and integration points — documented, reviewed, agreed.' },
  { num: '03', Icon: Code2,        title: 'Development',  desc: 'Iterative delivery in two-week cycles. You see working software early and often, not at the end.' },
  { num: '04', Icon: CheckCircle2, title: 'Testing',      desc: 'Automated tests, manual QA, security scanning, and load testing before anything touches production.' },
  { num: '05', Icon: Rocket,       title: 'Deployment & Support', desc: 'Zero-downtime releases, monitoring from day one, and a support arrangement that fits your team.' },
];

const PRINCIPLES: PrincipleData[] = [
  {
    Icon: Rocket,
    title: 'Production-first engineering',
    desc: 'We write code that runs in production, not demos. That means error handling, observability, graceful degradation, and security — not bolted on later, but part of the first commit.',
  },
  {
    Icon: Eye,
    title: 'Transparent process',
    desc: 'No black-box development. You have access to the repository, the task board, and weekly calls where real status is shared — not polished status updates.',
  },
  {
    Icon: Lock,
    title: 'Security by design',
    desc: 'Threat modeling during architecture, OWASP controls during development, and penetration testing before launch. Security is an engineering constraint, not a service tier.',
  },
  {
    Icon: Users,
    title: 'Your partner, not just a vendor',
    desc: 'We advise, we push back on bad ideas, and we stay engaged after launch. A vendor delivers a project; a partner cares about the outcome.',
  },
];

// ── Shared components ──────────────────────────────────────────────────────────
function Eyebrow({ label }: { label: string }) {
  return (
    <div className="fx-eyebrow mb-4">
      <span style={{ color: C.accent, opacity: 0.7 }}>// </span>
      {label}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: F.display,
        fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        color: C.text,
        textWrap: 'balance',
      }}
    >
      {children}
    </h2>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Stack',    href: '#stack' },
    { label: 'Process',  href: '#process' },
    { label: 'Contact',  href: '#contact' },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(5,8,20,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span
              style={{
                fontFamily: F.display,
                fontWeight: 800,
                fontSize: '1.35rem',
                letterSpacing: '-0.01em',
                color: C.accent,
              }}
            >
              FENIXA
            </span>
            <span
              style={{
                fontFamily: F.mono,
                fontWeight: 500,
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                color: 'rgba(59,130,246,0.65)',
              }}
            >
              SOLUTIONS
            </span>
          </div>
          <span
            style={{
              fontFamily: F.mono,
              fontSize: '0.55rem',
              color: C.textSub,
              letterSpacing: '0.08em',
              marginTop: 2,
            }}
          >
            by Dropwing Groups
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="fx-nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: F.body,
              fontSize: '0.875rem',
              fontWeight: 600,
              padding: '9px 20px',
              background: C.accent,
              color: '#fff',
              borderRadius: 4,
              textDecoration: 'none',
              transition: 'background 0.2s, transform 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.accentDeep; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.accent; }}
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            color: C.text,
            cursor: 'pointer',
            padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: 'rgba(5,8,20,0.97)',
            backdropFilter: 'blur(16px)',
            borderTop: `1px solid ${C.border}`,
            padding: '20px 24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                fontFamily: F.body,
                fontSize: '1rem',
                fontWeight: 500,
                color: C.text,
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              fontFamily: F.body,
              fontSize: '0.9rem',
              fontWeight: 600,
              padding: '11px 20px',
              background: C.accent,
              color: '#fff',
              borderRadius: 4,
              textDecoration: 'none',
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}

// ── Hero ───────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: C.bg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 68,
      }}
    >
      {/* Scan-line grid overlay */}
      <div
        className="fx-scanlines"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Subtle radial glow behind headline */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          maxWidth: 900,
          height: 400,
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1200,
          width: '100%',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="fx-eyebrow" style={{ justifyContent: 'center', marginBottom: 28 }}>
            <span style={{ color: C.accent, opacity: 0.7 }}>// </span>
            Fenixa Solutions · Software &amp; Technology
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: F.display,
            fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: '-0.03em',
            color: C.text,
            marginBottom: '1.5rem',
            textWrap: 'balance',
          }}
        >
          We build software<br />
          <span style={{ color: C.accent }}>that works.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: F.body,
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.7,
            color: C.textSub,
            maxWidth: 620,
            margin: '0 auto 2.75rem',
          }}
        >
          From your first website to a full-scale product — we engineer reliable,
          secure, and scalable digital solutions that solve real business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            style={{
              fontFamily: F.body,
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '13px 28px',
              background: C.accent,
              color: '#fff',
              borderRadius: 4,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.accentDeep; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.accent; }}
          >
            Start a Project <ArrowRight size={15} />
          </a>
          <a
            href="#services"
            style={{
              fontFamily: F.body,
              fontWeight: 500,
              fontSize: '0.95rem',
              padding: '12px 28px',
              background: 'transparent',
              color: C.text,
              border: `1px solid ${C.border}`,
              borderRadius: 4,
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = C.borderBlue;
              el.style.color = C.accent;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = C.border;
              el.style.color = C.text;
            }}
          >
            See Our Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: F.mono,
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: C.textSub,
            textTransform: 'uppercase',
          }}
        >
          scroll
        </span>
        <div className="fx-chevron">
          <ChevronDown size={16} color={C.textSub} />
        </div>
      </motion.div>
    </section>
  );
}

// ── Services ───────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: C.bg,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <Eyebrow label="services" />
          <SectionHeading>End-to-end software for every stage of your business.</SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 20,
            marginTop: '3.5rem',
          }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              className="fx-service-card"
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                padding: '28px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 6,
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <s.Icon size={20} color={C.accent} strokeWidth={1.6} />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: C.text,
                    marginBottom: 10,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: F.body,
                    fontWeight: 300,
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: C.textSub,
                  }}
                >
                  {s.desc}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {s.tags.map((t) => (
                  <span key={t} className="fx-pill">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Tech Stack ─────────────────────────────────────────────────────────────────
function TechStackSection() {
  return (
    <section
      id="stack"
      style={{
        background: 'rgba(59,130,246,0.025)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <Eyebrow label="technology" />
          <SectionHeading>Built with industry-leading technology.</SectionHeading>
          <p
            style={{
              fontFamily: F.body,
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: C.textSub,
              maxWidth: 520,
              marginTop: 16,
            }}
          >
            We pick the right tool for the job — not the trendiest one. Every choice is made with maintainability and long-term cost in mind.
          </p>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 16,
            marginTop: '3.5rem',
          }}
        >
          {TECH_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.label}
              variants={staggerItem}
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                padding: '20px 22px',
              }}
            >
              <div
                style={{
                  fontFamily: F.mono,
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: C.accent,
                  opacity: 0.8,
                  marginBottom: 14,
                }}
              >
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {cat.items.map((item) => (
                  <span key={item} className="fx-pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Industries ─────────────────────────────────────────────────────────────────
function IndustriesSection() {
  return (
    <section
      style={{
        background: C.bg,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <Eyebrow label="industries" />
          <SectionHeading>We've built for businesses across industries.</SectionHeading>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 16,
            marginTop: '3.5rem',
          }}
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.name}
              variants={staggerItem}
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                padding: '22px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 5,
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <ind.Icon size={17} color={C.accent} strokeWidth={1.6} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: C.text,
                    marginBottom: 7,
                  }}
                >
                  {ind.name}
                </div>
                <p
                  style={{
                    fontFamily: F.body,
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: 1.65,
                    color: C.textSub,
                  }}
                >
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Process ────────────────────────────────────────────────────────────────────
function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: 'rgba(59,130,246,0.025)',
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP} style={{ textAlign: 'center' }}>
          <Eyebrow label="how we work" />
          <SectionHeading>From idea to deployed product — with us every step.</SectionHeading>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="hidden md:flex"
          style={{ alignItems: 'flex-start', marginTop: '4rem' }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <React.Fragment key={step.num}>
              <motion.div variants={staggerItem} style={{ flex: '0 0 auto', width: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 6,
                    background: 'rgba(59,130,246,0.1)',
                    border: `1px solid ${C.borderBlue}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 14,
                    position: 'relative',
                  }}
                >
                  <step.Icon size={20} color={C.accent} strokeWidth={1.6} />
                  <div
                    style={{
                      position: 'absolute',
                      top: -9,
                      right: -9,
                      fontFamily: F.mono,
                      fontSize: '0.6rem',
                      fontWeight: 500,
                      color: C.accent,
                      background: C.bg,
                      border: `1px solid ${C.borderBlue}`,
                      borderRadius: 3,
                      padding: '1px 5px',
                      lineHeight: 1.4,
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: C.text,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: F.body,
                    fontWeight: 300,
                    fontSize: '0.78rem',
                    lineHeight: 1.65,
                    color: C.textSub,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
              {i < PROCESS_STEPS.length - 1 && <div className="fx-process-line" />}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile: vertical list */}
        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          className="md:hidden"
          style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: '3rem' }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              style={{ display: 'flex', gap: 16, paddingBottom: i < PROCESS_STEPS.length - 1 ? 32 : 0 }}
            >
              {/* Left: number + vertical line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 5,
                    background: 'rgba(59,130,246,0.1)',
                    border: `1px solid ${C.borderBlue}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <step.Icon size={17} color={C.accent} strokeWidth={1.6} />
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: 1,
                      background: 'linear-gradient(180deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.08) 100%)',
                      marginTop: 8,
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingTop: 8 }}>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: '0.6rem',
                    color: C.accent,
                    opacity: 0.7,
                    marginBottom: 4,
                    letterSpacing: '0.1em',
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontFamily: F.display,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: C.text,
                    marginBottom: 8,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontFamily: F.body,
                    fontWeight: 300,
                    fontSize: '0.83rem',
                    lineHeight: 1.65,
                    color: C.textSub,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── Why Fenixa ─────────────────────────────────────────────────────────────────
function WhyFenixaSection() {
  return (
    <section
      style={{
        background: C.bg,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <Eyebrow label="why fenixa" />
          <SectionHeading>We build for production, not demos.</SectionHeading>
          <p
            style={{
              fontFamily: F.body,
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: C.textSub,
              maxWidth: 540,
              marginTop: 16,
            }}
          >
            A lot of agencies demo well. Fewer deliver software that behaves correctly under load, survives a security audit, and can be maintained by a team that didn't write it.
          </p>
        </motion.div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: 16,
            marginTop: '3.5rem',
          }}
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="fx-principle-card"
              style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: 6,
                padding: '24px 24px 22px',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 5,
                  background: 'rgba(59,130,246,0.08)',
                  border: '1px solid rgba(59,130,246,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <p.Icon size={17} color={C.accent} strokeWidth={1.6} />
              </div>
              <h3
                style={{
                  fontFamily: F.display,
                  fontWeight: 700,
                  fontSize: '0.97rem',
                  color: C.text,
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: F.body,
                  fontWeight: 300,
                  fontSize: '0.84rem',
                  lineHeight: 1.68,
                  color: C.textSub,
                }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── CTA ────────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #08122a 0%, #0c1c3c 45%, #050814 100%)',
        borderTop: `1px solid rgba(59,130,246,0.2)`,
        padding: 'clamp(5rem, 10vw, 8rem) 24px',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VP}>
          <div className="fx-eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>
            <span style={{ color: C.accent, opacity: 0.7 }}>// </span>
            get in touch
          </div>
          <h2
            style={{
              fontFamily: F.display,
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: C.text,
              marginBottom: 20,
              textWrap: 'balance',
            }}
          >
            Let's build something great.
          </h2>
          <p
            style={{
              fontFamily: F.body,
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.7,
              color: C.textSub,
              maxWidth: 480,
              margin: '0 auto 2.75rem',
            }}
          >
            Tell us what you're building. We'll respond within one business day with an honest assessment and a path forward.
          </p>

          <div
            style={{
              display: 'flex',
              gap: 14,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}
          >
            <a
              href="mailto:dropwinggroups@gmail.com"
              style={{
                fontFamily: F.body,
                fontWeight: 600,
                fontSize: '0.92rem',
                padding: '13px 26px',
                background: C.accent,
                color: '#fff',
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = C.accentDeep; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = C.accent; }}
            >
              <Mail size={15} />
              dropwinggroups@gmail.com
            </a>
            <a
              href="https://wa.me/919363900110"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: F.body,
                fontWeight: 500,
                fontSize: '0.92rem',
                padding: '12px 26px',
                background: 'transparent',
                color: C.text,
                border: `1px solid ${C.border}`,
                borderRadius: 4,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.borderBlue;
                el.style.color = C.accent;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = C.border;
                el.style.color = C.text;
              }}
            >
              <Phone size={15} />
              +91 93639 00110
            </a>
          </div>

          {/* Contact meta */}
          <div
            style={{
              display: 'flex',
              gap: 28,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {[
              { Icon: Mail,    label: 'dropwinggroups@gmail.com' },
              { Icon: Phone,   label: '+91 93639 00110' },
              { Icon: MapPin,  label: 'Chennai, India' },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  fontFamily: F.body,
                  fontSize: '0.82rem',
                  color: C.textSub,
                }}
              >
                <Icon size={13} color={C.accent} />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: '#03060f',
        borderTop: `1px solid ${C.border}`,
        padding: '3.5rem 24px 2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
            <span style={{ fontFamily: F.display, fontWeight: 800, fontSize: '1.1rem', color: C.accent, letterSpacing: '-0.01em' }}>
              FENIXA
            </span>
            <span style={{ fontFamily: F.mono, fontSize: '0.55rem', letterSpacing: '0.18em', color: 'rgba(59,130,246,0.6)' }}>
              SOLUTIONS
            </span>
          </div>
          <p style={{ fontFamily: F.body, fontWeight: 300, fontSize: '0.82rem', lineHeight: 1.65, color: C.textSub, maxWidth: 200, marginBottom: 16 }}>
            Software built for the real world.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { Icon: Github,   href: 'https://github.com',   label: 'GitHub' },
              { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 4,
                  background: C.bgCard,
                  border: `1px solid ${C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: C.textSub,
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = C.borderBlue;
                  el.style.color = C.accent;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = C.border;
                  el.style.color = C.textSub;
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, opacity: 0.7, marginBottom: 16 }}>
            Services
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Web Development', 'Mobile App Development', 'Product Development', 'DevOps & Cloud', 'Cybersecurity', 'API & Integrations'].map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  style={{
                    fontFamily: F.body,
                    fontSize: '0.83rem',
                    color: C.textSub,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.text; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.textSub; }}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, opacity: 0.7, marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { Icon: Mail,    text: 'dropwinggroups@gmail.com',     href: 'mailto:dropwinggroups@gmail.com' },
              { Icon: Phone,   text: '+91 93639 00110',      href: 'https://wa.me/919363900110' },
              { Icon: MapPin,  text: 'Chennai, Tamil Nadu, India', href: undefined },
            ].map(({ Icon, text, href }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <Icon size={13} color={C.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                {href ? (
                  <a
                    href={href}
                    style={{ fontFamily: F.body, fontSize: '0.83rem', color: C.textSub, textDecoration: 'none', lineHeight: 1.5 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = C.text; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = C.textSub; }}
                  >
                    {text}
                  </a>
                ) : (
                  <span style={{ fontFamily: F.body, fontSize: '0.83rem', color: C.textSub, lineHeight: 1.5 }}>{text}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: '1.75rem',
          borderTop: `1px solid ${C.border}`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontFamily: F.body, fontSize: '0.78rem', color: C.textSub }}>
          © {new Date().getFullYear()} Fenixa Solutions. All rights reserved.
        </p>
        <p style={{ fontFamily: F.body, fontSize: '0.78rem', color: C.textSub }}>
          Part of{' '}
          <a
            href="https://dropwinggroups.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: C.accent, textDecoration: 'none', opacity: 0.85 }}
          >
            Dropwing Groups
          </a>{' '}
          — dropwinggroups.com
        </p>
      </div>
    </footer>
  );
}

// ── Root component ─────────────────────────────────────────────────────────────
export default function FenixaSite() {
  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div
        style={{
          background: C.bg,
          color: C.text,
          fontFamily: F.body,
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Navbar />
        <Hero />
        <ServicesSection />
        <TechStackSection />
        <IndustriesSection />
        <ProcessSection />
        <WhyFenixaSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
