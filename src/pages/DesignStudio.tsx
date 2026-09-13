import React, { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import Navbar from "@/components/Navbar";
import VentureEcosystem from '@/components/VentureEcosystem';
import { ArrowRight, CheckCircle2, Palette, Type, Image, CreditCard, Megaphone, Layout } from 'lucide-react';

// Animated particle canvas
const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<{ x: number; y: number; size: number; speed: number; alpha: number }[]>([]);

  useAnimationFrame((time) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      // Initialize particles
      particles.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.current.forEach((p) => {
      p.y -= p.speed;
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
      ctx.fill();
    });
  });

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Logo & Brand Identity",
    desc: "A logo that people remember. We design complete brand identities — logo, color palette, typography, and usage guidelines — that make your business look professional and consistent everywhere.",
    examples: ["Logo design", "Brand guidelines", "Color system", "Typography"],
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Social Media Creatives",
    desc: "Scroll-stopping posts, stories, reels covers, and ad creatives for Instagram, Facebook, LinkedIn, and more. Designed to your brand and ready to post.",
    examples: ["Instagram posts", "Story templates", "Facebook ad creatives", "LinkedIn banners"],
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Banner & Ad Creatives",
    desc: "Digital and print banners, Google Display ads, hoarding designs, and promotional materials that get attention and communicate your message clearly.",
    examples: ["Google Display ads", "Hoarding designs", "Event banners", "Promotional posters"],
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Business Card & Print Design",
    desc: "Professional business cards, visiting cards, letterheads, envelopes, and all print collateral that makes your brand look sharp in the physical world.",
    examples: ["Business cards", "Letterheads", "Envelopes", "ID cards"],
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Marketing Collateral",
    desc: "Brochures, flyers, catalogues, pitch decks, and presentations that tell your story and sell your services — beautifully designed and print-ready.",
    examples: ["Brochures", "Flyers", "Catalogues", "Pitch decks"],
  },
  {
    icon: <Type className="w-6 h-6" />,
    title: "Brand Refresh & Redesign",
    desc: "If your current brand no longer represents who you are, we'll modernize it. We audit your existing identity and redesign it to match where your business is going.",
    examples: ["Brand audit", "Logo redesign", "Identity modernization", "Brand consistency"],
  },
];

const DesignStudio = () => {
  return (
    <div className="min-h-screen bg-[#08060f] text-gray-300 font-sans overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        <ParticleField />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[160px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                Dropwing Design Studio · Creative & Branding
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
              >
                Visuals that make
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(168,85,247,0.7)] leading-[0.9]"
              >
                people stop.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-purple-900/50 pl-6 mb-12"
            >
              From your logo and brand identity to every social media post, banner, and business card — we design everything your business needs to look great and be remembered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="mailto:design@dropwinggroups.com" className="group inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-purple-500 transition-colors rounded-sm">
                Start a Design Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DESIGN */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">What We Design</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 max-w-2xl">
              Every creative asset your brand needs.
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
                className="group p-6 bg-white/[0.03] border border-white/8 hover:border-purple-500/30 rounded-lg transition-all duration-300 hover:bg-purple-500/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-purple-400">{service.icon}</span>
                  <h3 className="text-white font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.examples.map(e => (
                    <span key={e} className="px-2 py-0.5 text-[10px] font-mono text-purple-400/70 bg-purple-500/10 rounded border border-purple-500/10">{e}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DESIGN MATTERS */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Our Approach</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 mb-6 leading-tight">
                Design that works — not just looks good.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Great design isn't just about being pretty. It's about communicating clearly, building trust, and making your business stand out from every competitor in your market.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every project we take starts with understanding your business, your audience, and your goals. Then we design with purpose — not just aesthetics.
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
                "Brand identity that people recognize instantly",
                "Social media creatives that stop the scroll",
                "Print materials that make you look credible",
                "Consistent design across every touchpoint",
                "Fast turnaround and unlimited revisions until you love it",
                "Works for businesses of every size, from solopreneurs to enterprises",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4">
              Simple. Fast. No guesswork.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Brief", desc: "Tell us about your business, target audience, and design goals." },
              { step: "02", title: "Concept", desc: "We create initial concepts based on your brief and industry." },
              { step: "03", title: "Refine", desc: "You give feedback. We refine until it's exactly right." },
              { step: "04", title: "Deliver", desc: "Final files delivered in all formats you need, ready to use." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 font-bold text-sm mb-4 mx-auto">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to elevate your brand?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-10">
              Let's create something that makes your business look exactly as good as it is.
            </p>
            <a
              href="mailto:design@dropwinggroups.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-purple-600 text-white font-bold text-sm tracking-[0.15em] uppercase hover:bg-purple-500 transition-colors rounded-sm"
            >
              Start Your Design Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      <VentureEcosystem currentVenture="Dropwing Design Studio" />
    </div>
  );
};

export default DesignStudio;
