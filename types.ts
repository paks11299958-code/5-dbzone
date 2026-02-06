
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TechStackItem {
  name: string;
  category: string;
  description: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
