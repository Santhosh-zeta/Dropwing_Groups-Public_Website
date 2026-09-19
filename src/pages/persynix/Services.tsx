import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, BarChart3, Globe, Settings, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent systems built for production',
    description:
      'We build ML models, LLM-powered applications, RAG pipelines, classification systems, and prediction engines that work at scale. We handle the full stack — data, model, API, deployment, and monitoring.',
    useCases: [
      'Document processing & extraction',
      'Customer churn prediction',
      'Recommendation engines',
      'Natural language understanding',
      'Image and vision processing',
      'AI-powered search',
    ],
    technologies: ['Python', 'OpenAI', 'LangChain', 'HuggingFace', 'scikit-learn', 'FastAPI'],
  },
  {
    icon: Zap,
    title: 'Automation & Workflows',
    subtitle: 'End-to-end workflow automation',
    description:
      'We map your operations, identify automation opportunities, and build systems that connect your tools without the manual glue. From simple two-step automations to complex multi-system orchestration.',
    useCases: [
      'CRM and ERP integration',
      'Document routing and approval',
      'Notification and alerting systems',
      'Lead scoring and assignment',
      'Invoice and payment processing',
      'Customer onboarding workflows',
    ],
    technologies: ['n8n', 'Make', 'Zapier', 'Python', 'REST APIs', 'Webhooks'],
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    subtitle: 'Unified data, real insights',
    description:
      'We build data pipelines, analytics dashboards, and reporting systems that pull from every source you use. Real-time visibility into what matters — without the 3-day manual analysis cycle.',
    useCases: [
      'Business intelligence dashboards',
      'Revenue and pipeline analytics',
      'Customer behaviour analysis',
      'Operational KPI tracking',
      'Data warehouse design',
      'Automated reporting',
    ],
    technologies: ['PostgreSQL', 'BigQuery', 'dbt', 'Python', 'React', 'AWS'],
  },
  {
    icon: Globe,
    title: 'Web & Product Engineering',
    subtitle: 'High-performance web applications',
    description:
      'We design and build internal tools, customer-facing products, and company websites that are fast, accessible, and built to the standard your brand deserves. We do not build for demo day — we build for daily use.',
    useCases: [
      'Internal tools and admin dashboards',
      'Customer portals',
      'Company and product websites',
      'API design and development',
      'Performance optimization',
      'Technical audits',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'FastAPI', 'Tailwind', 'Vercel'],
  },
  {
    icon: Settings,
    title: 'Business Process Automation',
    subtitle: 'Systematic operational improvement',
    description:
      'We analyze your current processes, find the inefficiencies that have been accepted as normal, and redesign them with automation at the centre. The goal is fewer people touching data that can move itself.',
    useCases: [
      'Process mapping and redesign',
      'Cross-department automation',
      'Document handling and filing',
      'Compliance and audit trails',
      'Vendor and supplier workflows',
      'Employee onboarding',
    ],
    technologies: ['Process design', 'RPA', 'Integration platforms', 'Python', 'Custom APIs'],
  },
  {
    icon: Lightbulb,
    title: 'AI Strategy & Consulting',
    subtitle: 'Technical advisory, honest assessment',
    description:
      'Not every business problem needs AI. We help companies evaluate where AI creates real value, what it will actually cost, and whether the data exists to make it work. Engagements that end with a clear decision, not a vague roadmap.',
    useCases: [
      'AI feasibility assessments',
      'Data readiness audits',
      'Vendor and tool evaluation',
      'Build vs buy analysis',
      'AI investment planning',
      'Team capability gap analysis',
    ],
    technologies: ['Strategic advisory', 'Technical assessment', 'Proof of concept'],
  },
];

const Services = () => {
  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Six capabilities. One engineering team.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We do not staff to the contract and disappear. Every engagement is led by the same
            engineers who built the system you are paying for.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-px border-t border-border/50">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="py-12 border-b border-border/50 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svc.icon className="w-6 h-6 text-primary shrink-0" />
                    <h2 className="text-lg font-bold text-foreground">{svc.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-5">{svc.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[11px] rounded-full bg-primary/8 border border-primary/15 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground/50 mb-3 font-semibold">
                      Use Cases
                    </p>
                    <ul className="space-y-2">
                      {svc.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-border/50 text-center">
          <p className="text-muted-foreground mb-5 text-sm">
            Not sure what you need? Start with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
