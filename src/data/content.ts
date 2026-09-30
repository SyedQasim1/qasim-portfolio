// Single source of truth for all portfolio content.
// Edit the values here to update the site — no need to touch components.

export const profile = {
  name: "Syed Muhammad Qasim",
  nameUrdu: "سید محمد قاسم",
  title: "Senior Full Stack Engineer",
  location: "Dubai, UAE & Lahore, Pakistan",
  phone: "+92 334 9817570",
  email: "syedqasimasif@gmail.com",
  linkedin: "https://www.linkedin.com/in/syed-muhammad-qasim-asif/",
  // Digits only, country code first, no leading 0 — required format for wa.me links.
  whatsappNumber: "923349817570",
  whatsappMessage:
    "Hi Qasim, I found your portfolio and I'd like to discuss a project with you.",
  resumeFile: "/resume.pdf",
  tagline:
    "Building scalable backend services, event-driven pipelines, and production AI/ML systems with 8+ years of experience in Python, Node.js, and TypeScript.",
  summary:
    "Hi! I'm Qasim, a Senior Software Engineer with 8+ years of experience across backend and full-stack development, with strong hands-on expertise in Python, Node.js, and TypeScript. I build scalable backend services, event-driven pipelines, and RESTful APIs, along with React and Next.js frontends. I work closely with data scientists and ML engineers to productionise machine learning models and GenAI experimentation into reliable, production-grade systems, using Kafka, Redis, and relational databases for high-throughput architectures, with Docker, Kubernetes, and CI/CD across AWS, GCP, and Azure. I contribute actively to architecture and technical decisions with a strong product mindset, and mentor engineers while raising engineering standards across teams.",
};

export const availability = {
  badge: "Open to Remote Opportunities",
  title: "Remote Senior Full Stack Engineer",
  description:
    "I work remotely and collaborate with teams worldwide across fintech, SaaS, e-commerce, and government sectors. Currently available for remote opportunities and open to long-term, flexible, and project-based engagements.",
  options: [
    {
      title: "Full-Time",
      description: "Open to long-term remote roles and dedicated team collaboration.",
    },
    {
      title: "Part-Time",
      description: "Available for flexible engagements and ongoing support.",
    },
    {
      title: "Project-Based",
      description: "Available for freelance projects and contract work.",
    },
  ],
};

export const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "25+", label: "Technologies" },
];

export const aboutSkillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Python", "GraphQL", "Microservices"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
];

export const education = [
  {
    degree: "BSCS — Bachelor of Science in Computer Science",
    school: "Punjab University, Lahore, Pakistan",
    period: "2017",
  },
];

export const languages = ["English", "Urdu"];

export const aiTools = [
  "GitHub Copilot",
  "ChatGPT",
  "Cursor",
  "Claude",
];

