"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";
import { getDateRange, getDuration } from "@/lib/utils";

export function ExperiencePreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section-padding bg-muted/20"
      aria-label="Work experience preview"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            7+ Years of{" "}
            <span className="gradient-text">Engineering Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprise — building systems that scale, teams
            that grow, and products that matter.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.slice(0, 3).map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-5">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-background shadow-glow`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xs font-bold`}
                        >
                          {exp.logo}
                        </div>
                        <h3 className="font-bold text-foreground">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <Badge variant="success" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-primary font-medium text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{getDateRange(exp.startDate, exp.endDate)}</span>
                        <span className="text-muted-foreground/50">·</span>
                        <span>{getDuration(exp.startDate, exp.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Impact metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.impact.slice(0, 3).map((item) => (
                      <div
                        key={item.metric}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20"
                      >
                        <span className="text-xs font-bold text-primary">
                          {item.value}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs bg-muted text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="px-2 py-0.5 rounded-md text-xs bg-muted text-muted-foreground border border-border">
                        +{exp.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/experience">
              Full Experience Timeline
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
