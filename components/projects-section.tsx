import type { CSSProperties, SVGProps } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { projectArchive, projects, sections } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <section
      id="works"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-32 dark:bg-[#080807]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(219,39,119,0.07),transparent_30%,rgba(245,158,11,0.055)_68%,transparent),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:100%_100%,72px_72px,72px_72px] dark:bg-[linear-gradient(125deg,rgba(244,114,182,0.12),transparent_30%,rgba(251,191,36,0.08)_68%,transparent),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)]"
      />
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading {...sections.projects} />
            <div className="mt-8 h-px w-28 bg-gradient-to-r from-pink-600 via-amber-500 to-transparent dark:from-pink-300 dark:via-amber-300" />
          </div>
          <a
            href={projectArchive.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-xl border border-neutral-950/15 bg-white/80 px-5 text-sm font-semibold text-neutral-950 shadow-sm shadow-neutral-950/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-pink-700/30 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-600 dark:border-pink-300/20 dark:bg-white/5 dark:text-[#fff4e6] dark:hover:border-pink-300/35 dark:hover:bg-[#21191d] dark:focus-visible:ring-pink-400"
          >
            <span>{projectArchive.label}</span>
            <ExternalLinkIcon className="size-3.5 shrink-0" />
          </a>
        </div>

        <div className="reveal reveal-delay-1 stagger-list mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {projects.map((project, index) => {
            const accent = projectAccent(index);

            return (
              <article
                key={`${project.company.name}-${project.title}`}
                style={
                  {
                    "--card-accent": accent.color,
                    "--card-accent-glow": accent.glow,
                    "--card-accent-shadow": accent.shadow,
                    "--card-accent-border": accent.border,
                    "--card-accent-soft": accent.soft,
                    "--card-accent-link": accent.link,
                    "--card-accent-button": accent.button,
                  } as CSSProperties
                }
                className="premium-card accent-card card-lift group flex min-h-full flex-col overflow-hidden rounded-xl border border-neutral-950/10 bg-white/90 shadow-sm backdrop-blur dark:border-[color:var(--card-accent-border)] dark:bg-[#11100f]/90"
              >
                <div
                  className="h-1.5 bg-gradient-to-r from-[color:var(--card-accent)] via-[color:var(--card-accent)] to-transparent"
                  style={{ backgroundColor: accent.color }}
                />
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div className="accent-logo grid size-14 shrink-0 place-items-center rounded-xl border border-[color:var(--card-accent-border)] bg-white p-2 shadow-sm shadow-neutral-950/5 dark:bg-white">
                      <Image
                        src={project.company.logo.src}
                        alt={project.company.logo.alt}
                        width={56}
                        height={56}
                        unoptimized
                        className="max-h-10 w-auto"
                      />
                    </div>
                    <span className="accent-pill rounded-full border border-[color:var(--card-accent-border)] bg-[color:var(--card-accent-soft)] px-3 py-1 text-xs font-semibold text-[color:var(--card-accent-button)] dark:text-[color:var(--card-accent-link)]">
                      {project.company.name}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-7 text-neutral-950 dark:text-[#fff4e6]">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 border-l border-[color:var(--card-accent-border)] pl-4 text-sm leading-7 text-neutral-600 dark:text-[#d7d0c8]">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="accent-chip rounded-lg border border-transparent bg-neutral-100 px-3 py-2 text-xs font-semibold text-neutral-700 transition dark:bg-[#1d1a18] dark:text-[#e5ded6]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.company.name} ${link.label}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[color:var(--card-accent-border)] bg-[color:var(--card-accent-soft)] px-3 text-sm font-semibold text-[color:var(--card-accent-button)] shadow-sm shadow-neutral-950/5 transition hover:-translate-y-0.5 hover:bg-[color:var(--card-accent)] hover:text-white hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--card-accent-border)] dark:bg-white/5 dark:text-[color:var(--card-accent-link)] dark:hover:bg-[color:var(--card-accent)] dark:hover:text-white"
                      >
                        <span>{link.label}</span>
                        <ExternalLinkIcon className="size-3.5 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function projectAccent(index: number) {
  const accents = [
    {
      color: "#db2777",
      glow: "rgb(219 39 119 / 0.22)",
      shadow: "rgb(219 39 119 / 0.42)",
      border: "rgb(219 39 119 / 0.45)",
      soft: "rgb(219 39 119 / 0.15)",
      link: "#f472b6",
      button: "#be185d",
    },
    {
      color: "#2563eb",
      glow: "rgb(37 99 235 / 0.22)",
      shadow: "rgb(37 99 235 / 0.42)",
      border: "rgb(37 99 235 / 0.45)",
      soft: "rgb(37 99 235 / 0.15)",
      link: "#60a5fa",
      button: "#1d4ed8",
    },
    {
      color: "#f59e0b",
      glow: "rgb(245 158 11 / 0.2)",
      shadow: "rgb(245 158 11 / 0.38)",
      border: "rgb(245 158 11 / 0.45)",
      soft: "rgb(245 158 11 / 0.15)",
      link: "#fbbf24",
      button: "#b45309",
    },
  ];

  return accents[index % accents.length];
}

function ExternalLinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5.25 4.25H11.75V10.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 4.5L4.25 11.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
