import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="py-24 md:py-32 bg-card/20 border-t border-border/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">
            Start a Conversation
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight mb-6">
            Have something worth building?
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us about the problem. We will be honest about whether we can help, and how long it
            will actually take.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm hover:bg-primary/90 transition-colors text-sm"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:contact.persynix@dropwinggroups.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-sm hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
            >
              <Mail className="w-4 h-4" />
              Email us directly
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
