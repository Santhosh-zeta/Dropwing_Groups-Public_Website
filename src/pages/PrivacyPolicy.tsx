import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-6 border-b border-border pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
                    <p className="font-mono text-muted-foreground">Effective Date: 01/01/2026</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">1. Our Commitment to Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Dropwing Groups respects the privacy of individuals and organizations who interact with our websites, services, and platforms. Privacy is not treated as a compliance checkbox, but as a responsibility tied to trust, governance, and long-term relationships.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        We collect and process information only where there is a clear operational, legal, or security necessity.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
                    <p className="text-muted-foreground">We may collect limited personal or organizational information, including:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Name, role, organization, and corporate contact details</li>
                        <li>Information voluntarily submitted through forms or engagement requests</li>
                        <li>Technical information such as IP address, browser type, and access logs</li>
                        <li>Communications exchanged with Dropwing Groups</li>
                    </ul>
                    <p className="text-muted-foreground pt-4">We do not collect unnecessary personal data, nor do we engage in mass tracking or behavioral profiling.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">3. Purpose of Data Use</h2>
                    <p className="text-muted-foreground">Information is used strictly for:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Responding to legitimate engagement or briefing requests</li>
                        <li>Operational communication and relationship management</li>
                        <li>Security monitoring and abuse prevention</li>
                        <li>Compliance with legal or regulatory obligations</li>
                    </ul>
                    <p className="text-muted-foreground pt-4">We do not sell, rent, or trade personal data.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">4. Data Storage & Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Data is stored using secure, access-controlled systems. We employ industry-standard safeguards to protect information against unauthorized access, disclosure, or misuse.
                    </p>
                    <p className="text-muted-foreground">
                        Access to sensitive information is limited strictly to personnel with operational responsibility.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
                    <p className="text-muted-foreground">We do not share personal information with third parties except:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Where legally required</li>
                        <li>Where necessary to operate secure infrastructure (e.g., hosting, email delivery)</li>
                        <li>Where explicitly authorized by the data subject</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">6. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Information is retained only for as long as it serves a legitimate operational or legal purpose. Data that is no longer required is securely deleted or anonymized.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">7. Your Rights</h2>
                    <p className="text-muted-foreground">Depending on jurisdiction, individuals may request:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Access to their information</li>
                        <li>Correction of inaccurate data</li>
                        <li>Deletion of data where legally permissible</li>
                    </ul>
                    <p className="text-muted-foreground pt-4">Requests may be submitted to: privacy@dropwinggroups.com</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">8. Policy Updates</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This Privacy Policy may be updated periodically to reflect operational, legal, or regulatory changes. The most current version will always be available on this site.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
