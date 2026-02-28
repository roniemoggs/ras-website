import React, { useRef } from 'react';
import { GlassEffect } from "./liquid-glass";

export const HolographicCard = ({ children, title, desc, icon: Icon }: { children?: React.ReactNode, title?: string, desc?: string, icon?: React.ElementType }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        card.style.setProperty('--x', `50%`);
        card.style.setProperty('--y', `50%`);
        card.style.setProperty('--bg-x', '50%');
        card.style.setProperty('--bg-y', '50%');
    };

    return (
        <GlassEffect
            className="service-card holographic-card h-full w-full flex flex-col"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s ease, box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
            <div className="holo-content text-center relative z-10 flex flex-col items-center">
                {Icon && (
                    <div className="service-card__3d-slot pointer-events-none">
                        <Icon strokeWidth={1.2} />
                    </div>
                )}
                {title && <h4 className="service-card__title pointer-events-none">{title}</h4>}
                {desc && <p className="service-card__desc pointer-events-none">{desc}</p>}
                {children}
            </div>
            <div className="holo-glow pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-color-dodge opacity-0 transition-opacity duration-300"></div>
        </GlassEffect>
    );
};

export default HolographicCard;
