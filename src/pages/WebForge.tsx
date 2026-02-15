import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowDown, Check, Terminal, Shield, Cpu, Activity, Server, Lock } from "lucide-react";

// --- The Engine Room Component ---
const EngineRoom = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rotationSpeed = 0.0002; // Very slow rotation

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
        const centerX = width / 2;
        const centerY = height / 2;

        ctx.fillStyle = "#000000"; // Deep black
        ctx.clearRect(0, 0, width, height);

        // Core Rotator System
        // Three concentric rings, very subtle
        // Ring 1
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * rotationSpeed);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        ctx.setLineDash([50, 150]); // Dashed "rails"
        ctx.beginPath();
        ctx.arc(0, 0, 300, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Ring 2 (Counter-rotate)
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(-time * rotationSpeed * 0.5);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.setLineDash([20, 20]);
        ctx.beginPath();
        ctx.arc(0, 0, 500, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Static Rails (Grid)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.lineWidth = 1;

        // Vertical Rails
        for (let x = centerX % 100; x < width; x += 100) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Horizontal Rails
        for (let y = centerY % 100; y < height; y += 100) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />;
};

const WebForge = () => {
    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
            <Navbar />

            {/* 1. HERO — THE ENGINE ROOM */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
                <EngineRoom />
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }} // Slow entry
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-white mb-6">
                            WebForge
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide max-w-2xl mx-auto mb-12">
                            Execution, without compromise.
                        </p>
                        <div className="flex justify-center">
                            <span className="text-xs font-mono text-gray-600 uppercase tracking-[0.3em] border border-white/10 px-4 py-2 rounded-sm">
                                Production Systems Only
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. EXECUTION DOMAINS — THE RAILS */}
            <section className="py-32 relative bg-black">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-20 border-l border-white/20 pl-6">
                        <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Responsibility Zones</h2>
                        <h3 className="text-3xl text-white font-bold">What WebForge Owns</h3>
                    </div>

                    <div className="space-y-px bg-white/10 border-y border-white/10">
                        <DomainRow
                            title="Platform Engineering"
                            desc="Internal developer platforms (IDP), CI/CD pipelines, and infrastructure automation."
                            icon={<Server className="w-5 h-5" />}
                        />
                        <DomainRow
                            title="Mission-Critical Infrastructure"
                            desc="High-availability (99.99%+) system architecture and global distribution networks."
                            icon={<Activity className="w-5 h-5" />}
                        />
                        <DomainRow
                            title="Applied Intelligence"
                            desc="Integration of deterministic AI models into operational workflows."
                            icon={<Cpu className="w-5 h-5" />}
                        />
                        <DomainRow
                            title="Security & Governance"
                            desc="Zero-trust architecture, compliance enforcement, and audit-ready logging."
                            icon={<Shield className="w-5 h-5" />}
                        />
                        <DomainRow
                            title="Long-Term Operations"
                            desc="Sustained reliability engineering (SRE) and drift management."
                            icon={<Lock className="w-5 h-5" />}
                        />
                    </div>
                </div>
            </section>

            {/* 3. HOW WEBFORGE BUILDS — THE BLUEPRINT */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5 relative">
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

                <div className="container mx-auto px-6">
                    <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Engineering Standard</h2>
                            <h3 className="text-3xl text-white font-bold">Production-First</h3>
                        </div>
                        <div className="text-right hidden md:block">
                            <span className="text-xs font-mono text-gray-600">REF: ENG-STD-2026</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <Principle
                            num="01"
                            title="No Black Boxes"
                            text="Every line of code is owned, documented, and transferable. We do not build dependencies on proprietary magic."
                        />
                        <Principle
                            num="02"
                            title="Reproducibility"
                            text="Infrastructure is defined as code. Environments can be destroyed and rebuilt in minutes, not days."
                        />
                        <Principle
                            num="03"
                            title="Observability"
                            text="Systems are born with telemetry. We do not guess why a failure occurred; the system tells us."
                        />
                    </div>
                </div>
            </section>

            {/* 4. THE STRATEGIC LINK — INTEGRATION */}
            <IntegrationSection />

            {/* 5. PROOF WITHOUT FLEX — THE LOGS */}
            <section className="py-32 bg-black border-b border-white/5">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Deployment Registry</h2>

                    <div className="space-y-4 font-mono text-sm text-gray-400">
                        <div className="p-4 border border-dashed border-white/10 rounded-sm bg-white/[0.01]">
                            <span className="text-green-500 mr-4">● ACTIVE</span>
                            National-Scale Identity Platform [Government Sector]
                        </div>
                        <div className="p-4 border border-dashed border-white/10 rounded-sm bg-white/[0.01]">
                            <span className="text-green-500 mr-4">● ACTIVE</span>
                            Regulated AI Compliance Engine [Finance Sector]
                        </div>
                        <div className="p-4 border border-dashed border-white/10 rounded-sm bg-white/[0.01]">
                            <span className="text-green-500 mr-4">● ACTIVE</span>
                            Sovereign Cloud Infrastructure [Defense Support]
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. OPERATING COMMITMENT — WE STAY */}
            <section className="py-40 bg-black relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        We operate what we build.
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed mb-12">
                        Launch is not the objective. Continuity is.
                        WebForge teams remain embedded to ensure system drift does not compromise institutional intent.
                    </p>
                    <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
                </div>
            </section>

            {/* 7. THE GATE — DECISION */}
            <section className="py-40 bg-black flex items-center justify-center border-t border-white/5">
                <a href="mailto:engineering@dropwinggroups.com" className="group text-center">
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4 group-hover:text-gray-400 transition-colors">
                        Engineering Access
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white group-hover:text-white transition-colors border-b border-transparent group-hover:border-white/20 pb-2">
                        Discuss Execution Architecture
                    </h2>
                </a>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const DomainRow = ({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) => (
    <div className="group flex flex-col md:flex-row items-baseline md:items-center gap-4 md:gap-12 py-8 px-6 bg-black hover:bg-white/[0.03] transition-colors duration-300 border-l-2 border-transparent hover:border-white">
        <div className="flex items-center gap-4 text-gray-500 group-hover:text-white transition-colors w-64 flex-shrink-0">
            {icon}
            <span className="font-bold tracking-wide">{title}</span>
        </div>
        <p className="text-sm text-gray-500 font-mono leading-relaxed group-hover:text-gray-300 transition-colors">
            {desc}
        </p>
    </div>
);

const Principle = ({ num, title, text }: { num: string; title: string; text: string }) => (
    <div className="border-t border-white/20 pt-6">
        <span className="text-xs font-mono text-gray-600 mb-2 block">0{num}</span>
        <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
            {text}
        </p>
    </div>
);

const IntegrationSection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const opacityStrategy = useTransform(scrollYProgress, [0.3, 0.6], [1, 0.2]);
    const opacityExecution = useTransform(scrollYProgress, [0.3, 0.6], [0.2, 1]);

    return (
        <section ref={ref} className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <motion.div style={{ opacity: opacityStrategy }}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-gray-500" />
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Dropwing Groups</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Strategic Intent</h3>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Strategy defines the "What" and "Why." Governance, sovereign capability, and institutional long-term goals.
                    </p>
                </motion.div>

                <motion.div style={{ opacity: opacityExecution }} className="relative">
                    {/* Visual Connection Line */}
                    <div className="hidden md:block absolute top-1/2 -left-10 w-10 h-px bg-white/20" />

                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-8 bg-white" />
                        <span className="text-xs font-mono text-white uppercase tracking-widest">WebForge Engineering</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical Reality</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        WebForge defines the "How." Converting high-level intent into binary execution. No transmission loss.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WebForge;
