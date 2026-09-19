export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  metrics: ProjectMetric[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-document-intelligence',
    title: 'AI Document Intelligence Platform',
    category: 'AI & Machine Learning',
    description:
      'Built a document processing pipeline that extracts, classifies, and structures data from thousands of unstructured PDFs and emails daily — with near-zero human intervention.',
    problem:
      'A logistics firm was spending 40+ hours per week manually reviewing and classifying incoming documents — invoices, shipping manifests, and client requests — across multiple email inboxes.',
    solution:
      'We built an intelligent document pipeline combining OCR, LLM-based classification, and structured extraction. Documents are triaged automatically, routed to the right team, and logged into their ERP without human touchpoints.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
    outcome: '85% reduction in manual document processing time',
    metrics: [
      { label: 'Processing Time Saved', value: '85%' },
      { label: 'Documents Per Day', value: '2,000+' },
      { label: 'Error Rate', value: '< 0.5%' },
    ],
    featured: true,
  },
  {
    id: 'enterprise-workflow-automation',
    title: 'Enterprise Workflow Automation Suite',
    category: 'Automation',
    description:
      'Designed and deployed end-to-end workflow automation for a financial services firm, connecting CRM, ERP, and communication platforms into a single operational system.',
    problem:
      'A financial services company had siloed tools — Salesforce, SAP, Slack, and email — with no automated handoffs. Every deal close triggered 15+ manual steps across 4 departments.',
    solution:
      'We mapped all critical workflows, built automated pipelines between their core systems, and created a unified operations hub with real-time visibility into deal status, task assignments, and SLA tracking.',
    technologies: ['n8n', 'Python', 'PostgreSQL', 'AWS Lambda', 'Slack API', 'Salesforce API'],
    outcome: '1,200+ hours saved per month across the organization',
    metrics: [
      { label: 'Hours Saved Monthly', value: '1,200+' },
      { label: 'Manual Steps Eliminated', value: '85%' },
      { label: 'Departments Connected', value: '4' },
    ],
    featured: true,
  },
  {
    id: 'customer-intelligence-dashboard',
    title: 'Customer Intelligence Dashboard',
    category: 'Data & Analytics',
    description:
      'A real-time analytics platform combining customer behaviour data, ML predictions, and business KPIs into a single command center for faster, smarter decisions.',
    problem:
      'An e-commerce company had data spread across Google Analytics, their CRM, Shopify, and internal databases — no one could answer "which customers are at risk of churning?" without a 3-day manual analysis.',
    solution:
      'We built a unified data pipeline, trained churn and LTV prediction models, and delivered a real-time dashboard that surfaces at-risk customers, revenue trends, and actionable next steps automatically.',
    technologies: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'AWS', 'scikit-learn', 'Recharts'],
    outcome: '3× improvement in customer retention response speed',
    metrics: [
      { label: 'Churn Prediction Accuracy', value: '89%' },
      { label: 'Revenue Impact Identified', value: '₹40L+' },
      { label: 'Data Sources Unified', value: '6' },
    ],
    featured: true,
  },
  {
    id: 'conversational-ai-assistant',
    title: 'Conversational AI Support Assistant',
    category: 'AI & Machine Learning',
    description:
      'Deployed an intelligent customer support assistant trained on company knowledge bases, handling 80% of tier-1 support queries autonomously, 24 hours a day.',
    problem:
      "A SaaS company's support team was spending 60% of their time on repetitive, low-value questions that had documented answers in their knowledge base.",
    solution:
      'We built a RAG-powered AI assistant trained on their product docs, FAQs, and historical support tickets. The assistant handles queries 24/7, escalates complex cases with full context, and improves from corrections.',
    technologies: ['OpenAI', 'LangChain', 'FastAPI', 'React', 'Pinecone', 'AWS'],
    outcome: '80% tier-1 support resolution without human intervention',
    metrics: [
      { label: 'Queries Handled Autonomously', value: '80%' },
      { label: 'Average Response Time', value: '< 3s' },
      { label: 'Support Tickets Reduced', value: '60%' },
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
