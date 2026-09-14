import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Brain, Bot, Layers, BarChart3, Lightbulb,
  Menu, X, ArrowRight, CheckCircle2
} from 'lucide-react';

// ─── Styles injected into <head> ──────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }

@keyframes flowData {
  from { transform: translateX(-40vw); }
  to   { transform: translateX(160vw); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}

.nav-link {
  color: #7aad98; font-size: 14px; font-weight: 500;
  text-decoration: none; transition: color 0.2s;
}
.nav-link:hover { color: #10b981; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: #10b981; color: #050a08;
  border-radius: 6px; font-weight: 700; text-decoration: none;
  font-family: 'Syne', sans-serif; font-size: 15px; letter-spacing: 0.04em;
  border: none; cursor: pointer; transition: background 0.2s, transform 0.15s;
}
.btn-primary:hover { background: #059669; transform: translateY(-1px); }

.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: transparent; color: #d4ede5;
  border: 1px solid rgba(212,237,229,0.2); border-radius: 6px;
  font-weight: 500; text-decoration: none; font-size: 15px;
  transition: border-color 0.2s, color 0.2s;
}
.btn-secondary:hover { border-color: rgba(16,185,129,0.5); color: #10b981; }

.svc-card {
  background: rgba(16,185,129,0.03);
  border: 1px solid rgba(16,185,129,0.1);
  border-radius: 10px; padding: 28px;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.svc-card:hover {
  border-color: rgba(16,185,129,0.35);
  box-shadow: 0 0 32px rgba(16,185,129,0.07);
}

.scenario-card {
  border-top: 1px solid rgba(16,185,129,0.15);
  padding: 24px 0;
  transition: border-color 0.2s;
}
.scenario-card:hover { border-top-color: rgba(16,185,129,0.5); }

.tool-pill {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(16,185,129,0.06);
  border: 1px solid rgba(16,185,129,0.15);
  border-radius: 100px;
  font-size: 13px; font-weight: 500; color: #7aad98;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  cursor: default;
}
.tool-pill:hover {
  background: rgba(16,185,129,0.14);
  border-color: rgba(16,185,129,0.4);
  color: #d4ede5;
}

.stat-card {
  background: rgba(16,185,129,0.04);
  border: 1px solid rgba(16,185,129,0.1);
  border-radius: 10px; padding: 32px 28px;
}

.step-card {
  flex: 1;
  position: relative;
  padding: 28px 24px;
  background: rgba(16,185,129,0.03);
  border: 1px solid rgba(16,185,129,0.1);
  border-radius: 10px;
}

.check-item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: border-color 0.2s;
}
.check-item:last-child { border-bottom: none; }
.check-item:hover { border-bottom-color: rgba(16,185,129,0.2); }

.footer-link {
  color: #7aad98; text-decoration: none; font-size: 14px;
  transition: color 0.2s; display: block; margin-bottom: 10px;
}
.footer-link:hover { color: #10b981; }

@media (prefers-reduced-motion: reduce) {
  .data-line { animation: none !important; }
  .scroll-bounce { animation: none !important; }
  .btn-primary:hover { transform: none; }
}

@media (max-width: 768px) {
  .md-grid-3 { grid-template-columns: 1fr !important; }
  .md-grid-2 { grid-template-columns: 1fr !important; }
  .md-grid-4 { grid-template-columns: 1fr 1fr !important; }
  .md-flex-col { flex-direction: column !important; }
  .md-hide { display: none !important; }
  .md-show { display: block !important; }
}
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: <Zap size={20} />,
    title: 'Workflow Automation',
    desc: 'Connect your apps, automate triggers, and remove every manual step in between. We build with n8n, Make, and Zapier.',
    tags: ['n8n', 'Make', 'Zapier', 'Webhooks'],
  },
  {
    icon: <Brain size={20} />,
    title: 'AI & Machine Learning',
    desc: 'Custom models for classification, prediction, and document processing — trained on your actual business data.',
    tags: ['OpenAI', 'Fine-tuning', 'OCR', 'Prediction'],
  },
  {
    icon: <Bot size={20} />,
    title: 'Chatbots & AI Assistants',
    desc: '24/7 AI that handles inquiries, qualifies leads, and answers questions on WhatsApp, your website, Telegram, or Slack.',
    tags: ['WhatsApp API', 'RAG', 'Lead Capture', 'Telegram'],
  },
  {
    icon: <Layers size={20} />,
    title: 'Business Process Automation',
    desc: 'CRM automation, invoice generation, email sequences, reporting — anything repetitive, we systematize.',
    tags: ['HubSpot', 'Notion', 'Salesforce', 'Email'],
  },
  {
    icon: <BarChart3 size={20} />,
    title: 'Data Intelligence & Analytics',
    desc: 'Automated dashboards, data pipelines, and business reports delivered on schedule — no analyst required.',
    tags: ['BigQuery', 'Google Sheets', 'Airtable', 'Looker'],
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'AI Strategy & Consulting',
    desc: 'We audit your current operations, quantify automation ROI, and produce a concrete implementation roadmap.',
    tags: ['Audit', 'ROI Analysis', 'Roadmap'],
  },
];

const scenarios = [
  { title: 'Lead capture & CRM updates', desc: 'Form submitted → CRM updated, welcome email sent, team notified. Zero manual entry.' },
  { title: 'Invoice & payment workflows', desc: 'Auto-generate invoices on schedule, send reminders at the right time, sync with accounting.' },
  { title: 'Social media posting', desc: 'Schedule and publish content across all your platforms from one place, automatically.' },
  { title: 'Customer support responses', desc: 'AI handles common questions 24/7 so your team only touches the complex ones.' },
  { title: 'Weekly & monthly reports', desc: 'Auto-compiled performance reports land in inboxes on time — no manual spreadsheet work.' },
  { title: 'Appointment booking & reminders', desc: 'Let clients self-book. Automated SMS/email reminders significantly reduce no-shows.' },
  { title: 'E-commerce order processing', desc: 'Inventory updated, fulfillment triggered, tracking info sent — all without touching it.' },
  { title: 'Email marketing sequences', desc: 'Behavioral triggers send the right message at the right time, to the right segment.' },
];

const toolGroups = [
  { label: 'Automation', tools: ['n8n', 'Make', 'Zapier', 'Pabbly'] },
  { label: 'AI / LLM', tools: ['OpenAI', 'Anthropic', 'Google Gemini', 'Llama'] },
  { label: 'Communication', tools: ['WhatsApp API', 'Twilio', 'SendGrid', 'Mailchimp'] },
  { label: 'Data', tools: ['Google Sheets', 'Airtable', 'PostgreSQL', 'BigQuery'] },
  { label: 'Apps & CRMs', tools: ['Notion', 'Slack', 'HubSpot', 'Salesforce', 'Shopify'] },
];

const stats = [
  { value: '20–30%', label: 'of a typical workday lost to tasks that could be automated' },
  { value: '5+ hrs', label: 'saved per team member per week with basic workflow automation' },
  { value: '24/7', label: 'AI assistants operate continuously — no overtime, no weekends' },
  { value: '1,000+', label: 'apps and platforms our automations can connect and orchestrate' },
];

const processSteps = [
  { n: '01', title: 'Audit', desc: 'We map your current workflows, identify every manual touchpoint, and size the automation opportunity.' },
  { n: '02', title: 'Design', desc: 'We architect the solution — tools, flows, triggers, data logic. You see the blueprint before we build anything.' },
  { n: '03', title: 'Build', desc: 'We build, test, and deploy. You get working automations and integrations, not a deck of slides.' },
  { n: '04', title: 'Monitor & Optimize', desc: 'We watch the system, catch failures early, and improve based on real usage and performance data.' },
];

const checklistItems = [
  'You copy-paste data between apps every day',
  'You send the same emails over and over',
  'Your team does things manually that a system could handle',
  "You're not sure where your leads go or what happens to them",
  'You spend hours each week on reporting',
  "Your tools don't talk to each other",
];

// ─── Data flow lines config ───────────────────────────────────────────────────
const dataLines = [
  { top: '9%',  width: '32%', dur: '7s',  delay: '0s',    opacity: 0.28 },
  { top: '22%', width: '55%', dur: '14s', delay: '-5s',   opacity: 0.14 },
  { top: '36%', width: '24%', dur: '9s',  delay: '-2.5s', opacity: 0.32 },
  { top: '50%', width: '63%', dur: '17s', delay: '-8s',   opacity: 0.11 },
  { top: '62%', width: '40%', dur: '11s', delay: '-1s',   opacity: 0.24 },
  { top: '74%', width: '28%', dur: '8s',  delay: '-4s',   opacity: 0.30 },
  { top: '86%', width: '50%', dur: '13s', delay: '-3s',   opacity: 0.16 },
  { top: '5%',  width: '18%', dur: '6s',  delay: '-7s',   opacity: 0.22 },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

// ─── Helpers ──────────────────────────────────────────────────────────────────
const W = ({ children }: { children: React.ReactNode }) => (
  <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
    {children}
  </div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    fontFamily: "'Syne', sans-serif",
    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
    textTransform: 'uppercase', color: '#10b981',
    marginBottom: 16,
  }}>
    {children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800, fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
    lineHeight: 1.1, color: '#d4ede5',
    margin: 0, textWrap: 'balance',
  }}>
    {children}
  </h2>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(5,10,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'rgba(16,185,129,0.12)' : 'transparent'}`,
      transition: 'all 0.3s ease',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <div>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 19, letterSpacing: '0.07em', color: '#10b981' }}>
            PERSYNIX
          </div>
          <div style={{ fontSize: 10, color: '#5a8c78', letterSpacing: '0.08em', marginTop: 1 }}>
            by Dropwing Groups
          </div>
        </div>

        {/* Desktop nav */}
        <div className="md-hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['automation', 'ai', 'tools', 'contact'].map(id => (
            <a key={id} href={`#${id}`} className="nav-link" style={{ textTransform: 'capitalize' }}>
              {id === 'ai' ? 'AI' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="mailto:dropwinggroups@gmail.com" className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
            Get Started
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ display: 'none', background: 'none', border: 'none', color: '#10b981', cursor: 'pointer', padding: 4 }}
          className="mobile-burger"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(5,10,8,0.98)', borderTop: '1px solid rgba(16,185,129,0.1)', padding: '20px 24px 28px' }}>
          {['automation', 'ai', 'tools', 'contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              style={{ display: 'block', color: '#7aad98', fontSize: 16, padding: '13px 0', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {id === 'ai' ? 'AI' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a href="mailto:dropwinggroups@gmail.com"
            style={{ display: 'inline-block', marginTop: 20, padding: '11px 26px', background: '#10b981', color: '#050a08', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontFamily: "'Syne', sans-serif" }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: '#050a08', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
      {/* Data flow lines */}
      {dataLines.map((l, i) => (
        <div key={i} className="data-line" style={{
          position: 'absolute', top: l.top, left: 0,
          width: l.width, height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.65) 45%, rgba(16,185,129,0.85) 55%, transparent 100%)',
          opacity: l.opacity,
          animation: `flowData ${l.dur} ${l.delay} linear infinite`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(16,185,129,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Radial gradient — brighter bottom-left focus behind text */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 55% at 20% 60%, rgba(16,185,129,0.06) 0%, transparent 70%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', paddingTop: 120, paddingBottom: 100, position: 'relative', zIndex: 1 }}>
        {/* Eyebrow badge */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '5px 13px', borderRadius: 100,
            border: '1px solid rgba(16,185,129,0.28)',
            background: 'rgba(16,185,129,0.07)',
            color: '#10b981', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: "'Syne', sans-serif", marginBottom: 32, display: 'inline-flex',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
            Persynix · AI & Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2.6rem, 7.5vw, 6.2rem)',
            lineHeight: 1.04, color: '#d4ede5',
            maxWidth: 780, margin: '0 0 28px', textWrap: 'balance',
          }}
        >
          Let machines<br />
          <span style={{ color: '#10b981' }}>handle the work</span><br />
          you hate.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#7aad98', maxWidth: 560, lineHeight: 1.7, margin: '0 0 44px' }}
        >
          We use n8n, Make, Zapier, and custom AI to eliminate manual tasks, connect your tools, and make your entire business run smarter — without you lifting a finger.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a href="mailto:dropwinggroups@gmail.com" className="btn-primary">
            Automate My Business <ArrowRight size={16} />
          </a>
          <a href="#automation" className="btn-secondary">
            See What We Automate
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)' }}>
          <div className="scroll-bounce" style={{
            width: 26, height: 40, border: '1px solid rgba(16,185,129,0.25)', borderRadius: 13,
            display: 'flex', justifyContent: 'center', paddingTop: 7,
            animation: 'scrollBounce 2s ease-in-out infinite',
          }}>
            <div style={{ width: 2, height: 9, background: '#10b981', borderRadius: 2 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── What We Automate ─────────────────────────────────────────────────────────
function WhatWeAutomate() {
  return (
    <section id="automation" style={{ padding: '96px 24px', background: '#050a08' }}>
      <W>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp}>
            <Eyebrow>Common Automations</Eyebrow>
            <SectionTitle>If you're doing it manually,<br />we can automate it.</SectionTitle>
            <p style={{ color: '#7aad98', fontSize: 16, lineHeight: 1.65, maxWidth: 520, margin: '16px 0 56px' }}>
              Real workflows real businesses run on — and waste hours doing by hand every week.
            </p>
          </motion.div>

          <div className="md-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 56px' }}>
            {scenarios.map(s => (
              <motion.div key={s.title} variants={fadeUp} className="scenario-card">
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: '#d4ede5', marginBottom: 8 }}>
                  {s.title}
                </div>
                <div style={{ color: '#7aad98', fontSize: 14, lineHeight: 1.6 }}>
                  {s.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="ai" style={{ padding: '96px 24px', background: 'rgba(16,185,129,0.025)', borderTop: '1px solid rgba(16,185,129,0.08)', borderBottom: '1px solid rgba(16,185,129,0.08)' }}>
      <W>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 52 }}>
            <Eyebrow>Services</Eyebrow>
            <SectionTitle>Our automation and AI capabilities.</SectionTitle>
          </motion.div>

          <div className="md-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {services.map(s => (
              <motion.div key={s.title} variants={fadeUp} className="svc-card">
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#10b981', marginBottom: 18,
                }}>
                  {s.icon}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: '#d4ede5', marginBottom: 10 }}>
                  {s.title}
                </div>
                <div style={{ color: '#7aad98', fontSize: 14, lineHeight: 1.65, marginBottom: 20 }}>
                  {s.desc}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {s.tags.map(t => (
                    <span key={t} style={{
                      padding: '3px 9px', borderRadius: 100,
                      background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)',
                      fontSize: 11, color: '#5a8c78', fontWeight: 600, letterSpacing: '0.04em',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Tools We Use ─────────────────────────────────────────────────────────────
function ToolsWeUse() {
  return (
    <section id="tools" style={{ padding: '96px 24px', background: '#050a08' }}>
      <W>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 52 }}>
            <Eyebrow>Tech Stack</Eyebrow>
            <SectionTitle>Powered by the best<br />automation platforms.</SectionTitle>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {toolGroups.map(group => (
              <motion.div key={group.label} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 24, flexWrap: 'wrap' }}>
                <div style={{
                  width: 110, flexShrink: 0,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: '#3d6b56', paddingTop: 8,
                  fontFamily: "'Syne', sans-serif",
                }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 1 }}>
                  {group.tools.map(t => (
                    <span key={t} className="tool-pill">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Business Case ────────────────────────────────────────────────────────────
function BusinessCase() {
  return (
    <section style={{ padding: '96px 24px', background: 'rgba(16,185,129,0.025)', borderTop: '1px solid rgba(16,185,129,0.08)', borderBottom: '1px solid rgba(16,185,129,0.08)' }}>
      <W>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 52 }}>
            <Eyebrow>The Business Case</Eyebrow>
            <SectionTitle>The numbers speak<br />for themselves.</SectionTitle>
          </motion.div>

          <div className="md-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {stats.map(s => (
              <motion.div key={s.value} variants={fadeUp} className="stat-card">
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#10b981',
                  lineHeight: 1, marginBottom: 14,
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {s.value}
                </div>
                <div style={{ color: '#7aad98', fontSize: 14, lineHeight: 1.55 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section style={{ padding: '96px 24px', background: '#050a08' }}>
      <W>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={fadeUp} style={{ marginBottom: 52 }}>
            <Eyebrow>How We Work</Eyebrow>
            <SectionTitle>We map it, build it,<br />and keep it running.</SectionTitle>
          </motion.div>

          <div className="md-flex-col" style={{ display: 'flex', gap: 2, position: 'relative' }}>
            {/* Connecting bar — desktop only */}
            <div style={{
              position: 'absolute', top: 32, left: 0, right: 0,
              height: 1, background: 'linear-gradient(90deg, rgba(16,185,129,0.3), rgba(16,185,129,0.05))',
              zIndex: 0,
            }} />
            {processSteps.map((step, i) => (
              <motion.div key={step.n} variants={fadeUp} className="step-card" style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontWeight: 800,
                  fontSize: 11, letterSpacing: '0.14em', color: '#10b981',
                  marginBottom: 12, textTransform: 'uppercase',
                }}>
                  {step.n}
                </div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: '#d4ede5', marginBottom: 12 }}>
                  {step.title}
                </div>
                <div style={{ color: '#7aad98', fontSize: 14, lineHeight: 1.6 }}>
                  {step.desc}
                </div>
                {i < processSteps.length - 1 && (
                  <div style={{ position: 'absolute', right: -1, top: '50%', transform: 'translateY(-50%)', color: '#10b981', opacity: 0.3, fontSize: 16 }}>
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Who Should Automate ──────────────────────────────────────────────────────
function WhoShouldAutomate() {
  return (
    <section style={{ padding: '96px 24px', background: 'rgba(16,185,129,0.025)', borderTop: '1px solid rgba(16,185,129,0.08)', borderBottom: '1px solid rgba(16,185,129,0.08)' }}>
      <W>
        <div className="md-flex-col" style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            style={{ flex: '0 0 380px', maxWidth: 380 }}
          >
            <Eyebrow>Is This You?</Eyebrow>
            <SectionTitle>If your team spends time on repetitive tasks, you need this.</SectionTitle>
            <p style={{ color: '#7aad98', fontSize: 15, lineHeight: 1.65, marginTop: 20, marginBottom: 36 }}>
              Most businesses don't realise how much time they lose to work that should already be automated. The signs are everywhere.
            </p>
            <a href="mailto:dropwinggroups@gmail.com" className="btn-primary">
              Book a Free Audit <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
            style={{ flex: 1 }}
          >
            {checklistItems.map(item => (
              <motion.div key={item} variants={fadeUp} className="check-item">
                <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: '#d4ede5', fontSize: 16, lineHeight: 1.5 }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </W>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact" style={{ padding: '96px 24px', background: '#050a08', position: 'relative', overflow: 'hidden' }}>
      {/* Glow behind */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%', height: '80%',
        background: 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <W>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Get Started</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.6rem)', color: '#d4ede5',
              lineHeight: 1.08, margin: '0 0 20px', textWrap: 'balance',
            }}
          >
            Ready to automate<br />your business?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{ color: '#7aad98', fontSize: 17, lineHeight: 1.65, maxWidth: 540, margin: '0 auto 44px' }}
          >
            Book a free 30-minute automation audit — we'll show you exactly what can be automated and what it's worth to your bottom line.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:dropwinggroups@gmail.com" className="btn-primary" style={{ fontSize: 15, padding: '15px 32px' }}>
              Email Us <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/919363900110"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '15px 32px' }}
            >
              WhatsApp Us
            </a>
          </motion.div>
          <motion.p variants={fadeUp} style={{ color: '#3d6b56', fontSize: 13, marginTop: 28 }}>
            dropwinggroups@gmail.com · +91 93639 00110
          </motion.p>
        </motion.div>
      </W>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: '#020705',
      borderTop: '1px solid rgba(16,185,129,0.1)',
      padding: '64px 24px 40px',
    }}>
      <W>
        <div className="md-grid-3" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: '0.07em', color: '#10b981', marginBottom: 6 }}>
              PERSYNIX
            </div>
            <div style={{ fontSize: 11, color: '#3d6b56', letterSpacing: '0.08em', marginBottom: 16 }}>
              by Dropwing Groups
            </div>
            <p style={{ color: '#5a8c78', fontSize: 14, lineHeight: 1.65, maxWidth: 300, margin: '0 0 20px' }}>
              Business automation using n8n, Make, Zapier, and custom AI. We eliminate manual work so your team can focus on what matters.
            </p>
            <div style={{ color: '#3d6b56', fontSize: 13 }}>
              dropwinggroups@gmail.com
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3d6b56', marginBottom: 20 }}>
              Services
            </div>
            {['Workflow Automation', 'AI & Machine Learning', 'Chatbots', 'Process Automation', 'Data Intelligence', 'AI Consulting'].map(s => (
              <a key={s} href="#ai" className="footer-link">{s}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3d6b56', marginBottom: 20 }}>
              Contact
            </div>
            <a href="mailto:dropwinggroups@gmail.com" className="footer-link">Email Us</a>
            <a href="https://wa.me/919363900110" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
            <a href="https://dropwinggroups.com" target="_blank" rel="noopener noreferrer" className="footer-link">Dropwing Groups</a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(16,185,129,0.08)',
          paddingTop: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <div style={{ color: '#3d6b56', fontSize: 13 }}>
            © {new Date().getFullYear()} Persynix. All rights reserved.
          </div>
          <div style={{ color: '#3d6b56', fontSize: 13 }}>
            Part of{' '}
            <a href="https://dropwinggroups.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5a8c78', textDecoration: 'none' }}>
              Dropwing Groups
            </a>
            {' '}— dropwinggroups.com
          </div>
        </div>
      </W>
    </footer>
  );
}

// ─── Additional responsive CSS in main style block ────────────────────────────
const ResponsiveCSS = `
@media (max-width: 768px) {
  .md-hide-mobile { display: none !important; }
  .mobile-burger { display: block !important; }
}
@media (min-width: 769px) {
  .mobile-burger { display: none !important; }
}
`;

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function PersynixSite() {
  useEffect(() => {
    document.body.style.background = '#050a08';
    return () => { document.body.style.background = ''; };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS + ResponsiveCSS }} />
      <div style={{ background: '#050a08', color: '#d4ede5', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <WhatWeAutomate />
        <Services />
        <ToolsWeUse />
        <BusinessCase />
        <Process />
        <WhoShouldAutomate />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
