import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Radha AI Solutions",
    description: "Privacy Policy for Radha AI Solutions — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
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
                    Privacy Policy
                </h1>

                <p className="text-white/40 text-sm font-[family-name:var(--font-outfit)] mb-12">
                    Last updated: March 8, 2026
                </p>

                <div className="space-y-10 text-white/70 font-[family-name:var(--font-outfit)] text-base leading-relaxed">
                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">1. Information We Collect</h2>
                        <p>
                            We collect information you provide directly to us, such as when you fill out our contact form,
                            request a consultation, or communicate with us via email. This may include:
                        </p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Your name and organization</li>
                            <li>Email address</li>
                            <li>Message content and project details</li>
                            <li>Any other information you choose to provide</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">2. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Respond to your inquiries and provide requested services</li>
                            <li>Send you confirmation emails and project updates</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to third parties.
                            We may share information with trusted service providers who assist us in operating our website
                            and conducting our business, provided they agree to keep this information confidential.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">4. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction. However, no method of
                            transmission over the Internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">5. Cookies & Analytics</h2>
                        <p>
                            We use Vercel Analytics and Speed Insights to understand how visitors interact with our website.
                            These tools may collect anonymous usage data such as page views, browser type, and device
                            information. No personally identifiable information is collected through these tools.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">6. Third-Party Services</h2>
                        <p>
                            Our website may contain links to third-party websites or services. We are not responsible for
                            the privacy practices of these external sites. We encourage you to read their privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">7. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside mt-3 space-y-2 text-white/60">
                            <li>Request access to the personal data we hold about you</li>
                            <li>Request correction or deletion of your personal data</li>
                            <li>Withdraw consent for data processing</li>
                            <li>Lodge a complaint with a data protection authority</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">8. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">9. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us through our{" "}
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
