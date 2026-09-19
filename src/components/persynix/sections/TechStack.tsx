import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techGroups = [
  {
    label: 'Languages & Runtimes',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'FastAPI', 'LangChain', 'scikit-learn'],
  },
  {
    label: 'AI & Machine Learning',
    items: ['OpenAI', 'LangChain', 'Pinecone', 'HuggingFace', 'Whisper'],
  },
  {
    label: 'Automation & Integration',
    items: ['n8n', 'Make', 'Zapier', 'Webhooks', 'REST APIs'],
  },
  {
    label: 'Data & Databases',
    items: ['PostgreSQL', 'Redis', 'BigQuery', 'Supabase', 'dbt'],
  },
  {
    label: 'Infrastructure',
    items: ['AWS', 'Docker', 'Vercel', 'GitHub Actions', 'Nginx'],
  },
];

const TechStack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
            We use what works. Not what's fashionable.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + gi * 0.08 }}
            >
              <p className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground/50 mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.2 + gi * 0.08 + ti * 0.04 }}
                    className="px-3 py-1.5 rounded-sm bg-card border border-border text-sm text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-150 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
