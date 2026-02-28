import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight, BarChart3, Target, Megaphone, Zap, Layers, Network } from "lucide-react";
import VentureEcosystem from "@/components/VentureEcosystem";

// --- The Turbine Field Component ---
const TurbineField = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const speed = 0.5; // Slow lateral drift

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

        ctx.fillStyle = "#0a0a0a";
        ctx.clearRect(0, 0, width, height);

        // Drift Lines
        const lineCount = 40;
        const spacing = height / lineCount;
        const timeOffset = time * speed;

        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;

        for (let i = 0; i < lineCount; i++) {
            const y = i * spacing;
            const xOffset = (timeOffset + i * 50) % width;

            // Draw discrete dashes moving right
            ctx.beginPath();
            ctx.moveTo(xOffset, y);
            ctx.lineTo(xOffset + 100, y); // Long dashes
            ctx.stroke();

            // Second set of dashes for density
            const xOffset2 = (timeOffset + i * 50 + width / 2) % width;
            ctx.beginPath();
            ctx.moveTo(xOffset2, y);
            ctx.lineTo(xOffset2 + 100, y);
            ctx.stroke();
        }

        // Subconscious forward pressure gradient
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(0,0,0,0.8)");
        gradient.addColorStop(0.5, "rgba(0,0,0,0)");
        gradient.addColorStop(1, "rgba(0,0,0,0.8)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
    });

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />;
};

const Grovia = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-orange-900/30 selection:text-orange-50 overflow-x-hidden">
            <Navbar />

            {/* 1. HERO — MOMENTUM WITHOUT NOISE */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
                <TurbineField />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="max-w-5xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-px w-12 bg-orange-600" />
                            <span className="text-xs font-mono text-orange-600 uppercase tracking-widest">
                                Growth Systems Engineering
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
                            Grovia
                        </h1>
                        <p className="text-2xl md:text-3xl text-gray-400 font-light leading-snug max-w-2xl">
                            Engineering momentum for serious organizations.
                            Marketing systems designed for durability, not spikes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. MARKETING TRUTH */}
            <section className="py-32 relative z-10 bg-[#050505] border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        <TruthStatement text="Attention without structure decays." delay={0} />
                        <TruthStatement text="Campaigns spike. Systems compound." delay={0.1} />
                        <TruthStatement text="Metrics without context mislead." delay={0.2} />
                        <div className="pt-20 border-t border-white/10">
                            <h2 className="text-4xl md:text-6xl font-bold text-white">
                                Growth is not awareness. <br />
                                <span className="text-orange-600">Growth is repeatability.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. GROWTH DOMAINS */}
            <section className="py-32 relative border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-16">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                            Control Levers
                        </span>
                        <h2 className="text-3xl font-bold text-white">Controlled Growth Domains</h2>
                    </div>

                    <div className="space-y-4">
                        <DomainBand
                            title="Market Positioning"
                            desc="Defining the narrative coordinates that make competition irrelevant."
                            icon={<Target />}
                        />
                        <DomainBand
                            title="Demand Systems"
                            desc="Integrated inbound/outbound engines that operate independently of ad spend."
                            icon={<Zap />}
                        />
                        <DomainBand
                            title="Performance Intelligence"
                            desc="Attribution modeling and signal analysis to validate capital allocation."
                            icon={<BarChart3 />}
                        />
                        <DomainBand
                            title="Content Infrastructure"
                            desc="Publishing systems that build long-term IP assets, not disposable posts."
                            icon={<Layers />}
                        />
                        <DomainBand
                            title="Brand Momentum"
                            desc="The precise application of pressure to shift market perception over time."
                            icon={<Megaphone />}
                        />
                    </div>
                </div>
            </section>

            {/* 4. SYSTEMS NOT CAMPAIGNS */}
            <section className="py-32 bg-white/[0.02] border-b border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-baseline justify-between mb-20">
                        <h2 className="text-3xl font-bold text-white">Systems, Not Campaigns</h2>
                        <span className="font-mono text-xs text-gray-600 uppercase">Methodology v4.0</span>
                    </div>

                    <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
                        <Principle
                            title="Compounding First"
                            text="We prioritize initiatives that build permanent equity over those that generate temporary noise. Access is rented; leverage is owned."
                        />
                        <Principle
                            title="Signal Over Volume"
                            text="One precise message to the right decision-maker outweighs thousands of impressions on an indifferent audience."
                        />
                        <Principle
                            title="Distribution Is Architecture"
                            text="Channels are not buckets to be filled. They are pathways to be engineered for specific velocity and friction."
                        />
                    </div>
                </div>
            </section>

            {/* 5. RELATIONSHIP TO PERSYNIX */}
            <IntelligenceLink />

            {/* 6. OPERATING MODEL (BOUNDARIES) */}
            <section className="py-32 bg-[#080808] border-b border-white/5">
                <div className="container mx-auto px-6 flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-white mb-8">Boundaries of Discipline</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            We do not chase trends. We do not manufacture hype.
                            We build engines that work when no one is watching.
                        </p>
                        <div className="border-l-2 border-orange-600 pl-6">
                            <p className="text-white font-bold text-lg italic">
                                "Noise is not growth. Discipline is."
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4 text-sm font-mono text-gray-500">
                        <div className="p-6 border border-white/5 bg-black/40">
                            <span className="block mb-2 text-red-500 line-through">Viral Spikes</span>
                            Sustainable Velocities
                        </div>
                        <div className="p-6 border border-white/5 bg-black/40">
                            <span className="block mb-2 text-red-500 line-through">Vanity Metrics</span>
                            Revenue Correlation
                        </div>
                        <div className="p-6 border border-white/5 bg-black/40">
                            <span className="block mb-2 text-red-500 line-through">Platform Reliance</span>
                            Owned Distribution
                        </div>
                        <div className="p-6 border border-white/5 bg-black/40">
                            <span className="block mb-2 text-red-500 line-through">Ad-Hoc Content</span>
                            Strategic IP
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CONNECTION TO DROPWING */}
            <section className="py-20 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-12">
                        System Interlock
                    </h2>
                    <div className="flex flex-col gap-4 items-center opacity-80 font-mono text-sm tracking-widest">
                        <div className="text-gray-700">DROPWING GROUPS [STRATEGY]</div>
                        <div className="h-4 w-px bg-gray-800" />
                        <div className="text-gray-700">WEBFORGE [EXECUTION]</div>
                        <div className="h-4 w-px bg-gray-800" />
                        <div className="text-gray-700">PERSYNIX [INTELLIGENCE]</div>
                        <div className="h-4 w-px bg-orange-600" />
                        <div className="text-white font-bold bg-orange-900/20 px-4 py-2 border border-orange-900/30">GROVIA [GROWTH]</div>
                    </div>
                </div>
            </section>

            {/* Venture Ecosystem cross-links */}
            <VentureEcosystem currentVenture="Grovia" />

            {/* 8. THE GATE */}
            <section className="py-40 bg-black flex items-center justify-center">
                <a href="mailto:growth@dropwinggroups.com" className="group text-center">
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4 group-hover:text-orange-600 transition-colors">
                        Strategic Access
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white group-hover:text-white transition-colors border-b border-transparent group-hover:border-orange-600/30 pb-2">
                        Discuss Growth Architecture
                    </h2>
                </a>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const TruthStatement = ({ text }: { text: string; delay: number }) => (
    <div className="text-3xl md:text-5xl font-light text-gray-500 hover:text-white transition-colors duration-700 cursor-default">
        {text}
    </div>
);

