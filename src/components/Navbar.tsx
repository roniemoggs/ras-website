"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

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
                    {/* Hidden SVG filters for liquid glass effect */}
                    <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
                        <defs>
                            <filter id="navbar-liquid-glass">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    type="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 6 -2"
                                    result="goo"
                                />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                    <div className="navbar-inner">
                        {/* ── Glass container (brand + tabs) ── */}
                        <div className="navbar-glass-container">
                            {/* ── Brand ── */}
                            <span className="navbar-brand">RadhaAI Solutions</span>

                            {/* ── Section tabs ── */}
                            <div className="navbar-tabs">
                                {NAV_ITEMS.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`navbar-tab ${activeId === item.id ? "navbar-tab--active" : ""}`}
                                    >
                                        {activeId === item.id && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                className="navbar-pill"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className="navbar-tab-label">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ── CTA button (outside glass effect) ── */}
                        <GradientButton
                            onClick={() => scrollTo("contact")}
                            className="ml-2 gap-2 h-10 px-6 py-2 min-w-0"
                            variant="variant"
                        >
                            <Calendar className="w-4 h-4" />
                            <span>Book Discovery Call</span>
                        </GradientButton>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
