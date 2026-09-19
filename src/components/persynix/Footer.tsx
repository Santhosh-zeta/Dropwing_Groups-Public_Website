import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Github, Mail } from 'lucide-react';
import persynixLogo from '@/assets/logo/persynix logo.png';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Work', href: '/work' },
  ],
  Services: [
    { label: 'AI & Machine Learning', href: '/services' },
    { label: 'Automation', href: '/services' },
    { label: 'Data & Analytics', href: '/services' },
    { label: 'Web Engineering', href: '/services' },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="shell-dark border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand col */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={persynixLogo} alt="Persynix" className="h-12 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-6 leading-relaxed">
              We design, engineer and deploy AI systems, automation workflows, and digital products
              that give businesses a meaningful operational edge.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Start a project
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground/60 mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © {year} Persynix. Part of{' '}
            <span className="text-muted-foreground">Dropwing Groups</span>.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/persynix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/persynix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact.persynix@dropwinggroups.com"
              aria-label="Email"
              className="text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
