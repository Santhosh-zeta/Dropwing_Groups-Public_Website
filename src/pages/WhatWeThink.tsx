import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insights } from '@/data/insights';

const WhatWeThink = () => {
    const featuredInsight = insights[0];
    const remainingInsights = insights.slice(1);

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            {/* Header */}
            <section className="px-6 md:px-12 lg:px-24 mb-20 max-w-screen-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="block text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                        Institutional Memory
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        What We Think
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
                        Perspectives on governance, operational sovereignty, and the future of the enterprise.
                    </p>
                </motion.div>
            </section>

            {/* Featured Insight */}
            <section className="px-6 md:px-12 lg:px-24 mb-32 max-w-screen-2xl mx-auto">
                <Link to={`/insights/${featuredInsight.slug}`} className="group block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm">
                    <img
                        src={featuredInsight.heroImage}
                        alt={featuredInsight.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white/80 mb-4">
                                <span>{featuredInsight.category}</span>
                                <span className="w-1 h-1 bg-white/50 rounded-full" />
                                <span>{featuredInsight.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:underline decoration-primary underline-offset-8">
                                {featuredInsight.title}
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 line-clamp-2 md:line-clamp-none max-w-2xl mb-8">
                                {featuredInsight.summary.split('.')[0]}.
                            </p>
                            <span className="inline-flex items-center gap-2 text-white font-bold tracking-wide uppercase text-sm group-hover:gap-4 transition-all">
                                Read Article <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Insights Grid */}
            <section className="px-6 md:px-12 lg:px-24 mb-24 max-w-screen-2xl mx-auto">
                <div className="flex items-center justify-between mb-12 border-b border-border pb-4">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Latest Perspectives</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {remainingInsights.map((insight, index) => (
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

                                <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-3">
                                    {insight.title}
                                </h3>

                                <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
                                    {insight.summary.split('.').slice(0, 2).join('. ')}.
                                </p>

                                <div className="mt-auto flex items-center text-sm font-bold uppercase tracking-wide group-hover:gap-2 transition-all">
                                    Read Now <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
                <div className="bg-muted/30 rounded-lg p-12 md:p-24 text-center border border-border">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay informed</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                        Sign up for our briefing to receive governance insights and operational strategies directly.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="flex-1 px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button className="px-8 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm rounded-sm hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default WhatWeThink;
