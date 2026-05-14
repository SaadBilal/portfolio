"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Code2,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";
import { getDateRange, getDuration } from "@/lib/utils";

export function ExperienceContent() {
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  return (
    <div>
      {/* Header */}
      <section
        ref={headerRef}
        className="section-padding relative overflow-hidden"
        aria-label="Experience header"
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
              <Briefcase className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Career Timeline
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional{" "}
              <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              7+ years of building enterprise systems, leading engineering teams,
              and delivering measurable business impact across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32" aria-label="Experience timeline">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent hidden md:block" />

              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={exp.id} experience={exp} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceCard({
  experience: exp,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-shrink-0 w-16 items-start justify-center pt-8">
        <div
          className={`w-5 h-5 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-background shadow-glow z-10`}
        />
      </div>

      {/* Card */}
      <div className="flex-1 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        {/* Gradient top bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color}`} />

        <div className="p-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} text-white font-bold text-sm shadow-md`}
              >
                {exp.logo}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-xl font-bold text-foreground">
                    {exp.company}
                  </h2>
                  {exp.current && (
                    <Badge variant="success" className="text-xs">
                      Current
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {exp.type}
                  </Badge>
                </div>
                <p className="text-primary font-semibold mt-0.5">{exp.role}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground lg:text-right">
              <div className="flex items-center gap-1.5 lg:justify-end">
                <Calendar className="h-3.5 w-3.5" />
                <span>{getDateRange(exp.startDate, exp.endDate)}</span>
                <span className="text-muted-foreground/50">·</span>
                <span className="font-medium text-foreground">
                  {getDuration(exp.startDate, exp.endDate)}
                </span>
              </div>
              <div className="flex items-center gap-1.5 lg:justify-end">
                <MapPin className="h-3.5 w-3.5" />
                <span>{exp.location}</span>
                {exp.remote && (
                  <Badge variant="info" className="text-xs">
                    Remote
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-8">
            {exp.description}
          </p>

          {/* Impact metrics */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">
                Key Impact
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {exp.impact.map((item) => (
                <div
                  key={item.metric}
                  className="rounded-xl bg-primary/5 border border-primary/10 p-3 text-center"
                >
                  <div className="text-lg font-bold gradient-text">
                    {item.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {item.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Responsibilities */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">
                  Responsibilities
                </h3>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <h3 className="font-semibold text-foreground text-sm">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-2">
                {exp.achievements.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-4 w-4 text-primary" />
              <h3 className="font-semibold text-foreground text-sm">
                Technologies
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
