import React from 'react';

const Security = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-6 border-b border-border pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Security</h1>
                    <p className="font-mono text-muted-foreground">Effective Date: 01/01/2026</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Security Philosophy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Security at Dropwing Groups is foundational. We treat systems, data, and communications as assets requiring protection by design, not retrofitted controls.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Protective Measures</h2>
                    <p className="text-muted-foreground">Our security practices include:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Access controls and role-based permissions</li>
                        <li>Secure infrastructure configurations</li>
                        <li>Regular monitoring and logging</li>
                        <li>Separation of environments where applicable</li>
                    </ul>
                    <p className="text-muted-foreground pt-4">
                        Security measures are continuously evaluated and improved.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Responsible Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you believe you have discovered a security vulnerability related to Dropwing Groups systems or websites, we encourage responsible disclosure.
                    </p>
                    <p className="text-muted-foreground pt-2">Please report issues to:</p>
                    <div className="pt-2">
                        <a href="mailto:security@dropwinggroups.com" className="font-mono text-primary hover:underline">security@dropwinggroups.com</a>
                    </div>
                    <p className="text-muted-foreground pt-4">
                        Do not publicly disclose vulnerabilities before providing us reasonable time to investigate and respond.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Limitations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        While we strive to maintain secure systems, no digital environment can be guaranteed to be entirely risk-free. Users are encouraged to exercise standard security precautions when interacting online.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Updates</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        This Security statement may be updated to reflect evolving threats, controls, or operational practices.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Security;
