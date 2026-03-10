"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { AnimatedSection } from "@/components/AnimatedSection";

const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 as const },
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

// Mock Data for Previous Work
const previousWorks = [
    {
        id: 1,
        title: "Travel Co. Luxury Concierge",
        description: "A premium luxury travel platform curating bespoke global experiences with a minimalist, high-end aesthetic.",
        imageSrc: "/work/travel-co.png",
        link: "https://travel-co-plum.vercel.app/",
    },
    {
        id: 2,
        title: "Enterprise Chatbot",
        description: "Developed and deployed a highly context-aware conversational agent using fine-tuned LLMs.",
        imageSrc: "/services/ai-chatbots.jpg", // Using placeholder image from existing services
        link: "https://example.com/project-2",
    },
    {
        id: 3,
        title: "Dynamic E-Commerce Site",
        description: "Engineered a Next.js web application with 3D models and premium UI interactions.",
        imageSrc: "/services/website-development.jpg", // Using placeholder image from existing services
        link: "https://example.com/project-3",
    },
];

export function PreviousWorkSection() {
    return (
        <section id="work" className="relative z-10 py-12 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
            <AnimatedSection className="mb-8 md:mb-16 text-center flex flex-col items-center">
                <span className="section-tag section-tag--centered text-[10px] md:text-xs py-1.5 px-3 md:py-2 md:px-4">FEATURED PORTFOLIO</span>
                <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-3xl sm:text-4xl md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] leading-none mt-2">
                    PREVIOUS WORK
                </h2>
                <p className="font-body text-[rgba(26,26,26,0.85)] font-medium mt-4 md:mt-6 max-w-2xl text-sm md:text-lg leading-relaxed">
                    Explore our recent projects and see how we&apos;ve helped businesses scale and automate with premium AI solutions.
                </p>
            </AnimatedSection>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {previousWorks.map((work, idx) => (
                    <motion.div
                        key={work.id}
                        {...stagger(idx)}
                        className="h-full flex flex-col group"
                    >
                        {/* We use LiquidButton to wrap the card, giving it the premium glass feel */}
                        <LiquidButton
                            size="xxl"
                            variant="default"
                            className="w-full h-full !rounded-3xl md:!rounded-2xl p-0 overflow-hidden relative"
                            onClick={() => window.open(work.link, "_blank")}
                        >
                            <div className="flex flex-col h-full w-full">
                                {/* Image Container */}
                                <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
                                    <Image
                                        src={work.imageSrc}
                                        alt={work.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                                    {/* Top Right external link icon */}
                                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <ExternalLink className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow items-start text-left bg-transparent">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-2 md:mb-3">
                                        {work.title}
                                    </h3>
                                    <p className="font-body text-[#1a1a1a]/70 text-sm md:text-base leading-relaxed tracking-wide">
                                        {work.description}
                                    </p>

                                    <div className="mt-auto pt-6 flex w-full justify-between items-center">
                                        <span className="inline-flex items-center gap-1.5 text-[#1a1a1a]/80 text-[10px] md:text-xs font-bold tracking-wider uppercase group-hover:text-black transition-colors">
                                            View Project <ExternalLink className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </LiquidButton>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
