"use client";

import { HeroCanvas } from "@/components/HeroCanvas";
import { Navbar } from "@/components/Navbar";
import { HolographicCard } from "@/components/ui/holographic-card";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  LineChart,
  Workflow,
  Layers,
  Zap,
  ShoppingCart,
  HeartPulse,
  Landmark,
  HeadphonesIcon,
  Megaphone,
  Briefcase,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

/* ── Animation helpers ── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 as const },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 as const },
  transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
});

/* ── Data ── */
const services = [
  { title: "AI Automation", icon: Workflow, desc: "Streamline complex workflows with autonomous agents that never sleep." },
  { title: "Custom AI Development", icon: BrainCircuit, desc: "Bespoke machine learning models trained on your proprietary data." },
  { title: "AI Chatbots & Assistants", icon: Bot, desc: "Context-aware conversational interfaces that resolve issues instantly." },
  { title: "Data Analytics & ML", icon: LineChart, desc: "Uncover hidden patterns and predict market trends with high accuracy." },
  { title: "AI Integration", icon: Layers, desc: "Seamlessly connect AI APIs and LLMs into your existing tech stack." },
  { title: "Process Optimization", icon: Zap, desc: "Identify bottlenecks and deploy intelligent routing for maximum throughput." },
];

const industries = [
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Finance", icon: Landmark },
  { name: "Customer Service", icon: HeadphonesIcon },
  { name: "Marketing", icon: Megaphone },
  { name: "Operations", icon: Briefcase },
];

const benefits = [
  { metric: "85%", label: "Cost Savings" },
  { metric: "10x", label: "Efficiency Boost" },
  { metric: "24/7", label: "Availability" },
  { metric: "∞", label: "Scalability" },
];

