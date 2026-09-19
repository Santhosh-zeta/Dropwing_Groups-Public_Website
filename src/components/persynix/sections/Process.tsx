import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We map your current state — tools, workflows, pain points, and data. What is working, what is broken, and where automation creates the most value.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We architect the solution — workflow designs, system diagrams, technology choices, and a delivery plan with clear milestones before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Engineering in weekly sprints with working software at every checkpoint. You see it running — not just described in a presentation.',
  },
  {
    number: '04',
    title: 'Deploy',
    description:
      'Production deployment with documentation, monitoring, and a handover your team can actually follow. No black boxes.',
  },
  {
    number: '05',
    title: 'Improve',
    description:
      'Systems improve with use. We monitor performance, incorporate feedback, and iterate — treating your investment as something that compounds over time.',
  },
];

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 bg-card/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
            A process built for delivery, not discussion.
          </h2>
        </motion.div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-border/60" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="relative flex flex-col lg:items-start"
              >
                {/* Number badge */}
                <div className="relative z-10 flex items-center gap-3 lg:flex-col lg:items-start mb-4">
                  <span className="w-14 h-14 rounded-sm bg-background border border-border flex items-center justify-center text-lg font-bold text-primary shrink-0">
                    {step.number}
                  </span>
                  {/* Mobile connector */}
                  <div className="lg:hidden flex-1 h-px bg-border/60" />
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
