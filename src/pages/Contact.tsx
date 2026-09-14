import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";

// --- Custom Components ---
const Headline = ({ text }: { text: string }) => {
    const letters = Array.from(text);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
        }),
    };
    const child = {
        visible: {
            opacity: 1, filter: "blur(0px)", letterSpacing: "-0.02em", y: 0,
            transition: { type: "spring", damping: 20, stiffness: 100, duration: 1.2 },
        },
        hidden: { opacity: 0, filter: "blur(10px)", letterSpacing: "0.2em", y: 10 },
    };
    return (
        <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 uppercase flex flex-wrap justify-center overflow-hidden"
            variants={container} initial="hidden" animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.h1>
    );
};

// --- WebGL Background ---
const ParticleLattice = ({ isSuccess }: { isSuccess: boolean }) => {
    const pointsRef = useRef<THREE.Group>(null);
    const [positions] = useState(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        let i = 0;
        const size = 20;
        for (let x = -size; x <= size; x += 2) {
            for (let y = -size; y <= size; y += 2) {
                for (let z = -size; z <= size; z += 2) {
                    if (i < count * 3 && Math.random() > 0.5) {
                        positions[i] = x + (Math.random() - 0.5) * 0.5;
                        positions[i + 1] = y + (Math.random() - 0.5) * 0.5;
                        positions[i + 2] = z + (Math.random() - 0.5) * 0.5;
                        i += 3;
                    }
                }
            }
        }
        return positions;
    });

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
            if (isSuccess) {
                const scale = pointsRef.current.scale.x;
                pointsRef.current.scale.setScalar(THREE.MathUtils.lerp(scale, 1.5, delta * 2));
            }
        }
    });

    return (
        <group ref={pointsRef}>
            <Points positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial transparent color="#7C3AED" size={0.06} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
            </Points>
        </group>
    );
};

const Scene = ({ scrollYProgress, isSuccess }: { scrollYProgress: any, isSuccess: boolean }) => {
    return (
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#0E0F12' }} gl={{ alpha: false, antialias: true }}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
            <fog attach="fog" args={['#0E0F12', 5, 35]} />
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 10, -5]} intensity={1} color="#7C3AED" />
            <directionalLight position={[0, -10, 5]} intensity={0.1} color="#ffffff" />
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
                <ParticleLattice isSuccess={isSuccess} />
            </Float>
            <CameraRig scrollYProgress={scrollYProgress} isSuccess={isSuccess} />
        </Canvas>
    );
};

const CameraRig = ({ scrollYProgress, isSuccess }: { scrollYProgress: any, isSuccess: boolean }) => {
    useFrame((state) => {
        const scroll = scrollYProgress.get();
        const targetZ = isSuccess ? 12 : THREE.MathUtils.lerp(15, 8, scroll);
        const targetRotX = isSuccess ? 0 : THREE.MathUtils.lerp(0, 0.035, scroll);
        const currentZ = state.camera.position.z;
        const currentRotX = state.camera.rotation.x;

        state.camera.position.z = THREE.MathUtils.lerp(currentZ, targetZ, 0.1);
        state.camera.rotation.x = THREE.MathUtils.lerp(currentRotX, targetRotX, 0.1);
        state.camera.position.y = THREE.MathUtils.lerp(0, -2, scroll);
    });
    return null;
};

