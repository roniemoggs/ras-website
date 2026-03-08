import Link from "next/link";

export default function NotFound() {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
            style={{ background: "#030508" }}
        >
            <h1 className="font-[family-name:var(--font-oswald)] text-[8rem] md:text-[12rem] font-extrabold text-white/5 leading-none select-none">
                404
            </h1>

            <div className="-mt-12 md:-mt-16">
                <h2 className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
                    Page Not Found
                </h2>
                <p className="text-white/50 font-[family-name:var(--font-outfit)] text-base max-w-md mx-auto mb-10 leading-relaxed">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white font-[family-name:var(--font-outfit)] text-sm font-medium tracking-wider uppercase hover:bg-white/15 hover:border-white/25 transition-all duration-300"
                >
                    ← Return Home
                </Link>
            </div>
        </main>
    );
}
