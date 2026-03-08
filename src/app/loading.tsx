export default function Loading() {
    return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{ background: "#030508" }}
        >
            <div className="flex flex-col items-center gap-6">
                {/* Animated spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-white/5" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/40 animate-spin" />
                </div>

                <span className="font-[family-name:var(--font-outfit)] text-white/30 text-xs tracking-[0.3em] uppercase">
                    Loading
                </span>
            </div>
        </main>
    );
}
