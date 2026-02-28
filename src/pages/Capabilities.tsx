import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, BrainCircuit, Paintbrush, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Capabilities = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Hero Section — Two column: text left, animated visual right */}
            <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-structural opacity-5 pointer-events-none" />

                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left: Text content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-xs font-mono text-primary uppercase tracking-widest">
                                System Capabilities
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-8"
                        >
                            Operational <br className="hidden md:block" />
                            <span className="text-muted-foreground">Capacity.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary/20 pl-6"
                        >
                            Dropwing Groups bridges the gap between institutional intent and technical reality.
                            We deploy three core capabilities to secure long-term sovereign advantage.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-10 flex items-center gap-4"
                        >
                            <Link to="/contact" className="group inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 text-sm font-bold tracking-widest uppercase text-foreground hover:bg-primary/20 hover:border-primary transition-all duration-300">
                                Engage Capabilities
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Animated capability diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="hidden lg:flex flex-col gap-4 relative"
                    >
                        {/* Vertical connector rail */}
                        <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-emerald-500/30" />

                        {[
                            { icon: <Server className="w-5 h-5" />, label: "Digital Infrastructure", tag: "Layer 01", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/5", pulse: "bg-blue-500" },
                            { icon: <BrainCircuit className="w-5 h-5" />, label: "Synthetic Intelligence", tag: "Layer 02", color: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/5", pulse: "bg-violet-500" },
                            { icon: <Paintbrush className="w-5 h-5" />, label: "Brand Sovereignty", tag: "Layer 03", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/5", pulse: "bg-emerald-500" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                                className={`flex items-center gap-5 pl-4 pr-6 py-5 border ${item.border} ${item.bg} rounded-sm relative group hover:border-opacity-60 transition-all duration-300 ml-4`}
                            >
                                {/* Node dot on the rail */}
                                <div className={`absolute left-[-20px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${item.pulse} ring-2 ring-offset-2 ring-offset-background ring-current opacity-70`} />

                                <div className={`${item.color} shrink-0`}>{item.icon}</div>
                                <div className="flex-1">
                                    <div className="text-xs font-mono text-muted-foreground mb-1">{item.tag}</div>
                                    <div className="font-bold text-foreground text-sm tracking-wide">{item.label}</div>
                                </div>
                                <motion.div
                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                    transition={{ repeat: Infinity, duration: 2 + i * 0.5, ease: "easeInOut" }}
                                    className={`w-2 h-2 rounded-full ${item.pulse}`}
                                />
                            </motion.div>
                        ))}

                        {/* Status footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="ml-4 mt-2 flex items-center gap-3 text-[10px] font-mono text-muted-foreground uppercase tracking-widest"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            All systems operational
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Capability Grid */}
            <section className="px-6 md:px-12 lg:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Digital Infrastructure */}
                    <CapabilityCard
                        to="/capabilities/digital-infrastructure"
                        icon={<Server className="w-8 h-8" />}
                        title="Digital Infrastructure"
                        description="Sovereign compute, private cloud architecture, and resilient physical systems designed for absolute control."
                        features={["High-Performance Compute", "Private Cloud", "Edge Systems"]}
                        delay={0.1}
                    />
                    {/* Card 2: Synthetic Intelligence */}
                    <CapabilityCard
                        to="/capabilities/synthetic-intelligence"
                        icon={<BrainCircuit className="w-8 h-8" />}
                        title="Synthetic Intelligence"
                        description="Autonomous cognitive architectures and predictive systems that operate beyond human latency."
                        features={["Predictive Modeling", "Decision Automation", "Generative Synthesis"]}
                        delay={0.2}
                    />
                    {/* Card 3: Brand Sovereignty */}
                    <CapabilityCard
                        to="/capabilities/brand-sovereignty"
                        icon={<Paintbrush className="w-8 h-8" />}
                        title="Brand Sovereignty"
                        description="Strategic aesthetics and narrative dominance. Constructing the visual and psychological authority of the institution."
                        features={["Identity Systems", "Strategic Aesthetics", "Narrative Control"]}
                        delay={0.3}
                    />
                </div>
            </section>

            {/* Integration/Approach Section */}
            <section className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-border/40 bg-muted/5 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] -z-10" />

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold mb-6 text-foreground"
                        >
                            Integrated Execution.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground leading-relaxed mb-8 text-lg"
                        >
                            These capabilities are not isolated products. They are integrated layers of a single operating model.
                            Infrastructure powers Intelligence. Intelligence informs Brand. Brand defines Authority.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <span className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest">
                                    Engage Capabilities
                                </span>
                            </Link>
                            <Link to="/who-we-are">
                                <span className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest">
                                    Our Approach
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Animated cascade integration diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative border border-border/40 bg-background/50 rounded-lg overflow-hidden p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                        <div className="relative z-10 space-y-3">
                            {[
                                { label: "Infrastructure", sub: "Compute · Network · Storage", color: "border-blue-500/50 bg-blue-500/5", dot: "bg-blue-500" },
                                { label: "Intelligence", sub: "Models · Workflows · Decisions", color: "border-violet-500/50 bg-violet-500/5", dot: "bg-violet-500" },
                                { label: "Brand", sub: "Identity · Narrative · Authority", color: "border-emerald-500/50 bg-emerald-500/5", dot: "bg-emerald-500" },
                            ].map((layer, i) => (
                                <div key={layer.label}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        className={`flex items-center justify-between px-5 py-4 border ${layer.color} rounded-sm`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 + i * 0.4 }} className={`w-2 h-2 rounded-full ${layer.dot}`} />
                                            <span className="text-sm font-bold text-foreground">{layer.label}</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-muted-foreground">{layer.sub}</span>
                                    </motion.div>
                                    {i < 2 && (
                                        <div className="flex justify-center py-1">
                                            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }} className="w-px h-4 bg-primary/30" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest border-t border-border/30 mt-4">
                                <ShieldCheck className="w-3 h-3 text-primary" />
                                Single Integrated Operating Model
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

interface CapabilityCardProps {
    to: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    delay: number;
}

const CapabilityCard = ({ to, icon, title, description, features, delay }: CapabilityCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="h-full"
    >
        <Link to={to} className="group block h-full bg-background border border-border/40 p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out" />

            <div className="mb-6 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                {icon}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 group-hover:text-muted-foreground/80 flex-grow">{description}</p>

            <ul className="space-y-3 border-t border-border/40 pt-6 mt-auto">
                {features.map((f, i) => (
                    <li key={i} className="text-xs font-mono text-muted-foreground/80 flex items-center group-hover:text-muted-foreground transition-colors">
                        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2 group-hover:bg-primary transition-colors delay-100" />
                        {f}
                    </li>
                ))}
            </ul>

            <div className="absolute bottom-6 right-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                <ArrowUpRight className="w-5 h-5 text-primary" />
            </div>
        </Link>
    </motion.div>
)

export default Capabilities;
