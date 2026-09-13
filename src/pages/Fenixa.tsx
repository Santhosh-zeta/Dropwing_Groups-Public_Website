import React, { useRef } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import VentureEcosystem from "@/components/VentureEcosystem";
import { ArrowRight, CheckCircle2, Globe, Smartphone, Box, Cloud, ShieldCheck, Code2 } from "lucide-react";

// Animated grid background
const GridCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useAnimationFrame((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Animated horizontal scan
    const scanY = ((time * 0.00015) % 1) * h;
    const gradient = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 80);
    gradient.addColorStop(0, "rgba(59, 130, 246, 0)");
    gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.06)");
    gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, scanY - 80, w, 160);

    // Grid
    ctx.strokeStyle = "rgba(59, 130, 246, 0.04)";
    ctx.lineWidth = 1;
    const gridSize = 48;
    for (let x = 0; x <= w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  });

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Development",
    desc: "Fast, modern websites and web apps — from marketing sites to complex dashboards and portals. Built for performance, SEO, and scale.",
    tags: ["React", "Next.js", "Node.js", "Laravel"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android. We build apps that users love to use — and that work flawlessly.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: "Product Development",
    desc: "From idea to shipped product. We handle everything — architecture, design, development, testing, and launch — as your technical co-founder.",
    tags: ["MVP", "SaaS", "B2B", "B2C"],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "DevOps & Cloud",
    desc: "AWS, GCP, Azure, and self-hosted infrastructure. CI/CD pipelines, containerization, monitoring, and scalable cloud architecture.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Cybersecurity",
    desc: "Penetration testing, security audits, secure coding practices, and compliance — so your product is secure from day one.",
    tags: ["Pentesting", "VAPT", "ISO 27001", "GDPR"],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "API & Integrations",
    desc: "Connect your tools, automate data flows, and build powerful integrations with third-party services and internal systems.",
    tags: ["REST", "GraphQL", "Webhooks", "Zapier"],
  },
];

const principles = [
  {
    number: "01",
    title: "We build for production, not demos.",
    body: "Every system we deliver is battle-tested, documented, and built to be maintained, extended, and scaled — not just to pass a review.",
  },
  {
    number: "02",
    title: "Performance is not optional.",
    body: "Load times, uptime, and reliability are engineering requirements, not nice-to-haves. We optimize from the start.",
  },
  {
    number: "03",
    title: "Security by default.",
    body: "Secure coding, proper authentication, and infrastructure hardening are built in from day one — not bolted on at the end.",
  },
];

const Fenixa = () => {
  return (
    <div className="min-h-screen bg-[#050814] text-gray-300 font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <GridCanvas />
        {/* Blue ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                Fenixa Solutions · Software & Technology
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
              >
                Software that
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(59,130,246,0.7)] leading-[0.9]"
              >
                works for you.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-blue-900/50 pl-6 mb-12"
            >
              From your first website to a full enterprise product — we engineer reliable, secure, and scalable digital solutions that solve real business problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:hello@dropwinggroups.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-blue-500 transition-colors rounded-sm">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">What We Build</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 max-w-2xl">
              End-to-end software solutions for every stage of your business.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 bg-white/[0.03] border border-white/8 hover:border-blue-500/30 rounded-lg transition-all duration-300 hover:bg-blue-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-400">{service.icon}</span>
                  <h3 className="text-white font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-blue-400/70 bg-blue-500/10 rounded border border-blue-500/10">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 max-w-xl">
              Our engineering principles.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white/[0.03] border border-white/8 rounded-lg border-t-blue-500/50 border-t-2"
              >
                <span className="text-xs font-mono text-blue-400/50 tracking-widest block mb-4">{p.number}</span>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Who We Work With</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-6 leading-tight">
                From first product to enterprise scale.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Whether you're a founder building an MVP, a company replacing an old system, or an enterprise looking to modernize your stack — we have the experience and the team to make it happen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                "Startups building their first product",
                "Businesses replacing legacy systems",
                "Companies adding new digital capabilities",
                "Product teams that need extra bandwidth",
                "Enterprises modernizing their tech stack",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to build?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-10">
              Tell us what you're trying to build. We'll take it from there.
            </p>
            <a
              href="mailto:hello@dropwinggroups.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-blue-500 transition-colors rounded-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <VentureEcosystem currentVenture="Fenixa" />
    </div>
  );
};

export default Fenixa;
