import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import VentureEcosystem from "@/components/VentureEcosystem";
import { ArrowRight, CheckCircle2, GitMerge, Bot, BrainCircuit, Workflow, BarChart3, Zap } from "lucide-react";

// Animated circuit / node canvas
const CircuitCanvas = () => {
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

    // Flowing data lines
    const t = time * 0.0006;
    const lines = 8;
    for (let i = 0; i < lines; i++) {
      const y = (h / lines) * i + (h / lines) * 0.5;
      const progress = ((t + i * 0.12) % 1);
      const x = progress * w;
      const alpha = Math.sin(progress * Math.PI) * 0.15;
      if (alpha < 0.01) continue;
      ctx.beginPath();
      ctx.arc(x, y + Math.sin(t * 2 + i) * 20, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
      ctx.fill();

      // Trail
      const grad = ctx.createLinearGradient(x - 80, 0, x, 0);
      grad.addColorStop(0, "rgba(16, 185, 129, 0)");
      grad.addColorStop(1, `rgba(16, 185, 129, ${alpha * 0.5})`);
      ctx.beginPath();
      ctx.moveTo(x - 80, y + Math.sin(t * 2 + i) * 20);
      ctx.lineTo(x, y + Math.sin(t * 2 + i) * 20);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  });

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-70" />;
};

const services = [
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: "Workflow Automation",
    desc: "We map your existing manual processes and automate them using n8n, Make (formerly Integromat), Zapier, and custom integrations. Connect your apps, eliminate repetitive tasks, and save hours every week.",
    tools: ["n8n", "Make", "Zapier", "Custom APIs"],
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI & Machine Learning",
    desc: "We build and deploy AI models tailored to your specific business needs — from document processing and classification to predictive analytics and recommendation engines.",
    tools: ["Python", "TensorFlow", "OpenAI API", "Custom ML"],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Chatbots & AI Assistants",
    desc: "Intelligent chatbots and AI assistants for your website, WhatsApp, Telegram, or internal tools. They handle inquiries, qualify leads, book appointments, and answer questions 24/7.",
    tools: ["ChatGPT API", "Dialogflow", "WhatsApp API", "Web Chat"],
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Business Process Automation",
    desc: "From CRM updates and invoice generation to email sequences and report creation — we automate the backend processes that eat up your team's time and cause errors.",
    tools: ["CRM automation", "ERP integration", "Document automation", "Notifications"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Intelligence & Analytics",
    desc: "Turn raw data into actionable insights. We build automated dashboards, data pipelines, and reporting systems that give you a clear picture of your business performance in real time.",
    tools: ["Power BI", "Google Looker", "Python", "SQL"],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Strategy & Consulting",
    desc: "Not sure where to start with AI? We audit your business, identify the highest-impact automation opportunities, and build a clear roadmap for implementing AI in your operations.",
    tools: ["AI audit", "ROI analysis", "Implementation roadmap", "Training"],
  },
];

const PerSyniX = () => {
  return (
    <div className="min-h-screen bg-[#050a08] text-gray-300 font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <CircuitCanvas />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/8 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                Persynix · AI & Automation
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
              >
                Automate the
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(16,185,129,0.7)] leading-[0.9]"
              >
                work you hate.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-900/50 pl-6 mb-12"
            >
              We use n8n, Make, Zapier, and custom AI to eliminate manual work, connect your tools, and make your business run smarter — so your team can focus on what actually moves the needle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:automation@dropwinggroups.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-emerald-500 transition-colors rounded-sm">
                Automate My Business
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
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">What We Build</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 max-w-2xl">
              Automation and AI solutions for every part of your business.
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
                className="group p-6 bg-white/[0.03] border border-white/8 hover:border-emerald-500/30 rounded-lg transition-all duration-300 hover:bg-emerald-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-emerald-400">{service.icon}</span>
                  <h3 className="text-white font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono text-emerald-400/70 bg-emerald-500/10 rounded border border-emerald-500/10">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY AUTOMATE */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">The Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-6 leading-tight">
                Your team does more. Your costs go down.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The average business wastes 20–30% of its time on tasks that could be automated. That's time your team could spend on sales, product, and growth instead.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We identify those tasks, automate them correctly, and make sure the systems are reliable, monitored, and easy to manage going forward.
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
                "Connect all your apps without writing code",
                "Automate lead capture, follow-up, and CRM updates",
                "Build AI assistants that handle common inquiries",
                "Generate reports and dashboards automatically",
                "Trigger actions across systems based on events",
                "Works with 1,000+ apps including WhatsApp, Gmail, Notion, Slack, and more",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4">
              From audit to live automation.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Audit", desc: "We analyze your current workflows and identify the biggest automation opportunities." },
              { step: "02", title: "Design", desc: "We map the automation flows and present a clear plan before building anything." },
              { step: "03", title: "Build", desc: "We build, test, and refine the automations until they work perfectly." },
              { step: "04", title: "Launch & Support", desc: "We go live, monitor performance, and support you as your needs grow." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold text-sm mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to work smarter?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-10">
              Tell us what you're doing manually today. We'll show you how to automate it.
            </p>
            <a
              href="mailto:automation@dropwinggroups.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-emerald-500 transition-colors rounded-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <VentureEcosystem currentVenture="Persynix" />
    </div>
  );
};

export default PerSyniX;
