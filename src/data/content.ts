// Single source of truth for all portfolio content.
// Edit the values here to update the site — no need to touch components.

export const profile = {
  name: "Shakaib Ur Rehman",
  nameUrdu: "شکیب الرحمٰن",
  title: "Senior Backend Developer",
  location: "Lahore, Pakistan",
  phone: "+92 323 7500667",
  email: "shakiabchudry498@gmail.com",
  linkedin: "http://linkedin.com/in/shakiab-ur-rehman-a7626a13b",
  // Digits only, country code first, no leading 0 — required format for wa.me links.
  whatsappNumber: "923237500667",
  whatsappMessage:
    "Hi Shakaib, I found your portfolio and I'd like to discuss a project with you.",
  resumeFile: "/resume.pdf",
  tagline:
    "Building scalable, secure backend systems with 3+ years of experience across wellness, education, social, and e-commerce platforms.",
  summary:
    "Hi! I'm Shakaib, a Senior Backend Developer with 3+ years of experience in backend architecture, API development, and database management. I specialize in Node.js, Nest.js, and Express.js, with hands-on experience building scalable, secure systems and integrating AI-powered features. I've worked across wellness, education, social platforms, and e-commerce, taking projects from API design through production deployment.",
};

export const availability = {
  badge: "Open to Remote Opportunities",
  title: "Remote Backend Developer",
  description:
    "I work remotely and collaborate with teams worldwide. Currently available for remote opportunities and open to long-term, flexible, and project-based engagements.",
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
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
];

export const aboutSkillGroups = [
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Vector Database"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS SES", "AWS S3", "PM2", "Twilio"],
  },
  {
    title: "Integrations & Tools",
    items: ["Thawani", "MyFatoorah", "OpenAI API", "Real-Time Communication"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Garrison University, Lahore, Pakistan",
    period: "2022",
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
    company: "Quhdock",
    role: "Senior Backend Developer",
    location: "Lahore, Pakistan",
    period: "2023 — Present",
    type: "Full-time",
    points: [
      "Developed and maintained large-scale backend applications using Node.js and Nest.js.",
      "Designed RESTful APIs for real-time and cloud-integrated applications.",
      "Implemented AI solutions and integrated AI models into services.",
      "Built reusable backend modules and optimized API performance.",
      "Collaborated with cross-functional teams including QA, design, and product management.",
      "Integrated 3rd-party services such as Thawani Communication Services.",
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
    name: "MyScienceLand",
    role: "Team Lead Backend Developer",
    location: "United Kingdom",
    description:
      "An education platform with student dashboards and AI-powered assessment tools.",
    tech: ["Next.js", "NestJS", "AWS", "MongoDB", "GPT-4"],
    features: [
      "Built dashboards and student tools using Next.js",
      "Performance-optimized UI rendering",
      "AI-powered assessment features for automatic quiz generation",
      "Led backend development, API design, and team coordination",
    ],
  },
  {
    name: "Socalii",
    role: "Senior Backend Developer",
    location: "Oman",
    description:
      "A social & business platform combining networking, commerce, and content tools.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Role-based login supporting business and individual accounts",
      "Digital business card generation for individual users",
      "Store management with product categorization and sales tracking",
      "CV builder and social media content posting",
      "Barcode and QR scanner integration",
    ],
  },
  {
    name: "LovetoAir",
    role: "Backend Developer",
    location: "USA",
    description:
      "A review platform for user-generated seller feedback and moderation.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "AWS"],
    features: [
      "Platform for user-generated seller reviews with feedback management",
      "APIs for review submission, moderation, and analytics",
      "Secure user authentication and data management",
    ],
  },
  {
    name: "Aviaero",
    role: "Backend Developer",
    location: "Germany",
    description:
      "A student learning platform with structured study plans and an AI tutor chatbot.",
    tech: ["NestJS", "PostgreSQL", "OpenAI API", "JWT", "AWS", "Git"],
    features: [
      "AI chatbot for study support, explanations, and doubt solving",
      "Subject-wise structured study plans for guided learning",
      "Personalized learning experience to improve student performance",
    ],
  },
  {
    name: "SysPOS",
    role: "Backend Developer",
    location: "UAE",
    description:
      "A point-of-sale system for transactions, inventory, and staff performance tracking.",
    tech: ["Express.js", "MySQL", "AWS"],
    features: [
      "POS system for transactions, inventory management, and sales reports",
      "Reorder alerts and commission tracking",
      "Optimized backend performance for high-volume transactions",
    ],
  },
  {
    name: "LimoGuard",
    role: "Backend Developer",
    location: "Invenza, Qatar",
    description:
      "A multi-tenant fleet management SaaS backend for limousine companies across Qatar.",
    tech: ["NestJS", "MongoDB", "Redis", "Twilio", "MyFatoorah"],
    features: [
      "Risk auto-escalation engine with atomic MongoDB operations for payment risk states",
      "Per-company configurable cron jobs for auto-debit and reminders via @nestjs/schedule and Redis distributed locks",
      "MyFatoorah payment gateway integration for tokenized charging and paylinks",
      "WhatsApp + SMS notifications via Twilio for payment alerts",
      "Deployed to production with PM2 across staging and production",
    ],
  },
];

export const services = [
  {
    title: "Backend API Development",
    description:
      "Designing and building RESTful APIs with Node.js, Express.js, and Nest.js for real-time and cloud-integrated applications.",
    points: [
      "RESTful & modular API design",
      "Authentication & authorization (JWT)",
      "Real-time communication",
      "Performance optimization",
    ],
  },
  {
    title: "Database Design & Management",
    description:
      "Modeling and managing relational and NoSQL databases for scalable, reliable systems.",
    points: [
      "PostgreSQL & MySQL schema design",
      "MongoDB & vector database modeling",
      "Query optimization",
      "Data integrity & migrations",
    ],
  },
  {
    title: "Cloud & Third-Party Integrations",
    description:
      "Connecting applications to cloud infrastructure and third-party services for payments, messaging, and storage.",
    points: [
      "AWS (SES, S3), PM2 deployment",
      "Payment gateways (MyFatoorah, Thawani)",
      "Twilio SMS & WhatsApp notifications",
      "Cron-based scheduled jobs",
    ],
  },
  {
    title: "AI-Powered Feature Integration",
    description:
      "Embedding AI models into backend services to power chatbots, assessments, and automation.",
    points: [
      "OpenAI / GPT-4 API integration",
      "AI chatbot & virtual tutor backends",
      "Automated content generation",
      "AI-assisted development workflow",
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