export const experience = [
  {
    company: "MyAlfred L.L.C",
    role: "Senior Software Engineer",
    location: "United Arab Emirates (Remote)",
    period: "Feb 2025 — Present",
    type: "Full-time",
    points: [
      "Build and scale production-grade Python and Node.js backend services, APIs, and event-driven pipelines for enterprise fintech and insurance platforms.",
      "Work alongside data and AI teams to productionise machine learning models and AI experimentation, powering personalisation and fraud-detection-style features.",
      "Use Kafka and Redis for high-throughput, event-driven communication between services, backed by PostgreSQL for core data.",
      "Deploy and orchestrate services with Docker and Kubernetes, and maintain CI/CD pipelines for reliable releases.",
      "Contribute to architecture and technical decisions, and mentor engineers to raise engineering standards across the team.",
    ],
  },
  {
    company: "Uqoud",
    role: "Fullstack Lead Engineer",
    location: "United Arab Emirates",
    period: "Sep 2022 — Jan 2025",
    type: "Full-time",
    points: [
      "Led backend architecture for a high-traffic, multi-team platform, building Python and Node.js services and event-driven pipelines using Kafka.",
      "Partnered with data teams to bring AI/ML-powered identity verification and document classification models into production, including OCR, MRZ scanning, and facial recognition.",
      "Designed and maintained RESTful APIs backed by PostgreSQL and Redis, containerized with Docker and Kubernetes.",
      "Shaped technical direction and architecture decisions with a product-centric mindset, ensuring solutions impacted customer outcomes.",
      "Mentored engineers, led code reviews, and drove CI/CD and engineering best practices across disciplines.",
    ],
  },
  {
    company: "Virtual Force",
    role: "Senior Software Engineer",
    location: "Lahore, Pakistan",
    period: "Dec 2019 — Aug 2022",
    type: "Full-time",
    points: [
      "Delivered backend solutions in Node.js and Python for healthcare and SaaS platforms, focusing on scalable, reliable system design.",
      "Mentored junior developers and actively participated in architecture planning and technical decision-making.",
      "Improved CI/CD reliability and deployment processes, and implemented caching strategies and API optimizations.",
    ],
  },
  {
    company: "Tkxel",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Mar 2019 — Nov 2019",
    type: "Full-time",
    points: [
      "Built full-stack features for EvaluSkills using React.js, Node.js, and PostgreSQL, including RBAC and complex workflow management.",
      "Wrote unit and integration tests using Jest and Mocha as part of an automated testing strategy.",
    ],
  },
  {
    company: "Engin Technologies",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Jul 2017 — Mar 2019",
    type: "Full-time",
    points: [
      "Developed backend services for messaging, file sharing, and document management systems using Express.js, LoopBack, AWS, and DynamoDB.",
      "Designed and maintained RESTful APIs for enterprise applications, contributing to system architecture and database optimization.",
    ],
  },
];

export type Project = {
  name: string;
  role: string;
  location?: string;
  description: string;
  tech: string[];
  features: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Uqoud",
    role: "Fullstack Lead Engineer",
    location: "Dubai, UAE",
    description:
      "A digital contract, e-signature, and eKYC platform with role-based, real-time access control.",
    tech: ["React.js", "Next.js", "Node.js", "NestJS", "Python", "GCP"],
    features: [
      "Developed scalable contract workflow systems with role-based, real-time access control",
      "Integrated OCR and eKYC solutions for identity verification",
      "Designed scalable, serverless APIs for high availability",
    ],
    url: "https://platform.uqoud.com",
  },
  {
    name: "Cbuy",
    role: "Full Stack Engineer",
    description:
      "A business marketplace platform for buying and selling businesses with advanced search and matching.",
    tech: ["Next.js", "NestJS", "PostgreSQL", "PayPal"],
    features: [
      "Developed a platform for buying and selling businesses with advanced search and matching features",
      "Implemented structured company listings including turnover, location, and ownership details",
      "Integrated secure payment processing using PayPal for service charges",
      "Built a real-time messaging system connecting buyers, sellers, and industry experts",
    ],
  },
  {
    name: "InsuranceMarket.ae",
    role: "Full Stack Engineer",
    description:
      "Migrated core insurance platform modules to event-driven microservices and added a Voice AI Agent.",
    tech: ["Node.js", "Python", "AI/ML", "Voice AI Agent", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Migrated modules from a monolithic architecture to event-driven microservices, improving scalability and reliability",
      "Built and integrated a Voice AI Agent using Python and AI/ML, adding automated conversational capabilities to the platform",
      "Implemented Redis caching to optimise high-traffic APIs",
    ],
  },
  {
    name: "Aviaero",
    role: "Full Stack Engineer",
    description:
      "An AI student learning platform with an AI chatbot tutor that delivers personalised study plans.",
    tech: ["Python", "React.js", "Next.js", "NestJS", "PostgreSQL", "OpenAI API"],
    features: [
      "Built a React/Next.js frontend and NestJS backend for the learning platform",
      "Integrated an AI chatbot tutor powered by the OpenAI API",
      "Delivered personalised study plans for students",
    ],
  },
  {
    name: "Cryptoslam",
    role: "Full Stack Engineer",
    description:
      "High-performance, real-time dashboards for large crypto datasets.",
    tech: ["React.js", "Next.js", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Built high-performance, real-time dashboards for large datasets",
      "Reduced API response and frontend rendering time by 30%",
    ],
    url: "https://cryptoslam.io",
  },
  {
    name: "Eatzy",
    role: "Full Stack Engineer",
    description:
      "A multi-platform food delivery system for restaurants, customers, and riders.",
    tech: ["React.js", "Redux", "Redux-Saga"],
    features: [
      "Implemented restaurant management features including menu and order handling",
      "Built customer-facing ordering and real-time tracking functionality",
      "Designed scalable backend services to handle high traffic",
    ],
  },
];

