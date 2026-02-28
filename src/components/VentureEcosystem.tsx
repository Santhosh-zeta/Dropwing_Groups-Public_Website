import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface Venture {
    name: string;
    category: string;
    desc: string;
    href: string;
}

const ALL_VENTURES: Venture[] = [
    { name: "WebForge", category: "Systems", desc: "Full-stack engineering & platform infrastructure", href: "/ventures/webforge" },
    { name: "Design Studio", category: "Identity", desc: "Brand identity & visual systems", href: "/ventures/design-studio" },
    { name: "PerSyniX", category: "Intelligence", desc: "AI-native workflows & cognitive architectures", href: "/ventures/persynix" },
    { name: "Grovia", category: "Revenue", desc: "Precision agriculture & market execution", href: "/ventures/grovia" },
    { name: "Elevix Pro", category: "Platforms", desc: "Vertical mobility & capability enablement", href: "/ventures/elevix-pro" },
];

interface VentureEcosystemProps {
    /** The slug/name of the current venture page — will be excluded from the list */
    currentVenture?: string;
}

const VentureEcosystem = ({ currentVenture }: VentureEcosystemProps) => {
    const otherVentures = ALL_VENTURES.filter(v => v.name !== currentVenture);

    return (
        <section className="border-t border-white/5 py-20 bg-black">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-2">Dropwing Groups</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Explore the Ecosystem</h2>
                    </div>
                    <Link
                        to="/what-we-do"
                        className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors group"
                    >
                        All Ventures
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className={`grid grid-cols-2 md:grid-cols-${Math.min(otherVentures.length, 4)} gap-4`}>
                    {otherVentures.map((v, i) => (
                        <motion.div
                            key={v.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <Link
                                to={v.href}
                                className="group block h-full p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                <p className="text-[9px] font-mono uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors mb-3">{v.category}</p>
                                <h3 className="text-base font-bold text-gray-300 group-hover:text-white transition-colors mb-2 flex items-center gap-2">
                                    {v.name}
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                </h3>
                                <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors leading-relaxed">{v.desc}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile "all ventures" link */}
                <div className="mt-8 md:hidden text-center">
                    <Link
                        to="/what-we-do"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                        View All Ventures <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default VentureEcosystem;
