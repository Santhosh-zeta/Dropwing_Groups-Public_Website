import React from 'react';

const Accessibility = () => {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto space-y-12">
                <header className="space-y-6 border-b border-border pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Accessibility Statement</h1>
                    <p className="font-mono text-muted-foreground">Effective Date: 01/01/2026</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Our Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Dropwing Groups is committed to providing an accessible digital experience for all users, including individuals with disabilities.
                    </p>
                    <p className="text-muted-foreground">
                        Accessibility is treated as a design and engineering responsibility, not an afterthought.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Accessibility Practices</h2>
                    <p className="text-muted-foreground">We aim to:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Follow recognized accessibility standards (such as WCAG guidelines where applicable)</li>
                        <li>Ensure readable typography and sufficient contrast</li>
                        <li>Support keyboard navigation and assistive technologies</li>
                        <li>Avoid unnecessary motion or disruptive visual effects</li>
                    </ul>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Ongoing Improvements</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Accessibility is an ongoing effort. We regularly review our platforms to improve usability and inclusivity.
                    </p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Feedback</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        If you encounter accessibility barriers or require assistance, please contact us at:
                    </p>
                    <div className="pt-2">
                        <a href="mailto:accessibility@dropwinggroups.com" className="font-mono text-primary hover:underline">accessibility@dropwinggroups.com</a>
                    </div>
                    <p className="text-muted-foreground pt-4">
                        We take accessibility feedback seriously and will make reasonable efforts to address concerns.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Accessibility;
