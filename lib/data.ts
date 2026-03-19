// lib/data.ts
import { Server, Users, BarChart, Code2, Cpu, Globe2, Layers, Rocket } from "lucide-react";

export const siteConfig = {
  name: "Richard Bekhazi",
  title: "Technical Lead & AI Systems Architect | Engineering Leadership",
  email: "RichardBekhazi@gmail.com",
  location: "Ottawa, ON",
  socials: {
    linkedin: "https://linkedin.com/in/richardbekhazi",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "Open to Global Remote Leadership Roles",
  typingWords: [
    "AI Systems Architect",
    "Technical Program Leader",
    "Enterprise Platform Builder",
    "Engineering Strategist",
  ],
  heading: "I build systems that",
  headingHighlight: "move industries forward.",
  subheading:
    "From deploying secure generative AI at central banks to scaling enterprise platforms across 4 countries — I turn complex engineering challenges into production-ready solutions.",
  primaryCta: "Let's Talk",
  secondaryCta: "Download Resume",
};

export const stats = [
  { value: "8+", label: "Years Leading Engineering" },
  { value: "4", label: "Countries Deployed" },
  { value: "11", label: "Engineers Mentored" },
  { value: "3", label: "Enterprise Platforms Built" },
];

export const projects = [
  {
    title: "Secure Generative AI Platform",
    org: "Bank of Canada",
    description:
      "Architected and deployed an on-premise generative AI platform using Ollama with open-source LLMs (Meta LLaMA, Qwen). Engineered cost-optimized CPU-based inference within strict enterprise security constraints — no GPU, no cloud, no shortcuts.",
    tags: ["Ollama", "LLaMA", "Python", "Enterprise Security", "CPU Inference"],
    icon: Cpu,
    color: "blue",
  },
  {
    title: "Macroeconomic Data Applications",
    org: "Bank of Canada",
    description:
      "Built interactive front-end data applications using Python & Streamlit for economists to query, visualize, and analyze macroeconomic indicators in real time. Modernized legacy MATLAB-based pipelines into modern Python workflows.",
    tags: ["Streamlit", "Python", "MATLAB", "SQL Server", "Data Pipelines"],
    icon: BarChart,
    color: "indigo",
  },
  {
    title: "Global ERP Platform Rollout",
    org: "UNILOG — MENA & South Africa",
    description:
      "Directed cross-functional technical teams across multiple regions, delivering full Sage X3 enterprise implementations. Designed horizontal APIs and automation systems connecting financial, sales, and operational workflows.",
    tags: ["Sage X3", "API Design", "Multi-Region", "ERP", "Automation"],
    icon: Globe2,
    color: "emerald",
  },
  {
    title: "Enterprise WMS & Integration Architecture",
    org: "SNS — KSA, UAE, Qatar, Lebanon",
    description:
      "Led implementation and architectural customization of WMS and ERP platforms across the GCC region. Designed Java-based integrations, analytics components, and delivered hands-on technical training for client engineering teams.",
    tags: ["Java", "WMS", "ERP", "Eclipse", "System Integration"],
    icon: Layers,
    color: "amber",
  },
];

export const about = {
  heading: "Who I Am",
  content: `I'm Richard — an engineer who cares about building things that actually work under pressure.

I've spent the last 8+ years in the space where high-stakes systems meet real business outcomes. Whether it's deploying a generative AI platform at a central bank with zero cloud access, or rolling out enterprise systems across four countries in three languages — I thrive in environments where "it has to work perfectly" is the only acceptable outcome.

I don't just write code. I design systems, lead teams, and translate business problems into architectures that scale. My work has touched AI/ML, economic data infrastructure, ERP platforms, and warehouse management systems — always in regulated, high-security environments where there's no room for "good enough."

What drives me: the intersection of deep engineering and real-world impact.`,
};

export const experience = [
  {
    company: "Bank of Canada",
    role: "Technical Lead & AI Systems Architect",
    period: "Nov 2021 – Jan 2026",
    description: "Architecting and deploying secure, production-grade systems including generative AI platforms and modernized economic monitoring infrastructure.",
    highlights: [
      "Architected and deployed secure, locally hosted generative AI platform using Ollama with open-source models (Meta LLaMA, Qwen).",
      "Engineered cost-optimized, CPU-based inference environment navigating enterprise security and budget constraints.",
      "Developed interactive front-end data applications using Python (Streamlit) for economists to query macroeconomic indicators.",
      "Designed robust data pipelines and system integrations across MATLAB IRIS Toolbox, SQL Server, and Python.",
      "Led agile engineering cycles, mentoring 11 team members with sprint planning, testing, and knowledge transfer.",
      "Drove modernization of legacy enterprise platforms through performance optimization.",
    ],
  },
  {
    company: "UNILOG",
    role: "Global Technical Project Lead",
    period: "Mar 2019 – Aug 2021",
    description: "Directed cross-functional technical teams delivering enterprise Sage X3 implementations across international markets.",
    highlights: [
      "Directed cross-functional technical teams across South Africa and MENA regions.",
      "Spearheaded comprehensive planning and delivery of Sage X3 enterprise platforms.",
      "Designed horizontal APIs and robust data pipelines for financial, sales, and operational workflows.",
      "Leveraged multilingual fluency (English, Arabic, French) to translate regional business models into technical solutions.",
      "Engineered generalized automation utilities and AI-assisted analytics for system diagnostics.",
      "Managed hands-on system deployments and technical onboarding programs.",
    ],
  },
  {
    company: "Bank El Mawarid",
    role: "Data Systems Engineer",
    period: "July 2017 – Feb 2019",
    description: "Engineered automated data processing, audit workflows, and reporting abstractions for operations and compliance.",
    highlights: [
      "Engineered and maintained automated data processing and audit workflows.",
      "Established robust data integrity monitoring and traceability for operational controls.",
      "Designed reporting abstractions unifying requirements across Operations, Compliance, and Management.",
      "Managed implementation of critical system updates in regulated production environments.",
    ],
  },
  {
    company: "Supply Network Solution (SNS)",
    role: "Technical Integration Lead",
    period: "Sept 2013 – July 2016",
    description: "Led enterprise ERP and WMS implementations and technical integrations across the GCC region.",
    highlights: [
      "Led implementation and architectural customization of enterprise ERP and WMS platforms across KSA, UAE, Qatar, and Lebanon.",
      "Designed and deployed robust API integrations and Java-based system customizations.",
      "Developed foundational reporting and analytics components using Eclipse and Infor toolsets.",
      "Delivered hands-on onboarding and technical training for client engineering teams.",
      "Served as primary escalation point for diagnosing complex integration failures.",
    ],
  },
];

export const skills = [
  {
    category: "AI & ML Systems",
    icon: Code2,
    items: ["Local LLM Deployment (Ollama)", "Open-Source Models (LLaMA, Qwen)", "CPU-Based Inference Optimization", "Prompt Engineering", "System Benchmarking"],
  },
  {
    category: "Technical Leadership",
    icon: Users,
    items: ["Team Mentorship & Development", "Cross-Functional Leadership", "Agile/Scrum Engineering", "Global Project Management", "Technical Strategy"],
  },
  {
    category: "Data & Architecture",
    icon: BarChart,
    items: ["Complex ETL & Data Pipelines", "RESTful APIs & Integrations", "System Architecture Design", "Database Design & Optimization", "Performance Tuning"],
  },
  {
    category: "Programming & Tools",
    icon: Server,
    items: ["Python, MATLAB, Julia, Java, SQL", "Streamlit & Data Applications", "Git & CI/CD Pipelines", "Enterprise Integration", "Cloud & Linux Environments"],
  },
];

export const education = [
  {
    degree: "Master of Engineering Management",
    school: "American University of Beirut",
    year: "2018",
    note: "Focus on Project Management, Finance, and Decision Systems.",
  },
  {
    degree: "B.E. Computer & Communication Engineering",
    school: "American University of Beirut",
    year: "2012",
  },
  {
    degree: "Lebanese & French Baccalaureate in General Science",
    school: "College Saint Joseph Antoura",
    year: "2007",
  },
];

export const awards = [
  {
    title: "Mensa International Member",
    description: "Top 2% — Recognized High IQ Society",
  },
  {
    title: "Technology Instructor",
    description: "Promaxis IT & C'est Bon Ottawa — Leadership & Public Speaking",
  },
];

export const philosophy = [
  {
    title: "Ship It Right",
    description: "Production systems don't get second chances. I build with the rigor of someone who knows what a 3 AM incident call feels like.",
  },
  {
    title: "Lead by Building",
    description: "The best technical leaders write code. I stay hands-on because architecture decisions should come from someone who feels the pain of bad ones.",
  },
  {
    title: "Bridge the Gap",
    description: "Most projects fail at the translation layer — between business needs and technical reality. That's where I live.",
  },
];