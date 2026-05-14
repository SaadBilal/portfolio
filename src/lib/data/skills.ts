export interface Skill {
  name: string;
  level: number; // 0-100
  years: number;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend Engineering",
    icon: "Server",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    description: "Core backend technologies for building scalable APIs and services",
    skills: [
      { name: "Python", level: 98, years: 7 },
      { name: "FastAPI", level: 95, years: 4 },
      { name: "Django", level: 92, years: 6 },
      { name: "Flask", level: 88, years: 5 },
      { name: "Node.js", level: 85, years: 4 },
      { name: "GraphQL", level: 82, years: 3 },
      { name: "REST APIs", level: 98, years: 7 },
      { name: "Microservices", level: 90, years: 4 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "Monitor",
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
    description: "Modern frontend frameworks and UI development",
    skills: [
      { name: "React", level: 90, years: 5 },
      { name: "Next.js", level: 88, years: 4 },
      { name: "TypeScript", level: 88, years: 4 },
      { name: "JavaScript", level: 92, years: 6 },
      { name: "Tailwind CSS", level: 90, years: 3 },
      { name: "React Native", level: 78, years: 3 },
      { name: "HTML/CSS", level: 92, years: 7 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & AWS",
    icon: "Cloud",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    description: "Cloud architecture and AWS services expertise",
    skills: [
      { name: "AWS", level: 95, years: 5 },
      { name: "EC2 / ECS / EKS", level: 92, years: 5 },
      { name: "Lambda / Serverless", level: 88, years: 4 },
      { name: "RDS / Aurora", level: 90, years: 5 },
      { name: "S3 / CloudFront", level: 95, years: 5 },
      { name: "API Gateway", level: 88, years: 4 },
      { name: "CloudWatch", level: 85, years: 4 },
      { name: "IAM / Security", level: 90, years: 5 },
    ],
  },
  {
    id: "devops",
    name: "DevOps & CI/CD",
    icon: "GitBranch",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    description: "Infrastructure automation and deployment pipelines",
    skills: [
      { name: "Docker", level: 95, years: 5 },
      { name: "Kubernetes", level: 88, years: 4 },
      { name: "Terraform", level: 85, years: 3 },
      { name: "GitHub Actions", level: 90, years: 4 },
      { name: "CI/CD Pipelines", level: 92, years: 5 },
      { name: "Helm", level: 80, years: 3 },
      { name: "Ansible", level: 75, years: 3 },
      { name: "ArgoCD", level: 78, years: 2 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    color: "purple",
    gradient: "from-purple-500 to-violet-500",
    description: "Relational, NoSQL, and search databases",
    skills: [
      { name: "PostgreSQL", level: 95, years: 6 },
      { name: "MongoDB", level: 88, years: 5 },
      { name: "Redis", level: 90, years: 5 },
      { name: "Elasticsearch", level: 82, years: 3 },
      { name: "MySQL", level: 85, years: 5 },
      { name: "DynamoDB", level: 80, years: 3 },
      { name: "Kafka", level: 82, years: 3 },
      { name: "TimescaleDB", level: 75, years: 2 },
    ],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    icon: "Brain",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    description: "AI integration, NLP, and ML pipeline development",
    skills: [
      { name: "OpenAI / GPT", level: 85, years: 2 },
      { name: "LangChain", level: 80, years: 1 },
      { name: "spaCy / NLP", level: 78, years: 3 },
      { name: "TensorFlow", level: 72, years: 3 },
      { name: "Scikit-learn", level: 78, years: 4 },
      { name: "Vector Databases", level: 75, years: 1 },
      { name: "RAG Systems", level: 78, years: 1 },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & Design",
    icon: "Layers",
    color: "indigo",
    gradient: "from-indigo-500 to-blue-500",
    description: "System design and architectural patterns",
    skills: [
      { name: "System Design", level: 95, years: 6 },
      { name: "Microservices", level: 92, years: 4 },
      { name: "Event-Driven", level: 88, years: 4 },
      { name: "Domain-Driven Design", level: 85, years: 4 },
      { name: "CQRS / Event Sourcing", level: 80, years: 3 },
      { name: "API Design", level: 95, years: 6 },
      { name: "Cloud Architecture", level: 92, years: 5 },
    ],
  },
  {
    id: "security",
    name: "Security",
    icon: "Shield",
    color: "red",
    gradient: "from-red-500 to-orange-500",
    description: "Application and infrastructure security",
    skills: [
      { name: "OAuth2 / OIDC", level: 90, years: 4 },
      { name: "JWT / Auth", level: 92, years: 5 },
      { name: "OWASP", level: 85, years: 4 },
      { name: "AWS IAM", level: 90, years: 5 },
      { name: "Encryption", level: 85, years: 4 },
      { name: "HIPAA / SOC2", level: 80, years: 3 },
      { name: "Penetration Testing", level: 70, years: 2 },
    ],
  },
];

export const techStack = [
  // Backend
  { name: "Python", category: "Backend", icon: "🐍", proficiency: 98 },
  { name: "FastAPI", category: "Backend", icon: "⚡", proficiency: 95 },
  { name: "Django", category: "Backend", icon: "🎸", proficiency: 92 },
  { name: "Node.js", category: "Backend", icon: "🟢", proficiency: 85 },
  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️", proficiency: 90 },
  { name: "Next.js", category: "Frontend", icon: "▲", proficiency: 88 },
  { name: "TypeScript", category: "Frontend", icon: "🔷", proficiency: 88 },
  // Cloud
  { name: "AWS", category: "Cloud", icon: "☁️", proficiency: 95 },
  { name: "Docker", category: "DevOps", icon: "🐳", proficiency: 95 },
  { name: "Kubernetes", category: "DevOps", icon: "⚙️", proficiency: 88 },
  { name: "Terraform", category: "DevOps", icon: "🏗️", proficiency: 85 },
  // Databases
  { name: "PostgreSQL", category: "Database", icon: "🐘", proficiency: 95 },
  { name: "MongoDB", category: "Database", icon: "🍃", proficiency: 88 },
  { name: "Redis", category: "Database", icon: "🔴", proficiency: 90 },
  { name: "Kafka", category: "Database", icon: "📨", proficiency: 82 },
  // AI
  { name: "OpenAI", category: "AI/ML", icon: "🤖", proficiency: 85 },
  { name: "LangChain", category: "AI/ML", icon: "🔗", proficiency: 80 },
];