// --- Form Components ---
const CustomInput = ({ label, type = "text", id, value, onChange }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="relative w-full mb-6">
            <motion.label
                htmlFor={id}
                initial={false}
                animate={{
                    y: (isFocused || value) ? -10 : 16,
                    scale: (isFocused || value) ? 0.85 : 1,
                    color: (isFocused || value) ? "#a78bfa" : "#71717a"
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-0 pointer-events-none origin-left uppercase tracking-wider text-xs font-semibold z-10"
            >
                {label}
            </motion.label>
            <div className="relative">
                <input
                    type={type} id={id} value={value} onChange={onChange}
                    onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                    className={`w-full bg-[#18181b]/60 backdrop-blur-md border rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-0 transition-all duration-300 ${isFocused ? 'border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-[#27272a] hover:border-[#3f3f46]'}`}
                    required
                />
            </div>
        </div>
    );
};

const CustomTextarea = ({ label, id, value, onChange }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="relative w-full mb-6">
            <motion.label
                htmlFor={id}
                initial={false}
                animate={{
                    y: (isFocused || value) ? -10 : 16,
                    scale: (isFocused || value) ? 0.85 : 1,
                    color: (isFocused || value) ? "#a78bfa" : "#71717a"
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-0 pointer-events-none origin-left uppercase tracking-wider text-xs font-semibold z-10"
            >
                {label}
            </motion.label>
            <div className="relative">
                <textarea
                    id={id} value={value} onChange={onChange}
                    onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                    rows={4}
                    className={`w-full bg-[#18181b]/60 backdrop-blur-md border rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-0 resize-none transition-all duration-300 ${isFocused ? 'border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-[#27272a] hover:border-[#3f3f46]'}`}
                    required
                />
            </div>
        </div>
    );
};

const CustomDropdown = ({ label, options, value, onChange }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full mb-6" ref={containerRef}>
            <motion.label
                initial={false}
                animate={{
                    y: (isOpen || value) ? -10 : 16,
                    scale: (isOpen || value) ? 0.85 : 1,
                    color: (isOpen || value) ? "#a78bfa" : "#71717a"
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-0 pointer-events-none origin-left uppercase tracking-wider text-xs font-semibold z-10"
            >
                {label}
            </motion.label>

            <div
                className={`w-full bg-[#18181b]/60 backdrop-blur-md border rounded-xl px-4 pt-6 pb-2 text-white cursor-pointer relative transition-all duration-300 ${isOpen ? 'border-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.3)]' : 'border-[#27272a] hover:border-[#3f3f46]'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="min-h-[24px] text-sm">{value || ""}</div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400 transition-transform" style={{ transform: `translateY(-50%) rotate(${isOpen ? 180 : 0}deg)` }}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } }}
                        className="absolute left-0 top-full mt-2 w-full z-50 rounded-xl backdrop-blur-xl bg-[#18181b]/95 border border-[#27272a] shadow-2xl overflow-hidden py-2"
                    >
                        {options.map((opt: string, i: number) => (
                            <motion.div
                                key={opt}
                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03, duration: 0.2 }}
                                onClick={() => { onChange(opt); setIsOpen(false); }}
                                className="px-5 py-3 cursor-pointer text-zinc-400 hover:text-white hover:bg-[#8b5cf6]/10 relative group transition-colors duration-200"
                            >
                                <span className="relative z-10 text-sm font-medium tracking-wide">{opt}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SubmitButton = ({ isProcessing, isSuccess }: { isProcessing: boolean, isSuccess: boolean }) => {
    return (
        <motion.button
            whileHover={!isProcessing && !isSuccess ? { scale: 1.02 } : {}}
            whileTap={!isProcessing && !isSuccess ? { scale: 0.98 } : {}}
            type="submit"
            disabled={isProcessing || isSuccess}
            className="relative w-full px-8 py-4 rounded-xl font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 text-sm shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] border border-[#8b5cf6]/50 bg-gradient-to-r from-[#8b5cf6]/20 to-[#6d28d9]/20 backdrop-blur-md"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#6d28d9] opacity-0 hover:opacity-20 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center justify-center min-h-[24px]">
                {isProcessing ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-white">
                        <div className="w-5 h-5 rounded-full border-[2px] border-t-white border-r-white border-b-transparent border-l-transparent animate-spin" />
                        PROCESSING...
                    </motion.div>
                ) : isSuccess ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        RECEIVED
                    </motion.div>
                ) : (
                    <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">INITIATE ENGAGEMENT</span>
                )}
            </div>
        </motion.button>
    );
};

// --- Main Page Component ---
export default function Contact1() {
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const [formState, setFormState] = useState("idle");
    const [formData, setFormData] = useState({
        name: "", org: "", email: "", scope: "", objective: ""
    });

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            setIsMobile(mobile || reduced);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("processing");

        try {
            const response = await fetch('/send_email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setFormState("success");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Reset form data after success
                setTimeout(() => {
                    setFormData({ name: "", org: "", email: "", scope: "", objective: "" });
                    setFormState("idle");
                }, 4000); // Reset after 4 seconds of showing success message
            } else {
                alert(data.error || 'Failed to initiate engagement. Please try again.');
                setFormState("idle");
            }
        } catch (error) {
            console.error('Email error:', error);
            alert('A system error occurred. Please try again later.');
            setFormState("idle");
        }
    };

    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const heroFilter = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(8px)"]);

    return (
        <main className="bg-[#0E0F12] min-h-screen text-white relative selection:bg-[#7C3AED]/30">
            <Helmet>
                <title>Contact — Dropwing Groups</title>
            </Helmet>

            {/* Global Styles for Animations */}
            <style>{`
                @keyframes slide-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                html { scroll-behavior: smooth; }
            `}</style>

            {/* Fixed Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {!isMobile ? (
                    <Scene scrollYProgress={scrollYProgress} isSuccess={formState === "success"} />
                ) : (
                    <div className="absolute inset-0 bg-[#0E0F12]">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0F12] via-[#0E0F12]/80" />
                    </div>
                )}
            </div>

            <AnimatePresence>
                {formState !== "success" && (
                    <div className="relative z-10 block">
                        {/* HERO SECTION — sticky, fades out on scroll */}
                        <motion.section
                            style={{ opacity: heroOpacity, filter: heroFilter }}
                            className="h-screen flex flex-col items-center justify-center text-center px-6 sticky top-0"
                        >
                            <Headline text="INITIATE ALIGNMENT" />
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="text-[#A1A1AA] text-lg md:text-xl max-w-2xl mt-4 tracking-wide font-light"
                            >
                                Secure your strategic objective. Enter the ecosystem.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
                                className="absolute bottom-12 flex flex-col items-center gap-4 text-[#A1A1AA] text-[10px] uppercase tracking-[0.3em] font-semibold"
                            >
                                Scroll
                                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#3f3f46] to-transparent relative overflow-hidden">
                                    <motion.div
                                        animate={{ y: [0, 64] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                        className="w-full h-1/2 bg-[#7C3AED]"
                                    />
                                </div>
                            </motion.div>
                        </motion.section>

                        {/* BRIDGE — pulls form content up so it overlays the sticky hero */}
                        <div className="relative z-20 mt-[-100vh]">
                            {/* Spacer: first 100vh is transparent, form appears below */}
                            <div className="h-screen pointer-events-none" />

                            {/* FORM SECTION — always reachable, no opacity tricks */}
                            <section className="min-h-screen flex flex-col justify-center py-24 md:py-32 px-6 bg-[#0E0F12] border-t border-[#1f1f28]">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full max-w-[720px] mx-auto"
                                >
                                    {/* Form Header */}
                                    <div className="mb-16">
                                        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#7C3AED] mb-4">Engagement Protocol</p>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Submit your briefing.</h2>
                                        <p className="mt-4 text-[#A1A1AA] text-sm leading-relaxed max-w-md">
                                            Our team reviews every submission. Expect a response within 48 hours of submission.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <CustomInput label="Full Name" id="name" value={formData.name} onChange={(e: any) => setFormData({ ...formData, name: e.target.value })} />
                                        <CustomInput label="Organization" id="org" value={formData.org} onChange={(e: any) => setFormData({ ...formData, org: e.target.value })} />
                                        <CustomInput type="email" label="Work Email" id="email" value={formData.email} onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />

                                        <CustomDropdown
                                            label="Scope of Engagement"
                                            options={["Strategic Partnership", "Digital Infrastructure", "Synthetic Intelligence", "Brand Sovereignty", "General Inquiry"]}
                                            value={formData.scope}
                                            onChange={(val: string) => setFormData({ ...formData, scope: val })}
                                        />

                                        <CustomTextarea label="Strategic Objective" id="objective" value={formData.objective} onChange={(e: any) => setFormData({ ...formData, objective: e.target.value })} />

                                        <div className="pt-12 flex justify-end">
                                            <SubmitButton isProcessing={formState === "processing"} isSuccess={formState === "success"} />
                                        </div>
                                    </form>
                                </motion.div>
                            </section>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {formState === "success" && (
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-20 flex flex-col items-center justify-center text-center px-6 bg-[#0E0F12]/80 backdrop-blur-sm"
                    >
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.1em] text-white uppercase mb-6"
                        >
                            ALIGNMENT RECEIVED
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
                            className="text-lg md:text-xl text-[#A1A1AA] tracking-wider max-w-xl mx-auto font-light"
                        >
                            Our team will review your briefing within 48 hours.
                        </motion.p>
                    </motion.section>
                )}
            </AnimatePresence>
        </main>
    );
}
