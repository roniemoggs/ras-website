"use client";

import React from "react";
import { Bot, LineChart, MessageSquare, Map, Compass, Gamepad2 } from "lucide-react";

// Types
export interface GlassEffectProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    href?: string;
    target?: string;
}

export interface DockIcon {
    src?: string;
    icon?: React.ReactNode;
    alt: string;
    onClick?: () => void;
}

// Glass Effect Wrapper Component
export const GlassEffect = React.forwardRef<HTMLDivElement, GlassEffectProps>(({
    children,
    className = "",
    style = {},
    href,
    target = "_blank",
    ...props
}, ref) => {
    const glassStyle = {
        boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        ...style,
    };

    const content = (
        <div
            ref={ref}
            className={`relative flex overflow-hidden cursor-pointer transition-all duration-700 ${className}`}
            style={glassStyle}
            {...props}
        >
            {/* Glass Layers */}
            <div
                className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-[inherit]"
                style={{
                    backdropFilter: "blur(3px)",
                    filter: "url(#glass-distortion)",
                    isolation: "isolate",
                }}
            />
            <div
                className="absolute inset-0 z-10 rounded-[inherit]"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
            />
            <div
                className="absolute inset-0 z-20 rounded-[inherit] overflow-hidden"
                style={{
                    boxShadow:
                        "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.2)",
                }}
            />

            {/* Content */}
            <div className="relative z-30 w-full">{children}</div>
        </div>
    );

    return href ? (
        <a href={href} target={target} rel="noopener noreferrer" className="block w-full">
            {content}
        </a>
    ) : (
        content
    );
});
GlassEffect.displayName = "GlassEffect";

// Dock Component
export const GlassDock: React.FC<{ icons: DockIcon[]; href?: string }> = ({
    icons,
    href,
}) => (
    <GlassEffect
        href={href}
        className="rounded-3xl p-3 hover:p-4 hover:rounded-4xl"
    >
        <div className="flex items-center justify-center gap-2 rounded-3xl p-3 py-0 px-0.5 overflow-hidden">
            {icons.map((icon, index) => (
                <div key={index} className="w-16 h-16 flex items-center justify-center transition-all duration-700 hover:scale-110 cursor-pointer text-white/80 hover:text-white"
                    onClick={icon.onClick}
                    style={{
                        transformOrigin: "center center",
                        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
                    }}>
                    {icon.icon ? (
                        icon.icon
                    ) : (
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-full h-full object-contain"
                        />
                    )}
                </div>
            ))}
        </div>
    </GlassEffect>
);

// Button Component
export const GlassButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
    children,
    href,
}) => (
    <GlassEffect
        href={href}
        className="rounded-3xl px-10 py-6 hover:px-11 hover:py-7 hover:rounded-4xl overflow-hidden font-semibold text-black"
        style={{ background: "rgba(255, 255, 255, 0.2)" }}
    >
        <div
            className="transition-all duration-700 hover:scale-95 text-black"
            style={{
                transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
            }}
        >
            {children}
        </div>
    </GlassEffect>
);

// SVG Filter Component
export const GlassFilter: React.FC = () => (
    <svg style={{ display: "none" }}>
        <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            filterUnits="objectBoundingBox"
        >
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.001 0.005"
                numOctaves="1"
                seed="17"
                result="turbulence"
            />
            <feComponentTransfer in="turbulence" result="mapped">
                <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
            </feComponentTransfer>
            <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
            <feSpecularLighting
                in="softMap"
                surfaceScale="5"
                specularConstant="1"
                specularExponent="100"
                lightingColor="white"
                result="specLight"
            >
                <fePointLight x="-200" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite
                in="specLight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
                result="litImage"
            />
            <feDisplacementMap
                in="SourceGraphic"
                in2="softMap"
                scale="200"
                xChannelSelector="R"
                yChannelSelector="G"
            />
        </filter>
    </svg>
);

// Main Component (Demo code provided by user)
export const Component = () => {
    const dockIcons: DockIcon[] = [
        { icon: <Bot className="w-8 h-8" />, alt: "Claude" },
        { icon: <Compass className="w-8 h-8" />, alt: "Finder" },
        { icon: <MessageSquare className="w-8 h-8" />, alt: "Chatgpt" },
        { icon: <Map className="w-8 h-8" />, alt: "Maps" },
        { icon: <LineChart className="w-8 h-8" />, alt: "Safari" },
        { icon: <Gamepad2 className="w-8 h-8" />, alt: "Steam" },
    ];

    return (
        <div
            className="min-h-[500px] h-full flex items-center justify-center font-light relative overflow-hidden w-full rounded-2xl"
            style={{
                background: `url("https://images.unsplash.com/photo-1432251407527-504a6b4174a2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center / cover`,
                animation: "moveBackground 60s linear infinite",
            }}
        >
            <GlassFilter />

            <div className="flex flex-col gap-6 items-center justify-center w-full relative z-10">
                <GlassDock icons={dockIcons} href="#" />

                <GlassButton href="#">
                    <div className="text-xl">
                        <p>How can I help you today?</p>
                    </div>
                </GlassButton>
            </div>
        </div>
    );
}
