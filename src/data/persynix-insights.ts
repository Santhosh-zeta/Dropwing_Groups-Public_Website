export interface PersynixInsight {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
  excerpt: string;
  heroImage?: string;
}

export const persynixInsights: PersynixInsight[] = [
  {
    slug: 'why-most-ai-projects-fail-before-they-start',
    title: 'Why most AI projects fail before they start',
    category: 'AI/ML',
    date: 'September 2026',
    readTime: '6 min read',
    author: { name: 'Daksha', role: 'CEO' },
    excerpt:
      'The failure mode is rarely the model. It is the absence of clean data, clear ownership, and a deployment path with a real feedback loop. Here is what we have learned from building 20+ AI systems in production.',
  },
  {
    slug: 'the-real-roi-of-workflow-automation',
    title: 'The real ROI of workflow automation',
    category: 'Automation',
    date: 'August 2026',
    readTime: '5 min read',
    author: { name: 'Pranav Shinde', role: 'CTO' },
    excerpt:
      'Business leaders want time savings. Engineers want clean architecture. Finance wants a number. How do you satisfy all three? We break down how we calculate and communicate the value of automation across six client engagements.',
  },
  {
    slug: 'building-rag-systems-that-actually-work',
    title: 'Building RAG systems that actually work in production',
    category: 'Engineering',
    date: 'July 2026',
    readTime: '8 min read',
    author: { name: 'Santhosh', role: 'Strategy & Growth' },
    excerpt:
      'Retrieval-augmented generation sounds straightforward. The demo works. Then you hit production and discover chunking strategies, reranking, context window limits, and hallucination rates. What we learned building three production RAG systems.',
  },
];
