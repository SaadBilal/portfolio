"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Layers,
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Database,
  Brain,
  Shield,
  Code2,
} from "lucide-react";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Server,
  Monitor,
  Cloud,
  GitBranch,
  Database,
  Brain,
  Layers,
  Shield,
  Code2,
};

function SkillBar({
  name,
  level,
  years,
  delay = 0,
}: {
  name: string;
  level: number;
  years: number;
  delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const getColor = (level: number) => {
    if (level >= 90) return "from-blue-500 to-cyan-500";
    if (level >= 80) return "from-green-500 to-emerald-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-purple-500 to-pink-500";
  };

  const getLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Proficient";
    return "Familiar";
  };

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <span
            className={cn(
              "text-xs px-1.5 py-0.5 rounded font-medium",
              level >= 90
                ? "bg-blue-500/10 text-blue-400"
                : level >= 80
                ? "bg-green-500/10 text-green-400"
                : level >= 70
                ? "bg-yellow-500/10 text-yellow-400"
                : "bg-purple-500/10 text-purple-400"
            )}
          >
            {getLabel(level)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{years}yr</span>
          <span className="font-medium text-foreground">{level}%</span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay }}
          className={`h-full rounded-full bg-gradient-to-r ${getColor(level)}`}
        />
      </div>
    </div>
  );
}

export function TechStackContent() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  const displayedCategories = activeCategory
    ? skillCategories.filter((c) => c.id === activeCategory)
    : skillCategories;

  return (
    <div>
      {/* Header */}
      <section
        ref={headerRef}
        className="section-padding relative overflow-hidden"
        aria-label="Tech stack header"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Skills & Tools
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical{" "}
              <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive view of my technical toolkit — built over 10+ years
              of engineering enterprise systems, cloud infrastructure, and
              full-stack applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filter tabs */}
      <section className="pb-8 sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container-custom pt-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === null
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
              aria-pressed={activeCategory === null}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <button
                  key={cat.id}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.id ? null : cat.id
                    )
                  }
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                  aria-pressed={activeCategory === cat.id}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills grid */}
      <section className="py-12 pb-32" aria-label="Skills breakdown">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {displayedCategories.map((category, catIndex) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  Icon={Icon}
                  index={catIndex}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  category,
  Icon,
  index,
}: {
  category: (typeof skillCategories)[0];
  Icon: React.ElementType;
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Header */}
      <div
        className={`p-6 bg-gradient-to-r ${category.gradient} bg-opacity-10`}
        style={{
          background: `linear-gradient(135deg, var(--card) 0%, var(--card) 100%)`,
          borderBottom: "1px solid hsl(var(--border))",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-md`}
          >
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-bold text-foreground text-lg">
              {category.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="p-6 space-y-5">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            years={skill.years}
            delay={i * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}
