"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Navbar } from "@/components/Navbar";
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass";
import { LiquidGlassCard as NotificationCard } from "@/components/ui/liquid-notification";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
import { GlassButton } from "@/components/ui/glass-button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ServiceModal } from "@/components/ServiceModal";
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
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const stagger = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 as const },
  transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

/* ── Data ── */
const servicesItems = [
  {
    id: 1,
    title: "AI Automation",
    description: "Streamline complex workflows with autonomous agents that never sleep.",
    details: "We deploy intelligent agents that handle repetitive tasks across your tech stack — from data extraction to multi-step workflows. They operate 24/7, learn from your data, and reduce costs by up to 85%.",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Website Development",
    description: "Custom-built, high-performance websites engineered for conversion and scale.",
    details: "We engineer digital experiences that convert — built with Next.js, advanced animations, and real-time personalization. Optimized for Core Web Vitals, SEO, and accessibility from day one.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "AI Chatbots & Assistants",
    description: "Context-aware conversational interfaces that resolve issues instantly.",
    details: "Built on advanced LLMs fine-tuned to your domain, our chatbots understand nuance, maintain context, and resolve complex queries autonomously — integrating with your CRM and support systems.",
    imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Voice Caller Agent Inbound & Outbound",
    description: "Intelligent AI voice agents for automated customer support and proactive outreach.",
    details: "Natural-sounding AI agents that handle inbound FAQs, bookings, and routing — plus outbound campaigns for reminders, follow-ups, and lead qualification. Multilingual, 24/7, zero hold times.",
    imageSrc: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800",
  },
];

const industries = [
  { name: "E-Commerce", icon: ShoppingCart, prop: "Scale personalization and automate storefront ops." },
  { name: "Healthcare", icon: HeartPulse, prop: "Streamline patient scheduling and diagnostic workflows." },
  { name: "Finance", icon: Landmark, prop: "Enhance fraud detection algorithms and predictive scoring." },
  { name: "Customer Service", icon: HeadphonesIcon, prop: "Deploy 24/7 intelligent tier-1 autonomous agents." },
  { name: "Marketing", icon: Megaphone, prop: "Optimize ad spend tracking and content generation." },
  { name: "Operations", icon: Briefcase, prop: "Transform complex data pipelines into automated insights." },
];

const benefits = [
  { metric: "85%", label: "Cost Savings", icon: LineChart },
  { metric: "10x", label: "Efficiency Boost", icon: Zap },
  { metric: "24/7", label: "Availability", icon: Bot },
  { metric: "∞", label: "Scalability", icon: Layers },
];

