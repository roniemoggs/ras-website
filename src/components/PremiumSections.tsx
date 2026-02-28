"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { FloatingOrb } from "./FloatingOrb";

/* ────────────────────────────────────────────
   Service icon SVGs (inline for zero deps)
   ──────────────────────────────────────────── */

function LotusIcon() {
    return (
        <svg viewBox="0 0 80 80" className="glass-card__icon" fill="none">
            {/* center petal */}
            <ellipse cx="40" cy="38" rx="10" ry="22" fill="url(#lotusGrad)" opacity={0.9} />
            {/* left petal */}
            <ellipse cx="40" cy="38" rx="10" ry="22" fill="url(#lotusGrad)" opacity={0.7}
                transform="rotate(-30 40 38)" />
            {/* right petal */}
            <ellipse cx="40" cy="38" rx="10" ry="22" fill="url(#lotusGrad)" opacity={0.7}
                transform="rotate(30 40 38)" />
            {/* outer left */}
            <ellipse cx="40" cy="38" rx="8" ry="20" fill="url(#lotusGrad)" opacity={0.4}
                transform="rotate(-55 40 38)" />
            {/* outer right */}
            <ellipse cx="40" cy="38" rx="8" ry="20" fill="url(#lotusGrad)" opacity={0.4}
                transform="rotate(55 40 38)" />
            <defs>
                <linearGradient id="lotusGrad" x1="40" y1="16" x2="40" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f0c6d8" />
                    <stop offset="1" stopColor="#c084fc" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function NeuralIcon() {
    return (
        <svg viewBox="0 0 80 80" className="glass-card__icon" fill="none">
            {/* nodes */}
            {[[40, 20], [20, 40], [60, 40], [30, 60], [50, 60], [40, 40]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={4} fill="url(#neuralGrad)" />
            ))}
            {/* connections */}
            {[
                [40, 20, 20, 40], [40, 20, 60, 40], [40, 20, 40, 40],
                [20, 40, 30, 60], [20, 40, 40, 40],
                [60, 40, 50, 60], [60, 40, 40, 40],
                [40, 40, 30, 60], [40, 40, 50, 60],
            ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(212,175,55,0.35)" strokeWidth={1} />
            ))}
            {/* glow ring on center */}
            <circle cx="40" cy="40" r="7" stroke="rgba(212,175,55,0.3)" strokeWidth={1} fill="none" />
            <defs>
                <radialGradient id="neuralGrad">
                    <stop stopColor="#D4AF37" />
                    <stop offset="1" stopColor="#9333ea" />
                </radialGradient>
            </defs>
        </svg>
    );
}

function SphereIcon() {
    return (
        <svg viewBox="0 0 80 80" className="glass-card__icon" fill="none">
            <circle cx="40" cy="40" r="24" fill="url(#sphereGrad)" />
            <ellipse cx="40" cy="40" rx="24" ry="8" stroke="rgba(255,255,255,0.15)" strokeWidth={0.8} fill="none" />
            <ellipse cx="40" cy="40" rx="8" ry="24" stroke="rgba(255,255,255,0.1)" strokeWidth={0.8} fill="none" />
            {/* specular */}
            <ellipse cx="34" cy="32" rx="8" ry="6" fill="rgba(255,255,255,0.25)" />
            <defs>
                <radialGradient id="sphereGrad" cx="35%" cy="30%">
                    <stop stopColor="#e8d5b0" />
                    <stop offset="0.6" stopColor="#8b7355" />
                    <stop offset="1" stopColor="#3a2f20" />
                </radialGradient>
            </defs>
        </svg>
    );
}

/* ────────────────────────────────────────────
   Sections
   ──────────────────────────────────────────── */

const services = [
    { title: "Analytics", Icon: LotusIcon, desc: "Transform raw data into actionable intelligence with real-time dashboards and predictive models." },
    { title: "Automation", Icon: NeuralIcon, desc: "Deploy autonomous agents that orchestrate complex workflows without human intervention." },
    { title: "Model Creation", Icon: SphereIcon, desc: "Custom-built neural architectures, fine-tuned on your proprietary datasets for maximum accuracy." },
];

const palette = [
    { name: "Deep Cosmos", hex: "#0D1B2C", color: "#0D1B2C", highlight: "rgba(100,160,220,0.6)" },
    { name: "Stellar Blue", hex: "#11293F", color: "#11293F", highlight: "rgba(80,140,255,0.5)" },
    { name: "Textured Cream", hex: "#EDE5CF", color: "#EDE5CF", highlight: "rgba(255,255,255,0.8)" },
    { name: "Gilded Gold", hex: "#C6A75B", color: "#C6A75B", highlight: "rgba(255,230,150,0.7)" },
    { name: "Shadow Cast", hex: "#2D3941", color: "#2D3941", highlight: "rgba(140,170,190,0.5)" },
    { name: "Lotus Bloom", hex: "#F2C2C2", color: "#F2C2C2", highlight: "rgba(255,220,220,0.8)" },
];

export function PremiumServices() {
    return (
        <section id="premium-services" className="premium-section">
            {/* background nebula glow */}
            <div className="premium-section__nebula" />

            <div className="premium-section__inner">
                {/* ── heading ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="premium-section__header"
                >
                    <span className="premium-section__tag">SERVICES</span>
                    <h2 className="premium-section__title">
                        Synthesize. Sculpt. Solve.
                    </h2>
                </motion.div>

                {/* ── glass cards ── */}
                <div className="premium-cards">
                    {services.map((s, i) => (
                        <GlassCard key={i} floatDelay={i * 0.6} floatDuration={4 + i * 0.4}>
                            <div className="premium-card__content">
                                <motion.div
                                    animate={{ y: [-3, 3, -3] }}
                                    transition={{
                                        duration: 3 + i * 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.3,
                                    }}
                                >
                                    <s.Icon />
                                </motion.div>
                                <h3 className="premium-card__title">{s.title}</h3>
                                <p className="premium-card__desc">{s.desc}</p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function DesignPhilosophy() {
    return (
        <section id="design-philosophy" className="premium-section philosophy-section">
            <div className="premium-section__inner">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                    className="philosophy-panel"
                >
                    {/* breathing background */}
                    <motion.div
                        className="philosophy-panel__bg"
                        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.02, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <span className="philosophy-tag">DESIGN PHILOSOPHY</span>
                        <h2 className="philosophy-heading">
                            The Liquid Glass Paradigm
                        </h2>
                        <p className="philosophy-body">
                            AI is the new &lsquo;liquid glass&rsquo; — a material that is simultaneously transparent
                            and reflective, adaptable and unyielding. Our design philosophy mirrors this duality:
                            interfaces that feel weightless yet deliver immovable precision. Every pixel is formed
                            under pressure, every interaction sculpted to remove friction. We believe premium AI
                            isn&rsquo;t about complexity on the surface — it&rsquo;s about staggering depth beneath
                            an effortless exterior.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export function ColorPalette() {
    return (
        <section id="color-palette" className="premium-section palette-section">
            <div className="premium-section__inner">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8 }}
                    className="palette-header"
                >
                    <span className="premium-section__tag">MATERIAL PALETTE</span>
                    <h2 className="premium-section__title" style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
                        Crafted from the Cosmos
                    </h2>
                </motion.div>

                <div className="palette-grid">
                    {palette.map((p, i) => (
                        <FloatingOrb
                            key={i}
                            color={p.color}
                            highlight={p.highlight}
                            name={p.name}
                            hex={p.hex}
                            floatDelay={i * 0.45}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
