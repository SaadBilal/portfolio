import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { AboutContent } from "@/components/pages/about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Saad Bilal — Senior Full-Stack Engineer, Solutions Architect, and AWS Cloud Expert. Engineering philosophy, journey, and expertise.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  );
}
