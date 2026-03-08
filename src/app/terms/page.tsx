import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Radha AI Solutions",
    description: "Terms of Service for Radha AI Solutions — the rules and guidelines governing the use of our services.",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen relative" style={{ background: "#030508" }}>
            <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm font-[family-name:var(--font-outfit)] mb-12"
                >
                    ← Back to Home
                </Link>

                <h1 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-8">
                    Terms of Service
                </h1>

                <p className="text-white/40 text-sm font-[family-name:var(--font-outfit)] mb-12">
                    Last updated: March 8, 2026
                </p>

                <div className="space-y-10 text-white/70 font-[family-name:var(--font-outfit)] text-base leading-relaxed">
                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the Radha AI Solutions website and services, you agree to be bound by
                            these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">2. Services Description</h2>
                        <p>
                            Radha AI Solutions provides AI automation, website development, AI chatbot integration,
                            and voice caller agent services. The specific scope, deliverables, and timelines for any
                            project will be defined in a separate agreement or statement of work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">3. User Obligations</h2>
                        <p>By using our services, you agree to:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Provide accurate and complete information when contacting us</li>
                            <li>Use our services only for lawful purposes</li>
                            <li>Not attempt to reverse-engineer, copy, or redistribute our proprietary solutions</li>
                            <li>Respect intellectual property rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">4. Intellectual Property</h2>
                        <p>
                            All content on this website, including but not limited to text, graphics, logos, designs,
                            and software, is the property of Radha AI Solutions and is protected by applicable
                            intellectual property laws. Custom work created for clients will be governed by the terms
                            of the individual project agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">5. Payment Terms</h2>
                        <p>
                            Payment terms, pricing, and billing schedules will be outlined in individual project
                            agreements. Unless otherwise specified, invoices are due within 30 days of issuance.
                            Late payments may incur additional fees as specified in the project agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">6. Confidentiality</h2>
                        <p>
                            Both parties agree to keep confidential any proprietary or sensitive information shared
                            during the course of a project. This obligation survives the termination of any agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">7. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, Radha AI Solutions shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages arising from or related
                            to the use of our services. Our total liability shall not exceed the amount paid by you
                            for the specific service giving rise to the claim.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">8. Termination</h2>
                        <p>
                            Either party may terminate a project agreement with written notice as specified in the
                            individual agreement. Upon termination, all outstanding fees become immediately due.
                            We reserve the right to suspend or terminate access to our website for violations of
                            these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">9. Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws
                            of India. Any disputes arising from these terms shall be resolved through arbitration
                            or in the courts of competent jurisdiction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">10. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms of Service at any time. Changes will be effective
                            immediately upon posting to this page. Your continued use of our services after changes
                            constitutes acceptance of the modified terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">11. Contact</h2>
                        <p>
                            For questions about these Terms of Service, please reach out through our{" "}
                            <Link href="/#contact" className="text-white underline underline-offset-4 hover:text-white/90">
                                contact form
                            </Link>.
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-white/30 text-sm font-[family-name:var(--font-outfit)]">
                    © {new Date().getFullYear()} RadhaAI Solutions. All rights reserved.
                </div>
            </div>
        </main>
    );
}
