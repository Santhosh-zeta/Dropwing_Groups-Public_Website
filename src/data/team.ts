import dakshaPhoto from '@/assets/Leadership-photos/Daksha.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  areas: string[];
  photo: string | null;
  linkedin?: string;
  github?: string;
}

export const leadership: TeamMember[] = [
  {
    id: 'daksha',
    name: 'Daksha',
    role: 'CEO',
    bio: 'Daksha leads Persynix with a focus on product vision, client partnerships, and the strategic direction of every engagement. She is driven by the conviction that intelligent automation should be accessible to every business — not just enterprises with eight-figure IT budgets.',
    areas: ['Product Strategy', 'AI Vision', 'Business Development', 'Client Partnerships'],
    photo: dakshaPhoto,
    linkedin: 'https://linkedin.com/in/daksha',
  },
  {
    id: 'pranav-shinde',
    name: 'Pranav Shinde',
    role: 'CTO',
    bio: 'Pranav architects the engineering foundation of every Persynix product. From LLM pipelines to distributed data systems, he brings a deep ML and systems engineering background to problems that most teams avoid.',
    areas: ['AI & Machine Learning', 'System Architecture', 'Engineering Leadership', 'Infrastructure'],
    photo: null,
    linkedin: 'https://linkedin.com/in/pranav-shinde',
    github: 'https://github.com',
  },
];
