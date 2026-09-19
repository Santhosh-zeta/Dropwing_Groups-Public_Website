import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { persynixInsights } from '@/data/persynix-insights';

const InsightsPreview = () => {
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
            Insights
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
            Writing from the people building the systems.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/40">
          {persynixInsights.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group bg-background p-8 hover:bg-card/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2 mb-6">
                <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider rounded-full bg-primary/8 border border-primary/15 text-primary">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground/50">{post.readTime}</span>
              </div>

              <h3 className="text-base font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                <div>
                  <p className="text-xs font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
                <p className="text-xs text-muted-foreground/50">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsPreview;
