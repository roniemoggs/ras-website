"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    floatDelay?: number;
    floatDuration?: number;
}

export function GlassCard({
    children,
    className = "",
    floatDelay = 0,
    floatDuration = 4,
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glareX, setGlareX] = useState(50);
    const [glareY, setGlareY] = useState(50);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX(((y - centerY) / centerY) * -8);
        setRotateY(((x - centerX) / centerX) * 8);
        setGlareX((x / rect.width) * 100);
        setGlareY((y / rect.height) * 100);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setGlareX(50);
        setGlareY(50);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                y: [-5, 5, -5],
                rotateX,
                rotateY,
            }}
            transition={{
                y: {
                    duration: floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: floatDelay,
                },
                rotateX: { duration: 0.2, ease: "easeOut" },
                rotateY: { duration: 0.2, ease: "easeOut" },
            }}
            style={{ perspective: 800, transformStyle: "preserve-3d" }}
            className={`glass-card group ${className}`}
        >
            {/* inner glowing aura */}
            <div
                className="glass-card__aura"
                style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(212,175,55,0.12) 0%, transparent 60%)`,
                }}
            />
            {/* specular glare */}
            <div
                className="glass-card__glare"
                style={{
                    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
