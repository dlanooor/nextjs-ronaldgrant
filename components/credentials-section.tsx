import { Container } from "@/components/container";
import { DownloadsPanel } from "@/components/downloads-section";
import { EducationPanel } from "@/components/education-section";

export function CredentialsSection() {
  return (
    <div className="border-b border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-neutral-950">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-14">
        <section id="education" className="scroll-mt-24">
          <EducationPanel />
        </section>
        <section id="downloads" className="scroll-mt-24">
          <DownloadsPanel compact />
        </section>
      </Container>
    </div>
  );
}
