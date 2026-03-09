"use client";

import { motion } from "framer-motion";
import {
    ShoppingCart,
    HeartPulse,
    Landmark,
    HeadphonesIcon,
    Megaphone,
    Briefcase,
} from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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

const industries = [
    { name: "E-Commerce", icon: ShoppingCart, prop: "Scale personalization and automate storefront ops." },
    { name: "Healthcare", icon: HeartPulse, prop: "Streamline patient scheduling and diagnostic workflows." },
    { name: "Finance", icon: Landmark, prop: "Enhance fraud detection algorithms and predictive scoring." },
    { name: "Customer Service", icon: HeadphonesIcon, prop: "Deploy 24/7 intelligent tier-1 autonomous agents." },
    { name: "Marketing", icon: Megaphone, prop: "Optimize ad spend tracking and content generation." },
    { name: "Operations", icon: Briefcase, prop: "Transform complex data pipelines into automated insights." },
];

export function IndustriesSection() {
    return (
        <section id="industries" className="relative z-10 py-12 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="mb-8 md:mb-12 text-center">
                <span className="section-tag section-tag--centered text-xs md:text-sm py-1.5 px-3 md:py-2 md:px-4">Our Proven Experience</span>
                <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-2xl md:text-5xl mt-2 md:mt-4 text-[#1a1a1a]">
                    Industries We&apos;ve Transformed
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {industries.map((ind, i) => (
                    <motion.div key={i} {...stagger(i)} className="h-full group">
                        <LiquidButton
                            size="xxl"
                            variant="default"
                            className="w-full h-auto !rounded-3xl md:!rounded-2xl py-3.5 px-3.5 md:py-8 md:px-8"
                        >
                            <div className="flex flex-col gap-1.5 md:gap-3 items-start w-full whitespace-normal text-left">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="flex flex-shrink-0 h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-black/5 text-[#1a1a1a] border border-black/10">
                                        <ind.icon className="w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                    <h4 className="text-sm md:text-lg font-bold text-[#1a1a1a]">{ind.name}</h4>
                                </div>
                                <p className="font-body text-[#1a1a1a]/70 text-[11px] md:text-sm pl-[44px] md:pl-16">
                                    {ind.prop}
                                </p>
                            </div>
                        </LiquidButton>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
