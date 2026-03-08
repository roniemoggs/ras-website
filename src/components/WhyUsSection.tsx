"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Rocket, BadgeDollarSign } from "lucide-react";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";

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

const differentiators = [
    {
        icon: ShieldCheck,
        title: "End-to-End Ownership",
        description:
            "We don't hand off half-finished work. From strategy to deployment to ongoing support — we own the entire lifecycle so you can focus on your business.",
    },
    {
        icon: Cpu,
        title: "AI-Native Engineering",
        description:
            "Our team doesn't bolt AI onto legacy systems. We architect solutions from the ground up using cutting-edge models, vector databases, and agent frameworks.",
    },
    {
        icon: Rocket,
        title: "Rapid Deployment",
        description:
            "Most agencies take months. We ship production-ready AI solutions in weeks — with iterative demos so you see progress from day one.",
    },
    {
        icon: BadgeDollarSign,
        title: "Transparent Pricing",
        description:
            "No hidden fees, no surprise invoices. We scope every project upfront with clear milestones and fixed pricing so you always know what you're paying for.",
    },
];

export function WhyUsSection() {
    return (
        <section className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="mb-16 text-center flex flex-col items-center">
                <span className="section-tag section-tag--centered">What Sets Us Apart</span>
                <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1a1a1a] leading-none mt-2">
                    Why Choose Us
                </h2>
                <p className="font-body text-[rgba(26,26,26,0.85)] font-medium mt-6 max-w-2xl text-lg leading-relaxed">
                    We&apos;re not just another AI agency. Here&apos;s why forward-thinking companies partner with us.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {differentiators.map((item, i) => (
                    <motion.div key={i} {...stagger(i)}>
                        <LiquidGlassCard
                            draggable={false}
                            shadowIntensity="sm"
                            borderRadius="24px"
                            glowIntensity="xs"
                            blurIntensity="xl"
                            className="flex items-start gap-6 p-8 bg-white/8 anti-gravity h-full"
                        >
                            <div className="w-14 h-14 rounded-2xl liquid-glass flex flex-shrink-0 items-center justify-center bg-white/30 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <item.icon className="w-7 h-7 text-[#1a1a1a]" />
                            </div>
                            <div>
                                <h3 className="font-[family-name:var(--font-oswald)] text-xl font-bold text-[#1a1a1a] uppercase tracking-wide mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-body text-[#1a1a1a]/70 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </LiquidGlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
