"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers } from "lucide-react";

const techItems = [
  { name: "Python", icon: "🐍", color: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/20", text: "text-blue-400" },
  { name: "FastAPI", icon: "⚡", color: "from-green-500/20 to-green-600/10", border: "border-green-500/20", text: "text-green-400" },
  { name: "Django", icon: "🎸", color: "from-emerald-500/20 to-emerald-600/10", border: "border-emerald-500/20", text: "text-emerald-400" },
  { name: "Node.js", icon: "🟢", color: "from-lime-500/20 to-lime-600/10", border: "border-lime-500/20", text: "text-lime-400" },
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-cyan-600/10", border: "border-cyan-500/20", text: "text-cyan-400" },
  { name: "Next.js", icon: "▲", color: "from-slate-500/20 to-slate-600/10", border: "border-slate-500/20", text: "text-slate-300" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600/20 to-blue-700/10", border: "border-blue-600/20", text: "text-blue-300" },
  { name: "AWS", icon: "☁️", color: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/20", text: "text-orange-400" },
  { name: "Docker", icon: "🐳", color: "from-sky-500/20 to-sky-600/10", border: "border-sky-500/20", text: "text-sky-400" },
  { name: "Kubernetes", icon: "⚙️", color: "from-indigo-500/20 to-indigo-600/10", border: "border-indigo-500/20", text: "text-indigo-400" },
  { name: "Terraform", icon: "🏗️", color: "from-violet-500/20 to-violet-600/10", border: "border-violet-500/20", text: "text-violet-400" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-700/20 to-blue-800/10", border: "border-blue-700/20", text: "text-blue-300" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600/20 to-green-700/10", border: "border-green-600/20", text: "text-green-300" },
  { name: "Redis", icon: "🔴", color: "from-red-500/20 to-red-600/10", border: "border-red-500/20", text: "text-red-400" },
  { name: "Kafka", icon: "📨", color: "from-gray-500/20 to-gray-600/10", border: "border-gray-500/20", text: "text-gray-300" },
  { name: "GraphQL", icon: "◈", color: "from-pink-500/20 to-pink-600/10", border: "border-pink-500/20", text: "text-pink-400" },
  { name: "OpenAI", icon: "🤖", color: "from-teal-500/20 to-teal-600/10", border: "border-teal-500/20", text: "text-teal-400" },
  { name: "Elasticsearch", icon: "🔍", color: "from-yellow-500/20 to-yellow-600/10", border: "border-yellow-500/20", text: "text-yellow-400" },
];

export function TechShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding" aria-label="Technology stack">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tools I Build{" "}
            <span className="gradient-text">Production Systems</span> With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated stack refined over 10+ years — chosen for reliability,
            performance, and scalability at enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
          {techItems.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`group flex flex-col items-center gap-2 p-3 rounded-xl border ${tech.border} bg-gradient-to-br ${tech.color} hover:scale-105 transition-all duration-200 cursor-default`}
            >
              <span className="text-2xl" role="img" aria-label={tech.name}>
                {tech.icon}
              </span>
              <span className={`text-xs font-medium ${tech.text} text-center leading-tight`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
