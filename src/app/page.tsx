import { PageLayout } from "@/components/layout/page-layout";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { TechShowcase } from "@/components/sections/tech-showcase";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { TerminalSection } from "@/components/sections/terminal-section";
import { Testimonials } from "@/components/sections/testimonials";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { GitHubStats } from "@/components/sections/github-stats";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Metrics />
      <TechShowcase />
      <FeaturedProjects />
      <ExperiencePreview />
      <TerminalSection />
      <Testimonials />
      <CertificationsSection />
      <GitHubStats />
      <BlogPreview />
      <CTASection />
    </PageLayout>
  );
}
