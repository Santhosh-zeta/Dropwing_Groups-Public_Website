import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        phase: "01",
        title: "Diagnosis",
        detail: "We dismantle and map operational reality. We identify friction points, hidden dependencies, and structural flaws to build a precise schematic of the future state.",
    },
    {
        phase: "02",
        title: "Implementation",
        detail: "We deploy teams to own outcomes. We build the control planes, reporting structures, and execution muscle required to drive the new operating model.",
    },
    {
        phase: "03",
        title: "Transfer",
        detail: "We clone the capability. Zero dependency. We ensure your team can operate the machine we built at full velocity.",
    },
];

const EngagementSteps = () => {
    return (
        <section
            id="engagement-process"
            className="section-divider bg-black py-24 md:py-32 relative overflow-hidden"
        >
            {/* Functional Grid Overlay - Very subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 relative z-10">

                {/* Header - High Contrast with Accent */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary"></div>
                            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                                The Protocol
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[1.1]">
                            The Machine <br />
                            <span className="font-bold">blueprint.</span>
                        </h2>
                    </div>
                </div>

                {/* The Pipeline (Black Box Layout) */}
                <div className="relative group/pipeline">
                    {/* Pipeline Bar Background */}
                    <div className="hidden md:block absolute top-[0.375rem] left-0 w-full h-px bg-white/10" />

                    {/* Scanner Line Animation - Violet */}
                    <motion.div
                        initial={{ left: "-10%" }}
                        animate={{ left: "110%" }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="hidden md:block absolute top-[0.375rem] w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent blur-[2px] z-10"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                        {steps.map((step, index) => (
                            <PipelineNode key={step.phase} step={step} index={index} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

interface PipelineNodeProps {
    step: {
        phase: string;
        title: string;
        detail: string;
    };
    index: number;
}

const PipelineNode = ({ step, index }: PipelineNodeProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className="group relative pt-4 md:pt-0"
        >
            {/* Connection Point (Desktop) */}
            <div className="hidden md:flex absolute top-0 left-0 w-full items-center justify-start pb-8">
                {/* Node Dot - Violet on Hover */}
                <div className={`w-3 h-3 bg-black border border-white/50 z-20 transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]`} />
            </div>

            {/* Connection Line (Mobile) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
            <div className="md:hidden absolute left-[-5px] top-6 w-2.5 h-2.5 bg-black border border-white group-hover:bg-primary group-hover:border-primary transition-colors" />

            {/* Card Content */}
            <div className="pl-10 md:pl-4 md:mt-8 transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] text-primary/80 tracking-widest border border-primary/20 px-2 py-0.5 bg-primary/5">
                        {step.phase}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-sm lg:text-base group-hover:text-white transition-colors duration-500">
                    {step.detail}
                </p>

                {/* Violet Indicator */}
                <div className="h-px w-8 bg-white/20 mt-6 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </div>

        </motion.div>
    )
}

export default EngagementSteps;
