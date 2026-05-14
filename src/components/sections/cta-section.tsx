"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Calendar, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";

export function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-cyan-500/10" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Availability badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for Remote Opportunities
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Build Something{" "}
            <span className="gradient-text">Exceptional?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Whether you&apos;re looking for a senior engineer to join your team,
            a solutions architect to design your next system, or a technical
            consultant to solve a complex problem — let&apos;s talk.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="gradient" size="xl" asChild>
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                Get In Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a
                href={profile.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </a>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a href="/Saad-Bilal-Resume.pdf" download>
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "24h", label: "Response Time" },
              { value: "PKT", label: "Timezone" },
              { value: "Remote", label: "Work Style" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
