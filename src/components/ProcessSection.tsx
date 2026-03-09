"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LiquidGlassCard as NotificationCard } from "@/components/ui/liquid-notification";

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

const processSteps = [
    { phase: "1", title: "Discovery", desc: "Deep architectural audit of your existing infrastructure and data pipelines.", imageSrc: "/process/discovery.jpg" },
    { phase: "2", title: "Design", desc: "Blueprint formulation of the AI agent hierarchy and neural architecture.", imageSrc: "/process/design.jpg" },
    { phase: "3", title: "Build", desc: "Rigorous coding, model training, and integration testing in isolated sandboxes.", imageSrc: "/process/build.jpg" },
    { phase: "4", title: "Launch", desc: "Phased rollout with real-time monitoring and feedback loops for continuous learning.", imageSrc: "/process/launch.jpg" },
];

export function ProcessSection() {
    return (
        <section id="process" className="relative z-10 py-12 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-12 md:mb-20">
                <span className="section-tag section-tag--centered text-[10px] md:text-xs py-1.5 px-3 md:py-2 md:px-4">Methodology</span>
                <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-2xl md:text-7xl mt-2 md:mt-4 !text-[#1a1a1a]">
                    Execution Protocol
                </h2>
                <span className="font-body text-[#1a1a1a] mt-2 md:mt-4 font-bold tracking-widest text-xs md:text-sm">
                    / 04 PHASES
                </span>
            </motion.div>

            <div className="process-timeline max-w-5xl mx-auto">
                {processSteps.map((step, i) => (
                    <motion.div key={i} {...stagger(i)} className="process-step group">
                        <div className="process-node" />

                        <NotificationCard
                            draggable={false}
                            expandable={true}
                            expandOnHover={true}
                            width="100%"
                            height="auto"
                            expandedWidth="100%"
                            expandedHeight="auto"
                            blurIntensity="lg"
                            shadowIntensity="md"
                            glowIntensity="sm"
                            borderRadius="24px"
                            className="process-content bg-white/10 anti-gravity overflow-hidden border-white/20 !p-0 min-h-[80px] md:min-h-[100px]"
                        >
                            {(isExpanded) => (
                                <div className="flex flex-col justify-center h-full sm:min-h-[100px] w-full p-3 md:p-8 relative">
                                    <div className="process-number text-xl md:text-4xl">{step.phase}</div>
                                    <div className="flex items-center justify-between w-full relative z-10">
                                        <div className="flex items-center gap-2 md:gap-4 pl-10 md:pl-0">
                                            <h4 className="text-base md:text-2xl font-[family-name:var(--font-oswald)] font-extrabold text-[#1a1a1a] uppercase truncate pr-4">
                                                {step.title}
                                            </h4>
                                        </div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{
                                            opacity: isExpanded ? 1 : 0,
                                            height: isExpanded ? 'auto' : 0,
                                            marginTop: isExpanded ? 16 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden relative z-10 flex flex-col gap-3 md:gap-4"
                                    >
                                        <p className="font-body text-[#1a1a1a]/70 text-[11px] md:text-lg pl-10 md:pl-0 mt-1 md:mt-0">
                                            {step.desc}
                                        </p>
                                        <div className="relative w-full h-20 sm:h-48 overflow-hidden rounded-xl border border-[rgba(26,26,26,0.1)] shadow-sm">
                                            <Image
                                                src={step.imageSrc}
                                                alt={step.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </NotificationCard>
                        <div className="w-[calc(50%-60px)] hidden md:block" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
