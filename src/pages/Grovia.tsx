import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import VentureEcosystem from "@/components/VentureEcosystem";
import { ArrowRight, CheckCircle2, Share2, Search, MousePointerClick, Video, Mail, BarChart2 } from "lucide-react";

// Animated wave canvas
const WaveCanvas = () => {
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
    const t = time * 0.0006;
    const waves = 3;
    for (let wave = 0; wave < waves; wave++) {
      ctx.beginPath();
      const amp = 25 + wave * 12;
      const freq = 0.003 + wave * 0.001;
      const offset = (wave / waves) * h * 0.4 + h * 0.3;
      const speed = t * (0.5 + wave * 0.2);
      for (let x = 0; x <= w; x += 2) {
        const y = offset + Math.sin(x * freq + speed) * amp + Math.sin(x * freq * 2.3 + speed * 1.4) * (amp * 0.4);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(249, 115, 22, ${0.05 - wave * 0.01})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  });

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />;
};

const services = [
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Social Media Management",
    desc: "Full social media management across Instagram, Facebook, LinkedIn, Twitter/X, and more. We handle content creation, scheduling, community management, and monthly reporting.",
    includes: ["Content calendar", "Post creation & design", "Scheduling & publishing", "Monthly analytics report"],
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Google Ads & PPC",
    desc: "Google Search, Display, Shopping, and YouTube ads that bring the right people to your business. We manage strategy, copy, creatives, bidding, and optimization.",
    includes: ["Google Search ads", "Display & remarketing", "Shopping campaigns", "Performance reporting"],
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Meta & Social Ads",
    desc: "Facebook and Instagram ad campaigns that reach your ideal audience with targeted messaging. From awareness to conversion — we manage the full funnel.",
    includes: ["Facebook & Instagram ads", "Audience targeting", "Ad creative design", "A/B testing"],
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO & Content Strategy",
    desc: "Get found on Google. We improve your organic rankings through technical SEO, keyword strategy, content creation, and link building — all focused on driving qualified traffic.",
    includes: ["Technical SEO audit", "Keyword research", "On-page optimization", "Content creation"],
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Script Writing",
    desc: "Engaging scripts for YouTube videos, Instagram Reels, product demos, ads, and explainer videos. Written to sound natural, communicate clearly, and drive action.",
    includes: ["YouTube scripts", "Reel & Short scripts", "Ad scripts", "Explainer videos"],
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Marketing & Lead Generation",
    desc: "Email campaigns, newsletters, and automated sequences that nurture your leads and keep your customers engaged. We handle strategy, copywriting, design, and delivery.",
    includes: ["Email campaigns", "Automated sequences", "Newsletter design", "List management"],
  },
];

const Grovia = () => {
  return (
    <div className="min-h-screen bg-[#0a0702] text-gray-300 font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <WaveCanvas />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/8 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">
                Grovia · Digital Marketing
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
              >
                Marketing that
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(249,115,22,0.7)] leading-[0.9]"
              >
                actually grows.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-orange-900/50 pl-6 mb-12"
            >
              Social media, Google Ads, SEO, video scripts, and email marketing — we handle your entire digital marketing operation so you can focus on running your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:marketing@dropwinggroups.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-orange-500 transition-colors rounded-sm">
                Grow My Business
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
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 max-w-2xl">
              Everything you need to reach and win your customers.
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
                className="group p-6 bg-white/[0.03] border border-white/8 hover:border-orange-500/30 rounded-lg transition-all duration-300 hover:bg-orange-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-orange-400">{service.icon}</span>
                  <h3 className="text-white font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-1.5">
                  {service.includes.map(item => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-orange-500/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GROVIA */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-6 leading-tight">
                Marketing that makes your phone ring.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Most marketing agencies promise reach. We promise results. Every campaign we run is built around one question: what does this have to achieve for your business?
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you want more foot traffic, more online sales, more leads, or more brand awareness — we build the strategy and execute it with complete transparency.
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
                "Full social media management — content, posting, and engagement",
                "Google and Meta ads that target your ideal customers",
                "SEO that builds long-term organic growth",
                "Video scripts that viewers actually watch to the end",
                "Email campaigns with real open rates and conversions",
                "Monthly reports that show exactly what's working and what's not",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-orange-400 uppercase tracking-widest">Who We Help</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4">
              Any business that wants to grow.
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Local Businesses", desc: "Restaurants, salons, retail, clinics — reach more people in your area." },
              { label: "E-commerce Brands", desc: "Drive sales with targeted ads and SEO that converts browsers to buyers." },
              { label: "Startups & SaaS", desc: "Build brand awareness and generate qualified leads from day one." },
              { label: "Established Companies", desc: "Scale your reach, modernize your marketing, and stay competitive." },
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

      {/* CTA */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to grow?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-10">
              Tell us about your business and your goals. We'll build a marketing plan that actually makes sense for you.
            </p>
            <a
              href="mailto:marketing@dropwinggroups.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-orange-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-orange-500 transition-colors rounded-sm"
            >
              Start Growing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <VentureEcosystem currentVenture="Grovia" />
    </div>
  );
};

export default Grovia;
