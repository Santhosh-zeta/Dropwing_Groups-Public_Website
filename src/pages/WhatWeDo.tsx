import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Server, BrainCircuit, Paintbrush, ArrowUpRight, ArrowRight } from "lucide-react";

const capabilities = [
    {
        id: "digital-infrastructure",
        icon: <Server className="w-7 h-7" />,
        eyebrow: "Capability 01",
        title: "Digital Infrastructure",
        description:
            "Sovereign compute, private cloud architecture, and resilient physical systems to eliminate dependency on external providers. We design, deploy, and operate the technical foundation that institutions cannot afford to outsource.",
        features: ["Sovereign Cloud", "High-availability Architecture", "Edge & Compute Networks", "Platform Engineering"],
        color: "from-blue-500/10",
        accent: "bg-blue-500",
        border: "border-blue-500/20",
        link: "/capabilities/digital-infrastructure",
    },
    {
        id: "synthetic-intelligence",
        icon: <BrainCircuit className="w-7 h-7" />,
        eyebrow: "Capability 02",
        title: "Synthetic Intelligence",
        description:
            "Autonomous cognitive architectures that go beyond chatbots and dashboards. We build and embed agentic AI systems that make decisions, self-correct, and compound operational gains across the enterprise.",
        features: ["Agentic Workflows", "Predictive Decision Systems", "LLM Integration at Scale", "AI Governance Layers"],
        color: "from-violet-500/10",
        accent: "bg-violet-500",
        border: "border-violet-500/20",
        link: "/capabilities/synthetic-intelligence",
    },
    {
        id: "brand-sovereignty",
        icon: <Paintbrush className="w-7 h-7" />,
        eyebrow: "Capability 03",
        title: "Brand Sovereignty",
        description:
            "Identity is institutional power. We engineer strategic aesthetics, visual systems, and narrative frameworks that position an organization as an authority — not just a service provider. Brand is infrastructure.",
        features: ["Identity System Architecture", "Strategic Narrative Design", "Visual Sovereignty", "Institutional Positioning"],
        color: "from-emerald-500/10",
        accent: "bg-emerald-500",
        border: "border-emerald-500/20",
        link: "/capabilities/brand-sovereignty",
    },
];

const ventures = [
    { name: "WebForge", category: "Digital Infrastructure", desc: "Full-stack engineering & platform systems", href: "/ventures/webforge" },
    { name: "Design Studio", category: "Brand Sovereignty", desc: "Strategic identity & visual systems", href: "/ventures/design-studio" },
    { name: "PerSyniX", category: "Synthetic Intelligence", desc: "AI workflows & cognitive architectures", href: "/ventures/persynix" },
    { name: "Grovia", category: "Agricultural Intelligence", desc: "Precision agriculture & market execution", href: "/ventures/grovia" },
    { name: "Elevix Pro", category: "Vertical Mobility", desc: "Urban air mobility infrastructure", href: "/ventures/elevix-pro" },
];

const WhatWeDo = () => {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative bg-structural text-structural-foreground pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden border-b border-white/5">
                {/* Subtle grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

                <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">Operational Model</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
                            We build. <span className="text-muted-foreground">We operate.</span><br className="hidden md:block" />
                            We govern.
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Dropwing Groups deploys three integrated capabilities across a portfolio of specialized ventures.
                            Each engagement is structured for ownership — not dependency.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/capabilities"
                                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
                            >
                                View Capabilities
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/10 text-sm font-bold tracking-widest uppercase text-foreground/80 hover:text-foreground hover:border-white/30 transition-all rounded-sm"
                            >
                                Engage
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-32">
                <div className="mb-16">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-3">Core Capabilities</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Three pillars. One operating system.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                to={cap.link}
                                className={`group block h-full border ${cap.border} bg-gradient-to-b ${cap.color} to-background/0 p-8 hover:border-primary/40 transition-all duration-300 relative overflow-hidden rounded-sm`}
                            >
                                {/* Top accent line on hover */}
                                <div className={`absolute top-0 left-0 right-0 h-0.5 ${cap.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                                <div className="text-muted-foreground group-hover:text-foreground transition-colors mb-5">{cap.icon}</div>

                                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">{cap.eyebrow}</p>
                                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{cap.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{cap.description}</p>

                                <ul className="space-y-2 border-t border-border/30 pt-6 mb-6">
                                    {cap.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                                            <span className={`w-1 h-1 rounded-full ${cap.accent}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                                    Deep Dive <ArrowUpRight className="w-3.5 h-3.5" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Ventures */}
            <section className="border-t border-border/40 bg-muted/5">
                <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 py-24 md:py-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-3">Portfolio</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Specialized ventures.</h2>
                        </div>
                        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                            Each venture delivers a specific capability domain. Together they form an integrated execution layer — coordinated through Dropwing Groups' operating framework.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {ventures.map((v, i) => (
                            <motion.div
                                key={v.name}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                            >
                                <Link
                                    to={v.href}
                                    className="group flex flex-col justify-between h-full p-6 border border-border/40 bg-background hover:border-primary/40 hover:bg-muted/10 transition-all duration-300 rounded-sm"
                                >
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">{v.category}</p>
                                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{v.name}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore <ArrowUpRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Gate */}
            <section className="border-t border-border/40 py-32 text-center">
                <div className="mx-auto max-w-2xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="h-px w-12 bg-primary/40" />
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Next Step</span>
                            <div className="h-px w-12 bg-primary/40" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                            Execution requires<br /><span className="text-muted-foreground">a conversation.</span>
                        </h2>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            Engagements begin with a confidential briefing. Submit your strategic objective and we'll assess alignment.
                        </p>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
                        >
                            Initiate Engagement
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default WhatWeDo;
