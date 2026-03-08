"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
            style={{ background: "#030508" }}
        >
            <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-8">
                <span className="text-red-400 text-2xl">!</span>
            </div>

            <h1 className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
                Something Went Wrong
            </h1>
            <p className="text-white/50 font-[family-name:var(--font-outfit)] text-base max-w-md mx-auto mb-10 leading-relaxed">
                An unexpected error occurred. Please try again or return to the homepage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => reset()}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wider uppercase hover:bg-white/15 hover:border-white/25 transition-all duration-300 cursor-pointer"
                >
                    Try Again
                </button>
                <a
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white/60 font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wider uppercase hover:text-white/80 hover:border-white/20 transition-all duration-300"
                >
                    Return Home
                </a>
            </div>
        </main>
    );
}
