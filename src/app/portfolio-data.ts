export interface PersonalInfo {
  name: string;
  firstName?: string;
  lastName?: string;
  title: string;
  headline?: string;
  headlineStaticText?: string;
  headlineAnimatedWords?: string[];
  headlineAnimationDuration?: number;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  objective: string;
  shortBio?: string;
  availability?: string;
  yearsOfExperience?: string;
}

export interface Skills {
  frontEnd: string[];
  backEnd: string[];
  toolsFrameworks: string[];
  other: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education;
  certifications: Certification[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Kumar Satyam",
    firstName: "Kumar",
    lastName: "Satyam",
    title: "Senior Solutions Developer",
    headline: "Senior Solutions Developer",
    headlineStaticText: "I'm a",
    headlineAnimatedWords: [
      "Full-Stack Developer",
      "Problem Solver",
      "Innovator",
      "Tech Enthusiast",
    ],
    headlineAnimationDuration: 3000,
    email: "ksatyam4199@gmail.com",
    phone: "+91 8298380149",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/ksatyam4199",
    github: "https://github.com/Satyam3472",
    website: "ksatyam.online",
    objective:
      "A META-certified results-driven software engineer with 3.5+ years of experience specializing in full-stack development and enterprise solutions. Proven track record in designing scalable, high-impact applications and streamlining workflows to enhance productivity by up to 40%. Seeking to leverage technical expertise and leadership skills to drive innovation and digital transformation in a forward-thinking organization",
    shortBio:
      "A META-certified results-driven software engineer with 3.5+ years of experience specializing in full-stack development and enterprise solutions.",
    availability: "Available for opportunities",
    yearsOfExperience: "3.5+",
  },
  skills: {
    frontEnd: [
      "React.js",
      "React-Native",
      "Redux",
      "Next.js",
      "Figma",
      "Tailwind",
      "JavaScript",
      "TypeScript",
    ],
    backEnd: [
      "Node-JS",
      "Data Handling(My SQL & MongoDB)",
      "API Creation",
      "Web Scripting(Perl)",
    ],
    toolsFrameworks: [
      "Docker",
      "Prisma",
      "AWS",
      "Firebase",
      "Stripe",
      "Redux-Toolkit",
      "Soap",
      "Jira",
      "Three.js",
    ],
    other: [
      "Version Control (Git)",
      "Agile Methodologies",
      "Data Structures & Algorithms (350+)",
    ],
  },
  experience: [
    {
      title: "Senior Solutions Developer",
      company: "Tata Technologies",
      location: "Jamshedpur(On-Site), India",
      startDate: "Aug 2024",
      endDate: "Present",
      isPresent: true,
      achievements: [
        "L3 Controllers Dashboard Development: Engineered a dashboard using React.js, TypeScript, and Next.js for real-time monitoring, achieving a 30% improvement in operational efficiency. Deployed with Docker and Firebase for seamless scaling.",
        "Digital SOR Process Optimization: Replaced the manual, email-based Statement of Requirements (SOR) approval process with a fully digitized workflow. Integrated five key systems—PLM, ProNext, Cost Hub, SAP, and ACER—into a seamless process. Automated Digital SOR PDF generation, cutting processing time by 40%, improving document accuracy, and significantly reducing communication efforts between engineering, production, planning, and supply chain teams.",
        "Automated Part Replenishment System: Developed a real-time system to track part consumption in the kitting zone and automatically generate pick lists when inventory falls below the set threshold. This system eliminated manual oversight, reducing production delays by 30%. The dashboard provides real-time updates, with low stock highlighted in red and restocked parts in green, improving operational visibility and ensuring a continuous supply of parts.",
      ],
    },
    {
      title: "Solution Developer",
      company: "Tata Technologies",
      location: "Jamshedpur(On-Site), India",
      startDate: "Jan 2023",
      endDate: "Jul 2024",
      isPresent: false,
      achievements: [
        "TTL Innovista 2024 Winner: Led an innovative project that improved production efficiency by 25%.",
        "Created 20+ RESTful APIs for integration with PLM and SAP systems, improving performance by 20%.",
        "Delivered a visually appealing activity tracker with Agile methodology, reducing development time by 20%, attracting 5,000+ users, and achieving 98% user satisfaction.",
        "Engineered and deployed high-performance web applications with React.js, Node.js, and MySQL, resulting in a 25% improvement in deployment speed and significant enhancement in system scalability.",
        "Automated Production Planning: Designed a system to optimize shift planning and resource allocation, automating 80% of manual processes. Integrated real-time data analysis to reduce production delays and enhance manufacturing efficiency by 25%.",
      ],
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Tata Technologies",
      location: "Jamshedpur(On-Site), India",
      startDate: "Jan 2022",
      endDate: "Jan 2023",
      isPresent: false,
      achievements: [
        "Developed 10+ responsive web applications for TATA MOTORS with 20% faster load times using Next and ReactJS. Implemented Bootstrap and Tailwind, resulting in a 30% increase in user interface efficiency and 20% higher user satisfaction.",
        "Optimized server-side logic and data handling with Node.js, achieving 50% faster response times and 40% improved data operations.",
        "Actively participated in the software development lifecycle, contributing to design, development, and implementation phases to ensure high-quality deliverables.",
      ],
    },
  ],
  projects: [
    {
      name: "Gym Management App – Full Stack Web Solution",
      description:
        "Built a fully responsive Gym Management system with Next.js, TypeScript, Tailwind CSS, and Prisma ORM, supporting member tracking, trainer assignments, and attendance logging.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma ORM",
        "MySQL",
        "JWT",
        "Docker",
      ],
      features: [
        "Designed and developed a modern landing page from Figma for better user engagement",
        "Streamlined admin dashboard with real-time analytics",
        "Integrated JWT-based authentication",
        "Dockerized deployment, ensuring secure, scalable, and production-ready architecture",
      ],
    },
    {
      name: "ExpenseTrack - Personal Finance Mobile App",
      description:
        "Developed a cross-platform expense tracker using React Native, Expo, and Firebase with real-time data synchronization and JWT authentication.",
      technologies: [
        "React Native",
        "Expo",
        "Firebase",
        "JWT",
        "Cloudinary",
        "Victory Native",
      ],
      features: [
        "Implemented wallet management with balance forecasting",
        "Transaction categorization",
        "Cloudinary integration for receipt storage",
        "Interactive data visualization using Victory Native charts, improving user spending insights by 40%",
      ],
    },
    {
      name: "Intimation - Job notification site",
      description:
        "Developed a scalable, real-time job notification site using React 18, Next.js, TypeScript, and GraphQL.",
      technologies: [
        "React 18",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Auth0",
        "Docker",
      ],
      features: [
        "Enhanced user experience with PWA features",
        "Auth0 authentication",
        "Deployed with Docker",
        "Integrated advanced search and filter functionalities, improving job search efficiency by 30%",
      ],
    },
    {
      name: "SSS Bricks - Bricks Business App",
      description:
        "Created a financial records system for tracking investments, expenses, and income using Next.js.",
      technologies: ["Next.js", "Context API"],
      features: [
        "Implemented CRUD functionality with Context API for state management",
        "Optimized backend API calls for seamless database interactions",
        "Added reporting and analytics features, enabling detailed financial insights and trend analysis",
      ],
    },
    {
      name: "E-commerce Website",
      description:
        "Developed a responsive e-commerce platform with React 18, Next.js, TypeScript, GraphQL, and PostgreSQL.",
      technologies: [
        "React 18",
        "Next.js",
        "TypeScript",
        "GraphQL",
        "PostgreSQL",
        "Stripe",
        "Docker",
      ],
      features: [
        "Featured PWA capabilities",
        "Secure Stripe payments",
        "Docker deployment for scalability",
      ],
    },
  ],
  education: {
    degree: "Bachelor Of Engineering(CSE)",
    institution: "Shree SankaraCharya Group of Institutions",
    period: "2018-2022",
  },
  certifications: [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "META",
      period: "04/2023 - 10/2023",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "FREE CODE CAMP",
      period: "08/2023 - 10/2023",
    },
  ],
  achievements: [
    {
      title: "Tata Technologies Innovista Winner 2024",
    },
    {
      title: "Employee Of the Quarter (Q3-2023)",
    },
  ],
};

