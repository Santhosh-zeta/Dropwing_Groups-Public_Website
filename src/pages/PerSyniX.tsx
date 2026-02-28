import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Eye, ShieldCheck, Scale, FileText, Lock, AlertTriangle, ArrowRight, BrainCircuit } from "lucide-react";
import VentureEcosystem from "@/components/VentureEcosystem";

// --- The Radar Sweep Component ---
const RadarField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sweepSpeed = 0.0005; // Extremely slow sweep

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
        const maxRadius = Math.max(width, height) * 0.6;

        ctx.fillStyle = "#0a0a0a"; // Almost pure black
        ctx.clearRect(0, 0, width, height);

        // Circular Grid (Static)
        ctx.strokeStyle = "rgba(16, 185, 129, 0.05)"; // Emerald-500, very faint
        ctx.lineWidth = 1;

        [0.2, 0.4, 0.6, 0.8, 1].forEach(r => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, maxRadius * r, 0, Math.PI * 2);
            ctx.stroke();
        });

        // Crosshairs
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - maxRadius);
        ctx.lineTo(centerX, centerY + maxRadius);
        ctx.moveTo(centerX - maxRadius, centerY);
        ctx.lineTo(centerX + maxRadius, centerY);
        ctx.stroke();

        // The Sweep
        const angle = (time * sweepSpeed) % (Math.PI * 2);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);

        // Sweep Gradient
        const gradient = ctx.createLinearGradient(0, 0, maxRadius, 0);
        gradient.addColorStop(0, "rgba(16, 185, 129, 0)");
        gradient.addColorStop(0.8, "rgba(16, 185, 129, 0.05)");
        gradient.addColorStop(1, "rgba(16, 185, 129, 0.2)"); // Leading edge

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, maxRadius, 0, 0.2); // Small slice
        ctx.lineTo(0, 0);
        ctx.fill();

        // Leading Line
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(maxRadius, 0);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />;
};

