import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, ArrowRight } from 'lucide-react';
import { leadership } from '@/data/team';

const LeadershipSection = () => {
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
            Leadership
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-xl">
              Built by engineers who also run the company.
            </h2>
            <Link
              to="/leadership"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              Meet the full team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
              className="group bg-background border border-border/60 rounded-sm overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-0">
                {/* Photo */}
                <div className="w-36 shrink-0 relative overflow-hidden bg-secondary flex items-center justify-center" style={{ minHeight: '200px' }}>
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                      style={{ minHeight: '200px' }}
                    />
                  ) : (
                    <span className="text-4xl font-bold text-muted-foreground/20 select-none">
                      {person.name.charAt(0)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                      {person.role}
                    </p>
                    <h3 className="text-xl font-bold text-foreground mb-3">{person.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {person.bio}
                    </p>

                    {/* Areas */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {person.areas.slice(0, 3).map((area) => (
                        <span
                          key={area}
                          className="px-2 py-0.5 text-[11px] rounded-full bg-secondary border border-border text-muted-foreground"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/50 hover:text-primary transition-colors"
                        aria-label={`${person.name} on LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {person.github && (
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground/50 hover:text-primary transition-colors"
                        aria-label={`${person.name} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
