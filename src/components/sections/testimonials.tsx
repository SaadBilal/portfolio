"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Michael Chen",
    role: "CTO",
    company: "YouAttest",
    avatar: "MC",
    color: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "Saad is one of the most technically capable engineers I've worked with. He architected our entire microservices platform from scratch, and it's been running flawlessly at scale. His ability to translate complex business requirements into elegant technical solutions is exceptional.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "VP of Engineering",
    company: "HealthTech Solutions",
    avatar: "SW",
    color: "from-green-500 to-emerald-500",
    rating: 5,
    text: "Saad delivered our HIPAA-compliant platform on time and exceeded every technical requirement. His deep knowledge of AWS and security best practices gave us confidence that patient data was protected. He's the kind of engineer who makes the whole team better.",
  },
  {
    id: 3,
    name: "Ahmed Al-Rashid",
    role: "Founder & CEO",
    company: "Tabibi Health",
    avatar: "AA",
    color: "from-teal-500 to-cyan-500",
    rating: 5,
    text: "Working with Saad was a game-changer for our startup. He built our telemedicine platform from the ground up, handling everything from WebRTC video infrastructure to AI-powered triage. His technical leadership helped us scale to 100K+ patients.",
  },
  {
    id: 4,
    name: "Lars Eriksson",
    role: "Head of Product",
    company: "Swipbox",
    avatar: "LE",
    color: "from-orange-500 to-amber-500",
    rating: 5,
    text: "Saad built our IoT backend that manages thousands of smart lockers across 8 countries. The system has been rock-solid since launch. His expertise in real-time systems and AWS IoT Core was exactly what we needed for our complex logistics platform.",
  },
  {
    id: 5,
    name: "David Park",
    role: "Engineering Manager",
    company: "Mindworks",
    avatar: "DP",
    color: "from-purple-500 to-violet-500",
    rating: 5,
    text: "Saad is a rare engineer who combines deep technical expertise with strong communication skills. He mentored three junior engineers on our team who are now mid-level engineers. His code reviews are thorough, constructive, and educational.",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  // Auto-advance
  React.useEffect(() => {
    if (!inView) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [inView]);

  const t = testimonials[current];

  return (
    <section
      ref={ref}
      className="section-padding bg-muted/20"
      aria-label="Testimonials"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What{" "}
            <span className="gradient-text">Leaders Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feedback from CTOs, founders, and engineering managers I&apos;ve
            worked with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Main card */}
          <div className="relative rounded-2xl border border-border bg-card p-8 md:p-10 overflow-hidden min-h-[280px]">
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color}`} />

            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.35 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon-sm" onClick={prev} aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon-sm" onClick={next} aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
