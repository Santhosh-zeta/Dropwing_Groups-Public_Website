import insight1 from "@/assets/insight-1.jpg";
import insight2 from "@/assets/insight-2.jpg";
import insight4 from "@/assets/insight-4.jpg";
import insight6 from "@/assets/insight-6.jpg";

export interface Insight {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    authors: { name: string; role: string }[];
    heroImage: string;
    summary: string; // The "In Brief" content (usually 3 points)
    content: {
        heading: string;
        body: string[];
        quote: string;
    };
    accordionItems: {
        id: string;
        title: string;
        content: string[];
    }[];
}

export const insights: Insight[] = [
    {
        slug: "building-self-governing-operational-ecosystems",
        title: "Building self-governing operational ecosystems",
        category: "Perspective",
        date: "February 14, 2026",
        readTime: "8-Minute Read",
        authors: [
            { name: "Patty Riedl", role: "Global Lead – Supply Chain & Operations" },
            { name: "Mads Lauritzen", role: "Managing Director – Strategy" }
        ],
        heroImage: insight1,
        summary: `
            Traditional operating models are reaching their breaking point, unable to keep pace with the velocity of market change.
            Self-governing ecosystems leverage AI to make autonomous decisions, optimizing performance in real-time without human intervention.
            The shift requires a fundamental reimagining of governance, moving from rigid control to dynamic orchestration.
        `,
        content: {
            heading: "Autonomy is the ultimate efficiency",
            body: [
                "In a world of constant disruption, the ability to adapt instantly is the only sustainable competitive advantage. Self-governing ecosystems don't just react; they predict and preempt changes.",
                "By embedding intelligence into the core of operations, organizations can achieve a level of resilience and efficiency that was previously impossible."
            ],
            quote: "True autonomy isn't about removing humans; it's about elevating them to architects of value while systems handle the execution."
        },
        accordionItems: [
            {
                id: "01",
                title: "Define the boundaries of autonomy",
                content: [
                    "Autonomy requires clear guardrails.",
                    "Organizations must define where the system has freedom to act and where human oversight is mandatory. This creates trust and ensures safety."
                ]
            },
            {
                id: "02",
                title: "Integrate feedback loops",
                content: [
                    "Systems must learn continuously.",
                    "Built-in feedback mechanisms ensure that the ecosystem evolves based on real-world performance data, becoming smarter over time."
                ]
            },
            {
                id: "03",
                title: "Scale through modularity",
                content: [
                    "Complexity is managed through modular design.",
                    "By breaking operations into independent but interconnected modules, the ecosystem can scale without becoming unmanageable."
                ]
            }
        ]
    },
    {
        slug: "pulse-of-change",
        title: "Pulse of Change: What's top of mind for today's leaders",
        category: "Research Report",
        date: "January 20, 2026",
        readTime: "12-Minute Read",
        authors: [
            { name: "Christopher Roark", role: "Cost & Productivity Reinvention Global Lead" },
            { name: "Kevin Millan", role: "Principal Director – Strategy & Sustainability" }
        ],
        heroImage: insight2,
        summary: `
            Leaders are facing unprecedented pressure to reinvent their businesses while managing cost and risk.
            Generative AI is no longer a buzzword but a core driver of strategic differentiation.
            Talent retention and skill evolution remain top priorities as technology reshapes the workforce.
        `,
        content: {
            heading: "Navigating the new normal",
            body: [
                "Our latest research indicates that 84% of executives believe AI will structurally change their industry within three years.",
                "The winners will be those who can balance the speed of innovation with the stability of core operations."
            ],
            quote: "Change is no longer episodic. It is constant, and the only way to survive is to build a culture of perpetual reinvention."
        },
        accordionItems: [
            {
                id: "01",
                title: "Embrace continuous reinvention",
                content: [
                    "Static strategies are dead.",
                    "Leaders must build organizations that can pivot rapidly in response to new data and market signals."
                ]
            },
            {
                id: "02",
                title: "Prioritize digital fluency",
                content: [
                    "Technology is everyone's business.",
                    "From the C-suite to the frontline, digital fluency is essential for unlocking the value of new tools."
                ]
            },
            {
                id: "03",
                title: "Foster psychological safety",
                content: [
                    "Innovation requires risk-taking.",
                    "Creating an environment where failure is seen as a learning opportunity is critical for driving breakthrough thinking."
                ]
            }
        ]
    },
    {
        slug: "rewriting-platform-strategy",
        title: "Rewriting platform strategy for institutional-grade systems",
        category: "Research Report",
        date: "February 2, 2026",
        readTime: "15-Minute Read",
        authors: [
            { name: "Russell Warem", role: "Managing Director – Technology Strategy" }
        ],
        heroImage: insight4,
        summary: `
            Legacy platforms are choking innovation, creating technical debt that hampers growth.
            Institutional-grade systems demand robust security, scalability, and interoperability by design.
            A composable architecture allows for faster feature delivery and easier integration of emerging technologies.
        `,
        content: {
            heading: "The platform paradox",
            body: [
                "Platforms must be stable yet flexible, secure yet open. This paradox is the central challenge of modern IT architecture.",
                "We propose a new framework for platform engineering that prioritizes modularity and observability."
            ],
            quote: "A platform is not just code; it is the digital foundation upon which the entire enterprise rests."
        },
        accordionItems: [
            {
                id: "01",
                title: "Decouple core from edge",
                content: [
                    "Preserve the core, innovate at the edge.",
                    "By decoupling core transaction systems from customer-facing layers, organizations can iterate faster without stability risks."
                ]
            },
            {
                id: "02",
                title: "Standardize interfaces",
                content: [
                    "APIs are the glue.",
                    "Robust, standardized APIs ensure that different parts of the system can communicate seamlessly, regardless of underlying technology."
                ]
            },
            {
                id: "03",
                title: "Automate compliance",
                content: [
                    "Compliance as code.",
                    "Embedding regulatory requirements directly into the platform pipeline reduces risk and speeds up deployment."
                ]
            }
        ]
    },
    {
        slug: "governance-trends-2026",
        title: "Governance trends across regulated industries for 2026",
        category: "Research Report",
        date: "March 10, 2026",
        readTime: "10-Minute Read",
        authors: [
            { name: "Sarah Jenkins", role: "Regulatory Affairs Lead" },
            { name: "David Chen", role: "Risk Management Director" }
        ],
        heroImage: insight6,
        summary: `
            Regulatory fragmentation is increasing, requiring more sophisticated compliance engines.
            Data sovereignty and privacy laws are reshaping how global companies handle information.
            AI governance is moving from voluntary guidelines to mandatory frameworks.
        `,
        content: {
            heading: "Compliance in the age of instability",
            body: [
                "As geopolitical tensions rise, so does the complexity of the regulatory landscape.",
                "Companies must move from reactive compliance to proactive regulatory intelligence."
            ],
            quote: "Governance is not a cost center; it is the license to operate in a trust-based economy."
        },
        accordionItems: [
            {
                id: "01",
                title: "Adopt regulatory tech (RegTech)",
                content: [
                    "Automate the mundane.",
                    "Leveraging AI to scan for regulatory changes and map them to internal controls is no longer optional."
                ]
            },
            {
                id: "02",
                title: "Embed privacy by design",
                content: [
                    "Privacy is a feature.",
                    "Building privacy controls into the product development lifecycle ensures compliance without slowing down innovation."
                ]
            },
            {
                id: "03",
                title: "Strengthen board oversight",
                content: [
                    "Tone from the top.",
                    "Boards must have the expertise to challenge management on technology and data risks."
                ]
            }
        ]
    },
    {
        slug: "ownership-dividend",
        title: "The ownership dividend: Why embedded execution outperforms advisory",
        category: "Perspective",
        date: "February 28, 2026",
        readTime: "7-Minute Read",
        authors: [
            { name: "Michael Vance", role: "Chief Strategy Officer" }
        ],
        heroImage: insight1,
        summary: `
            Traditional consulting models often fail to deliver lasting impact because they end at the recommendation.
            Embedded execution aligns incentives: partners have 'skin in the game' and are accountable for results.
            This model drives faster decision-making and deeper cultural transformation.
        `,
        content: {
            heading: "Beyond advice",
            body: [
                "Advice is cheap; execution is everything. The gap between knowing what to do and actually doing it is where value is lost.",
                "Embedded partners bridge this gap by working shoulder-to-shoulder with client teams to deliver tangible outcomes."
            ],
            quote: "We don't just write the plan; we build the road and drive the car."
        },
        accordionItems: [
            {
                id: "01",
                title: "Align incentives",
                content: [
                    "Share the risk, share the reward.",
                    "Outcome-based pricing models ensure that the partner is fully committed to the client's success."
                ]
            },
            {
                id: "02",
                title: "Transfer capability",
                content: [
                    "Don't create dependency.",
                    "The goal of embedded execution is to leave the client stronger and more capable than before."
                ]
            },
            {
                id: "03",
                title: "Accelerate speed to value",
                content: [
                    "Cut the fluff.",
                    "By integrating deeply, partners can bypass bureaucratic hurdles and get straight to the work that matters."
                ]
            }
        ]
    },
    {
        slug: "operational-continuity",
        title: "Accelerating operational continuity through structured knowledge transfer",
        category: "Research Report",
        date: "March 5, 2026",
        readTime: "9-Minute Read",
        authors: [
            { name: "Elena Rodriguez", role: "Knowledge Management Lead" }
        ],
        heroImage: insight2,
        summary: `
            Brain drain is a major risk as baby boomers retire and tenure decreases.
            Structured knowledge transfer ensures that critical institutional wisdom is captured and codified.
            AI-driven knowledge bases are replacing static wikis, providing just-in-time information to the workforce.
        `,
        content: {
            heading: "The memory of the enterprise",
            body: [
                "An organization's knowledge is its most valuable asset, yet it walks out the door every day.",
                "We need systems that capture know-how as a byproduct of work, not as an extra task."
            ],
            quote: "Knowledge that isn't shared is knowledge that is lost. Continuity depends on the free flow of information."
        },
        accordionItems: [
            {
                id: "01",
                title: "Codify tacit knowledge",
                content: [
                    "Make the implicit explicit.",
                    "Using shadowing and interviews to capture the 'gut feel' decisions of experts is essential for continuity."
                ]
            },
            {
                id: "02",
                title: "Implement AI search",
                content: [
                    "Find answers, not documents.",
                    "Semantic search allows employees to ask natural language questions and get precise answers from the knowledge base."
                ]
            },
            {
                id: "03",
                title: "Build mentoring loops",
                content: [
                    "Humans learn from humans.",
                    "Technology supports knowledge transfer, but mentorship cements it. Structured pairing programs bridge the generation gap."
                ]
            }
        ]
    },
    {
        slug: "excellence-in-execution",
        title: "Dropwing Groups recognized for excellence in enterprise execution frameworks",
        category: "Announcement",
        date: "April 1, 2026",
        readTime: "3-Minute Read",
        authors: [
            { name: "PR Team", role: "Corporate Communications" }
        ],
        heroImage: insight4,
        summary: `
            We are proud to announce that Dropwing Groups has been named a leader in Enterprise Execution by Industry Monthly.
            This recognition validates our commitment to delivering measurable value through our "embedded execution" model.
            We thank our clients and partners for their trust and collaboration in achieving this milestone.
        `,
        content: {
            heading: "A testament to our teams",
            body: [
                "This award is not just about our strategy; it's about the relentless dedication of our people.",
                "We remain committed to pushing the boundaries of what's possible in enterprise operations."
            ],
            quote: "Excellence is not an act, but a habit. This recognition fuels our drive to do even better."
        },
        accordionItems: [
            {
                id: "01",
                title: "Our methodology",
                content: [
                    "Proven results.",
                    "Our execution framework has been refined over a decade of high-stakes engagements."
                ]
            },
            {
                id: "02",
                title: "Client success stories",
                content: [
                    "Impact at scale.",
                    "From analyzing global supply chains to restructuring financial flows, our work speaks for itself."
                ]
            },
            {
                id: "03",
                title: "Future outlook",
                content: [
                    "Just getting started.",
                    "We are investing heavily in AI and automation to bring the next generation of execution tools to our clients."
                ]
            }
        ]
    }
];