const processSteps = [
  { phase: "01", title: "Discovery", desc: "Deep architectural audit of your existing infrastructure and data pipelines." },
  { phase: "02", title: "Design", desc: "Blueprint formulation of the AI agent hierarchy and neural architecture." },
  { phase: "03", title: "Development", desc: "Rigorous coding, model training, and integration testing in isolated sandboxes." },
  { phase: "04", title: "Deployment", desc: "Phased rollout with real-time monitoring and feedback loops for continuous learning." },
];

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ background: 'transparent' }}>
      {/* ── Fixed cosmic background ── */}
      <div className="page-bg" />
      <div className="page-bg-overlay" />
      <GlassFilter />

      <Navbar />

      {/* ═══════════════════════════════════════
          1. Hero Section (UNTOUCHED)
          ═══════════════════════════════════════ */}
      <div id="home">
        <HeroCanvas />
      </div>

      {/* ═══════════════════════════════════════
          2. Services / Solutions
          ═══════════════════════════════════════ */}
      <section id="services" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-heading max-w-3xl">
            Architecting intelligent systems that outpace the competition.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: service cards */}
          <div className="services-grid flex-1">
            {services.map((service, i) => (
              <motion.div key={i} {...stagger(i)} className="h-full">
                <HolographicCard
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </div>

          {/* Right: 3D showcase placeholder */}
          <div className="hidden lg:flex services-3d-showcase w-[380px] shrink-0">
            <span className="services-3d-placeholder">3D Element Space</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. Industries
          ═══════════════════════════════════════ */}
      <section id="industries" className="relative z-10 py-20 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-12">
          <span className="section-tag">Industries Served</span>
        </motion.div>
        <div className="flex flex-wrap gap-4">
          {industries.map((ind, i) => (
            <motion.div key={i} {...stagger(i)} className="industry-pill">
              <ind.icon className="w-5 h-5" />
              <span>{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. Benefits / Why Choose Us
          ═══════════════════════════════════════ */}
      <section id="benefits" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="section-heading text-5xl md:text-7xl leading-tight">
              The Mathematics <br />
              <span className="text-white/30 not-italic">of Advantage</span>
            </h2>
            <p className="font-mono text-white/40 mt-8 max-w-md text-sm leading-relaxed">
              We don&apos;t just implement technology; we engineer measurable dominance. Our systems
              are designed to scale infinitely while reducing overhead.
            </p>
          </motion.div>

          <GlassEffect className="rounded-[20px] w-full">
            <div className="benefits-grid w-full">
              {benefits.map((b, i) => (
                <motion.div key={i} {...stagger(i)} className="benefit-cell h-full w-full">
                  <span className="benefit-metric">{b.metric}</span>
                  <span className="benefit-label">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </GlassEffect>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. Process
          ═══════════════════════════════════════ */}
      <section id="process" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="flex justify-between items-end mb-20 border-b border-[rgba(198,165,90,0.12)] pb-8">
          <h2 className="section-heading">
            Execution<br />Protocol
          </h2>
          <span className="font-mono text-[var(--color-accent)] hidden md:block text-sm opacity-60">
            /04 PHASES
          </span>
        </motion.div>

        <div className="space-y-4">
          {processSteps.map((step, i) => (
            <motion.div key={i} {...stagger(i)} className="process-step group">
              <span className="process-number">{step.phase}</span>
              <div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. Case Studies
          ═══════════════════════════════════════ */}
      <section id="work" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-16">
          <span className="section-tag">Proven Outcomes</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...stagger(0)} className="h-full">
            <GlassEffect className="case-card h-full w-full">
              <span className="case-tag">Fintech Infrastructure</span>
              <h3 className="case-title">Fraud Detection Engine</h3>
              <p className="case-desc">
                Reduced false positives by 42% while identifying sophisticated fraud rings faster, saving $2.4M annually.
              </p>
              <span className="case-link">
                VIEW METRICS <span>→</span>
              </span>
            </GlassEffect>
          </motion.div>

          <motion.div {...stagger(1)} className="h-full">
            <GlassEffect className="case-card h-full w-full">
              <span className="case-tag">E-Commerce Scale</span>
              <h3 className="case-title">Autonomous CX Agents</h3>
              <p className="case-desc">
                Handled 80% of tier-1 support tickets during peak holiday season with a 98% customer satisfaction score.
              </p>
              <span className="case-link">
                VIEW METRICS <span>→</span>
              </span>
            </GlassEffect>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section relative z-10 px-4 md:px-8">
        <motion.div {...fadeUp} className="w-full max-w-[1200px] mx-auto">
          <GlassEffect className="contact-glass w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="section-heading text-5xl md:text-7xl mb-6">
                  Initiate.
                </h2>
                <p className="font-mono text-white/40 max-w-sm mb-10 text-sm leading-relaxed">
                  Ready to integrate intelligence into your operations? Secure a consultation to discuss architecture and implementation.
                </p>
                <div className="space-y-3 font-mono text-sm text-white/60">
                  <a href="mailto:hello@radha.ai" className="block hover:text-[var(--color-accent)] transition-colors">hello@radha.ai</a>
                  <a href="tel:+10000000000" className="block hover:text-[var(--color-accent)] transition-colors">+1 (000) 000-0000</a>
                </div>
              </div>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="NAME // ORGANIZATION"
                  className="contact-input"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="contact-input"
                />
                <textarea
                  placeholder="OBJECTIVES & PARAMETERS..."
                  rows={4}
                  className="contact-input resize-none"
                />
                <button type="button" className="contact-button">
                  Transmit Request
                </button>
              </form>
            </div>
          </GlassEffect>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          Footer
          ═══════════════════════════════════════ */}
      <footer className="site-footer relative z-10">
        <div className="footer-inner">
          <div className="footer-brand">
            <span>RADHAAI</span>
            <span>SOLUTIONS</span>
          </div>

          <div className="footer-links">
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <div className="footer-social">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} RadhaAI Solutions
        </div>
      </footer>
    </main>
  );
}
