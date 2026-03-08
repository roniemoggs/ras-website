"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Track scroll within this 300vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Derive h1 opacity: fully visible at start, fades out by 30% scroll
    const h1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const video = videoRef.current;
        if (!video) return;

        // Once metadata is loaded we know the duration
        const handleLoaded = () => setIsLoading(false);
        if (video.readyState >= 1) {
            handleLoaded();
        } else {
            video.addEventListener("loadeddata", handleLoaded);
        }

        // Scrub video in sync with scroll progress
        const unsubscribe = scrollYProgress.on("change", (v) => {
            if (video.duration && Number.isFinite(video.duration)) {
                video.currentTime = v * video.duration;
            }
        });

        return () => {
            video.removeEventListener("loadeddata", handleLoaded);
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Loading placeholder */}
                {isMounted && isLoading && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#030508]">
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/30 animate-spin" />
                            </div>
                            <span className="font-[family-name:var(--font-outfit)] text-white/20 text-xs tracking-[0.3em] uppercase">
                                Loading Experience
                            </span>
                        </div>
                    </div>
                )}

                <video
                    ref={videoRef}
                    src="/hero_smooth.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Subtle bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-transparent via-[rgba(3,5,8,0.3)] to-transparent z-10" />
            </div>
        </div>
    );
}
