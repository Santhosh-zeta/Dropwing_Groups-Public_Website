import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageTransition = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
