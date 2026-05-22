export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "Full-time" | "Contract" | "Freelance" | "Part-time";
  location: string;
  remote: boolean;
  startDate: string;
  endDate: string | null;
  current: boolean;
  logo: string;
  color: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  impact: {
    metric: string;
    value: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: "youattest",
    company: "YouAttest",
    role: "Senior Full-Stack Engineer & Solutions Architect",
    type: "Full-time",
    location: "Remote (US-based company)",
    remote: true,
    startDate: "2022-01",
    endDate: null,
    current: true,
    logo: "YA",
    color: "from-blue-500 to-cyan-500",
    description:
      "Leading architecture and development of an enterprise Identity Governance & Administration (IGA) platform serving Fortune 500 companies. Responsible for cloud infrastructure, backend systems, and technical leadership.",
    responsibilities: [
      "Architect and implement cloud-native microservices on AWS (ECS, Lambda, RDS, ElastiCache)",
      "Design and build RESTful and GraphQL APIs using FastAPI and Node.js",
      "Lead technical design reviews and establish engineering best practices",
      "Implement CI/CD pipelines with GitHub Actions and AWS CodePipeline",
      "Manage PostgreSQL and MongoDB databases with performance optimization",
      "Integrate AI/ML capabilities for automated access review recommendations",
      "Mentor junior and mid-level engineers on architecture and best practices",
      "Collaborate with product and design teams on technical feasibility",
    ],
    achievements: [
      "Reduced API response time by 65% through caching strategy and query optimization",
      "Architected multi-tenant SaaS platform supporting 200+ enterprise clients",
      "Implemented zero-downtime deployment pipeline reducing release risk by 90%",
      "Designed event-driven architecture processing 10M+ events daily with Kafka",
      "Led migration from monolith to microservices, improving team velocity by 40%",
      "Built automated compliance reporting saving clients 100+ hours/month",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "React",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GraphQL",
    ],
    impact: [
      { metric: "API Performance", value: "65% faster" },
      { metric: "Enterprise Clients", value: "200+" },
      { metric: "Daily Events", value: "10M+" },
      { metric: "Team Velocity", value: "+40%" },
    ],
  },
  {
    id: "healthtech",
    company: "HealthTech Solutions",
    role: "Senior Backend Engineer",
    type: "Full-time",
    location: "Remote",
    remote: true,
    startDate: "2020-06",
    endDate: "2021-12",
    current: false,
    logo: "HT",
    color: "from-green-500 to-emerald-500",
    description:
      "Built HIPAA-compliant healthcare data platform handling patient records, telemedicine, and clinical workflows for a US-based digital health startup.",
    responsibilities: [
      "Designed HIPAA-compliant data architecture for patient health records",
      "Built real-time telemedicine infrastructure using WebRTC and WebSockets",
      "Implemented HL7 FHIR integration for EHR interoperability",
      "Developed ML pipeline for clinical decision support",
      "Managed AWS infrastructure with Terraform and CloudFormation",
    ],
    achievements: [
      "Built platform serving 50,000+ patients across 3 US states",
      "Achieved HIPAA compliance certification within 6 months",
      "Reduced patient data retrieval time from 3s to 200ms",
      "Implemented real-time notifications reducing missed appointments by 35%",
    ],
    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Redis",
      "Docker",
      "Terraform",
      "WebRTC",
      "HL7 FHIR",
    ],
    impact: [
      { metric: "Patients Served", value: "50,000+" },
      { metric: "Data Retrieval", value: "93% faster" },
      { metric: "Missed Appointments", value: "-35%" },
    ],
  },
  {
    id: "mindworks",
    company: "Mindworks",
    role: "Full-Stack Engineer",
    type: "Full-time",
    location: "Islamabad, Pakistan",
    remote: false,
    startDate: "2019-01",
    endDate: "2020-05",
    current: false,
    logo: "MW",
    color: "from-purple-500 to-pink-500",
    description:
      "Full-stack development for multiple client projects spanning e-commerce, fintech, and enterprise SaaS. Led a team of 4 engineers on flagship product development.",
    responsibilities: [
      "Led development of React/Next.js frontend applications",
      "Built Django REST Framework APIs for multiple client projects",
      "Managed AWS deployments and infrastructure",
      "Conducted code reviews and technical interviews",
      "Implemented payment integrations (Stripe, PayPal)",
    ],
    achievements: [
      "Delivered 8 client projects on time and within budget",
      "Reduced deployment time from 2 hours to 15 minutes with CI/CD",
      "Increased test coverage from 20% to 85% across all projects",
      "Led team that won company's best project award",
    ],
    technologies: [
      "Python",
      "Django",
      "React",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Redis",
      "Stripe",
    ],
    impact: [
      { metric: "Projects Delivered", value: "8" },
      { metric: "Deployment Time", value: "-87%" },
      { metric: "Test Coverage", value: "85%" },
    ],
  },
  {
    id: "freelance",
    company: "Independent Consulting",
    role: "Solutions Architect & Full-Stack Consultant",
    type: "Freelance",
    location: "Remote (Global)",
    remote: true,
    startDate: "2017-06",
    endDate: "2018-12",
    current: false,
    logo: "FC",
    color: "from-orange-500 to-red-500",
    description:
      "Provided technical consulting and development services to startups and SMEs globally. Specialized in cloud architecture, backend systems, and mobile development.",
    responsibilities: [
      "Architected cloud solutions for 10+ startups",
      "Built mobile applications with React Native",
      "Designed and implemented REST APIs",
      "Provided AWS infrastructure consulting",
      "Delivered technical audits and optimization recommendations",
    ],
    achievements: [
      "Helped 3 startups successfully launch their MVPs",
      "Reduced infrastructure costs by average 35% for clients",
      "Maintained 5-star rating on Upwork with 20+ reviews",
    ],
    technologies: [
      "Python",
      "Flask",
      "React Native",
      "React",
      "AWS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
    impact: [
      { metric: "Startups Helped", value: "10+" },
      { metric: "Cost Reduction", value: "35% avg" },
      { metric: "Client Rating", value: "5.0 ⭐" },
    ],
  },
];
