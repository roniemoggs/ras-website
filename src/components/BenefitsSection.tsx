"use client";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    Bot,
    LineChart,
    Zap,
    Layers,
} from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
import { useIsMobile } from "@/lib/useIsMobile";

const SplineScene = lazy(() => import('@/components/ui/spline-scene').then(mod => ({ default: mod.SplineScene })));

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 as const },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 as const },
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const benefits = [
    { metric: "85%", label: "Cost Savings", icon: LineChart },
    { metric: "10x", label: "Efficiency Boost", icon: Zap },
    { metric: "24/7", label: "Availability", icon: Bot },
    { metric: "∞", label: "Scalability", icon: Layers },
];

export function BenefitsSection() {
    const splineContainerRef = useRef<HTMLDivElement>(null);
    const [splineVisible, setSplineVisible] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (isMobile) return; // Skip Spline observer on mobile
        const el = splineContainerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSplineVisible(true);
                    observer.disconnect(); // Only need to trigger once
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [isMobile]);

    return (
        <section id="benefits" className="relative z-10 py-12 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div
                    ref={splineContainerRef}
                    className="w-full h-full min-h-[320px] md:min-h-[500px] relative pointer-events-auto flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center w-full pointer-events-none"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md mb-4 mt-8 md:mt-0 pointer-events-auto">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold text-[#1a1a1a] uppercase tracking-widest">
                                Agent Online
                            </span>
                        </div>
                        <h3 className="font-[family-name:var(--font-oswald)] text-2xl md:text-5xl font-extrabold text-[#1a1a1a] uppercase text-center leading-none tracking-tight pointer-events-auto">
                            Autonomous <br /> Intelligence
                        </h3>
                    </motion.div>

                    <div className="absolute inset-0 z-0 overflow-hidden">
                        {isMobile ? (
                            /* Mobile fallback: animated gradient instead of heavy Spline 3D */
                            <div className="w-full h-full rounded-2xl" style={{
                                background: 'radial-gradient(ellipse at 30% 50%, rgba(198,165,90,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(147,51,234,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)',
                            }} />
                        ) : splineVisible ? (
                            <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
                                <SplineScene
                                    scene="https://prod.spline.design/2xK-9n5ApG7czR0w/scene.splinecode"
                                    className="w-full h-full"
                                />
                            </Suspense>
                        ) : (
                            <div className="w-full h-full bg-transparent" />
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <motion.div {...fadeUp} className="mb-6 md:mb-8 flex flex-col items-center text-center">
                        <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-4xl md:text-7xl leading-tight text-[#1a1a1a]">
                            Built for <span className="text-[#1a1a1a]/40 not-italic">Real Results</span>
                        </h2>
                        <p className="font-body text-[#1a1a1a]/80 mt-4 md:mt-6 max-w-lg text-sm md:text-base leading-relaxed">
                            We focus on what matters most: cutting costs, boosting your efficiency, and building scalable systems that work around the clock.
                        </p>
                    </motion.div>

                    {benefits.map((b, i) => (
                        <motion.div key={i} {...stagger(i)}>
                            <LiquidGlassCard
                                draggable={false}
                                shadowIntensity="sm"
                                borderRadius="24px"
                                glowIntensity="xs"
                                blurIntensity="xl"
                                className="flex items-center gap-3 md:gap-6 p-3 md:p-6 bg-white/8 anti-gravity"
                            >
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl liquid-glass flex flex-shrink-0 items-center justify-center bg-white/30 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <b.icon className="w-4 h-4 md:w-7 md:h-7 text-[#1a1a1a]" />
                                </div>
                                <div>
                                    <span className="block font-display text-2xl md:text-4xl text-[#1a1a1a] leading-none mb-1">{b.metric}</span>
                                    <span className="font-body text-[10px] md:text-sm text-[#1a1a1a]/70 uppercase tracking-widest font-bold">{b.label}</span>
                                </div>
                            </LiquidGlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
