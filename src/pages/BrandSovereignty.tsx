import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, DraftingCompass, Fingerprint, MessageSquareQuote } from "lucide-react";
import { Link } from "react-router-dom";

// --- The Lattice Component (Hero Visual) ---
const LatticeField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Lattice Configuration
    const pointCount = 80;
    const connectionDist = 120;
    const speed = 0.3;

    // Generate Points
    const points = useMemo(() => {
        const temp = [];
        for (let i = 0; i < pointCount; i++) {
            temp.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                phase: Math.random() * Math.PI * 2
            });
        }
        return temp;
    }, []);

    useAnimationFrame((time) => {
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

        // Update Points
        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Crystal Pulse
            const pulse = (Math.sin(time / 1000 + p.phase) + 1) / 2;
            const size = 1 + pulse;

            // Draw Point
            ctx.fillStyle = `rgba(167, 139, 250, ${0.4 + pulse * 0.4})`; // Violet-400
            ctx.beginPath();
            ctx.rect(p.x - size / 2, p.y - size / 2, size, size); // Square points for "structure" feel
            ctx.fill();

            // Connections
            points.forEach(p2 => {
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    ctx.beginPath();
                    const opacity = 1 - (dist / connectionDist);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.15})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });
        });
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />;
};

const BrandSovereignty = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground font-sans selection:bg-violet-500/30 selection:text-white overflow-hidden">
            <Navbar />

            {/* 1. HERO - THE CONSTRUCT */}
            <section className="relative h-screen flex items-center pt-20 overflow-hidden border-b border-white/5">
                {/* Background Animation */}
                <div className="absolute inset-0 z-0">
                    <LatticeField />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        style={{ opacity: headerOpacity, y: heroY }}
                        className="max-w-4xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-12 bg-violet-500" />
                            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
                                Capability Domain 03
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8"
                        >
                            Identity as <br />
                            <span className="text-muted-foreground">Infrastructure.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-violet-500/20 pl-6"
                        >
                            We do not design logos. We engineer authority.
                            Constructing the visual and narrative dominance required for sovereign institutions.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. THE MANIFESTO */}
            <section className="py-32 relative z-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                Perception is <span className="text-violet-500">Governance</span>.
                            </h2>
                            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                                <p>
                                    In high-stakes environments, how an entity is perceived determines its ability to operate.
                                    Ambiguity is a liability. Inconsistency is a weakness.
                                </p>
                                <p>
                                    We treat brand identity as a piece of critical infrastructure—rigid, scalable, and built to withstand adversarial scrutiny.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent rounded-lg border border-white/5" />
                            <div className="relative p-8 md:p-12 space-y-8">
                                <Quote
                                    text="A sovereign entity does not ask for attention. It commands presence."
                                    author="Institutional Design Protocol"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITY TRINITY */}
            <section className="py-20 md:py-32 bg-white/5 relative border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                            The Trinity
                        </span>
                        <h2 className="text-3xl font-bold text-white">Core Competencies</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                        <ServiceCard
                            icon={<Fingerprint className="w-8 h-8" />}
                            title="Strategic Identity"
                            description="Defining the immutable core of the institution. Visual systems that convey permanence, weight, and absolute clarity."
                        />
                        <ServiceCard
                            icon={<DraftingCompass className="w-8 h-8" />}
                            title="System Design"
                            description="Scalable design languages that enforce consistency across every touchpoint—from digital verify interfaces to physical signage."
                        />
                        <ServiceCard
                            icon={<MessageSquareQuote className="w-8 h-8" />}
                            title="Narrative Control"
                            description="Crafting the foundational texts and verbal architecture that define the entity's history, mission, and future to the market."
                        />
                    </div>
                </div>
            </section>

            {/* 4. EXECUTION ARM */}
            <section className="py-32 relative overflow-hidden group">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-violet-900/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-xs font-mono text-violet-300 uppercase tracking-widest">Execution Partner</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Execution Through Design Studio</h2>
                        <p className="text-gray-400 leading-relaxed max-w-lg mb-8">
                            Brand Sovereignty is delivered through Dropwing Design Studio—our specialized division for high-fidelity institutional aesthetics.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link to="/ventures/design-studio" className="group/btn flex items-center gap-4 text-white border border-white/20 px-8 py-4 bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                            <span className="font-mono tracking-widest uppercase text-sm relative z-10">
                                Enter Design Studio
                            </span>
                            <ArrowUpRight className="w-5 h-5 text-violet-400 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const Quote = ({ text, author }: { text: string; author: string }) => (
    <div className="border-l-2 border-violet-500 pl-6">
        <p className="text-2xl md:text-3xl font-light text-white leading-tight mb-4 italic">
            "{text}"
        </p>
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
            — {author}
        </p>
    </div>
);

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-background p-10 group hover:bg-white/5 transition-colors duration-500">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 text-gray-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-colors duration-500">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
            {description}
        </p>
    </div>
);

export default BrandSovereignty;
