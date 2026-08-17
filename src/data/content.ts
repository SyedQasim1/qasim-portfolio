// Single source of truth for all portfolio content.
// Edit the values here to update the site — no need to touch components.

export const profile = {
  name: "Syed Muhammad Qasim",
  nameUrdu: "سید محمد قاسم",
  title: "Senior Full Stack Engineer",
  location: "Dubai, UAE (Remote)",
  phone: "+92 334 9817570",
  email: "syedqasim.work@gmail.com",
  linkedin: "https://www.linkedin.com/in/syed-muhammad-qasim-asif/",
  // Digits only, country code first, no leading 0 — required format for wa.me links.
  whatsappNumber: "923349817570",
  whatsappMessage:
    "Hi Qasim, I found your portfolio and I'd like to discuss a project with you.",
  resumeFile: "/resume.pdf",
  tagline:
    "Building scalable, cloud-ready web applications with 7+ years of experience across fintech, SaaS, e-commerce, and government sectors.",
  summary:
    "Hi! I'm Qasim, a Senior Full Stack Engineer with 7+ years of experience building scalable, cloud-ready web applications across fintech, SaaS, e-commerce, and government sectors. I specialize in React.js, Next.js, Node.js, and NestJS, with hands-on experience in Python, cloud infrastructure, and modern DevOps practices. I've led cross-functional teams, designed microservices, and delivered high-quality products in Agile environments — from digital contract and eKYC platforms to banking apps and real-time dashboards.",
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
  { value: "7+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "20+", label: "Technologies" },
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
    degree: "BSIT — Bachelor of Science in Information Technology",
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
    company: "Uqoud",
    role: "Senior Team Lead",
    location: "Dubai (Remote)",
    period: "2022 — Present",
    type: "Full-time",
    points: [
      "Architected full-stack solutions for a digital contract, e-signature, and eKYC platform using React.js, Next.js, Node.js, NestJS, and GCP.",
      "Integrated AI-based OCR/MRZ, facial recognition, and identity verification services.",
      "Designed microservices for document workflows, contract states, payments, and user management.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker-based deployments.",
      "Led frontend, backend, and mobile teams ensuring cross-functional alignment and timely delivery.",
      "Optimized accessibility, SEO, and system performance across the platform.",
    ],
  },
  {
    company: "Aion Digital",
    role: "Senior Software Engineer",
    location: "Remote",
    period: "2019 — 2022",
    type: "Full-time",
    points: [
      "Built banking app modules including onboarding, card issuance, financing, and reporting using React.js and Node.js.",
      "Developed backend microservices in Node.js, NestJS, and Python deployed on Azure.",
      "Integrated national ID verification, payment systems, and communication services.",
      "Used PostgreSQL, MySQL, and Knex for enterprise-grade data operations.",
      "Collaborated with product, QA, and DevOps teams in Scrum-based workflows.",
    ],
  },
  {
    company: "Virtual Force",
    role: "Senior Software Engineer",
    location: "Remote",
    period: "2017 — 2019",
    type: "Full-time",
    points: [
      "Delivered API-driven solutions for healthcare and SaaS platforms.",
      "Developed dashboards, admin panels, and reusable UI components.",
      "Mentored junior developers and improved CI/CD reliability.",
      "Focused on performance tuning, caching, and API optimization.",
    ],
  },
  {
    company: "Tkxel",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "2017",
    type: "Full-time",
    points: [
      "Built full-stack features for EvaluSkills using React.js, Node.js, and PostgreSQL.",
      "Implemented RBAC, form flows, visual analytics, and automated deployments.",
      "Wrote unit tests (Jest, Mocha) and supported production releases.",
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
    role: "Senior Team Lead",
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
      "Migrated core insurance platform modules from a monolithic architecture to microservices.",
    tech: ["Node.js", "Python", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    features: [
      "Migrated core modules from a monolithic architecture to microservices",
      "Implemented Redis caching to optimise high-traffic APIs",
      "Automated CI/CD pipelines and improved infrastructure monitoring",
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
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
