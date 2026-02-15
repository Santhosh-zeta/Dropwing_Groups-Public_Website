import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Server, BrainCircuit, Paintbrush, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Capabilities = () => {
    return (
        <main className="min-h-screen bg-background pt-20">
            {/* Hero Section */}
            <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-structural opacity-5 pointer-events-none" />

                <div className="max-w-4xl relative z-10">
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
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary/20 pl-6"
                    >
                        Dropwing Groups bridges the gap between institutional intent and technical reality.
                        We deploy three core capabilities to secure long-term sovereign advantage.
                    </motion.p>
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
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] border border-border/40 bg-background/50 rounded-lg overflow-hidden flex items-center justify-center group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                        <div className="text-center space-y-4 relative z-10">
                            <ShieldCheck className="w-12 h-12 text-primary mx-auto opacity-80" />
                            <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                                SYSTEM_INTEGRATION_ACTIVE
                            </div>
                            <div className="flex justify-center gap-2">
                                <span className="block w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="block w-2 h-2 rounded-full bg-primary/40" />
                                <span className="block w-2 h-2 rounded-full bg-primary/20" />
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
