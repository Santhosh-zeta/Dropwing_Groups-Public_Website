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

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-violet-500/30 selection:text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* GLOBAL BACKGROUND */}
            <motion.div style={{ opacity: backgroundOpacity }} className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-200px,#3b0764,transparent)] opacity-20" />
            </motion.div>

            {/* 1. HERO */}
            <section className="relative h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <NeuralNetwork />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
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
                            className="h-px bg-violet-500/40 mb-8"
                        />

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12"
                        >
                            Moving beyond "Artificial Intelligence" to engineered cognitive systems.
                            Active reasoning, autonomous decisioning, and non-biological scale.
                        </motion.h2>
                    </div>
                </div>
            </section>

            {/* 2. CORE CAPABILITIES */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="mb-16 border-l-2 border-white/10 pl-6">
                        <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-widest">
                            System Capabilities
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-4">Cognitive Domains</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative p-8 bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors duration-500">
                            <BrainCircuit className="w-8 h-8 text-violet-500 mb-6 opacity-80 group-hover:opacity-100" />
                            <h3 className="text-xl font-bold text-white mb-3">Predictive Modeling</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Forecasting complex system behaviors using high-dimensional data intake. Moving from reactive analysis to proactive shaping.
                            </p>
                            <div className="h-px w-full bg-white/5 group-hover:bg-violet-500/20 transition-colors" />
                        </div>

                        {/* Card 2 */}
                        <div className="group relative p-8 bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors duration-500">
                            <Network className="w-8 h-8 text-violet-500 mb-6 opacity-80 group-hover:opacity-100" />
                            <h3 className="text-xl font-bold text-white mb-3">Decision Automation</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Removing human latency from critical path logic. Autonomous execution of governance-compliant operational decisions.
                            </p>
                            <div className="h-px w-full bg-white/5 group-hover:bg-violet-500/20 transition-colors" />
                        </div>

                        {/* Card 3 */}
                        <div className="group relative p-8 bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors duration-500">
                            <Cpu className="w-8 h-8 text-violet-500 mb-6 opacity-80 group-hover:opacity-100" />
                            <h3 className="text-xl font-bold text-white mb-3">Generative Synthesis</h3>
                            <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                Creation of production-ready assets—code, documentation, structural design—validated against strict institutional constraints.
                            </p>
                            <div className="h-px w-full bg-white/5 group-hover:bg-violet-500/20 transition-colors" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SyntheticIntelligence;
