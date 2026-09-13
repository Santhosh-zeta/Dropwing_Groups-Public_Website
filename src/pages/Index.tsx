import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { ArrowRight, Layers, Cpu, TrendingUp, Paintbrush, CheckCircle2, Star } from "lucide-react";
import designStudioLogo from "@/assets/logo/design-studio logo.png";
import fenixaLogo from "@/assets/logo/webforge logo.png";
import persynixLogo from "@/assets/logo/persynix logo.png";
import groviaLogo from "@/assets/logo/grovia logo.png";
import dropwingLogo from "@/assets/DG_Logo_Dark (1).png";

const companies = [
  {
    id: "design-studio",
    number: "01",
    name: "Dropwing Design Studio",
    tagline: "Visuals that make people stop scrolling.",
    description:
      "Your brand is the first thing people see. We make sure it's worth looking at — from your logo and social media posts to banners, visiting cards, and every creative asset your business needs.",
    accentColor: "#a855f7",
    accentBg: "bg-purple-500/10",
    accentBorder: "border-purple-500/30",
    accentText: "text-purple-400",
    icon: <Paintbrush className="w-5 h-5" />,
    services: [
      "Logo & Brand Identity Design",
      "Social Media Posts & Ad Creatives",
      "Business Card & Visiting Card Design",
      "Banner & Poster Design",
      "Marketing Collateral & Print",
    ],
    href: "/ventures/design-studio",
    logo: designStudioLogo,
  },
  {
    id: "fenixa",
    number: "02",
    name: "Fenixa Solutions",
    tagline: "Software built to solve real problems.",
    description:
      "Whether you need a website, a mobile app, a full product, or secure cloud infrastructure — we engineer digital solutions that are fast, reliable, and built to scale with your business.",
    accentColor: "#3b82f6",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/30",
    accentText: "text-blue-400",
    icon: <Layers className="w-5 h-5" />,
    services: [
      "Web Development & Web Apps",
      "Mobile App Development (iOS & Android)",
      "Product & Platform Development",
      "DevOps, Cloud & Infrastructure",
      "Cybersecurity Services",
    ],
    href: "/ventures/fenixa",
    logo: fenixaLogo,
  },
  {
    id: "persynix",
    number: "03",
    name: "Persynix",
    tagline: "Let machines handle the repetitive work.",
    description:
      "We automate your workflows, integrate your tools, and apply AI to the parts of your business that eat up time and resources — so you can focus on what actually matters.",
    accentColor: "#10b981",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/30",
    accentText: "text-emerald-400",
    icon: <Cpu className="w-5 h-5" />,
    services: [
      "Workflow Automation (n8n, Make, Zapier)",
      "AI & Machine Learning Solutions",
      "Chatbots & AI Assistants",
      "Business Process Automation",
      "Data Intelligence & Analytics",
    ],
    href: "/ventures/persynix",
    logo: persynixLogo,
  },
  {
    id: "grovia",
    number: "04",
    name: "Grovia",
    tagline: "Marketing that brings real results.",
    description:
      "From social media and Google ads to SEO and video scripts, we handle everything that gets your brand in front of the right people — and keeps them coming back.",
    accentColor: "#f97316",
    accentBg: "bg-orange-500/10",
    accentBorder: "border-orange-500/30",
    accentText: "text-orange-400",
    icon: <TrendingUp className="w-5 h-5" />,
    services: [
      "Social Media Management & Content",
      "Google Ads, Meta Ads & PPC",
      "SEO & Search Strategy",
      "Video Script Writing",
      "Email Marketing & Lead Generation",
    ],
    href: "/ventures/grovia",
    logo: groviaLogo,
  },
];

