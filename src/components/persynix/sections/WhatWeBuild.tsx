import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, Globe, Settings, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Custom ML models, LLM integrations, RAG pipelines, and intelligent systems built for production — not just demos.',
    tags: ['OpenAI', 'LangChain', 'Python', 'scikit-learn'],
  },
  {
    icon: Zap,
    title: 'Automation & Workflows',
    description:
      'End-to-end workflow automation that connects your tools, eliminates manual work, and scales with your business.',
    tags: ['n8n', 'Make', 'Zapier', 'Custom APIs'],
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    description:
      'Unified data pipelines, business intelligence dashboards, and predictive analytics that turn raw data into decisions.',
    tags: ['PostgreSQL', 'Python', 'Recharts', 'AWS'],
  },
  {
    icon: Globe,
    title: 'Web & Product Engineering',
    description:
      'High-performance web applications and internal tools built with modern frameworks and a strong engineering standard.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Next.js'],
  },
  {
    icon: Settings,
    title: 'Business Process Automation',
    description:
      'Map, redesign, and automate complex business processes — from document handling to cross-team operational workflows.',
    tags: ['Process Design', 'RPA', 'Integration', 'APIs'],
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy & Consulting',
    description:
      'Technical AI advisory for businesses evaluating where and how AI can create real, measurable operational advantage.',
    tags: ['Architecture', 'Feasibility', 'Roadmap', 'ROI'],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const WhatWeBuild = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            What We Build
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
              Six capabilities. One engineering team.
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              View all services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              className="group bg-background p-8 hover:bg-card transition-colors duration-200"
            >
              <svc.icon className="w-7 h-7 text-primary mb-5 transition-transform duration-200 group-hover:scale-110" />
              <h3 className="text-base font-semibold text-foreground mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {svc.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-[11px] font-medium"
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
  );
};

export default WhatWeBuild;
