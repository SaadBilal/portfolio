import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/page-layout";
import { ContactContent } from "@/components/pages/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Saad Bilal for remote engineering roles, consulting, or technical collaboration. Available for senior full-stack and cloud architecture opportunities.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactContent />
    </PageLayout>
  );
}
