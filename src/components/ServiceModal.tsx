"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    details: string;
    imageSrc: string;
}

interface ServiceModalProps {
    service: ServiceItem | null;
    onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
    /* Lock body scroll + Escape key */
    useEffect(() => {
        if (!service) return;
        document.body.style.overflow = "hidden";
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKey);
        };
    }, [service, onClose]);

    const scrollToContact = () => {
        onClose();
        setTimeout(() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 350);
    };

    return (
        <AnimatePresence>
            {service && (
                <motion.div
                    className="service-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="service-modal-card"
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button className="service-modal-close" onClick={onClose} aria-label="Close">
                            <X className="w-5 h-5" />
                        </button>

                        {/* Hero image */}
                        <div className="service-modal-image">
                            <img src={service.imageSrc} alt={service.title} />
                            <div className="service-modal-image-overlay" />
                            <h3 className="service-modal-title">{service.title}</h3>
                        </div>

                        {/* Content */}
                        <div className="service-modal-body">
                            <p className="service-modal-tagline">{service.description}</p>
                            <div className="service-modal-divider" />
                            <p className="service-modal-details">{service.details}</p>

                            {/* Book Discovery Call CTA */}
                            <div className="service-modal-cta">
                                <GradientButton
                                    onClick={scrollToContact}
                                    className="gap-2 h-12 px-8 py-3 text-base"
                                    variant="variant"
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Book Discovery Call</span>
                                </GradientButton>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
