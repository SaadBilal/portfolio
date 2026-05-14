"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Tag,
  Search,
  Calendar,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogContent() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true });

  const filteredPosts = React.useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured);

  return (
    <div>
      {/* Header */}
      <section
        ref={headerRef}
        className="section-padding relative overflow-hidden"
        aria-label="Blog header"
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
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Engineering Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technical{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into cloud architecture, system design, Python
              engineering, and lessons learned building production systems at
              scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="pb-12" aria-label="Featured post">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-yellow-500">
                      Featured Article
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <Badge variant="tech" className="mb-3">
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {featuredPost.readingTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button variant="gradient" size="lg" className="group-hover:shadow-glow transition-shadow duration-300">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="pb-8 sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container-custom pt-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-border bg-muted/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
                aria-label="Search blog posts"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {blogCategories.map((cat) => (
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

      {/* Posts grid */}
      <section className="py-12 pb-32" aria-label="Blog posts">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No articles found
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

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block h-full rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-cyan-500" />
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="tech" className="text-xs">
              {post.category}
            </Badge>
            {post.featured && (
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
            )}
          </div>

          <h2 className="font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground border border-border"
              >
                <Tag className="h-2.5 w-2.5" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              {post.readingTime}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
