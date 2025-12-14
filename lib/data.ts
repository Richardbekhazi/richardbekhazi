// lib/data.ts
import { Monitor, Globe, Server, Users, BarChart, Code2 } from "lucide-react";

export const siteConfig = {
  name: "Richard Bekhazi",
  title: "Technical Program Leader | Engineering Management",
  email: "RichardBekhazi@gmail.com",
  location: "Ottawa, Canada",
  socials: {
    linkedin: "https://linkedin.com/in/your-profile", // Update this
  },
};

export const hero = {
  badge: "Available for Global Remote Leadership Roles",
  heading: "Technical Program Leadership & Platform Strategy",
  subheading: "Bridging the gap between complex engineering delivery and strategic business outcomes. I translate economic and business requirements into scalable technical realities.",
  primaryCta: "Schedule a Consultation",
  secondaryCta: "Download Resume",
};

export const about = {
  heading: "Executive Summary",
  content: `I am a Technical Program & Delivery Leader with over a decade of experience driving digital transformation across FinTech, Banking, and Logistics sectors. 

  My background is unique: I possess the hard technical skills of a Senior Developer (Python, MATLAB, Systems Architecture) backed by a Master’s in Engineering Management. This allows me to lead cross-functional teams with authority, ensuring that technical roadmaps align perfectly with business goals. 
  
  From modernizing inflation monitoring systems at Central Banks to leading ERP implementations across the MENA region, I specialize in governance, stakeholder alignment, and delivery excellence.`,
};

export const experience = [
  {
    company: "Bank of Canada",
    role: "Lead Systems Developer & Technical Engagement", // Slight title optimization for clarity
    period: "Nov 2021 – Present",
    description: "Driving the modernization of critical economic monitoring platforms using Python, Julia, and MATLAB.",
    highlights: [
      "Engineered data pipelines enabling Economists to monitor Canada’s inflation rate in real-time.",
      "Led sprint planning cycles, managing development velocity, testing protocols, and release governance.",
      "Negotiated technical specifications with non-technical stakeholders to define clear requirements.",
      "Designed and delivered technical enablement training for internal bank employees and clients.",
    ],
  },
  {
    company: "Unilog",
    role: "Project Consultant & Delivery Engineer",
    period: "Mar 2019 – Aug 2021",
    description: "Managed global software implementation projects across Canada, South Africa, Dubai, Egypt, and Lebanon.",
    highlights: [
      "Orchestrated cross-border project delivery, handling sales engineering, finance alignment, and software deployment.",
      "Optimized client workflows through rigorous data analysis and system enhancements.",
      "Provided high-touch on-site support and user training to ensure adoption in complex enterprise environments.",
      "Operated trilingual (English, French, Arabic) to bridge communication gaps in international markets.",
    ],
  },
  {
    company: "Bank El Mawarid",
    role: "MIS Systems Engineer",
    period: "July 2017 – Feb 2019",
    description: "Oversaw data integrity, compliance reporting, and operational process improvement.",
    highlights: [
      "Investigated and resolved complex data integrity issues reported by Operations and Compliance.",
      "Implemented automated audit programs to meet strict banking regulatory requirements.",
      "Generated executive-level dashboards (Daily/Weekly/Monthly) to support strategic decision-making.",
    ],
  },
  {
    company: "Supply Network Solution (SNS)",
    role: "Technical Consultant Engineer",
    period: "Sept 2013 – July 2016",
    description: "Led ERP and WMS implementations across the GCC region (KSA, UAE, Qatar).",
    highlights: [
      "Integrated complex logistics products with third-party applications using custom APIs.",
      "Customized Java codebases to meet bespoke client operational needs.",
      "Conducted technical training sessions for end-users to ensure successful system handovers.",
    ],
  },
];

export const skills = [
  {
    category: "Program Leadership",
    icon: Users,
    items: ["Sprint Management", "Stakeholder Negotiation", "Technical Enablement", "Risk Analysis", "Requirements Gathering"],
  },
  {
    category: "Data & Strategy",
    icon: BarChart,
    items: ["Economic Data Monitoring", "MIS Reporting", "Regulatory Compliance", "Business Intelligence", "Process Optimization"],
  },
  {
    category: "Technical Stack",
    icon: Code2,
    items: ["Python & MATLAB", "SQL & Database Design", "Java & C#", "Linux/Unix Environment", "Git & Version Control"],
  },
  {
    category: "Tools & Platforms",
    icon: Server,
    items: ["Power BI", "Jira/Confluence", "ERP & WMS Systems", "Visio & Project", "Azure DevOps"],
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