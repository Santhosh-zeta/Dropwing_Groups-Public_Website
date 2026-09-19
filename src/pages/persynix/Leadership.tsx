import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Github } from 'lucide-react';
import { leadership } from '@/data/team';

const Leadership = () => {
  return (
    <div className="pt-24 pb-24 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Leadership
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            The people running Persynix.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A small leadership team with a clear mandate — ship intelligent systems that create real
            operational value for the businesses that trust us.
          </p>
        </motion.div>

        {/* Leadership cards */}
        <div className="border-t border-border/50 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person, i) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                className="bg-card border border-border/60 rounded-sm overflow-hidden"
              >
                {/* Photo bar */}
                <div className="h-64 relative overflow-hidden bg-secondary flex items-center justify-center">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-8xl font-bold text-muted-foreground/10 select-none">
                      {person.name.charAt(0)}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                        {person.role}
                      </p>
                      <h2 className="text-2xl font-bold text-foreground">{person.name}</h2>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 pt-1">
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

                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{person.bio}</p>

                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground/50 mb-2 font-semibold">
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.areas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-0.5 text-[11px] rounded-full bg-primary/8 border border-primary/15 text-primary font-medium"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border/50 pt-14 text-center">
          <p className="text-muted-foreground mb-5 text-sm">
            Want to work with us or learn more about what we are building?
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

export default Leadership;