const PerSyniX = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-emerald-900/30 selection:text-emerald-50 overflow-x-hidden">
            <Navbar />

            {/* 1. HERO — INTELLIGENCE WITHOUT ILLUSION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
                <RadarField />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
                                System Status: Monitoring
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
                            Intelligence, <br />
                            Without Illusion.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-emerald-900/30 pl-6">
                            PerSyniX applies machine intelligence to real-world systems.
                            Designed for environments where errors compound and accountability is non-negotiable.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. REALITY CHECK — THE TRUTHS */}
            <section className="py-32 relative z-10 border-b border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
                            Operational Reality
                        </h2>
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Why Most AI Fails Institutions
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            Intelligence without governance is liability. The standard approach to AI deployment introduces unacceptable operational risk.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <RealityItem text="Models hallucinate." />
                        <RealityItem text="Data drifts." />
                        <RealityItem text="Context decays." />
                        <RealityItem text="Accountability disappears." />
                    </div>
                </div>
            </section>

            {/* 3. APPLIED DOMAINS */}
            <section className="py-32 bg-white/[0.02] border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                            Decision Domains
                        </span>
                        <h2 className="text-3xl font-bold text-white">Applied Intelligence</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                        <DomainCard
                            icon={<Scale className="w-6 h-6" />}
                            title="Decision Support"
                            desc="Augmenting executive judgment with high-fidelity probabilistic modeling."
                        />
                        <DomainCard
                            icon={<AlertTriangle className="w-6 h-6" />}
                            title="Risk & Predictive"
                            desc="Early-warning systems for operational anomalies and market shifts."
                        />
                        <DomainCard
                            icon={<BrainCircuit className="w-6 h-6" />}
                            title="Intelligence Pipelines"
                            desc="Converting unstructured data lakes into structured, actionable insight."
                        />
                        <DomainCard
                            icon={<ShieldCheck className="w-6 h-6" />}
                            title="Model Governance"
                            desc="Full lifecycle management, auditability, and compliance enforcement."
                        />
                        <DomainCard
                            icon={<Lock className="w-6 h-6" />}
                            title="Private Deployment"
                            desc="Air-gapped and on-premise LLM instances. Zero data egress."
                        />
                    </div>
                </div>
            </section>

            {/* 4. ENGINEERING JUDGMENT — PRINCIPLES */}
            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-white mb-4">Engineering Judgment</h2>
                        <p className="text-gray-500 font-mono text-sm">POLICY: ENG-AI-001</p>
                    </div>

                    <div className="space-y-12">
                        <Principle
                            title="No Black Boxes"
                            text="Every model must be explainable. If we cannot trace the logic, we do not deploy the system."
                        />
                        <Principle
                            title="Human-in-the-Loop by Default"
                            text="Automation assists decisions; it does not inherit responsibility. The chain of command remains human."
                        />
                        <Principle
                            title="Context as First-Class Input"
                            text="Generic models fail specific tasks. We engineer context injects to ground intelligence in institutional reality."
                        />
                    </div>
                </div>
            </section>

            {/* 5. GOVERNANCE & RISK */}
            <section className="py-32 bg-[#080808] border-b border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="border-l-4 border-emerald-900/50 pl-8">
                        <h2 className="text-3xl font-bold text-white mb-6">AI That Survives Scrutiny</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            For government, finance, and critical infrastructure, "cool" is not a metric. Auditability is.
                        </p>
                        <ul className="space-y-3 font-mono text-sm text-gray-500">
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-500">✓</span> Immutable Audit Trails
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-500">✓</span> Full Data Lineage
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-500">✓</span> Role-Based Access Control
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-emerald-500">✓</span> Decommissioning Protocols
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="p-8 border border-white/10 bg-white/[0.02]">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-emerald-500" />
                                Regulatory Alignment
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our architectures are designed to anticipate and satisfy emerging global AI regulation frames (EU AI Act, NIST RMF).
                                If it cannot be audited, it is not deployed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. STRATEGIC LINK */}
            <section className="py-32 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">
                        Unified Operating Model
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-80">
                        <div className="text-gray-600 font-bold text-xl">Strategy (Dropwing)</div>
                        <ArrowRight className="text-gray-700 hidden md:block" />
                        <ArrowRight className="text-gray-700 md:hidden rotate-90" />
                        <div className="text-gray-400 font-bold text-xl">Execution (WebForge)</div>
                        <ArrowRight className="text-gray-700 hidden md:block" />
                        <ArrowRight className="text-gray-700 md:hidden rotate-90" />
                        <div className="text-white font-bold text-xl">Intelligence (PerSyniX)</div>
                    </div>
                    <p className="mt-8 text-gray-500 max-w-2xl mx-auto">
                        Intelligence is not a silo. It is embedded directly into the execution fabric of the enterprise.
                    </p>
                </div>
            </section>

            {/* 7. BOUNDARIES */}
            <section className="py-20 bg-emerald-900/10 border-b border-white/5 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold text-emerald-500 mb-6 font-mono">Boundaries Are Intelligence</h2>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-mono text-gray-400">
                        <span className="px-4 py-2 border border-white/10 bg-black/50 line-through decoration-red-500/50">Generic Chatbots</span>
                        <span className="px-4 py-2 border border-white/10 bg-black/50 line-through decoration-red-500/50">"Magic" Demos</span>
                        <span className="px-4 py-2 border border-white/10 bg-black/50 line-through decoration-red-500/50">Public Data Leaks</span>
                        <span className="px-4 py-2 border border-white/10 bg-black/50 line-through decoration-red-500/50">Undefined Ownership</span>
                    </div>
                </div>
            </section>

            {/* Venture Ecosystem cross-links */}
            <VentureEcosystem currentVenture="PerSyniX" />

            {/* 8. THE GATE */}
            <section className="py-40 bg-black flex items-center justify-center">
                <a href="mailto:intelligence@dropwinggroups.com" className="group text-center">
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4 group-hover:text-emerald-500/70 transition-colors">
                        Consultative Access
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white group-hover:text-white transition-colors border-b border-transparent group-hover:border-emerald-500/30 pb-2">
                        Discuss Applied Intelligence
                    </h2>
                </a>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const RealityItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4 border-l border-white/10 pl-4 py-2">
        <div className="w-1.5 h-1.5 bg-red-500/70 rounded-full" />
        <span className="text-xl text-gray-300 font-medium">{text}</span>
    </div>
);

const DomainCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
    <div className="bg-[#080808] p-8 group hover:bg-white/[0.03] transition-colors duration-300">
        <div className="text-gray-600 group-hover:text-emerald-500 transition-colors mb-6">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-50 transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 font-mono leading-relaxed group-hover:text-gray-400 transition-colors">
            {desc}
        </p>
    </div>
);

const Principle = ({ title, text }: { title: string; text: string }) => (
    <div className="group">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
            {text}
        </p>
        <div className="h-px bg-white/10 mt-6 max-w-xs group-hover:bg-emerald-500/30 transition-colors" />
    </div>
);

export default PerSyniX;
