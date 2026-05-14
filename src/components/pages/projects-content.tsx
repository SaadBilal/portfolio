"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  ExternalLink,
  Github,
  Search,
  Filter,
  ArrowRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects, projectCategories } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  const filteredProjects = React.useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category.includes(activeCategory);
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div>
      {/* Header */}
      <section
        ref={headerRef}
        className="section-padding relative overflow-hidden"
        aria-label="Projects header"
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
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects &{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise systems, SaaS platforms, and cloud architectures built
              for scale. Each project represents real engineering challenges
              solved in production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container-custom pt-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                aria-label="Search projects"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12 pb-32" aria-label="Projects list">
        <div className="container-custom">
          <div className="mb-6 text-sm text-muted-foreground">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Code2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.article
      ref={ref}
      id={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
    >
      {/* Gradient header */}
      <div
        className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {project.category.map((cat) => (
                <Badge key={cat} variant="tech" className="text-xs">
                  {cat}
                </Badge>
              ))}
              <Badge
                variant={
                  project.status === "Production"
                    ? "success"
                    : project.status === "Open Source"
                    ? "info"
                    : "outline"
                }
                className="text-xs"
              >
                {project.status}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h2>
            <p className="text-primary/80 font-medium text-sm mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <span className="text-sm text-muted-foreground flex-shrink-0">
            {project.year}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl bg-muted/50 border border-border p-3 text-center"
            >
              <div className="text-base font-bold gradient-text">
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expandable details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-border pt-6 mb-6 space-y-6">
                {/* Long description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-foreground text-sm">
                      Architecture
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 rounded-lg p-4 border border-border">
                    {project.architecture}
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <h3 className="font-semibold text-foreground text-sm">
                      Challenges Solved
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            className="text-primary"
          >
            {expanded ? "Show Less" : "View Details"}
            <ArrowRight
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                expanded && "rotate-90"
              )}
            />
          </Button>
          {project.demo && (
            <Button variant="gradient-outline" size="sm" asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
