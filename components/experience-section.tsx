import type { CSSProperties } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience, sections } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden border-y border-neutral-950/10 bg-[#f3f6f1] py-20 sm:py-32 dark:border-white/10 dark:bg-[#11100f]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(118deg,rgba(219,39,119,0.065),transparent_32%,rgba(5,150,105,0.055)_72%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(118deg,rgba(244,114,182,0.12),transparent_32%,rgba(167,243,208,0.075)_72%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container className="grid gap-10 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading {...sections.experience} />
          <div className="mt-8 h-px w-28 bg-gradient-to-r from-pink-600 via-emerald-500 to-transparent dark:from-pink-300 dark:via-emerald-200" />
        </div>

        <div
          role="region"
          aria-label="Experience timeline"
          tabIndex={0}
          className="experience-scroll reveal reveal-delay-1 max-h-[560px] overflow-y-auto pr-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 sm:max-h-[640px] lg:max-h-[720px] dark:focus-visible:ring-pink-400"
        >
          <div className="stagger-list relative space-y-5 border-l border-pink-700/20 pb-2 pl-5 sm:pl-6 dark:border-pink-300/20">
            {experience.map((item) => {
              const accent = experienceAccent();

              return (
                <div
                  key={`${item.company}-${item.role}`}
                  style={
                    {
                      "--experience-accent": accent.color,
                      "--experience-accent-soft": accent.soft,
                      "--experience-accent-border": accent.border,
                    } as CSSProperties
                  }
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-6 grid size-5 place-items-center rounded-full border border-[color:var(--experience-accent-border)] bg-white shadow-sm dark:bg-[#11100f]"
                  >
                    <span className="size-2 rounded-full bg-[color:var(--experience-accent)]" />
                  </span>
                  <article className="premium-card card-lift overflow-hidden rounded-xl border border-neutral-950/10 bg-white/90 shadow-sm backdrop-blur dark:border-[color:var(--experience-accent-border)] dark:bg-[#080807]/90">
                    <div className="h-1.5 bg-gradient-to-r from-[color:var(--experience-accent)] via-[color:var(--experience-accent)] to-transparent" />
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6">
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold leading-7 text-neutral-950 dark:text-[#fff4e6]">
                            {item.role}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-[#d7d0c8]">
                            {item.company}
                          </p>
                        </div>
                        <div className="shrink-0 sm:pt-0.5 sm:text-right">
                          <p className="inline-flex rounded-full border border-[color:var(--experience-accent-border)] bg-[color:var(--experience-accent-soft)] px-3 py-1 font-mono text-xs font-semibold uppercase leading-5 text-[color:var(--experience-accent)]">
                            {item.period}
                          </p>
                          <p className="mt-1 text-xs font-medium leading-5 text-neutral-500 dark:text-[#bdb2aa]">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 border-l border-[color:var(--experience-accent-border)] pl-4 text-sm leading-7 text-neutral-600 dark:text-[#d7d0c8]">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function experienceAccent() {
  return {
    color: "#db2777",
    soft: "rgb(219 39 119 / 0.12)",
    border: "rgb(219 39 119 / 0.3)",
  };
}
