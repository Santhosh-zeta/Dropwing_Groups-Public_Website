import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import MainLayout from '@/components/MainLayout';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const DesignStudio = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.05, 0.15]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div
                    style={{ opacity: gridOpacity }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
                />
            </div>

            <div className="relative z-10">
                {/* SECTION 1 — HERO */}
                <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <div className="max-w-4xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
                        >
                            Design as Infrastructure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-xl md:text-2xl text-muted-foreground font-mono"
                        >
                            Dropwing Design Studio<br />
                            Design systems for institutions, not campaigns.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-sm font-mono text-muted-foreground/60"
                    >
                        Identity, communication, and visual control for long-term organizations.
                    </motion.div>
                </section>

                {/* SECTION 2 — WHAT DESIGN MEANS HERE */}
                <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 gap-12">
                        <div className="space-y-4">
                            <h2 className="text-sm font-mono text-muted-foreground mb-8">Not Aesthetics. Control.</h2>
                            {["Design is decision-making.", "Visuals enforce hierarchy.", "Consistency builds trust.", "Noise erodes authority."].map((text, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0.3 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ margin: "-20% 0px -20% 0px" }}
                                    className="text-4xl md:text-6xl font-bold tracking-tight"
                                >
                                    {text}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — DESIGN DOMAINS */}
                <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <h2 className="text-sm font-mono text-muted-foreground mb-16">What the Studio Owns</h2>
                    <div className="grid grid-cols-1 border-t border-border">
                        {[
                            { title: "Brand Identity Systems", desc: "So the organization looks the same even when people change." },
                            { title: "Communication & Messaging Architecture", desc: "Verbal consistency across all institutional layers." },
                            { title: "Visual Governance (Templates, Controls)", desc: "Enforcing hierarchy through unbreaking rules." },
                            { title: "Campaign Systems (Not campaigns)", desc: "Structures that allow others to execute campaigns." },
                            { title: "Long-Horizon Brand Stewardship", desc: "Protecting the asset from entropy over decades." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="initial"
                                whileHover="hover"
                                className="group border-b border-border py-8 flex flex-col md:flex-row md:items-baseline relative overflow-hidden"
                            >
                                <motion.div
                                    variants={{ initial: { opacity: 0, height: 0 }, hover: { opacity: 1, height: '100%' } }}
                                    className="absolute left-0 top-0 w-1 bg-primary"
                                />
                                <h3 className="text-2xl md:text-3xl font-bold md:w-1/2 group-hover:translate-x-4 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground mt-2 md:mt-0 font-mono text-sm md:w-1/2 group-hover:text-foreground transition-colors duration-300">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 — HOW DESIGN IS BUILT */}
                <section className="py-24 px-6 md:px-12 lg:px-24 bg-muted/20">
                    <div className="max-w-screen-2xl mx-auto">
                        <h2 className="text-sm font-mono text-muted-foreground mb-16">Systems, Not Artifacts</h2>

                        <div className="space-y-12">
                            {[
                                { title: "System First", outcome: "No asset is designed without its lifecycle defined." },
                                { title: "No One-Offs", outcome: "Everything must be repeatable by someone else." },
                                { title: "Governance Over Taste", outcome: "Decisions are documented, not argued." }
                            ].map((principle, i) => (
                                <div key={i} className="flex flex-col md:flex-row border-t border-dashed border-border pt-6 items-start md:items-center">
                                    <span className="text-xs font-mono text-muted-foreground/50 mr-8">0{i + 1}</span>
                                    <h3 className="text-xl font-bold w-full md:w-1/3 mb-2 md:mb-0">{principle.title}</h3>
                                    <p className="font-mono text-muted-foreground text-sm w-full md:w-2/3">{principle.outcome}</p>
                                </div>
                            ))}
                            <div className="border-t border-dashed border-border"></div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5 — PROOF WITHOUT PORTFOLIO */}
                <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <h2 className="text-sm font-mono text-muted-foreground mb-16">Design That Holds</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">No Dribbble. No Behance. No Mockups.</h3>
                            <p className="text-muted-foreground font-mono">
                                Our work isn't for likes. It's for longevity. <br />
                                We build systems that survive without us.
                            </p>
                        </div>
                        <div className="space-y-8 font-mono border-l-2 border-primary/20 pl-8">
                            {[
                                "Multi-year brand systems",
                                "Institutional communications",
                                "Cross-team design consistency",
                                "Governance templates"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-10%" }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-lg"
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — RELATIONSHIP MODEL */}
                <section className="min-h-[80vh] flex flex-col justify-center py-24 px-6 md:px-12 lg:px-24 bg-foreground text-background">
                    <div className="max-w-screen-xl mx-auto w-full">
                        <h2 className="text-sm font-mono text-muted-foreground/80 mb-24">We Stay With the Brand</h2>

                        <div className="space-y-24">
                            <motion.div
                                initial={{ opacity: 0.5 }}
                                whileInView={{ opacity: 1, fontWeight: 700 }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                className="text-4xl md:text-6xl font-light transition-all duration-700"
                            >
                                Brands degrade without stewardship.
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0.5 }}
                                whileInView={{ opacity: 1, fontWeight: 700 }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                className="text-4xl md:text-6xl font-light transition-all duration-700"
                            >
                                Design is not done at launch.
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0.5 }}
                                whileInView={{ opacity: 1, fontWeight: 700 }}
                                viewport={{ margin: "-20% 0px -20% 0px" }}
                                className="text-4xl md:text-6xl font-light transition-all duration-700"
                            >
                                We remain custodians.
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — CONNECTION TO DROPWING */}
                <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <h2 className="text-sm font-mono text-muted-foreground mb-16">Why Design Lives Inside Dropwing</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 text-right md:pr-12 border-r border-border/50"
                        >
                            <h3 className="text-2xl font-bold mb-4">Strategy Intent</h3>
                            <p className="text-muted-foreground font-mono">
                                Design Studio aligns with strategy, tech, and execution.
                                It does not operate alone.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 md:pl-12"
                        >
                            <h3 className="text-2xl font-bold mb-4">Visual Enforcement</h3>
                            <p className="text-muted-foreground font-mono">
                                Is part of the same governance system.
                                There is no misalignment.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 100 }}
                        viewport={{ margin: "-10%" }}
                        className="w-px bg-primary mx-auto mt-12 mb-24"
                    />
                </section>

                {/* SECTION 8 — THE GATE */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-sm font-mono text-muted-foreground mb-8">Discuss Design Stewardship</h2>

                    <a href="/contact" className="group">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 group-hover:tracking-tight transition-all duration-500">
                            Enter Responsibility
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-muted-foreground font-mono group-hover:text-primary transition-colors">
                            <span>They will protect my brand</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                </section>
            </div>
        </div>
    );
};

export default DesignStudio;
