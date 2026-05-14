import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ProjectsContent } from "@/components/pages/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Saad Bilal's portfolio of enterprise projects — YouAttest, Swipbox, Tabibi, NCache, and more. Real systems serving millions of users.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  );
}
