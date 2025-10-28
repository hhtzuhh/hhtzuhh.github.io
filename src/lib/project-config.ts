export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category: 'personal' | 'work' | 'academic' | 'open-source';
  technologies: string[];
  githubAccount: string;
  repoName?: string;
  externalLink?: string;
  showOnResume: boolean;
  hackathon?: {
    name: string;
    url: string;
  };
  prize?: {
    rank: 1 | 2 | 3 | -1;
    text: string;
  };
}

export const projectConfigs: ProjectConfig[] = [
    {
      id: 'simsiann',
      title: 'simsiann（心聲）:',
      description: 'Simsiann (心聲) is a location-based storytelling platform that transforms personal experiences into visual narratives anchored to specific geographic locations.',
      image: '/images/mainapp.png',
      href: '/projects/simsiann',
      category: 'personal',
      technologies: ['ios', 'firebase', 'swift', "firebase", "google cloud function"],
      githubAccount: 'hhtzuhh',
      repoName: 'simsiann',
      externalLink: 'https://apps.apple.com/us/app/maptive-simsiann/id6753078675',
      showOnResume: true,
      hackathon: {
        name: 'RevenueCat Shipaton 2025',
        url: 'https://devpost.com/software/maptive-simsiann'
      },
    },
    {
    id: 'BioRag',
    title: 'BioRAG System - Advanced Protein Cluster Retrieval',
    description: 'A modular, scalable bio-RAG system that uses recursive retrieval to handle megacontext scenarios for protein cluster analysis. Built with LlamaIndex and designed to scale to millions of proteins without context overflow.',
    image: '/images/biorag.png',
    href: 'https://github.com/hhtzuhh/bioRag',
    category: 'personal',
    technologies: ['python', 'LlamaIndex'],
    githubAccount: 'hhtzuhh',
    repoName: 'bioRag',
    showOnResume: true,
    hackathon: {
      name: 'Lux Capital: AI Agent and Infra Hackathon',
      url: 'https://devpost.com/software/biorag'
    },
    prize: {
      rank: 2,
      text: '2nd Best Agent Hack'
    }
  },
  {
    id: 'snaplingo',
    title: 'Snaplingo - AI english essay tutor',
    description: 'SnapLingo is an intelligent AI-powered support system specifically designed to help Taiwanese high school students excel in the English composition section of the General Scholastic Ability Test (GSAT/學測).',
    image: '/images/snaplingo.png',
    href: '/projects/snaplingo',
    category: 'personal',
    technologies: ['python', 'docker', "mongodb", "next.js"],
    githubAccount: 'hhtzuhh',
    repoName: 'snaplingo',
    showOnResume: true
  },
  {
    id: 'Market Data Service',
    title: 'Market Data Service',
    description: 'This FastAPI-based market data service asynchronously fetches, persists, and publishes real-time and historical market data from multiple providers, while also offering analytical capabilities like moving average calculations.',
    image: '/images/marketdatasystem.jpg',
    href: 'https://github.com/hhtzuhh/price-pipeline',
    category: 'personal',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kafka'],
    githubAccount: 'hhtzuhh',
    repoName: 'price-pipeline',
    showOnResume: true
  },
  {
    id: 'cliphunt',
    title: 'ClipHunt Agent',
    description: 'A multi-agent system that streamlines viral video production. It generates trending video ideas, writes scripts, and automates the discovery and extraction of relevant clips from YouTube.',
    image: '/images/cliphunt.png',
    href: 'https://github.com/catmei/jaegers.ai',
    category: 'personal',
    technologies: ['Python', 'FastAPI', 'LangGraph', 'Gemini', 'LangChain'],
    githubAccount: 'hhtzuhh',
    repoName: 'cliphunt',
    showOnResume: true,
    hackathon: {
      name: 'Open Data Science Conference (ODSC) & Google Cloud Agentic AI Hackathon',
      url: ''
    },
    prize: {
      rank: -1,
      text: '20 Finalists'
    }
  },
  {
    id: 'Breast Ultrasound Segmentation',
    title: 'Breast Ultrasound Segmentation',
    description: 'Novel weakly supervised learning framework for breast ultrasound image segmentation, accepted by IEEE EMBC 2024.',
    image: '/images/breastcancer.png',
    href: 'https://ieeexplore.ieee.org/document/10781719',
    category: 'academic',
    technologies: ['Pytorch', 'Deep Learning'],
    githubAccount: 'tzuhan2424',
    repoName: 'breast-ultrasound-segmentation',
    externalLink: 'https://ieeexplore.ieee.org/document/10781719',
    showOnResume: true
  },
  {
    id: 'TideTrack',
    title: 'TideTrack',
    description: 'TideTrack is a machine learning-powered system that both monitors and forecasts the severity of harmful Karenia brevis algae blooms in the Gulf of Mexico, providing critical data to help fisheries and scientists mitigate economic losses and optimize fieldwork.',
    image: '/images/tidetrack.png',
    href: 'https://tzuhan2424.github.io/projects/tideTrack',
    category: 'personal',
    technologies: ['Python', 'React', 'Machine Learning'],
    githubAccount: 'tzuhan2424',
    repoName: 'kean-capstone',
    showOnResume: true
  },
];

export const githubAccounts = [
  {
    username: 'tzuhan2424',
    displayName: 'Personal Account',
    avatar: 'https://github.com/tzuhan2424.png'
  },
  {
    username: 'your-other-username',
    displayName: 'Work Account', 
    avatar: 'https://github.com/your-other-username.png'
  }
];

export function getVisibleProjects(): ProjectConfig[] {
  return projectConfigs.filter(project => project.showOnResume);
}

export function getProjectsByCategory(category: string): ProjectConfig[] {
  return projectConfigs.filter(project => project.category === category && project.showOnResume);
} 