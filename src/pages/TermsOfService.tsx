import React from 'react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-6 border-b border-border pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
                    <p className="font-mono text-muted-foreground">Effective Date: 01/01/2026</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        By accessing or using any Dropwing Groups website or digital property, you agree to these Terms of Service.
                        If you do not agree, you should discontinue use.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">2. Purpose of the Website</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The Dropwing Groups website provides informational material regarding our organization, ventures, and operating philosophy. It does not constitute an offer of services, contractual commitment, or advisory engagement.
                    </p>
                    <p className="text-muted-foreground">
                        Formal engagements are initiated only through explicit written agreements.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">3. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        All content on this website—including text, design systems, graphics, and structure—is the intellectual property of Dropwing Groups unless otherwise stated.
                    </p>
                    <p className="text-muted-foreground">
                        Unauthorized reproduction, redistribution, or misuse is prohibited.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">4. Permitted Use</h2>
                    <p className="text-muted-foreground">You may access and view this site for lawful, informational purposes only.</p>
                    <p className="text-muted-foreground pt-2">You may not:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Attempt to gain unauthorized access to systems</li>
                        <li>Disrupt site functionality</li>
                        <li>Scrape, copy, or misuse content for commercial purposes</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">5. No Warranties</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Content is provided “as is” for general informational purposes. Dropwing Groups makes no warranties regarding completeness, accuracy, or applicability to specific circumstances.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Dropwing Groups is not liable for any direct or indirect damages arising from the use or inability to use this website.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">7. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        These Terms shall be governed by applicable laws based on Dropwing Groups’ principal place of operation, unless otherwise required by law.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">8. Updates</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Terms may be updated periodically. Continued use of the site constitutes acceptance of revised terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
