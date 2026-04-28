import type { CSSProperties } from "react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { about, sections } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-32 dark:bg-[#080807]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(219,39,119,0.07),transparent_34%,rgba(16,185,129,0.06)_76%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,64px_64px,64px_64px] dark:bg-[linear-gradient(120deg,rgba(244,114,182,0.12),transparent_34%,rgba(167,243,208,0.08)_76%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container className="grid gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative">
          <SectionHeading {...sections.about} />
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-pink-600 via-emerald-500 to-transparent dark:from-pink-300 dark:via-emerald-200" />
        </div>

        <div className="reveal reveal-delay-1 space-y-9">
          <div className="space-y-5 border-l border-pink-700/20 pl-5 text-base leading-8 text-neutral-600 sm:pl-7 sm:text-lg dark:border-pink-300/20 dark:text-[#d7d0c8]">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="stagger-list grid gap-3 sm:grid-cols-2">
            {about.highlights.map((highlight, index) => {
              const accent = aboutHighlightAccent(index);

              return (
                <li
                  key={highlight}
                  style={
                    {
                      "--about-accent": accent.color,
                      "--about-accent-soft": accent.soft,
                      "--about-accent-border": accent.border,
                    } as CSSProperties
                  }
                  className="premium-card card-lift rounded-xl border border-neutral-950/10 bg-white/85 p-5 text-sm font-medium leading-6 text-neutral-800 shadow-sm backdrop-blur dark:border-[color:var(--about-accent-border)] dark:bg-[#151412]/85 dark:text-[#f2e7dc]"
                >
                  <span className="mb-4 inline-flex size-8 items-center justify-center rounded-lg border border-[color:var(--about-accent-border)] bg-[color:var(--about-accent-soft)] font-mono text-xs font-semibold text-[color:var(--about-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="block">{highlight}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function aboutHighlightAccent(index: number) {
  const accents = [
    {
      color: "#db2777",
      soft: "rgb(219 39 119 / 0.12)",
      border: "rgb(219 39 119 / 0.28)",
    },
    {
      color: "#059669",
      soft: "rgb(5 150 105 / 0.12)",
      border: "rgb(5 150 105 / 0.28)",
    },
    {
      color: "#2563eb",
      soft: "rgb(37 99 235 / 0.12)",
      border: "rgb(37 99 235 / 0.28)",
    },
    {
      color: "#d97706",
      soft: "rgb(217 119 6 / 0.12)",
      border: "rgb(217 119 6 / 0.28)",
    },
  ];

  return accents[index % accents.length];
}
