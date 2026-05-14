export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-microservices-aws",
    title: "Building Production-Grade Microservices on AWS: Lessons from 10M+ Daily Events",
    excerpt:
      "A deep dive into architecting event-driven microservices that scale. Real patterns, real mistakes, and what actually works in production.",
    content: "",
    category: "Architecture",
    tags: ["AWS", "Microservices", "Kafka", "System Design", "Python"],
    publishedAt: "2024-01-15",
    readingTime: "12 min read",
    featured: true,
    coverImage: "/blog/microservices-aws.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
  {
    slug: "fastapi-production-patterns",
    title: "FastAPI in Production: Patterns That Scale to 100K+ Requests/Second",
    excerpt:
      "Beyond the tutorial — advanced FastAPI patterns for dependency injection, background tasks, caching, and performance optimization.",
    content: "",
    category: "Backend",
    tags: ["FastAPI", "Python", "Performance", "API Design"],
    publishedAt: "2024-02-08",
    readingTime: "10 min read",
    featured: true,
    coverImage: "/blog/fastapi-production.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
  {
    slug: "aws-cost-optimization-guide",
    title: "How I Reduced AWS Costs by 40% Without Sacrificing Performance",
    excerpt:
      "Practical strategies for AWS cost optimization: right-sizing, reserved instances, spot instances, and architectural changes that saved $200K/year.",
    content: "",
    category: "Cloud",
    tags: ["AWS", "Cost Optimization", "FinOps", "Architecture"],
    publishedAt: "2024-03-01",
    readingTime: "8 min read",
    featured: true,
    coverImage: "/blog/aws-cost.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
  {
    slug: "identity-governance-modern-enterprise",
    title: "Identity Governance in the Modern Enterprise: Beyond Basic IAM",
    excerpt:
      "How enterprise IGA differs from basic IAM, why it matters for compliance, and architectural patterns for building scalable identity governance systems.",
    content: "",
    category: "Security",
    tags: ["Identity Governance", "IAM", "Security", "Compliance", "Enterprise"],
    publishedAt: "2024-03-20",
    readingTime: "15 min read",
    featured: false,
    coverImage: "/blog/identity-governance.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
  {
    slug: "building-rag-systems-production",
    title: "Building RAG Systems That Actually Work in Production",
    excerpt:
      "Retrieval-Augmented Generation beyond the hype — chunking strategies, embedding models, vector databases, and evaluation frameworks.",
    content: "",
    category: "AI/ML",
    tags: ["AI", "RAG", "LangChain", "OpenAI", "Vector Databases"],
    publishedAt: "2024-04-10",
    readingTime: "14 min read",
    featured: false,
    coverImage: "/blog/rag-systems.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
  {
    slug: "kubernetes-production-checklist",
    title: "The Kubernetes Production Readiness Checklist Nobody Talks About",
    excerpt:
      "Security hardening, resource management, observability, and operational patterns for running Kubernetes in production without 3am incidents.",
    content: "",
    category: "DevOps",
    tags: ["Kubernetes", "DevOps", "Security", "Observability"],
    publishedAt: "2024-05-05",
    readingTime: "11 min read",
    featured: false,
    coverImage: "/blog/kubernetes-prod.png",
    author: { name: "Saad Bilal", avatar: "/profile.jpg" },
  },
];

export const blogCategories = [
  "All",
  "Architecture",
  "Backend",
  "Cloud",
  "AI/ML",
  "DevOps",
  "Security",
  "System Design",
];
