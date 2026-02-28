import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 600);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-11 h-11 border border-border/40 bg-background/90 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-lg shadow-black/20"
                >
                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    {/* Subtle violet ring on hover */}
                    <span className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
