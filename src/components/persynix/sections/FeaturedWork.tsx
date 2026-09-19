import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';

const FeaturedWork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-card/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Featured Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
              Real problems. Real systems. Real outcomes.
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              View all projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-px bg-border/30">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-px bg-border/30"
            >
              {/* Category + number */}
              <div className="bg-background p-8 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-primary/70">
                    {project.category}
                  </span>
                  <p className="text-5xl font-bold text-border mt-2 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-[11px] text-muted-foreground/50">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Main content */}
              <div className="bg-background p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="border-t border-border/50 pt-5">
                  <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-1">
                    Outcome
                  </p>
                  <p className="text-sm font-medium text-foreground">{project.outcome}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="bg-background p-8 flex flex-col justify-center gap-5">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-2xl font-bold text-primary">{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-medium rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            See all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
