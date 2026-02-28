"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
    color: string;        // gradient center color
    highlight?: string;   // specular highlight tint
    name: string;
    hex: string;
    floatDelay?: number;
}

export function FloatingOrb({
    color,
    highlight = "rgba(255,255,255,0.7)",
    name,
    hex,
    floatDelay = 0,
}: FloatingOrbProps) {
    return (
        <motion.div
            className="floating-orb-wrap"
            animate={{ y: [-6, 6, -6] }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay,
            }}
        >
            <motion.div
                className="floating-orb"
                whileHover={{ scale: 1.18 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    background: `radial-gradient(circle at 35% 30%, ${highlight} 0%, ${color} 45%, rgba(0,0,0,0.5) 100%)`,
                    boxShadow: `
            inset 0 -8px 16px rgba(0,0,0,0.45),
            inset 0 4px 12px ${highlight},
            0 0 30px ${color}44,
            0 8px 32px rgba(0,0,0,0.4)
          `,
                }}
            >
                {/* specular highlight spot */}
                <div
                    className="floating-orb__spec"
                    style={{
                        background: `radial-gradient(ellipse at 40% 25%, ${highlight} 0%, transparent 60%)`,
                    }}
                />
            </motion.div>

            <div className="floating-orb__label">
                <span className="floating-orb__name">{name}</span>
                <span className="floating-orb__hex">{hex}</span>
            </div>
        </motion.div>
    );
}
