import React, { useRef, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, BrainCircuit, Network, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

// --- Neural Network Component ---
const NeuralNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Configuration
    const nodeCount = 40;
    const connectionDistance = 150;
    const speed = 0.5;

    // Generate Nodes
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < nodeCount; i++) {
            temp.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                size: Math.random() * 2 + 1
            });
        }
        return temp;
    }, []);

    useAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Resize
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }

        const width = canvas.width;
        const height = canvas.height;

        ctx.fillStyle = "#000000";
        ctx.clearRect(0, 0, width, height);

        // Update & Draw Nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            ctx.beginPath();
            ctx.fillStyle = "rgba(139, 92, 246, 0.5)"; // Violet node
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fill();

            // Connections
            nodes.forEach(otherNode => {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    ctx.beginPath();
                    // Opacity based on distance
                    const opacity = 1 - (dist / connectionDistance);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.stroke();
                }
            });
        });
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
};


const SyntheticIntelligence = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.2]);
    const gridDensity = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-emerald-500/30 selection:text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* GLOBAL SYSTEM BACKGROUND */}
            <motion.div style={{ opacity: backgroundOpacity }} className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <motion.div
                    style={{ scale: gridDensity, opacity: 0.15 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#059669,transparent)]"
                />
            </motion.div>

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NeuralNetwork />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                    <div className="max-w-4xl pointer-events-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8"
                        >
                            Synthetic <br />
                            <span className="text-muted-foreground">Intelligence</span>
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 60 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                            className="h-px bg-emerald-500/40 mb-8"
                        />

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12"
                        >
                            Moving beyond "Artificial Intelligence" to engineered cognitive systems. Active reasoning, autonomous decisioning, and non-biological scale.
                        </motion.h2>
                    </div>
                </div>
            </section>

            {/* 2. WHY IT MATTERS */}
            <WhyItMatters />

            {/* 3. CORE CAPABILITIES */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="mb-16 border-l-2 border-white/10 pl-6">
                        <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-widest">
                            System Capabilities
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-4">Cognitive Domains</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <SystemModule
                            icon={<BrainCircuit className="w-6 h-6 text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />}
                            title="Cognitive Architectures"
                            desc="Designing multi-agent systems that coordinate, debate, and verify complex outputs autonomously before human review."
                        />
                        <SystemModule
                            icon={<Network className="w-6 h-6 text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />}
                            title="Agentic Workflows"
                            desc="Transforming static processes into dynamic, self-routing operational pipelines capable of handling edge cases seamlessly."
                        />
                        <SystemModule
                            icon={<Cpu className="w-6 h-6 text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />}
                            title="Predictive Synthesis"
                            desc="Forecasting structural system behaviors and generating production-ready operational models from high-dimensional data."
                        />
                        <SystemModule
                            icon={<ArrowUpRight className="w-6 h-6 text-emerald-500/80 group-hover:text-emerald-400 transition-colors" />}
                            title="Decision Automation"
                            desc="Removing human latency from critical path logic via automated execution of governance-compliant operational decisions."
                        />
                    </div>
                </div>
            </section>

            {/* 4. OPERATING PRINCIPLES */}
            <OperatingPrinciples />

            {/* 5. INTEGRATION — HANDOFF MOMENT */}
            <section className="py-32 relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-950/10 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest">Execution Partner</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Execution Through PerSyniX</h2>
                        <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
                            Strategy hands off to execution. Synthetic Intelligence is delivered through PerSyniX — our division building advanced cognitive architectures and agentic reality frameworks.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link to="/ventures/persynix" className="group/btn flex items-center gap-4 text-white border border-white/20 px-8 py-4 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                            <span className="font-mono tracking-widest uppercase text-sm relative z-10">
                                Explore PerSyniX
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 7. CTA — THE EXIT GATE */}
            <section className="py-40 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-950/10 pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <Link
                        to="/contact"
                        className="group inline-flex flex-col items-center gap-6 focus:outline-none"
                    >
                        <div className="flex items-center gap-4 text-3xl md:text-5xl font-extralight text-white group-hover:text-emerald-200 transition-colors duration-500">
                            <span>Discuss Intelligence</span>
                            <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 opacity-30 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
                        </div>
                        <p className="text-xs font-mono text-gray-700 uppercase tracking-[0.3em] group-hover:text-gray-500 transition-colors">
                            You are now leaving the system
                        </p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const WhyItMatters = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "center center"],
    });

    const opacity = useTransform(scrollYProgress, [0.6, 1], [0.3, 1]);
    const lineHeight = useTransform(scrollYProgress, [0.6, 1], ["1.8", "1.5"]);

    return (
        <section ref={ref} className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Why Cognition <br />
                            <span className="text-emerald-500/80">Determines Scale</span>
                        </h2>
                    </div>
                    <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        <p>
                            Execution shouldn’t be bottlenecked by human processing power.
                        </p>
                        <p>
                            Transitioning from static software logic to adaptive, reasoning agents fundamentally changes the velocity of strategy realization.
                        </p>

                        <motion.p
                            style={{ opacity, lineHeight }}
                            className="text-white font-medium pl-6 border-l-2 border-emerald-500"
                        >
                            AI is not a feature or a copilot. It is the new operating system of the enterprise.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SystemModule = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 group relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-emerald-400 transition-colors" />

            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {icon}
            </div>

            <h3 className="text-lg font-mono uppercase tracking-wider text-white mb-4 group-hover:text-emerald-200 transition-colors">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {desc}
            </p>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
            </div>
        </div>
    );
};

const OperatingPrinciples = () => {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 px-4 md:px-0">Core Precepts</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Principle
                        index={0}
                        title="Deterministic Guardrails"
                        shortDesc="Probability restrained."
                        elaborated="Synthetic outputs must map to deterministic systems. We engineer rigid validation layers that ensure LLM outputs are computationally safe before execution."
                    />
                    <Principle
                        index={1}
                        title="Human in the Loop (HITL)"
                        shortDesc="Strategic veto power."
                        elaborated="Agents propose, humans dispose. We design escalation paths where high-risk decisions surface to human operators with complete context and rollback ability."
                    />
                    <Principle
                        index={2}
                        title="Model Agnosticism"
                        shortDesc="Not tied to one brain."
                        elaborated="The foundation architecture allows you to swap reasoning engines at the router level, preventing lock-in to any single proprietary LLM provider."
                    />
                    <Principle
                        index={3}
                        title="Governed Memory"
                        shortDesc="Context is control."
                        elaborated="Agent memory systems—RAG, vector stores, graph databases—are engineered with strict access controls, ensuring data sovereignty is never breached by internal agents."
                    />
                </div>
            </div>
        </section>
    );
}

import { useInView } from "framer-motion";

const Principle = ({ title, shortDesc, elaborated, index }: { title: string; shortDesc: string; elaborated: string, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="group relative border-t border-white/10 pt-6 hover:border-emerald-500/50 transition-colors cursor-default min-h-[180px]"
        >
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {title}
            </h4>
            <p className="text-gray-500 text-sm leading-relaxed absolute top-14 left-0 transition-opacity duration-300 group-hover:opacity-0">
                {shortDesc}
            </p>
            <div className="absolute top-14 left-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-emerald-500/50 pl-3">
                    {elaborated}
                </p>
            </div>
        </motion.div>
    );
};

export default SyntheticIntelligence;
