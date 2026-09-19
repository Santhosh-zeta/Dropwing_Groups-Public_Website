import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';

const Work = () => {
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
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Systems we have built.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every engagement is different. The common thread is shipping working software that
            solves the actual problem.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-px border-t border-border/50">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group py-10 border-b border-border/50 last:border-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-6 lg:gap-10 items-start">
                {/* Meta */}
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-primary/8 border border-primary/15 text-primary mb-3">
                    {project.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded-sm bg-secondary border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] text-muted-foreground/50 self-center">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground/50 mb-1 font-semibold">
                        The Problem
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted-foreground/50 mb-1 font-semibold">
                        Our Approach
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="border-l-2 border-primary/30 pl-4">
                      <p className="text-2xl font-bold text-primary">{m.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-10 border-t border-border/50 text-center">
          <p className="text-muted-foreground mb-5 text-sm">Ready to build something similar?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
