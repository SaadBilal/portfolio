"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal } from "lucide-react";

const lines = [
  { delay: 0, type: "prompt", text: "whoami" },
  { delay: 400, type: "output", text: "saad-bilal" },
  { delay: 800, type: "prompt", text: "cat profile.json" },
  { delay: 1200, type: "json", text: `{
  "role": "Senior Full-Stack Engineer",
  "experience": "10+ years",
  "location": "Pakistan 🇵🇰",
  "remote": true,
  "specialties": [
    "Cloud Architecture",
    "Distributed Systems",
    "AI Integration",
    "Technical Leadership"
  ]
}` },
  { delay: 2400, type: "prompt", text: "aws sts get-caller-identity" },
  { delay: 2800, type: "output", text: '{ "Account": "***", "Arn": "arn:aws:iam::***:user/saad-bilal" }' },
  { delay: 3200, type: "prompt", text: "kubectl get nodes" },
  { delay: 3600, type: "output", text: "NAME          STATUS   ROLES    AGE   VERSION\nprod-node-1   Ready    master   42d   v1.28.0\nprod-node-2   Ready    worker   42d   v1.28.0\nprod-node-3   Ready    worker   42d   v1.28.0" },
  { delay: 4400, type: "prompt", text: "python -c \"print('Hello, World!')\"" },
  { delay: 4800, type: "output", text: "Hello, World!" },
  { delay: 5200, type: "prompt", text: "git log --oneline -5" },
  { delay: 5600, type: "output", text: `a3f2c1d feat: implement event-driven microservices
b8e4a2f fix: optimize PostgreSQL query performance 65%
c1d9f3e feat: add Kafka consumer for real-time events
d4e7b1a chore: update Terraform modules to v5
e2f8c4b feat: integrate OpenAI for access recommendations` },
  { delay: 6800, type: "prompt", text: "echo $AVAILABILITY" },
  { delay: 7200, type: "success", text: "Open to remote opportunities worldwide ✓" },
  { delay: 7600, type: "prompt", text: "█" },
];

function TerminalLine({ line, visible }: { line: typeof lines[0]; visible: boolean }) {
  if (!visible) return null;

  if (line.type === "prompt") {
    return (
      <div className="flex items-start gap-2">
        <span className="text-green-400 select-none flex-shrink-0">❯</span>
        <span className="text-cyan-300">{line.text === "█" ? <span className="animate-typing-cursor">█</span> : line.text}</span>
      </div>
    );
  }

  if (line.type === "json") {
    return (
      <pre className="text-yellow-300/80 text-xs leading-relaxed whitespace-pre-wrap pl-4 border-l border-yellow-500/20">
        {line.text}
      </pre>
    );
  }

  if (line.type === "success") {
    return (
      <div className="pl-4 text-green-400 font-medium">{line.text}</div>
    );
  }

  return (
    <div className="pl-4 text-slate-300/80 whitespace-pre-wrap text-xs leading-relaxed">
      {line.text}
    </div>
  );
}

export function TerminalSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visibleCount, setVisibleCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, idx) => {
      const t = setTimeout(() => {
        setVisibleCount(idx + 1);
      }, line.delay);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="section-padding bg-muted/20"
      aria-label="Interactive terminal"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Terminal
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Peek Into My{" "}
            <span className="gradient-text">Environment</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Terminal window */}
          <div className="rounded-2xl border border-border bg-slate-950 overflow-hidden shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-slate-400 font-mono">
                  saad@portfolio ~ zsh
                </span>
              </div>
            </div>

            {/* Terminal content */}
            <div
              className="p-6 font-mono text-sm space-y-2 min-h-[400px]"
              aria-live="polite"
              aria-label="Terminal output"
            >
              {lines.map((line, i) => (
                <TerminalLine key={i} line={line} visible={i < visibleCount} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
