import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowDown, X, Check, FileCheck } from "lucide-react";

// --- Signal in the Noise Hero ---
const SignalHero = () => {
    // Generate noise text
    const noiseWords = [
        "SYNERGY", "PIVOT", "DISRUPTION", "AGILE", "LEVERAGE", "Paradigm",
        "Holistic", "Bandwidth", "Touchpoint", "Ecosystem", "Unicorn",
        "Growth Hack", "Deep Dive", "Circle Back", "Low Hanging Fruit",
        "Next Gen", "Thought Leader", "Game Changer", "Value Add"
    ];

    const noiseArray = Array.from({ length: 400 }, () =>
        noiseWords[Math.floor(Math.random() * noiseWords.length)]
    );

    return (
        <section className="relative h-screen w-full overflow-hidden bg-white text-black flex items-center justify-center">
            {/* Background Noise Layer */}
            <div className="absolute inset-0 opacity-10 select-none pointer-events-none overflow-hidden flex flex-wrap content-start gap-4 p-4 grayscale blur-[1px]">
                {noiseArray.map((word, i) => (
                    <span
                        key={i}
                        className="text-xs md:text-sm font-bold uppercase tracking-widest transform"
                        style={{
                            transform: `rotate(${Math.random() * 360}deg)`,
                            opacity: Math.random() * 0.5 + 0.2
                        }}
                    >
                        {word}
                    </span>
                ))}
            </div>

            {/* The Signal (Foreground) */}
            <div className="relative z-10 text-center mix-blend-difference text-white">
                <div className="w-[1px] h-32 bg-white mx-auto mb-8 animate-pulse" />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-6"
                >
                    SIGNAL ONLY.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-2xl font-mono tracking-wide uppercase"
                >
                    We exist to remove the noise from execution.
                </motion.p>
            </div>

            {/* Gradient Overlay for Fade Out */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

const Philosophy = () => {
    return (
        <div className="min-h-screen bg-black text-gray-200 font-sans selection:bg-white selection:text-black">
            <Navbar />

            <SignalHero />

            {/* 2. THE AXIOMS */}
            <section className="py-40 border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="mb-24">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">
                            First Principles
                        </span>
                        <h2 className="text-4xl font-bold text-white">The Axioms</h2>
                    </div>

                    <div className="space-y-32">
                        <Axiom
                            num="01"
                            title="Sovereignty is Binary"
                            text="You own it, or you rent it. There is no middle ground. We build systems that belong to the institution, not the vendor."
                        />
                        <Axiom
                            num="02"
                            title="Action > Advice"
                            text="Consultants advise. Partners execute. We do not deliver slide decks; we deliver operational outcome."
                        />
                        <Axiom
                            num="03"
                            title="Systems > Heroes"
                            text="Heroes fail. Systems compound. Reliance on individual brilliance is a vulnerability. We engineer redundancy and process."
                        />
                        <Axiom
                            num="04"
                            title="Silence is Leverage"
                            text="Noise is a liability. True power does not need to shout. We value discretion and quiet execution above all visibility."
                        />
                    </div>
                </div>
            </section>

            {/* 3. ANTI-PATTERNS (REDACTED) */}
            <section className="py-32 bg-white/[0.02] border-b border-white/10">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center">
                        <h2 className="text-2xl font-bold text-gray-500 line-through decoration-red-600 decoration-2">
                            Rejection List
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-lg">
                        <RedactedItem text="Vendor Lock-in" />
                        <RedactedItem text="Proprietary Black Boxes" />
                        <RedactedItem text="Hourly Billing" />
                        <RedactedItem text="Vanity Metrics" />
                        <RedactedItem text="Endless Discovery Phases" />
                        <RedactedItem text="Outsourced Core Competency" />
                    </div>
                </div>
            </section>

            {/* 4. THE COVENANT */}
            <section className="py-40 bg-white text-black relative">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <div className="mb-12 flex justify-center text-black/50">
                        <FileCheck className="w-16 h-16" />
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
                        The Operating Covenant.
                    </h2>

                    <div className="text-xl md:text-2xl leading-relaxed font-serif text-black/80 space-y-8">
                        <p>
                            We do not bill for effort. We bill for capability.
                        </p>
                        <p>
                            We do not promise speed. We promise inevitability.
                        </p>
                        <p>
                            We do not seek to be liked. We seek to be trusted.
                        </p>
                    </div>

                    <div className="mt-20 pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-sm uppercase tracking-widest text-black/50">
                        <div>
                            Signed: Dropwing Groups
                        </div>
                        <div className="h-px w-32 bg-black/20 md:hidden" />
                        <div>
                            Date: {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE GATE */}
            <section className="py-40 bg-black flex items-center justify-center border-t border-white/10">
                <a href="mailto:alignment@dropwinggroups.com" className="group text-center">
                    <p className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-4 group-hover:text-white transition-colors">
                        Partnership Threshold
                    </p>
                    <h2 className="text-3xl md:text-5xl font-light text-white group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-2">
                        Align with Principles
                    </h2>
                </a>
            </section>
        </div>
    );
};

// --- Subcomponents ---

const Axiom = ({ num, title, text }: { num: string; title: string; text: string }) => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start group">
        <div className="text-6xl font-bold text-white/10 group-hover:text-white/30 transition-colors font-mono">
            {num}
        </div>
        <div className="max-w-2xl pt-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:tracking-wide transition-all duration-500">
                {title}
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                {text}
            </p>
        </div>
    </div>
);

const RedactedItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-red-900/10 transition-colors group">
        <X className="w-5 h-5 text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
        <span className="text-gray-500 group-hover:text-red-400 group-hover:line-through decoration-red-500 transition-all">
            {text}
        </span>
    </div>
);

export default Philosophy;
