import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, CheckCircle2, ArrowRight } from 'lucide-react';

type ProjectType =
  | ''
  | 'ai-ml'
  | 'automation'
  | 'data-analytics'
  | 'web-engineering'
  | 'strategy'
  | 'other';

interface FormState {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  message: '',
};

const projectTypes = [
  { value: 'ai-ml', label: 'AI & Machine Learning' },
  { value: 'automation', label: 'Automation & Workflows' },
  { value: 'data-analytics', label: 'Data & Analytics' },
  { value: 'web-engineering', label: 'Web / Product Engineering' },
  { value: 'strategy', label: 'AI Strategy & Consulting' },
  { value: 'other', label: 'Something else' },
];

const budgetOptions = [
  { value: 'under-5l', label: 'Under ₹5L' },
  { value: '5l-15l', label: '₹5L – ₹15L' },
  { value: '15l-50l', label: '₹15L – ₹50L' },
  { value: 'above-50l', label: 'Above ₹50L' },
  { value: 'flexible', label: 'Let us discuss' },
];

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Send failed');
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please email us directly at contact.persynix@dropwinggroups.com');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors';

  const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 mb-2';

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Message received.</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We will review what you have sent and get back to you within one business day. If it is
            urgent, email us directly at{' '}
            <a href="mailto:contact.persynix@dropwinggroups.com" className="text-primary">
              contact.persynix@dropwinggroups.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    );
  }

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
            Start a Project
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Tell us what you are building.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We will read everything you write here. We will be honest about whether we are the right
            team for it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 border-t border-border/50 pt-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Priya Menon"
                  value={form.name}
                  onChange={set('name')}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="priya@company.com"
                  value={form.email}
                  onChange={set('email')}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company / Organization
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                value={form.company}
                onChange={set('company')}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="projectType" className={labelClass}>
                  Project Type *
                </label>
                <select
                  id="projectType"
                  required
                  value={form.projectType}
                  onChange={set('projectType')}
                  className={inputClass}
                >
                  <option value="">Select a type...</option>
                  {projectTypes.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Approximate Budget
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={set('budget')}
                  className={inputClass}
                >
                  <option value="">Select a range...</option>
                  {budgetOptions.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                What are you building? *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder="Describe the problem you are trying to solve, what you have tried, what systems you already use, and what success looks like..."
                value={form.message}
                onChange={set('message')}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {submitting ? 'Sending...' : 'Send Message'}
              {!submitting && <ArrowRight className="w-4 h-4" />}
            </button>

            <p className="text-xs text-muted-foreground/50">
              We will respond within one business day. No spam. No sales calls unless you ask for one.
            </p>
          </motion.form>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border/60 rounded-sm p-6">
              <h3 className="text-sm font-semibold text-foreground mb-4">Direct contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact.persynix@dropwinggroups.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  contact.persynix@dropwinggroups.com
                </a>
                <a
                  href="https://linkedin.com/company/persynix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-primary shrink-0" />
                  Persynix on LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-card border border-border/60 rounded-sm p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">What to expect</h3>
              <ul className="space-y-3">
                {[
                  'We read every message ourselves',
                  'Reply within 1 business day',
                  'Honest assessment of fit',
                  'No hard sell. No NDAs on day one',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 border border-primary/15 rounded-sm p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                Part of Dropwing Groups
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Persynix is one of six ventures operating under the Dropwing Groups ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