const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "200+", label: "Projects Delivered" },
  { value: "4", label: "Specialized Studios" },
  { value: "100%", label: "Ownership & Accountability" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="bg-background text-foreground">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-structural"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[160px]" />
        </div>
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)", backgroundSize: "64px 64px" }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10"
          >
            <img src={dropwingLogo} alt="Dropwing Groups" className="h-4 w-auto brightness-0 invert opacity-70" />
            <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">Dropwing Groups</span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] font-bold leading-[0.9] tracking-tighter text-white"
            >
              One Group.
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] font-bold leading-[0.9] tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]"
            >
              Everything You Need.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Dropwing Groups is the home of four specialized studios — each built to cover a different part of your business, from design and software to automation and marketing.
          </motion.p>

          {/* Company badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            {companies.map((c) => (
              <span
                key={c.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-widest uppercase rounded-full border"
                style={{ borderColor: c.accentColor + "40", color: c.accentColor, background: c.accentColor + "12" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.accentColor }} />
                {c.name}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors rounded-sm"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#studios"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-white/70 font-bold text-sm tracking-[0.15em] uppercase hover:border-white/30 hover:text-white transition-all rounded-sm"
            >
              Explore Studios
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.25em] text-gray-600 uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-black/30">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-10 px-6 border-r border-white/5 last:border-r-0 text-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-2">{s.value}</span>
              <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── THE FOUR STUDIOS ──────────────────────────────────────────────────── */}
      <section id="studios" className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 md:mb-20"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-primary/70 uppercase">The Dropwing Ecosystem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mt-4 max-w-2xl leading-tight">
              Four studios. Every service your business needs.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {companies.map((company, i) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={company.href}
                  className="group block h-full bg-white/[0.03] border border-white/8 hover:border-white/15 rounded-lg overflow-hidden transition-all duration-500 hover:bg-white/[0.05]"
                >
                  <div className="p-8 md:p-10 flex flex-col h-full min-h-[360px]">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                          style={{ background: company.accentColor + "20", color: company.accentColor }}
                        >
                          {company.icon}
                        </span>
                        <span className="text-xs font-mono text-gray-600 tracking-widest">/{company.number}</span>
                      </div>
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-8 w-auto object-contain brightness-0 invert opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-sm font-semibold mb-4" style={{ color: company.accentColor }}>
                        {company.tagline}
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">
                        {company.description}
                      </p>

                      {/* Services */}
                      <ul className="space-y-2">
                        {company.services.map((s) => (
                          <li key={s} className="flex items-center gap-2.5 text-sm text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: company.accentColor }} />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer CTA */}
                    <div className="flex items-center gap-2 mt-8 text-sm font-bold tracking-[0.12em] uppercase transition-all duration-300" style={{ color: company.accentColor }}>
                      <span>Explore {company.name.split(" ")[0] === "Dropwing" ? "Design Studio" : company.name}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Bottom accent bar */}
                  <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: company.accentColor }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DROPWING ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold tracking-[0.3em] text-primary/70 uppercase">Why Dropwing</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-8 leading-tight">
                The difference between a vendor and a partner.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Most businesses work with 5–10 different agencies and freelancers — each speaking a different language, working on a different timeline, with no one holding the bigger picture. We built Dropwing Groups to change that.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our four studios share the same foundation, the same values, and the same commitment to your success. When you work with us, you get a unified team that covers design, software, automation, and marketing — all under one roof.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  title: "Everything connected.",
                  body: "Your design, website, automation, and marketing all talk to each other. No gaps, no miscommunication.",
                },
                {
                  title: "Built for real businesses.",
                  body: "Whether you're a solo founder, a growing startup, or an established company — we speak your language and deliver results.",
                },
                {
                  title: "One team. Full accountability.",
                  body: "You don't chase down five different vendors. You have one point of contact who owns the outcome.",
                },
                {
                  title: "Fast, honest, transparent.",
                  body: "No jargon. Clear timelines. Regular updates. You always know where your project stands.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 bg-white/[0.03] border border-white/8 rounded-lg"
                >
                  <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-xs font-bold tracking-[0.3em] text-primary/70 uppercase">Who We Work With</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-6">
              Small teams. Big companies. Everyone in between.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
              We work with businesses of all sizes — from first-time founders building their first product to established companies looking to modernize and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Startups & Founders", desc: "First product, first brand, first launch." },
              { label: "SMEs & Growing Businesses", desc: "Systems and scale for your next chapter." },
              { label: "Established Companies", desc: "Modernization, automation, and market reach." },
              { label: "Product Companies", desc: "End-to-end product development and growth." },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-white/[0.03] border border-white/8 rounded-lg text-left"
              >
                <h4 className="text-white font-bold text-sm mb-2">{item.label}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-40 border-t border-white/5 bg-structural relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-primary/70 uppercase">Ready to Begin?</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mt-6 mb-8 leading-tight">
              Let's build<br />something great.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-12">
              Tell us what you need. We'll figure out which studios make the most sense for your goals — and build a plan together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-sm tracking-[0.15em] uppercase hover:bg-white/90 transition-colors rounded-sm"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/who-we-are"
                className="inline-flex items-center gap-3 px-10 py-5 border border-white/15 text-white/70 font-bold text-sm tracking-[0.15em] uppercase hover:border-white/30 hover:text-white transition-all rounded-sm"
              >
                Who We Are
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
