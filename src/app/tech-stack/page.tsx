import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { TechStackContent } from "@/components/pages/tech-stack-content";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Saad Bilal's complete technical skill set — Python, FastAPI, AWS, React, Kubernetes, Docker, and more. Proficiency levels and years of experience.",
};

export default function TechStackPage() {
  return (
    <PageLayout>
      <TechStackContent />
    </PageLayout>
  );
}
