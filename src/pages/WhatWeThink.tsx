import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ChevronRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insights } from '@/data/insights';

const ALL_CATEGORIES = ["All", ...Array.from(new Set(insights.map(i => i.category)))];

const WhatWeThink = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredInsight = insights[0];
    const allInsights = insights.slice(1);

    const filteredInsights = useMemo(() => {
        return allInsights.filter(insight => {
            const matchesCategory = activeCategory === "All" || insight.category === activeCategory;
            const matchesSearch = searchQuery === "" ||
                insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                insight.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            {/* Hero Header — balanced two-column */}
            <section className="px-6 md:px-12 lg:px-24 mb-20 max-w-screen-2xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block text-xs font-bold tracking-widest uppercase text-primary mb-4">
                            Institutional Memory
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            What We Think
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                            Perspectives on governance, operational sovereignty, and the future of the enterprise.
                        </p>
                    </motion.div>

                    {/* Right: Editorial decoration — large quote marks + stat */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex flex-col justify-center items-end gap-8 pr-4"
                    >
                        {/* Oversized decorative quote */}
                        <div className="text-[12rem] leading-none font-bold text-muted/10 select-none pointer-events-none tracking-tighter" aria-hidden="true">
                            "
                        </div>
                        <div className="flex gap-10 text-right">
                            <div>
                                <div className="text-3xl font-bold text-foreground">{insights.length}</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">Perspectives</div>
                            </div>
                            <div className="border-l border-border/40 pl-10">
                                <div className="text-3xl font-bold text-foreground">3</div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">Categories</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Insight */}
            <section className="px-6 md:px-12 lg:px-24 mb-20 max-w-screen-2xl mx-auto">
                <Link to={`/insights/${featuredInsight.slug}`} className="group block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
                    <img
                        src={featuredInsight.heroImage}
                        alt={featuredInsight.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/80 mb-4">
                                <span className="bg-primary/80 backdrop-blur px-3 py-1 text-white">{featuredInsight.category}</span>
                                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{featuredInsight.date}</span>
                                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{featuredInsight.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:underline decoration-primary underline-offset-8">
                                {featuredInsight.title}
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 line-clamp-2 max-w-2xl mb-8">
                                {featuredInsight.summary.split('.')[0]}.
                            </p>
                            <span className="inline-flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm group-hover:gap-4 transition-all">
                                Read Article <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Filter + Search Bar */}
            <section className="px-6 md:px-12 lg:px-24 mb-12 max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-border/40 pb-6">
                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-2">
                        {ALL_CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${activeCategory === cat
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative flex-shrink-0 w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search perspectives…"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-8 py-2.5 text-sm bg-background border border-border/40 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                                <X className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Results count */}
                <div className="mt-3 text-xs font-mono text-muted-foreground">
                    {filteredInsights.length === 0
                        ? "No results"
                        : `${filteredInsights.length} perspective${filteredInsights.length !== 1 ? 's' : ''}`}
                    {activeCategory !== "All" && <span className="ml-2 text-primary">· {activeCategory}</span>}
                </div>
            </section>

            {/* Insights Grid */}
            <section className="px-6 md:px-12 lg:px-24 mb-24 max-w-screen-2xl mx-auto">
                <AnimatePresence mode="wait">
                    {filteredInsights.length > 0 ? (
                        <motion.div
                            key={activeCategory + searchQuery}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                        >
                            {filteredInsights.map((insight) => (
                                <Link key={insight.slug} to={`/insights/${insight.slug}`} className="group flex flex-col h-full">
                                    <div className="relative aspect-[3/2] overflow-hidden rounded-sm mb-6">
                                        <img
                                            src={insight.heroImage}
                                            alt={insight.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                                            {insight.category}
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {insight.date}</span>
                                            <span className="w-px h-3 bg-border" />
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {insight.readTime}</span>
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-3">
                                            {insight.title}
                                        </h3>

                                        <p className="text-muted-foreground line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                                            {insight.summary.split('.').slice(0, 2).join('. ')}.
                                        </p>

                                        {/* Consistent CTA on every card */}
                                        <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary group-hover:gap-3 transition-all">
                                            Read Now <ChevronRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="empty"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-24 text-center"
                        >
                            <p className="text-muted-foreground text-lg mb-4">No perspectives match your search.</p>
                            <button
                                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                className="text-sm font-bold text-primary hover:underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Newsletter / CTA */}
            <section className="px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                <div className="bg-muted/30 p-12 md:p-24 text-center border border-border/40">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary block mb-4">Institutional Briefing</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay informed</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Sign up for our briefing to receive governance insights and operational strategies directly.
                    </p>
                    <form
                        className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
                        onSubmit={e => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 px-4 py-3 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default WhatWeThink;
