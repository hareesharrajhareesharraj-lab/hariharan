export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  iconName: string;
}

export interface SkillCategory {
  category: 'Programming' | 'Data & AI' | 'Web Technologies' | 'Core Strengths';
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDesc: string;
  bullets: string[];
  tags: string[];
  iconName: string;
  highlights: string[];
  metrics?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  description: string;
  verified: boolean;
  imageUrl?: string;
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
  badge: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    subtitle: string;
    tagline: string;
    bio: string;
    avatarUrl: string; // placeholder image easily replaceable
    avatarAlt: string;
    resumeUrl: string;
  };
  navigation: NavLink[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    location: string;
    status: string;
    highlights: string[];
  };
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  interests: InterestItem[];
  languages: LanguageItem[];
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    linkedin: string;
    linkedinDisplay: string;
    location: string;
    availability: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Hariharan R.",
    firstName: "Hariharan",
    lastName: "R.",
    subtitle: "Artificial Intelligence & Data Science Student",
    tagline: "Building intelligent solutions through data, technology, and curiosity.",
    bio: "I am an AI & Data Science student with a strong interest in building intelligent solutions using data and technology. I enjoy learning new tools, exploring real-world problems and developing projects that create an impact. I am passionate about continuous improvement and eager to contribute to innovative teams in the field of Artificial Intelligence and Data Science.",
    avatarUrl: "/images/hariharan.jpeg",
    avatarAlt: "Portrait of Hariharan R. wearing a black suit and glasses",
    resumeUrl: "/images/hariharan-resume.jpeg",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Interests", href: "#interests" },
    { label: "Contact", href: "#contact" },
  ],
  education: {
    institution: "M.A.M. College of Engineering",
    degree: "B.E. / B.Tech – Artificial Intelligence & Data Science",
    duration: "2025 – 2029 (Expected)",
    location: "Tamil Nadu, India",
    status: "Currently Enrolled",
    highlights: [
      "Specializing in Artificial Intelligence and Machine Learning foundations",
      "Core coursework in Data Structures, Algorithms, Statistical Modeling, and Database Systems",
      "Hands-on exploratory research in Computer Vision and Event Analytics",
    ],
  },
  skillCategories: [
    {
      category: "Programming",
      description: "Fundamental languages for algorithmic problem-solving and software development",
      skills: [
        { name: "Python", iconName: "Code2", level: "Advanced Proficiency" },
        { name: "C", iconName: "Terminal", level: "Core Foundations" },
        { name: "Java", iconName: "Cpu", level: "Object-Oriented Programming" },
        { name: "SQL", iconName: "Database", level: "Relational Queries" },
      ],
    },
    {
      category: "Data & AI",
      description: "Libraries and machine learning paradigms for real-world intelligence",
      skills: [
        { name: "NumPy & Pandas", iconName: "FileSpreadsheet", level: "Data Manipulation" },
        { name: "Machine Learning", iconName: "BrainCircuit", level: "Supervised & Unsupervised" },
        { name: "Data Analysis & Visualization", iconName: "BarChart3", level: "EDA & Visual Insights" },
      ],
    },
    {
      category: "Web Technologies",
      description: "Frontend markup and modern styling for responsive web interfaces",
      skills: [
        { name: "HTML & CSS", iconName: "Layout", level: "Semantic Markup & Modern Styling" },
      ],
    },
    {
      category: "Core Strengths",
      description: "Analytical mindset and engineering methodology",
      skills: [
        { name: "Problem Solving", iconName: "Lightbulb", level: "Analytical Thinking & Logic" },
      ],
    },
  ],
  projects: [
    {
      id: "event-crowd-map",
      title: "Event Crowd Compatibility Map",
      shortDesc: "Predictive web application assessing crowd density and matching event-goers to optimal experiences.",
      bullets: [
        "Developed a web application to predict event crowd levels and suggest compatible events based on user preferences.",
        "Used Python, Machine Learning and data analysis techniques to process and visualize event data.",
        "Focused on data preprocessing, model building and interactive map visualization.",
      ],
      tags: ["Python", "Machine Learning", "Data Analysis", "Visualization"],
      iconName: "MapPin",
      highlights: [
        "Interactive geospatial density visualization",
        "Predictive clustering model based on temporal event metrics",
        "Personalized compatibility matching algorithm",
      ],
      metrics: "Predictive Analytics & Mapping",
    },
    {
      id: "ai-in-camera",
      title: "AI in Camera",
      shortDesc: "Real-time edge computer vision pipeline for scene classification and automated visual inspection.",
      bullets: [
        "Built a camera-based application to detect and analyze scenes using AI.",
        "Implemented computer vision models with Python and OpenCV for real-time image processing.",
        "Explored object detection and scene classification to enhance camera intelligence.",
      ],
      tags: ["Python", "OpenCV", "Computer Vision", "AI"],
      iconName: "Camera",
      highlights: [
        "Real-time video stream ingestion and frame preprocessing",
        "Multi-class object detection and confidence scoring",
        "Environmental scene classification under varying lighting",
      ],
      metrics: "Real-time Computer Vision",
    },
  ],
  certifications: [
    {
      title: "Claude 101",
      issuer: "Anthropic",
      description: "Foundational understanding of Claude models, prompting techniques, and responsible AI deployment principles.",
      verified: true,
      imageUrl: "/images/cert-claude-101.jpeg",
    },
    {
      title: "AI Fluency for Students",
      issuer: "Anthropic",
      description: "Mastery of generative AI concepts, ethical considerations, and practical workflows for academic and engineering excellence.",
      verified: true,
      imageUrl: "/images/cert-ai-fluency.jpeg",
    },
    {
      title: "Data Analytics Webinar",
      issuer: "Brand Monk Academy · NSDC",
      date: "6 July 2026",
      description: "Specialized training on modern data analysis pipelines, exploratory visualization strategies, and actionable business insights.",
      verified: true,
      imageUrl: "/images/cert-data-analytics.jpeg",
    },
  ],
  interests: [
    {
      title: "Coding & Problem Solving",
      description: "Tackling algorithmic puzzles, competitive programming challenges, and optimizing code structures.",
      iconName: "Code",
    },
    {
      title: "Reading",
      description: "Exploring publications on AI research breakthroughs, mathematics, and technological innovation.",
      iconName: "BookOpen",
    },
    {
      title: "Photography",
      description: "Capturing visual perspectives, geometric patterns in architecture, and natural light compositions.",
      iconName: "Camera",
    },
    {
      title: "Gaming",
      description: "Strategic simulation, tactical decision-making games, and studying interactive game mechanics.",
      iconName: "Gamepad2",
    },
    {
      title: "Music",
      description: "Deep focus soundtracks, instrumental arrangements, and rhythm-based creativity while coding.",
      iconName: "Headphones",
    },
  ],
  languages: [
    {
      name: "English",
      level: "Professional",
      percentage: 90,
      badge: "Professional Working Proficiency",
    },
    {
      name: "Tamil",
      level: "Native",
      percentage: 100,
      badge: "Native Language",
    },
  ],
  contact: {
    phone: "+91 96558 15617",
    phoneDisplay: "+91 96558 15617",
    email: "hari0510haran@gmail.com",
    linkedin: "https://linkedin.com/in/hari-haran-88a6663b8",
    linkedinDisplay: "linkedin.com/in/hari-haran-88a6663b8",
    location: "M.A.M. College of Engineering, Tamil Nadu, India",
    availability: "Available for Internships & Projects",
  },
  footer: {
    copyright: "© 2026 Hariharan R. All rights reserved.",
    tagline: "Built with passion for AI and Data Science.",
  },
};
