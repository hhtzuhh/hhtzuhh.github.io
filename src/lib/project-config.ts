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
}

export const projectConfigs: ProjectConfig[] = [
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
    showOnResume: true
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