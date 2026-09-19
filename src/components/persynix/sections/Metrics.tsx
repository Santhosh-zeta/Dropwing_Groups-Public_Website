import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  { value: '20+', label: 'Projects Delivered', sublabel: 'Across AI, automation, and data' },
  { value: '1,200+', label: 'Hours Saved Monthly', sublabel: 'For clients, on average' },
  { value: '15+', label: 'Team Members', sublabel: 'Engineers, designers, analysts' },
  { value: '24/7', label: 'Systems Uptime', sublabel: 'Production monitoring always on' },
];

const Metrics = () => {
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
          className="mb-14 max-w-xl"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            By the Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Measured in outcomes, not deliverables.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-background p-8 lg:p-10"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{m.value}</p>
              <p className="text-sm font-semibold text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
