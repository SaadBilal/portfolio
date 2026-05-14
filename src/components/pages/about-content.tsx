"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User,
  MapPin,
  Calendar,
  Code2,
  Lightbulb,
  Target,
  Heart,
  Globe,
  Award,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { profile, certifications } from "@/lib/data/profile";
import { skillCategories } from "@/lib/data/skills";

function SectionHeader({
  icon: Icon,
  label,
  title,
  description,
}: {
  icon: React.ElementType;
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Icon className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium text-primary uppercase tracking-wider">
          {label}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}

function SkillBar({ name, level, years }: { name: string; level: number; years: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground text-xs">{years}yr</span>
      </div>
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
        />
      </div>
    </div>
  );
}

export function AboutContent() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: certsRef, inView: certsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const philosophyPoints = [
    {
      icon: Code2,
      title: "Engineering First",
      description:
        "I believe in writing code that's readable, maintainable, and testable. Clean architecture isn't a luxury — it's what makes systems survive.",
    },
    {
      icon: Target,
      title: "Business Impact",
      description:
        "Technology serves business goals. I always connect engineering decisions to measurable outcomes: performance, cost, reliability, and user experience.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description:
        "The tech landscape evolves fast. I invest in staying current — not chasing trends, but deeply understanding what matters and why.",
    },
    {
      icon: Heart,
      title: "Team Multiplier",
      description:
        "The best engineers make their teams better. I mentor, document, review, and share knowledge because individual brilliance doesn't scale.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef}
        className="section-padding relative overflow-hidden"
        aria-label="About hero"
      >
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  About Me
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Engineer. Architect.{" "}
                <span className="gradient-text">Problem Solver.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {profile.bio}
              </p>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
            >
              {[
                { icon: MapPin, label: "Location", value: profile.location },
                { icon: Calendar, label: "Experience", value: "7+ Years" },
                { icon: Globe, label: "Work Style", value: "Remote Global" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-16"
            >
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                <blockquote className="text-xl md:text-2xl font-semibold text-foreground italic leading-relaxed">
                  &ldquo;{profile.philosophy}&rdquo;
                </blockquote>
              </div>
            </motion.div>

            {/* Engineering philosophy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {philosophyPoints.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Quick Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.funFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <span className="text-primary font-bold text-lg">→</span>
                    <span className="text-sm text-muted-foreground">{fact}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skillsRef}
        className="section-padding bg-muted/20"
        aria-label="Skills and expertise"
      >
        <div className="container-custom">
          <SectionHeader
            icon={Code2}
            label="Skills"
            title={
              <>
                Technical{" "}
                <span className="gradient-text">Expertise</span>
              </>
            }
            description="Deep expertise across the full stack — from system design to deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.slice(0, 4).map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.gradient} text-white`}
                  >
                    <span className="text-sm font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.skills.slice(0, 5).map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      years={skill.years}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        ref={certsRef}
        className="section-padding"
        aria-label="Certifications"
      >
        <div className="container-custom">
          <SectionHeader
            icon={Award}
            label="Certifications"
            title={
              <>
                Professional{" "}
                <span className="gradient-text">Certifications</span>
              </>
            }
            description="Industry-recognized credentials validating cloud and engineering expertise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={certsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-6 text-center hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`text-4xl mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}
                >
                  {cert.badge}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-primary font-medium mb-1">
                  {cert.level}
                </p>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <Badge variant="outline" className="mt-3 text-xs">
                  {cert.year}
                </Badge>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-muted/20" aria-label="Languages">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Languages
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {profile.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-sm">
                      {lang.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {lang.level}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
