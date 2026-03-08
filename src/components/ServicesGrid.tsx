"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceModal } from "@/components/ServiceModal";

const stagger = (i: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 as const },
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const servicesItems = [
    {
        id: 1,
        title: "AI Automation",
        description: "Streamline complex workflows with autonomous agents that never sleep.",
        details: "We deploy intelligent agents that handle repetitive tasks across your tech stack — from data extraction to multi-step workflows. They operate 24/7, learn from your data, and reduce costs by up to 85%.",
        imageSrc: "/services/ai-automation.jpg",
    },
    {
        id: 2,
        title: "Website Development",
        description: "Custom-built, high-performance websites engineered for conversion and scale.",
        details: "We engineer digital experiences that convert — built with Next.js, advanced animations, and real-time personalization. Optimized for Core Web Vitals, SEO, and accessibility from day one.",
        imageSrc: "/services/website-development.jpg",
    },
    {
        id: 3,
        title: "AI Chatbots & Assistants",
        description: "Context-aware conversational interfaces that resolve issues instantly.",
        details: "Built on advanced LLMs fine-tuned to your domain, our chatbots understand nuance, maintain context, and resolve complex queries autonomously — integrating with your CRM and support systems.",
        imageSrc: "/services/ai-chatbots.jpg",
    },
    {
        id: 4,
        title: "Voice Caller Agent Inbound & Outbound",
        description: "Intelligent AI voice agents for automated customer support and proactive outreach.",
        details: "Natural-sounding AI agents that handle inbound FAQs, bookings, and routing — plus outbound campaigns for reminders, follow-ups, and lead qualification. Multilingual, 24/7, zero hold times.",
        imageSrc: "/services/voice-agent.jpg",
    },
];

export function ServicesGrid() {
    const [selectedService, setSelectedService] = useState<typeof servicesItems[number] | null>(null);

    return (
        <>
            <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesItems.map((item, idx) => (
                    <motion.div
                        key={item.id}
                        {...stagger(idx)}
                        className="relative h-[480px] rounded-[32px] overflow-hidden group cursor-pointer anti-gravity"
                        onClick={() => setSelectedService(item)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                setSelectedService(item);
                            }
                        }}
                        aria-label={`Learn more about ${item.title}`}
                    >
                        <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed border-l-2 border-white/30 pl-4 tracking-wide">
                                {item.description}
                            </p>
                            <span className="mt-3 inline-flex items-center gap-1.5 text-white/60 text-xs font-medium tracking-wider uppercase group-hover:text-white/90 transition-colors">
                                Click to learn more →
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        </>
    );
}
