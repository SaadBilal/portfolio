"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";

const roles = [
  "Senior Full-Stack Engineer",
  "LLMs, RAG, Agentic Architectures Designer",
  "Building Production-Grade AI Platforms",
  "Solutions Architect",
  "AWS Cloud Expert",
  "Backend Specialist",
  "Technical Leader"
];

function TypingText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const target = texts[currentIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < target.length) {
            setCurrentText(target.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="terminal-cursor" />
    </span>
  );
}

const techBadges = [
  { label: "Python", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { label: "FastAPI", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { label: "AWS", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { label: "Kubernetes", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { label: "Docker", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
  { label: "PostgreSQL", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  { label: "Terraform", color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for Remote Opportunities
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4 leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Saad Bilal</span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 h-12 flex items-center justify-center"
          >
            <TypingText texts={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            {profile.subheadline}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10"
          >
            <MapPin className="h-4 w-4 text-primary" />
            <span>{profile.location}</span>
            <span className="text-border">·</span>
            <span>{profile.timezone}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="gradient" size="lg" asChild>
              <Link href="/projects">
                <Sparkles className="h-4 w-4" />
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Zap className="h-4 w-4" />
                Let&apos;s Talk
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="/Saad-Bilal-Resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span className="text-border">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span className="text-border">·</span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Send email"
            >
              <Terminal className="h-4 w-4" />
              <span className="hidden sm:inline">{profile.email}</span>
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${badge.color}`}
              >
                {badge.label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
