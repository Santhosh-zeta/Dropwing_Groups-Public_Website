import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const useSystemDepth = () => {
    const { scrollYProgress } = useScroll();

    // 0 = Surface, 1 = Deep System
    const depth = scrollYProgress;

    // Derived values for system effects
    const gridDensity = useTransform(depth, [0, 1], [0.5, 2]); // Grid gets tighter
    const systemOpacity = useTransform(depth, [0, 0.2, 0.8, 1], [0, 1, 1, 0]); // Fade in/out
    const atmosphereDarkness = useTransform(depth, [0, 1], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]); // Darker at bottom

    return {
        depth,
        gridDensity,
        systemOpacity,
        atmosphereDarkness
    };
};
