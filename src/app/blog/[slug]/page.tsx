import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageLayout } from "@/components/layout/page-layout";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Saad Bilal"],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category ||
          p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, 3);

  return (
    <PageLayout>
      <article className="section-padding" aria-label="Blog post">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Back */}
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Header */}
            <header className="mb-12">
              <Badge variant="tech" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-foreground">
                    {post.author.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground border border-border"
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Content placeholder */}
            <div className="rounded-xl border border-border bg-muted/30 p-8 text-center">
              <div className="text-4xl mb-4">✍️</div>
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Full Article Coming Soon
              </h2>
              <p className="text-muted-foreground">
                This article is being written. Get in touch to be notified when
                it&apos;s published.
              </p>
              <Button variant="gradient" className="mt-6" asChild>
                <Link href="/contact">Get Notified</Link>
              </Button>
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  All Articles
                </Link>
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <Badge variant="tech" className="text-xs mb-2">
                        {related.category}
                      </Badge>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <div className="text-xs text-muted-foreground">
                        {related.readingTime}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
