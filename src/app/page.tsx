import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg";
import { HeroCanvas } from "@/components/HeroCanvas";
import Image from "next/image";

import { GlassFilter } from "@/components/ui/liquid-glass";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ContactSection } from "@/components/ContactSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { InteractiveNavbar } from "@/components/InteractiveNavbar";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { IndustriesSection } from "@/components/IndustriesSection";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

/* ── Data ── */
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
    src: "/testimonials/t1.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/testimonials/t2.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/testimonials/t3.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/testimonials/t4.jpg",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/testimonials/t5.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ background: 'transparent' }}>
      {/* Skip to main content — accessibility */}
      <a href="#services" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:text-sm focus:font-medium">
        Skip to main content
      </a>

      {/* ── Fixed cosmic background ── */}
      <div className="page-bg">
        <MeshGradientBg />
      </div>
      <div className="page-bg-overlay" />
      <GlassFilter />

      <InteractiveNavbar />

      {/* ═══════════════════════════════════════
          1. Hero Section (with h1 overlay)
          ═══════════════════════════════════════ */}
      <div id="home" className="relative">
        <HeroCanvas />
      </div>

      {/* Cloud transition divider */}
      <div
        className="relative z-20 w-full pointer-events-none"
        style={{ marginTop: '-20vw', marginBottom: '-6vw' }}
      >
        <Image
          src="/cloud-divider.png"
          alt=""
          width={1920}
          height={400}
          className="w-full h-auto block"
          style={{ mixBlendMode: 'screen' }}
          priority={false}
        />
      </div>

      {/* ═══════════════════════════════════════
          2. Services / Solutions
          ═══════════════════════════════════════ */}
      <section id="services" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <AnimatedSection className="mb-16 text-center flex flex-col items-center">
          <span className="section-tag section-tag--centered">TRANSFORMING BUSINESS THROUGH INTELLIGENCE</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#1a1a1a] leading-none mt-2">
            OUR SERVICES
          </h2>
          <p className="font-body text-[rgba(26,26,26,0.85)] font-medium mt-6 max-w-2xl text-lg leading-relaxed">
            We bridge the gap between complex AI technology and practical business value. Explore how our tailored solutions can accelerate your growth.
          </p>
        </AnimatedSection>

        <ServicesGrid />
      </section>

      {/* ═══════════════════════════════════════
          3. Industries
          ═══════════════════════════════════════ */}
      <IndustriesSection />

      {/* ═══════════════════════════════════════
          4. Benefits / Why Choose Us
          ═══════════════════════════════════════ */}
      <BenefitsSection />

      {/* ═══════════════════════════════════════
          5. Process
          ═══════════════════════════════════════ */}
      <ProcessSection />

      {/* ═══════════════════════════════════════
          6. Case Studies / Testimonials
          ═══════════════════════════════════════ */}
      <section id="work" className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <AnimatedSection className="mb-6 text-center">
          <span className="section-tag section-tag--centered">Proven Outcomes</span>
          <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-4xl md:text-5xl mt-4 text-[#1a1a1a]">
            Client Success
          </h2>
        </AnimatedSection>

        <div className="w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Why Choose Us
          ═══════════════════════════════════════ */}
      <WhyUsSection />

      {/* ═══════════════════════════════════════
          Logo Cloud / Trusted By
          ═══════════════════════════════════════ */}
      <section className="relative z-10 py-24 md:py-32 px-4 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="w-full mb-10 md:mb-16">
          <h2 className="text-center font-[family-name:var(--font-oswald)] uppercase flex flex-col items-center justify-center">
            <span className="block font-semibold text-sm md:text-base text-[#1a1a1a]/50 mb-1 tracking-[0.2em]">
              WE ONLY USE THE
            </span>
            <span className="font-bold text-3xl md:text-5xl tracking-tight text-[#1a1a1a] leading-none">
              BEST IN THE GAME
            </span>
          </h2>
        </div>
        <div className="w-full">
          <div className="opacity-80 mix-blend-multiply filter contrast-125 grayscale">
            <LogoCloud logos={logos} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Contact Section
          ═══════════════════════════════════════ */}
      <ContactSection />

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
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
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
