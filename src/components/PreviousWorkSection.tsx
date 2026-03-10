"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Cpu, Layout, Code2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const stagger = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 as const },
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

// Updated Data with tags and categories
const previousWorks = [
    {
        id: 1,
        title: "Travel Co. Luxury Concierge",
        category: "Luxury Travel",
        description: "A premium luxury travel platform curating bespoke global experiences with a minimalist, high-end aesthetic.",
        imageSrc: "/work/travel-co.png",
        link: "https://travel-co-plum.vercel.app/",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        icon: Globe
    },
    {
        id: 2,
        title: "Enterprise AI Chatbot",
        category: "AI Automation",
        description: "Developed and deployed a highly context-aware conversational agent using fine-tuned LLMs for enterprise support.",
        imageSrc: "/services/ai-chatbots.jpg",
        link: "#",
        tags: ["Python", "OpenAI", "LangChain"],
        icon: Cpu
    },
    {
        id: 3,
        title: "Dynamic E-Commerce Site",
        category: "Web Development",
        description: "Engineered a Next.js web application with 3D models and premium UI interactions for high-conversion retail.",
        imageSrc: "/services/website-development.jpg",
        link: "#",
        tags: ["React", "Three.js", "Radix UI"],
        icon: Layout
    },
];

function ProjectCard({ work, idx }: { work: typeof previousWorks[0], idx: number }) {
    const Icon = work.icon;

    return (
        <motion.div
            {...stagger(idx)}
            className="group relative flex flex-col h-full bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
        >
            {/* Image Container */}
            <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                    src={work.imageSrc}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/10 backdrop-blur-lg border border-white/20 text-white text-[10px] uppercase font-bold tracking-[0.15em] py-1.5 px-3 rounded-full shadow-lg">
                        {work.category}
                    </span>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] group-hover:text-black transition-colors leading-tight">
                        {work.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-black/5 text-[#1a1a1a]/40 group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                </div>

                <p className="font-body text-[#1a1a1a]/70 text-sm md:text-[15px] leading-relaxed mb-6 line-clamp-3">
                    {work.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {work.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1.5 bg-black/[0.03] border border-black/5 text-[#1a1a1a]/60 text-[10px] md:text-xs font-medium py-1 px-2.5 rounded-md">
                            <Code2 className="w-3 h-3 opacity-40" />
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Main Action Action */}
                <button
                    onClick={() => window.open(work.link, "_blank")}
                    className="w-full flex items-center justify-center gap-2 py-3.5 md:py-4 bg-[#2190FF] hover:bg-[#1a7cdb] text-white rounded-xl md:rounded-2xl font-bold text-sm transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40"
                >
                    Visit Website <ExternalLink className="w-4 h-4" />
                </button>
            </div>

            {/* Subtle Liquid-Glass Hover Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 blur-[60px] rounded-full" />
            </div>
        </motion.div>
    );
}

export function PreviousWorkSection() {
    return (
        <section id="work" className="relative z-10 py-12 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
            <AnimatedSection className="mb-12 md:mb-20 text-center flex flex-col items-center">
                <span className="section-tag section-tag--centered text-[10px] md:text-xs py-1.5 px-3 md:py-2 md:px-4">PROVEN EXCELLENCE</span>
                <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-3xl sm:text-4xl md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] leading-none mt-2">
                    RECENT PROJECTS
                </h2>
                <p className="font-body text-[rgba(26,26,26,0.85)] font-medium mt-4 md:mt-6 max-w-2xl text-sm md:text-lg leading-relaxed">
                    A curated selection of our most impactful work, from high-end consumer experiences to complex enterprise automations.
                </p>
            </AnimatedSection>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {previousWorks.map((work, idx) => (
                    <ProjectCard key={work.id} work={work} idx={idx} />
                ))}
            </div>
        </section>
    );
}
