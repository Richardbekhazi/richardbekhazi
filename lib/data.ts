// lib/data.ts
import { Monitor, Globe, Server, Users, BarChart, Code2 } from "lucide-react";

export const siteConfig = {
  name: "Richard Bekhazi",
  title: "Technical Lead & AI Systems Architect | Engineering Leadership",
  email: "RichardBekhazi@gmail.com",
  location: "Ottawa, ON",
  socials: {
    linkedin: "https://linkedin.com/in/richardbekhazi",
  },
};

export const hero = {
  badge: "Available for Global Remote Leadership Roles",
  heading: "AI Systems Architecture & Technical Leadership",
  subheading: "Building production-grade AI platforms and scalable enterprise systems. I bridge engineering excellence with business strategy in regulated environments.",
  primaryCta: "Schedule a Consultation",
  secondaryCta: "Download Resume",
};

export const about = {
  heading: "Executive Summary",
  content: `Engineering Leader and Systems Architect with 8+ years of experience building scalable, data-driven platforms and production-grade systems in highly regulated enterprise environments.

  I combine deep technical expertise in Python, MATLAB, AI/ML systems, and enterprise architecture with proven leadership in cross-functional teams. My background includes designing secure AI platforms, optimizing complex data pipelines, and translating business requirements into robust technical solutions across international markets.
  
  From architecting locally-hosted generative AI systems at Central Banks to leading enterprise platform implementations across the MENA region, I specialize in building scalable systems that bridge engineering excellence and business strategy.`,
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
    title: "Mensa Member",
    description: "Recognized High IQ Society",
  },
  {
    title: "Technology Instructor",
    description: "Promaxis IT & C'est Bon Ottawa (Leadership & Public Speaking)",
  },
];