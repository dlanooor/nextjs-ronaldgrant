import { Container } from "@/components/container";
import { DownloadsPanel } from "@/components/downloads-section";
import { EducationPanel } from "@/components/education-section";

export function CredentialsSection() {
  return (
    <div className="relative isolate overflow-hidden border-b border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-[#080807]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(118deg,rgba(219,39,119,0.065),transparent_34%,rgba(219,39,119,0.04)_74%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(118deg,rgba(244,114,182,0.11),transparent_34%,rgba(244,114,182,0.055)_74%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
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