const DomainBand = ({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) => (
    <div className="group flex items-center gap-8 py-8 px-6 bg-[#0a0a0a] border border-white/5 hover:border-orange-600/30 transition-all duration-500">
        <div className="text-gray-600 group-hover:text-orange-500 transition-colors">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
            <p className="text-sm text-gray-500 font-mono group-hover:text-gray-400 transition-colors">
                {desc}
            </p>
        </div>
    </div>
);

const Principle = ({ title, text }: { title: string; text: string }) => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 group hover:bg-white/[0.02] transition-colors">
        <h3 className="font-mono text-sm text-orange-600 uppercase tracking-widest pt-1">{title}</h3>
        <p className="col-span-3 text-lg text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
            {text}
        </p>
    </div>
);

const IntelligenceLink = () => {
    return (
        <section className="py-32 border-b border-white/5 overflow-hidden relative">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                        Data Integration
                    </span>
                    <h2 className="text-4xl font-bold text-white mb-6">Growth Informed by <br /> Intelligence.</h2>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        Grovia does not guess. We ingest signal from PerSyniX intelligence pipelines to direct growth pressure exactly where the market is softest.
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm font-mono text-orange-400">
                        <Network className="w-4 h-4" />
                        Live Signal Integration
                    </div>
                </div>

                <div className="bg-black border border-white/10 p-8 font-mono text-xs relative">
                    <div className="absolute top-0 right-0 p-2 text-gray-600">SIGNAL_LOG</div>
                    <div className="space-y-4 text-gray-500">
                        <div className="flex gap-4">
                            <span className="text-emerald-500">[PERSYNIX]</span>
                            <span>Market sentiment drift detected in Sector 4.</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-emerald-500">[PERSYNIX]</span>
                            <span>Competitor ad spend operational efficiency &lt; 40%.</span>
                        </div>
                        <div className="flex gap-4 opacity-50">
                            <span className="text-gray-600">--- PROCESSING ---</span>
                        </div>
                        <div className="flex gap-4 text-white">
                            <span className="text-orange-500">[GROVIA]</span>
                            <span>Deploying counter-narrative assets.</span>
                        </div>
                        <div className="flex gap-4 text-white">
                            <span className="text-orange-500">[GROVIA]</span>
                            <span>Reallocating demand budget to high-yield channels.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Grovia;
