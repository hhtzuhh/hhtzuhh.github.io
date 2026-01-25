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
      id: 'aorta',
      title: 'Aorta',
      description: 'Real-time sepsis monitoring and prediction platform using Kafka streaming, XGBoost ML for 6-hour early detection, and RAG-powered clinical recommendations. Features microservices architecture with sub-second latency from data ingestion to prediction.',
      image: '/images/Aorta/main.png',
      href: 'https://github.com/hhtzuhh/Aorta',
      category: 'personal',
      technologies: ['Confluent Cloud', 'Kafka', 'XGBoost', 'RAG', 'Gemini', 'MongoDB', 'FastAPI', 'React', 'D3.js', 'Terraform'],
      githubAccount: 'hhtzuhh',
      repoName: 'aorta',
      showOnResume: true,
      hackathon: {
        name: 'AI Partner Catalyst: Accelerate Innovation Confluent Hackathon',
        url: 'https://youtu.be/35Gda8PxtP4'
      },
    },
      {
      id: 'flood_agent',
      title: 'Flood Agent',
      description: 'Multi-agent flood detection system combining satellite imagery, AI water segmentation, and ground sensor data. Uses Google ADK orchestration with MCP server to analyze flood events through conversational interface.',
      image: '/images/flood_agent/s.png',
      href: '/projects/flood_agent',
      category: 'personal',
      technologies: ['Google ADK', 'Gemini 2.5', 'MCP', 'FastAPI', 'Sentinel Hub', 'Prithvi AI', 'NOAA/USGS'],
      githubAccount: 'tzuhan2424',
      repoName: 'flood_agent',
      externalLink: 'https://github.com/tzuhan2424/flood_agent',
      showOnResume: true,
      hackathon: {
        name: 'ODSC NYC Hackathon',
        url: 'https://youtu.be/aAE-llk9wU4'
      },
      prize: {
        rank: -1,
        text: 'Top 10 Finalist'
      }
    },
      {
      id: 'aegisflow',
      title: 'AegisFlow',
      description: 'Dual-mode multi-agent observability system deployed on Google Cloud. Features real-time fraud detection and infrastructure monitoring via event-driven agents, plus interactive investigation through A2A agent networks.',
      image: '/images/aegisflow/logs.png',
      href: '/projects/aegisflow',
      category: 'personal',
      technologies: ['Google Cloud', 'Pub/Sub', 'BigQuery', 'Cloud Run', 'GKE', 'Gemini', 'Multi-Agent'],
      githubAccount: 'hhtzuhh',
      repoName: 'aegisflow',
      showOnResume: true,
      hackathon: {
        name: 'Google Cloud Run Hackathon',
        url: 'https://devpost.com/software/aegisflow-cloud-native-observability-threat-detection'
      },
    },
      {
      id: 'venueplanner',
      title: 'Venue Planner',
      description: 'Revolutionary VR venue design application for Meta Quest that empowers event planners to visualize and design their perfect space using AI-powered object scanning and immersive 1:1 scale walkthroughs.',
      image: '/images/venueplanner/object.png',
      href: '/projects/venueplanner',
      category: 'personal',
      technologies: ['Meta Quest', 'Kotlin', 'Firebase', 'SAM', 'Tripo3D', 'Cloud Run'],
      githubAccount: 'hhtzuhh',
      repoName: 'venueplanner',
      showOnResume: true,
      hackathon: {
        name: 'Meta Horizon Start Developer Competition',
        url: 'https://devpost.com/software/venue-planner'
      },
    },
      {
      id: 'leiva',
      title: 'Levia: Multi-Agent Radiology Intelligence System',
      description: 'Multi-agent radiology assistant powered by Google Cloud Vertex AI and Elasticsearch, transforming clinical data into conversational insights.',
      image: '/images/levia/levia.png',
      href: '/projects/levia',
      category: 'personal',
      technologies: ['cloud run', 'google adk', 'vertex ai','ai agent'],
      githubAccount: 'hhtzuhh',
      repoName: 'levia',
      externalLink: 'https://github.com/hhtzuhh/RadiologyAgent',
      showOnResume: true,
      hackathon: {
        name: 'AI Accelerate: Unlocking New Frontiers: Google x Elastic search',
        url: 'https://devpost.com/software/radiology-intelligence-agent-levia'
      },
    },
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
    githubAccount: '',
    repoName: 'breast-ultrasound-segmentation',
    externalLink: 'https://ieeexplore.ieee.org/document/10781719',
    showOnResume: true
  },
  {
    id: 'TideTrack',
    title: 'TideTrack',
    description: 'TideTrack is a machine learning-powered system that both monitors and forecasts the severity of harmful Karenia brevis algae blooms in the Gulf of Mexico, providing critical data to help fisheries and scientists mitigate economic losses and optimize fieldwork.',
    image: '/images/tidetrack.png',
    href: '/projects/tidetrack',
    category: 'personal',
    technologies: ['React', 'Django', 'MySQL', 'Azure', 'ArcGIS', 'Random Forest', 'Machine Learning'],
    githubAccount: '',
    repoName: 'kean-capstone',
    externalLink: 'https://gentle-tree-0c507cb0f.5.azurestaticapps.net/',
    showOnResume: true
  },
  {
    id: 'marsTerrain',
    title: 'Mars Terrain Type Segmentation with Novel Edge Detection',
    description: 'Deep learning semantic segmentation system using FCN with novel edge detection channel inspired by DeepLabV3+ to identify safer Mars landing areas and rover exploration zones. Improved bedrock terrain recall through encoder-decoder architecture with edge boundary enhancement.',
    image: '/images/mars/mars.png',
    href: '/projects/marsTerrain',
    category: 'academic',
    technologies: ['Machine Learning', 'Computer Vision', 'Image Segmentation'],
    githubAccount: '',
    showOnResume: true
  },
  {
    id: 'analysisOfCrimeUnemployment',
    title: 'Analysis of Crime and Unemployment Pre and Post-Pandemic',
    description: 'Comprehensive analysis of COVID-19\'s multifaceted economic impact (2018-2023) examining unemployment rates, stock market indices (DJIA, NASDAQ, S&P 500), LinkedIn job postings, and crime rates to understand pandemic effects on the US economy.',
    image: '/images/datamining_course/datamining.png',
    href: '/projects/crime_unemployment',
    category: 'academic',
    technologies: ['Data Analysis', 'Statistics', 'Python'],
    githubAccount: '',
    showOnResume: true
  },
  {
    id: 'covidIncome',
    title: 'THE IMPACT OF HOUSEHOLD INCOME ON COVID-19 DEATHS',
    description: 'Statistical analysis joining 2020 US Census and COVID-19 datasets to reveal significant correlation between household income and COVID-19 mortality rates, uncovering demographic factors in pandemic outcomes.',
    image: '/images/covid_analysis/covid_analysis.png',
    href: '/projects/covidIncome',
    category: 'academic',
    technologies: ['Data Analysis', 'Statistics', 'Public Health'],
    githubAccount: '',
    showOnResume: true
  },
];

export const githubAccounts = [
  {
    username: 'hhtzuhh',
    displayName: 'Personal Account',
    avatar: ''
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