"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/data/profile";

export function CertificationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 border-y border-border" aria-label="Certifications">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Certifications
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Industry-Recognized{" "}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} text-white text-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300`}
              >
                {cert.badge}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors duration-200">
                  {cert.name}
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">{cert.level}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
              </div>
              <Badge variant="outline" className="text-xs">{cert.year}</Badge>
              <ExternalLink className="absolute top-3 right-3 h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
