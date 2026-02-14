import { useState } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    const { ref, isVisible } = useSectionReveal();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        console.log("Form submitted:", formData);
        alert("Thank you for your inquiry. This is a demo form.");
    };

    return (
        <main>
            {/* Header - Structural Violet */}
            <div className="bg-structural text-structural-foreground pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                        Initiate Engagement
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground/80 leading-relaxed">
                        Direct access to Dropwing Groups execution capabilities.
                        For institutional inquiries, improved response times are available via your dedicated partner portal.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28 lg:px-20">
                <div className="grid gap-16 lg:grid-cols-2">

                    {/* Contact Form */}
                    <div ref={ref} className={`section-reveal ${isVisible ? "is-visible" : ""}`}>
                        <h2 className="text-2xl font-bold mb-8 text-foreground">Send a Briefing</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="professional@organization.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Inquiry Type
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Strategic Partnership</option>
                                    <option>Media & Press</option>
                                    <option>Investor Relations</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Outline your requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-primary/90"
                            >
                                Submit Inquiry
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Details & Locations */}
                    <div className="space-y-16">
                        <div>
                            <h3 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-8">
                                Direct Channels
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary rounded-full text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium mb-1">General Inquiries</h4>
                                        <a href="mailto:contact@dropwing.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            contact@dropwing.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-secondary rounded-full text-primary">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-medium mb-1">Media Relations</h4>
                                        <a href="mailto:media@dropwing.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            media@dropwing.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border pt-12">
                            <h3 className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-8">
                                Global Operations
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-foreground font-semibold flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" /> North America
                                    </h4>
                                    <address className="text-muted-foreground not-italic text-sm space-y-1">
                                        <p>100 Park Avenue</p>
                                        <p>New York, NY 10017</p>
                                        <p>United States</p>
                                    </address>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-foreground font-semibold flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" /> Europe
                                    </h4>
                                    <address className="text-muted-foreground not-italic text-sm space-y-1">
                                        <p>Potsdamer Platz 1</p>
                                        <p>10785 Berlin</p>
                                        <p>Germany</p>
                                    </address>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-foreground font-semibold flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" /> Asia Pacific
                                    </h4>
                                    <address className="text-muted-foreground not-italic text-sm space-y-1">
                                        <p>1 Marina Bay Sands</p>
                                        <p>Singapore 018971</p>
                                        <p>Singapore</p>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default Contact;
