"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding" aria-label="Featured projects">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layers className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects That{" "}
            <span className="gradient-text">Define My Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade systems serving millions of users. Each project
            represents real engineering challenges solved at scale.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gradient header */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-6">
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="tech" className="text-xs">
                    {project.status}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-primary/80 font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {project.metrics.slice(0, 4).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg bg-muted/50 p-2.5 text-center"
                    >
                      <div className="text-sm font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-xs bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded-md text-xs bg-muted text-muted-foreground border border-border">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2">
                  <Button variant="gradient-outline" size="sm" asChild>
                    <Link href={`/projects#${project.id}`}>
                      View Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button variant="ghost" size="icon-sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} demo`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="icon-sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