const processSteps = [
  { phase: "1", title: "Discovery", desc: "Deep architectural audit of your existing infrastructure and data pipelines.", imageSrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" },
  { phase: "2", title: "Design", desc: "Blueprint formulation of the AI agent hierarchy and neural architecture.", imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { phase: "3", title: "Development", desc: "Rigorous coding, model training, and integration testing in isolated sandboxes.", imageSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800" },
  { phase: "4", title: "Deployment", desc: "Phased rollout with real-time monitoring and feedback loops for continuous learning.", imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
];

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia Logo" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase Logo" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI Logo" },
  { src: "https://svgl.app/library/turso-wordmark-light.svg", alt: "Turso Logo" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel Logo" },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<typeof servicesItems[number] | null>(null);

  /* ── Contact form state ── */
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("loading");

    try {
      // 1. Admin notification email (uses {{name}}, {{email}}, {{message}})
      await emailjs.send(
        "service_n97xbsx",
        "template_pms5hte",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "lriP6CNJwLPbv3zWC"
      );
      // 2. Auto-reply to customer (uses {{from_email}}, {{name}}, {{message}})
      await emailjs.send(
        "service_n97xbsx",
        "template_xmaaq4e",
        {
          from_email: formData.email,
          name: formData.name,
          message: formData.message,
        },
        "lriP6CNJwLPbv3zWC"
      );
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <main className="min-h-screen relative" style={{ background: 'transparent' }}>
      {/* ── Fixed cosmic background ── */}
      <div className="page-bg">
        <MeshGradientBg />
      </div>
      <div className="page-bg-overlay" />
      <GlassFilter />

      <Navbar />

      {/* ═══════════════════════════════════════
          1. Hero Section (UNTOUCHED)
          ═══════════════════════════════════════ */}
      <div id="home" className="relative">
        <HeroCanvas />
      </div>

      {/* Cloud transition divider — sits between hero & services, overlaps both */}
      <div
        className="relative z-20 w-full pointer-events-none"
        style={{ marginTop: '-20vw', marginBottom: '-6vw' }}
      >
        <img
          src="/cloud-divider.png"
          alt=""
          className="w-full h-auto block"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      {/* ═══════════════════════════════════════
          2. Services / Solutions
          ═══════════════════════════════════════ */}
      <section id="services" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-16 text-center flex flex-col items-center">
          <span className="section-tag section-tag--centered">TRANSFORMING BUSINESS THROUGH INTELLIGENCE</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] leading-none mt-2">
            OUR SERVICES
          </h2>
          <p className="font-body text-[rgba(26,26,26,0.85)] font-medium mt-6 max-w-2xl text-lg leading-relaxed">
            We bridge the gap between complex AI technology and practical business value. Explore how our tailored solutions can accelerate your growth.
          </p>
        </motion.div>

        <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesItems.map((item, idx) => (
            <motion.div
              key={item.id}
              {...stagger(idx)}
              className="relative h-[480px] rounded-[32px] overflow-hidden group cursor-pointer anti-gravity"
              onClick={() => setSelectedService(item)}
            >
              <img
                src={item.imageSrc}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
      </section>

      {/* ═══════════════════════════════════════
          3. Industries
          ═══════════════════════════════════════ */}
      <section id="industries" className="relative z-10 py-20 md:py-28 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-12 text-center">
          <span className="section-tag section-tag--centered">Our Proven Experience</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-4xl md:text-5xl mt-4 text-[#1a1a1a]">
            Industries We've Transformed
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div key={i} {...stagger(i)} className="h-full group">
              <LiquidButton
                size="xxl"
                variant="default"
                className="w-full h-auto !rounded-2xl py-8 px-8"
              >
                <div className="flex flex-col gap-3 items-start w-full whitespace-normal text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-shrink-0 h-12 w-12 items-center justify-center rounded-full bg-black/5 text-[#1a1a1a] border border-black/10">
                      <ind.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#1a1a1a]">{ind.name}</h4>
                  </div>
                  <p className="font-body text-[#1a1a1a]/70 text-sm pl-16">
                    {ind.prop}
                  </p>
                </div>
              </LiquidButton>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. Benefits / Why Choose Us
          ═══════════════════════════════════════ */}
      <section id="benefits" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="w-full h-full min-h-[500px] liquid-glass anti-gravity rounded-[24px] relative overflow-hidden flex items-center justify-center border-white/20 bg-black/5">
            {/* 3D placeholder background & effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/10 to-transparent mix-blend-overlay" />
            <div className="relative text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full liquid-glass flex items-center justify-center border-white/30 bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                <BrainCircuit className="w-10 h-10 text-[#1a1a1a]" />
              </div>
              <p className="font-[family-name:var(--font-oswald)] uppercase text-[#1a1a1a]/50 tracking-[0.2em] font-bold text-sm">
                FUTURISTIC 3D ELEMENT PLACEHOLDER
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp} className="mb-8">
              <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-5xl md:text-7xl leading-tight text-[#1a1a1a]">
                Built for <br />
                <span className="text-[#1a1a1a]/40 not-italic">Real Results</span>
              </h2>
              <p className="font-body text-[#1a1a1a]/80 mt-6 max-w-md text-base leading-relaxed">
                We focus on what matters most: cutting costs, boosting your efficiency, and building scalable systems that work around the clock.
              </p>
            </motion.div>

            {benefits.map((b, i) => (
              <motion.div key={i} {...stagger(i)}>
                <LiquidGlassCard
                  draggable={false}
                  shadowIntensity="sm"
                  borderRadius="24px"
                  glowIntensity="xs"
                  blurIntensity="xl"
                  className="flex items-center gap-6 p-6 bg-white/8 anti-gravity"
                >
                  <div className="w-16 h-16 rounded-2xl liquid-glass flex flex-shrink-0 items-center justify-center bg-white/30 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <b.icon className="w-7 h-7 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <span className="block font-display text-4xl text-[#1a1a1a] leading-none mb-1">{b.metric}</span>
                    <span className="font-body text-sm text-[#1a1a1a]/70 uppercase tracking-widest font-bold">{b.label}</span>
                  </div>
                </LiquidGlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. Process
          ═══════════════════════════════════════ */}
      <section id="process" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-20">
          <span className="section-tag section-tag--centered">Methodology</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-5xl md:text-7xl mt-4 !text-[#1a1a1a]">
            Execution Protocol
          </h2>
          <span className="font-body text-[#1a1a1a] mt-4 font-bold tracking-widest text-sm">
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
                className="process-content bg-white/10 anti-gravity overflow-hidden border-white/20 !p-0 min-h-[100px]"
              >
                {(isExpanded) => (
                  <div className="flex flex-col justify-center h-full sm:min-h-[100px] w-full p-6 md:p-8 relative">
                    <div className="process-number">{step.phase}</div>
                    <div className="flex items-center justify-between w-full relative z-10">
                      <div className="flex items-center gap-4">
                        <h4 className="text-xl md:text-2xl font-[family-name:var(--font-oswald)] font-extrabold text-[#1a1a1a] uppercase truncate pr-4">
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
                      className="overflow-hidden relative z-10 flex flex-col gap-4"
                    >
                      <p className="font-body text-[#1a1a1a]/70 text-base md:text-lg">
                        {step.desc}
                      </p>
                      <img
                        src={step.imageSrc}
                        alt={step.title}
                        className="w-full h-32 sm:h-48 object-cover rounded-xl border border-[rgba(26,26,26,0.1)] shadow-sm"
                      />
                    </motion.div>
                  </div>
                )}
              </NotificationCard>
              <div className="w-[calc(50%-60px)] hidden md:block" />{/* Empty spacer for alternating layout */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. Case Studies / Testimonials
          ═══════════════════════════════════════ */}
      <section id="work" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="mb-16 text-center">
          <span className="section-tag section-tag--centered">Proven Outcomes</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-4xl md:text-5xl mt-4 text-[#1a1a1a]">
            Client Success
          </h2>
        </motion.div>

        <div className="w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Logo Cloud / Trusted By
          ═══════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="w-full mb-10 md:mb-16">
          <h2 className="text-center font-[family-name:var(--font-oswald)] uppercase flex flex-col items-center justify-center">
            <span className="block font-semibold text-sm md:text-base text-[#1a1a1a]/50 mb-1 tracking-[0.2em]">
              ALREADY USED BY
            </span>
            <span className="font-bold text-3xl md:text-5xl tracking-tight text-[#1a1a1a] leading-none">
              BEST IN THE GAME
            </span>
          </h2>
        </div>
        <div className="w-full">
          {/* Apply a blend filter or adjust LogoCloud component styles internally if needed to match dark text on mesh */}
          <div className="opacity-80 mix-blend-multiply filter contrast-125 grayscale">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Contact Section
          ═══════════════════════════════════════ */}
      <section id="contact" className="contact-section relative z-10 px-4 md:px-8">
        <motion.div {...fadeUp} className="w-full max-w-[1200px] mx-auto">
          <LiquidGlassCard
            className="contact-glass anti-gravity w-full p-8 md:p-12 lg:p-16"
            draggable={false}
            blurIntensity="xl"
            shadowIntensity="md"
            glowIntensity="sm"
            borderRadius="32px"
          >
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-5xl md:text-6xl mb-4 text-[#1a1a1a]">
                Contact Us
              </h2>
              <p className="font-body text-[#1a1a1a]/70 max-w-md mx-auto text-base leading-relaxed">
                Ready to integrate intelligence into your operations? Secure a consultation to discuss architecture and implementation.
              </p>
            </div>

            <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="NAME // ORGANIZATION"
                  className="contact-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="contact-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <textarea
                placeholder="OBJECTIVES & PARAMETERS..."
                rows={4}
                className="contact-input resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <div className="pt-4">
                <button
                  type="submit"
                  className="contact-button"
                  disabled={formStatus === "loading"}
                  style={{ opacity: formStatus === "loading" ? 0.7 : 1 }}
                >
                  {formStatus === "loading" ? "Sending..." : formStatus === "success" ? "✓ Message Sent" : formStatus === "error" ? "Failed — Retry" : "Let's Work Together"}
                </button>
              </div>
              {formStatus === "success" && (
                <p className="text-center text-[#1a1a1a]/80 font-body text-sm mt-2 animate-pulse">
                  We&apos;ve received your request and sent a confirmation to your email. We&apos;ll be in touch shortly.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-center text-red-600/80 font-body text-sm mt-2">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </LiquidGlassCard>
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

      {/* Service Detail Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </main>
  );
}
