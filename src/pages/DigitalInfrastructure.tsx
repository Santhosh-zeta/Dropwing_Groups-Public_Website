import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/sections/SiteFooter";
import { ArrowUpRight, ShieldCheck, Server, Network, Database } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalInfrastructure = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-violet-500/30 selection:text-white">
            <Navbar />

            {/* 1. HERO SECTION — Infrastructure as Sovereignty */}
            <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
                {/* Abstract 3D/Network Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-structural/20 via-background to-background" />

                    {/* Grid Overlay for "Engineered" feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                    {/* Animated Gradient Orb (Subtle Parallax) */}
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl opacity-30 animate-pulse" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
                            Infrastructure <br />
                            <span className="text-gray-500">as Sovereignty</span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
                            Owning the infrastructure, the network, and the data that power mission-critical systems.
                        </h2>

                        <p className="text-sm font-mono text-gray-600 uppercase tracking-widest border-l border-violet-900/50 pl-4">
                            Designed for institutions where resilience, control, and continuity matter more than speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. WHY IT MATTERS — The Silent Engine */}
            <section className="py-24 md:py-32 border-t border-white/5 bg-background relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                                Why Infrastructure <br />
                                <span className="text-violet-500/80">Determines Power</span>
                            </h2>
                        </div>
                        <div className="space-y-8 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                            <p>
                                Infrastructure is invisible when it works — and catastrophic when it doesn’t.
                            </p>
                            <p>
                                Decisions made at the infrastructure layer define an organization’s ability to scale, adapt, and survive disruption.
                            </p>
                            <p className="text-white font-medium border-l-2 border-violet-500 pl-6">
                                Digital infrastructure is not an IT concern. It is an institutional one.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CAPABILITY GRID — The Stack */}
            <section className="py-24 bg-black/20 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Core Infrastructure Domains</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
                        {/* Card 1: HPC */}
                        <CapabilityCard
                            title="High-Performance Compute"
                            desc="Architecting compute environments for simulation, analytics, and intensive workloads where performance ceilings matter."
                        />

                        {/* Card 2: Private Cloud */}
                        <CapabilityCard
                            title="Private & Hybrid Cloud"
                            desc="Designing cloud environments optimized for control, cost governance, and regulatory alignment across public and private infrastructure."
                        />

                        {/* Card 3: Edge */}
                        <CapabilityCard
                            title="Edge & Distributed Systems"
                            desc="Infrastructure designed to operate closer to data sources, enabling low-latency execution and regional autonomy."
                        />

                        {/* Card 4: Cyber-Physical */}
                        <CapabilityCard
                            title="Secure & Cyber-Physical Infrastructure"
                            desc="Infrastructure that bridges digital systems with physical operations, designed for safety, observability, and resilience."
                        />
                    </div>
                </div>
            </section>

            {/* 4. OPERATING PRINCIPLES — How We Build */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-16">How We Operate</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <Principle
                            title="Ownership First"
                            desc="Infrastructure is provisioned in the client’s name. Control is never abstracted away."
                        />
                        <Principle
                            title="Audit-Ready by Design"
                            desc="Systems are designed to be inspected, explained, and reviewed at any point in time."
                        />
                        <Principle
                            title="Continuity Over Deployment"
                            desc="Infrastructure is maintained as a living system, not delivered and abandoned."
                        />
                        <Principle
                            title="Exit Without Risk"
                            desc="Clients retain full ownership and operational continuity even if Dropwing steps away."
                        />
                    </div>
                </div>
            </section>

            {/* 5. INTEGRATION — WebForge */}
            <section className="py-24 bg-[hsl(var(--structural))] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="h-px w-8 bg-violet-400"></span>
                            <span className="text-xs font-mono text-violet-300 uppercase tracking-widest">Execution Engine</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">Execution Through WebForge Engineering</h2>
                        <p className="text-gray-300 leading-relaxed max-w-lg mb-8">
                            Digital Infrastructure at Dropwing Groups is delivered through WebForge — our engineering division responsible for building and operating large-scale systems.
                        </p>
                        <p className="text-sm text-gray-400 italic">
                            This ensures infrastructure decisions are executed by the same teams that architect and maintain them.
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Link to="/ventures/webforge" className="group flex items-center gap-4 text-white border border-white/20 px-8 py-4 bg-white/5 hover:bg-white/10 transition-all duration-300">
                            <span className="font-mono tracking-widest uppercase text-sm">Explore WebForge</span>
                            <ArrowUpRight className="w-5 h-5 text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. GOVERNANCE & RISK */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="border-l-2 border-gray-800 pl-8 md:pl-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Governance & Risk Alignment</h2>
                        <p className="text-xl text-gray-400 leading-relaxed mb-10">
                            Infrastructure is designed to withstand audits, regulatory review, personnel changes, and operational stress without loss of control or visibility.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <GovernanceItem label="Data Sovereignty" />
                            <GovernanceItem label="Access Control & RBAC" />
                            <GovernanceItem label="System Documentation" />
                            <GovernanceItem label="Operational Resilience" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-32 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <a
                        href="mailto:contact@dropwinggroups.com"
                        className="group inline-flex flex-col items-center gap-4"
                    >
                        <div className="flex items-center gap-3 text-2xl md:text-4xl font-light text-white group-hover:text-violet-400 transition-colors duration-300">
                            <span>Discuss Infrastructure Architecture</span>
                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                        <p className="text-sm font-mono text-gray-600 uppercase tracking-widest">
                            For organizations evaluating long-term infrastructure strategy
                        </p>
                    </a>
                </div>
            </section>

            <SiteFooter />
        </div>
    );
};

// --- Subcomponents ---

const CapabilityCard = ({ title, desc }: { title: string; desc: string }) => (
    <div className="bg-background/80 backdrop-blur-sm p-8 md:p-12 hover:bg-white/5 transition-colors duration-500 group relative">
        <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {desc}
        </p>
    </div>
);

const Principle = ({ title, desc }: { title: string; desc: string }) => (
    <div className="space-y-4">
        <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2 inline-block">
            {title}
        </h4>
        <p className="text-gray-400 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

const GovernanceItem = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3 text-sm font-mono text-gray-500">
        <div className="w-1.5 h-1.5 bg-gray-700 rotate-45" />
        {label}
    </div>
);

export default DigitalInfrastructure;
