import { ArrowUpRight, Linkedin, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/sections/SiteFooter";
import { insights } from "@/data/insights";


const InsightArticle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState<string | null>("01");

    const article = insights.find(i => i.slug === slug);

    // If article is not found, we could redirect to 404 or show a loading state
    // For now, let's handle it gracefully with a check
    useEffect(() => {
        if (!article) {
            console.warn(`Article not found for slug: ${slug}`);
            // navigate("/404"); // Optional: auto-redirect
        }
    }, [article, slug, navigate]);

    if (!article) {
        return (
            <main className="bg-black min-h-screen text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article not found</h1>
                    <button onClick={() => navigate("/")} className="text-[blue-500] hover:underline">
                        Return Home
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-black min-h-screen text-white font-sans selection:bg-violet-500/30 selection:text-white">
            {/* Shared Navbar for consistent branding */}
            <Navbar />

            {/* ── Phase 2: Hero Section ── */}
            <header className="px-6 pt-32 pb-20 md:px-12 md:pb-24 lg:px-20 max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-[1fr_300px] gap-20">
                    <div className="space-y-8">
                        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-white/60">
                            {article.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-white">
                            {article.title}
                        </h1>

                        <div className="pt-8 flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/60">
                            <span>{article.readTime}</span>
                            <span className="w-1 h-1 bg-white/40 rounded-full" />
                            <span>{article.date}</span>
                        </div>

                        {/* Structural Accent Line */}
                        <div className="h-px w-full max-w-2xl bg-violet-500/50 mt-12" />
                    </div>
                </div>
            </header>

            {/* ── Phase 3: In Brief ── */}
            <section className="px-6 py-12 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">In brief</h2>

                <ul className="space-y-8 mb-16 max-w-4xl">
                    {article.summary.split('.').filter(s => s.trim().length > 0).map((item, i) => (
                        <li key={i} className="flex gap-6 items-start">
                            <span className="w-1.5 h-1.5 bg-violet-500 rounded-none mt-2.5 shrink-0" />
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                                {item.trim()}.
                            </p>
                        </li>
                    ))}
                </ul>

                <button className="group flex items-center gap-3 border border-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                    Read the report
                    <ArrowUpRight className="h-4 w-4" />
                </button>
            </section>

            {/* ── Phase 3.5: Content Body ── */}
            <section className="px-6 py-20 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white max-w-3xl leading-tight">
                    {article.content.heading}
                </h2>

                <div className="grid lg:grid-cols-[1fr_400px] gap-20">
                    <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
                        {article.content.body.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>

                    <aside className="flex flex-col justify-center border-l-2 border-violet-500 pl-8">
                        <blockquote className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            {article.content.quote}
                        </blockquote>
                    </aside>
                </div>
            </section>

            {/* ── Phase 4: Three places to start (Accordion) ── */}
            <section className="px-6 py-20 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-t border-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">Three places to start</h2>

                <div className="space-y-0 border-t border-gray-800">
                    {article.accordionItems.map((item) => (
                        <div key={item.id} className="group border-b border-gray-800">
                            <button
                                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                                className="w-full flex items-start md:items-center justify-between py-10 md:py-12 text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                                    <span className={`text-xl md:text-2xl font-bold transition-colors ${activeId === item.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                                        {item.id}
                                    </span>
                                    <h3 className={`text-2xl md:text-3xl font-bold transition-colors max-w-2xl ${activeId === item.id ? 'text-violet-300' : 'text-gray-400 group-hover:text-white'}`}>
                                        {item.title}
                                    </h3>
                                </div>
                                <div className={`ml-4 shrink-0 p-2 border transition-all duration-300 ${activeId === item.id ? 'border-violet-500 bg-violet-500/10 text-violet-400 rounded-none' : 'border-white/10 group-hover:border-white/30 text-white rounded-none'}`}>
                                    <Plus className={`w-4 h-4 md:w-6 md:h-6 transition-transform duration-300 ${activeId === item.id ? "rotate-45" : "rotate-0"}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeId === item.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 pl-0 md:pl-[6.5rem] max-w-4xl space-y-6 text-gray-300">
                                            {item.content.map((paragraph, idx) => (
                                                <p key={idx} className={idx % 2 === 0 ? "font-bold text-white text-lg" : "text-base leading-relaxed"}>
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>


            {/* ── Phase 6: Footer (Universal SiteFooter) ── */}
            <SiteFooter />
        </main >
    );
};

export default InsightArticle;
