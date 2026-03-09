"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { LiquidGlassCard } from "@/components/ui/liquid-weather-glass";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 as const },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;
        setFormStatus("loading");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID as string,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            );
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID as string,
                {
                    from_email: formData.email,
                    name: formData.name,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
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
        <section id="contact" className="contact-section relative z-10 px-4 md:px-8">
            <motion.div {...fadeUp} className="w-full max-w-[1200px] mx-auto">
                <LiquidGlassCard
                    className="contact-glass anti-gravity w-full p-6 md:p-12 lg:p-16"
                    draggable={false}
                    blurIntensity="xl"
                    shadowIntensity="md"
                    glowIntensity="sm"
                    borderRadius="24px"
                >
                    <div className="text-center mb-6 md:mb-12">
                        <h2 className="font-[family-name:var(--font-oswald)] uppercase font-extrabold text-2xl md:text-6xl mb-2 md:mb-4 text-[#1a1a1a]">
                            Contact Us
                        </h2>
                        <p className="font-body text-[#1a1a1a]/70 max-w-md mx-auto text-xs md:text-base leading-relaxed">
                            Ready to integrate intelligence into your operations? Secure a consultation to discuss architecture and implementation.
                        </p>
                    </div>

                    <form className="space-y-4 md:space-y-6 max-w-2xl mx-auto" onSubmit={handleContactSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label htmlFor="contact-name" className="sr-only">Name / Organization</label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="NAME // ORGANIZATION"
                                    className="contact-input !text-xs md:!text-base !p-3 md:!p-4"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="EMAIL ADDRESS"
                                    className="contact-input !text-xs md:!text-base !p-3 md:!p-4"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="sr-only">Message</label>
                            <textarea
                                id="contact-message"
                                placeholder="HOW CAN WE HELP YOU?"
                                rows={4}
                                className="contact-input resize-none !text-xs md:!text-base !p-3 md:!p-4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            />
                        </div>
                        <div className="pt-2 md:pt-4">
                            <GradientButton
                                type="submit"
                                variant="variant"
                                className="w-full rounded-[20px] md:rounded-full h-12 md:h-16 text-xs md:text-base tracking-[0.1em] md:tracking-[0.15em] uppercase font-bold"
                                disabled={formStatus === "loading"}
                                style={{ opacity: formStatus === "loading" ? 0.7 : 1 }}
                            >
                                {formStatus === "loading" ? "Sending..." : formStatus === "success" ? "✓ Message Sent" : formStatus === "error" ? "Failed — Retry" : "Let's Work Together"}
                            </GradientButton>
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
    );
}
