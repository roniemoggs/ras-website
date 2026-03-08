"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 as const },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export function AnimatedSection({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div {...fadeUp} className={className}>
            {children}
        </motion.div>
    );
}
