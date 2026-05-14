import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ExperienceContent } from "@/components/pages/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Saad Bilal's professional experience — Senior Full-Stack Engineer at YouAttest, HealthTech, and more. Detailed timeline with impact metrics.",
};

export default function ExperiencePage() {
  return (
    <PageLayout>
      <ExperienceContent />
    </PageLayout>
  );
}
