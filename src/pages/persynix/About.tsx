import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    title: 'We ship working software',
    description:
      'Presentations and strategy decks are not deliverables. We measure success in production deployments, measurable outcomes, and systems that keep running after we leave.',
  },
  {
    title: 'We are honest about scope',
    description:
      'If a problem cannot be solved with automation, we say so. If a timeline is unrealistic, we say so before the contract is signed — not after.',
  },
  {
    title: 'We build things that last',
    description:
      'We do not optimize for demo day. Systems are documented, monitored, and handed over in a state your team can actually maintain and improve.',
  },
  {
    title: 'We work like a team',
    description:
      'The same engineers who designed the system will build it. We do not offshore critical work after the sales call. What you see is what you get.',
  },
];

const About = () => {
  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            We build the systems most companies know they need but do not know how to start.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Persynix is an AI, automation, and software engineering company. We exist to help
            businesses close the gap between what their operations could look like and what they
            look like today — with practical systems that actually ship.
          </p>
        </motion.div>

        {/* Origin */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border-t border-border/50 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Origin
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
              Started by engineers frustrated with AI hype that never shipped.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Persynix was founded by Santhosh Kumar and Ashwin Kumaran — a product and engineering
              team who had spent years seeing businesses buy AI and automation tools that promised
              transformation but delivered complexity.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              The core conviction was simple: intelligent automation should be accessible to every
              business, not just enterprises with eight-figure IT budgets and dedicated innovation
              labs. Practical systems, deployed on practical timelines, with measurable outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Today, Persynix operates as part of Dropwing Groups, building AI systems, workflow
              automation, data platforms, and digital products for businesses across industries.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="border-t border-border/50 py-16"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">
              Mission
            </p>
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              "To give every business access to intelligent systems that were previously only
              available to the largest organizations in the world."
            </blockquote>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border/50 py-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-10">
            How We Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/40">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8">
                <h3 className="text-base font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="border-t border-border/50 pt-16 text-center">
          <p className="text-muted-foreground mb-5 text-sm">
            Part of <strong className="text-foreground">Dropwing Groups</strong>, building the next
            generation of technology companies.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
          >
            Work with Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
