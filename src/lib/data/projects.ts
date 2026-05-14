export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: string[];
  tags: string[];
  technologies: string[];
  status: "Production" | "Beta" | "Open Source" | "Case Study";
  featured: boolean;
  image: string;
  color: string;
  gradient: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
  metrics: { label: string; value: string }[];
  challenges: string[];
  architecture: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "youattest",
    title: "YouAttest",
    subtitle: "Enterprise Identity Governance Platform",
    description:
      "Cloud-native IGA platform automating access reviews, certifications, and compliance for Fortune 500 enterprises.",
    longDescription:
      "YouAttest is an enterprise Identity Governance & Administration (IGA) platform that automates user access reviews, certifications, and compliance reporting. Built on AWS with a microservices architecture, it serves 200+ enterprise clients and processes millions of access review events daily. The platform integrates with 50+ enterprise systems including Active Directory, Okta, Salesforce, and ServiceNow.",
    category: ["Enterprise", "Cloud", "SaaS"],
    tags: ["Identity Governance", "Compliance", "AWS", "Microservices", "AI"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "AWS",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    status: "Production",
    featured: true,
    image: "/projects/youattest.png",
    color: "blue",
    gradient: "from-blue-600 to-cyan-500",
    demo: "https://youattest.com",
    metrics: [
      { label: "Enterprise Clients", value: "200+" },
      { label: "Daily Events", value: "10M+" },
      { label: "Integrations", value: "50+" },
      { label: "Uptime", value: "99.99%" },
    ],
    challenges: [
      "Multi-tenant data isolation at scale",
      "Real-time processing of millions of access events",
      "Complex compliance rule engine",
      "Enterprise SSO and directory integrations",
    ],
    architecture:
      "Event-driven microservices on AWS ECS with Kafka for event streaming, PostgreSQL for transactional data, Redis for caching, and Elasticsearch for audit logs.",
    year: "2022",
  },
  {
    id: "ncache",
    title: "NCache Integration",
    subtitle: "Distributed Caching Solution",
    description:
      "High-performance distributed caching layer reducing database load by 80% for enterprise applications.",
    longDescription:
      "Designed and implemented a distributed caching architecture using NCache for a large enterprise client. The solution handles 100K+ cache operations per second, dramatically reducing database load and improving application response times across a multi-region deployment.",
    category: ["Infrastructure", "Performance", "Enterprise"],
    tags: ["Caching", "Distributed Systems", "Performance", "AWS"],
    technologies: [
      "NCache",
      "C#",
      ".NET",
      "AWS",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    status: "Production",
    featured: true,
    image: "/projects/ncache.png",
    color: "green",
    gradient: "from-green-600 to-emerald-500",
    metrics: [
      { label: "Cache Hit Rate", value: "94%" },
      { label: "DB Load Reduction", value: "80%" },
      { label: "Response Time", value: "<10ms" },
      { label: "Ops/Second", value: "100K+" },
    ],
    challenges: [
      "Cache invalidation strategy for complex data relationships",
      "Multi-region cache synchronization",
      "Memory optimization for large datasets",
    ],
    architecture:
      "Distributed cache cluster with NCache across 3 AWS regions, with intelligent cache warming and invalidation strategies.",
    year: "2023",
  },
  {
    id: "swipbox",
    title: "Swipbox",
    subtitle: "Smart Parcel Locker Platform",
    description:
      "IoT-connected parcel locker management system with real-time tracking and automated logistics.",
    longDescription:
      "Built the backend platform for Swipbox, a Scandinavian smart parcel locker company. The system manages thousands of IoT-connected lockers, handles real-time parcel tracking, automated notifications, and integrates with major logistics carriers. Processes 50K+ parcel transactions daily.",
    category: ["IoT", "Logistics", "SaaS"],
    tags: ["IoT", "Real-time", "Logistics", "AWS", "Python"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "AWS IoT",
      "MQTT",
      "Redis",
      "Docker",
      "Terraform",
    ],
    status: "Production",
    featured: true,
    image: "/projects/swipbox.png",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    demo: "https://swipbox.com",
    metrics: [
      { label: "Active Lockers", value: "5,000+" },
      { label: "Daily Transactions", value: "50K+" },
      { label: "Countries", value: "8" },
      { label: "Uptime", value: "99.9%" },
    ],
    challenges: [
      "Real-time IoT device management at scale",
      "Offline-first locker firmware with sync",
      "Multi-carrier logistics integration",
      "GDPR compliance across EU countries",
    ],
    architecture:
      "AWS IoT Core for device management, MQTT for real-time communication, FastAPI microservices, PostgreSQL with TimescaleDB for time-series data.",
    year: "2021",
  },
  {
    id: "tabibi",
    title: "Tabibi",
    subtitle: "Digital Health & Telemedicine Platform",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with doctors through video consultations and AI-powered triage.",
    longDescription:
      "Tabibi is a comprehensive digital health platform offering telemedicine consultations, AI-powered symptom checking, prescription management, and health record storage. Built with HIPAA compliance from the ground up, serving patients across the Middle East.",
    category: ["HealthTech", "AI", "Mobile"],
    tags: ["Telemedicine", "HIPAA", "AI", "React Native", "WebRTC"],
    technologies: [
      "Python",
      "Django",
      "React Native",
      "React",
      "PostgreSQL",
      "AWS",
      "WebRTC",
      "Redis",
      "TensorFlow",
    ],
    status: "Production",
    featured: true,
    image: "/projects/tabibi.png",
    color: "teal",
    gradient: "from-teal-500 to-cyan-500",
    metrics: [
      { label: "Registered Patients", value: "100K+" },
      { label: "Daily Consultations", value: "2,000+" },
      { label: "Avg Wait Time", value: "<5 min" },
      { label: "Patient Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "HIPAA-compliant data architecture",
      "Low-latency video consultations",
      "AI symptom checker accuracy",
      "Multi-country regulatory compliance",
    ],
    architecture:
      "Microservices on AWS with WebRTC for video, HL7 FHIR for health data interoperability, TensorFlow for AI triage, and end-to-end encryption.",
    year: "2020",
  },
  {
    id: "newsmix",
    title: "NewsMix",
    subtitle: "AI-Powered News Aggregation Platform",
    description:
      "Intelligent news aggregation platform using NLP to personalize content feeds for 500K+ users.",
    longDescription:
      "NewsMix aggregates news from 1,000+ sources and uses NLP/ML to personalize content feeds based on user interests, reading patterns, and engagement. Features real-time trending detection, sentiment analysis, and multi-language support.",
    category: ["AI/ML", "Media", "SaaS"],
    tags: ["NLP", "Machine Learning", "Python", "Real-time", "Personalization"],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Kafka",
      "AWS",
      "spaCy",
      "Transformers",
    ],
    status: "Production",
    featured: false,
    image: "/projects/newsmix.png",
    color: "purple",
    gradient: "from-purple-600 to-violet-500",
    metrics: [
      { label: "Active Users", value: "500K+" },
      { label: "News Sources", value: "1,000+" },
      { label: "Articles/Day", value: "100K+" },
      { label: "Personalization Accuracy", value: "89%" },
    ],
    challenges: [
      "Real-time content ingestion at scale",
      "NLP pipeline performance optimization",
      "Personalization without filter bubbles",
      "Multi-language content processing",
    ],
    architecture:
      "Kafka for real-time ingestion, Elasticsearch for search and discovery, spaCy + Transformers for NLP, Redis for session and recommendation caching.",
    year: "2021",
  },
  {
    id: "aws-infra",
    title: "AWS Multi-Region Infrastructure",
    subtitle: "Enterprise Cloud Architecture",
    description:
      "Designed and implemented multi-region AWS infrastructure with 99.99% uptime SLA for a fintech company.",
    longDescription:
      "Architected and implemented a production-grade multi-region AWS infrastructure for a fintech company processing $50M+ in daily transactions. Includes disaster recovery, auto-scaling, security hardening, and comprehensive monitoring.",
    category: ["Cloud", "Infrastructure", "DevOps"],
    tags: ["AWS", "Terraform", "Multi-Region", "DR", "Security"],
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
      "CloudWatch",
      "WAF",
      "Shield",
    ],
    status: "Case Study",
    featured: false,
    image: "/projects/aws-infra.png",
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
    metrics: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "RTO", value: "<15 min" },
      { label: "Cost Reduction", value: "40%" },
      { label: "Regions", value: "3" },
    ],
    challenges: [
      "Cross-region data replication with consistency",
      "Automated failover without data loss",
      "Cost optimization without sacrificing reliability",
      "Security compliance (SOC2, PCI-DSS)",
    ],
    architecture:
      "Active-active multi-region setup with Route53 health checks, Aurora Global Database, S3 cross-region replication, and automated runbooks.",
    year: "2023",
  },
];

export const projectCategories = [
  "All",
  "Enterprise",
  "Cloud",
  "AI/ML",
  "HealthTech",
  "IoT",
  "Infrastructure",
  "SaaS",
  "Mobile",
];