export type AIHighlight = {
  company: string;
  project: string;
  description: string;
  tech: string[];
  points: string[];
};

export const aiSection = {
  eyebrow: "AI Integrations",
  title: "AI & Identity Verification",
  description:
    "AI-powered OCR, facial recognition, and eKYC systems I've built and integrated into production platforms.",
};

export const aiHighlights: AIHighlight[] = [
  {
    company: "Uqoud",
    project: "eKYC & Compliance Platform",
    description:
      "AI/ML-powered document classification and identity verification productionised into a high-traffic compliance platform.",
    tech: ["OCR/MRZ", "Facial Recognition", "Document Classification", "Python", "Kafka"],
    points: [
      "Productionised AI/ML-powered document classification and identity verification models",
      "Integrated OCR/MRZ scanning for automated document data extraction",
      "Implemented facial recognition for identity matching during onboarding and contract signing",
    ],
  },
  {
    company: "InsuranceMarket.ae",
    project: "Voice AI Agent",
    description:
      "A Voice AI Agent adding automated conversational capabilities to an insurance platform.",
    tech: ["Voice AI", "Python", "AI/ML", "Node.js"],
    points: [
      "Built and integrated a Voice AI Agent using Python and AI/ML",
      "Added automated conversational capabilities to the platform",
    ],
  },
  {
    company: "MyScienceLand",
    project: "AI-Powered E-Learning Platform",
    description:
      "LLM-driven features embedded into a science education platform for students.",
    tech: ["LLM Integration", "Node.js", "NestJS", "MongoDB", "AWS"],
    points: [
      "Built an AI-powered chatbot/assistant for student Q&A and engagement",
      "Used LLMs to generate educational science content, quizzes, and summaries",
      "Implemented AI-driven personalized content and learning-path recommendations",
      "Automated data extraction and processing workflows using LLMs",
    ],
  },
  {
    company: "Averio",
    project: "Business SaaS Platform",
    description:
      "AI-powered chatbot/assistant integrated into a business SaaS platform.",
    tech: ["LLM Integration", "Node.js", "Express.js", "PostgreSQL", "AWS"],
    points: [
      "Built an AI-powered chatbot/assistant to support user interactions",
      "Integrated LLM-based conversational features into the platform backend",
    ],
  },
];

export const services = [
  {
    title: "Full-Stack Web Application Development",
    description:
      "Designing and building end-to-end web applications with React.js, Next.js, Node.js, and NestJS.",
    points: [
      "React.js & Next.js frontend engineering",
      "RESTful & GraphQL API design",
      "Microservices architecture",
      "Performance & accessibility optimization",
    ],
  },
  {
    title: "Database Design & Management",
    description:
      "Modeling and managing relational and NoSQL databases for scalable, reliable systems.",
    points: [
      "PostgreSQL & MySQL schema design",
      "MongoDB & DynamoDB modeling",
      "Redis caching strategies",
      "Query optimization & data migrations",
    ],
  },
  {
    title: "Cloud, DevOps & Microservices",
    description:
      "Architecting cloud-ready infrastructure and CI/CD pipelines across AWS, GCP, and Azure.",
    points: [
      "AWS, GCP & Azure infrastructure",
      "Docker & Kubernetes deployments",
      "CI/CD pipelines (GitHub Actions, GitLab CI)",
      "Monitoring, logging & infrastructure automation",
    ],
  },
  {
    title: "AI/OCR & Identity Verification Integrations",
    description:
      "Embedding AI-powered OCR, eKYC, and identity verification services into production platforms.",
    points: [
      "AI-based OCR/MRZ & facial recognition",
      "eKYC & identity verification workflows",
      "Payment gateway integrations (Payfort, PayPal)",
      "Realtime dashboards & notifications",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Qualification", href: "#qualification" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "#ai" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
