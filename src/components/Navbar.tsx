"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { GlassButton } from "@/components/ui/glass-button";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { LiquidRadioGlassFilter } from "@/components/ui/liquid-radio";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const NAV_ITEMS = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Industries", id: "industries" },
    { label: "Benefits", id: "benefits" },
    { label: "Process", id: "process" },
    { label: "Case Studies", id: "work" },
    { label: "Contact", id: "contact" },
];

export function Navbar() {
    const [visible, setVisible] = useState(false);
    const [activeId, setActiveId] = useState("home");
    const navRef = useRef<HTMLElement>(null);

    /* ── Show / hide based on hero visibility ── */
    useEffect(() => {
        const hero = document.getElementById("home");
        if (!hero) return;

        const obs = new IntersectionObserver(
            ([entry]) => setVisible(!entry.isIntersecting),
            { threshold: 0.15 }
        );
        obs.observe(hero);
        return () => obs.disconnect();
    }, []);

    /* ── Track active section ── */
    useEffect(() => {
        const ids = NAV_ITEMS.map((n) => n.id);
        const observers: IntersectionObserver[] = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(id);
                },
                { rootMargin: "-40% 0px -55% 0px" }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    /* ── Smooth scroll handler ── */
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    ref={navRef}
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="navbar-fixed"
                >
                    {/* Full liquid glass SVG distortion filter */}
                    <GlassFilter />

                    <GlassEffect
                        className="rounded-full navbar-liquid-glass-wrap"
                        style={{
                            boxShadow:
                                "0 4px 24px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div className="navbar-inner">
                            {/* ── Brand + tabs ── */}
                            <div className="navbar-glass-container">
                                {/* ── Brand ── */}
                                <span className="navbar-brand">RadhaAI Solutions</span>

                                {/* ── Section tabs ── */}
                                <div className="navbar-tabs">
                                    <div className="inline-flex h-10 rounded-full bg-input/5 p-0.5">
                                        <RadioGroup
                                            value={activeId}
                                            onValueChange={(val) => scrollTo(val)}
                                            className="group relative inline-flex items-center gap-0 text-sm font-medium"
                                            data-state={activeId}
                                        >
                                            <div
                                                className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-full transition-all duration-300 pointer-events-none"
                                                style={{ filter: 'url("#radio-glass")' }}
                                            />
                                            {NAV_ITEMS.map((item) => (
                                                <label
                                                    key={item.id}
                                                    className={`relative z-10 inline-flex h-full min-w-8 cursor-pointer select-none items-center justify-center whitespace-nowrap px-4 py-1.5 transition-colors text-muted-foreground/70 ${activeId === item.id ? "text-foreground" : "hover:text-foreground/80"}`}
                                                    onClick={() => scrollTo(item.id)}
                                                >
                                                    <span className="relative z-10">{item.label}</span>
                                                    {activeId === item.id && (
                                                        <motion.div
                                                            layoutId="nav-pill"
                                                            className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm pointer-events-none"
                                                            style={{
                                                                boxShadow: "0 0 8px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09), inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85), inset 1px 1px 1px -0.5px rgba(255,255,255,0.6), inset -1px -1px 1px -0.5px rgba(255,255,255,0.6), inset 0 0 6px 6px rgba(255,255,255,0.12), inset 0 0 2px 2px rgba(255,255,255,0.06), 0 0 12px rgba(0,0,0,0.15)"
                                                            }}
                                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                        />
                                                    )}
                                                    <RadioGroupItem id={`nav-${item.id}`} value={item.id} className="sr-only" />
                                                </label>
                                            ))}
                                            <LiquidRadioGlassFilter />
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>

                            {/* ── CTA button (inside glass bar) ── */}
                            <GradientButton
                                onClick={() => scrollTo("contact")}
                                className="ml-2 gap-2 h-10 px-6 py-2 min-w-0"
                                variant="variant"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Book Discovery Call</span>
                            </GradientButton>
                        </div>
                    </GlassEffect>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
