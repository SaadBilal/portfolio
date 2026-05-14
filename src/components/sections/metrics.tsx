"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { metrics } from "@/lib/data/profile";

function parseMetricValue(value: string): { number: number; prefix: string; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  if (!match) return { number: 0, prefix: "", suffix: value };
  return {
    prefix: match[1] || "",
    number: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

export function Metrics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 border-y border-border bg-muted/20"
      aria-label="Career metrics"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, i) => {
            const { number, prefix, suffix } = parseMetricValue(metric.value);
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {prefix}
                  {inView ? (
                    <CountUp
                      end={number}
                      duration={2}
                      decimals={number % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    "0"
                  )}
                  {suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
