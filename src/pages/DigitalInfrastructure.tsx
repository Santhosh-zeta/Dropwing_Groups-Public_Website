import React, { useRef, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, ShieldCheck, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// --- WarpField Component ---
const WarpField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Configuration
    const starCount = 600;
    const speed = 2.5; // Constant Warp Speed

    // Generate Stars (Geometry)
    // Points are stored as [x, y, z] where z is depth (0 to 1000)
    const stars = useMemo(() => {
        const temp = [];
        for (let i = 0; i < starCount; i++) {
            temp.push({
                x: (Math.random() - 0.5) * 2000,
                y: (Math.random() - 0.5) * 2000,
                z: Math.random() * 1000,
                baseSize: Math.random() * 2 + 0.5
            });
        }
        return temp;
    }, []);

    useAnimationFrame(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Resize Canvas to Match Parent
        // In a real optimized system, this would be debounced
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }

        const width = canvas.width;
        const height = canvas.height;
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.fillStyle = "#000000"; // Clear with strict black to avoid trails stacking poorly
        ctx.clearRect(0, 0, width, height);

        // Core Warp Logic
        stars.forEach(star => {
            // Move Star Towards Camera
            star.z -= speed;

            // Reset Logic (Loop)
            if (star.z <= 0) {
                star.z = 1000;
                star.x = (Math.random() - 0.5) * 2000;
                star.y = (Math.random() - 0.5) * 2000;
            }

            // Projection Math (3D -> 2D)
            const fov = 400; // Field of View
            const scale = fov / (fov + star.z);

            const x2d = star.x * scale + centerX;
            const y2d = star.y * scale + centerY;

            // Size based on depth (get bigger as they get close)
            const size = star.baseSize * scale * 2;

            // Opacity based on depth (fade in from far, fade out if too close)
            // Near = 0, Far = 1000.  We want bright at near, dim at far.
            const opacity = Math.min(1, (1000 - star.z) / 400);

            // Draw Star (Simple Circle or Line for streak)
            // For Warp Effect, streaks look better than dots
            const trailLength = (1 - scale) * 20; // Streaks get longer at edges (closer)

            ctx.beginPath();
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`; // Blue-500 tint
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />;
};


const DigitalInfrastructure = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Custom Smooth Scroll for "System Depth" feel
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // System State Variables
    const backgroundOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.2]); // Fade to black at end
    const gridDensity = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]); // TIGHTER grid deeper down

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-violet-500/30 selection:text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* GLOBAL SYSTEM BACKGROUND */}
            <motion.div style={{ opacity: backgroundOpacity }} className="fixed inset-0 z-0 pointer-events-none">
                {/* Base Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Deep System Grid Layer - Reacts to Scroll Density */}
                <motion.div
                    style={{ scale: gridDensity, opacity: 0.1 }}
                    className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#172554,transparent)]"
                />
            </motion.div>


            {/* 1. HERO SECTION — Infrastructure as Sovereignty (Now WarpField) */}
            <section className="relative h-screen flex items-center pt-20 overflow-hidden">
                {/* Visual System - Warp Field */}
                <div className="absolute inset-0 z-0">
                    <WarpField />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pointer-events-none"> {/* Text non-interactive to let mouse move camera */}
                    <div className="max-w-4xl pointer-events-auto"> {/* Re-enable events for text selection */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8"
                        >
                            Infrastructure <br />
                            <span className="text-muted-foreground">as Sovereignty</span>
                        </motion.h1>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 60 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                            className="h-px bg-blue-500/40 mb-8"
                        />

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12"
                        >
                            Owning the infrastructure, the network, and the data that power mission-critical systems.
                        </motion.h2>
                    </div>
                </div>
            </section>

            {/* 2. WHY IT MATTERS — THE WEIGHT MOMENT */}
            <WhyItMatters />

            {/* 3. CAPABILITY GRID — SYSTEM MODULES */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="mb-16 border-l-2 border-white/10 pl-6">
                        <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-widest">
                            System Capabilities
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-4">Core Infrastructure Domains</h2>
                    </div>

                    <TooltipProvider delayDuration={0}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <SystemModule
                                icon={<ShieldCheck className="w-6 h-6 text-blue-500/80 group-hover:text-blue-400 transition-colors" />}
                                title="High-Performance Compute"
                                desc="Architecting compute environments for simulation, analytics, and intensive workloads where performance ceilings matter."
                            />
                            <SystemModule
                                icon={<ArrowUpRight className="w-6 h-6 text-blue-500/80 group-hover:text-blue-400 transition-colors" />}
                                title="Private & Hybrid Cloud"
                                desc="Designing cloud environments optimized for control, cost governance, and regulatory alignment across public and private infrastructure."
                            />
                            <SystemModule
                                icon={<Info className="w-6 h-6 text-blue-500/80 group-hover:text-blue-400 transition-colors" />}
                                title="Edge & Distributed Systems"
                                desc="Infrastructure designed to operate closer to data sources, enabling low-latency execution and regional autonomy."
                            />
                            <SystemModule
                                icon={<ShieldCheck className="w-6 h-6 text-blue-500/80 group-hover:text-blue-400 transition-colors" />}
                                title="Secure & Cyber-Physical"
                                desc="Infrastructure that bridges digital systems with physical operations, designed for safety, observability, and resilience."
                            />
                        </div>
                    </TooltipProvider>
                </div>
            </section>

            {/* 4. OPERATING PRINCIPLES — EXECUTION LAW */}
            <OperatingPrinciples />

            {/* 5. INTEGRATION — HANDOFF MOMENT */}
            <section className="py-32 relative overflow-hidden group">
                {/* Background Handoff Shift */}
                <div className="absolute inset-0 bg-blue-950/10 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xs font-mono text-blue-300 uppercase tracking-widest">Execution Partner</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Execution Through WebForge Engineering</h2>
                        <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
                            Strategy hands off to execution. Digital Infrastructure is delivered through WebForge — our engineering division responsible for building and operating large-scale systems.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link to="/ventures/webforge" className="group/btn flex items-center gap-4 text-white border border-white/20 px-8 py-4 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                            <span className="font-mono tracking-widest uppercase text-sm relative z-10">
                                Explore WebForge
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                        </Link>
                    </div>
                </div>
            </section>



            {/* 7. CTA — THE EXIT GATE */}
            <section className="py-40 bg-black relative overflow-hidden">
                {/* Deep Exit Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/10 pointer-events-none" />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <Link
                        to="/contact"
                        className="group inline-flex flex-col items-center gap-6 focus:outline-none"
                    >
                        <div className="flex items-center gap-4 text-3xl md:text-5xl font-extralight text-white group-hover:text-blue-200 transition-colors duration-500">
                            <span>Discuss Infrastructure</span>
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

    const opacity = useTransform(scrollYProgress, [0.6, 1], [0.3, 1]); // Locks to 100%
    const lineHeight = useTransform(scrollYProgress, [0.6, 1], ["1.8", "1.5"]); // Tightens

    return (
        <section ref={ref} className="py-32 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                            Why Infrastructure <br />
                            <span className="text-blue-500/80">Determines Power</span>
                        </h2>
                    </div>
                    <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                        <p>
                            Infrastructure is invisible when it works — and catastrophic when it doesn’t.
                        </p>
                        <p>
                            Decisions made at the infrastructure layer define an organization’s ability to scale, adapt, and survive disruption.
                        </p>

                        {/* THE WEIGHT MOMENT */}
                        <motion.p
                            style={{ opacity, lineHeight }}
                            className="text-white font-medium pl-6 border-l-2 border-blue-500"
                        >
                            Digital infrastructure is not an IT concern. It is an institutional one.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SystemModule = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
    return (
        <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-blue-400 transition-colors" />

            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                {icon}
            </div>

            <h3 className="text-lg font-mono uppercase tracking-wider text-white mb-4 group-hover:text-blue-200 transition-colors">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {desc}
            </p>
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
            </div>
        </div>
    );
};

const OperatingPrinciples = () => {
    return (
        <section className="py-32 relative z-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-16 px-4 md:px-0">How We Operate</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Principle
                        index={0}
                        title="Ownership First"
                        shortDesc="Control never abstracted."
                        elaborated="We reject black-box abstractions. Every node, gateway, and key is provisioned directly in your institution's name, ensuring legal and technical sovereignty from day one."
                    />
                    <Principle
                        index={1}
                        title="Audit-Ready"
                        shortDesc="Inspected at any time."
                        elaborated="Our architecture is self-documenting. Auditors can trace every permission, change, and data flow without requiring provider intervention or translation layers."
                    />
                    <Principle
                        index={2}
                        title="Continuity"
                        shortDesc="A living system."
                        elaborated="Deployment is just the beginning. We install 'The Silent Engine'—automated drift checks and self-healing protocols that keep infrastructure aligned with policy forever."
                    />
                    <Principle
                        index={3}
                        title="Risk-Free Exit"
                        shortDesc="You keep the keys."
                        elaborated="No vendor lock-in. We build with standard primitives. If you leave, you keep the keys, the code, and the data. We just hand over the administration rights."
                    />
                </div>
            </div>
        </section>
    );
}

const Principle = ({ title, shortDesc, elaborated, index }: { title: string; shortDesc: string; elaborated: string, index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="group relative border-t border-white/10 pt-6 hover:border-blue-500/50 transition-colors cursor-default min-h-[180px]"
        >
            <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {title}
            </h4>

            {/* Short Description (Visible by default, fades out on hover) */}
            <p className="text-gray-500 text-sm leading-relaxed absolute top-14 left-0 transition-opacity duration-300 group-hover:opacity-0">
                {shortDesc}
            </p>

            {/* Elaborated Text (Hidden by default, fades in and slides up on hover) */}
            <div className="absolute top-14 left-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-blue-500/50 pl-3">
                    {elaborated}
                </p>
            </div>
        </motion.div>
    );
};



export default DigitalInfrastructure;
