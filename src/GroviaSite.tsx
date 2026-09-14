import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ArrowDown,
  Share2, Target, Megaphone, Search, Video, Mail,
  TrendingUp, DollarSign, Eye, Clock, Trophy, Star,
  Globe, Phone, Users, BarChart3, LineChart,
  Lightbulb, Pencil, Play, Activity,
  Check,
  Instagram, Facebook, Linkedin,
  MapPin, ShoppingCart, Zap, Building2,
  MessageCircle,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
type Icon = React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>;

interface Service {
  id: string;
  icon: Icon;
  title: string;
  desc: string;
  tags: string[];
  includes: string[];
}

interface PainPoint {
  icon: Icon;
  text: string;
  sub: string;
}

interface ResultItem {
  metric: string;
  icon: Icon;
  desc: string;
}

interface WhoItem {
  type: string;
  examples: string;
  icon: Icon;
  desc: string;
}

interface ProcessStep {
  step: string;
  icon: Icon;
  desc: string;
}

// ─── Static CSS / keyframes ───────────────────────────────────────────────────
const GROVIA_CSS = `
  .grovia-root {
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    background-color: #0a0702;
    color: #faf9f7;
    line-height: 1.6;
  }
  .grovia-display {
    font-family: 'Syne', system-ui, sans-serif;
  }
  .grovia-root * {
    box-sizing: border-box;
  }

  /* ── Hero ambient orbs ─── */
  @keyframes groviaOrb1 {
    0%,100% { transform: translate(0,0) scale(1); opacity: 0.09; }
    50%      { transform: translate(55px,-35px) scale(1.25); opacity: 0.15; }
  }
  @keyframes groviaOrb2 {
    0%,100% { transform: translate(0,0) scale(1); opacity: 0.06; }
    33%     { transform: translate(-45px,28px) scale(0.82); opacity: 0.11; }
    66%     { transform: translate(28px,-18px) scale(1.12); opacity: 0.08; }
  }
  @keyframes groviaOrb3 {
    0%,100% { transform: translate(0,0) scale(1); opacity: 0.07; }
    50%     { transform: translate(-35px,-45px) scale(1.35); opacity: 0.12; }
  }
  @keyframes groviaOrb4 {
    0%,100% { transform: translate(0,0) scale(1); opacity: 0.05; }
    50%     { transform: translate(22px,38px) scale(0.88); opacity: 0.1; }
  }

  .grovia-orb-1 { animation: groviaOrb1 11s ease-in-out infinite; }
  .grovia-orb-2 { animation: groviaOrb2 15s ease-in-out infinite; }
  .grovia-orb-3 { animation: groviaOrb3 12s ease-in-out infinite; }
  .grovia-orb-4 { animation: groviaOrb4 17s ease-in-out infinite; }

  @keyframes scrollBounce {
    0%,100% { transform: translateY(0); opacity: 0.45; }
    50%     { transform: translateY(7px); opacity: 1; }
  }
  .scroll-bounce { animation: scrollBounce 2.2s ease-in-out infinite; }

  /* ── Nav links ─── */
  .grovia-nav-link {
    color: rgba(250,249,247,0.6);
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    transition: color 0.2s;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
  }
  .grovia-nav-link:hover { color: #f97316; }

  /* ── Service card hover ─── */
  .service-card {
    transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
  }
  .service-card:hover {
    border-color: rgba(249,115,22,0.3) !important;
    background-color: rgba(249,115,22,0.04) !important;
    box-shadow: 0 0 28px rgba(249,115,22,0.07);
  }
  .service-card:hover .service-icon-wrap {
    background-color: rgba(249,115,22,0.12) !important;
  }
  .service-card:hover .service-icon {
    color: #f97316 !important;
  }

  /* ── Process connector line ─── */
  .process-track::after {
    content: '';
    position: absolute;
    top: 20px;
    left: calc(50% + 20px);
    right: calc(-50% + 20px);
    height: 1px;
    background: linear-gradient(90deg, rgba(249,115,22,0.4), rgba(249,115,22,0.1));
  }
  .process-track:last-child::after { display: none; }

  /* ── Orange CTA button glow ─── */
  .btn-orange {
    background-color: #f97316;
    color: #fff;
    font-weight: 600;
    border-radius: 8px;
    transition: background-color 0.2s, box-shadow 0.2s, transform 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    border: none;
    text-decoration: none;
  }
  .btn-orange:hover {
    background-color: #ea580c;
    box-shadow: 0 0 24px rgba(249,115,22,0.4);
    transform: translateY(-1px);
  }
  .btn-ghost {
    background-color: transparent;
    color: rgba(250,249,247,0.8);
    font-weight: 500;
    border-radius: 8px;
    border: 1px solid rgba(250,249,247,0.18);
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
  }
  .btn-ghost:hover {
    border-color: rgba(249,115,22,0.5);
    color: #f97316;
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    .grovia-orb-1,.grovia-orb-2,.grovia-orb-3,.grovia-orb-4,.scroll-bounce {
      animation: none;
    }
  }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const services: Service[] = [
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Management',
    desc: 'We handle everything — content calendars, post design, scheduling, and community management — so your brand stays active and your audience stays engaged.',
    tags: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter/X'],
    includes: [
      'Monthly content calendar & post design',
      'Scheduling, publishing & daily management',
      'Community management & DM responses',
      'Monthly performance analytics report',
    ],
  },
  {
    id: 'google',
    icon: Target,
    title: 'Google Ads & PPC',
    desc: 'Search, Display, Shopping, YouTube — we build and manage campaigns that put your business in front of people who are actively looking to buy.',
    tags: ['Google Ads', 'YouTube Ads', 'Display Network'],
    includes: [
      'Campaign strategy & keyword research',
      'Ad copy creation & A/B testing',
      'Smart bidding & budget optimisation',
      'Conversion tracking & monthly reporting',
    ],
  },
  {
    id: 'meta',
    icon: Megaphone,
    title: 'Meta (Facebook & Instagram) Ads',
    desc: 'Precision audience targeting, compelling creative, and conversion-focused campaigns that turn social media scrollers into paying customers.',
    tags: ['Facebook Ads', 'Instagram Ads', 'Meta Pixel'],
    includes: [
      'Audience research & targeting setup',
      'Ad creative design for every placement',
      'A/B testing & performance optimisation',
      'Retargeting & lookalike campaigns',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimisation',
    desc: 'Get found on Google by the people who are searching for exactly what you offer. We handle the technical work so you rank higher and stay there.',
    tags: ['Google Search Console', 'Ahrefs', 'SEMrush'],
    includes: [
      'Technical SEO audit & fixes',
      'Keyword research & content strategy',
      'On-page optimisation for every page',
      'Link building & domain authority growth',
    ],
  },
  {
    id: 'video',
    icon: Video,
    title: 'Video Script Writing',
    desc: "Scripts that hold attention and drive action — whether it's a YouTube video, Instagram Reel, TikTok, or a paid ad that needs to convert.",
    tags: ['YouTube', 'Instagram Reels', 'TikTok', 'Ad Scripts'],
    includes: [
      'Long-form YouTube video scripts',
      'Short-form scripts for Reels & TikTok',
      'Paid ad & promotional video scripts',
      'Explainer & product demo scripts',
    ],
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Email Marketing',
    desc: "Email is still the highest-ROI channel in digital marketing — if you're not using it well, you're leaving money on the table. We fix that.",
    tags: ['Mailchimp', 'Klaviyo', 'HubSpot', 'ConvertKit'],
    includes: [
      'Campaign strategy & email copywriting',
      'Automated welcome & nurture sequences',
      'Newsletter design & ongoing management',
      'List segmentation & deliverability care',
    ],
  },
];

const painPoints: PainPoint[] = [
  {
    icon: TrendingUp,
    text: "You're posting on social media consistently but getting no real business from it.",
    sub: 'Likes from friends do not pay the bills.',
  },
  {
    icon: DollarSign,
    text: "You're running ads but watching your budget disappear with nothing to show for it.",
    sub: 'The clicks are there. The customers are not.',
  },
  {
    icon: Eye,
    text: 'Your website gets visitors but nobody calls, books, or buys.',
    sub: 'Traffic without conversion is just noise.',
  },
  {
    icon: Clock,
    text: "You don't have time to create content consistently — other things always come first.",
    sub: 'Life gets busy. Marketing slips. Competitors do not.',
  },
  {
    icon: Trophy,
    text: "Your competitors rank higher on Google even though you're clearly better.",
    sub: 'It should not work that way — but right now, it does.',
  },
  {
    icon: Star,
    text: 'You have a genuinely great product or service but nobody outside your circle knows about it.',
    sub: 'The best-kept secret in your industry is not a compliment.',
  },
];

const platforms: Record<string, string[]> = {
  Social: ['Instagram', 'Facebook', 'LinkedIn', 'Twitter / X', 'YouTube', 'Pinterest'],
  Ads: ['Google Ads', 'Meta Ads', 'YouTube Ads'],
  SEO: ['Google Search Console', 'Ahrefs', 'SEMrush'],
  Email: ['Mailchimp', 'Klaviyo', 'HubSpot', 'ConvertKit'],
  Analytics: ['Google Analytics', 'Meta Pixel', 'Hotjar'],
};

const results: ResultItem[] = [
  {
    metric: 'More website visitors',
    icon: Globe,
    desc: 'Organic traffic from SEO and paid traffic from ads — more people landing on your site, every single month.',
  },
  {
    metric: 'More inbound calls & messages',
    icon: Phone,
    desc: 'Real people actively reaching out to you. Not you chasing them — them finding you.',
  },
  {
    metric: 'More followers & engagement',
    icon: Users,
    desc: 'A growing community that actually interacts with your brand, not inflated follower counts that do nothing.',
  },
  {
    metric: 'Lower cost per lead',
    icon: BarChart3,
    desc: 'Getting more enquiries for less spend — better targeting, better creative, and smarter optimisation.',
  },
  {
    metric: 'Higher search rankings',
    icon: LineChart,
    desc: 'Showing up on page 1 when your customers are searching for what you offer.',
  },
];

const whoWeHelp: WhoItem[] = [
  {
    type: 'Local Businesses',
    examples: 'Restaurants, salons, clinics, retail shops, gyms',
    icon: MapPin,
    desc: 'Get more foot traffic, phone calls, and bookings from people in your area who are actively looking for you.',
  },
  {
    type: 'E-commerce & Online Brands',
    examples: 'D2C brands, Shopify stores, product businesses',
    icon: ShoppingCart,
    desc: 'Increase online sales with targeted ads, SEO, and email sequences specifically built for conversion.',
  },
  {
    type: 'Startups & SaaS Companies',
    examples: 'Early-stage products, B2B tools, apps',
    icon: Zap,
    desc: 'Build brand awareness fast, generate qualified leads, and grow your user base from the very beginning.',
  },
  {
    type: 'Established Businesses',
    examples: 'Companies ready to scale and systematise',
    icon: Building2,
    desc: 'Take marketing completely off your plate and grow revenue without needing to grow your internal team.',
  },
];

const processSteps: ProcessStep[] = [
  {
    step: 'Strategy',
    icon: Lightbulb,
    desc: 'We audit your current presence, research competitors, and build a tailored marketing plan with clear, measurable targets.',
  },
  {
    step: 'Create',
    icon: Pencil,
    desc: 'We create content, ads, and campaigns built specifically for your audience and goals — never generic templates.',
  },
  {
    step: 'Publish & Run',
    icon: Play,
    desc: 'We launch everything, manage daily operations, and adapt in real time as the market responds.',
  },
  {
    step: 'Measure & Optimise',
    icon: Activity,
    desc: "Every month we review performance, double down on what's working, cut what isn't, and set the plan for next month.",
  },
];

const reportItems = [
  'Total reach and impressions across all platforms',
  'Ad spend versus revenue or leads generated',
  'Keyword rankings and organic traffic growth',
  'Top-performing content — and why it worked',
  'What we are changing next month, and why',
];

const transparencyPromises = [
  'We tell you when a campaign is underperforming — before you ask',
  'No vanity metrics. Only numbers that connect to real business outcomes',
  'Monthly strategy call to walk through the numbers together',
  'Direct access to your team via WhatsApp or Slack throughout the month',
  'Clear breakdown of every rupee spent on your ad campaigns',
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#f97316',
        marginBottom: '1rem',
        padding: '4px 12px',
        border: '1px solid rgba(249,115,22,0.3)',
        borderRadius: '100px',
        backgroundColor: 'rgba(249,115,22,0.06)',
      }}
    >
      {children}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function GroviaSite() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  };

  return (
    <div className="grovia-root">
      <style>{GROVIA_CSS}</style>

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backgroundColor: scrolled ? 'rgba(10,7,2,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.06)'
            : '1px solid transparent',
          transition: 'background-color 0.35s, backdrop-filter 0.35s, border-color 0.35s',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
          >
            <div
              className="grovia-display"
              style={{ fontSize: '1.35rem', fontWeight: 800, color: '#f97316', lineHeight: 1.1 }}
            >
              GROVIA
            </div>
            <div
              style={{ fontSize: '0.65rem', color: 'rgba(250,249,247,0.4)', letterSpacing: '0.05em' }}
            >
              by Dropwing Groups
            </div>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                className="grovia-nav-link"
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-orange"
              style={{ padding: '9px 20px', fontSize: '0.875rem' }}
              onClick={() => scrollTo('#contact')}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#faf9f7',
              padding: '4px',
            }}
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              backgroundColor: '#0a0702',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="grovia-display"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'rgba(250,249,247,0.8)',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = '#f97316';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = 'rgba(250,249,247,0.8)';
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="btn-orange"
              style={{ padding: '14px 32px', fontSize: '1rem', marginTop: '8px' }}
              onClick={() => scrollTo('#contact')}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0702',
          overflow: 'hidden',
          paddingTop: '80px',
          padding: '80px 24px 80px',
        }}
      >
        {/* Ambient orbs */}
        <div
          className="grovia-orb-1"
          style={{
            position: 'absolute',
            width: '700px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(249,115,22,0.11) 0%, transparent 70%)',
            top: '22%',
            left: '-5%',
            pointerEvents: 'none',
          }}
        />
        <div
          className="grovia-orb-2"
          style={{
            position: 'absolute',
            width: '580px',
            height: '220px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(234,88,12,0.08) 0%, transparent 70%)',
            top: '55%',
            right: '-8%',
            pointerEvents: 'none',
          }}
        />
        <div
          className="grovia-orb-3"
          style={{
            position: 'absolute',
            width: '480px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(251,146,60,0.07) 0%, transparent 70%)',
            bottom: '15%',
            left: '15%',
            pointerEvents: 'none',
          }}
        />
        <div
          className="grovia-orb-4"
          style={{
            position: 'absolute',
            width: '360px',
            height: '180px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
            top: '35%',
            right: '25%',
            pointerEvents: 'none',
          }}
        />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerSlow}
          style={{ maxWidth: '860px', textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Grovia · Digital Marketing</SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="grovia-display"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#faf9f7',
              marginBottom: '1.5rem',
              textWrap: 'balance',
            }}
          >
            Marketing that makes{' '}
            <br className="hidden sm:block" />
            your phone{' '}
            <span style={{ color: '#f97316' }}>ring.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(250,249,247,0.62)',
              lineHeight: 1.7,
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
            }}
          >
            We handle your complete digital marketing — social media, Google Ads, SEO, video scripts,
            and email — so you can focus on running your business while we bring in the customers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <button
              className="btn-orange"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              onClick={() => scrollTo('#contact')}
            >
              Grow My Business
            </button>
            <button
              className="btn-ghost"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              onClick={() => scrollTo('#services')}
            >
              See Our Services
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div
          className="scroll-bounce"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <ArrowDown size={20} style={{ color: 'rgba(249,115,22,0.6)' }} />
        </div>
      </section>

      {/* ── Pain Points ────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0d0b08',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>Does this sound like you?</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                textWrap: 'balance',
              }}
            >
              Sound familiar?
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '28px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(249,115,22,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <point.icon size={17} style={{ color: 'rgba(249,115,22,0.7)' }} strokeWidth={1.75} />
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'rgba(250,249,247,0.9)',
                    lineHeight: 1.55,
                    marginBottom: '10px',
                  }}
                >
                  {point.text}
                </p>
                <p style={{ fontSize: '0.825rem', color: 'rgba(250,249,247,0.38)', fontStyle: 'italic' }}>
                  {point.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{
              textAlign: 'center',
              marginTop: '48px',
              fontSize: '1.05rem',
              color: 'rgba(250,249,247,0.5)',
            }}
          >
            That's exactly why{' '}
            <span style={{ color: '#f97316', fontWeight: 600 }}>Grovia</span> exists.
          </motion.p>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────────────────── */}
      <section
        id="services"
        style={{
          backgroundColor: '#0a0702',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>What We Do</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                maxWidth: '640px',
                margin: '0 auto',
                textWrap: 'balance',
              }}
            >
              Everything your business needs to reach more customers.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px',
            }}
          >
            {services.map((svc) => (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                className="service-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '32px',
                }}
              >
                <div
                  className="service-icon-wrap"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'background-color 0.25s',
                  }}
                >
                  <svc.icon
                    className="service-icon"
                    size={20}
                    style={{ color: 'rgba(250,249,247,0.55)', transition: 'color 0.25s' }}
                    strokeWidth={1.75}
                  />
                </div>

                <h3
                  className="grovia-display"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#faf9f7',
                    marginBottom: '12px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {svc.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'rgba(250,249,247,0.55)', lineHeight: 1.65, marginBottom: '20px' }}>
                  {svc.desc}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {svc.includes.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem', color: 'rgba(250,249,247,0.65)' }}>
                      <Check size={13} style={{ color: '#f97316', marginTop: '3px', flexShrink: 0 }} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        color: 'rgba(250,249,247,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '100px',
                        padding: '3px 10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Platforms ──────────────────────────────────────────────────────── */}
      <section
        id="platforms"
        style={{
          backgroundColor: '#0d0b08',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>Platforms & Tools</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                maxWidth: '580px',
                margin: '0 auto',
                textWrap: 'balance',
              }}
            >
              We manage your presence everywhere your customers are.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {Object.entries(platforms).map(([category, items]) => (
              <motion.div key={category} variants={fadeUp}>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(249,115,22,0.7)',
                    marginBottom: '14px',
                  }}
                >
                  {category}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map((platform) => (
                    <span
                      key={platform}
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'rgba(250,249,247,0.75)',
                        backgroundColor: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '100px',
                        padding: '8px 18px',
                        transition: 'border-color 0.2s, color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = 'rgba(249,115,22,0.4)';
                        el.style.color = '#f97316';
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = 'rgba(255,255,255,0.1)';
                        el.style.color = 'rgba(250,249,247,0.75)';
                      }}
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Results ────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0a0702',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>What You Get</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                maxWidth: '500px',
                margin: '0 auto',
                textWrap: 'balance',
              }}
            >
              What "results" actually means.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '16px',
            }}
          >
            {results.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '28px 24px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(249,115,22,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                  }}
                >
                  <r.icon size={22} style={{ color: '#f97316' }} strokeWidth={1.75} />
                </div>
                <h3
                  className="grovia-display"
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#faf9f7',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {r.metric}
                </h3>
                <p style={{ fontSize: '0.84rem', color: 'rgba(250,249,247,0.5)', lineHeight: 1.6 }}>
                  {r.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Who We Help ────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0d0b08',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>Who We Work With</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                maxWidth: '580px',
                margin: '0 auto',
                textWrap: 'balance',
              }}
            >
              We've driven results for businesses of every kind.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {whoWeHelp.map((who, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '32px',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(249,115,22,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  <who.icon size={20} style={{ color: '#f97316' }} strokeWidth={1.75} />
                </div>
                <h3
                  className="grovia-display"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#faf9f7',
                    marginBottom: '6px',
                  }}
                >
                  {who.type}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(249,115,22,0.65)', marginBottom: '14px' }}>
                  {who.examples}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'rgba(250,249,247,0.55)', lineHeight: 1.65 }}>
                  {who.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <section
        id="process"
        style={{
          backgroundColor: '#0a0702',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                textWrap: 'balance',
              }}
            >
              How we go from zero to results.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {processSteps.map((ps, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="process-track"
                style={{ position: 'relative', textAlign: 'center', padding: '32px 24px' }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'rgba(249,115,22,0.5)',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  Step {i + 1}
                </div>

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <ps.icon size={22} style={{ color: '#f97316' }} strokeWidth={1.75} />
                </div>

                <h3
                  className="grovia-display"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#faf9f7',
                    marginBottom: '12px',
                  }}
                >
                  {ps.step}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'rgba(250,249,247,0.52)', lineHeight: 1.65 }}>
                  {ps.desc}
                </p>

                {/* Connector line (desktop) */}
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden md:block"
                    style={{
                      position: 'absolute',
                      top: '80px',
                      right: '-12px',
                      width: '24px',
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(249,115,22,0.35), transparent)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Reporting & Transparency ───────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0d0b08',
          paddingBlock: 'clamp(64px, 8vw, 128px)',
          paddingInline: '24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>Transparency</SectionLabel>
            <h2
              className="grovia-display"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: '#faf9f7',
                lineHeight: 1.1,
                maxWidth: '600px',
                margin: '0 auto',
                textWrap: 'balance',
              }}
            >
              You always know exactly what we're doing and why.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
            }}
          >
            {/* Reports column */}
            <motion.div variants={fadeUp}>
              <h3
                className="grovia-display"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#faf9f7',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}
              >
                Monthly reports in plain English.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(250,249,247,0.55)', lineHeight: 1.7, marginBottom: '24px' }}>
                Every month you receive a clear report with plain-language explanations of what worked,
                what didn't, and exactly what we're changing — no jargon, no hiding behind numbers.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {reportItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: 'rgba(250,249,247,0.65)' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      <Check size={11} style={{ color: '#f97316' }} strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Transparency column */}
            <motion.div variants={fadeUp}>
              <h3
                className="grovia-display"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#faf9f7',
                  marginBottom: '14px',
                  lineHeight: 1.3,
                }}
              >
                No jargon. No hiding.
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(250,249,247,0.55)', lineHeight: 1.7, marginBottom: '24px' }}>
                We never hide behind marketing jargon. If a campaign is not performing, we say so — and
                we fix it. You will always know the real picture.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {transparencyPromises.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: 'rgba(250,249,247,0.65)' }}>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(249,115,22,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      <Check size={11} style={{ color: '#f97316' }} strokeWidth={2.5} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: 'linear-gradient(135deg, #92400e 0%, #c2410c 30%, #ea580c 60%, #f97316 85%, #fb923c 100%)',
          paddingBlock: 'clamp(72px, 10vw, 140px)',
          paddingInline: '24px',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerSlow}
          style={{ maxWidth: '680px', margin: '0 auto' }}
        >
          <motion.h2
            variants={fadeUp}
            className="grovia-display"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '20px',
              textWrap: 'balance',
            }}
          >
            Ready to get more customers?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.82)',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            Let's start with a free strategy call. We'll show you exactly what's possible for your
            business — no pressure, no generic pitch.
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="mailto:dropwinggroups@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#fff',
                color: '#c2410c',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'background-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <Mail size={17} strokeWidth={2} />
              Email Us
            </a>
            <a
              href="https://wa.me/919363900110"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '14px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                transition: 'background-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.22)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.15)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              <MessageCircle size={17} strokeWidth={2} />
              WhatsApp +91 93639 00110
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{ marginTop: '28px', fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}
          >
            Or reach us at{' '}
            <a
              href="mailto:dropwinggroups@gmail.com"
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline' }}
            >
              dropwinggroups@gmail.com
            </a>
          </motion.p>
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: '#060400',
          paddingBlock: 'clamp(48px, 6vw, 80px)',
          paddingInline: '24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              className="grovia-display"
              style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f97316', marginBottom: '6px' }}
            >
              GROVIA
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(250,249,247,0.35)', marginBottom: '14px' }}>
              by Dropwing Groups
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(250,249,247,0.45)', lineHeight: 1.65, maxWidth: '240px' }}>
              Marketing that brings real results. Social, ads, SEO, video, email — all in one place.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(249,115,22,0.4)';
                    el.style.backgroundColor = 'rgba(249,115,22,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.backgroundColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon size={15} style={{ color: 'rgba(250,249,247,0.55)' }} strokeWidth={1.75} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(249,115,22,0.7)',
                marginBottom: '16px',
              }}
            >
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => scrollTo('#services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '0.875rem',
                      color: 'rgba(250,249,247,0.45)',
                      textAlign: 'left',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = '#f97316';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = 'rgba(250,249,247,0.45)';
                    }}
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(249,115,22,0.7)',
                marginBottom: '16px',
              }}
            >
              Contact
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={15} style={{ color: 'rgba(249,115,22,0.6)', marginTop: '2px', flexShrink: 0 }} strokeWidth={1.75} />
                <span style={{ fontSize: '0.875rem', color: 'rgba(250,249,247,0.5)', lineHeight: 1.5 }}>
                  Chennai, India
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={15} style={{ color: 'rgba(249,115,22,0.6)', flexShrink: 0 }} strokeWidth={1.75} />
                <a
                  href="mailto:dropwinggroups@gmail.com"
                  style={{ fontSize: '0.875rem', color: 'rgba(250,249,247,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f97316'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,249,247,0.5)'; }}
                >
                  dropwinggroups@gmail.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={15} style={{ color: 'rgba(249,115,22,0.6)', flexShrink: 0 }} strokeWidth={1.75} />
                <a
                  href="tel:+919363900110"
                  style={{ fontSize: '0.875rem', color: 'rgba(250,249,247,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f97316'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,249,247,0.5)'; }}
                >
                  +91 93639 00110
                </a>
              </li>
            </ul>

            <div
              style={{
                marginTop: '24px',
                padding: '14px 16px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '10px',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'rgba(250,249,247,0.35)', marginBottom: '4px' }}>
                Part of
              </div>
              <a
                href="https://dropwinggroups.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'rgba(250,249,247,0.65)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#f97316'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(250,249,247,0.65)'; }}
              >
                Dropwing Groups
                <Globe size={13} strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'rgba(250,249,247,0.28)' }}>
            © {new Date().getFullYear()} Grovia · A Dropwing Groups Company. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(250,249,247,0.28)' }}>
            Marketing that brings real results.
          </p>
        </div>
      </footer>
    </div>
  );
}
