import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const ElevixPro = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-200">
            {/* Background Scaffolding */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
                <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-zinc-200"></div>
                <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-px bg-zinc-200"></div>
            </div>

            <div className="relative z-10">
                {/* SECTION 1 — HERO */}
                <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto border-x border-transparent">
                    <div className="max-w-4xl pl-4 md:pl-0 border-l-2 border-zinc-900/10 md:border-none">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-zinc-900"
                        >
                            Capability Is Power
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-zinc-500 font-mono"
                        >
                            Elevix Pro<br />
                            Building institutional capability from the inside.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-sm font-mono text-zinc-400"
                    >
                        Training, apprenticeship, and knowledge transfer designed for real organizations.
                    </motion.div>
                </section>

                {/* SECTION 2 — THE TRAINING MYTH */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-mono text-zinc-400 mb-16 uppercase tracking-wider">Why Most Training Fails</h2>
                        <div className="space-y-12">
                            {["Information is not capability.", "Workshops decay without application.", "Certificates do not change behavior.", "Skills without context do not stick."].map((text, i) => (
                                <div key={i} className="text-3xl md:text-4xl font-semibold text-zinc-800 border-l-2 border-zinc-200 pl-6 py-2">
                                    {text}
                                </div>
                            ))}
                            <div className="mt-16 pt-8 border-t border-zinc-200">
                                <p className="text-xl font-mono text-zinc-600">
                                    Capability must be built inside the system.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 — WHAT ELEVIX BUILDS */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto bg-white border-y border-zinc-100">
                    <h2 className="text-sm font-mono text-zinc-400 mb-16 uppercase tracking-wider">Capability Domains</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">
                        {[
                            { title: "Leadership & Decision-Making", desc: "Governance architecture and strategic clarity." },
                            { title: "Technical & Engineering Capability", desc: "Building builders, not just users." },
                            { title: "AI & Digital Literacy", desc: "Fluency in the new operating system of business." },
                            { title: "Operational Excellence", desc: "Optimizing the machine while it runs." },
                            { title: "Organizational Maturity", desc: "Moving from reactive to predictive states." }
                        ].map((domain, i) => (
                            <div key={i} className="group bg-zinc-50 hover:bg-white p-12 transition-colors duration-300 min-h-[300px] flex flex-col justify-between">
                                <h3 className="text-2xl font-bold text-zinc-900">{domain.title}</h3>
                                <p className="font-mono text-sm text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                                    {domain.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4 — THE ELEVIX METHOD */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <h2 className="text-sm font-mono text-zinc-400 mb-24 uppercase tracking-wider">From Knowledge to Ownership</h2>

                    <div className="relative border-l border-zinc-200 ml-4 md:ml-0 pl-12 md:pl-24 space-y-24">
                        {[
                            { title: "Context Mapping", desc: "Understanding the organization’s reality." },
                            { title: "Embedded Learning", desc: "Training inside real work, not simulations." },
                            { title: "Guided Execution", desc: "Mentorship during live initiatives." },
                            { title: "Capability Transfer", desc: "Ownership moves fully in-house." }
                        ].map((phase, i) => (
                            <div key={i} className="relative">
                                <div className="absolute -left-[calc(3rem+1px)] md:-left-[calc(6rem+1px)] top-2 w-3 h-3 bg-zinc-900 rounded-full border-4 border-zinc-50"></div>
                                <h3 className="text-3xl font-bold text-zinc-900 mb-4">{phase.title}</h3>
                                <p className="text-xl font-mono text-zinc-500">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5 — THE CREATIVE APPRENTICESHIP PROGRAM */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto bg-zinc-900 text-zinc-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-sm font-mono text-zinc-400 mb-8 uppercase tracking-wider">Learning That Produces Output</h2>
                            <p className="text-lg text-zinc-400 mb-8">
                                Apprentices work on real systems.<br />
                                Output is shipped, not graded.<br />
                                Mentorship is continuous.
                            </p>
                        </div>
                        <div className="border border-zinc-700 p-12 flex items-center justify-center">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight text-center">
                                Production,<br />not practice.
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 6 — RELATIONSHIP TO DROPWING */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto text-center">
                    <h2 className="text-sm font-mono text-zinc-400 mb-16 uppercase tracking-wider">Why Capability Lives Inside the Ecosystem</h2>
                    <div className="max-w-3xl mx-auto space-y-12">
                        <p className="text-3xl md:text-4xl font-light text-zinc-800 leading-tight">
                            Elevix ensures continuity.<br />
                            Dropwing doesn’t create dependency.<br />
                            Clients grow independent over time.
                        </p>
                        <div className="inline-block border-b-2 border-zinc-900 pb-2">
                            <span className="text-xl font-bold font-mono">We aim to become unnecessary.</span>
                        </div>
                    </div>
                </section>

                {/* SECTION 7 — WHO ELEVIX IS FOR */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                    <h2 className="text-sm font-mono text-zinc-400 mb-16 uppercase tracking-wider">Selective by Design</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            "Organizations investing long-term.",
                            "Institutions building internal strength.",
                            "Leaders who value maturity over speed."
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-zinc-900 rounded-full text-zinc-50">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="text-xl font-medium text-zinc-800">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 p-6 bg-zinc-100 border border-zinc-200 inline-block">
                        <p className="font-mono text-zinc-500 text-sm">NOT FOR: Quick certification seekers.</p>
                    </div>
                </section>

                {/* SECTION 8 — THE GATE */}
                <section className="py-32 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-sm font-mono text-zinc-400 mb-12 uppercase tracking-wider">Strategic Engagement</h2>

                    <a href="/contact" className="group">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-900 group-hover:text-zinc-600 transition-colors duration-500">
                            Discuss Capability Building
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-zinc-500 font-mono group-hover:text-zinc-900 transition-colors">
                            <span>This is serious development</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                </section>
            </div>
        </div>
    );
};

export default ElevixPro;
