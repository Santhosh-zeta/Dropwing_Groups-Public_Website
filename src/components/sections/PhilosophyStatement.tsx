import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Corporate Speak Word Bank
const CORPORATE_NOISE = [
    "Synergy", "Leverage", "Bandwidth", "Circle back", "Deep dive",
    "Touch base", "Low hanging fruit", "Paradigm shift", "Move the needle",
    "Wheelhouse", "Disrupt", "Agile", "Blue sky", "Granular",
    "Holistic", "Ideate", "Omnichannel", "Robust", "Scalable",
    "Stakeholders", "Take offline", "Value add", "Verticals",
    "Win-win", "Actionable", "Deliverables", "Ecosystem", "Alignment",
    "Benchmark", "Core competency", "Critical path", "Drill down", "Empower"
];

// Noise Component
const CorporateNoise = ({ opacity }: { opacity: any }) => {
    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none flex flex-wrap content-center justify-center gap-x-12 gap-y-8 p-8 mix-blend-overlay"
        >
            {Array.from({ length: 48 }).map((_, i) => (
                <span
                    key={i}
                    className="text-xs md:text-sm font-mono text-muted-foreground whitespace-nowrap"
                    style={{
                        transform: `rotate(${Math.random() * 20 - 10}deg)`,
                        opacity: Math.random() * 0.4 + 0.1 // Lower opacity for subtlety
                    }}
                >
                    {CORPORATE_NOISE[i % CORPORATE_NOISE.length]}
                </span>
            ))}
        </motion.div>
    );
};

// Weight Grid Component
const WeightGrid = ({ scrollYProgress }: { scrollYProgress: any }) => {
    // Transform grid line thickness/scale based on scroll 
    // This creates a "Zooming In" effect as the user scrolls
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.1, 0]);

    return (
        <motion.div
            className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
            style={{ opacity, scale }}
        >
            <svg className="w-[150%] h-[150%]" width="100%" height="100%">
                <defs>
                    <pattern id="weight-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="currentColor"
                            className="text-white"
                            strokeWidth="0.5"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#weight-grid)" />
            </svg>
        </motion.div>
    );
}

const PhilosophyStatement = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax & Scale logic for text content
    // As you scroll, the text scales UP (0.9 -> 1.1) and moves slightly up
    // giving the feeling of "Moving to the next level" or approaching the viewer
    const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.9, 1.05]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 1], [0, 1, 1, 0]);

    // Noise fades out as signal becomes clear
    const noiseOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.1]);

    return (
        <section
            id="philosophy"
            className="section-divider relative py-12 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden bg-structural"
            ref={containerRef}
        >
            {/* 1. The Noise Layer */}
            <CorporateNoise opacity={noiseOpacity} />

            {/* 2. The Weight Layer (Subtle Grid with Zoom) */}
            <WeightGrid scrollYProgress={scrollYProgress} />

            {/* 3. The Signal Layer (Foreground Content) */}
            <motion.div
                className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center"
                style={{ y, opacity, scale }}
            >
                <div className="mb-4 md:mb-6 flex items-center justify-center gap-3">
                    {/* Decorative 'Signal' Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px bg-primary"
                    />
                    <span className="text-[10px] font-bold tracking-[0.25em] text-primary uppercase">
                        Our Philosophy
                    </span>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-px bg-primary"
                    />
                </div>

                <div className="space-y-8 md:space-y-12">
                    {/* Statement 1 */}
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                        <span className="block mb-2 text-white/30 blur-[1px] text-xl md:text-2xl lg:text-3xl font-normal transition-all duration-500 hover:blur-0 hover:text-white/60">
                            We don't advise.
                        </span>
                        <span className="block text-white drop-shadow-2xl">
                            We execute.
                        </span>
                    </h2>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />

                    {/* Statement 2 */}
                    <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                        <span className="block mb-2 text-white/30 blur-[1px] text-xl md:text-2xl lg:text-3xl font-normal transition-all duration-500 hover:blur-0 hover:text-white/60">
                            We don't consult.
                        </span>
                        <span className="block text-white drop-shadow-2xl">
                            We own.
                        </span>
                    </h2>
                </div>
            </motion.div>

            {/* Vignette Overlay for focus */}
            <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-structural/60 to-structural" />
        </section>
    );
};

export default PhilosophyStatement;
