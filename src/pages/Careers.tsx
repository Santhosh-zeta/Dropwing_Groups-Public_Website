import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

const openRoles = [
    {
        title: "Senior Platform Engineer",
        department: "WebForge",
        type: "Full-Time",
        location: "Chennai / Remote",
        description: "Design and operate institutional-grade cloud infrastructure. You will own platform reliability, scaling strategy, and internal developer tooling.",
    },
    {
        title: "AI Systems Architect",
        department: "PerSyniX",
        type: "Full-Time",
        location: "Chennai / Remote",
        description: "Build agentic AI systems that embed directly into client operations. You will design decision pipelines, model integrations, and cognitive workflow architectures.",
    },
    {
        title: "Brand Systems Designer",
        department: "Design Studio",
        type: "Full-Time",
        location: "Chennai / Hybrid",
        description: "Architect visual identity systems for institutional clients. You will lead from brief to system — not just aesthetics, but the logic of how a brand operates at scale.",
    },
    {
        title: "Strategy Associate",
        department: "Dropwing Groups",
        type: "Full-Time",
        location: "Chennai",
        description: "Embedded within client engagements, you will translate executive intent into operational playbooks. Analytical rigor and communication precision are non-negotiable.",
    },
];

const Careers = () => {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
                <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Talent</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
                            We hire for <span className="text-muted-foreground">ownership,</span><br className="hidden md:block" />
                            not output.
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Dropwing Groups operates differently. We don't hire task-executors — we build with people who
                            think in systems, take accountability, and stay embedded until outcomes are locked in.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { num: "01", title: "No Passengers", desc: "Every role requires direct ownership of outcomes. If you need to be managed into doing good work, this isn't for you." },
                        { num: "02", title: "Institutional Thinking", desc: "We build for permanence, not speed. You'll work on systems that clients depend on years after you've moved on." },
                        { num: "03", title: "Embedded, Not Peripheral", desc: "You work where the problem is. Inside the client, inside the product, inside the operation — not in a slide deck." },
                    ].map((v, i) => (
                        <motion.div
                            key={v.num}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border border-border/40 p-8 bg-background relative group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            <span className="text-xs font-mono text-muted-foreground block mb-4">{v.num}</span>
                            <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Open Roles */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">Open Positions</h2>
                    </div>
                    <div className="h-px bg-border/40 w-full" />
                </div>

                <div className="space-y-0">
                    {openRoles.map((role, i) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                            className="group border-b border-border/40 py-8 md:py-10 hover:bg-muted/5 transition-colors px-2"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/20 bg-primary/5 px-2 py-0.5">
                                            {role.department}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {role.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{role.description}</p>
                                </div>
                                <div className="flex flex-col md:items-end gap-3 shrink-0">
                                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{role.type}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" />{role.location}</span>
                                    </div>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground border border-border/40 px-5 py-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group/btn"
                                    >
                                        Apply <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Open Application */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 border border-primary/20 bg-primary/5 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-3">Don't see a fit?</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-xl">
                            We accept open applications from exceptional operators, builders, and thinkers.
                            If you have a track record and a point of view, reach out.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
                    >
                        Open Application
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
};

export default Careers;
