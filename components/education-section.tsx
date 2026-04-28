import Image from "next/image";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { education, sections } from "@/lib/portfolio-data";

type EducationPanelProps = {
  className?: string;
};

export function EducationSection() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden border-b border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-[#080807]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(118deg,rgba(219,39,119,0.065),transparent_34%,rgba(219,39,119,0.04)_74%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(118deg,rgba(244,114,182,0.11),transparent_34%,rgba(244,114,182,0.055)_74%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container>
        <EducationPanel />
      </Container>
    </section>
  );
}

export function EducationPanel({ className = "" }: EducationPanelProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      <div>
        <SectionHeading {...sections.education} />
        <div className="mt-8 h-px w-24 bg-gradient-to-r from-pink-600 via-pink-400 to-transparent dark:from-pink-300 dark:via-pink-200" />
      </div>

      <div className="reveal reveal-delay-1 stagger-list space-y-5">
        {education.map((item) => (
          <article
            key={item.school}
            className="premium-card card-lift overflow-hidden rounded-xl border border-neutral-950/10 bg-white/90 shadow-sm backdrop-blur dark:border-pink-300/25 dark:bg-[#080807]/90"
          >
            <div
              aria-hidden="true"
              className="h-1.5 bg-gradient-to-r from-pink-600 via-pink-500 to-transparent dark:from-pink-300 dark:via-pink-400"
            />
            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="grid size-14 shrink-0 place-items-center rounded-xl border border-pink-700/20 bg-white p-2 shadow-sm shadow-neutral-950/5 dark:border-pink-300/25">
                    <Image
                      src={item.logo.src}
                      alt={item.logo.alt}
                      width={56}
                      height={56}
                      unoptimized
                      className="max-h-10 w-auto"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-7 text-neutral-950 dark:text-[#fff4e6]">
                      {item.school}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-[#d7d0c8]">
                      {item.major}
                    </p>
                  </div>
                </div>
                <p className="inline-flex h-fit w-fit shrink-0 rounded-full border border-pink-700/25 bg-pink-50 px-3 py-1 font-mono text-xs font-semibold uppercase leading-5 text-pink-700 sm:justify-self-end sm:text-right dark:border-pink-300/25 dark:bg-pink-400/10 dark:text-pink-200">
                  {item.period}
                </p>
              </div>

              <div className="mt-5 inline-flex rounded-xl border border-pink-700/20 bg-pink-50/70 px-4 py-3 text-sm font-semibold text-neutral-800 dark:border-pink-300/20 dark:bg-pink-400/10 dark:text-[#fff4e6]">
                Grade: {item.grade}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
