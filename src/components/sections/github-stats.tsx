"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Code2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Star, label: "GitHub Stars", value: "500+", color: "text-yellow-500" },
  { icon: GitFork, label: "Repositories", value: "80+", color: "text-blue-500" },
  { icon: Code2, label: "Contributions", value: "2,400+", color: "text-green-500" },
  { icon: Activity, label: "Streak (days)", value: "180+", color: "text-purple-500" },
];

// Deterministic contribution grid — no random values (avoids hydration mismatch)
const CONTRIBUTION_GRID = Array.from({ length: 52 * 7 }, (_, i) => {
  const seed = (i * 2654435761) >>> 0;
  const val = (seed % 100) / 100;
  if (val > 0.85) return "bg-blue-500";
  if (val > 0.65) return "bg-blue-400/70";
  if (val > 0.4) return "bg-blue-300/50";
  if (val > 0.2) return "bg-blue-200/30";
  return "bg-muted";
});

export function GitHubStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-muted/20" aria-label="GitHub statistics">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Github className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Open Source
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            GitHub{" "}
            <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-card text-center"
            >
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-foreground">Contribution Activity</span>
            <span className="text-xs text-muted-foreground">Last 12 months</span>
          </div>
          <div
            className="grid gap-1 mb-4 overflow-x-auto"
            style={{ gridTemplateColumns: "repeat(52, minmax(0, 1fr))", gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
            aria-label="GitHub contribution graph"
          >
            {CONTRIBUTION_GRID.map((color, i) => (
              <div
                key={i}
                className={`h-2.5 w-2.5 rounded-sm ${color}`}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/saadbilal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
