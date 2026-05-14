import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { BlogContent } from "@/components/pages/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles by Saad Bilal on AWS, system design, FastAPI, Python, Kubernetes, and cloud architecture.",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <BlogContent />
    </PageLayout>
  );
}
